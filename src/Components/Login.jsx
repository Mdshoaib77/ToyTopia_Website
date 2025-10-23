// // // // import React, { useState } from 'react';
// // // // import { Link } from 'react-router-dom'; // Import Link for navigation
// // // // import { FaGoogle } from 'react-icons/fa'; // Google icon

// // // // const Login = () => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');

// // // //   // Handle form submission (for now, just logging)
// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log('Email:', email);
// // // //     console.log('Password:', password);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex justify-center items-center bg-gray-100">
// // // //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// // // //         <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

// // // //         <form onSubmit={handleSubmit}>
// // // //           <div className="mb-4">
// // // //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
// // // //             <input
// // // //               type="email"
// // // //               id="email"
// // // //               name="email"
// // // //               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="mb-4">
// // // //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
// // // //             <input
// // // //               type="password"
// // // //               id="password"
// // // //               name="password"
// // // //               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>

// // // //           {/* Forgot Password Link */}
// // // //           <div className="mb-6 text-right">
// // // //             <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">
// // // //               Forgot Password?
// // // //             </Link>
// // // //           </div>

// // // //           {/* Login Button */}
// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
// // // //           >
// // // //             Login
// // // //           </button>
// // // //         </form>

// // // //         {/* OR Divider */}
// // // //         <div className="flex items-center my-6">
// // // //           <div className="flex-grow h-px bg-gray-300"></div>
// // // //           <span className="px-4 text-sm text-gray-600">OR</span>
// // // //           <div className="flex-grow h-px bg-gray-300"></div>
// // // //         </div>

// // // //         {/* Google Sign-in Button */}
// // // //         <button className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
// // // //           <FaGoogle />
// // // //           <span>Continue with Google</span>
// // // //         </button>

// // // //         {/* Register Link */}
// // // //         <div className="mt-4 text-center">
// // // //           <p className="text-sm">
// // // //             Don’t have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;




// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom'; 
// // // import { FaGoogle } from 'react-icons/fa'; 
// // // import { signInWithEmailAndPassword } from 'firebase/auth'; 
// // // import { auth } from './firebase'; // Import auth service from firebase

// // // const Login = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [error, setError] = useState('');
// // //   const navigate = useNavigate(); // to navigate on successful login

// // //   // Handle login form submission
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await signInWithEmailAndPassword(auth, email, password);
// // //       navigate('/profile'); // Redirect to profile page after successful login
// // //     } catch (err) {
// // //       setError('Failed to log in');
// // //       console.error(err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex justify-center items-center bg-gray-100">
// // //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// // //         <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

// // //         {error && <p className="text-red-500 text-center">{error}</p>}

// // //         <form onSubmit={handleSubmit}>
// // //           <div className="mb-4">
// // //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
// // //             <input
// // //               type="email"
// // //               id="email"
// // //               name="email"
// // //               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div className="mb-4">
// // //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
// // //             <input
// // //               type="password"
// // //               id="password"
// // //               name="password"
// // //               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           {/* Forgot Password Link */}
// // //           <div className="mb-6 text-right">
// // //             <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">
// // //               Forgot Password?
// // //             </Link>
// // //           </div>

// // //           {/* Login Button */}
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
// // //           >
// // //             Login
// // //           </button>
// // //         </form>

// // //         {/* OR Divider */}
// // //         <div className="flex items-center my-6">
// // //           <div className="flex-grow h-px bg-gray-300"></div>
// // //           <span className="px-4 text-sm text-gray-600">OR</span>
// // //           <div className="flex-grow h-px bg-gray-300"></div>
// // //         </div>

// // //         {/* Google Sign-in Button */}
// // //         <button className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
// // //           <FaGoogle />
// // //           <span>Continue with Google</span>
// // //         </button>

// // //         {/* Register Link */}
// // //         <div className="mt-4 text-center">
// // //           <p className="text-sm">
// // //             Don’t have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;


// // // src/Components/Login.jsx


// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom'; 
// // // import { FaGoogle } from 'react-icons/fa'; 
// // // import { signInWithEmailAndPassword } from 'firebase/auth'; 
// // // import { auth } from '../Firebase/firebase-config'; // Corrected path

// // // const Login = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [error, setError] = useState('');
// // //   const navigate = useNavigate(); // to navigate on successful login

// // //   // Handle login form submission
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await signInWithEmailAndPassword(auth, email, password);
// // //       navigate('/profile'); // Redirect to profile page after successful login
// // //     } catch (err) {
// // //       setError('Failed to log in');
// // //       console.error(err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex justify-center items-center bg-gray-100">
// // //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// // //         <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

// // //         {error && <p className="text-red-500 text-center">{error}</p>}

