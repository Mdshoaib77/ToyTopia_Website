// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { FaBars } from 'react-icons/fa';
// // // // // // import { Link } from 'react-router-dom';
// // // // // // import { auth } from '../Firebase/firebase-config'; // Import Firebase auth
// // // // // // import { onAuthStateChanged, signOut } from 'firebase/auth'; // For authentication

// // // // // // import image from '../assets/hero1.jpg';
// // // // // // import logo from '../assets/ToyTopia_logo.png';

// // // // // // const Navbar = () => {
// // // // // //   const [user, setUser] = useState(null);
// // // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // // // // //       setUser(currentUser);
// // // // // //       setLoading(false);
// // // // // //     });

// // // // // //     return () => unsubscribe(); // Clean up the subscription
// // // // // //   }, []);

// // // // // //   const toggleDropdown = () => {
// // // // // //     setIsOpen(!isOpen);
// // // // // //   };

// // // // // //   const handleLogout = () => {
// // // // // //     signOut(auth).then(() => {
// // // // // //       setUser(null);
// // // // // //     });
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="relative">
// // // // // //       <div
// // // // // //         className="w-full h-screen bg-cover bg-center"
// // // // // //         style={{ backgroundImage: `url(${image})` }}
// // // // // //       >
// // // // // //         <div className="absolute inset-0 bg-black opacity-50"></div>
// // // // // //         <div className="absolute inset-0 flex justify-center items-center text-center text-white">
// // // // // //           <div className="space-y-6 px-4 md:px-16">
// // // // // //             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-shadow-lg">
// // // // // //               Welcome to ToyTopia!
// // // // // //             </h1>
// // // // // //             <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-80">
// // // // // //               Explore the world of toys with a never-before-seen experience.
// // // // // //             </p>
// // // // // //             <div>
// // // // // //               <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
// // // // // //                 Start Exploring
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Navbar */}
// // // // // //       <div className="absolute top-0 left-0 w-full shadow-xl p-4 z-50">
// // // // // //         <div className="relative flex justify-between items-center w-full">
// // // // // //           <div className="flex items-center ml-8">
// // // // // //             <img src={logo} alt="ToyTopia Logo" className="w-32" />
// // // // // //           </div>

// // // // // //           <div className="hidden md:flex justify-center gap-12">
// // // // // //             <Link
// // // // // //               to="/"
// // // // // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // // // // //             >
// // // // // //               Home
// // // // // //             </Link>
// // // // // //             <Link
// // // // // //               to="/profile"
// // // // // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // // // // //             >
// // // // // //               My Profile
// // // // // //             </Link>
// // // // // //           </div>

// // // // // //           {/* Mobile Dropdown Menu */}
// // // // // //           <div className="md:hidden flex items-center justify-between space-x-4">
// // // // // //             <button
// // // // // //               onClick={toggleDropdown}
// // // // // //               className="text-white hover:text-blue-600 text-3xl"
// // // // // //             >
// // // // // //               <FaBars />
// // // // // //             </button>
// // // // // //             {isOpen && (
// // // // // //               <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10 transition-all ease-in-out duration-300">
// // // // // //                 <Link
// // // // // //                   to="/"
// // // // // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // // // // //                 >
// // // // // //                   Home
// // // // // //                 </Link>
// // // // // //                 <Link
// // // // // //                   to="/profile"
// // // // // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // // // // //                 >
// // // // // //                   My Profile
// // // // // //                 </Link>
// // // // // //                 <div className="mt-4">
// // // // // //                   {!user ? (
// // // // // //                     <Link to="/login">
// // // // // //                       <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // // // //                         Login
// // // // // //                       </button>
// // // // // //                     </Link>
// // // // // //                   ) : (
// // // // // //                     <button
// // // // // //                       onClick={handleLogout}
// // // // // //                       className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out"
// // // // // //                     >
// // // // // //                       Logout
// // // // // //                     </button>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>

