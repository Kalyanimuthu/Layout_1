import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-[#03194F]">
    <footer className="max-w-7xl mx-auto text-white font-inter px-6 ml-16 py-10">
      {/* Top Section: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Column 1: Kids Reading */}
        <div>
          <h3 className="text-md text-[#4D87CA] font-semibold mb-2">Kids Reading</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#A9DFED]">About us</a></li>
            <li><a href="#" className="hover:text-[#A9DFED]">Library</a></li>
            <li><a href="#" className="hover:text-[#A9DFED]">Pricing</a></li>
            <li><a href="#" className="hover:text-[#A9DFED]">Blog</a></li>
          </ul>
        </div>

        {/* Column 2: Help */}
        <div>
          <h3 className="text-md text-[#4D87CA] font-semibold mb-2">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#A9DFED]">Support & FAQ</a></li>
            <li><a href="#" className="hover:text-[#A9DFED]">Terms of service</a></li>
            <li><a href="#" className="hover:text-[#A9DFED]">Privacy</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-sm text-[#4D87CA] font-semibold mb-4">Social Media</h3>
          <div className="flex gap-4 text-4xl">
            <a href="#" className="bg-white text-3xl pt-1 px-1 rounded-lg text-[#03194F] hover:text-[#A9DFED]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#A9DFED]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#A9DFED]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#A9DFED]"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white opacity-50 mb-3" />

      {/* Bottom Row */}
      <div className="flex flex-wrap justify-center text-sm gap-8">
        <a href="#" className="hover:text-[#A9DFED]">Copyright</a>
        <a href="#" className="hover:text-[#A9DFED]">Terms of service</a>
        <a href="#" className="hover:text-[#A9DFED]">Privacy</a>
        <a href="#" className="hover:text-[#A9DFED]">Blog</a>
        <a href="#" className="hover:text-[#A9DFED]">Patent</a>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
