import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import ProjectCard from "../components/ProjectCard";
import ProjectDets from "../components/ProjectDets";

export default function Projects() {
  const projects = useSelector((state) => state.projects);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="p-8">
        <div className="text-2xl text-zinc-600 font-black">
          <h1>
            CRAFTED <br /> WITH <span className="text-red-500"> LOVE❤️</span>
          </h1>
          <h1 className="text-5xl md:text-8xl text-zinc-200">
            RECENT
            <br />
            <span className="text-zinc-600">PROJECTS.</span>
          </h1>
        </div>
        <div className="flex flex-col  gap-5 my-8">
          {projects?.map((items, idx) => {
            return idx % 2 !== 0 ? (
              <ProjectDets
                key={idx}
                data={items}
                direction="md:flex-row-reverse"
              />
            ) : (
              <ProjectDets key={idx} data={items} direction="md:flex-row" />
            );
          })}
        </div>
      </main>
    </div>
  );
}
