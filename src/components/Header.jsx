import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    <header className="bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100 shadow-md sticky top-0 z-50 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={arkaLogo} alt="Arka Logo" className="h-16 w-auto cursor-pointer drop-shadow-md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-blue-900 font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative hover:text-blue-700 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-700 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gradient-to-b from-blue-100 via-purple-100 to-cyan-100 px-4 pb-4 shadow-md">
          <ul className="space-y-4 text-blue-900 text-lg font-semibold">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block"
                  onClick={() => setIsOpen(false)}
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