"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
// import { MapPin, Ruler, Award, Leaf } from "lucide-react"
import { FiMapPin } from "react-icons/fi"
import { LuRuler } from "react-icons/lu";
import { FaAward } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import overImg from "../assets/firm-overview.png";


const features = [
  {
    icon: <FiMapPin className="w-10 h-10 text-teal-600" />,
    title: "Prime Locations",
    description: "Strategically located properties in high-growth areas with excellent connectivity and amenities.",
  },
  {
    icon: <LuRuler className="w-10 h-10 text-teal-600" />,
    title: "Expansive Plots",
    description: "Generous land parcels designed to accommodate luxury estates with ample space for landscaping.",
  },
  {
    icon: <FaAward className="w-10 h-10 text-teal-600" />,
    title: "Premium Investment",
    description: "High-value land assets with strong appreciation potential and exclusive ownership benefits.",
  },
  {
    icon: <FaLeaf className="w-10 h-10 text-teal-600" />,
    title: "Sustainable Development",
    description: "Environmentally conscious planning with preservation of natural features and green spaces.",
  },
]

export default function Overview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const imageRef = useRef(null)

  useEffect(() => {
    if (isInView) {
      gsap.to(".feature-item", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      })
    }
  }, [isInView])

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return

      const scrollPosition = window.scrollY
      const offset = scrollPosition * 0.1

      // imageRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="overview" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent"
          >
            Exceptional Land Properties
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-teal-700 to-teal-500 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Discover our portfolio of premium land properties designed for those who seek to build their legacy on solid
            foundations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={ref} className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-item flex gap-6 opacity-0 translate-y-10">
                <div className="flex-shrink-0 p-2 md:p-4 rounded-xl bg-teal-50 border border-teal-100">{feature.icon}</div>
                <div>
                  <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-lg lg:text-xl text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-100 rounded-full opacity-50 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-teal-200 rounded-full opacity-50 blur-3xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div ref={imageRef} className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                // src="/placeholder.svg?height=800&width=600" 
                // src="https://placehold.co/800x600"
                src={overImg}
                alt="Luxury land property" 
                className="w-full h-auto" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-2 lg:p-6 rounded-xl shadow-xl">
                <div className="text-xl lg:text-3xl font-bold text-teal-700">250+ Acres</div>
                <div className=" text-sx lg:text-lg text-slate-600">Premium Land Available</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}