"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"

const areas = [
  { id: "area1", name: "Kanakpura", description: "Elevated plots with panoramic views", x: 25, y: 30 },
  { id: "area2", name: "Mandya", description: "Waterfront properties with private access", x: 60, y: 50 },
  { id: "area3", name: "Mysore", description: "Secluded lots surrounded by nature", x: 40, y: 70 },
  { id: "area4", name: "Harohalli", description: "Spacious plots in the central valley", x: 75, y: 25 },
]

export default function Masterplan() {
  const [activeArea, setActiveArea] = useState(null)
  const mapRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".map-point",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.5, ease: "back.out(1.7)" },
      )

      gsap.fromTo(".map-image", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleAreaHover = (areaId) => {
    setActiveArea(areaId)
  }

  const handleAreaLeave = () => {
    setActiveArea(null)
  }

  return (
    <section id="masterplan" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-50 opacity-50 -skew-x-12 transform origin-top-right" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent"
          >
            Interactive Masterplan
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
            Explore our thoughtfully designed community layout with premium land parcels in distinct neighborhoods.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800">Select an Area to Explore</h3>
              <p className="text-slate-600 mb-6">
                Our masterplan features distinct neighborhoods, each with unique characteristics and advantages. Hover
                over the map to discover each area.
              </p>

              <div className="space-y-4">
                {areas.map((area) => (
                  <motion.div
                    key={area.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => handleAreaHover(area.id)}
                    onMouseLeave={handleAreaLeave}
                    className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                      activeArea === area.id
                        ? "bg-teal-50 border-l-4 border-teal-500"
                        : "bg-white/50 hover:bg-white border-l-4 border-transparent"
                    }`}
                  >
                    <h4 className="text-lg font-medium text-slate-800">{area.name}</h4>
                    <p className="text-slate-600">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div ref={mapRef} className="order-1 md:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="map-image relative rounded-xl overflow-hidden shadow-xl border-8 border-white"
            >
              <img 
              // src="/placeholder.svg?height=600&width=800" 
              src="https://placehold.co/800x600"
              alt="Property masterplan" 
              className="w-full h-auto" />

              {areas.map((area) => (
                <div
                  key={area.id}
                  className={`map-point absolute w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                    activeArea === area.id ? "bg-teal-500 scale-150" : "bg-teal-500/70"
                  }`}
                  style={{ left: `${area.x}%`, top: `${area.y}%` }}
                  onMouseEnter={() => handleAreaHover(area.id)}
                  onMouseLeave={handleAreaLeave}
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>

                  {activeArea === area.id && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white p-3 rounded-lg shadow-lg w-48 z-10">
                      <div className="font-medium text-slate-800">{area.name}</div>
                      <div className="text-sm text-slate-600">{area.description}</div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}