import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
        <img src="src/arka.png" alt="Arka Logo" className="h-20 w-40" />
        </div>

        {/* Navigation */}
        <nav className="space-x-6 text-blue-800 font-medium">
        <ul className="flex space-x-6 text-lg font-medium">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/courses", label: "Courses" },
          { to: "/trainers", label: "Trainers" },
          { to: "/placements", label: "Placements" },
          { to: "/testimonials", label: "Testimonials" },
          { to: "/contacts", label: "Contacts" },
          { to: "/services", label: "Services" },
        ].map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="relative text-blue-800 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;