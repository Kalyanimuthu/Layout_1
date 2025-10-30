import React from 'react';
import parentAvatar from '../assets/avatars/parent.png';
import teacherAvatar from '../assets/avatars/teacher.png';
import adminAvatar from '../assets/avatars/admin.png';

function RoleOptions() {
  return (
    <section className="bg-[#03194F] px-6 py-12 font-inter">
      <h2 className="text-5xl font-bold text-white text-center mb-40">How will you use the program?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Parent Option */}
        
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center relative">
          <img src={parentAvatar} alt="Parent avatar" className="border-[18px] border-[#03194F] text-white w-48 h-48 rounded-full object-cover absolute -top-28 transition-transform duration-300 hover:scale-105"/>
          <div className="w-full mt-20 text-left">
            <h3 className="text-3xl font-semibold mb-2">I'm a parent/guardian</h3>
            <p className="text-lg mb-4">want to share this program with my child's class.</p>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-2">
            SHARE DETAILS
          </button>
        </div>
        

        {/* Teacher Option */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center relative">
          <img
  src={teacherAvatar}
  alt="Teacher avatar"
  className="border-[18px] border-[#03194F] text-white w-48 h-48 rounded-full object-cover absolute -top-28 transition-transform duration-300 hover:scale-105"
/>

          <div className="w-full mt-20 text-left">
            <h3 className="text-3xl font-semibold mb-2">I'm a teacher</h3>
            <p className="text-lg mb-4">excited to use this program in my classroom.</p>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-2">
            LEARN MORE
          </button>
        </div>

        {/* Administrator Option */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center relative">
          <img src={adminAvatar} alt="Administrator avatar" className="border-[18px] border-[#03194F] text-white w-48 h-48 rounded-full object-cover absolute -top-28 transition-transform duration-300 hover:scale-105"/>
          <div className="w-full mt-20 text-left">
            <h3 className="text-3xl font-semibold mb-2">I'm an administrator</h3>
            <p className="text-lg mb-4">seeking info on behalf of my school or district.</p>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-2">
            REACH OUT NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default RoleOptions;
