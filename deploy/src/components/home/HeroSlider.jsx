"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


const slides = [
  "/assets/img/slider/Biometric-Access-Control-1.webp",
  "/assets/img/slider/Biometric-Access-Control-1.webp",
  "/assets/img/slider/Biometric-Access-Control-1.webp",
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      // navigation
      pagination={{ clickable: true }}
      speed={2000} // 👈 Smooth transition (1s)
      className="w-full h-[400px] md:h-[500px] xl:h-[700px] overflow-hidden"
    >
      {slides.map((src, i) => (
        <SwiperSlide key={i}>
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
