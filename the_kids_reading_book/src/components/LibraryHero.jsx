import React from 'react';

function LibraryHero() {
  return (
    <section className="w-full px-6 py-12 text-black font-inter">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-[#03194F] font-bold mb-4">Welcome to our library</h1>
        <p className="text-lg mb-6">
          Explore 1000+ award-winning titles from publishers like Simon & Schuster, Candlewick Press, ABRAMS, and more.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition">
          START BOOK CHAT
        </button>
      </div>
    </section>
  );
}

export default LibraryHero;
