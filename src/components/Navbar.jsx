import React from 'react';
import { Link } from 'react-router-dom';  // Use Link to navigate between pages

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 text-yellow-300">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link to="/" className="hover:text-gray-200 font-semibold text-lg">Home</Link>
        </li>
        <li>
          <Link to="/add" className="hover:text-gray-200 font-semibold text-lg">Add Disc</Link>
        </li>
        <li>
          <Link to="/track" className="hover:text-gray-200 font-semibold text-lg">Track Throw</Link>
        </li>
        <li>
          <Link to="/stats" className="hover:text-gray-200 font-semibold text-lg">Stats</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
