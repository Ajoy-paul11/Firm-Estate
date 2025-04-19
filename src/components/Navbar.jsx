"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import Link from "next/link"
// import { Building2, Menu, X } from "lucide-react"
import { FaBuilding } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Overview", href: "#overview" },
  { name: "Masterplan", href: "#masterplan" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLinkClick = (href) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    })
  }

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
          <FaBuilding className="h-8 w-8 text-teal-700" />
          <span className="text-xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
            LUXE ESTATES
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(link.href)
              }}
              className="text-slate-700 hover:text-teal-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-700 to-teal-500 text-white px-6 py-2 rounded-md font-medium"
          >
            Inquire Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-700 focus:outline-none">
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
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  className="text-slate-700 hover:text-teal-600 transition-colors py-2 text-lg"
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-gradient-to-r from-teal-700 to-teal-500 text-white px-6 py-3 rounded-md font-medium mt-4">
                Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}