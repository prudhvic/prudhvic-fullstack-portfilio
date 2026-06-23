"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "AI Knowledge Assistant",
        description:
            "GenAI-powered knowledge assistant using OpenAI, LangChain, ChromaDB and RAG pipelines.",
        tech: [
            "Next.js",
            "TypeScript",
            "OpenAI",
            "LangChain",
            "ChromaDB",
        ],
        github: "#",
        live: "#",
    },
    {
        title: "E-Commerce Platform",
        description:
            "Enterprise-scale ecommerce platform supporting checkout, payments, wishlist and order management.",
        tech: [
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "TypeScript",
        ],
        github: "#",
        live: "#",
    },
    {
        title: "RAG Applications",
        description:
            "Document intelligence applications using FastAPI, OpenAI, Pinecone and semantic search.",
        tech: [
            "FastAPI",
            "Python",
            "OpenAI",
            "Pinecone",
        ],
        github: "#",
        live: "#",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="max-w-6xl mx-auto py-24 px-6"
        >
            <h2 className="text-4xl font-bold mb-12">
                Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="rounded-xl border border-gray-800 p-6 hover:border-white transition"
                    >
                        <h3 className="text-2xl font-bold">
                            {project.title}
                        </h3>

                        <p className="mt-4 text-gray-400">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-sm bg-zinc-900 px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>


                    </motion.div>
                ))}
            </div>
        </section>
    );
}