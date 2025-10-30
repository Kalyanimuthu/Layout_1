import React from 'react';

function FreeTrialBanner() {
  return (
    <section className="bg-white px-6 py-12 font-inter text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#03194F] mb-4">
          Start Your Free Trial Now!
        </h2>
        <p className="text-lg text-[#3A3A3A]">
          Sign up now to claim your <span className="font-bold uppercase">FREE</span> 7-day trial of KidsReading Gold!
        </p>
      </div>
    </section>
  );
}

export default FreeTrialBanner;
