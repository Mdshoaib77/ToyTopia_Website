// // // // // // // // // import React from 'react'
// // // // // // // // // import logo from '../assets/toytopia-logo.png'

// // // // // // // // // const Navbar = () => {
// // // // // // // // //   return (
// // // // // // // // //    <div className="navbar bg-base-100 shadow-sm">
// // // // // // // // //   <div className="flex-1">
// // // // // // // // //     <a className="btn btn-ghost text-xl">daisyUI</a>
// // // // // // // // //   </div>
// // // // // // // // //   <div className="flex gap-2">
// // // // // // // // //     <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
// // // // // // // // //     <div className="dropdown dropdown-end">
// // // // // // // // //       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
// // // // // // // // //         <div className="w-10 rounded-full">
// // // // // // // // //           <img
// // // // // // // // //             alt="Tailwind CSS Navbar component"
// // // // // // // // //             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //       <ul
// // // // // // // // //         tabIndex="-1"
// // // // // // // // //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
// // // // // // // // //         <li>
// // // // // // // // //           <a className="justify-between">
// // // // // // // // //             Profile
// // // // // // // // //             <span className="badge">New</span>
// // // // // // // // //           </a>
// // // // // // // // //         </li>
// // // // // // // // //         <li><a>Settings</a></li>
// // // // // // // // //         <li><a>Logout</a></li>
// // // // // // // // //       </ul>
// // // // // // // // //     </div>
// // // // // // // // //   </div>
// // // // // // // // // </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default Navbar


// // // // // // // // import React from 'react'; // Assuming the logo image is in this path

// // // // // // // // const Navbar = () => {
// // // // // // // //   return (
// // // // // // // //     <div className="navbar bg-base-100 shadow-sm">
// // // // // // // //       {/* Left Side - Logo */}
// // // // // // // //       <div className="flex-1">
// // // // // // // //         <img src={logo} alt="Toytopia Logo" className="h-10" />
// // // // // // // //       </div>
      
// // // // // // // //       {/* Center - Home and My Profile */}
// // // // // // // //       <div className="flex justify-center gap-10">
// // // // // // // //         <a href="/" className="btn btn-ghost text-xl">Home</a>
// // // // // // // //         <a href="/profile" className="btn btn-ghost text-xl">My Profile</a>
// // // // // // // //       </div>
      
// // // // // // // //       {/* Right Side - Login Button */}
// // // // // // // //       <div className="flex gap-2">
// // // // // // // //         <button className="btn btn-primary">Login</button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default Navbar;


// // // // // // // import React from 'react';

// // // // // // // const Navbar = () => {
// // // // // // //   return (
// // // // // // //     <div className="navbar bg-base-100 shadow-lg">
// // // // // // //       {/* Left Side - ToyTopia Text */}
// // // // // // //       <div className="flex-1 flex items-center space-x-2">
// // // // // // //         <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700">
// // // // // // //           ToyTopia
// // // // // // //         </span>
// // // // // // //       </div>
      
// // // // // // //       {/* Center - Home and My Profile */}
// // // // // // //       <div className="flex justify-center gap-10">
// // // // // // //         <a href="/" className="btn btn-ghost text-xl hover:text-blue-600 transition duration-300 ease-in-out">Home</a>
// // // // // // //         <a href="/profile" className="btn btn-ghost text-xl hover:text-blue-600 transition duration-300 ease-in-out">My Profile</a>
// // // // // // //       </div>
      
// // // // // // //       {/* Right Side - Stylish Login Button */}
// // // // // // //       <div className="flex gap-2">
// // // // // // //         <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out">
// // // // // // //           Login
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Navbar;





// // // // // // import React from 'react';

// // // // // // const Navbar = () => {
// // // // // //   return (
// // // // // //     <div className="navbar bg-base-100 shadow-xl p-4">
// // // // // //       {/* Left Side - ToyTopia Text */}
// // // // // //       <div className="flex-1 flex items-center ml-8">
// // // // // //         <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 tracking-wide">
// // // // // //           ToyTopia
// // // // // //         </span>
// // // // // //       </div>
      
