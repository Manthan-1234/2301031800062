import React from "react";


export default function Banner() {
  return (
    <div className="relative text-white">
      <img src="lost.webp" alt="Lost In Space" className="w-full h-[70vh] object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black p-10 flex flex-col justify-center">
        <div className="text-sm flex items-center space-x-4 mb-2">
          <span>⭐ 7.5</span>
          <span>• 2018</span>
          <span>• 2 Seasons</span>
        </div>
        <h1 className="text-4xl font-bold mb-3">LOST IN SPACE</h1>
        <p className="w-[50%] text-sm mb-4">
          After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.netflix.com/in/title/80104198" target="_blank">
          <button className="bg-white text-black px-4 py-2 font-semibold rounded">▶ Watch</button></a>
          <button className="bg-gray-600 px-4 py-2 font-semibold rounded">+ Add to List</button>
        </div>
      </div>
    </div>
  );
}
 