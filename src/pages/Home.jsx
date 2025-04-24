import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HiringPartners from "./HiringPartners";

const slides = [
  {
    title: "Hands-on Coding & Real Projects",
    subtitle: "Get practical experience building portfolio-worthy apps.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    buttonText: "Explore Courses",
    buttonLink: "/courses",
  },
  {
    title: "Collaborate with Peers",
    subtitle: "Work together and learn in a vibrant community.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    buttonText: "Meet Trainers",
    buttonLink: "/trainers",
  },
  {
    title: "Learn from Industry Experts",
    subtitle: "Get mentored by professionals with real-world experience.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    buttonText: "Placement Support",
    buttonLink: "/placements",
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  return (
    <div className="w-full">
      <section className="mb-16">
        <Slider {...settings} className="w-full">
          {slides.map(({ title, subtitle, image, buttonText, buttonLink }, idx) => (
            <div key={idx} className="relative h-[500px] w-full overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover brightness-75"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start max-w-xl p-8 md:p-16 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{title}</h2>
                <p className="text-lg md:text-xl mb-6 drop-shadow-md">{subtitle}</p>
                <a
                  href={buttonLink}
                  className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition shadow-lg"
                >
                  {buttonText}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Other sections like About, Courses, etc. can go here */}
<HiringPartners />
    </div>
  );
};

export default Home;