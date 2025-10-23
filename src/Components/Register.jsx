// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom'; // Import Link for navigation
// // // import { FaGoogle } from 'react-icons/fa'; // Google icon

// // // const Register = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [confirmPassword, setConfirmPassword] = useState('');

// // //   // Handle form submission (for now, just logging)
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (password !== confirmPassword) {
// // //       alert("Passwords do not match!");
// // //       return;
// // //     }
// // //     console.log('Email:', email);
// // //     console.log('Password:', password);
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex justify-center items-center bg-gray-100">
// // //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// // //         <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>

// // //         <form onSubmit={handleSubmit}>
// // //           <div className="mb-4">
// // //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
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

// // //           <div className="mb-4">
// // //             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
// // //             <input
// // //               type="password"
// // //               id="confirmPassword"
// // //               name="confirmPassword"
// // //               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// // //               value={confirmPassword}
// // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           {/* Sign Up Button */}
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
// // //           >
// // //             Sign Up
// // //           </button>
// // //         </form>

// // //         {/* OR Divider */}
// // //         <div className="flex items-center my-6">
// // //           <div className="flex-grow h-px bg-gray-300"></div>
// // //           <span className="px-4 text-sm text-gray-600">OR</span>
// // //           <div className="flex-grow h-px bg-gray-300"></div>
// // //         </div>

// // //         {/* Google Sign-up Button */}
// // //         <button className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
// // //           <FaGoogle />
// // //           <span>Continue with Google</span>
// // //         </button>

// // //         {/* Login Link */}
// // //         <div className="mt-4 text-center">
// // //           <p className="text-sm">
// // //             Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Register;


// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom'; 
// // // import { FaGoogle } from 'react-icons/fa'; 
// // // import { createUserWithEmailAndPassword } from 'firebase/auth'; 
// // // // import { auth } from './firebase'; // Import auth service from firebase
// // // import { auth } from '../Firebase/firebase-config'; // Corrected path

// // // const Register = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [confirmPassword, setConfirmPassword] = useState('');
// // //   const [error, setError] = useState('');
// // //   const navigate = useNavigate(); // to navigate on successful registration

// // //   // Handle registration form submission
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (password !== confirmPassword) {
// // //       setError('Passwords do not match!');
// // //       return;
// // //     }

// // //     try {
// // //       await createUserWithEmailAndPassword(auth, email, password);
// // //       navigate('/profile'); // Redirect to profile page after successful registration
// // //     } catch (err) {
// // //       setError('Failed to register');
// // //       console.error(err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex justify-center items-center bg-gray-100">
// // //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// // //         <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>

// // //         {error && <p className="text-red-500 text-center">{error}</p>}

// // //         <form onSubmit={handleSubmit}>
// // //           <div className="mb-4">
// // //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
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

// // //           <div className="mb-4">
// // //             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
// // //             <input
// // //               type="password"
// // //               id="confirmPassword"
// // //               name="confirmPassword"
// // //               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// // //               value={confirmPassword}
// // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // //               required
// // //             />
// // //           </div>

// // //           {/* Sign Up Button */}
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
// // //           >
// // //             Sign Up
// // //           </button>
// // //         </form>

// // //         {/* OR Divider */}
// // //         <div className="flex items-center my-6">
// // //           <div className="flex-grow h-px bg-gray-300"></div>
// // //           <span className="px-4 text-sm text-gray-600">OR</span>
// // //           <div className="flex-grow h-px bg-gray-300"></div>
// // //         </div>

// // //         {/* Google Sign-up Button */}
// // //         <button className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
// // //           <FaGoogle />
// // //           <span>Continue with Google</span>
// // //         </button>

// // //         {/* Login Link */}
// // //         <div className="mt-4 text-center">
// // //           <p className="text-sm">
// // //             Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Register;

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FaGoogle } from 'react-icons/fa';
// // import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// // import { auth } from '../Firebase/firebase-config'; // Firebase configuration

// // const Register = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [passwordVisible, setPasswordVisible] = useState(false);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match!');
// //       return;
// //     }

// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //       await updateProfile(userCredential.user, {
// //         displayName: email.split('@')[0], // Set user display name based on email
// //       });
// //       navigate('/profile'); // Redirect to profile page after registration
// //     } catch (err) {
// //       setError('Failed to register');
// //       console.error(err);
// //     }
// //   };

// //   // Google Registration
// //   const handleGoogleSignUp = async () => {
// //     const provider = new GoogleAuthProvider();
// //     try {
// //       await signInWithPopup(auth, provider);
// //       navigate('/profile');
// //     } catch (err) {
// //       setError('Google sign-up failed');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gray-100">
// //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// //         <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>

// //         {error && <p className="text-red-500 text-center">{error}</p>}

// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
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

// //           <div className="mb-4">
// //             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
// //             <input
// //               type="password"
// //               id="confirmPassword"
// //               name="confirmPassword"
// //               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               required
// //             />
// //           </div>

// //           {/* Sign Up Button */}
// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
// //           >
// //             Sign Up
// //           </button>
// //         </form>

// //         {/* OR Divider */}
// //         <div className="flex items-center my-6">
// //           <div className="flex-grow h-px bg-gray-300"></div>
// //           <span className="px-4 text-sm text-gray-600">OR</span>
// //           <div className="flex-grow h-px bg-gray-300"></div>
// //         </div>

// //         {/* Google Sign-up Button */}
// //         <button onClick={handleGoogleSignUp} className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
// //           <FaGoogle />
// //           <span>Continue with Google</span>
// //         </button>

// //         {/* Login Link */}
// //         <div className="mt-4 text-center">
// //           <p className="text-sm">
// //             Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;


// // src/Components/Register.jsx

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FaGoogle } from 'react-icons/fa';
// // import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// // import { auth } from '../Firebase/firebase-config'; // Correct path to firebase-config
// // import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';  // Add Google provider

