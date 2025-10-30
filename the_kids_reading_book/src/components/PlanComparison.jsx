import React from 'react';

function PlanComparison() {
  const features = [
    {
      label: 'BookChat with the ones you love',
      free: '✔️',
      gold: '✔️',
    },
    {
      label: 'Full Library access (over 1,000 books and counting!)',
      free: 'Limited (5 books rotate monthly)',
      gold: '✔️',
    },
    {
      label: 'Create customized bookshelves',
      free: '❌',
      gold: '✔️',
    },
    {
      label: 'Bookmarks',
      free: '❌',
      gold: '✔️',
    },
    {
      label: 'Share Gold with 4 others (They have full Gold plan benefits)',
      free: '❌',
      gold: '✔️',
    },
  ];

  return (
    <section className="bg-[#BBD8FF] px-6 py-12 font-inter text-[#03194F]">
      <div className="max-w-3xl mx-auto">
        

        {/* Column Headings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-center font-bold text-xl">
          <div></div>
          <div className="">Free Plan</div>
          <div className="">Gold Family Plan</div>
        </div>

        {/* Feature Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Labels */}
          <div className="space-y-4 mt-6">
            {features.map((item, index) => (
              <div key={index} className="text-md text-black font-medium">
                {item.label}
              </div>
            ))}
          </div>

          {/* Free Plan Column */}
          <div className="bg-white rounded-lg shadow-md p-6 space-y-8">
            {features.map((item, index) => (
              <div key={index} className={`text-center text-md  ${item.free === '✔️' ? 'text-green-600' : item.free === '❌' ? 'text-red-500' : 'text-[#03194F]'}`}>
                {item.free}
              </div>
            ))}
            <div className="mt-6 text-center">
              <p className="font-bold text-lg mb-2">FREE Forever</p>
              <button className="border border-[#BBD8FF] text-[#03194F] px-6 py-2 rounded font-semibold hover:bg-[#03194F] hover:text-white transition">
                STAY FREE
              </button>
            </div>
          </div>

          {/* Gold Plan Column */}
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            {features.map((item, index) => (
              <div key={index} className="text-center text-lg text-green-600">
                {item.gold}
              </div>
            ))}
            <div className="mt-6 text-center">
              <p className="font-bold text-lg mb-1">$14.99/monthly</p>
              <p className="font-bold text-lg mb-4">$99.99/annually</p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 transition">
                FAMILY GOLD
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanComparison;
