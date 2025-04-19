"use client"

import { motion } from "framer-motion"
// import Link from "next/link"
import { Link } from "react-scroll";
// import { Building2, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { FaBuilding, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <FaBuilding className="h-8 w-8 text-teal-400" />
              <span className="text-xl font-bold text-white">LUXE ESTATES</span>
            </Link>
            <p className="text-slate-300 mb-6">
              Premium land properties for discerning investors and homeowners looking to build their legacy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Properties", "Masterplan", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Properties</h3>
            <ul className="space-y-4">
              {["Oakridge Estates", "Coastal Highlands", "Vineyard Reserve", "Desert Oasis", "Mountain Retreat"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for the latest property updates and exclusive offers.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-teal-700 to-teal-500 text-white py-3 rounded-lg font-medium"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Luxe Estates. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-slate-400 hover:text-teal-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-teal-400 text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-teal-400 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}