"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainHeader() {
    const t = useTranslations('header');

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigations = [
        { name: t("nav.home"), href: "/", },
        { name: t("nav.resume"), href: "/resume", },
        { name: t("nav.resume"), href: "/download", func: () => { } },
    ]

    return (
        <header className="fixed inset-0 flex mx-auto container justify-center h-16 mt-4 z-50">
            <div className={clsx("border border-transparent h-full transition-all duration-500 flex justify-between items-center rounded-2xl",
                isScrolled ? "border-white/10 px-4 w-2xl bg-white/10 backdrop-blur-sm" : "w-full"
            )}>
                <div className="flex h-full items-center">
                    <h1 className="text-lg font-semibold">{t("logo")}</h1>
                    <div className="h-[40%] w-px bg-white/20 mx-4"></div>
                    <nav className="flex items-center text-sm gap-4 text-gray-400 font-medium">
                        {navigations.map((nav, index) => {
                            if (nav.func) {
                                return <div key={index} onClick={nav.func} className="px-1 cursor-pointer">{nav.name}</div>
                            }
                            else {
                                return (<Link key={index} href={nav.href} className="px-1">{nav.name}</Link>)
                            }
                        })}
                    </nav>
                </div>
                <div className="flex gap-2 items-center">
                    <button className={clsx("bg-white text-zinc-900  font-medium",
                        isScrolled ? "h-9 px-3 rounded-xl text-sm" : "h-10 px-4 rounded-2xl"
                    )}>{t("loginButton")}</button>
                </div>
            </div>
        </header>
    )
}
