import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Navbar Component
const Navbar = () => (
  <nav className="bg-white shadow-lg fixed w-full z-10 top-0 left-0">
    <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold text-blue-800">EmpoweringITConsultants</Link>
      <ul className="flex space-x-6 text-lg">
        <li><Link to="/" className="hover:text-blue-800">Home</Link></li>
        <li><Link to="/services" className="hover:text-blue-800">Services</Link></li>
        <li><Link to="/about" className="hover:text-blue-800">About</Link></li>
        <li><Link to="/clients" className="hover:text-blue-800">Clients</Link></li>
        <li><Link to="/careers" className="hover:text-blue-800">Careers</Link></li>
        <li><Link to="/contact" className="hover:text-blue-800">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

// Hero Section
const Hero = () => (
  <section className="bg-blue-800 text-white text-center py-32">
    <h1 className="text-5xl font-semibold leading-tight mb-6">Future-Ready Tech Solutions</h1>
    <p className="text-xl mb-6">We empower businesses with innovative IT solutions to stay ahead of the competition.</p>
    <button className="bg-blue-600 hover:bg-blue-500 py-3 px-8 rounded-lg text-white">Get Started</button>
  </section>
);

// Services Section
const Services = () => (
  <section className="py-20 bg-gray-100 text-center">
    <h2 className="text-4xl font-semibold mb-12 text-blue-800">Our Services</h2>
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-12">
      <div className="bg-white shadow-md p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Consulting</h3>
        <p>Strategic IT consulting to drive business growth.</p>
      </div>
      <div className="bg-white shadow-md p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Development</h3>
        <p>Custom software development to meet your needs.</p>
      </div>
      <div className="bg-white shadow-md p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Support</h3>
        <p>Ongoing support to ensure smooth operations.</p>
      </div>
    </div>
  </section>
);

// About Section
const About = () => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto text-center px-4">
      <h2 className="text-4xl font-semibold text-blue-800 mb-8">About Us</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">We are a team of passionate professionals delivering top-notch technology solutions for businesses worldwide. Our commitment to excellence drives us to stay ahead of the curve and deliver solutions that empower businesses for the future.</p>
      <button className="bg-blue-800 hover:bg-blue-700 py-3 px-8 rounded-lg text-white">Learn More</button>
    </div>
  </section>
);

// Clients Section
const Clients = () => (
  <section className="py-20 bg-gray-100 text-center">
    <h2 className="text-4xl font-semibold text-blue-800 mb-12">Our Clients</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
      {/* Client Logos */}
      <div><img src="/path/to/client-logo1.png" alt="Client 1" className="h-20 mx-auto" /></div>
      <div><img src="/path/to/client-logo2.png" alt="Client 2" className="h-20 mx-auto" /></div>
      <div><img src="/path/to/client-logo3.png" alt="Client 3" className="h-20 mx-auto" /></div>
      <div><img src="/path/to/client-logo4.png" alt="Client 4" className="h-20 mx-auto" /></div>
    </div>
  </section>
);

// Careers Section
const Careers = () => (
  <section className="py-20 text-center">
    <h2 className="text-4xl font-semibold text-blue-800 mb-8">Careers</h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Join our innovative team and work on exciting tech projects that make a real difference. We are always looking for talented individuals passionate about technology and growth.</p>
    <button className="bg-blue-800 hover:bg-blue-700 py-3 px-8 rounded-lg text-white">See Openings</button>
  </section>
);

// Contact Section
const Contact = () => (
  <section className="py-20 bg-gray-100 text-center">
    <h2 className="text-4xl font-semibold text-blue-800 mb-8">Contact Us</h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Ready to start your project? Get in touch with us to discuss your needs and how we can help you achieve your goals.</p>
    <form className="max-w-4xl mx-auto">
      <input type="text" placeholder="Your Name" className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg" />
      <input type="email" placeholder="Your Email" className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg" />
      <textarea placeholder="Your Message" className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg" rows="6"></textarea>
      <button type="submit" className="bg-blue-800 hover:bg-blue-700 py-3 px-8 rounded-lg text-white">Send Message</button>
    </form>
  </section>
);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Main Route with all sections */}
          <Route path="/" element={<><Hero /><Services /><About /><Clients /><Careers /><Contact /></>} />

          {/* Individual Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;