// // const Register = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [passwordVisible, setPasswordVisible] = useState(false);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match!');
// //       return;
// //     }

// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //       await updateProfile(userCredential.user, {
// //         displayName: email.split('@')[0], // Set user display name based on email
// //       });
// //       navigate('/profile'); // Redirect to profile page after successful registration
// //     } catch (err) {
// //       setError('Failed to register');
// //       console.error(err);
// //     }
// //   };

// //   // Google Sign-Up functionality
// //   const handleGoogleSignUp = async () => {
// //     const provider = new GoogleAuthProvider();
// //     try {
// //       await signInWithPopup(auth, provider);
// //       navigate('/profile'); // Navigate to profile page after successful login
// //     } catch (err) {
// //       setError('Google sign-up failed');
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gray-100">
// //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// //         <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>

// //         {error && <p className="text-red-500 text-center">{error}</p>}

// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
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

// //           <div className="mb-4">
// //             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
// //             <input
// //               type="password"
// //               id="confirmPassword"
// //               name="confirmPassword"
// //               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               required
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
// //           >
// //             Sign Up
// //           </button>
// //         </form>

// //         <div className="flex items-center my-6">
// //           <div className="flex-grow h-px bg-gray-300"></div>
// //           <span className="px-4 text-sm text-gray-600">OR</span>
// //           <div className="flex-grow h-px bg-gray-300"></div>
// //         </div>

// //         <button onClick={handleGoogleSignUp} className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
// //           <FaGoogle />
// //           <span>Continue with Google</span>
// //         </button>

// //         <div className="mt-4 text-center">
// //           <p className="text-sm">
// //             Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;


// // src/Components/Register.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
// import { FaGoogle } from 'react-icons/fa'; 
// import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from '../Firebase/firebase-config'; // Correct path to firebase-config

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
//       setError('Password must contain an uppercase letter, a lowercase letter, and be at least 6 characters long.');
//       return;
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(userCredential.user, {
//         displayName: email.split('@')[0], // Set user display name based on email
//       });
//       navigate('/profile'); // Redirect to profile page after successful registration
//     } catch (err) {
//       setError('Failed to register');
//       console.error(err);
//     }
//   };

//   // Google Sign-Up functionality
//   const handleGoogleSignUp = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//       navigate('/profile'); // Redirect to profile page after successful login
//     } catch (err) {
//       setError('Google sign-up failed');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>

//         {error && <p className="text-red-500 text-center">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
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
//             <div className="relative">
//               <input
//                 type={passwordVisible ? 'text' : 'password'}
//                 id="password"
//                 name="password"
//                 className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//               >
//                 👁️
//               </button>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
//           >
//             Sign Up
//           </button>
//         </form>

//         <div className="flex items-center my-6">
//           <div className="flex-grow h-px bg-gray-300"></div>
//           <span className="px-4 text-sm text-gray-600">OR</span>
//           <div className="flex-grow h-px bg-gray-300"></div>
//         </div>

//         <button onClick={handleGoogleSignUp} className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
//           <FaGoogle />
//           <span>Continue with Google</span>
//         </button>

//         <div className="mt-4 text-center">
//           <p className="text-sm">
//             Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// src/Components/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaGoogle } from 'react-icons/fa'; 
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config'; // Correct path to firebase-config

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Password validation: Uppercase, lowercase, and length >= 6
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
      setError('Password must contain an uppercase letter, a lowercase letter, and be at least 6 characters long.');
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile with name and photo URL
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL,
      });

      navigate('/profile'); // Redirect to profile page after successful registration
    } catch (err) {
      setError('Failed to register');
      console.error(err);
    }
  };

  // Google Sign-Up functionality
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/profile'); // Redirect to profile page after successful login
    } catch (err) {
      setError('Google sign-up failed');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
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
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Profile Picture URL</label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                👁️
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-600">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button onClick={handleGoogleSignUp} className="w-full bg-red-500 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <FaGoogle />
          <span>Continue with Google</span>
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
