"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express.js"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "ChromaDB", "Pinecone"],
  },
  {
    title: "AI/GenAI",
    items: ["OpenAI", "LangChain", "RAG", "Vector Search"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}