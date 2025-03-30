import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "CampusRide",
    development: "Full-Stack Project ",
    img: "src/assets/CampusRide.png",
    description: `Engineered a real-time ride-hailing platform for campus students to efficiently book e-rickshaws, improving
    campus mobility.Integrated Google Maps API for real-time location tracking, optimized route planning, and accurate fare
    estimation.Enhanced real-time communication between students and e-rickshaw drivers, reducing average wait times by
    30%.`,
    liveLink: "https://campus-ride-rho.vercel.app/",
    gitRepo: "https://github.com/Mananm2004/campusRide",
    techStack: [
      "ReactJS",
      "Redux",
      "MongoDB",
      "Tailwind CSS",
      "Node.js",
      "Google Maps Api",
      "Express.js",
    ],
  },
  {
    title: "MOVIE APP",
    development: "Frontend ",
    description: `Developed an interactive movie browsing platform replicating key IMDB features using React (Vite) for
    enhanced performance.
    Integrated Redux for state management, ensuring seamless content updates and navigation.
    Styled the application using Tailwind CSS, delivering a sleek and intuitive user interface.
    Implemented TMDB API to dynamically fetch and display real-time data on 50,000+ movies and TV
    shows with a 98% API response accuracy.
   Optimized search and filtering algorithms, boosting search result relevancy by 25% and enhancing the user
experience.`,
    img: "src/assets/MovieApp.png",
    liveLink: "https://movie-app-n8ci.vercel.app/",
    gitRepo: "https://github.com/Mananm2004/MovieApp.git",
    techStack: ["ReactJS", "Redux", "Tailwind CSS", "Context-API"],
  },
  {
    title: "Dev Tinder",
    development: "Full-Stack Project ",
    description: `Developed a developer networking platform that connects programmers based on skills, interests, and
    collaboration needs.Designed a React-based frontend with Tailwind CSS, ensuring a modern, responsive, and user-friendly inter-face.Secured user authentication with JWT-based authentication and role-based access control, safeguarding user data.`,
    img: "src/assets/DevTinder.png",
    flexDirection: "flex-row-reverse",
    bgColor: "[#58C2F9]",
    liveLink: "https://dev-tinder-frontend-nine.vercel.app/",
    gitRepo: "https://github.com/Mananm2004/DEV-TINDER-FRONTEND",
    techStack: ["ReactJS", "Express.js", "MongoDB", "Tailwind CSS", "Node.js"],
  },
];

export const projectSlice = createSlice({
  name: "Projects",
  initialState,
  reducers: {},
});

export default projectSlice.reducer;
