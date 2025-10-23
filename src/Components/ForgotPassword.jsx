import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Pre-fill email if passed from the login page
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleResetPassword = () => {
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    // Redirect to Gmail with a pre-filled email subject and body for password reset
    window.location.href = `mailto:support@example.com?subject=Password Reset Request&body=Please send me instructions to reset my password for the account associated with the email: ${email}`;
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        
        {error && <p className="text-red-500 text-center">{error}</p>}
        {message && <p className="text-green-500 text-center">{message}</p>}
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="button"
            onClick={handleResetPassword}
            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-full hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            Reset Password
          </button>
        </form>

        {/* Back to Login Link */}
        <div className="mt-4 text-center">
          <Link to="/login" className="text-sm text-blue-600 hover:underline">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
