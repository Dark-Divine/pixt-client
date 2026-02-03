"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react"

export default function HomeComponent() {
    const t = useTranslations('HomePage');



    return (
        <div className="min-h-screen h-full text-white">
            <main className="h-full">
                <section className="h-screen mx-auto w-full container flex items-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(137,94,221,0.12)_0%,transparent_70%)]" />
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center z-10">
                        <div className="order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-secondary/50 border border-border text-sm text-muted-foreground mb-6">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    Available for new projects
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance"
                            >
                                We Craft{" "}
                                <span className="text-primary">Digital</span>
                                <br />
                                Experiences
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-muted-foreground text-lg max-w-lg mb-8 text-pretty"
                            >
                                Pixel Tuner is a creative studio specializing in web development,
                                UI/UX design, AI solutions, and digital marketing that drives results.
                            </motion.p>

                            {/* Services tags */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.45 }}
                                className="flex flex-wrap gap-2 mb-8"
                            >
                                {["Web Development", "UI/UX Design", "AI Solutions", "Marketing"].map((service, i) => (
                                    <span
                                        key={service}
                                        className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {service}
                                    </span>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    // onClick={() => setActiveSection("projects")}
                                    className="px-8 py-3.5 rounded-[20px] bg-primary text-primary-foreground font-medium flex items-center gap-2"
                                >
                                    <motion.span>
                                        View Our Work
                                    </motion.span>
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        {"->"}
                                    </motion.span>
                                </motion.button>

                                <motion.button
                                    initial={{ scale: 1.0 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    // onClick={() => setActiveSection("contact")}
                                    className="px-8 py-3.5 rounded-[20px] bg-secondary text-foreground font-medium border border-border"
                                >
                                    Get in Touch
                                </motion.button>
                            </motion.div>
                        </div>
                        <div className="order-1 lg:order-2"></div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex flex-col items-center gap-2 text-[#808080]"
                        >
                            <span className="text-xs tracking-widest uppercase">Scroll</span>
                            <div className="w-5 h-8 rounded-full border border-[#1d2226] flex items-start justify-center p-1">
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-1 h-1 rounded-full bg-indigo-500"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
                <section className="h-screen"></section>

            </main>
        </div>
    )
}
