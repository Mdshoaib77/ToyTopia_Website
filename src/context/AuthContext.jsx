// // // // // src/context/AuthContext.js
// // // // import React, { createContext, useState, useContext } from 'react';

// // // // // Create AuthContext
// // // // const AuthContext = createContext();

// // // // // Create a custom hook to use AuthContext
// // // // export const useAuth = () => useContext(AuthContext);

// // // // // AuthProvider component to provide authentication state
// // // // export const AuthProvider = ({ children }) => {
// // // //   const [user, setUser] = useState(null); // Initialize user state (null = not logged in)

// // // //   const login = (userData) => setUser(userData); // Log in
// // // //   const logout = () => setUser(null); // Log out

// // // //   return (
// // // //     <AuthContext.Provider value={{ user, login, logout }}>
// // // //       {children}
// // // //     </AuthContext.Provider>
// // // //   );
// // // // };


// // // // src/context/AuthContext.js
// // // import React, { createContext, useState, useContext } from 'react';

// // // // Create AuthContext
// // // const AuthContext = createContext();

// // // // Create a custom hook to use AuthContext
// // // export const useAuth = () => useContext(AuthContext);

// // // // AuthProvider component to provide authentication state
// // // export const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(null); // Initial user state

// // //   const login = (userData) => setUser(userData); // Login function
// // //   const logout = () => setUser(null); // Logout function

// // //   return (
// // //     <AuthContext.Provider value={{ user, login, logout }}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };


// // // src/context/AuthContext.js
// // import React, { createContext, useState, useContext } from 'react';

// // // Create AuthContext to manage authentication state
// // const AuthContext = createContext();

// // // Custom hook to access AuthContext
// // export const useAuth = () => useContext(AuthContext);

// // // AuthProvider to provide user data to the entire app
// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null); // Initial state (user is null when not logged in)

// //   const login = (userData) => setUser(userData); // Log in the user
// //   const logout = () => setUser(null); // Log out the user

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children} {/* Render children components with access to auth state */}
// //     </AuthContext.Provider>
// //   );
// // };


// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth'; // If you're using Firebase

// // Create Context
// const AuthContext = createContext();

// // Custom Hook to use AuthContext
// export const useAuth = () => useContext(AuthContext);

// // AuthProvider to manage authentication state globally
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const auth = getAuth(); // Firebase auth instance
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe(); // Cleanup the listener
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config'; // Firebase configuration

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user if logged in
    });

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
