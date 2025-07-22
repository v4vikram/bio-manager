"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Rekha Sharma",
    message:
      "Leaves and overtime are now calculated automatically, and our monthly closing has become much easier",
  },
  {
    name: "Sandeep Bansal",
    message:
      "With five retail outlets, we needed a reliable system. Everything now syncs to one dashboard, and staff use the app for leave and shifts.",
  },
  {
    name: "Harshit Verma",
    message:
      "Our attendance system was outdated and needed manual export every day. With TimeWatch, the biometric devices work with our network directly. The face recognition system is accurate, even with masks, and it’s been reliable in both our Noida and Pune offices. We no longer spend time downloading and sorting data manually.",
  },
  {
    name: "Dr. Anuja Mehta",
    message:
      "The IRIS and face recognition devices read accurately, even with masks and gloves, helping us maintain hygiene in our lab.",
  },
  {
    name: "Rajiv Pathak",
    message:
      "Installed and started using TimeWatch attendance of all our teaching and admin staff at our school. The setup was done in two days, and the training was simple. The desktop software helps me quickly see who is absent or late. Payroll reports are now ready on time and easy to extract, and now there is not any confusion or any guesswork at the end of the month.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-red font-semibold mb-2">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-10">
          Our Clients Review
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-br   from-white via-violet-50 to-rose-50 relative mx-2 min-h-[300px] rounded-xl">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-red rounded-full border-4 border-red flex items-center justify-center text-3xl font-bold text-white">
                  {item.name.charAt(0)}
                </div>
                <div className="mt-10 pt-10 px-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{item.message}</p>
                  <div className="mt-4 flex justify-center text-orange-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
