"use client";
import { useEffect, useRef } from "react";
import useMousePosition from "@/hooks/useMousePosition";

export default function BackgroundEffects() {
  const { x, y } = useMousePosition();
  const orbRef = useRef(null);

  useEffect(() => {
    if (orbRef.current) {
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [x, y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-black">
      {/* Matrix Grid */}
      <div className="absolute inset-0 matrix-grid opacity-[0.05]"></div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] contrast-[150%] brightness-[100%]" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

      {/* Following Orb */}
      <div
        ref={orbRef}
        className="absolute w-[800px] h-[800px] rounded-full blur-[160px] opacity-[0.15] pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)",
          left: "-400px",
          top: "-400px",
        }}
      ></div>
      
      {/* Static Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-magenta-glow/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-glow/5 rounded-full blur-[140px]"></div>
    </div>
  );
}
