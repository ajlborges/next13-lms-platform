"use client";

import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Prepare form data
    const formData = {
      email,
      password,
    };

    try {
      // Make the API request with Axios to reset password
      const response = await axios.post(`${process.env.BACKEND_API_URL}/account/reset-password`, formData);
      console.log('Response:', response.data);
      alert('Password reset successful!');
    } catch (error) {
      console.error('Error during password reset:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="lg:h-[400px] md:h-[300px] mt-12">
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rfmez6sw49jyi2st13jd.gif"
          className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
          alt="Password Reset Illustration"
          style={{ marginLeft: '50px' }}
        />
      </div>

      <div className="max-w-3xl mx-auto font-[sans-serif] p-8 bg-white shadow-xl rounded-lg">
        <div className="text-center mb-12">
          <a href="javascript:void(0)">
            <img
              src="https://ethz.ch/staffnet/en/service/communication/corporate-design/logo/_jcr_content/par/greybox/par/image/image.imageformat.1286.1811079109.png"
              className="w-[65%] h-full max-md:w-full mx-auto block object-cover"
              alt="Reset Password Illustration"
              style={{ marginTop: '40px' }}
            />
          </a>
          <h4 className="text-gray-800 text-xl font-semibold mt-6" style={{ marginBottom: "-30px" }}>Reset your password</h4>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-gray-800 text-sm mb-2 block">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>

          {/* New Password Field */}
          <div>
            <label htmlFor="password" className="text-gray-800 text-sm mb-2 block">New Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirm-password" className="text-gray-800 text-sm mb-2 block">Confirm password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Terms and Conditions checkbox */}
          <div className="flex items-start mt-4">
            <div className="flex items-center h-5">
              <input
                id="newsletter"
                aria-describedby="newsletter"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="newsletter" className="font-light text-gray-500 dark:text-gray-300">
                I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a>
              </label>
            </div>
          </div>

          {/* Reset Password Button */}
          <div className="!mt-8 text-center">
            <button
              type="submit"
              className="py-4 px-8 text-lg font-semibold tracking-wide rounded-md text-white bg-black hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
