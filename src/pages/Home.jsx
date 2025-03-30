import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Box from "../components/Box";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import TechStack from "./TechStack";
import Contact from "./Contact";

export default function Home() {
  const projects = useSelector((state) => state.projects);

  const [box, setBox] = useState([
    // {
    //   title: "My Achievements",
    //   description: "Hackathons, Certifications, or Project milestones.",
    //   bgcolor:
    //     "https://static.vecteezy.com/system/resources/thumbnails/020/544/792/small/gradient-orange-waves-background-fluid-gradient-shapes-composition-vector.jpg",
    //   color: "text-white",
    //   to: "/achievements",
    // },
    {
      title: "My Projects",
      description: "Crafted with Love.",
      bgcolor:
        "https://media.istockphoto.com/id/1388817756/vector/art-background-of-blue-and-green-squares-connected-diagonally-geometric-texture-abstract-art.jpg?s=612x612&w=0&k=20&c=oswEX3lg3C1JzfmLav9c7JqVo5G_ZVB26PjuD1Ze3e8=",
      color: "text-black",
      to: "/projects",
    },
    {
      title: "Tech Stack",
      description: "React.js | Redux | Node.js | Express | MongoDB and more...",
      bgcolor:
        "https://imgs.search.brave.com/Cny1K13rgTH__xZ9EzHCVrdLLiLihtK4wxQLO3w6C08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgyL2Ux/LzEwLzgyZTExMGFk/ZDlmYjExYzgwZDhl/MjBiODRmZDVjNjAw/LmpwZw",
      color: "text-white",
      to: "/techstack",
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: false, // Animation should happen only once
    });

    // Optional: Clean up on component unmount
    return () => {
      AOS.refreshHard(); // Ensures smooth re-initialization
    };
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="flex md:items-center  p-8  flex-col  ">
        <Hero />
        {/* Acheivement Boxs  */}

        <div className="flex flex-col md:flex-row items-center gap-3">
          {box.map((items, idx) => {
            return <Box data={items} key={idx} />;
          })}
        </div>

        <hr className=" w-1/3 my-8" />
        <div className="w-full">
          <h3 data-aos="fade-right" className="text-6xl md:text-8xl font-black">
            RECENT
          </h3>
          <h3
            data-aos="fade-right"
            className="text-6xl md:text-8xl font-black  text-zinc-600"
          >
            PROJECTS.
          </h3>
        </div>
        <div className="flex md:flex-row justify-center flex-wrap flex-col  w-full gap-5 py-8">
          {projects.map((elem, idx) => {
            return <ProjectCard data={elem} key={idx} />;
          })}
        </div>
        <Link
          data-aos="fade-up"
          to="/projects"
          className="border hover:bg-zinc-200  hover:text-zinc-950 duration-300 ease-in-out px-6 text-center py-2 rounded-full text-sm tracking-tight flex items-center justify-center gap-3"
        >
          Explore All Projects <FaArrowUpRightFromSquare />
        </Link>
        <TechStack />
        <Contact />
        <div className="w-full my-8">
          <h3
            data-aos="fade-right"
            className="text-2xl md:text-5xl text-zinc-600 font-black leading-[1]"
          >
            THANK YOU FOR VISITING MY PORTFOLIO.
          </h3>
          <h3
            data-aos="fade-right"
            className="text-6xl md:text-7xl font-black flex  items-center gap-2 flex-wrap  leading-[1]"
          >
            {/* {/* <span className="text-[#F46C38]">SKILLS</span> */}
            <span className="text-5xl md:text-8xl">...</span>
            <span className="text-[#58C2F9]">.</span>
          </h3>
        </div>
      </main>
    </div>
  );
}
