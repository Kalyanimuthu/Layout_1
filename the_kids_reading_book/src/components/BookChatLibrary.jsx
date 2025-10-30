import React from 'react';


function BookChatLibrary() {
  return (
    <section className="bg-[#A8DEEC] px-6 py-12 font-inter text-[#03194F]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div>
          <img
            src=""
            alt="Fan of children's book covers"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#1E4786]">Thousands of books for the whole family</h2>
          <p className="text-lg leading-relaxed text-[#3A3A3A]">
            BookChat gives families a way to spend quality time together, even when they’re apart.
            We are passionate about growing our library with high-quality books that educate,
            entertain, and encourage little ones to let their imaginations run wild.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BookChatLibrary;