// // // // // //           {/* Desktop Menu */}
// // // // // //           <div className="hidden md:flex gap-4 mr-8">
// // // // // //             {!user ? (
// // // // // //               <Link to="/login">
// // // // // //                 <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // // // //                   Login
// // // // // //                 </button>
// // // // // //               </Link>
// // // // // //             ) : (
// // // // // //               <>
// // // // // //                 {/* Profile Image and Name (Visible on Hover) */}
// // // // // //                 <div className="relative">
// // // // // //                   <img
// // // // // //                     src={user.photoURL || 'https://via.placeholder.com/150'}
// // // // // //                     alt="User"
// // // // // //                     className="w-12 h-12 rounded-full cursor-pointer"
// // // // // //                   />
// // // // // //                   <div className="absolute top-14 left-0 text-white bg-black bg-opacity-70 p-2 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
// // // // // //                     {user.displayName}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <button
// // // // // //                   onClick={handleLogout}
// // // // // //                   className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out"
// // // // // //                 >
// // // // // //                   Logout
// // // // // //                 </button>
// // // // // //               </>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;


// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { FaBars } from 'react-icons/fa';
// // // // // import { Link } from 'react-router-dom';
// // // // // import { auth } from '../Firebase/firebase-config'; // Import Firebase auth
// // // // // import { onAuthStateChanged, signOut } from 'firebase/auth'; // For authentication

// // // // // import image from '../assets/hero1.jpg';
// // // // // import logo from '../assets/ToyTopia_logo.png';

// // // // // const Navbar = () => {
// // // // //   const [user, setUser] = useState(null);
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // // // //       setUser(currentUser);
// // // // //       setLoading(false);
// // // // //     });

// // // // //     return () => unsubscribe(); // Clean up the subscription
// // // // //   }, []);

// // // // //   const toggleDropdown = () => {
// // // // //     setIsOpen(!isOpen);
// // // // //   };

// // // // //   const handleLogout = () => {
// // // // //     signOut(auth).then(() => {
// // // // //       setUser(null);
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <div className="relative">
// // // // //       <div
// // // // //         className="w-full h-screen bg-cover bg-center"
// // // // //         style={{ backgroundImage: `url(${image})` }}
// // // // //       >
// // // // //         <div className="absolute inset-0 bg-black opacity-50"></div>
// // // // //         <div className="absolute inset-0 flex justify-center items-center text-center text-white">
// // // // //           <div className="space-y-6 px-4 md:px-16">
// // // // //             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-shadow-lg">
// // // // //               Welcome to ToyTopia!
// // // // //             </h1>
// // // // //             <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-80">
// // // // //               Explore the world of toys with a never-before-seen experience.
// // // // //             </p>
// // // // //             <div>
// // // // //               <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
// // // // //                 Start Exploring
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Navbar */}
// // // // //       <div className="absolute top-0 left-0 w-full shadow-xl p-4 z-50">
// // // // //         <div className="relative flex justify-between items-center w-full">
// // // // //           <div className="flex items-center ml-8">
// // // // //             <img src={logo} alt="ToyTopia Logo" className="w-32" />
// // // // //           </div>

// // // // //           <div className="hidden md:flex justify-center gap-12">
// // // // //             <Link
// // // // //               to="/"
// // // // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // // // //             >
// // // // //               Home
// // // // //             </Link>
// // // // //             <Link
// // // // //               to="/profile"
// // // // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // // // //             >
// // // // //               My Profile
// // // // //             </Link>
// // // // //           </div>

