"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image7.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/kushalnagar-land.jpg";
import image8 from "../assets/mysore-land.jpg";

const projects = [
  {
    id: 1,
    title: "Firm Landscape",
    location: "Kanakapura, Bangalore",
    description:
      "Kanakpura, this sanctuary's core principle lies in living in harmony with nature.",
    // image: "/placeholder.svg?height=600&width=800",
    image: image2,
    size: "5-10 Acres",
    price: "Starting at $2.5M",
  },
  {
    id: 2,
    title: "Firm Landscape",
    location: "Mandya, Karnataka",
    description:
      "Mandya Farms embodies the rustic charm and fertile bounty of the region.",
    // image: "/placeholder.svg?height=600&width=800",
    image: image6,
    size: "2-8 Acres",
    price: "Starting at $3.8M",
  },
  {
    id: 3,
    title: "Firm Estates",
    location: "Kushalnagara, Karnataka",
    description:
      "Kushalnagara, this farm signifies prosperity and growth as its central tenet.",
    // image: "/placeholder.svg?height=600&width=800",
    image: image4,
    size: "10-25 Acres",
    price: "Starting at $4.2M",
  },
  {
    id: 4,
    title: "Firm Estates",
    location: "Harohalli, Bangalore",
    description:
      "Harohalli, this haven of tranquility mirrors the self-sustaining harmony of nature, much like a lush forest.",
    // image: "/placeholder.svg?height=600&width=800",
    image: image3,
    size: "1-5 Acres",
    price: "Starting at $1.8M",
  },
  {
    id: 5,
    title: "Firm Estates",
    location: "Sakleshpura, Bangalore",
    description:
      "Sakleshpura, this farm epitomizes the joy and celebration inherent in nature.",
    // image: "/placeholder.svg?height=600&width=800",
    image: image5,
    size: "1-5 Acres",
    price: "Starting at $1.8M",
  },
  {
    id: 6,
    title: "Firm Estates",
    location: "Kollegala, Bangalore",
    description:
      "In the vicinity of Kollegala, this farm embodies abundance and growth.",
    // image: "/placeholder.svg?height=600&width=800",
    image: image7,
    size: "1-5 Acres",
    price: "Starting at $1.8M",
  },
  {
    id: 7,
    title: "Firm Estates",
    location: "Mysore, Karnataka",
    description:
      "Mysore, retreat offers a tranquil immersion into nature's embrace, reflecting the city's inherent peacefulness.",
    // image: "/placeholder.svg?height=600&width=800",
    image: image8,
    size: "1-5 Acres",
    price: "Starting at $1.8M",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-slate-50 relative overflow-hidden"
    >
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
            Explore our collection of premium land properties in the most
            desirable locations.
          </motion.p>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="overflow-hidden rounded-2xl shadow-2xl"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="relative">
                    <img
                      src={project.image || "https://placehold.co/800x600"}
                      alt={project.title}
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center gap-2 mb-3 absolute md:relative bottom-0.5 md:bottom-0 left-2.5 md:left-0">
                        <FiMapPin className="w-5 h-5" />
                        <span className="text-white/90">
                          {project.location}
                        </span>
                      </div>
                      <h3 className="hidden md:block text-3xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className=" hidden md:block text-white/80 mb-4 max-w-2xl">
                        {project.description}
                      </p>

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
            className="absolute top-1/2 -left-9 md:left-4 transform -translate-y-1/2 bg-transparent md:bg-white/80 md:hover:bg-white text-teal-700 p-3 rounded-full md:shadow-lg z-10 md:backdrop-blur-sm"
          >
            <FaChevronCircleLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-9 md:right-4 transform -translate-y-1/2 bg-transparent md:bg-white/80 md:hover:bg-white text-teal-700 p-3 rounded-full md:shadow-lg z-10 md:backdrop-blur-sm"
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
  );
}
