import React, { useEffect } from "react";
import { Link, Links } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectCard({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: false, // Animation should happen only once
    });

    // Optional: Clean up on component unmount
    return () => {
      AOS.refreshHard(); // Ensures smooth re-initialization
    };
  }, []);
  return (
    <Link
      data-aos="fade-up"
      to={data.liveLink}
      target="_blank"
      className="w-full rounded-xl overflow-hidden relative md:w-[45%] group"
    >
      <img className="w-full" src={data.img} alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-zinc-900 bg-opacity-60 flex items-center  flex-col justify-center gap-3 text-3xl font-bold tracking-tight italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h1>{data.title}</h1>
        <div className="flex items-center gap-4">
          <Link
            to={data.liveLink}
            target="_blank"
            className="border-2 flex items-center gap-3 border-[#F46C38] bg-[#F46C38] text-sm font-semibold  rounded-full px-4 py-1"
          >
            Live Preview <FaArrowUpRightFromSquare />
          </Link>
          <Link
            to={data.gitRepo}
            target="_blank"
            className="text-sm font-semibold flex items-center gap-2 text-black bg-[#58C2F9] rounded-full px-4 py-1"
          >
            <BsGithub /> GitHub Repo
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
