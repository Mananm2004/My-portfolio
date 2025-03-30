import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link, Links } from "react-router-dom";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <div className="w-full  md:w-[80%] md:px-12  my-8 text-center ">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
          },
        }}
        className="text-2xl titles md:text-3xl font-bold mb-3 md:mb-8"
      >
        Hi👋, <br />
        I'm <span className="text-[#F46C38]">Manan Malik.</span>
      </motion.h1>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
          },
        }}
        className="md:text-[10vw] titles text-5xl font-black leading-10"
      >
        FULL-STACK
      </motion.h1>
      <motion.h1
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
          },
        }}
        className="md:text-[10vw] titles text-5xl font-black  text-zinc-600 leading-tight"
      >
        DEVELOPER.
      </motion.h1>

      <motion.p
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
          },
        }}
        className="text-md w-full titles text-zinc-300  md:w-3/4 mx-auto"
      >
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </motion.p>
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.2,
          },
          ease: "easeInOut",
        }}
        className="flex flex-col items-center gap-4 md:flex-row justify-center my-6"
      >
        <Link
          to="/projects"
          className="bg-[#F46C38] px-6 py-3 text-center rounded-full font-semibold "
        >
          Explore Projects <FaArrowUpRightFromSquare className="inline" />
        </Link>
        <a
          href={"/public/Manan_Malik1.pdf"}
          download
          className="bg-[#58C2F9]  px-6 py-3 text-center rounded-full font-semibold "
        >
          Download Resume{" "}
          <HiOutlineFolderDownload className="inline text-2xl" />
        </a>
      </motion.div>
    </div>
  );
}
