import React, { useState } from 'react';

function MembershipFAQ() {
  const faqs = [
    'What are the benefits of upgrading to a Gold Membership?',
    'What is the difference between a Gold Plan and a Gold Family Plan?',
    'How do I add/remove members to my Gold Family Plan?',
    'Can a Free Member BookChat with a Gold Member?',
    'Is there any sort of time limit or book restraint for reading sessions?',
    'Is a credit card required at signup if I’m signing up for a Free Membership?',
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#BBD8FF] px-6 py-12 font-inter text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#03194F]">Frequently Asked Questions</h2>

        <div className="space-y-3">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="bg-white px-4 py-3 flex items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full mr-4 text-xl font-bold">
                {openIndex === index ? '−' : '+'}
              </div>
              <div className="flex-1 font-bold">{question}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipFAQ;
