import HeroSlider from "@/components/home/HeroSlider";
import Image from "next/image";
import Link from "next/link";
import {
  Fingerprint,
  ScanFace,
  Eye,
  CreditCard,
  QrCode,
  ShieldCheck,
  Timer,
  Wifi,
} from "lucide-react"; // use `lucide-react` package
import ProductSlider from "@/components/home/ProductSlider";
import FaqSection from "@/components/FaqSection";
import TestimonialSlider from "@/components/TestimonialSlider";

const features = [
  {
    icon: <ScanFace className="text-3xl w-[40px] h-[40px]" />,
    title: "AI Face Recognition",
    description: "Accurate face recognition with AI & anti-spoofing features.",
  },
  {
    icon: <Fingerprint className="text-3xl w-[40px] h-[40px]" />,
    title: "Fingerprint Authentication",
    description: "High-accuracy fingerprint sensors for reliable access.",
  },
  {
    icon: <Eye className="text-3xl w-[40px] h-[40px]" />,
    title: "IRIS Recognition",
    description: "Ideal for labs, defense, and hospital environments.",
  },
  {
    icon: <CreditCard className="text-3xl w-[40px] h-[40px]" />,
    title: "RFID & Mi-Fare Cards",
    description: "Supports contactless smart cards for quick entry.",
  },
  {
    icon: <QrCode className="text-3xl w-[40px] h-[40px]" />,
    title: "QR & Password Access",
    description: "Flexible access with QR codes and secure passwords.",
  },
  {
    icon: <ShieldCheck className="text-3xl w-[40px] h-[40px]" />,
    title: "Advanced Detection",
    description: "Includes mask detection, liveness check, and dual camera.",
  },
  {
    icon: <Timer className="text-3xl w-[40px] h-[40px]" />,
    title: "Blazing Speed",
    description: "Recognition in <0.2s with seamless real-time sync.",
  },
  {
    icon: <Wifi className="text-3xl w-[40px] h-[40px]" />,
    title: "Multi-Connectivity",
    description: "Supports TCP/IP, Wi-Fi, USB, 4G, and PoE.",
  },
];

const hrmsFeatures = [
  {
    title: "Realtime Attendance",
    description: [
      "Realtime attendance tracking means that every time an employee punches in or out—whether through a biometric device or mobile app—the data is immediately recorded and reflected in the system.",
      "This helps the HR team monitor presence, absence, lateness, or early departures without manual checks or uploads, even across multiple locations.",
      "It reduces errors and manipulation in time entry."
    ],
    image: "/assets/img/features/real-time-attendance.png",
   
  },
  {
    title: "Leave Management",
    description: [
      "Employees can apply for leave through the web dashboard or mobile app by selecting leave type and adding notes or attachments.",
      "Managers can easily approve or reject requests, while the system tracks used and remaining leaves automatically.",
      "Supports leave policies like carry forward and automatic deductions."
    ],
    image: "/assets/img/features/leave-management.png",
  },
  {
    title: "Shift & Overtime Handling",
    description: [
      "Organizations can manage rotating or fixed shifts with grace periods and set up overtime rules.",
      "Attendance is matched with shift schedules, and overtime is calculated automatically.",
      "Managers can access reports to track extra work hours for payroll."
    ],
    image: "/features/shift.jpg",
  },
  {
    title: "Payroll Integration",
    description: [
      "Attendance, leaves, holidays, and overtime sync directly with payroll.",
      "HR can set up salary structures, deductions, bonuses, and taxes.",
      "Payslips and bank files are auto-generated, minimizing manual effort."
    ],
        image: "/assets/img/features/payroll-integration.webp",
       
      
  },
  {
    title: "Geo-Fencing",
    description: [
      "Set GPS-based boundaries to restrict where employees can punch in/out using their phones.",
      "Ideal for sales staff, delivery teams, or mobile field workers.",
      "Prevents fake punching from unauthorized locations."
    ],
     image: "/assets/img/features/geo-fencing.png",
   
  },
  {
    title: "Mobile App Capabilities",
    description: [
      "Employees can punch, apply for leave, view attendance, and download payslips from their phone.",
      "Managers can approve leave and view team status remotely.",
      "Supports Android & iOS—perfect for travel or remote work."
    ],
    image: "/features/mobile.jpg",
  },
  {
    title: "Reports & Analytics",
    description: [
      "HR can view daily attendance, late marks, absentees, and overtime reports.",
      "Export data to Excel, PDF, or integrate via API.",
      "Helps in audits, staffing decisions, and productivity analysis."
    ],
      image: "/assets/img/features/report-analytics.png",
     
  },
  {
    title: "Live Tracking",
    description: [
      "Monitor real-time GPS location and activity of field employees.",
      "Improves accountability, enables efficient routing, and ensures safety.",
      "Useful for service engineers, delivery teams, and mobile staff."
    ],
     image: "/assets/img/features/live-tracking.png",
  },
];

