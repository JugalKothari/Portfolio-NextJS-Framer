import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute w-full bg-black text-white z-10">
      <ul className="flex justify-center space-x-4 py-4">
        <li className="flex items-center">
          <a href="#home" className="px-4 hover:text-pink-600">Home</a>
        </li>
        <span className="text-pink-600">|</span>
        <li className="flex items-center">
          <a href="#about" className="px-4 hover:text-pink-600">About</a>
        </li>
        <span className="text-pink-600">|</span>
        <li className="flex items-center">
          <a href="#resume" className="px-4 hover:text-pink-600">Resume</a>
        </li>
        <span className="text-pink-600">|</span>
        <li className="flex items-center">
          <a href="#projects" className="px-4 hover:text-pink-600">Projects</a>
        </li>
        <span className="text-pink-600">|</span>
        <li className="flex items-center">
          <a href="#contact" className="px-4 hover:text-pink-600">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;