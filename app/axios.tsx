import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',  
  timeout: 5000,  
  headers: {
    'Content-Type': 'application/json',  
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Example: Add Authorization header if token is available
    const token = localStorage.getItem('authToken'); // or use context/store
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // handle unauthorized access, e.g., logout user
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
