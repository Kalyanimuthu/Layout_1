import React, { useState } from 'react';

// Sample image imports (replace with your actual image paths)
import book1 from '../assets/images/book1.jpg';
import book2 from '../assets/images/book2.jpg';
import book3 from '../assets/images/book3.jpg';
import book4 from '../assets/images/book4.jpg';
import book5 from '../assets/images/book5.jpg';
import book6 from '../assets/images/book6.jpg';
import book7 from '../assets/images/book7.jpg';
import book8 from '../assets/images/book8.jpg';
import book9 from '../assets/images/book9.jpg';
import book10 from '../assets/images/book10.jpg';
import book11 from '../assets/images/book11.jpg';
import book12 from '../assets/images/book12.jpg';
import book13 from '../assets/images/book13.jpg';
import book14 from '../assets/images/book14.jpg';
import book15 from '../assets/images/book15.jpg';
import book16 from '../assets/images/book16.jpg';
import book17 from '../assets/images/book17.jpg';
import book18 from '../assets/images/book18.jpg';
import book19 from '../assets/images/book19.jpg';
import book20 from '../assets/images/book20.jpg';

const books = [
  book1, book2, book3, book4, book5,
  book6, book7, book8, book9, book10,
  book11, book12, book13, book14, book15,
  book16, book17, book18, book19, book20
];

const ageOptions = ['2–3 yrs', '3–4 yrs', '4–5 yrs', '5–6 yrs', '6–7 yrs'];

function BookGallery() {
  const [selectedAge, setSelectedAge] = useState('AGE');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="px-6 py-12 font-inter bg-[#BBD8FF] text-[#03194F] relative">
      {/* Dimmed overlay when dropdown is open */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header and Dropdown */}
        <div className="flex justify-end items-center mb-8 relative">
          <div className="relative">
  {/* AGE Button floating above section */}
  <div className="absolute right-6 -top-16 z-30">
    <button
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 transition"
    >
      {selectedAge}
    </button>

    {isDropdownOpen && (
      <ul className="absolute right-0 mt-2 bg-white text-[#03194F] rounded shadow-lg w-40 z-40">
        {['2–3 yrs', '3–4 yrs', '4–5 yrs', '5–6 yrs', '6–7 yrs'].map((age, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedAge(`AGE: ${age}`);
              setIsDropdownOpen(false);
            }}
            className="px-4 py-2 hover:bg-[#F0F4FF] cursor-pointer"
          >
            {age}
          </li>
        ))}
      </ul>
    )}
  </div>
</div>

        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {books.map((img, index) => (
            <div key={index} className="p-2 hover:shadow-xl transition">
              <img
                src={img}
                alt={`Book ${index + 1}`}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition">
            LOAD MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default BookGallery;
