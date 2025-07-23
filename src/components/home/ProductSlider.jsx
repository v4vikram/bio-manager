"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";

// Replace these images with your actual image paths
const productSeries = [
  {
    title: "AI-Face Series (T5 / T6 Pro)",
    description:
      "Perfect for modern workplaces, this series includes facial recognition, fingerprint, and card support. The devices come with mask detection, 4” touch displays, Linux OS, and support for cloud sync via Wi-Fi, USB, or 4G.",
    image: "/assets/img/products/aiface-series-t5-t6.jpg",
  },
  {
    title: "TrueFace6000 Series",
    description:
      "A mid-range powerhouse with support for face, fingerprint, card, password, and QR. This series includes a dual-lens HD camera, 10,000 user capacity, and PoE versions ideal for offices and retail outlets.",
    image: "/assets/img/products/trueface-6000.jpg",
  },
  {
    title: "TrueFace1L Series",
    description:
      'Built for enterprise-grade performance, these devices support up to 100,000 users, have IP65 weatherproof casing, WDR camera technology, and a large 8" touchscreen. Suitable for industrial zones and multi-location enterprises.',
    image: "/assets/img/products/trueface1l.jpg",
  },
  {
    title: "TrueFace3000 Series",
    description:
      "Compact, affordable, yet powerful. Supports up to 5,000 users with options for face, fingerprint, card, and QR code. Ideal for startups, coaching centers, or clinics.",
    image: "/assets/img/products/trueface3000.jpg",
  },
  {
    title: "IRIS Biometric Series",
    description:
      "Designed for ultra-high-security use-cases like banking, defense, and labs. Features dual IRIS sensors, low-light functionality, and non-contact, hygienic authentication.",
    image: "/assets/img/products/iris-series.jpg",
  },
];

export default function ProductSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      // pagination={{ clickable: true }}
      // autoplay={{ delay: 4000 }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {productSeries.map((series, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#f3f0ff] rounded-xl overflow-hidden transition hover:shadow-lg h-full min-h-[400px] flex flex-col pt-6 text-center" style={{boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)"}}>
            <Image
              src={series.image}
              alt={series.title}
              width={500}
              height={300}
              className="w-full h-44 object-contain"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {series.title}
              </h3>
              <p className="text-gray-600 text-sm flex-1">
                {series.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
