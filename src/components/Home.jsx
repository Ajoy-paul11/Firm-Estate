import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Overview from "./Overview";
import Masterplan from "./Masterplan";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Cursor from "./Cursor";
import logo from "../assets/logo-2.png";
import ContactModal from "./ContactModal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModal = () => setIsModelOpen(true);

  const closeModal = () => setIsModelOpen(false);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main ref={mainRef} className="relative overflow-hidden bg-slate-50">
      <Cursor />

      <AnimatePresence>
        {loading ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-teal-900"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-gold-500 flex items-center justify-center gap-2"
            >
              <img src={logo} className=" text-center mb-4" alt="Logo" />
            </motion.div>
          </motion.div>
        ) : (
          <>
            <ContactModal isOpen={isModelOpen} onClose={closeModal} />
            <Navbar openModal={openModal} />
            <HeroSection />
            <Overview />
            <Masterplan />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}