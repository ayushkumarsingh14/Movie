import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-gradient-to-b from-neutral-900 to-neutral-800 text-neutral-300 py-8 text-center border-t border-neutral-700'>
      <div className='container mx-auto flex flex-col items-center gap-6'>
        {/* Navigation Links */}
        <div className='flex flex-wrap justify-center gap-8 text-lg font-semibold uppercase tracking-wide'>
          <Link to='/' className='hover:text-white transition-all duration-300 hover:scale-110'>About</Link>
          <Link to='/' className='hover:text-white transition-all duration-300 hover:scale-110'>Contact</Link>
          <Link to='/' className='hover:text-white transition-all duration-300 hover:scale-110'>Privacy Policy</Link>
          <Link to='/' className='hover:text-white transition-all duration-300 hover:scale-110'>Terms of Service</Link>
        </div>

        {/* Social Media Icons */}
        <div className='flex gap-6 text-2xl'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500 transition-all duration-300 hover:scale-125'>
            <FaFacebook />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='hover:text-blue-400 transition-all duration-300 hover:scale-125'>
            <FaTwitter />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='hover:text-pink-500 transition-all duration-300 hover:scale-125'>
            <FaInstagram />
          </a>
          <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='hover:text-red-500 transition-all duration-300 hover:scale-125'>
            <FaYoutube />
          </a>
        </div>

        {/* Footer Text */}
        <p className='text-sm opacity-80 mt-2'>
          &copy; {new Date().getFullYear()} <span className='text-white font-bold'>Movio</span>. All Rights Reserved.
        </p>
        <p className='text-xs opacity-60 italic animate-pulse'>Crafted with ❤️ by Ayush Kumar Singh</p>
      </div>
    </footer>
  );
}

export default Footer;
