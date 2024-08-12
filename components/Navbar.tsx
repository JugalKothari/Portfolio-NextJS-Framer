import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black text-white z-10">
      <ul className="flex justify-center space-x-4 py-4 text-xs sm:text-base">
        <li className="flex items-center">
          <a href="#home" className="px-0 sm:px-4 hover:text-pink-600">Home</a>
        </li>
        <span className="text-pink-600">|</span>
        <li className="flex items-center">
          <a href="#about" className="px-0 sm:px-4 hover:text-pink-600">About</a>
        </li>
        <span className="text-pink-600">|</span>
        <li className="flex items-center">
          <a href="#resume" className="px-0 sm:px-4 hover:text-pink-600">Resume</a>
        </li>
        <span className="text-pink-600">|</span>
        <li className="flex items-center">
          <a href="#projects" className="px-0 sm:px-4 hover:text-pink-600">Projects</a>
        </li>
        <span className="text-pink-600">|</span>
        <li className="flex items-center">
          <a href="#contact" className="px-0 sm:px-4 hover:text-pink-600">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;