// // // // // //       {/* Center - Home and My Profile */}
// // // // // //       <div className="flex justify-center gap-12">
// // // // // //         <a href="/" className="text-xl font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4">Home</a>
// // // // // //         <a href="/profile" className="text-xl font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4">My Profile</a>
// // // // // //       </div>
      
// // // // // //       {/* Right Side - Stylish Login Button */}
// // // // // //       <div className="flex gap-4 mr-8">
// // // // // //         <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // // // //           Login
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default Navbar;


// // // // // import React, { useState } from 'react';

// // // // // const Navbar = () => {
// // // // //   // State to manage the mobile dropdown visibility
// // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // //   // Function to toggle the dropdown
// // // // //   const toggleDropdown = () => {
// // // // //     setIsOpen(!isOpen);
// // // // //   };

// // // // //   return (
// // // // //     <div className="navbar bg-base-100 shadow-xl p-4">
// // // // //       {/* Left Side - ToyTopia Text */}
// // // // //       <div className="flex-1 flex items-center ml-8">
// // // // //         <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 tracking-wide shadow-md">
// // // // //           ToyTopia
// // // // //         </span>
// // // // //       </div>
      
// // // // //       {/* Center - Home and My Profile */}
// // // // //       <div className="hidden md:flex justify-center gap-12">
// // // // //         <a href="/" className="text-xl font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4">Home</a>
// // // // //         <a href="/profile" className="text-xl font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4">My Profile</a>
// // // // //       </div>

// // // // //       {/* Mobile Dropdown Menu */}
// // // // //       <div className="md:hidden flex items-center">
// // // // //         <button onClick={toggleDropdown} className="text-gray-700 hover:text-blue-600 text-3xl">
// // // // //           <i className="fas fa-bars"></i>
// // // // //         </button>
// // // // //         {isOpen && (
// // // // //           <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center">
// // // // //             <a href="/" className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4">Home</a>
// // // // //             <a href="/profile" className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4">My Profile</a>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Right Side - Stylish Login Button */}
// // // // //       <div className="flex gap-4 mr-8">
// // // // //         <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // // //           Login
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Navbar;


// // // // import React, { useState } from 'react';
// // // // import { FaBars } from 'react-icons/fa';  
// // // // import logo from '../assets/ToyTopia_logo.png';
// // // // const Navbar = () => {
// // // //   // State to manage the mobile dropdown visibility
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   // Function to toggle the dropdown
// // // //   const toggleDropdown = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   return (
// // // //     <div className="navbar bg-gradient-to-r from-teal-400 to-blue-500 shadow-xl p-4">
// // // //       {/* Left Side - ToyTopia Text */}
// // // //       <div className="flex-1 flex items-center ml-8">
// // // //        <img src={logo} alt="" />
// // // //       </div>

// // // //       {/* Center - Desktop Home and My Profile */}
// // // //       <div className="hidden md:flex justify-center gap-12">
// // // //         <a href="/" className="text-xl font-medium text-white hover:text-blue-200 transition duration-300 ease-in-out py-2 px-4">Home</a>
// // // //         <a href="/profile" className="text-xl font-medium text-white hover:text-blue-200 transition duration-300 ease-in-out py-2 px-4">My Profile</a>
// // // //       </div>

// // // //       {/* Mobile Dropdown Menu */}
// // // //       <div className="md:hidden flex items-center">
// // // //         <button onClick={toggleDropdown} className="text-white hover:text-blue-200 text-3xl">
// // // //           <FaBars />
// // // //         </button>
// // // //         {isOpen && (
// // // //           <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10">
// // // //             <a href="/" className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4">Home</a>
// // // //             <a href="/profile" className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4">My Profile</a>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* Right Side - Stylish Login Button */}
// // // //       <div className="flex gap-4 mr-8">
// // // //         <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // //           Login
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // // import React, { useState } from 'react';
// // // // import { FaBars } from 'react-icons/fa';  
// // // // import logo from '../assets/ToyTopia_logo.png';

// // // // const Navbar = () => {
// // // //   // State to manage the mobile dropdown visibility
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   // Function to toggle the dropdown
// // // //   const toggleDropdown = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   return (
// // // //     <div className="navbar shadow-xl p-4" style={{ backgroundColor: '#303040' }}> {/* Custom Navbar Background */}
// // // //       {/* Left Side - ToyTopia Logo */}
// // // //       <div className="flex-1 flex items-center ml-8">
// // // //         <img src={logo} alt="ToyTopia Logo" className="w-32 " /> {/* Adjusting logo size */}
// // // //       </div>

