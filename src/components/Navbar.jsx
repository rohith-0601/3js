import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-20 h-10 sm:w-12 sm:h-12 md:w-20 md:h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
      >
        <p className="text-xs sm:text-sm md:text-base blue-gradient_text">
          Three Js
        </p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
