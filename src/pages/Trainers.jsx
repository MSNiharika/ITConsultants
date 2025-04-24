import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const trainers = [
    {
        name: "Jane Doe",
        role: "Full Stack Developer",
        bio: "Expert in JavaScript, React, and Node.js with 12 years of experience.",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        color: "from-purple-400 to-pink-400",
    },
    {
        name: "John Smith",
        role: "DevOps Engineer",
        bio: "Specializes in AWS, Docker, and Kubernetes with 15 years of industry practice.",
        img: "https://randomuser.me/api/portraits/men/34.jpg",
        color: "from-green-400 to-blue-400",
    },
    {
        name: "Maria Garcia",
        role: "Data Scientist",
        bio: "Passionate about AI, machine learning, and big data analytics.",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        color: "from-yellow-400 to-orange-400",
    },
    {
        name: "David Lee",
        role: "QA Specialist",
        bio: "QA guru with expertise in automation and performance testing.",
        img: "https://randomuser.me/api/portraits/men/55.jpg",
        color: "from-red-400 to-pink-400",
    },
];

const Trainers = () => (
    <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-10 tracking-wide uppercase">
            Our Trainers
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-16">
            Industry professionals with 10+ years of experience delivering expert-led sessions.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {trainers.map(({ name, role, bio, img, color }, idx) => (
                <div
                    key={idx}
                    className={`rounded-3xl p-6 shadow-lg bg-gradient-to-br ${color} text-white transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                    style={{ perspective: "800px" }}
                >
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <img
                            src={img}
                            alt={name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black opacity-20 rounded-full transition-opacity duration-500 hover:opacity-10"></div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-1 drop-shadow-lg">{name}</h3>
                    <p className="italic mb-4 drop-shadow-md">{role}</p>
                    <p className="text-sm font-light mb-6 drop-shadow-md">{bio}</p>
                    <div className="flex justify-center space-x-6 text-white text-xl opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-blue-600">
                            <FaLinkedin />
                        </a>
                        <a href="#" aria-label="Facebook" className="hover:text-blue-800">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Trainers;