// // // //       {/* Center - Desktop Home and My Profile */}
// // // //       <div className="hidden md:flex justify-center gap-12">
// // // //         <a href="/" className="text-xl font-medium text-white hover:text-blue-200 transition duration-300 ease-in-out py-2 px-4">Home</a>
// // // //         <a href="/profile" className="text-xl font-medium text-white hover:text-blue-200 transition duration-300 ease-in-out py-2 px-4">My Profile</a>
// // // //       </div>

// // // //       {/* Mobile Dropdown Menu */}
// // // //       <div className="md:hidden flex items-center">
// // // //         <button onClick={toggleDropdown} className="text-white hover:text-blue-200 text-3xl">
// // // //           <FaBars />
// // // //         </button>
// // // //         {isOpen && (
// // // //           <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10">
// // // //             <a href="/" className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4">Home</a>
// // // //             <a href="/profile" className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4">My Profile</a>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* Right Side - Stylish Login Button */}
// // // //       <div className="flex gap-4 mr-8">
// // // //         <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // //           Login
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // // import React, { useState } from 'react';
// // // // import { FaBars } from 'react-icons/fa';  // Importing React Icon for the dropdown
// // // // import image from '../assets/hero1.jpg'; 
// // // // import logo from '../assets/ToyTopia_logo.png'; // Importing the hero image for the navbar background

// // // // const Navbar = () => {
// // // //   // State to manage the mobile dropdown visibility
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   // Function to toggle the dropdown
// // // //   const toggleDropdown = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   return (
// // // //     <div className="relative">
// // // //       {/* Hero Image */}
// // // //       <div
// // // //         className="w-full h-screen bg-cover bg-center"
// // // //         style={{ backgroundImage: `url(${image})` }}
// // // //       >
// // // //         {/* Dark Overlay for contrast */}
// // // //         <div className="absolute inset-0 bg-black opacity-40"></div>
// // // //       </div>

// // // //       {/* Navbar */}
// // // //       <div className="absolute top-0 left-0 w-full shadow-xl p-4 z-22">
// // // //         <div className="relative flex justify-between items-center w-full">
// // // //           {/* Left Side - ToyTopia Text */}
// // // //           {/* <div className="flex-1 flex items-center ml-8">
// // // //             <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 tracking-wide shadow-md hover:text-cyan-400 hover:shadow-lg transition-all duration-300 ease-in-out">
// // // //               ToyTopia
// // // //             </span>
// // // //           </div> */}

// // // //  <div className="flex-1 flex items-center ml-8">
// // // //         <img src={logo} alt="ToyTopia Logo" className="w-42 " /> {/* Adjusting logo size */}
// // // //       </div>
// // // //           {/* Center - Desktop Home and My Profile */}
// // // //           <div className="hidden md:flex justify-center gap-12">
// // // //             <a href="/" className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4">Home</a>
// // // //             <a href="/profile" className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4">My Profile</a>
// // // //           </div>

// // // //           {/* Mobile Dropdown Menu */}
// // // //           <div className="md:hidden flex items-center">
// // // //             <button onClick={toggleDropdown} className="text-white hover:text-blue-600 text-3xl">
// // // //               <FaBars />
// // // //             </button>
// // // //             {isOpen && (
// // // //               <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10">
// // // //                 <a href="/" className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4">Home</a>
// // // //                 <a href="/profile" className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4">My Profile</a>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* Right Side - Stylish Login Button */}
// // // //           <div className="flex gap-4 mr-8">
// // // //             <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // //               Login
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Navbar;



// // // // import React, { useState } from 'react';
// // // // import { FaBars } from 'react-icons/fa'; // Importing React Icon for the dropdown
// // // // import image from '../assets/hero1.jpg';
// // // // import logo from '../assets/ToyTopia_logo.png'; // Importing the hero image for the navbar background

