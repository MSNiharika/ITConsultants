import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Software Engineer at TCS",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "The Full Stack Java course completely transformed my career. The trainers were incredibly supportive, and the hands-on projects helped me crack interviews with ease.",
    bg: "bg-orange-50 border-orange-300",
  },
  {
    name: "Sneha Iyer",
    title: "Frontend Developer at Accenture",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Joining this institute was the best decision of my life. The React course was top-notch and the placement support was very genuine.",
    bg: "bg-blue-50 border-blue-300",
  },
  {
    name: "Rahul Nair",
    title: "DevOps Engineer at Wipro",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    feedback:
      "Loved how interactive the classes were. The AWS DevOps module had real-world use cases that gave me the confidence to ace my job role.",
    bg: "bg-purple-50 border-purple-300",
  },
];

const Testimonials = () => (
  <section className="py-20 px-4 text-center bg-gradient-to-b from-sky-50 to-white">
    <h2 className="text-4xl font-extrabold text-blue-800 mb-4 uppercase tracking-wide">Testimonials</h2>
    <p className="text-lg text-gray-700 mb-12">
      Hear from our successful students who turned their dreams into reality with us.
    </p>
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {testimonials.map((t, index) => (
        <div
          key={index}
          className={`rounded-xl border-t-4 p-6 shadow-lg ${t.bg} transition-transform duration-300 hover:scale-105`}
        >
          <FaQuoteLeft className="text-3xl text-gray-400 mb-4 mx-auto" />
          <p className="text-gray-800 italic mb-4">"{t.feedback}"</p>
          <div className="flex flex-col items-center">
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mb-2 shadow-md"
            />
            <h4 className="text-lg font-semibold text-blue-900">{t.name}</h4>
            <span className="text-sm text-gray-600">{t.title}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;