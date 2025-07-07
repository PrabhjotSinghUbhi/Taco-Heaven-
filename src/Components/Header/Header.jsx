import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="">
      {/* Header Title */}
      <div className="relative font-fugaz font-extrabold text-4xl text-center py-3 tracking-wide z-10  bg-black text-white drop-shadow-lg">
        Little Taco Shop
      </div>

      {/* Navigation */}
      <ul className="relative flex justify-around  items-center p-1 bg-neutral-100  shadow-lg z-10 backdrop-blur-md">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold px-5 transition-all duration-300 hover:text-black relative
            ${
              isActive
                ? " after:block after:h-0.5 after:bg-amber-500 after:w-full"
                : "text-black after:content-[''] after:block after:h-0.5 after:bg-amber-500 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            }`
          }
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to={"/menu"}
          className={({ isActive }) =>
            `font-semibold px-5 transition-all duration-300 hover:text-black relative
            ${
              isActive
                ? " after:block after:h-0.5 after:bg-amber-500 after:w-full"
                : "text-black after:content-[''] after:block after:h-0.5 after:bg-amber-500 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            }`
          }
        >
          <li>Menu</li>
        </NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `font-semibold px-5 transition-all duration-300 hover:text-black relative
            ${
              isActive
                ? " after:block after:h-0.5 after:bg-amber-500 after:w-full"
                : "text-black after:content-[''] after:block after:h-0.5 after:bg-amber-500 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            }`
          }
        >
          <li>About</li>
        </NavLink>

        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `font-semibold px-5 transition-all duration-300 hover:text-black relative
            ${
              isActive
                ? " after:block after:h-0.5 after:bg-amber-500 after:w-full"
                : "text-black after:content-[''] after:block after:h-0.5 after:bg-amber-500 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            }`
          }
        >
          <li>Contact</li>
        </NavLink>

        <NavLink
          to={"/github"}
          className={({ isActive }) =>
            `font-semibold px-5 transition-all duration-300 hover:text-black relative
            ${
              isActive
                ? " after:block after:h-0.5 after:bg-amber-500 after:w-full"
                : "text-black after:content-[''] after:block after:h-0.5 after:bg-amber-500 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            }`
          }
        >
          <li>GitHub</li>
        </NavLink>

        {/* Add more nav links here as needed */}
      </ul>
    </div>
  );
}

export default Header;