// // // // const Navbar = () => {
// // // //   // State to manage the mobile dropdown visibility
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   // Function to toggle the dropdown
// // // //   const toggleDropdown = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   return (
// // // //     <div className="relative">
// // // //       {/* Hero Image */}
// // // //       <div
// // // //         className="w-full h-screen bg-cover bg-center"
// // // //         style={{ backgroundImage: `url(${image})` }}
// // // //       >
// // // //         {/* Dark Overlay for contrast */}
// // // //         <div className="absolute inset-0 bg-black opacity-40"></div>
// // // //       </div>

// // // //       {/* Navbar */}
// // // //       <div className="absolute top-0 left-0 w-full shadow-xl p-4 z-50">
// // // //         <div className="relative flex justify-between items-center w-full">
// // // //           {/* Left Side - ToyTopia Logo */}
// // // //           <div className="flex-1 flex items-center ml-8">
// // // //             <img src={logo} alt="ToyTopia Logo" className="w-42" /> {/* Adjusting logo size */}
// // // //           </div>

// // // //           {/* Center - Desktop Home and My Profile */}
// // // //           <div className="hidden md:flex justify-center gap-12">
// // // //             <a
// // // //               href="/"
// // // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // // //             >
// // // //               Home
// // // //             </a>
// // // //             <a
// // // //               href="/profile"
// // // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // // //             >
// // // //               My Profile
// // // //             </a>
// // // //           </div>

// // // //           {/* Mobile Dropdown Menu */}
// // // //           <div className="md:hidden flex items-center">
// // // //             <button
// // // //               onClick={toggleDropdown}
// // // //               className="text-white hover:text-blue-600 text-3xl"
// // // //             >
// // // //               <FaBars />
// // // //             </button>
// // // //             {isOpen && (
// // // //               <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10">
// // // //                 <a
// // // //                   href="/"
// // // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // // //                 >
// // // //                   Home
// // // //                 </a>
// // // //                 <a
// // // //                   href="/profile"
// // // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // // //                 >
// // // //                   My Profile
// // // //                 </a>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* Right Side - Stylish Login Button */}
// // // //           <div className="flex gap-4 mr-8">
// // // //             <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // //               Login
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // // import React, { useState } from 'react';
// // // // import { FaBars } from 'react-icons/fa'; // Importing React Icon for the dropdown
// // // // import image from '../assets/hero1.jpg';
// // // // import logo from '../assets/ToyTopia_logo.png'; // Importing the hero image for the navbar background

// // // // const Navbar = () => {
// // // //   // State to manage the mobile dropdown visibility
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   // Function to toggle the dropdown
// // // //   const toggleDropdown = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   return (
// // // //     <div className="relative">
// // // //       {/* Hero Image */}
// // // //       <div
// // // //         className="w-full h-screen bg-cover bg-center"
// // // //         style={{ backgroundImage: `url(${image})` }}
// // // //       >
// // // //         {/* Dark Overlay for contrast */}
// // // //         <div className="absolute inset-0 bg-black opacity-40"></div>
// // // //       </div>

// // // //       {/* Navbar */}
// // // //       <div className="absolute top-0 left-0 w-full shadow-xl p-4 z-50">
// // // //         <div className="relative flex justify-between items-center w-full">
// // // //           {/* Left Side - ToyTopia Logo */}
// // // //           <div className="flex-1 flex items-center ml-8">
// // // //             <img src={logo} alt="ToyTopia Logo" className="w-32" /> {/* Adjusting logo size */}
// // // //           </div>

// // // //           {/* Center - Desktop Home and My Profile */}
// // // //           <div className="hidden md:flex justify-center gap-12">
// // // //             <a
// // // //               href="/"
// // // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // // //             >
// // // //               Home
// // // //             </a>
// // // //             <a
// // // //               href="/profile"
// // // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // // //             >
// // // //               My Profile
// // // //             </a>
// // // //           </div>

