import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaMobileAlt,
  FaGlobe,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaChartLine,
  FaCogs,
  FaNetworkWired,
  FaDatabase,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaLaptopCode className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "Web Development Training",
    description:
      "Master front-end and back-end technologies including React, Angular, Node.js, and more. Build real-world web applications.",
  },
  {
    icon: <FaChalkboardTeacher className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "Expert Mentorship",
    description:
      "Get guidance from industry professionals with 10+ years experience who will help you navigate your learning path effectively.",
  },
  {
    icon: <FaHandsHelping className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "Placement Assistance",
    description:
      "Our dedicated team supports you with resume building, mock interviews, and direct placement drives at top companies.",
  },
  {
    icon: <FaMobileAlt className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "Mobile App Development",
    description:
      "Learn to create native and cross-platform mobile apps using React Native, Flutter, and Android technologies.",
  },
  {
    icon: <FaGlobe className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "Digital Marketing",
    description:
      "Understand SEO, SEM, social media marketing, and analytics to promote products and services effectively online.",
  },
  {
    icon: <FaCloud className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "Cloud Computing & DevOps",
    description:
      "Hands-on experience with AWS, Azure, Google Cloud, CI/CD pipelines, containerization, and infrastructure automation.",
  },
  {
    icon: <FaShieldAlt className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "Cybersecurity Training",
    description:
      "Learn ethical hacking, penetration testing, network security, and compliance standards to secure digital assets.",
  },
  {
    icon: <FaRobot className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Build intelligent applications using ML algorithms, data modeling, NLP, and deep learning frameworks.",
  },
  {
    icon: <FaChartLine className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "Data Analytics & BI",
    description:
      "Analyze complex datasets, create dashboards, and generate insights using Power BI, Tableau, and Python tools.",
  },
  {
    icon: <FaCogs className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "ERP & CRM Solutions",
    description:
      "Implement and manage enterprise resource planning and customer relationship management software.",
  },
  {
    icon: <FaNetworkWired className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "IT Infrastructure & Network Services",
    description:
      "Design, deploy, and maintain enterprise-grade IT infrastructure, cloud networking, and virtualization.",
  },
  {
    icon: <FaDatabase className="text-indigo-600 text-6xl mb-6 mx-auto" />,
    title: "Database Administration & Management",
    description:
      "Manage SQL and NoSQL databases ensuring performance, backup, security, and availability for enterprise data.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contacts");
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-indigo-700 text-center mb-12">Our Services</h2>
      <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-16">
        We provide a comprehensive portfolio of services, ranging from software development and cloud computing to cybersecurity, data analytics, and enterprise solutions — tailored to prepare you for success in today's competitive technology landscape.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
        {servicesData.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            {icon}
            <h3 className="text-2xl font-semibold mb-4 text-indigo-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-indigo-700 font-semibold mb-4 text-lg">Ready to elevate your career?</p>
        <button
          onClick={handleContactClick}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold shadow-lg transition duration-300"
        >
          Contact Us for More Info
        </button>
      </div>
    </section>
  );
};

export default Services;