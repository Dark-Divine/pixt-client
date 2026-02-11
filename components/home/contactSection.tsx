"use client"

import { motion } from "motion/react"

export function ContactSection() {
    return (
        <section className="relative min-h-screen flex items-center py-24 px-6">
            <div className="max-w-4xl mx-auto w-full z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                        Contact
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                        Let{"'"}s Start a{" "}
                        <span className="text-primary">Project</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
                        Ready to bring your ideas to life? Get in touch and let{"'"}s discuss
                        how Pixel Tuner can help transform your digital presence.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-xl mx-auto space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid sm:grid-cols-2 gap-4">
                        <motion.input
                            whileFocus={{ scale: 1.01 }}
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-5 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                        <motion.input
                            whileFocus={{ scale: 1.01 }}
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-5 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                    </div>

                    <motion.select
                        whileFocus={{ scale: 1.01 }}
                        className="w-full px-5 py-4 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        defaultValue=""
                    >
                        <option value="" disabled>Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="design">UI/UX Design</option>
                        <option value="ai">AI Solutions</option>
                        <option value="marketing">Marketing</option>
                        <option value="other">Other</option>
                    </motion.select>

                    <motion.textarea
                        whileFocus={{ scale: 1.01 }}
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="w-full px-5 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                    />

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium text-lg flex items-center justify-center gap-2"
                    >
                        Send Message
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            {"->"}
                        </motion.span>
                    </motion.button>
                </motion.form>
            </div>
        </section>
    )
}
