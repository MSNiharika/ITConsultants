import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/image.png';

const About = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-4xl font-extrabold text-blue-800 mb-4 uppercase tracking-wide">
          Largest Software Training Organization
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We are a premier software training institute, committed to bridging the gap between industry expectations and academic knowledge. With strategically located centers in two key cities, we empower passionate learners with practical skills to build rewarding careers in the tech industry.
        </p>
        <p className="italic text-gray-600 mb-8">
          “Empowering talent. Fulfilling dreams. Connecting businesses with future leaders.”
        </p>
        <Link to="/about-details">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
            Learn More
          </button>
        </Link>
      </div>

      {/* Image / Visual */}
      <div className="relative">
        <img
          src={image} // replace with your image path
          alt="About Us Illustration"
          className="rounded-xl shadow-xl"
        />
        {/* Optional badge or overlay */}
        <div className="absolute bottom-6 left-6 bg-blue-800 text-white px-4 py-2 rounded shadow-lg text-sm font-semibold">
          50K+ Students Trained
        </div>
      </div>
    </div>
  </section>
);

export default About;