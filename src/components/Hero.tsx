"use client";

import React from "react";
import GradualSpacing from "./ui/gradual-spacing";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import ProfileAvatar from "./ProfileAvatar";

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-8">
          <ProfileAvatar />
        </div>
        <GradualSpacing
          text="Howdy, I'm Tri!"
          className="text-5xl md:text-6xl font-bold text-white mb-4 text-center"
        />
        <AnimateOnScroll
          animation={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
            },
          }}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl text-center">
            I design user interfaces that connect humans and machines.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
