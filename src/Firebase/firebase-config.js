// // // // // // src/Firebase/firebase-config.js
// // // // // import { initializeApp } from 'firebase/app';
// // // // // import { getAuth } from 'firebase/auth';
// // // // // import { getFirestore } from 'firebase/firestore';

// // // // // const firebaseConfig = {
// // // // //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// // // // //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// // // // //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// // // // //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// // // // //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// // // // //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// // // // // };

// // // // // const app = initializeApp(firebaseConfig);
// // // // // const auth = getAuth(app);
// // // // // const db = getFirestore(app);

// // // // // export { auth, db };

// // // // import { initializeApp } from 'firebase/app';

// // // // // Access environment variables
// // // // const firebaseConfig = {
// // // //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
// // // //   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
// // // //   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
// // // //   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
// // // //   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
// // // //   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// // // //   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// // // // };

// // // // const app = initializeApp(firebaseConfig);
// // // // export default app;



// // // // firebase-config.js
// // // import { initializeApp } from 'firebase/app';
// // // import { getAuth } from 'firebase/auth'; // Import getAuth for authentication

// // // // Firebase configuration
// // // const firebaseConfig = {
// // //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
// // //   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
// // //   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
// // //   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
// // //   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
// // //   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// // //   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// // // };

// // // // Initialize Firebase app
// // // const app = initializeApp(firebaseConfig);

// // // // Initialize Firebase Authentication
// // // const auth = getAuth(app);

// // // // Export auth object and app
// // // export { auth };
// // // export default app;

// // // firebase-config.js
// // import { initializeApp } from 'firebase/app';
// // import { getAuth } from 'firebase/auth';

// // // Ensure these values are correct from your Firebase console
// // const firebaseConfig = {
// //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // Ensure it's set in .env
// //   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, // Ensure it's set in .env
// //   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, // Ensure it's set in .env
// //   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // Ensure it's set in .env
// //   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, // Ensure it's set in .env
// //   appId: import.meta.env.VITE_FIREBASE_APP_ID, // Ensure it's set in .env
// //   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, // Ensure it's set in .env
// // };

// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);

// // export { auth };


// // src/Firebase/firebase-config.js
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// // Firebase configuration using environment variables
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,  // Make sure to set these in your .env file
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication
// const auth = getAuth(app);

// // Export auth and app for use in other files
// export { auth };
// export default app;


// firebase-config.js



import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Optional: if you need authentication

// Use environment variables to configure Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Optional: if you need Firebase Authentication

export { auth }; // Export auth if needed
export default app;
