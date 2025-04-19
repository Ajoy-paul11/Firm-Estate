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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);

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
              className="text-4xl md:text-6xl font-bold text-gold-500"
            >
              LUXE ESTATES
            </motion.div>
          </motion.div>
        ) : (
          <>
            <Navbar />
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