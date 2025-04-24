import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const cardData = [
  {
    title: 'Industry-Focused Training',
    description:
      'We partner with industry professionals to create hands-on courses tailored to real-world needs. Our curriculum adapts constantly, ensuring relevance and quality.',
    color: 'blue-600',
    textColor: 'blue-800',
  },
  {
    title: 'Strategic Locations',
    description:
      'With centers in two key tech cities, we foster strong local networks while offering national-level expertise, keeping learners connected to industry growth.',
    color: 'yellow-500',
    textColor: 'yellow-600',
  },
  {
    title: 'Placement Excellence',
    description:
      'Our placement cell works hand-in-hand with top tech firms to place students in dream roles. We boast a 90%+ placement record with over 50,000 students trained.',
    color: 'green-500',
    textColor: 'green-600',
  },
  {
    title: 'Personalized Mentorship',
    description:
      'Every student is guided by mentors who help map out career paths, offer project feedback, and simulate interviews to build real-world confidence.',
    color: 'pink-500',
    textColor: 'pink-600',
  },
];

const AboutDetails = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6 text-center uppercase tracking-wide">
          Empowering Futures, Building Skills
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center max-w-3xl mx-auto">
          At <span className="text-blue-800 font-semibold">Arka Consultancy</span>, we go beyond traditional training. Our mission is to equip future tech leaders with the skills, confidence, and mindset to thrive in an ever-evolving digital landscape.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`bg-white p-8 rounded-xl shadow-xl border-t-4 border-${card.color}`}
            >
              <h3 className={`text-2xl font-bold text-${card.textColor} mb-4`}>{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="italic text-center text-gray-600 mt-16 text-lg">
          “Education that empowers. Skills that scale. Careers that grow.”
        </p>
      </div>
    </section>
  );
};

export default AboutDetails;