"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { GrSend } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FiPhoneCall, FiMessageSquare } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ContactModal({ isOpen, onClose }) {
  // const [formData, setFormData] = React.useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const onSubmit = async (data) => {

    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Push the form submission event to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submission",
          formId: "admission_form",
        });

        toast.success("Message sent Successfully");

        reset();
        onClose();
      } else {
        toast.error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error(error.message || "Internal Server Error, Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className=" max-h-[90vh] md:h-fit relative w-full max-w-4xl mx-auto overflow-x-scroll md:overflow-hidden rounded-2xl shadow-2xl bg-white flex flex-col md:flex-row">
              {/* Close button */}
              <button
                onClick={onClose}
                className="z-50 absolute top-4 right-4 p-1 rounded-full bg-white/10 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors "
                aria-label="Close modal"
              >
                <RxCross1 className="w-5 h-5" />
              </button>

              {/* Left Section - Design */}
              <div className="relative w-full md:w-5/12 bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-700 p-4 md:p-12">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
                  <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Get in Touch
                    </h2>
                    <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/90 md:mb-8"
                  >
                    We'd love to hear from you. Fill out the form and our team
                    will get back to you as soon as possible.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="hidden md:block"
                  >
                    <div className="relative w-full aspect-square max-w-[240px] mx-auto">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full bg-white/10 rounded-full animate-pulse [animation-duration:3s]"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 bg-white/10 rounded-full animate-pulse [animation-duration:4s] [animation-delay:0.5s]"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1/2 h-1/2 bg-white/20 rounded-full animate-pulse [animation-duration:5s] [animation-delay:1s]"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FiMessageSquare className="w-16 h-16 text-white/80" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Section - Form */}
              <div className="w-full md:w-7/12 p-4 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className=" text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-6">
                    Send us a message
                  </h3>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" space-y-2 md:space-y-6"
                  >
                    <input
                      type="hidden"
                      defaultValue="215656cf-6822-4295-a464-341673bfb290"
                      {...register("access_key")}
                    />
                    <input
                      type="hidden"
                      defaultValue="New Website Inquiry"
                      {...register("subject")}
                    />
                    <input
                      type="hidden"
                      value="Pragathi Infra Realty"
                      {...register("from_name")}
                    />
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaRegUser className="h-3 md:h-5 w-3 md:w-5 text-gray-400" />
                        </div>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          className={`block w-full pl-10 pr-3 py-3 border ${
                            errors.name ? "border-red-300" : "border-gray-300"
                          } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                          placeholder="John Doe"
                        />
                      </div>
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.name.message}
                          </p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <IoIosMail className="h-3 md:h-5 w-3 md:w-5 text-gray-400" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className={`block w-full pl-10 pr-3 py-3 border ${
                            errors.email ? "border-red-300" : "border-gray-300"
                          } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                          placeholder="john@example.com"
                        />
                      </div>
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                          </p>
                        )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiPhoneCall className="h-3 md:h-5 w-3 md:w-5 text-gray-400" />
                        </div>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          {...register("phone", {
                            required: "Phone number is required",
                          })}
                          className={`block w-full pl-10 pr-3 py-3 border ${
                            errors.phone ? "border-red-300" : "border-gray-300"
                          } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                          placeholder="(123) 456-7890"
                        />
                      </div>
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.phone.message}
                          </p>
                        )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                          <FiMessageSquare className="h-3 md:h-5 w-3 md:w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          {...register("message", {
                            required: "Message is required",
                          })}
                          className={`block w-full pl-10 pr-3 py-3 border ${
                            errors.message
                              ? "border-red-300"
                              : "border-gray-300"
                          } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none`}
                          placeholder="Your message here..."
                        />
                      </div>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <GrSend className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