// // // // //           {/* Mobile Dropdown Menu */}
// // // // //           <div className="md:hidden flex items-center justify-between space-x-4">
// // // // //             <button
// // // // //               onClick={toggleDropdown}
// // // // //               className="text-white hover:text-blue-600 text-3xl"
// // // // //             >
// // // // //               <FaBars />
// // // // //             </button>
// // // // //             {isOpen && (
// // // // //               <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10 transition-all ease-in-out duration-300">
// // // // //                 <Link
// // // // //                   to="/"
// // // // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // // // //                 >
// // // // //                   Home
// // // // //                 </Link>
// // // // //                 <Link
// // // // //                   to="/profile"
// // // // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // // // //                 >
// // // // //                   My Profile
// // // // //                 </Link>
// // // // //                 <div className="mt-4">
// // // // //                   {!user ? (
// // // // //                     <Link to="/login">
// // // // //                       <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // // //                         Login
// // // // //                       </button>
// // // // //                     </Link>
// // // // //                   ) : (
// // // // //                     <button
// // // // //                       onClick={handleLogout}
// // // // //                       className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out"
// // // // //                     >
// // // // //                       Logout
// // // // //                     </button>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Desktop Menu */}
// // // // //           <div className="hidden md:flex gap-4 mr-8">
// // // // //             {!user ? (
// // // // //               <Link to="/login">
// // // // //                 <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // // //                   Login
// // // // //                 </button>
// // // // //               </Link>
// // // // //             ) : (
// // // // //               <>
// // // // //                 {/* Profile Image and Name (Visible on Hover) */}
// // // // //                 <div className="relative">
// // // // //                   <img
// // // // //                     src={user.photoURL || 'https://via.placeholder.com/150'}
// // // // //                     alt="User"
// // // // //                     className="w-12 h-12 rounded-full cursor-pointer"
// // // // //                   />
// // // // //                   <div className="absolute top-14 left-0 text-white bg-black bg-opacity-70 p-2 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
// // // // //                     {user.displayName}
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <button
// // // // //                   onClick={handleLogout}
// // // // //                   className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out"
// // // // //                 >
// // // // //                   Logout
// // // // //                 </button>
// // // // //               </>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { FaBars } from 'react-icons/fa';
// // // // import { Link } from 'react-router-dom';
// // // // import { auth } from '../Firebase/firebase-config'; // Import Firebase auth
// // // // import { onAuthStateChanged, signOut } from 'firebase/auth'; // For authentication

// // // // import logo from '../assets/ToyTopia_logo.png'; // Logo image

// // // // const Navbar = () => {
// // // //   const [user, setUser] = useState(null);
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // // //       setUser(currentUser);
// // // //       setLoading(false);
// // // //     });

// // // //     return () => unsubscribe(); // Clean up the subscription
// // // //   }, []);

// // // //   const toggleDropdown = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   const handleLogout = () => {
// // // //     signOut(auth).then(() => {
// // // //       setUser(null);
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="navbar bg-base-100 shadow-sm">
// // // //       {/* Left side (Start) */}
// // // //       <div className="navbar-start">
// // // //         <div className="dropdown">
// // // //           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// // // //             <FaBars className="h-5 w-5" />
// // // //           </div>
// // // //           <ul
// // // //             tabIndex="-1"
// // // //             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
// // // //           >
// // // //             <li>
// // // //               <Link to="/" className="py-2 px-4 text-lg">Home</Link>
// // // //             </li>
// // // //             <li>
// // // //               <Link to="/profile" className="py-2 px-4 text-lg">My Profile</Link>
// // // //             </li>
// // // //             <li>
// // // //               <Link to="/login" className="py-2 px-4 text-lg">
// // // //                 {!user ? 'Login' : 'Logout'}
// // // //               </Link>
// // // //             </li>
// // // //           </ul>
// // // //         </div>
// // // //         <a className="btn btn-ghost text-xl">
// // // //           <img src={logo} alt="ToyTopia Logo" className="w-32" />
// // // //         </a>
// // // //       </div>

