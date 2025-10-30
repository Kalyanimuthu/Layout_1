import React from 'react';
import bookshelfIcon from '../assets/images/bookshelf.png';
import bookmarkIcon from '../assets/images/bookmark.png';
import familyIcon from '../assets/images/family.png';

function GoldPlanBenefits() {
  const benefits = [
    {
      title: 'Create customized bookshelves',
      description:
        'Keep your books organized and on display, using as many shelves as you like. Anyone on your Gold Family Plan can access them, too!',
      icon: bookshelfIcon,
    },
    {
      title: 'Save your spot',
      description:
        'When bedtime cuts your BookChat short, bookmark that spot and jump back in later.',
      icon: bookmarkIcon,
    },
    {
      title: 'Share Gold with Family',
      description:
        'Add up to 4 people on your Gold Family Plan. They’ll have the same full access to Readeo as you.',
      icon: familyIcon,
    },
  ];

  return (
    <section className="bg-[#03194F] text-white px-6 py-12 font-inter">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Gold Plan Perks</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index}>
              <img
                src={item.icon}
                alt={item.title}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-md">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition">
            GET STARTED FOR FREE
          </button>
        </div>
      </div>
    </section>
  );
}

export default GoldPlanBenefits;
