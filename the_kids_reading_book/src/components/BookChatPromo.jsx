import React from 'react';


function BookChatPromo() {
  return (
    <section className="bg-white px-6 py-12 font-inter text-[#03194F]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#1E4786]">Turn screen time into storytime</h2>
          <p className="text-lg leading-relaxed text-[#3A3A3A]">
            BookChat lets either side of the video call flip through the pages of a picture book easily.
            This interactive experience captures kids’ attention longer—which makes it no surprise that
            90% of Readeo users prefer BookChat over other video chat services to connect with their loved ones.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src=""
            alt="Adult and child using BookChat on a tablet"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default BookChatPromo;
