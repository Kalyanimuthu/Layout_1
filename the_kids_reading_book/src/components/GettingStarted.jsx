import React from 'react';
import step1Img from '../assets/images/step1.webp';
import step2Img from '../assets/images/step2.webp';
import step3Img from '../assets/images/step3.webp';

function GettingStarted() {
  return (
    <div className="bg-white">
    <section className="px-6 py-12 font-inter">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#03194F]">Getting started is easy as 1-2-read!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Step 1 */}
        <div className="text-[#03194F] p-6 flex flex-col items-center">
            <div className="bg-[#03194F] text-white py-1 px-6 text-xl mb-12 font-semibold">STEP 1</div>
          <img src={step1Img} alt="Laptop login" className="rounded-full mb-4 object-cover" />
          <h3 className="text-3xl font-bold">Set up your FREE account</h3>
          <p className="text-sm">
            Sign up using the Teacher Code located on the Guest Reader Program flyer, or in the email from your child’s teacher.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-[#03194F] p-6 flex flex-col items-center">
            <div className="bg-[#03194F] text-white py-1 px-6 text-xl mb-12 font-semibold">STEP 2</div>
          <img src={step2Img} alt="Calendar and clock" className="rounded-full mb-4 object-cover" />
          <h3 className="text-3xl font-bold">Choose a timeslot</h3>
          <p className="text-sm">
            Teachers set the schedule, you pick the available slot between your afternoon meetings—and the book you’d like to read!
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-[#03194F] p-6 flex flex-col items-center">
            <div className="bg-[#03194F] text-white py-1 px-6 text-xl mb-12 font-semibold">STEP 3</div>
          <img src={step3Img} alt="Storybook with kids" className="rounded-full mb-4 object-cover" />
          <h3 className="text-3xl font-bold">Enjoy story time together!</h3>
          <p className="text-sm">
            Most volunteer sessions last about 10 minutes—you’ll have plenty of time to read, answer questions, and chat with the class.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default GettingStarted;