export default function Home() {
  return (
    <div className="">
      <section id="home-section" className="relative">
        <HeroSlider />
      </section>
      {/* hero section */}
      <section className=" py-10 md:py-16 px-4 md:px-12 bg-gradient-to-t from-white via-violet-100 to-rose-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* <div className="mb-4 inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium">
            🚀 PRODUCT HUNT — #1 Product of the Day
          </div> */}

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Smarter Workforce Management
            <br /> for Global Workplaces
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Whether you need face recognition devices, IRIS scanners, or
            fingerprint-based attendance systems, we help you maintain accurate
            records and simplify HR processes for small offices and large
            enterprises across cities and regions.
          </p>
          {/* 
          <div className="mt-6 flex justify-center flex-wrap gap-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-medium">
              Tailwind CSS
            </span>
            <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full font-medium">
              Bootstrap
            </span>
            <span className="bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full font-medium">
              React JS
            </span>
          </div> */}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-red text-white px-6 py-3 rounded-full md:text-lg font-semibold transition">
              About Us
            </button>
            <button className="bg-white border border-gray-300 px-6 py-3 rounded-full md:text-lg font-semibold hover:bg-gray-100 transition">
              Get In Touch
            </button>
          </div>

          {/* <div className="mt-12">
            <img
              src="/your-mockup-image.png" // Replace with actual path
              alt="Editor Preview"
              className="mx-auto rounded-xl shadow-lg max-w-full"
            />
          </div> */}
          {/* Video Preview */}
          <div className="mt-12 rounded-xl overflow-hidden max-w-full mx-auto shadow-lg">
            <video
              src="/assets/video/banner-video.mp4" // Replace with actual video path in public/
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>


      <section className="pt-4 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Our Comprehensive Solution
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Our biometric attendance and access control devices are designed for accuracy,
            durability, and scalability. Suitable for diverse industries in cities like
            Dubai, Mumbai, Riyadh, Bengaluru, and more.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br   from-white via-violet-50 to-rose-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-left"
              >
                <div className="mb-4 text-red">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pt-40 pb-10" id="about-section">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Who We Are
            </h2>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              <strong className="font-semibold"><span className="text-red-600">Time</span><span className="text-gray-600">Watch</span></strong> Infocom Pvt Ltd – Biometric & HRMS Solution Provider
            </h3>
            <p className="mb-4 text-gray-600">
              Discover the Power of TimeWatch. At TimeWatch Infocom Pvt Ltd, we
              offer innovative time attendance and access control solutions that
              are meant to secure and simplify HR processes such as payroll and
              employee tracking.
            </p>
            <p className="mb-4 text-gray-600">
              Our AI-driven solutions are implemented by businesses, organizations,
              and startups in India and UAE, Qatar, Oman, Saudi Arabia, Kuwait,
              Bahrain, and Southeast Asia. From facial recognition to real-time HRMS
              reporting, we simplify tracking, improve efficiency, and keep your
              workplace secure.
            </p>
            <p className="mb-4 text-gray-600">
              Whether you are running a 10-person startup or managing a workforce of
              thousands across multiple locations, TimeWatch gives you the tools to
              stay compliant, reduce manual errors, and optimize productivity.
            </p>
            <Link
              href="#"
              className="bg-red text-white px-6 py-3 rounded-full md:text-lg font-semibold transition inline-block"
            >
              Read more
            </Link>

          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={"/assets/img/wo-we-are.png"} // Replace with actual image path
              alt="Glasses"
              width={1000}
              height={500}

              className="rounded-md max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="pt-24 pb-16 product-section bg-gradient-to-b from-white via-violet-100 to-via-violet-50" id="products-section">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center mb-16">
            Featured Device Categories
          </h2>
          <ProductSlider />
        </div>
      </section>

      <section className="bg-white py-16" id="">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center mb-16">TimeWatch HRMS Platform</h2>
        <div className="max-w-7xl mx-auto px-4">
          {hrmsFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-10 mb-16`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto object-cover shadow"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2">
                <h2 className="text-2xl  md:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                  {feature.title}
                </h2>
                {feature.description.map((para, i) => (
                  <p key={i} className="mb-4 text-gray-600">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <TestimonialSlider />
      <section id="faq-section">
        <div className="w-full px-4 mt-16 pb-24 max-w-7xl mx-auto">
          <div className="mx-auto w-full rounded-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-500 mb-10">
              Everything you need to know about TimeWatch HRMS and biometric systems.
            </p>

            <FaqSection />

          </div>
        </div>
      </section>
    </div>
  );
}
