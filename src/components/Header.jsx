import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-blue-800 text-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-bold text-center w-full md:w-auto">
          Paisley Highland Games
        </h1>

        {/* MOBILE BURGER BUTTON */}
        <button
          className="md:hidden absolute right-6 top-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      <p className="mt-2 text-center text-lg">
        Discover roles, register for events, and celebrate Scottish tradition
      </p>

      {/* NAVIGATION */}
      <nav
        className={`
          mt-4 flex flex-col space-y-4 text-center text-sm 
          md:flex md:flex-row md:justify-center md:space-x-6 md:space-y-0 
          ${isOpen ? "block" : "hidden md:flex"}
        `}
      >
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/events" className="hover:underline">Events</Link>
        <Link to="/apply" className="hover:underline">Apply</Link>
        <Link to="/register" className="hover:underline">Register</Link>
        <Link to="/results" className="hover:underline">Results</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>
      </nav>
    </header>
  );
}

export default Header;