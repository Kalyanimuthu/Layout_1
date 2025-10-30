import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="px-2 py-6">
      <nav className="bg-[#03194F] border border-white shadow-lg text-white px-6 py-2 rounded-lg flex items-center font-inter">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            📘
          </div>
        </div>

        {/* Right Side: Nav Links + Button */}
        <div className="flex items-center gap-12 ml-auto">
          <ul className="flex gap-8 text-xl font-bold">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-[#78ABF1] font-bold' : 'hover:text-[#A9DFED]'}>HOME</NavLink></li>
            <li><NavLink to="/schools" className={({ isActive }) => isActive ? 'text-[#78ABF1] font-bold' : 'hover:text-[#A9DFED]'}>SCHOOLS</NavLink></li>
            <li><NavLink to="/library" className={({ isActive }) => isActive ? 'text-[#78ABF1] font-bold' : 'hover:text-[#A9DFED]'}>LIBRARY</NavLink></li>
            <li><NavLink to="/pricing" className={({ isActive }) => isActive ? 'text-[#78ABF1] font-bold' : 'hover:text-[#A9DFED]'}>PRICING</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#78ABF1] font-bold' : 'hover:text-[#A9DFED]'}>ABOUT</NavLink></li>
          </ul>

          <button
            onClick={() => navigate('/login')}
            className="bg-orange-500 text-white px-4 py-2 rounded font-semibold hover:bg-orange-600 transition"
          >
            LOGIN
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
