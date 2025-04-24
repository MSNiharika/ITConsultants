import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // install: `npm install lucide-react`
import arkaLogo from '../assets/arka.png';

const navItems = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/trainers", label: "Trainers" },
  { to: "/placements", label: "Placements" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contacts", label: "Contacts" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={arkaLogo} alt="Arka Logo" className="h-16 w-auto cursor-pointer" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-blue-800 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-blue-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 shadow-md">
          <ul className="space-y-4 text-blue-800 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block"
                  onClick={() => setIsOpen(false)} // Close on click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;