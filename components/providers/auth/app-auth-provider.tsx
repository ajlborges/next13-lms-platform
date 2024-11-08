"use client";
import React, { createContext, useState, useContext, ReactNode } from 'react';
import SignIn from '../../../app/(auth)/(routes)/sign-in/[[...sign-in]]/sign-in';

interface User {
  id: string; 
  userId: string; 
  firstName: string; 
  lastName: string; 
  phone: string; 
  password: string; 
  imageUrl?: string | null; 
  email: string; 
  role: 'STUDENT' | 'ADMIN' | 'TEACHER'; 
  createdAt: string; 
  updatedAt: string; 
  lastLogin?: string | null; 
  isStaff: boolean; 
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AppAuthProvider');
  }
  return context;
};

interface AppAuthProviderProps {
  children: ReactNode;
}

export const AppAuthProvider = ({ children }: AppAuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (user: any, token: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        console.log('authprovideloginexec')
        if (user && token) {
            setUser(user);
            setIsAuthenticated(true);
            localStorage.setItem('auth_token', token); // Optionally store the token in localStorage
        resolve(true); // Return true if login is successful
        } else {
        resolve(false); // Return false if login fails
        }
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth_token');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      <SignIn login={login} />
      {children}
    </AuthContext.Provider>
  );
};


// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface User {
//   username: string;
//   // Add other user properties as needed, like email, roles, etc.
// }

// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   login: (username: string, password: string) => Promise<boolean>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AppAuthProvider');
//   }
//   return context;
// };

// interface AppAuthProviderProps {
//   children: ReactNode;
// }

// export const AppAuthProvider = ({ children }: AppAuthProviderProps) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//   const login = async (username: string, password: string) => {
//     // Fake authentication for example purposes
//     if (username === 'admin' && password === 'password') {
//       setUser({ username });
//       setIsAuthenticated(true);
//       return true;
//     } else {
//       // Optionally, handle incorrect login here
//       return false;
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
