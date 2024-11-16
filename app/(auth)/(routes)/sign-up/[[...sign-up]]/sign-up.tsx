"use client";

import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null); // Set type to string | null
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle file input for profile picture
  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Ensure files exist
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string); // Cast result as string
      };
      reader.readAsDataURL(file);
    }
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Prepare form data
    const formData = {
      username,
      firstName,
      lastName,
      email,
      mobile,
      password,
      profilePic,
    };

    try {
      // Make the API request with Axios
      const response = await axios.post(`${process.env.BACKEND_API_URL}/account/register`, formData);
      console.log('Response:', response.data); 
      alert('Sign up successful!');
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="lg:h-[400px] md:h-[300px] mt-12">
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rfmez6sw49jyi2st13jd.gif"
          className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
          alt="Signup Illustration"
          style={{ marginLeft: '50px' }}
        />
      </div>

      <div className="max-w-3xl mx-auto font-[sans-serif] p-8 bg-white shadow-xl rounded-lg">
        <div className="text-center mb-12">
          <a href="javascript:void(0)">
            <img
              src="https://ethz.ch/staffnet/en/service/communication/corporate-design/logo/_jcr_content/par/greybox/par/image/image.imageformat.1286.1811079109.png"
              className="w-[65%] h-full max-md:w-full mx-auto block object-cover"
              alt="Signup Illustration"
              style={{ marginTop: '40px' }}
            />
          </a>
          <h4 className="text-gray-800 text-xl font-semibold mt-6" style={{ marginBottom: "-30px" }}>Sign up for your account</h4>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Profile Picture Upload Field */}
          <div className="col-span-2">
            <label className="text-gray-800 text-sm mb-2 block" style={{ textAlign: "center", fontWeight: "bold" }} >Profile Picture</label>
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  src={profilePic || 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ppj1k5y1hvda3l8eatxm.png'}
                  alt="Profile"
                  className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8" style={{ marginTop: "20px" }}>
            {/* Username Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Username</label>
              <input
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-100 w-full text-gray-800 text-sm px-6 py-4 rounded-md focus:bg-transparent focus:outline-none border-2 border-gray-300"
                placeholder="Enter username"
              />
            </div>

            {/* First Name Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">First Name</label>
              <input
                name="name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-gray-100 w-full text-gray-800 text-sm px-6 py-4 rounded-md focus:bg-transparent focus:outline-none border-2 border-gray-300"
                placeholder="Enter first name"
              />
            </div>

            {/* Last Name Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
              <input
                name="lname"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-gray-100 w-full text-gray-800 text-sm px-6 py-4 rounded-md focus:bg-transparent focus:outline-none border-2 border-gray-300"
                placeholder="Enter last name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 w-full text-gray-800 text-sm px-6 py-4 rounded-md focus:bg-transparent focus:outline-none border-2 border-gray-300"
                placeholder="Enter email"
              />
            </div>

            {/* Mobile No. Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
              <input
                name="number"
                type="number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="bg-gray-100 w-full text-gray-800 text-sm px-6 py-4 rounded-md focus:bg-transparent focus:outline-none border-2 border-gray-300"
                placeholder="Enter mobile number"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 w-full text-gray-800 text-sm px-6 py-4 rounded-md focus:bg-transparent focus:outline-none border-2 border-gray-300"
                placeholder="Enter password"
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input
                name="cpassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-100 w-full text-gray-800 text-sm px-6 py-4 rounded-md focus:bg-transparent focus:outline-none border-2 border-gray-300"
                placeholder="Confirm password"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="!mt-8 text-center">
            <button
              type="submit"
              className="py-4 px-8 text-lg font-semibold tracking-wide rounded-md text-white bg-black hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200"
              style={{ marginLeft: "200px" }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
