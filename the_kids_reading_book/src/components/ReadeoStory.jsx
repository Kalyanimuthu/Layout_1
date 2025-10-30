import React from 'react';


function ReadeoStory() {
  return (
    <section className="bg-white px-6 py-12 font-inter text-[#1E4786]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#03194F]">This is how our story begins</h2>
          <p className="text-lg leading-relaxed text-[#3A3A3A] mb-2">
            In 2010, Readeo founder Coby Neuenschwander and his family moved 1,500 miles away—and quickly realized video calls alone weren’t enough to keep his son and son’s grandparents connected.</p>
            <p className="text-lg leading-relaxed text-[#3A3A3A]">
            To bridge the distance, Coby turned to the power of stories. Combining beautifully digitized books with video chat technology, Readeo launched later that year, and BookChat™ was patented in 2012.             Since then, Readeo has been committed to fostering the joy of reading between loved ones—near and far.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src=""
            alt="Readeo founder and child using BookChat"
            className="w-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white text-[#03194F] rounded-full text-3xl font-bold shadow-md hover:scale-105 hover:bg-orange-500 transition">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadeoStory;
