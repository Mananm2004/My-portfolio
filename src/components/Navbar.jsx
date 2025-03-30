import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCode, FaTools, FaEnvelope } from "react-icons/fa"; // Corrected icons
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation(); // Get current route

  // Function to determine active link styles
  const getLinkStyle = (path) =>
    location.pathname === path ? "text-[#F46C38]" : "text-white";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 },
        ease: "easeInOut",
      }}
      className="p-4"
    >
      <nav className="w-fit py-4 mt-2 px-6 md:w-fit text-xl md:gap-10 mx-auto flex items-center justify-center md:justify-evenly gap-10 rounded-full bg-zinc-900">
        <Link to="/" className={getLinkStyle("/")}>
          <FaHome />
        </Link>
        <Link to="/projects" className={getLinkStyle("/projects")}>
          <FaCode />
        </Link>
        <Link to="/techstack" className={getLinkStyle("/techstack")}>
          <FaTools />
        </Link>
        <Link to="/contact" className={getLinkStyle("/contact")}>
          <FaEnvelope />
        </Link>
      </nav>
    </motion.header>
  );
}
