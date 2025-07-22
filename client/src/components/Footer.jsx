// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo / Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">M&B Estate</h1>
          <p className="text-sm">
            Your trusted platform for renting and selling properties.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/profile" className="hover:text-white">My Profile</Link></li>
          </ul>
        </div>

        {/* Listings */}
        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/search?type=rent" className="hover:text-white">For Rent</Link></li>
            <li><Link to="/search?type=sale" className="hover:text-white">For Sale</Link></li>
            <li><Link to="/search?offer=true" className="hover:text-white">Offers</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: chandanmaner03.com</p>
          <p className="text-sm">Phone: +91-9135850732</p>
          <p className="text-sm">Address: Anand Nagar Bhopal, India</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} M&B Estate. All rights reserved.
      </div>
    </footer>
  );
}
