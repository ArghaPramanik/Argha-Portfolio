import promptopiaImg from "../public/promptopia.png";
import climey from "../public/climey.png";
import crossfitnessIMG from "../public/crossfitnessIMG.jpg";
import oppotunex from "../public/oppotunex.png";
import innoxplore from "../public/innoxplore.png"

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
];

export const projectsData = [
  {
    title: "OpportuneX",
    description:
      "A job portal application enabling job posting, application tracking, and resume uploads for recruiters and candidates.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Supabase",
      "Clerk",
      "Zod",
      "JavaScript",
    ],
    imageUrl: oppotunex,
    liveLink: "https://opportune-x-wwfj.vercel.app/",
  },

  {
    title: "Cross-Fitness App",
    description:
      "A next-gen fitness app that helps users find personalized exercises, watch exercise videos, and track their fitness progress.",
    tags: [
      "React.js",
      "Material-UI",
      "JavaScript",
      "ExerciseDB API",
      "YouTube API",
      "CSS",
    ],
    imageUrl: crossfitnessIMG,
    liveLink: "https://crossfitness-gym-app.netlify.app/",
  },
  {
    title: "Promptopia",
    description:
      "A Next.js 13 web app that helps users query ChatGPT and Bard AI using thoughtfully curated prompts, enhancing your interactions with LLMs.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: promptopiaImg,
    liveLink: "https://promptopia-qxsnlocvb-arghapramanik.vercel.app/",
  },
  {
    title: "Climey",
    description:
      "Climy App built with React.js and OpenWeather API, featuring real-time weather updates and dynamic search with animated icons for a seamless user experience.",
    tags: ["React", "Javascript", "CSS", "Geolocation API"],
    imageUrl: climey,
    liveLink: "https://climey.vercel.app/",
  },
   {
    title: "Innoxplore",
    description:
      "Developed a design-oriented web application named Innoxplore, focusing on user engagement through a visually appealing and modern interface.",
    tags: ["React", "Javascript", "Tailwind CSS", "Custom Hook"],
    imageUrl: innoxplore,
    liveLink: "https://inno-xplore.vercel.app/",
  },
]; // <-- Closing bracket for projectsData array

export const skillsData = [
  "JavaScript",
  "ReactJs",
  "NextJs",
  "Tailwind",
  "Zod",
  "Shadcn UI",
  "Material UI",
  "HTML",
  "CSS",
  "Git & Github",
  "MongoDB",
  "Framer Motion",
];
