import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';


function BookChatHero() {
  return (
    <div className='bg-[#03194F] text-white'>
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12 font-inter">
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-5xl mb-4">Read together from anywhere</h1>
      <p className="text-lg max-w-2xl mb-6">
        BookChat™ by Readeo lets you enjoy more time with the little ones in your life,
        even when you're apart by combining video chat with over 1,500 digital kids' books.
      </p>
      <div className="flex gap-4">
        <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition">
          TRY IT FOR FREE
        </button>
        <button className="flex items-center justify-center gap-2 text-white font-semibold px-6 py-2 rounded">
          <FaPlayCircle className="text-white text-4xl" /> SEE IT IN ACTION
        </button>
      </div>
      </div>

      {/* Right Side: Placeholder for Illustration */}
      <div className="w-full md:w-1/2">
        {/* Replace with actual image */}
        <div className="bg-gray-300 h-64 md:h-80 rounded-lg flex items-center justify-center text-[#03194F] font-bold">
          Family Illustration Here
        </div>
      </div>
    </section>
    </div>
  );
}

export default BookChatHero;
