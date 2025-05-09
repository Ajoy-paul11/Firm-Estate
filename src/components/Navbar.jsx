"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link"
// import { Building2, Menu, X } from "lucide-react"
import { FaBuilding } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import logo from "../assets/logo-pragathi.png";
import ContactModal from "./ContactModal";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "Overview", to: "overview" },
  { name: "Masterplan", to: "masterplan" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar({ openModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    // document.querySelector(href)?.scrollIntoView({
    //   behavior: "smooth",
    // });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-2">
          <img src={logo} className=" w-[200px]" />
          {/* <span className="text-xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
            PRAGATHI INFRA REALTY
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
              onClick={() => {
                // e.preventDefault();
                handleLinkClick();
              }}
              className={` ${
                scrolled ? "text-slate-700" : "text-white"
              } hover:text-teal-600 transition-colors relative group `}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="bg-gradient-to-r from-teal-700 to-teal-500 text-white px-6 py-2 rounded-md font-medium"
          >
            Inquire Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700 focus:outline-none"
        >
          {isOpen ? <RxCross1 size={24} /> : <CiMenuFries size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => {
                    // e.preventDefault();
                    handleLinkClick();
                  }}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={` text-slate-700 hover:text-teal-600 transition-colors py-2 text-lg
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={openModal}
                className="bg-gradient-to-r from-teal-700 to-teal-500 text-white px-6 py-3 rounded-md font-medium mt-4"
              >
                Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