// // //         <form onSubmit={handleSubmit}>
// // //           <div className="mb-4">
// // //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
// // //             <input
// // //               type="email"
// // //               id="email"
// // //               name="email"
// // //               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           <div className="mb-4">
// // //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
// // //             <input
// // //               type="password"
// // //               id="password"
// // //               name="password"
// // //               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           {/* Forgot Password Link */}
// // //           <div className="mb-6 text-right">
// // //             <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">
// // //               Forgot Password?
// // //             </Link>
// // //           </div>

// // //           {/* Login Button */}
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
// // //           >
// // //             Login
// // //           </button>
// // //         </form>

// // //         {/* OR Divider */}
// // //         <div className="flex items-center my-6">
// // //           <div className="flex-grow h-px bg-gray-300"></div>
// // //           <span className="px-4 text-sm text-gray-600">OR</span>
// // //           <div className="flex-grow h-px bg-gray-300"></div>
// // //         </div>

// // //         {/* Google Sign-in Button */}
// // //         <button className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
// // //           <FaGoogle />
// // //           <span>Continue with Google</span>
// // //         </button>

// // //         {/* Register Link */}
// // //         <div className="mt-4 text-center">
// // //           <p className="text-sm">
// // //             Don’t have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;


// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FaGoogle } from 'react-icons/fa';
// // import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// // import { auth } from '../Firebase/firebase-config'; // Firebase configuration

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [passwordVisible, setPasswordVisible] = useState(false);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       navigate('/profile'); // Redirect to profile page after login
// //     } catch (err) {
// //       setError('Failed to log in');
// //       console.error(err);
// //     }
// //   };

// //   // Google Login
// //   const handleGoogleLogin = async () => {
// //     const provider = new GoogleAuthProvider();
// //     try {
// //       await signInWithPopup(auth, provider);
// //       navigate('/profile');
// //     } catch (err) {
// //       setError('Google login failed');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gray-100">
// //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// //         <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

// //         {error && <p className="text-red-500 text-center">{error}</p>}

// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
// //             <div className="relative">
// //               <input
// //                 type={passwordVisible ? 'text' : 'password'}
// //                 id="password"
// //                 name="password"
// //                 className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //               <button
// //                 type="button"
// //                 className="absolute right-3 top-1/2 transform -translate-y-1/2"
// //                 onClick={() => setPasswordVisible(!passwordVisible)}
// //               >
// //                 👁️
// //               </button>
// //             </div>
// //           </div>

// //           {/* Forgot Password Link */}
// //           <div className="mb-6 text-right">
// //             <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">
// //               Forgot Password?
// //             </Link>
// //           </div>

// //           {/* Login Button */}
// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
// //           >
// //             Login
// //           </button>
// //         </form>

// //         {/* OR Divider */}
// //         <div className="flex items-center my-6">
// //           <div className="flex-grow h-px bg-gray-300"></div>
// //           <span className="px-4 text-sm text-gray-600">OR</span>
// //           <div className="flex-grow h-px bg-gray-300"></div>
// //         </div>

// //         {/* Google Sign-in Button */}
// //         <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
// //           <FaGoogle />
// //           <span>Continue with Google</span>
// //         </button>

// //         {/* Register Link */}
// //         <div className="mt-4 text-center">
// //           <p className="text-sm">
// //             Don’t have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// // Login.jsx


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
// import { FaGoogle } from 'react-icons/fa'; 
// import { signInWithEmailAndPassword } from 'firebase/auth'; 
// import { auth } from '../Firebase/firebase-config'; // Corrected path to firebase-config

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // to navigate on successful login

//   // Handle login form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/profile'); // Redirect to profile page after successful login
//     } catch (err) {
//       setError('Failed to log in');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

//         {error && <p className="text-red-500 text-center">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Forgot Password Link */}
//           <div className="mb-6 text-right">
//             <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">
//               Forgot Password?
//             </Link>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
//           >
//             Login
//           </button>
//         </form>

//         {/* OR Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow h-px bg-gray-300"></div>
//           <span className="px-4 text-sm text-gray-600">OR</span>
//           <div className="flex-grow h-px bg-gray-300"></div>
//         </div>

//         {/* Google Sign-in Button */}
//         <button className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
//           <FaGoogle />
//           <span>Continue with Google</span>
//         </button>

//         {/* Register Link */}
//         <div className="mt-4 text-center">
//           <p className="text-sm">
//             Don’t have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// src/Components/Login.jsx


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaGoogle } from 'react-icons/fa'; 
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; 
import { auth } from '../Firebase/firebase-config'; // Corrected path to firebase-config

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // to navigate on successful login

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/profile'); // Redirect to profile page after successful login
    } catch (err) {
      setError('Failed to log in');
      console.error(err);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/profile'); // Redirect to profile page after successful login
    } catch (err) {
      setError('Google login failed');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6 text-right">
            <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-600">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Sign-in Button */}
        <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <FaGoogle />
          <span>Continue with Google</span>
        </button>

        {/* Register Link */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don’t have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

