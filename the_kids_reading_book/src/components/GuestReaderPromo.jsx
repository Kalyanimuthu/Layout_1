import React from 'react';

function GuestReaderPromo() {
  return (
    <div className="bg-[#03194F]">
    <section className="max-w-6xl mx-auto text-white px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 font-inter">
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl mb-4">Introducing the Guest Reader Program</h2>
        <p className="text-lg mb-6">
          Our FREE program combines videochat 
          technology with over 1,000 interactive, digitized 
          books to help volunteers read to their child's class 
          anytime, from anywhere.
        </p>
        <p className="text-md font-semibold mb-6">FREE for Teachers & Volunteers</p>
        <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition">
          LEARN MORE
        </button>
      </div>

      {/* Right Side: Placeholder for Split-Screen Image */}
      <div className="w-full md:w-1/2">
        <div className="bg-gray-300 h-64 md:h-80 rounded-lg flex items-center justify-center text-[#03194F] font-bold">
          Guest Reader Image Here
        </div>
      </div>
    </section>
    </div>
  );
}

export default GuestReaderPromo;
