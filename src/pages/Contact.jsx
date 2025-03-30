import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-10"
    >
      <div className="bg-zinc-800 p-10 rounded-2xl shadow-lg text-center max-w-lg">
        {/* Profile Photo */}
        <img
          src="public/photo1.jpeg" // Replace with your photo URL
          alt="Profile"
          className="w-60 h-60 rounded-full mx-auto border-4 border-[#F46C38] mb-4"
        />

        {/* Contact Details */}
        <h2 className="text-3xl font-bold mb-2">Manan Malik</h2>
        <p className="text-lg text-gray-400">Full Stack Developer</p>

        <div className="mt-6 space-y-4">
          {/* Email */}
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-3 text-lg hover:text-[#F46C38] transition"
          >
            <FaEnvelope size={24} />
            mananm359@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/manan-malik-a822641a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg hover:text-[#F46C38] transition"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Mananm2004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg hover:text-[#F46C38] transition"
          >
            <FaGithub size={24} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
