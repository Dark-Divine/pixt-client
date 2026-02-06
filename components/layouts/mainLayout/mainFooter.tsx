"use client"

import { motion } from "motion/react"
import Link from "next/link"

export default function MainFooter() {
    return (

        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="flex flex-col w-full relative"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(137,94,221,0.12)_0%,transparent_70%)]" />
            {/* <div className="w-full h-px bg-border"></div> */}
            <motion.div className="flex justify-around items-start gap-24 w-full py-12 container mx-auto px-6 ">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col gap-6"
                >
                    <h4 className="font-bold">Pixel Tuner</h4>
                    <div className="flex flex-col gap-4 text-muted-foreground hover:text-primary">
                        <div className="flex flex-wrap justify-center gap-6">
                            <motion.a
                                href="mailto:hello@pixeltuner.studio"
                                whileHover={{ y: -2 }}
                                className=" transition-colors"
                            >
                                darkdivine.dev@gmail.com
                            </motion.a>
                        </div>
                        <div className="flex justify-center gap-3">
                            {[
                                { name: "X", icon: "X" },
                                { name: "LinkedIn", icon: "in" },
                                { name: "Dribbble", icon: "Dr" },
                                { name: "GitHub", icon: "GH" }
                            ].map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href="#"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    className="w-11 h-11 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors text-sm font-medium"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 1.2 }}
                >
                    <h4>Pixel Tuner Services</h4>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 1.2 }}
                >
                    <h4>Pixel Tuner Products</h4>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 1.2 }}
                >
                    <h4>Contact Pixel Tuner</h4>
                </motion.div>
            </motion.div>
            <div className="w-full h-px bg-border mx-auto container"></div>
            <motion.div className="py-6 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">2025 Pixel Tuner. All rights reserved.</p>
                <div>
                    <Link href="#"></Link>
                </div>
            </motion.div>
        </motion.footer>
    )
}
