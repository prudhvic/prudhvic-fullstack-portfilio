"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold"
        >
          Hi, I&apos;m Prudhvi 👋
        </motion.h1>

        <p className="mt-6 text-xl text-gray-400">
          Full Stack Developer & AI Engineer
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-gray-500">
          Building scalable web applications using Next.js, React,
          FastAPI, PostgreSQL and AI technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-lg"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-gray-700 rounded-lg"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}