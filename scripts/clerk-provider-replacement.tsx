import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the user data and auth state types
interface User {
  id: string;
  email: string;
  firstName: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isSignedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to access auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component to manage auth state and API interactions
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on initial load (e.g., from cookies or localStorage)
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      fetchUserData(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  // Function to fetch user data from the backend API (for validating the token)
  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch('/api/verify-token', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error('Invalid token');
      }

      const data = await response.json();
      setUser(data.user); // Set user data from backend
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setIsLoading(false);
    }
  };

  // Login function - interact with backend to authenticate user
  const login = async (email: string, password: string) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error('Invalid credentials');
    }

    const data = await res.json();
    localStorage.setItem('auth_token', data.token); // Store the token in localStorage
    setUser(data.user); // Set user data
  };

  // Register function - interact with backend to create a new user
  const register = async (email: string, password: string) => {
    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      throw new Error('Registration failed');
    }

    const data = await res.json();
    localStorage.setItem('auth_token', data.token); // Store the token
    setUser(data.user); // Set user data
  };

  // Logout function - clear user data and token
  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null); // Clear user data
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, isSignedIn: !!user, login, logout, register, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