// // // //       {/* Center menu (Desktop) */}
// // // //       <div className="navbar-center hidden lg:flex">
// // // //         <ul className="menu menu-horizontal px-1">
// // // //           <li>
// // // //             <Link to="/" className="text-xl py-2 px-4">Home</Link>
// // // //           </li>
// // // //           <li>
// // // //             <details>
// // // //               <summary className="text-xl py-2 px-4">My Profile</summary>
// // // //               <ul className="p-2">
// // // //                 <li>
// // // //                   <Link to="/profile" className="py-2 px-4">Profile Details</Link>
// // // //                 </li>
// // // //                 <li>
// // // //                   <Link to="/edit-profile" className="py-2 px-4">Edit Profile</Link>
// // // //                 </li>
// // // //               </ul>
// // // //             </details>
// // // //           </li>
// // // //           <li>
// // // //             <details>
// // // //               <summary className="text-xl py-2 px-4">Login</summary>
// // // //               <ul className="p-2">
// // // //                 <li>
// // // //                   <Link to="/login" className="py-2 px-4">Login with Email</Link>
// // // //                 </li>
// // // //                 <li>
// // // //                   <Link to="/login-google" className="py-2 px-4">Login with Google</Link>
// // // //                 </li>
// // // //               </ul>
// // // //             </details>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/logout" className="text-xl py-2 px-4">
// // // //               {user ? 'Logout' : ''}
// // // //             </Link>
// // // //           </li>
// // // //         </ul>
// // // //       </div>

// // // //       {/* Right side (End) */}
// // // //       <div className="navbar-end">
// // // //         {!user ? (
// // // //           <Link to="/login">
// // // //             <button className="btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg">
// // // //               Login
// // // //             </button>
// // // //           </Link>
// // // //         ) : (
// // // //           <>
// // // //             {/* Profile Image and Name (Visible on Hover) */}
// // // //             <div className="relative">
// // // //               <img
// // // //                 src={user.photoURL || 'https://via.placeholder.com/150'}
// // // //                 alt="User"
// // // //                 className="w-12 h-12 rounded-full cursor-pointer"
// // // //               />
// // // //               <div className="absolute top-14 left-0 text-white bg-black bg-opacity-70 p-2 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
// // // //                 {user.displayName}
// // // //               </div>
// // // //             </div>
// // // //             <button
// // // //               onClick={handleLogout}
// // // //               className="btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
// // // //             >
// // // //               Logout
// // // //             </button>
// // // //           </>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { FaBars } from 'react-icons/fa';
// // // // import { Link } from 'react-router-dom';
// // // // import { auth } from '../Firebase/firebase-config'; // Import Firebase auth
// // // // import { onAuthStateChanged, signOut } from 'firebase/auth'; // For authentication

// // // // import logo from '../assets/ToyTopia_logo.png'; // Logo image

// // // // const Navbar = () => {
// // // //   const [user, setUser] = useState(null);
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // // //       setUser(currentUser);
// // // //       setLoading(false);
// // // //     });

// // // //     return () => unsubscribe(); // Clean up the subscription
// // // //   }, []);

// // // //   const toggleDropdown = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   const handleLogout = () => {
// // // //     signOut(auth).then(() => {
// // // //       setUser(null);
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="navbar bg-base-100 shadow-sm">
// // // //       {/* Left side (Start) */}
// // // //       <div className="navbar-start">
// // // //         <div className="dropdown">
// // // //           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// // // //             <FaBars className="h-5 w-5" />
// // // //           </div>
// // // //           <ul
// // // //             tabIndex="-1"
// // // //             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
// // // //           >
// // // //             <li>
// // // //               <Link to="/" className="py-2 px-4 text-lg">Home</Link>
// // // //             </li>
// // // //             <li>
// // // //               <Link to="/profile" className="py-2 px-4 text-lg">My Profile</Link>
// // // //             </li>
// // // //           </ul>
// // // //         </div>
// // // //         <a className="btn btn-ghost text-xl">
// // // //           <img src={logo} alt="ToyTopia Logo" className="w-32" />
// // // //         </a>
// // // //       </div>

// // // //       {/* Center menu (Desktop) */}
// // // //       <div className="navbar-center hidden lg:flex">
// // // //         <ul className="menu menu-horizontal px-1">
// // // //           <li>
// // // //             <Link to="/" className="text-xl py-2 px-4">Home</Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/profile" className="text-xl py-2 px-4">My Profile</Link>
// // // //           </li>
// // // //         </ul>
// // // //       </div>

