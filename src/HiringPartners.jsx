import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partnerLogos = [
  { src: 'https://api.qspiders.com/media/clients/Capegemini_60.png', alt: 'Company 1' },
  { src: 'http://api.qspiders.com/media/clients/Integra_Micro_Systems_chIzJjj.jpg', alt: 'Company 2' },
  { src: 'http://api.qspiders.com/media/clients/EFI_pdQaA6e.png', alt: 'Company 3' },
  { src: 'http://api.qspiders.com/media/clients/arisglobal-logo-new_0_ijEbzaU.png', alt: 'Company 4' },
  { src: 'http://api.qspiders.com/media/clients/Subex_3mL6EYk.jpg', alt: 'Company 5' },
];

const logosForSwiper = [...partnerLogos, ...partnerLogos]; // duplicate to 10 slides

const HiringPartners = () => (
  <section className="py-12 bg-gray-100">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Hiring Partners</h2>
    <Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={5}
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  breakpoints={{
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  }}
>
  {logosForSwiper.map((logo, index) => (
    <SwiperSlide key={index} className="flex items-center justify-center">
      <img src={logo.src} alt={logo.alt} className="h-20 object-contain" />
    </SwiperSlide>
  ))}
</Swiper>
  </section>
);

export default HiringPartners;