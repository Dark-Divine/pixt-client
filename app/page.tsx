"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
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

  return (
    <div className="min-h-screen h-full text-white">
      <header className="fixed inset-0 flex mx-auto container justify-center h-16 mt-4">
        <div className={clsx("border border-transparent h-full w-full  flex justify-between items-center  rounded-2xl",
          isScrolled && "border-white/10 px-4"

        )}>
          <div className="flex h-full items-center">
            <h1>Pixel Tuner</h1>
            <div className="h-1/4 w-px bg-white mx-4"></div>
            <nav>
              <ul className="flex items-center gap-4">
                <li className="px-2">Home</li>
                <li className="px-2">Resume</li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-4">
            <button>Lets Get Start</button>
            <button>Login | Register</button>
          </div>
        </div>
      </header>
      <main className="h-full">
        <section className="h-screen mx-auto w-full container flex items-center">
          <div className="flex flex-col gap-6">
            <h4 className="font-extrabold text-7xl">Pixel Tuner</h4>
            <div>
              <button>Lets Get Start</button>
            </div>
          </div>
          <div>

          </div>
        </section>
      </main>
    </div>
  );
}
