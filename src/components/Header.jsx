"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home-section" },
  { name: "About", href: "#about-section" },
  { name: "Services", href: "#services-section" },
  { name: "Features", href: "#features-section" },
  { name: "Products", href: "#products-section" },
  { name: "FAQ", href: "#faq-section" },
  { name: "Contact", href: "#contact-section" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-red font-medium nav-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <button className="bg-red text-white font-semibold px-6 py-2 rounded-full shadow-md hidden lg:block">
          Contact Us
        </button>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden relative z-10" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X size={24} className="text-black" /> : <Menu size={24} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="lg:hidden bg-white px-4 py-3 shadow absolute top-0 left-0 right-0">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
