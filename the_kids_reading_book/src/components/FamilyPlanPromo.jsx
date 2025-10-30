import React from 'react';

function FamilyPlanPromo() {
  return (
    <div className="bg-white">
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12 font-inter">
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-[#1E4786] text-3xl font-bold mb-4">Give the whole family the gift of reading</h2>
        <p className="text-lg mb-6">
          When you sign up for a Readeo Gold Family Plan, you can share your gold benefits with four others –
          who will all have access to our entire library. Kids can explore countless stories on their own or
          with you during your next BookChat.
        </p>
        <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition">
          GET THE FAMILY PLAN
        </button>
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

export default FamilyPlanPromo;
