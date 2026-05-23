"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 10) + 1;
        return next > 100 ? 100 : next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (counter === 100) {
      const ctx = gsap.context(() => {
        gsap.to(".loading-text", {
          y: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power4.in",
          stagger: 0.1,
        });
        
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          delay: 0.5,
          onComplete: () => setLoading(false),
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [counter]);

  return (
    <AnimatePresence>
      {loading && (
        <div
          ref={containerRef}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-obsidian text-white"
        >
          <div className="relative overflow-hidden space-y-4 text-center">
            <div className="overflow-hidden">
              <h2 className="loading-text text-sm font-bold tracking-[0.5em] uppercase opacity-40">
                System Initializing
              </h2>
            </div>
            <div className="overflow-hidden">
              <h1 className="loading-text text-8xl md:text-9xl font-black tracking-tighter uppercase">
                {counter}%
              </h1>
            </div>
          </div>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-white/10 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: `${counter - 100}%` }}
              className="w-full h-full bg-accent"
            />
          </div>

          <div className="absolute inset-0 opacity-5 matrix-grid pointer-events-none"></div>
        </div>
      )}
    </AnimatePresence>
  );
}