// // // //           {/* Mobile Dropdown Menu */}
// // // //           <div className="md:hidden flex items-center space-x-4">
// // // //             <button
// // // //               onClick={toggleDropdown}
// // // //               className="text-white hover:text-blue-600 text-3xl"
// // // //             >
// // // //               <FaBars />
// // // //             </button>
// // // //             {isOpen && (
// // // //               <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10">
// // // //                 <a
// // // //                   href="/"
// // // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // // //                 >
// // // //                   Home
// // // //                 </a>
// // // //                 <a
// // // //                   href="/profile"
// // // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // // //                 >
// // // //                   My Profile
// // // //                 </a>
// // // //                 <div className="mt-4">
// // // //                   <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // //                     Login
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* Right Side - Stylish Login Button for larger screens */}
// // // //           <div className="hidden md:flex gap-4 mr-8">
// // // //             <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // //               Login
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // // import React, { useState } from 'react';
// // // // import { FaBars } from 'react-icons/fa'; // Importing React Icon for the dropdown
// // // // import image from '../assets/hero1.jpg';
// // // // import logo from '../assets/ToyTopia_logo.png'; // Importing the hero image for the navbar background

// // // // const Navbar = () => {
// // // //   // State to manage the mobile dropdown visibility
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   // Function to toggle the dropdown
// // // //   const toggleDropdown = () => {
// // // //     setIsOpen(!isOpen);
// // // //   };

// // // //   return (
// // // //     <div className="relative">
// // // //       {/* Hero Image */}
// // // //       <div
// // // //         className="w-full h-screen bg-cover bg-center"
// // // //         style={{ backgroundImage: `url(${image})` }}
// // // //       >
// // // //         {/* Dark Overlay for contrast */}
// // // //         <div className="absolute inset-0 bg-black opacity-40"></div>
// // // //       </div>

// // // //       {/* Navbar */}
// // // //       <div className="absolute top-0 left-0 w-full shadow-xl p-4 z-50">
// // // //         <div className="relative flex justify-between items-center w-full">
// // // //           {/* Left Side - ToyTopia Logo */}
// // // //           <div className="flex-1 flex items-center ml-8">
// // // //             <img src={logo} alt="ToyTopia Logo" className="w-32" /> {/* Adjusting logo size */}
// // // //           </div>

// // // //           {/* Center - Desktop Home and My Profile */}
// // // //           <div className="hidden md:flex justify-center gap-12">
// // // //             <a
// // // //               href="/"
// // // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // // //             >
// // // //               Home
// // // //             </a>
// // // //             <a
// // // //               href="/profile"
// // // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // // //             >
// // // //               My Profile
// // // //             </a>
// // // //           </div>

// // // //           {/* Mobile Dropdown Menu */}
// // // //           <div className="md:hidden flex items-center justify-between space-x-4">
// // // //             <div className="flex-1" /> {/* Empty div to push dropdown to the right */}
// // // //             <button
// // // //               onClick={toggleDropdown}
// // // //               className="text-white hover:text-blue-600 text-3xl"
// // // //             >
// // // //               <FaBars />
// // // //             </button>
// // // //             {isOpen && (
// // // //               <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10 transition-all ease-in-out duration-300">
// // // //                 <a
// // // //                   href="/"
// // // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // // //                 >
// // // //                   Home
// // // //                 </a>
// // // //                 <a
// // // //                   href="/profile"
// // // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // // //                 >
// // // //                   My Profile
// // // //                 </a>
// // // //                 <div className="mt-4">
// // // //                   <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // //                     Login
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* Right Side - Stylish Login Button for larger screens */}
// // // //           <div className="hidden md:flex gap-4 mr-8">
// // // //             <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // // //               Login
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // import React, { useState } from 'react';
// // // import { FaBars } from 'react-icons/fa'; // Importing React Icon for the dropdown
// // // import image from '../assets/hero1.jpg';
// // // import logo from '../assets/ToyTopia_logo.png'; // Importing the hero image for the navbar background

// // // const Navbar = () => {
// // //   // State to manage the mobile dropdown visibility
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   // Function to toggle the dropdown
// // //   const toggleDropdown = () => {
// // //     setIsOpen(!isOpen);
// // //   };

// // //   return (
// // //     <div className="relative">
// // //       {/* Hero Image */}
// // //       <div
// // //         className="w-full h-screen bg-cover bg-center"
// // //         style={{ backgroundImage: `url(${image})` }}
// // //       >
// // //         {/* Dark Overlay for contrast */}
// // //         <div className="absolute inset-0 bg-black opacity-50"></div>
        
