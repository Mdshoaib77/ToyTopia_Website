// // // // import { StrictMode } from 'react'
// // // // import { createRoot } from 'react-dom/client'
// // // // import './index.css'
// // // // import App from './App.jsx'
// // // // import { createBrowserRouter } from "react-router";
// // // // import { RouterProvider } from "react-router/dom";
// // // // import Root from './Layout/Root.jsx';
// // // // import Home from './Components/Home.jsx';


// // // // const router = createBrowserRouter([
// // // // {
// // // //   path: "/",
// // // //   Component: Root,
// // // //   children: [
// // // //     {
// // // //       index: true,
// // // //       Component: Home,
// // // //     }
// // // //   ]
// // // // }
// // // // ]);

// // // // createRoot(document.getElementById('root')).render(
// // // //   <StrictMode>
// // // //     <RouterProvider router={router} />
// // // //   </StrictMode>,
// // // // )


// // // // import { StrictMode } from 'react';
// // // // import { createRoot } from 'react-dom/client';
// // // // import './index.css';
// // // // import App from './App.jsx';
// // // // import { createBrowserRouter } from 'react-router-dom';
// // // // import { RouterProvider } from 'react-router-dom';
// // // // import Root from './Layout/Root.jsx';
// // // // import Home from './Components/Home.jsx';
// // // // import ToyDetails from './Components/ToyDetails.jsx'; // Import ToyDetails component

// // // // // Create browser router and define routes
// // // // const router = createBrowserRouter([
// // // //   {
// // // //     path: '/',
// // // //     Component: Root,
// // // //     children: [
// // // //       {
// // // //         index: true,
// // // //         Component: Home, // Home route
// // // //       },
// // // //       {
// // // //         path: '/toy/:toyId', // Toy details route
// // // //         Component: ToyDetails,
// // // //       },
// // // //     ]
// // // //   }
// // // // ]);

// // // // createRoot(document.getElementById('root')).render(
// // // //   <StrictMode>
// // // //     <RouterProvider router={router} />
// // // //   </StrictMode>,
// // // // );


// // // import { StrictMode } from 'react';
// // // import { createRoot } from 'react-dom/client';
// // // import './index.css';
// // // import App from './App.jsx';
// // // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // // import Root from './Layout/Root.jsx';
// // // import Home from './Components/Home.jsx';
// // // import Login from './Components/Login.jsx'; // Import Login component
// // // import ToyDetails from './Components/ToyDetails.jsx';
// // // import Register from './Components/Register.jsx';

// // // // Create browser router and define routes
// // // const router = createBrowserRouter([
// // //   {
// // //     path: '/',
// // //     Component: Root,
// // //     children: [
// // //       {
// // //         index: true,
// // //         Component: Home, // Home route
// // //       },
// // //        {
// // //         path: '/toy/:toyId', // Toy details route
// // //         Component: ToyDetails,
// // //       },
// // //       {
// // //         path: '/login', // Login page route
// // //         Component: Login,
// // //       },
// // //        {
// // //         path: '/register', // Login page route
// // //         Component: Register,
// // //       },
// // //     ]
// // //   }
// // // ]);

// // // createRoot(document.getElementById('root')).render(
// // //   <StrictMode>
// // //     <RouterProvider router={router} />
// // //   </StrictMode>,
// // // );


// // import { StrictMode } from 'react';
// // import { createRoot } from 'react-dom/client';
// // import './index.css';
// // import App from './App.jsx';
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // import Root from './Layout/Root.jsx';
// // import Home from './Components/Home.jsx';
// // import Login from './Components/Login.jsx';
// // import ToyDetails from './Components/ToyDetails.jsx';
// // import Register from './Components/Register.jsx';
// // import Profile from './Components/Profile.jsx'; // Add Profile component for profile page

// // // Create browser router and define routes
// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     Component: Root,
// //     children: [
// //       {
// //         index: true,
// //         Component: Home, // Home route
// //       },
// //       {
// //         path: '/toy/:toyId', // Toy details route
// //         Component: ToyDetails,
// //       },
// //       {
// //         path: '/login', // Login page route
// //         Component: Login,
// //       },
// //       {
// //         path: '/register', // Register page route
// //         Component: Register,
// //       },
// //       {
// //         path: '/profile', // Profile page route (protected)
// //         Component: Profile,
// //         // Ensure this route is protected, and only accessible after login
// //       },
// //     ]
// //   }
// // ]);

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <RouterProvider router={router} />
// //   </StrictMode>,
// // );

// // main.jsx


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Root from './Layout/Root.jsx';
// import Home from './Components/Home.jsx';
// import Login from './Components/Login.jsx'; // Login import
// import ToyDetails from './Components/ToyDetails.jsx';
// import Register from './Components/Register.jsx';

// // Create browser router and define routes
// const router = createBrowserRouter([
//   {
//     path: '/',
//     Component: Root,
//     children: [
//       {
//         index: true,
//         Component: Home, // Home route
//       },
//       {
//         path: '/toy/:toyId', // Toy details route
//         Component: ToyDetails,
//       },
//       {
//         path: '/login', // Login page route
//         Component: Login,
//       },
//       {
//         path: '/register', // Register page route
//         Component: Register,
//       },
//     ]
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layout/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx'; // Login import
import Profile from './Components/Profile.jsx'; // Profile import
import Register from './Components/Register.jsx';
import ToyDetails from './Components/ToyDetails.jsx';
import NotFound from './Components/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/login', Component: Login },
      { path: '/profile', Component: Profile },
      { path: '/register', Component: Register },
       {
        path: '/toy/:toyId', // Toy details route
        Component: ToyDetails,
      },
      { path: '/notfound', Component: NotFound },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
