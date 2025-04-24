import React from "react";
import { FaBriefcase, FaBuilding, FaUserGraduate } from "react-icons/fa";

const companies = [
  "https://api.qspiders.com/media/clients/Capegemini_60.png",
  "http://api.qspiders.com/media/clients/Integra_Micro_Systems_chIzJjj.jpg",
  "http://api.qspiders.com/media/clients/EFI_pdQaA6e.png",
  "http://api.qspiders.com/media/clients/arisglobal-logo-new_0_ijEbzaU.png",
  "http://api.qspiders.com/media/clients/allstate-logo-header-170x45_W9ycizB.png",
  "http://api.qspiders.com/media/clients/Subex_3mL6EYk.jpg",
];

const Placements = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-sky-100 via-white to-blue-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-6 tracking-wide uppercase">
        Placements
      </h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto mb-12">
        Our students have been placed in top MNCs and startups with impressive packages across India and abroad.
      </p>

      {/* Placement Stats */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaUserGraduate className="text-blue-600 text-4xl mb-3" />
          <h3 className="text-2xl font-bold text-blue-900">1000+</h3>
          <p className="text-gray-600">Students Placed</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaBuilding className="text-green-600 text-4xl mb-3" />
          <h3 className="text-2xl font-bold text-green-800">300+</h3>
          <p className="text-gray-600">Recruiting Companies</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaBriefcase className="text-purple-600 text-4xl mb-3" />
          <h3 className="text-2xl font-bold text-purple-800">₹12 LPA</h3>
          <p className="text-gray-600">Highest Package</p>
        </div>
      </div>

      {/* Company Logos */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Hiring Partners</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center mb-16">
        {companies.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <img src={logo} alt="Company Logo" className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Testimonials (optional enhancement) */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left">
          <p className="text-gray-700 italic mb-4">
            “The training and mentorship I received helped me land a job at Infosys. The real-world projects made all the difference!”
          </p>
          <div className="flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Student" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-blue-800">Priya Sharma</p>
              <p className="text-sm text-gray-500">Software Engineer @ Infosys</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left">
          <p className="text-gray-700 italic mb-4">
            “Getting placed at Capgemini wouldn’t have been possible without the mock interviews and hands-on sessions.”
          </p>
          <div className="flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="Student" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-blue-800">Rahul Verma</p>
              <p className="text-sm text-gray-500">QA Analyst @ Capgemini</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Placements;