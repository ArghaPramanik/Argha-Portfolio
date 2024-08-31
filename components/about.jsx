/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a B.Tech graduate in{" "}
        <span className="font-medium">
          Computer Science and Information Technology
        </span>
        , passionate about programming since my second year. I've built numerous
        projects showcasing my expertise in{" "}
        <span className="font-medium">
          React.js, JavaScript, Tailwind CSS, MongoDB, and Next.js
        </span>
        . I'm also skilled in{" "}
        <span className="font-medium">
          Supabase, Zod, Framer Motion, Shadcn UI, and Material UI
        </span>
        . Although I don't have formal work experience, my hands-on project work
        has provided me with practical knowledge and the ability to create
        user-friendly, responsive applications. I'm eager to learn new
        technologies and currently seek a{" "}
        <span className="font-medium">
          full-time software developer position
        </span>
        .
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy movies,
        spending time with friends and family, and{" "}
        <span className="font-medium">learning new things</span>. I'm currently
        exploring <span className="font-medium">Next.js 15 and React 18</span>.
      </p>
    </motion.section>
  );
}