// // // //       {/* Right side (End) */}
// // // //       <div className="navbar-end">
// // // //         {!user ? (
// // // //           <Link to="/login">
// // // //             <button className="btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg">
// // // //               Login
// // // //             </button>
// // // //           </Link>
// // // //         ) : (
// // // //           <>
// // // //             {/* Profile Image and Name (Visible on Hover) */}
// // // //             <div className="relative">
// // // //               <img
// // // //                 src={user.photoURL || 'https://via.placeholder.com/150'}
// // // //                 alt="User"
// // // //                 className="w-12 h-12 rounded-full cursor-pointer"
// // // //               />
// // // //               <div className="absolute top-14 left-0 text-white bg-black bg-opacity-70 p-2 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
// // // //                 {user.displayName}
// // // //               </div>
// // // //             </div>
// // // //             <button
// // // //               onClick={handleLogout}
// // // //               className="btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
// // // //             >
// // // //               Logout
// // // //             </button>
// // // //           </>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // import React, { useState, useEffect } from 'react';
// // // import { FaBars } from 'react-icons/fa';
// // // import { Link } from 'react-router-dom';
// // // import { auth } from '../Firebase/firebase-config'; // Import Firebase auth
// // // import { onAuthStateChanged, signOut } from 'firebase/auth'; // For authentication

// // // import logo from '../assets/ToyTopia_logo.png'; // Logo image

// // // const Navbar = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // //       setUser(currentUser);
// // //       setLoading(false);
// // //     });

// // //     return () => unsubscribe(); // Clean up the subscription
// // //   }, []);

// // //   const toggleDropdown = () => {
// // //     setIsOpen(!isOpen);
// // //   };

// // //   const handleLogout = () => {
// // //     signOut(auth).then(() => {
// // //       setUser(null);
// // //     });
// // //   };

// // //   return (
// // //     <div className="navbar shadow-sm" style={{ backgroundColor: 'rgba(48, 48, 64, 1)' }}>
// // //       {/* Left side (Start) */}
// // //       <div className="navbar-start">
// // //         <div className="dropdown">
// // //           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// // //             <FaBars className="h-5 w-5" />
// // //           </div>
// // //           <ul
// // //             tabIndex="-1"
// // //             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
// // //           >
// // //             {/* <li>
// // //               <Link to="/" className="py-2 px-4 text-lg text-white">Home</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/profile" className="py-2 px-4 text-lg text-white">My Profile</Link>
// // //             </li> */}
// // //             <li>
// // //   <Link
// // //     to="/"
// // //     className="bg-amber-500 py-2 px-4 text-lg text-white hover:text-red-400 transition duration-300 ease-in-out"
// // //   >
// // //     Home
// // //   </Link>
// // // </li>
// // // <li>
// // //   <Link
// // //     to="/profile"
// // //     className="bg-pink-700 py-2 px-4 text-lg text-white hover:text-teal-400 transition duration-300 ease-in-out"
// // //   >
// // //     My Profile
// // //   </Link>
// // // </li>

// // //           </ul>
// // //         </div>
// // //         <a className="btn btn-ghost text-xl">
// // //           <img src={logo} alt="ToyTopia Logo" className="w-32" />
// // //         </a>
// // //       </div>

