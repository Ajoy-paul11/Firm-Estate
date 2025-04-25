"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
// import { ChevronDown } from "lucide-react"
import { FaChevronDown } from "react-icons/fa";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const scrollToOverview = () => {
    document.querySelector("#overview")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      id="home"
      ref={ref}
      style={{ opacity }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/ajoy/bg-image-firmland?updatedAt=1745409971157')",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h1 className="hero-text text-5xl md:text-7xl font-bold text-white mb-6">
          Investing in Infrastructure,
        </motion.h1>
        <motion.h1 className="hero-text text-5xl md:text-7xl font-bold text-white mb-6">
          Cultivating Growth.
        </motion.h1>
        {/* <motion.p className="hero-text text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          Discover exclusive land opportunities in prime locations for your dream estate
        </motion.p>
        <motion.div className="hero-text flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-700 to-teal-500 text-white px-8 py-4 rounded-md font-medium text-lg"
          >
            Explore Properties
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md font-medium text-lg"
          >
            Book a Consultation
          </motion.button>
        </motion.div> */}
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <FaChevronDown
          className="text-white w-10 h-10 cursor-pointer"
          onClick={scrollToOverview}
        />
      </motion.div>
    </motion.section>
  );
}
