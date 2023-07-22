// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
    <nav className="bg-white p-4 fixed top-0 w-full shadow-2xl z-50">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl"><span className='text-yellow-400'>Logo</span>   <span className='text-[#2ec6d9]'>Mart</span></div>
        <ul className="flex space-x-4 text-white">
          <li className={`py-2 px-4 text-[#2ec6d9] ${currentPath === '/' ? 'border-b-2 border-[#2ec6d9]' : 'border-b-2 border-transparent'}`}>
            <a href="/">Home</a>
          </li>
          <li className={`py-2 px-4 text-[#2ec6d9] ${currentPath === '/template' ? 'border-b-2 border-[#2ec6d9]' : 'border-b-2 border-transparent'}`}>
            <a href="/template/all">Template</a>
          </li>
         
          <li className={`py-2 px-4 text-[#2ec6d9] ${currentPath === '/contact' ? 'border-b-2 border-[#2ec6d9]' : 'border-b-2 border-transparent'}`}>
            <a href="/contact">Contact</a>
          </li>
          <li className={`py-2 px-4 text-[#2ec6d9] ${currentPath === '/about' ? 'border-b-2 border-[#2ec6d9]' : 'border-b-2 border-transparent'}`}>
            <a href="/about">About</a>
          </li>
        </ul>
        <div className="flex space-x-2">
          <button className="py-2 px-4 bg-white text-[#2ec6d9] rounded">Login</button>
          <button className="py-2 px-4 bg-[#2ec6d9] text-white rounded">Start Free Trial</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