// // //       {/* Center menu (Desktop) */}
// // //       <div className="navbar-center hidden lg:flex">
// // //         <ul className="menu menu-horizontal px-1">
// // //           <li>
// // //             <Link to="/" className="text-xl py-2 px-4 text-white">Home</Link>
// // //           </li>
// // //           <li>
// // //             <Link to="/profile" className="text-xl py-2 px-4 text-white">My Profile</Link>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Right side (End) */}
// // //       <div className="navbar-end">
// // //         {!user ? (
// // //           <Link to="/login">
// // //             <button className="mr-10 btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg">
// // //               Login
// // //             </button>
// // //           </Link>
// // //         ) : (
// // //           <>
// // //             {/* Profile Image and Name (Visible on Hover) */}
// // //             <div className="relative">
// // //               <img
// // //                 src={user.photoURL || 'https://via.placeholder.com/150'}
// // //                 alt="User"
// // //                 className="w-12 h-12 rounded-full cursor-pointer"
// // //               />
// // //               <div className="absolute top-14 left-0 text-white bg-black bg-opacity-70 p-2 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
// // //                 {user.displayName}
// // //               </div>
// // //             </div>
// // //             <button
// // //               onClick={handleLogout}
// // //               className="btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
// // //             >
// // //               Logout
// // //             </button>
// // //           </>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;



// // import React, { useState, useEffect } from 'react';
// // import { FaBars } from 'react-icons/fa';
// // import { Link } from 'react-router-dom';
// // import { auth } from '../Firebase/firebase-config';
// // import { onAuthStateChanged, signOut } from 'firebase/auth';
// // import { motion } from 'framer-motion'; // Import motion

// // import logo from '../assets/ToyTopia_logo.png';

