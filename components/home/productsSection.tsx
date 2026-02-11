"use client"

import { motion } from "motion/react"

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Complete online shopping experience with AI-powered recommendations and seamless checkout.",
        category: "Web Development",
        tech: ["Next.js", "Stripe", "AI"],
        color: "#14b8a6"
    },
    {
        id: 2,
        title: "SaaS Dashboard",
        description: "Analytics dashboard with real-time data visualization and team collaboration features.",
        category: "UI/UX Design",
        tech: ["React", "D3.js", "Figma"],
        color: "#0ea5e9"
    }
]

export default function ProductsSection() {
    return (
        <section className="relative min-h-screen py-24 px-6 bg-card/30">
            <div className="max-w-6xl mx-auto z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                        Most Popular
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                        Pixel Tuner Products
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        A selection of projects that showcase our expertise in creating
                        impactful digital solutions.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-card rounded-2xl border border-border overflow-hidden cursor-pointer"
                        >
                            {/* Project header */}
                            <div
                                className="h-44 relative overflow-hidden"
                                style={{
                                    background: `linear-gradient(135deg, ${project.color}12 0%, ${project.color}05 100%)`
                                }}
                            >
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold"
                                        style={{
                                            backgroundColor: project.color + "18",
                                            color: project.color
                                        }}
                                    >
                                        {project.title.charAt(0)}
                                    </div>
                                </motion.div>

                                {/* Category badge */}
                                <span
                                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                        backgroundColor: project.color + "18",
                                        color: project.color
                                    }}
                                >
                                    {project.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover arrow */}
                            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                                {"->"}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View all */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3.5 rounded-full bg-secondary text-foreground font-medium border border-border inline-flex items-center gap-2"
                    >
                        View All Projects
                        <span>{"->"}
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
