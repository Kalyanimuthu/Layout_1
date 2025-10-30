import React from 'react';

function HowItWorks() {
  return (
    <div className='bg-[#A9DFED] border border-gray-200'>
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12 font-inter">
      {/* Left Side: Video Thumbnail Placeholder */}
      <div className="w-full md:w-1/2">
        {/* Replace with actual video thumbnail */}
        <div className="bg-gray-300 h-64 md:h-80 rounded-lg flex items-center justify-center text-[#03194F] font-bold">
          Video Thumbnail Here
        </div>
      </div>

      {/* Right Side: Text and CTA */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#1E4786] mb-4">How does BookChat work?</h2>
        <p className="text-lg mb-6">
          All you need is a high-speed internet connection, webcam, and Readeo account.
          Easily access BookChat on an internet browser with your PC, laptop, or tablet—
          and let the stories begin.
        </p>
        <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition">
          LEARN MORE
        </button>
      </div>
    </section>
    </div>
  );
}

export default HowItWorks;
