"use client";

import { Cake } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/30 bg-white/30 px-6 py-4 shadow-xl backdrop-blur-xl mt-5">

        <div className="flex items-center gap-2">

          <Cake className="text-pink-500" />

          <span className="text-2xl font-bold text-pink-600 font-fancy">
            👑 Akenya
          </span>

        </div>

        <nav className="hidden gap-8 md:flex">

          <a href="#home" className="hover:text-pink-500">
            Home
          </a>

          <a href="#countdown" className="hover:text-pink-500">
            Countdown
          </a>

          <a href="#gallery" className="hover:text-pink-500">
            Gallery
          </a>

          <a href="#wishes" className="hover:text-pink-500">
            Wishes
          </a>

        </nav>

      </div>
    </header>
  );
}