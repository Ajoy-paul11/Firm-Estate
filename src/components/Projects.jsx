"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
// import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { FiMapPin } from "react-icons/fi"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"
import { image } from "framer-motion/client"


const projects = [
  {
    id: 1,
    title: "Oakridge Estates",
    location: "Kanakapura, Bangalore",
    description: "Premium land parcels nestled in the mountains with breathtaking views and exclusive amenities.",
    // image: "/placeholder.svg?height=600&width=800",
    image: "https://placehold.co/800x600/",
    size: "5-10 Acres",
    price: "Starting at $2.5M",
  },
  {
    id: 2,
    title: "Coastal Highlands",
    location: "Mandya, Karnataka",
    description: "Oceanfront properties with private beach access and panoramic Pacific views.",
    // image: "/placeholder.svg?height=600&width=800",
    image: "https://placehold.co/800x600/",
    size: "2-8 Acres",
    price: "Starting at $3.8M",
  },
  {
    id: 3,
    title: "Vineyard Reserve",
    location: "Kushalnagar, Karnataka",
    description: "Fertile land parcels in wine country, perfect for private estates with vineyard potential.",
    // image: "/placeholder.svg?height=600&width=800",
    image: "https://placehold.co/800x600/",
    size: "10-25 Acres",
    price: "Starting at $4.2M",
  },
  {
    id: 4,
    title: "Desert Oasis",
    location: "Harohalli, Bangalore",
    description: "Expansive desert properties with mountain views and resort-style community amenities.",
    // image: "/placeholder.svg?height=600&width=800",
    image: "https://placehold.co/800x600/",
    size: "1-5 Acres",
    price: "Starting at $1.8M",
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef(null)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent"
          >
            Featured Properties
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
            Explore our collection of premium land properties in the most desirable locations.
          </motion.p>
        </div>

        <div className="relative">
          <div ref={sliderRef} className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center gap-2 mb-3">
                        <FiMapPin className="w-5 h-5" />
                        <span className="text-white/90">{project.location}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                      <p className="text-white/80 mb-4 max-w-2xl">{project.description}</p>

                      {/* <div className="flex flex-wrap gap-4 mb-6">
                        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-white/90">{project.size}</span>
                        </div>
                        <div className="bg-teal-500/90 px-4 py-2 rounded-full">
                          <span className="text-white font-medium">{project.price}</span>
                        </div>
                      </div> */}

                      {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-teal-700 px-6 py-3 rounded-md font-medium"
                      >
                        View Property
                      </motion.button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-teal-700 p-3 rounded-full shadow-lg z-10 backdrop-blur-sm"
          >
            <FaChevronCircleLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-teal-700 p-3 rounded-full shadow-lg z-10 backdrop-blur-sm"
          >
            <FaChevronCircleRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-teal-600 w-8" : "bg-teal-200"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-700 to-teal-500 text-white px-8 py-4 rounded-md font-medium text-lg"
          >
            View All Properties
          </motion.button>
        </div>
      </div>
    </section>
  )
}