import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase/firebase-config'; // Firebase configuration
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/login'); // Redirect to login if no user is logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>
        <div className="mb-4">
          <p><strong>Name:</strong> {user.displayName || 'No name set'}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Photo:</strong></p>
          <img src={user.photoURL || 'default-avatar.png'} alt="Profile" className="w-32 h-32 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
