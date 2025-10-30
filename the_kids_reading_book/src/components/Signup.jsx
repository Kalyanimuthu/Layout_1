// pages/SignupPage.jsx
import React, { useState } from 'react';
import { Link} from 'react-router-dom';

function SignupPage() {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="bg-[#BBD8FF] min-h-screen flex items-center justify-center font-inter">
      <div className="p-8 w-full max-w-xl">
        

        {/* Social Signup */}
        <button className="w-full flex items-center justify-center gap-2 bg-white font-bold text-black py-3 rounded-full mb-4 border border-gray-300">
          <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
          SIGN UP WITH GOOGLE
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-black font-bold text-white py-3 rounded-full mb-4">
          <img src="/icons/apple.svg" alt="Apple" className="w-5 h-5" />
          CONTINUE WITH APPLE
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-[#78ABF1]" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-[#78ABF1]" />
        </div>

        {/* Signup Form */}
        <div className="flex flex-col gap-4 justify-center">
  {/* First + Last Name side-by-side */}
  <div className="grid grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="First Name"
      className="border border-gray-300 rounded px-4 py-3 text-black"
    />
    <input
      type="text"
      placeholder="Last Name"
      className="border border-gray-300 rounded px-4 py-3 text-black"
    />
  </div>

  {/* Email + Password stacked */}
  
  <input
    type="email"
    placeholder="Email"
    className="border border-gray-300 rounded px-4 py-3 text-black"
  />
  <input
    type="password"
    placeholder="Password"
    className="border border-gray-300 rounded px-4 py-3 mb-8 text-black"
  />



        <button
            className="max-w-xs mx-auto px-12 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? 'GET STARTED FOR FREE' : 'GET STARTED'}
          </button>
</div>
        {/* Footer */}
        <p className="text-lg text-center text-black mt-6">
          By continuing, you agree to our <a href="#" className="underline font-bold">Terms of service</a> and <a href="#" className="underline font-bold">Privacy policy</a>.
        </p>
        <p className="mt-4 text-center text-lg text-black">
          Already have a KidsReading account? <Link to="/login" className="font-bold">Log In Here</Link>
        </p>
      </div>
    </section>
  );
}

export default SignupPage;
