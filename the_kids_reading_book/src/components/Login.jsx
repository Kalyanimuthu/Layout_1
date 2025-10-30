
import React, { useState } from 'react';
import { Link} from 'react-router-dom';

function LoginPage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="bg-[#BBD8FF] min-h-screen flex items-center justify-center font-inter">
      <div className="p-8 w-full max-w-xl">
        {/* Social Login */}
        <button className="w-full flex items-center justify-center gap-2 bg-white font-bold text-black py-3 rounded-full mb-4">
          <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
          CONTINUE WITH GOOGLE
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-black font-bold text-white py-3 rounded-full mb-4">
          <img src="/icons/apple.svg" alt="Apple" className="w-5 h-5" />
          CONTINUE WITH APPLE
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-[#78ABF1]" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-[#78ABF1]" />
        </div>

        {/* Email Login */}
        <div className="flex flex-col justify-center">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-4 py-3 mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-4 py-3 mb-14"
        />
        <button
            className="max-w-xs mx-auto px-12 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? 'GET STARTED FOR FREE' : 'START READING'}
          </button>
        </div>
        {/* Footer Links */}
        <p className="text-lg text-center text-black mt-4">
          By continuing, you agree to our
          <br/>
          <a href="#" className="underline font-bold">Terms of service</a> and <a href="#" className="underline font-bold">Privacy policy</a>.
        </p>

          <p className="mt-4 text-center text-lg text-black">Need help logging in? <a href="#" className="font-bold">Click here</a></p>
          
          <p className="mt-4 text-center text-lg text-black">New to KidsReading? <Link to="/signup" className="underline font-bold">SIGN UP</Link></p>
        
      </div>
    </section>
  );
}

export default LoginPage;
