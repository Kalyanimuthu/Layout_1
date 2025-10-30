import React from 'react';

function TestimonialSection() {
  return (
    <section className="flex flex-col md:flex-row font-inter">
      {/* Left Column: Testimonial */}
      <div className="bg-[#B30037] text-white md:w-1/2 px-24 py-12">
        <div className="bg-[#7F0027] p-6 rounded-xl relative">
          <p className="text-lg text-bold mb-2">
            "This morning my grandson woke up and said he wanted to read with Gramma BEFORE he went outside to play!
            He always thanks me for reading to him. Thank you for a wonderful app!"
          </p>
          
          <div className="absolute bottom-0 right-20 w-5 h-6 bg-[#7F0027] rotate-5 translate-y-5"></div>
          
        </div>
        
        <p className="mt-10 text-right italic px-6">—Nadine B.</p>
        
        <div className="flex items-center justify-center mt-12 gap-2">
  <span className="w-3.5 h-3.5 rounded-full bg-white"></span>
  <span className="w-2.5 h-2.5 rounded-full bg-[#7F0027] opacity-50"></span>
  <span className="w-2.5 h-2.5 rounded-full bg-[#7F0027] opacity-50"></span>
  <span className="w-2.5 h-2.5 rounded-full bg-[#7F0027] opacity-50"></span>
  <span className="w-2.5 h-2.5 rounded-full bg-[#7F0027] opacity-50"></span>
  <span className="w-2.5 h-2.5 rounded-full bg-[#7F0027] opacity-50"></span>
</div>
      </div>

      {/* Right Column: Heading + Logos */}
      <div className="bg-[#7F0027] text-white w-full md:w-1/2 px-6 py-12 flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold mb-6">
          Rave reviews for Readeo's BookChat
        </h2>
        <div className="flex gap-6 flex-wrap justify-center md:justify-start">
          {/* Replace with actual logos */}
          <div className="text-white text-3xl font-bold">DAILY CANDY</div>
          <div className="text-white text-3xl font-bold">AARP</div>
          <div className="text-white text-3xl font-bold">Military.com</div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
