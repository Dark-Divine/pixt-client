"use client";

import { DeviconPlainTypescript } from "@/components/icons/DeviconPlainTypescript";
import { SkillIconsDocker } from "@/components/icons/SkillIconsDocker";
import { SkillIconsGit } from "@/components/icons/SkillIconsGit";
import { SkillIconsGithubLight } from "@/components/icons/SkillIconsGithubLight";
import { SkillIconsJavascript } from "@/components/icons/SkillIconsJavascript";
import { SkillIconsLuaDark } from "@/components/icons/SkillIconsLuaDark";
import { SkillIconsLuaLight } from "@/components/icons/SkillIconsLuaLight";
import { SkillIconsNestjsDark } from "@/components/icons/SkillIconsNestjsDark";
import { SkillIconsNestjsLight } from "@/components/icons/SkillIconsNestjsLight";
import { SkillIconsNextjsLight } from "@/components/icons/SkillIconsNextjsLight";
import { SkillIconsNodejsDark } from "@/components/icons/SkillIconsNodejsDark";
import { SkillIconsReactDark } from "@/components/icons/SkillIconsReactDark";
import { SkillIconsTailwindcssLight } from "@/components/icons/SkillIconsTailwindcssLight";
import { SkillIconsThreejsLight } from "@/components/icons/SkillIconsThreejsLight";
import { SkillIconsTypescript } from "@/components/icons/SkillIconsTypescript";
import { SkillIconsUbuntuLight } from "@/components/icons/SkillIconsUbuntuLight";
import { SkillIconsVisualstudioDark } from "@/components/icons/SkillIconsVisualstudioDark";
import { SkillIconsVisualstudioLight } from "@/components/icons/SkillIconsVisualstudioLight";
import { SkillIconsViteDark } from "@/components/icons/SkillIconsViteDark";
import { SkillIconsViteLight } from "@/components/icons/SkillIconsViteLight";
import { SkillIconsVscodeDark } from "@/components/icons/SkillIconsVscodeDark";
import { SkillIconsVscodeLight } from "@/components/icons/SkillIconsVscodeLight";
import { SkillIconsWordpress } from "@/components/icons/SkillIconsWordpress";
import Image from "next/image";
import { motion } from "motion/react"

export default function ProfilePage() {

    const mySkills = [
        { name: "JavaScript", icon: <SkillIconsJavascript className="w-14 h-14" /> },
        { name: "TypeScript", icon: <SkillIconsTypescript className="w-14 h-14" /> },
        { name: "React", icon: <SkillIconsReactDark className="w-14 h-14" /> },
        { name: "Next.js", icon: <SkillIconsNextjsLight className="w-14 h-14" /> },
        { name: "Node.js", icon: <SkillIconsNodejsDark className="w-14 h-14" /> },
        { name: "NestJS", icon: <SkillIconsNestjsDark className="w-14 h-14" /> },
        { name: "Docker", icon: <SkillIconsDocker className="w-14 h-14" /> },
        { name: "Three.js", icon: <SkillIconsThreejsLight className="w-14 h-14" /> },
        { name: "Tailwind CSS", icon: <SkillIconsTailwindcssLight className="w-14 h-14" /> },
        { name: "Git", icon: <SkillIconsGit className="w-14 h-14" /> },
        { name: "Github", icon: <SkillIconsGithubLight className="w-14 h-14" /> },
        { name: "Lua", icon: <SkillIconsLuaDark className="w-14 h-14" /> },
        { name: "VSCode", icon: <SkillIconsVscodeDark className="w-14 h-14" /> },
        { name: "Visual Studio", icon: <SkillIconsVisualstudioDark className="w-14 h-14" /> },
        { name: "Ubuntu", icon: <SkillIconsUbuntuLight className="w-14 h-14" /> },
        { name: "Vite", icon: <SkillIconsViteDark className="w-14 h-14" /> },
        { name: "NestJS", icon: <SkillIconsWordpress className="w-14 h-14" /> },
        { name: "Wordpress", icon: <SkillIconsWordpress className="w-14 h-14" /> },

    ]

    return (
        <div className="h-full container mx-auto w-full max-w-300">
            <div className="min-h-screen h-full flex items-center justify-center gap-6">
                <div className="flex flex-col gap-6 min-w-80 w-fit items-center">
                    <div className="w-54 h-54 rounded-full overflow-hidden border-2 border-white/10 p-1 bg-white/5">
                        <Image src="/testprofile.jpeg" width={800} height={800} alt="" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="font-bold text-xl">
                        Sina Ghare Mohammadi
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <h4 className="font-semibold text-xl">
                        🛠 Tech Stack
                    </h4>
                    <div className="my-26 flex max-w-180 flex-wrap items-center justify-center gap-3 text-lg text-gray-800">
                        {/* {mySkills.map((skill, index) => (
                            <div key={index} className="rounded-xl pl-3 pr-4 h-14 flex border border-white/10 items-center gap-2">
                                {skill.icon}
                                <span className="text-lg text-white/80">
                                    {skill.name}
                                </span>
                            </div>
                        ))} */}

                        {mySkills.map((skill, index) => (
                            <div key={index} className="relative cursor-pointer group">
                                <motion.div
                                    initial={{ scale: 0, }}
                                    whileInView={{ scale: 1, }}
                                    transition={{
                                        scale: { type: "tween", delay: 0.2, duration: 0.3 },
                                    }}
                                    className="hidden group-hover:flex whitespace-nowrap h-7
                                 items-center w-fit px-2 text-[15px] absolute inset-0 -mt-9 rounded-lg
                                  bg-gray-800 backdrop-blur-lg z-10 text-white/80">
                                    {skill.name}
                                </motion.div>
                                {skill.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
