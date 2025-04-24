import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./pages/About";
import AboutDetails from "./pages/AboutDetails";
import Courses from "./pages/Courses";
import Trainers from "./pages/Trainers";
import Placements from "./pages/Placements";
import Testimonials from "./pages/Testimonials";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <div className="app-wrapper">
      <Header />
      <Routes>
        {/* Home page with all sections */}
        <Route path="/" element={<Home />} />

        {/* Individual pages */}
        <Route path="/about" element={<About />} />
        <Route path="/about-details" element={<AboutDetails />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;