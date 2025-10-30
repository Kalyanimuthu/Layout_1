import React from 'react';

function StorytimePromo() {
  return (
    <div className='bg-[#F7F8F1] border-b border-gray-200'>
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 font-inter">
        
      {/* Left Side: Placeholder for Laptop Image */}
      <div className="w-full md:w-1/2">
        {/* Laptop image */}
        <div className="bg-gray-300 h-64 md:h-80 rounded-lg flex items-center justify-center text-[#03194F] font-bold">
          Laptop Image Here
        </div>
      </div>

      {/* Right Side: Text and CTA */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl text-[#1E4786] font-bold mb-4">More storytime means more quality time</h2>
        <p className="text-lg mb-6">
          Our patented BookChat platform makes it easier to capture kids’ attention.
          By combining interactive, digitized books with video chat, BookChat sessions
          last almost 10 minutes longer than traditional video calls.
        </p>
        <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition">
          SIGN UP FOR FREE
        </button>
      </div>
      
    </section>
    </div>
  );
}

export default StorytimePromo;
