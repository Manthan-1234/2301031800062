import React from "react";

function Navbar() {
  return (
    <header className="bg-black text-white py-4 px-8 flex items-center justify-between">
     
      <div className="text-red-600 text-3xl font-bold">NETFLIX</div>

      
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-6 text-sm">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">TV Shows</li>
          <li className="hover:text-gray-300 cursor-pointer">Movies</li>
          <li className="hover:text-gray-300 cursor-pointer">Recently Added</li>
          <li className="hover:text-gray-300 cursor-pointer">My List</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

