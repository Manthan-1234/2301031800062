import React from "react";

export default function Movie() {
  return (
    <div className="bg-black px-10 py-6 text-white">
      <div className="flex gap-6 overflow-x-auto border-b border-gray-700 pb-2">
        
        <div className="w-40 flex-shrink-0">
          <a href="https://www.netflix.com/in/title/80192098" target="_blank">
          <img src="money.webp" alt="Money Heist Season 2" className="rounded w-full h-[250px] object-cover" /></a>
          <h3 className="text-sm">Money Heist Season 2</h3>
          <div className="text-gray-400">2018 • ⭐ 8.2</div>
        </div>

        <div className="w-40 flex-shrink-0">
          <a href="https://www.netflix.com/in/title/80126024"target="_blank">
          <img src="star.jpeg" alt="Star Trek - Discovery" className="rounded w-full h-[250px] object-cover" /></a>
          <h3 className="text-sm">Star Trek - Discovery</h3>
          <div className="text-gray-400">2018 • ⭐ 7.4</div>
        </div>

        <div className="w-40 flex-shrink-0">
          <a href="https://www.netflix.com/in/title/80117470" target="_blank">
          <img src="13.webp" alt="13 Reasons Why" className="rounded w-full h-[250px] object-cover" /></a>
          <h3 className="text-sm">13 Reasons Why</h3>
          <div className="text-gray-400">2017 • ⭐ 8.1</div>
        </div>

        <div className="w-40 flex-shrink-0">
          <a href="https://www.netflix.com/in/title/81245964" target="_blank">
          <img src="365.webp" alt="365-Days" className="rounded w-full h-[250px] object-cover" /></a>
          <h3 className="text-sm">365-Days</h3>
          <div className="text-gray-400">2018 • ⭐ 5.8</div>
        </div>

        <div className="w-40 flex-shrink-0">
          <a href="https://www.netflix.com/in/title/70143836"target="_blank">
          <img src="bad.jpg" alt="Breaking Bad" className="rounded w-full h-[250px] object-cover" /></a>
          <h3 className="text-sm">Breaking Bad</h3>
          <div className="text-gray-400">2018 • ⭐ 7.3</div>
        </div>

        <div className="w-40 flex-shrink-0">
          <a href="https://www.netflix.com/in/title/80200575"target="_blank">
          <img src="alice.jpg" alt="Alice In Borderland" className="rounded w-full h-[250px] object-cover" /></a>
          <h3 className="text-sm">Alice In Borderland</h3>
          <div className="text-gray-400">2018 • ⭐ 6.1</div>
        </div>

      </div>
    </div>
  );
}

