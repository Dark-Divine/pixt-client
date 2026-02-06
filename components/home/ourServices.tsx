import React from 'react'
import { motion } from "motion/react"

const services = [
    {
        title: "Web Development",
        description: "Modern, performant websites and web applications built with cutting-edge technologies.",
        icon: "</>"
    },
    {
        title: "UI/UX Design",
        description: "Intuitive interfaces and seamless user experiences that delight and convert.",
        icon: "[]"
    },
    {
        title: "AI Solutions",
        description: "Smart integrations and AI-powered features that transform your business.",
        icon: "{}"
    },
    {
        title: "Marketing",
        description: "Data-driven digital marketing strategies that grow your brand and reach.",
        icon: "()"
    }
]

const technologies = [
    "React", "Next.js", "TypeScript", "TailwindCSS",
    "Node.js", "Python", "Figma", "AI/ML"
]

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Years Experience" }
]

export default function OurServices() {
    return (
        <section className="relative min-h-screen flex items-center py-24 px-6">
            <div className="max-w-6xl mx-auto w-full z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                        About Us
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                        Creative Studio for the{" "}
                        <span className="text-primary">Digital Age</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Pixel Tuner brings together design, technology, and strategy to create
                        digital experiences that make an impact.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-12 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-muted-foreground text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-card border border-border group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-mono text-lg mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech stack */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-muted-foreground text-sm mb-4">Technologies we work with</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                                className="px-4 py-2 text-sm rounded-full bg-secondary text-foreground border border-border cursor-default transition-colors"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
