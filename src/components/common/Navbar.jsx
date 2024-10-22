import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DBC from '../../assets/dbc_ms1.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex">
        <img src={DBC} className="h-12 sm:h-14" alt="Logo" />
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-700 justify-center flex-grow">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "hover:text-black"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "hover:text-black"}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipes" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "hover:text-black"}>
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "hover:text-black"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "hover:text-black"}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 text-gray-700 p-4 bg-white absolute top-16 left-0 right-0 shadow-lg">
          <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/products" onClick={toggleMenu}>Products</NavLink></li>
          <li><NavLink to="/recipes" onClick={toggleMenu}>Recipes</NavLink></li>
          <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
