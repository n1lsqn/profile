"use client";

import { LeftSide } from "@/features/leftSide";
import { RightSide } from "@/features/rightSide";
import { useEffect, useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemPrefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <div className="bg-[url('/assets/bg_blur.webp')] bg-cover flex flex-col justify-center items-center min-h-screen p-4 relative before:absolute before:inset-0 before:bg-black/0 dark:before:bg-black/40 before:pointer-events-none before:transition-colors before:duration-500">
      <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-2xl rounded-xl overflow-hidden bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border border-purple-500/20 dark:border-purple-500/10 transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-[0_25px_60px_-15px_rgba(124,58,237,0.25)] dark:hover:shadow-[0_25px_60px_-15px_rgba(168,85,247,0.15)] animate-fade-in-up z-10">
        <LeftSide theme={theme} toggleTheme={toggleTheme} />
        <div className="border-t border-purple-500/10 dark:border-purple-500/5 md:border-t-0 md:border-l"></div>
        <RightSide />
      </div>
      <p className="mt-6 text-xs text-white/60 font-medium tracking-wider select-none animate-fade-in-up [animation-delay:200ms]">
        © 2024 - 2026 にる / n1lsqn. All Rights Reserved.
      </p>
    </div>
  )
}

export default Home;