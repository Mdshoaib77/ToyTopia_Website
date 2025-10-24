// // // src/Components/ProtectedRoute.jsx
// // import React from 'react';
// // import { Redirect } from 'react-router-dom'; // React Router v6 uses Navigate
// // import { useAuth } from '../context/AuthContext'; // Assuming useAuth provides current user data

// // const ProtectedRoute = ({ children }) => {
// //   const { user } = useAuth(); // Replace this with your authentication context logic

// //   if (!user) {
// //     return <Redirect to="/login" />; // If not authenticated, redirect to login
// //   }

// //   return children; // If authenticated, render the protected route's content
// // };

// // export default ProtectedRoute;


// // src/Components/ProtectedRoute.jsx
// import React from 'react';
// import { Redirect } from 'react-router-dom';  // In React Router v6, use Navigate instead of Redirect
// import { useAuth } from '../context/AuthContext';  // Correct the path to match the location of AuthContext.js

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();  // Use the custom hook to access the current user

//   if (!user) {
//     return <Redirect to="/login" />;  // If user is not authenticated, redirect to login
//   }

//   return children;  // If user is authenticated, render the protected content
// };

// export default ProtectedRoute;



// src/Components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config'; // Ensure the path is correct

const ProtectedRoute = ({ children }) => {
  const currentUser = getAuth(auth).currentUser; // Check if the user is authenticated
  
  if (!currentUser) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the children components if authenticated
};

export default ProtectedRoute;
a