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
