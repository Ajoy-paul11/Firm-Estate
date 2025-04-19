"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
// import { CheckCircle2 } from "lucide-react"
import { FiCheckCircle } from "react-icons/fi";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "1200+", label: "Acres Developed" },
  { value: "350+", label: "Happy Clients" },
  { value: "15+", label: "Luxury Developments" },
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 80%",
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-teal-50 opacity-30 -skew-x-12 transform origin-top" />
        <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-teal-50 opacity-30 skew-x-12 transform origin-bottom" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y }} className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-100 rounded-full opacity-50 blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/placeholder.svg?height=800&width=600" 
                  alt="About our company" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="stats-container grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="stat-item bg-white p-4 rounded-xl shadow-lg opacity-0"
                  >
                    <div className="text-3xl font-bold text-teal-700">{stat.value}</div>
                    <div className="text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent"
            >
              About Luxe Estates
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-teal-700 to-teal-500 mb-6"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 mb-6"
            >
              For over 25 years, Luxe Estates has been the premier developer of luxury land properties, creating opportunities for discerning investors and homeowners to build their legacy on exceptional foundations.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-slate-600 mb-8"
            >
              Our commitment to excellence is reflected in every property we develop. We carefully select prime locations with exceptional natural features, ensuring that each parcel of land offers unique advantages and investment potential.
            </motion.p>
            
            <div className="space-y-4 mb-8">
              {[
                "Meticulous land selection in high-growth areas",
                "Comprehensive development planning and approvals",
                "Sustainable infrastructure implementation",
                "Exclusive ownership benefits and privileges"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-700 to-teal-500 text-white px-8 py-4 rounded-md font-medium text-lg"
            >
              Our Story
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}