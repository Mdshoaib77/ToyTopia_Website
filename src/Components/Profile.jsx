// import React, { useState, useEffect } from 'react';
// import { auth } from '../Firebase/firebase-config'; // Firebase configuration
// import { onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         navigate('/login'); // Redirect to login if no user is logged in
//       }
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>
//         <div className="mb-4">
//           <p><strong>Name:</strong> {user.displayName || 'No name set'}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Photo:</strong></p>
//           <img src={user.photoURL || 'default-avatar.png'} alt="Profile" className="w-32 h-32 rounded-full" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// Profile.jsx


// import React, { useState, useEffect } from 'react';
// import { auth } from '../Firebase/firebase-config';
// import { updateProfile } from 'firebase/auth';

// const Profile = () => {
//   const [name, setName] = useState('');
//   const [photoURL, setPhotoURL] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (auth.currentUser) {
//       setName(auth.currentUser.displayName || '');
//       setPhotoURL(auth.currentUser.photoURL || '');
//     }
//   }, []);

//   const handleSave = () => {
//     setLoading(true);
//     updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photoURL
//     })
//       .then(() => {
//         setLoading(false);
//         alert('Profile updated successfully');
//       })
//       .catch((error) => {
//         setLoading(false);
//         alert('Error updating profile: ' + error.message);
//       });
//   };

//   return (
//     <div>
//       <h2>My Profile</h2>
//       {loading ? <div>Loading...</div> : (
//         <>
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Photo URL:</label>
//             <input
//               type="text"
//               value={photoURL}
//               onChange={(e) => setPhotoURL(e.target.value)}
//             />
//           </div>
//           <button onClick={handleSave}>Save</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Profile;


// import React, { useState, useEffect } from 'react';
// import { auth } from '../Firebase/firebase-config';
// import { updateProfile } from 'firebase/auth';

// const Profile = () => {
//   const [name, setName] = useState('');
//   const [photoURL, setPhotoURL] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Fetch user data when the component mounts
//   useEffect(() => {
//     if (auth.currentUser) {
//       setName(auth.currentUser.displayName || '');
//       setPhotoURL(auth.currentUser.photoURL || '');
//     }
//   }, []);

//   // Handle profile update
//   const handleSave = () => {
//     setLoading(true);
//     updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photoURL,
//     })
//       .then(() => {
//         setLoading(false);
//         alert('Profile updated successfully');
//       })
//       .catch((error) => {
//         setLoading(false);
//         alert('Error updating profile: ' + error.message);
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
//         {/* Profile Image and Name */}
//         <div className="flex flex-col items-center mb-8">
//           <img
//             src={photoURL || 'https://via.placeholder.com/150'}
//             alt="User Profile"
//             className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500"
//           />
//           <h2 className="text-2xl font-semibold text-gray-800">{name || 'User Name'}</h2>
//         </div>

//         {/* Update Profile Form */}
//         {loading ? (
//           <div className="text-center text-blue-600">Updating...</div>
//         ) : (
//           <div>
//             <div className="mb-6">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your full name"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
//                 Profile Photo URL
//               </label>
//               <input
//                 type="text"
//                 id="photoURL"
//                 value={photoURL}
//                 onChange={(e) => setPhotoURL(e.target.value)}
//                 className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your photo URL"
//               />
//             </div>

//             <button
//               onClick={handleSave}
//               className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
//             >
//               Save Changes
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase/firebase-config'; // Firebase authentication setup
import { updateProfile } from 'firebase/auth'; // Firebase method to update profile info

const Profile = () => {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  // Fetch user data when the component mounts
  useEffect(() => {
    if (auth.currentUser) {
      setName(auth.currentUser.displayName || '');
      setPhotoURL(auth.currentUser.photoURL || '');
      setEmail(auth.currentUser.email || ''); // Fetch user email
    }
  }, []);

  // Handle profile update
  const handleSave = async () => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      alert('Profile updated successfully');
    } catch (error) {
      alert('Error updating profile: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        {/* Profile Image and Name */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={photoURL || 'https://via.placeholder.com/150'}
            alt="User Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500"
          />
          <h2 className="text-2xl font-semibold text-gray-800">{name || 'User Name'}</h2>
          <p className="text-gray-600">{email}</p>
        </div>

        {/* Update Profile Form */}
        {loading ? (
          <div className="text-center text-blue-600">Updating...</div>
        ) : (
          <div>
            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Photo URL Field */}
            <div className="mb-6">
              <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                Profile Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your photo URL"
              />
            </div>

            {/* Save Changes Button */}
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
