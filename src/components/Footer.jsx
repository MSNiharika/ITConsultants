import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    // simple email regex validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("Thank you for subscribing!");
    setEmail("");
    // Here you can add your subscription logic (API call, etc)
  };

  return (
    <footer className="bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 text-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Branding */}
        <div>
          <h3 className="text-3xl font-extrabold mb-4 text-white tracking-wide">
            Arka Consultancy
          </h3>
          <p className="text-gray-300 max-w-xs">
            Delivering expert tech training & career services that power your future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-pink-400">Quick Links</h4>
          <ul className="space-y-3 text-gray-300 hover:text-white">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="/trainers" className="hover:underline">
                Trainers
              </a>
            </li>
            <li>
              <a href="/placements" className="hover:underline">
                Placements
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contacts" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-pink-400">Contact Info</h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-pink-400" />
              <span>BTM Layout, Bangalore, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-pink-400" />
              <a href="tel:+91 81061 10504" className="hover:underline">
              +91 81061 10504
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-pink-400" />
              <a href="mailto:niharikams.tcs@gmail.com" className="hover:underline">
              niharikams.tcs@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-pink-400">Newsletter</h4>
          <p className="mb-4 text-gray-300">
            Subscribe for the latest updates, news, and exclusive offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded-lg border border-pink-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">{success}</p>}
            <button
              type="submit"
              className="bg-pink-400 hover:bg-pink-500 text-white py-3 rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-8 flex space-x-6 justify-center md:justify-start">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-pink-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-pink-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-pink-300">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-300">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-indigo-800 pt-6 text-center text-gray-400 text-sm select-none">
        &copy; {new Date().getFullYear()} ArkaConsultancyPvtLTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;