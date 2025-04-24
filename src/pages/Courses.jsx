import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJava,
  FaReact,
  FaPython,
  FaAws,
  FaDatabase,
  FaBug,
  FaServer,
  FaCloud,
  FaCogs,
  FaBookOpen,
  FaUserGraduate,
} from 'react-icons/fa';

const courseList = [
  {
    title: "Java Full Stack",
    description: "Master Java Full Stack course, which equips learners with in-demand backend and frontend skills.",
    icon: <FaJava className="text-orange-600 text-5xl mb-4" />,
    bg: "from-orange-100 to-orange-50",
    border: "border-orange-400",
  },
  {
    title: "Python Full Stack",
    description: "Master full-stack web development with Python, Django, and modern frontend frameworks.",
    icon: <FaPython className="text-yellow-500 text-5xl mb-4" />,
    bg: "from-yellow-100 to-yellow-50",
    border: "border-yellow-400",
  },
  {
    title: "Software Testing Complete Course with Java",
    description: "Become an expert in manual and automation testing using Java tools and frameworks.",
    icon: <FaBug className="text-pink-600 text-5xl mb-4" />,
    bg: "from-pink-100 to-pink-50",
    border: "border-pink-400",
  },
  {
    title: "Software Testing Master Course with Python",
    description: "Master software testing techniques and automation using Python and its frameworks.",
    icon: <FaBug className="text-pink-600 text-5xl mb-4" />,
    bg: "from-pink-100 to-pink-50",
    border: "border-pink-400",
  },
  {
    title: "DevOps Master Course",
    description: "Deep dive into DevOps practices and tools to automate deployments and infrastructure.",
    icon: <FaCogs className="text-purple-600 text-5xl mb-4" />,
    bg: "from-purple-100 to-purple-50",
    border: "border-purple-400",
  },
  {
    title: "API Manual & Automation Testing - Using Postman",
    description: "Learn both manual and automated API testing using Postman and other tools.",
    icon: <FaServer className="text-gray-600 text-5xl mb-4" />,
    bg: "from-gray-100 to-gray-50",
    border: "border-gray-400",
  },
  {
    title: "Data Analyst Master Course",
    description: "Become an expert in data analysis with comprehensive training on tools and techniques.",
    icon: <FaDatabase className="text-green-600 text-5xl mb-4" />,
    bg: "from-green-100 to-green-50",
    border: "border-green-400",
  },
  {
    title: "Data Science Master Course",
    description: "Become an expert in Data Science with hands-on projects and predictive modeling.",
    icon: <FaDatabase className="text-green-700 text-5xl mb-4" />,
    bg: "from-green-200 to-green-50",
    border: "border-green-500",
  },
  {
    title: "MERN Full Stack",
    description: "Master MongoDB, Express, React, and Node.js for full stack JavaScript development.",
    icon: <FaReact className="text-blue-500 text-5xl mb-4" />,
    bg: "from-blue-100 to-blue-50",
    border: "border-blue-400",
  },
  {
    title: "Advance Java Selenium Test Automation",
    description: "Learn advanced Java with Selenium for web test automation projects.",
    icon: <FaJava className="text-orange-700 text-5xl mb-4" />,
    bg: "from-orange-100 to-orange-50",
    border: "border-orange-500",
  },
  {
    title: "Python Selenium with Robot Framework",
    description: "Automate testing using Python Selenium integrated with Robot Framework.",
    icon: <FaPython className="text-yellow-600 text-5xl mb-4" />,
    bg: "from-yellow-100 to-yellow-50",
    border: "border-yellow-400",
  },
  {
    title: "BDD Framework with Cucumber",
    description: "Implement Behavior-Driven Development using the Cucumber framework.",
    icon: <FaBookOpen className="text-red-600 text-5xl mb-4" />,
    bg: "from-red-100 to-red-50",
    border: "border-red-400",
  },
  {
    title: "Tosca Training Curriculum",
    description: "Learn Tosca automation testing tools for enterprise-grade test automation.",
    icon: <FaBug className="text-pink-700 text-5xl mb-4" />,
    bg: "from-pink-200 to-pink-50",
    border: "border-pink-500",
  },
  {
    title: "Advance React",
    description: "Deep dive into React.js with hooks, context, and advanced component patterns.",
    icon: <FaReact className="text-blue-700 text-5xl mb-4" />,
    bg: "from-blue-200 to-blue-50",
    border: "border-blue-500",
  },
  {
    title: "Data Structure & Algorithm",
    description: "Master problem-solving and algorithmic thinking for technical interviews.",
    icon: <FaUserGraduate className="text-indigo-600 text-5xl mb-4" />,
    bg: "from-indigo-100 to-indigo-50",
    border: "border-indigo-400",
  },
  {
    title: "Banking Master Course",
    description: "BFSI - Banking Financial Services & Insurance domain training.",
    icon: <FaBookOpen className="text-teal-600 text-5xl mb-4" />,
    bg: "from-teal-100 to-teal-50",
    border: "border-teal-400",
  },
  {
    title: "Cloud Computing",
    description: "Learn cloud fundamentals, architectures, and cloud service providers.",
    icon: <FaCloud className="text-cyan-600 text-5xl mb-4" />,
    bg: "from-cyan-100 to-cyan-50",
    border: "border-cyan-400",
  },
  {
    title: "Agile & Scrum",
    description: "Understand Agile methodologies and Scrum framework for project management.",
    icon: <FaCogs className="text-yellow-700 text-5xl mb-4" />,
    bg: "from-yellow-200 to-yellow-50",
    border: "border-yellow-500",
  },
  {
    title: "Software Architecture",
    description: "Learn the design principles and patterns to build scalable software.",
    icon: <FaServer className="text-gray-700 text-5xl mb-4" />,
    bg: "from-gray-200 to-gray-50",
    border: "border-gray-500",
  },
  {
    title: "Aptitude & Soft Skills",
    description: "Improve your aptitude and soft skills to boost career readiness.",
    icon: <FaUserGraduate className="text-pink-600 text-5xl mb-4" />,
    bg: "from-pink-100 to-pink-50",
    border: "border-pink-400",
  },
];

const chunkCourses = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const Courses = () => {
  const courseChunks = chunkCourses(courseList, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12 uppercase tracking-wide">
          Our Popular Courses
        </h2>
        {courseChunks.map((row, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-3 sm:grid-cols-2 gap-8 ${
              index === 0 ? "mt-4" : "mt-12"
            }`}
          >
            {row.map((course, idx) => (
              <motion.div
                key={idx}
                className={`rounded-2xl border-t-4 shadow-xl p-8 text-center bg-gradient-to-br ${course.bg} border ${course.border}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.07,
                  rotateX: 8,
                  rotateY: 8,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.35)",
                  backgroundPosition: "right bottom",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                style={{
                  transformStyle: "preserve-3d",
                  backgroundSize: "200% 200%",
                  backgroundPosition: "left top",
                }}
              >
                {course.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-700">{course.description}</p>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;