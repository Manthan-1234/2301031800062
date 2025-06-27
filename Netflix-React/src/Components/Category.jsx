import React from "react";

export default function Category() {

  return (
    
    <div className="bg-black text-white px-10 py-4">
      <ul className="flex gap-8 text-sm border-b border-gray-700 pb-2">
        <li ><a href="#">Trending Now</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Netflix Original</a></li>
        <li><a href="#">Premiers</a></li>
        <li><a href="#">Recently Added</a></li>
       

      </ul>
    </div>
  );
}