// // //         {/* Content on Hero Image */}
// // //         <div className="absolute inset-0 flex justify-center items-center text-center text-white">
// // //           <div className="space-y-6 px-4 md:px-16">
// // //             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-shadow-lg">
// // //               Welcome to ToyTopia!
// // //             </h1>
// // //             <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-80">
// // //               Explore the world of toys with a never-before-seen experience.
// // //             </p>
// // //             <div>
// // //               <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
// // //                 Start Exploring
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Navbar */}
// // //       <div className="absolute top-0 left-0 w-full shadow-xl p-4 z-50">
// // //         <div className="relative flex justify-between items-center w-full">
// // //           {/* Left Side - ToyTopia Logo */}
// // //           <div className="flex items-center ml-8">
// // //             <img src={logo} alt="ToyTopia Logo" className="w-32" />
// // //           </div>

// // //           {/* Center - Desktop Home and My Profile */}
// // //           <div className="hidden md:flex justify-center gap-12">
// // //             <a
// // //               href="/"
// // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // //             >
// // //               Home
// // //             </a>
// // //             <a
// // //               href="/profile"
// // //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// // //             >
// // //               My Profile
// // //             </a>
// // //           </div>

// // //           {/* Mobile Dropdown Menu */}
// // //           <div className="md:hidden flex items-center justify-between space-x-4">
// // //             <button
// // //               onClick={toggleDropdown}
// // //               className="text-white hover:text-blue-600 text-3xl"
// // //             >
// // //               <FaBars />
// // //             </button>
// // //             {isOpen && (
// // //               <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10 transition-all ease-in-out duration-300">
// // //                 <a
// // //                   href="/"
// // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // //                 >
// // //                   Home
// // //                 </a>
// // //                 <a
// // //                   href="/profile"
// // //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// // //                 >
// // //                   My Profile
// // //                 </a>
// // //                 <div className="mt-4">
// // //                   <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // //                     Login
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Right Side - Stylish Login Button for larger screens */}
// // //           <div className="hidden md:flex gap-4 mr-8">
// // //             <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// // //               Login
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;


// // import React, { useState } from 'react';
// // import { FaBars } from 'react-icons/fa'; // Importing React Icon for the dropdown
// // import { Link } from 'react-router-dom'; // Import Link for navigation
// // import image from '../assets/hero1.jpg';
// // import logo from '../assets/ToyTopia_logo.png'; // Importing the hero image for the navbar background

// // const Navbar = () => {
// //   // State to manage the mobile dropdown visibility
// //   const [isOpen, setIsOpen] = useState(false);

// //   // Function to toggle the dropdown
// //   const toggleDropdown = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className="relative">
// //       {/* Hero Image */}
// //       <div
// //         className="w-full h-screen bg-cover bg-center"
// //         style={{ backgroundImage: `url(${image})` }}
// //       >
// //         {/* Dark Overlay for contrast */}
// //         <div className="absolute inset-0 bg-black opacity-50"></div>

// //         {/* Content on Hero Image */}
// //         <div className="absolute inset-0 flex justify-center items-center text-center text-white">
// //           <div className="space-y-6 px-4 md:px-16">
// //             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-shadow-lg">
// //               Welcome to ToyTopia!
// //             </h1>
// //             <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-80">
// //               Explore the world of toys with a never-before-seen experience.
// //             </p>
// //             <div>
// //               <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
// //                 Start Exploring
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Navbar */}
// //       <div className="absolute top-0 left-0 w-full shadow-xl p-4 z-50">
// //         <div className="relative flex justify-between items-center w-full">
// //           {/* Left Side - ToyTopia Logo */}
// //           <div className="flex items-center ml-8">
// //             <img src={logo} alt="ToyTopia Logo" className="w-32" />
// //           </div>

// //           {/* Center - Desktop Home and My Profile */}
// //           <div className="hidden md:flex justify-center gap-12">
// //             <Link
// //               to="/"
// //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// //             >
// //               Home
// //             </Link>
// //             <Link
// //               to="/profile"
// //               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
// //             >
// //               My Profile
// //             </Link>
// //           </div>

