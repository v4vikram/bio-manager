"use client";

import {
  // Facebook,
  // Youtube,
  // Github,
  X,
  BadgeCheck,
  Discord,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#181827] via-gray-900 to-[#2a1010] text-white px-3 md:px-6 pt-20 pb-10" id="contact-section">
      <div className="max-w-7xl mx-auto">
        {/* Subscribe Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#2d2d46] to-[#1c1c1c] p-6 rounded-xl shadow-md">
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              Subscribe to get product updates.
            </h3>
            <p className="text-sm text-gray-400">
              No spam, unsubscribe any time!
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto items-center bg-white rounded-full overflow-hidden"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full md:w-64 text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-red text-white px-4 py-3 font-medium hover:bg-gray-900 transition relative"
            >
               <Send />
            </button>
          </form>
        </div>

        <hr className="my-12 border-gray-700" />

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Logo + Social */}
          <div className="space-y-4">
            <Link href="#home-section" className="flex items-center space-x-2">
              <div className="relative w-[220px] h-[70px]">
                <Image
                  src="/assets/img/icons/bio-manager-logo-white.svg"
                  alt="Bio Manager"
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p>
              Empowering businesses with intelligent attendance tracking, secure
              access control, and seamless workforce management worldwide.
            </p>

            {/* <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text text-2xl font-extrabold">E</span>
              EasyFrontend
            </h1> */}

            <div className="flex gap-4 text-white text-lg">
              {/* <Github className="cursor-pointer" /> */}
              {/* <Facebook className="cursor-pointer" /> */}
              {/* <Youtube className="cursor-pointer" /> */}
              {/* <X className="cursor-pointer" /> */}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-2">
            <h3 className="font-semibold text-white text-lg">Quick Links</h3>
            <ul className="space-y-1 text-gray-300">
              <li>
                <Link href="#">UI Components</Link>
              </li>
              <li>
                <Link href="#">E-commerce</Link>
              </li>
              <li>
                <Link href="#">Dashboard Kit (Upcoming)</Link>
              </li>
              <li>
                <Link href="#">Vue Components (Upcoming)</Link>
              </li>
            </ul>
          </div>

          {/* General */}
          <div className="space-y-2">
            <h3 className="font-semibold text-white text-lg">General</h3>
            <ul className="space-y-1 text-gray-300">
              <li>
                <Link href="#">Build Template</Link>
              </li>
              <li>
                <Link href="#">Codebase Generator</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Templates</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          {/* Contact Us */}
          <div className="space-y-2">
            <h3 className="font-semibold text-white text-lg">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 text-white" />
                <span>123, Easy Street, Tech Park, Bangalore, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-white" />
                <a href="tel:+911234567890" className="hover:underline">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-white" />
                <a
                  href="mailto:info@easyfrontend.com"
                  className="hover:underline"
                >
                  info@easyfrontend.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-center text-gray-500 text-xs">
          Copyright © 2025 Bio Manager. All right reserved
        </p>
      </div>
    </footer>
  );
}