// // const Navbar = () => {
// //   const [user, setUser] = useState(null);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //       setLoading(false);
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   const toggleDropdown = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const handleLogout = () => {
// //     signOut(auth).then(() => {
// //       setUser(null);
// //     });
// //   };

// //   return (
// //     <motion.div
// //       className="navbar shadow-sm"
// //       style={{ backgroundColor: 'rgba(48, 48, 64, 1)' }}
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //     >
// //       {/* Left side (Start) */}
// //       <div className="navbar-start">
// //         <div className="dropdown">
// //           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// //             <FaBars className="h-5 w-5" />
// //           </div>
// //           <motion.ul
// //             tabIndex="-1"
// //             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.3 }}
// //           >
// //             <li>
// //               <Link
// //                 to="/"
// //                 className="bg-amber-500 py-2 px-4 text-lg text-white hover:text-red-400 transition duration-300 ease-in-out"
// //               >
// //                 Home
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/profile"
// //                 className="bg-pink-700 py-2 px-4 text-lg text-white hover:text-teal-400 transition duration-300 ease-in-out"
// //               >
// //                 My Profile
// //               </Link>
// //             </li>
// //           </motion.ul>
// //         </div>
// //         <a className="btn btn-ghost text-xl">
// //           <img src={logo} alt="ToyTopia Logo" className="w-32" />
// //         </a>
// //       </div>

// //       {/* Center menu (Desktop) */}
// //       <div className="navbar-center hidden lg:flex">
// //         <motion.ul
// //           className="menu menu-horizontal px-1"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <li>
// //             <Link to="/" className="text-xl py-2 px-4 text-white">
// //               Home
// //             </Link>
// //           </li>
// //           <li>
// //             <Link to="/profile" className="text-xl py-2 px-4 text-white">
// //               My Profile
// //             </Link>
// //           </li>
// //         </motion.ul>
// //       </div>

// //       {/* Right side (End) */}
// //       <div className="navbar-end">
// //         {!user ? (
// //           <Link to="/login">
// //             <button className="mr-10 btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg">
// //               Login
// //             </button>
// //           </Link>
// //         ) : (
// //           <>
// //             {/* Profile Image and Name (Visible on Hover) */}
// //             <div className="relative">
// //               <img
// //                 src={user.photoURL || 'https://via.placeholder.com/150'}
// //                 alt="User"
// //                 className="w-12 h-12 rounded-full cursor-pointer"
// //               />
// //               <div className="absolute top-14 left-0 text-white bg-black bg-opacity-70 p-2 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
// //                 {user.displayName}
// //               </div>
// //             </div>
// //             <button
// //               onClick={handleLogout}
// //               className="btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
// //             >
// //               Logout
// //             </button>
// //           </>
// //         )}
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { auth } from '../Firebase/firebase-config';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { motion } from 'framer-motion'; // Import motion

// import logo from '../assets/ToyTopia_logo.png';

// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       setUser(null);
//     });
//   };

//   return (
//     <motion.div
//       className="navbar shadow-sm"
//       style={{ backgroundColor: 'rgba(48, 48, 64, 1)' }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Left side (Start) */}
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <FaBars className="h-5 w-5" />
//           </div>
//           <motion.ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <li>
//               <Link
//                 to="/"
//                 className="bg-amber-500 py-2 px-4 text-lg text-white hover:text-red-400 transition duration-300 ease-in-out"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/profile"
//                 className="bg-pink-700 py-2 px-4 text-lg text-white hover:text-teal-400 transition duration-300 ease-in-out"
//               >
//                 My Profile
//               </Link>
//             </li>
//           </motion.ul>
//         </div>
//         <a className="btn btn-ghost text-xl">
//           <img src={logo} alt="ToyTopia Logo" className="w-32" />
//         </a>
//       </div>

//       {/* Center menu (Desktop) */}
//       <div className="navbar-center hidden lg:flex">
//         <motion.ul
//           className="menu menu-horizontal px-1"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <li>
//             <Link to="/" className="text-xl py-2 px-4 text-white">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/profile" className="text-xl py-2 px-4 text-white">
//               My Profile
//             </Link>
//           </li>
//         </motion.ul>
//       </div>

//       {/* Right side (End) */}
//       <div className="navbar-end">
//         {!user ? (
//           <Link to="/login">
//             <motion.button
//               className="mr-10 btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Login
//             </motion.button>
//           </Link>
//         ) : (
//           <>
//             {/* Profile Image and Name (Visible on Hover) */}
//             <div className="relative">
//               <motion.img
//                 src={user.photoURL || 'https://via.placeholder.com/150'}
//                 alt="User"
//                 className="w-12 h-12 rounded-full cursor-pointer"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <div className="absolute top-14 left-0 text-white bg-black bg-opacity-70 p-2 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
//                 {user.displayName}
//               </div>
//             </div>
//             <motion.button
//               onClick={handleLogout}
//               className="btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Logout
//             </motion.button>
//           </>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { motion } from 'framer-motion'; // Import motion

import logo from '../assets/ToyTopia_logo.png';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  return (
    <motion.div
      className="navbar shadow-sm"
      style={{ backgroundColor: 'rgba(48, 48, 64, 1)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left side (Start) */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="h-5 w-5" />
          </div>
          <motion.ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <li>
              <Link
                to="/"
                className="bg-amber-500 py-2 px-4 text-lg text-white hover:text-red-400 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="bg-pink-700 py-2 px-4 text-lg text-white hover:text-teal-400 transition duration-300 ease-in-out"
              >
                My Profile
              </Link>
            </li>
          </motion.ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="ToyTopia Logo" className="w-32" />
        </a>
      </div>

      {/* Center menu (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <motion.ul
          className="menu menu-horizontal px-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <li>
            <Link to="/" className="text-xl py-2 px-4 text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-xl py-2 px-4 text-white">
              My Profile
            </Link>
          </li>
        </motion.ul>
      </div>

      {/* Right side (End) */}
      <div className="navbar-end flex items-center">
        {!user ? (
          <Link to="/login" className="lg:mr-10 mr-4">
            <motion.button
              className="btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </Link>
        ) : (
          <>
            {/* Profile Image and Name (Visible on Hover) */}
            <div className="relative mr-4">
              <motion.img
                src={user.photoURL || 'https://via.placeholder.com/150'}
                alt="User"
                className="w-12 h-12 rounded-full cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-14 left-0 text-white bg-black bg-opacity-70 p-2 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
                {user.displayName}
              </div>
            </div>
            {/* Logout Button */}
            <motion.button
              onClick={handleLogout}
              className="mr-10 btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Logout
            </motion.button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