// //           {/* Mobile Dropdown Menu */}
// //           <div className="md:hidden flex items-center justify-between space-x-4">
// //             <button
// //               onClick={toggleDropdown}
// //               className="text-white hover:text-blue-600 text-3xl"
// //             >
// //               <FaBars />
// //             </button>
// //             {isOpen && (
// //               <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10 transition-all ease-in-out duration-300">
// //                 <Link
// //                   to="/"
// //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// //                 >
// //                   Home
// //                 </Link>
// //                 <Link
// //                   to="/profile"
// //                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
// //                 >
// //                   My Profile
// //                 </Link>
// //                 <div className="mt-4">
// //                   <Link to="/login">
// //                     <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// //                       Login
// //                     </button>
// //                   </Link>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Right Side - Stylish Login Button for larger screens */}
// //           <div className="hidden md:flex gap-4 mr-8">
// //             <Link to="/login">
// //               <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
// //                 Login
// //               </button>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { auth } from '../Firebase/firebase-config'; // Import Firebase auth
// import { onAuthStateChanged, signOut } from 'firebase/auth'; // For authentication

// import image from '../assets/hero1.jpg';
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

//     return () => unsubscribe(); // Clean up the subscription
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
//     <div className="relative">
//       <div
//         className="w-full h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${image})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="absolute inset-0 flex justify-center items-center text-center text-white">
//           <div className="space-y-6 px-4 md:px-16">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-shadow-lg">
//               Welcome to ToyTopia!
//             </h1>
//             <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-80">
//               Explore the world of toys with a never-before-seen experience.
//             </p>
//             <div>
//               <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
//                 Start Exploring
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navbar */}
//       <div className="absolute top-0 left-0 w-full shadow-xl p-4 z-50">
//         <div className="relative flex justify-between items-center w-full">
//           <div className="flex items-center ml-8">
//             <img src={logo} alt="ToyTopia Logo" className="w-32" />
//           </div>

//           <div className="hidden md:flex justify-center gap-12">
//             <Link
//               to="/"
//               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
//             >
//               Home
//             </Link>
//             <Link
//               to="/profile"
//               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
//             >
//               My Profile
//             </Link>
//           </div>

//           {/* Mobile Dropdown Menu */}
//           <div className="md:hidden flex items-center justify-between space-x-4">
//             <button
//               onClick={toggleDropdown}
//               className="text-white hover:text-blue-600 text-3xl"
//             >
//               <FaBars />
//             </button>
//             {isOpen && (
//               <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10 transition-all ease-in-out duration-300">
//                 <Link
//                   to="/"
//                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/profile"
//                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
//                 >
//                   My Profile
//                 </Link>
//                 <div className="mt-4">
//                   {!user ? (
//                     <Link to="/login">
//                       <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
//                         Login
//                       </button>
//                     </Link>
//                   ) : (
//                     <button
//                       onClick={handleLogout}
//                       className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out"
//                     >
//                       Logout
//                     </button>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="hidden md:flex gap-4 mr-8">
//             {!user ? (
//               <Link to="/login">
//                 <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
//                   Login
//                 </button>
//               </Link>
//             ) : (
//               <>
//                 <img
//                   src={user.photoURL || 'default-image.jpg'}
//                   alt="User"
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <span className="text-white ml-2">{user.displayName}</span>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/firebase-config'; // Import Firebase auth
import { onAuthStateChanged, signOut } from 'firebase/auth'; // For authentication

