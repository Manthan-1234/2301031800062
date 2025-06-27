import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-4 py-2 w-full gap-4 md:gap-0">
      <div className="flex items-center gap-2">
        <img className="w-12 h-12" src="logo1.jpg" alt="institute-logo" />
        <h3 className="text-lg font-semibold">Codeschool</h3>
      </div>

      <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Teachers</a></li>
        <li><a href="#" className="hover:underline">Holidays</a></li>
      </ul>

      <div>
        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
          Contact Us
        </button>
      </div>
    </nav>
  );
}