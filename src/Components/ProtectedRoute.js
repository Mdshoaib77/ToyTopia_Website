// // // // // // import React from 'react';
// // // // // // import { Navigate } from 'react-router-dom';
// // // // // // import { useAuth } from '../context/AuthContext';

// // // // // // const ProtectedRoute = ({ children }) => {
// // // // // //   const { user } = useAuth(); // Get the user state from AuthContext

// // // // // //   if (!user) {
// // // // // //     // If user is not logged in, redirect to login page
// // // // // //     return <Navigate to="/login" replace />;
// // // // // //   }

// // // // // //   return children; // If user is logged in, render the protected content
// // // // // // };

// // // // // // export default ProtectedRoute;


// // // // // // ProtectedRoute.js
// // // // // import React from 'react';
// // // // // import { Navigate } from 'react-router-dom';
// // // // // import { getAuth } from 'firebase/auth';
// // // // // import { auth } from '../Firebase/firebase-config'; // Firebase auth config

// // // // // const ProtectedRoute = ({ children }) => {
// // // // //   const currentUser = getAuth(auth).currentUser; // Check if the user is authenticated
  
// // // // //   if (!currentUser) {
// // // // //     return <Navigate to="/login" replace />;
// // // // //   }

// // // // //   return children; // If user is authenticated, render the child component
// // // // // };

// // // // // export default ProtectedRoute;


// // // // import React from 'react';
// // // // import { Navigate } from 'react-router-dom';
// // // // import { getAuth } from 'firebase/auth';
// // // // import { auth } from '../Firebase/firebase-config'; // Firebase auth config

// // // // const ProtectedRoute = ({ children }) => {
// // // //   const currentUser = getAuth(auth).currentUser; // Check if the user is authenticated
  
// // // //   if (!currentUser) {
// // // //     return <Navigate to="/login" replace />;
// // // //   }

// // // //   return children; // If user is authenticated, render the child component
// // // // };

// // // // export default ProtectedRoute;


// // // import React from 'react';
// // // import { Navigate } from 'react-router-dom';
// // // import { getAuth } from 'firebase/auth';
// // // import { auth } from '../Firebase/firebase-config'; // Correct path to Firebase config

// // // const ProtectedRoute = ({ children }) => {
// // //   const currentUser = getAuth(auth).currentUser; // Check if the user is authenticated
  
// // //   if (!currentUser) {
// // //     return <Navigate to="/login" replace />;
// // //   }

// // //   return children; // If user is authenticated, render the child component
// // // };

// // // export default ProtectedRoute;


// // // src/Components/ProtectedRoute.js
// // import React from 'react';
// // import { Navigate } from 'react-router-dom';
// // import { getAuth } from 'firebase/auth';
// // import { auth } from '../Firebase/firebase-config'; // Ensure the path is correct

// // const ProtectedRoute = ({ children }) => {
// //   const currentUser = getAuth(auth).currentUser; // Check if the user is authenticated
  
// //   if (!currentUser) {
// //     return <Navigate to="/login" replace />; // Redirect to login if not authenticated
// //   }

// //   return children; // Render the children components if authenticated
// // };

// // export default ProtectedRoute;
// // a


// // src/Components/ProtectedRoute.jsx (or .js)
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { getAuth } from 'firebase/auth';
// import { auth } from '../Firebase/firebase-config'; // Correct import

// const ProtectedRoute = ({ children }) => {
//   const currentUser = getAuth(auth).currentUser; // Check if the user is authenticated

//   if (!currentUser) {
//     return <Navigate to="/login" replace />;
//   }

//   return children; // Render the child component if the user is authenticated
// };

// export default ProtectedRoute;


// src/Components/ProtectedRoute.jsx (or .js)
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config'; // Correct import

const ProtectedRoute = ({ children }) => {
  const currentUser = getAuth(auth).currentUser; // Check if the user is authenticated

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children; // Render the child component if the user is authenticated
};

export default ProtectedRoute;