import image from '../assets/hero1.jpg';
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

    return () => unsubscribe(); // Clean up the subscription
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
    <div className="relative">
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center text-center text-white">
          <div className="space-y-6 px-4 md:px-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-shadow-lg">
              Welcome to ToyTopia!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-80">
              Explore the world of toys with a never-before-seen experience.
            </p>
            <div>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full shadow-xl p-4 z-50">
        <div className="relative flex justify-between items-center w-full">
          <div className="flex items-center ml-8">
            <img src={logo} alt="ToyTopia Logo" className="w-32" />
          </div>

          <div className="hidden md:flex justify-center gap-12">
            <Link
              to="/"
              className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
            >
              Home
            </Link>
            <Link
              to="/profile"
              className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
            >
              My Profile
            </Link>
          </div>

          {/* Mobile Dropdown Menu */}
          <div className="md:hidden flex items-center justify-between space-x-4">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-blue-600 text-3xl"
            >
              <FaBars />
            </button>
            {isOpen && (
              <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10 transition-all ease-in-out duration-300">
                <Link
                  to="/"
                  className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
                >
                  Home
                </Link>
                <Link
                  to="/profile"
                  className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
                >
                  My Profile
                </Link>
                <div className="mt-4">
                  {!user ? (
                    <Link to="/login">
                      <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
                        Login
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={handleLogout}
                      className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 mr-8">
            {!user ? (
              <Link to="/login">
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
                  Login
                </button>
              </Link>
            ) : (
              <>
                {/* Profile Image and Name (Visible on Hover) */}
                <div className="relative">
                  <img
                    src={user.photoURL || 'https://via.placeholder.com/150'}
                    alt="User"
                    className="w-12 h-12 rounded-full cursor-pointer"
                  />
                  <div className="absolute top-14 left-0 text-white bg-black bg-opacity-70 p-2 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
                    {user.displayName}
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { auth } from '../Firebase/firebase-config'; // Import Firebase auth
// import { onAuthStateChanged, signOut } from 'firebase/auth'; // For authentication

// import image from '../assets/hero1.jpg';
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

//     return () => unsubscribe(); // Clean up the subscription
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
//     <div className="relative">
//       <div
//         className="w-full h-screen bg-cover bg-center"
//         style={{ backgroundImage: `url(${image})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="absolute inset-0 flex justify-center items-center text-center text-white">
//           <div className="space-y-6 px-4 md:px-16">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-shadow-lg">
//               Welcome to ToyTopia!
//             </h1>
//             <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-80">
//               Explore the world of toys with a never-before-seen experience.
//             </p>
//             <div>
//               <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
//                 Start Exploring
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navbar */}
//       <div className="absolute top-0 left-0 w-full shadow-xl p-4 z-50">
//         <div className="relative flex justify-between items-center w-full">
//           <div className="flex items-center ml-8">
//             <img src={logo} alt="ToyTopia Logo" className="w-32" />
//           </div>

//           <div className="hidden md:flex justify-center gap-12">
//             <Link
//               to="/"
//               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
//             >
//               Home
//             </Link>
//             <Link
//               to="/profile"
//               className="text-xl font-medium text-white hover:text-blue-600 transition duration-300 ease-in-out py-2 px-4"
//             >
//               My Profile
//             </Link>
//           </div>

//           {/* Mobile Dropdown Menu */}
//           <div className="md:hidden flex items-center justify-between space-x-4">
//             <button
//               onClick={toggleDropdown}
//               className="text-white hover:text-blue-600 text-3xl"
//             >
//               <FaBars />
//             </button>
//             {isOpen && (
//               <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg w-40 p-4 flex flex-col items-center z-10 transition-all ease-in-out duration-300">
//                 <Link
//                   to="/"
//                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/profile"
//                   className="text-xl font-medium text-gray-700 hover:text-blue-600 py-2 px-4"
//                 >
//                   My Profile
//                 </Link>
//                 <div className="mt-4">
//                   {!user ? (
//                     <Link to="/login">
//                       <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
//                         Login
//                       </button>
//                     </Link>
//                   ) : (
//                     <button
//                       onClick={handleLogout}
//                       className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out"
//                     >
//                       Logout
//                     </button>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-4 mr-8">
//             {!user ? (
//               <Link to="/login">
//                 <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out">
//                   Login
//                 </button>
//               </Link>
//             ) : (
//               <>
//                 {/* Profile Image and Name (Visible on Hover) */}
//                 <div className="relative">
//                   <img
//                     src={user.photoURL || 'https://via.placeholder.com/150'}
//                     alt="User"
//                     className="w-12 h-12 rounded-full cursor-pointer"
//                   />
//                   {/* Hover effect for desktop */}
//                   <div className="absolute top-14 left-0 text-white bg-black bg-opacity-70 p-2 rounded-lg text-sm opacity-0 transition-opacity duration-300 hover:opacity-100">
//                     {user.displayName}
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 transition-all duration-300 ease-in-out"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
