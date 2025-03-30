import React from "react";
import Navbar from "../components/Navbar";

export default function Acheivements() {
  document.title = "Milestones & Achievements";
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="p-8">
        <div className="text-2xl text-zinc-600 font-black">
          <h1 className="text-[5vw] leading-6 mb-2">
            <span className="text-orange-400">Milestones</span>
            <br /> & <span className="text-cyan-300"> Achievements...</span>
          </h1>
          <h1 className="text-[12.8vw] md:text-8xl leading-10 text-zinc-200">
            JOURNEY OF <br />
            <span className="text-zinc-600">EXCELLENCE.</span>
          </h1>
          <p className="w-3/4 md:w-1/2 text-sm mt-2 md:text-xl md:mt-1">From hackathons to full-stack projects, here’s a glimpse of what I’ve accomplished.</p>
        </div>
        
      </div>
    </div>
  );
}
