"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, X } from "lucide-react";
import TypingText from "@/components/TypingText";

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);


export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo(".hero-title",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.1,
          delay: 0.5,
        }
      );

      gsap.fromTo(".hero-sub",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 1.2,
        }
      );

      gsap.fromTo(".hero-cta",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          delay: 1.5,
        }
      );

      // Mouse move parallax
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(".parallax-bg", {
          x: xPos * 0.5,
          y: yPos * 0.5,
          duration: 1.5,
          ease: "power2.out",
        });

        gsap.to(".parallax-img", {
          x: -xPos,
          y: -yPos,
          duration: 2,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none">
        <div className="parallax-bg absolute inset-[-10%] matrix-grid text-muted opacity-20 dark:opacity-40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Side Content Box (Screenshot styled card) */}
        <div className="lg:col-span-7 glass p-8 md:p-12 rounded-3xl border border-white/10 dark:border-white/5 relative overflow-hidden backdrop-blur-xl space-y-6 shadow-2xl">
          {/* Subtle cyan glow behind text */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-2">
            <h1 className="hero-title text-5xl md:text-7xl font-black uppercase tracking-tight text-foreground dark:text-white leading-none">
              Hi, I'm Jonayet Nur
            </h1>
            <h1 className="hero-title text-4xl md:text-6xl font-black uppercase tracking-tight text-accent leading-none block">
              MERN Stack Developer
            </h1>
          </div>

          {/* Underline accent line */}
          <div className="w-16 h-[3px] bg-accent rounded-full my-4"></div>

          {/* Typing Animation */}
          <div className="py-1">
            <TypingText
              texts={[
                "MongoDB | Express.js | React | Node.js",
                "Building Scalable Database Architectures",
                "Designing Highly Animated Interactive UIs",
                "Crafting Robust RESTful & GraphQL APIs"
              ]}
              speed={80}
              delay={2000}
            />
          </div>

          <p className="hero-sub text-sm md:text-base text-paragraph dark:text-slate-300 leading-relaxed text-left">
            I am currently studying computer science and engineering. Passionate about <span className="text-accent font-semibold">coding</span> and learning new technologies. I thrive both working independently and in teams, with experience in <span className="text-accent font-semibold">programming competitions</span>. I love building <span className="text-accent font-semibold">full-stack</span> apps, exploring backend architecture. I'm always curious about new tech, constantly experimenting, and leveling up my skills in software development. I enjoy turning ideas into clean, working code. Always building, always growing. Let's connect and make something awesome!
          </p>

          <div className="hero-cta flex flex-wrap gap-5 pt-2">
            <button className="group flex items-center gap-3 bg-accent text-white px-6 py-3 rounded-full font-bold shadow-xl shadow-accent/20 hover:scale-105 transition-all cursor-pointer">
              VIEW PROJECTS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-3">
              {[
                { Icon: GithubIcon, href: "https://github.com/jonayet-nur" },
                { Icon: X, href: "https://x.com" },
                { Icon: LinkedinIcon, href: "https://linkedin.com/in/jonayet-nur-tanjim" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                <button
                  className="p-2.5 rounded-full border border-black/5 dark:border-white/10 hover:bg-accent/10 hover:border-accent/40 text-foreground/80 dark:text-white/80 hover:text-accent transition-all hover:-translate-y-1 cursor-pointer"
                >
                  <Icon className="w-4.5 h-4.5" />
                </button>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Portrait Layout (Perfect circle from screenshot) */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0">
          {/* Radial glow background behind circle */}
          <div className="absolute w-[110%] h-[110%] bg-accent/10 dark:bg-accent/15 rounded-full blur-[100px] pointer-events-none z-0"></div>

          <div className="parallax-img relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[450px] aspect-square z-10">

            {/* Circular Frame Container */}
            <div className="absolute inset-0 rounded-full border-4 border-accent/25 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.25)] bg-gradient-to-tr from-accent/20 to-teal-500/20 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-teal-500/10 mix-blend-overlay"></div>
              <Image
                src="/profile.jpg"
                alt="Tanjim Nur"
                fill
                priority
                className="object-cover rounded-full h-full w-full brightness-100 group-hover:scale-105 transition-all duration-1000"
              />
            </div>

            {/* Floating Sphere: Top Right */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 right-8 w-14 h-14 rounded-full bg-gradient-to-tr from-teal-400 to-green-300 shadow-lg shadow-teal-500/20 filter blur-[0.5px]"
            ></motion.div>

            {/* "About Me" Overlay Card: Right Side */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 -right-8 glass p-3.5 px-4 rounded-2xl shadow-xl flex items-center gap-3 border-white/20 select-none cursor-pointer hover:scale-105 transition-all"
            >
              <div className="text-left">
                <p className="text-xs font-black text-accent tracking-wide">About Me</p>
                <p className="text-[9px] text-muted font-medium">Click to explore</p>
              </div>
              <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
            </motion.div>

            {/* Floating "View in 3D" Pill: Center-Left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-1/3 -left-4 glass px-4 py-2 rounded-full border-accent/40 flex items-center gap-2 shadow-lg bg-accent/10 backdrop-blur-md hover:scale-105 transition-transform"
            >
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">View in 3D</span>
            </motion.div>

            {/* Cute Waving SVG Robot: Bottom Right */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 -right-4 w-14 h-14 pointer-events-none select-none"
            >
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <rect x="16" y="24" width="32" height="28" rx="6" fill="#1e1f29" stroke="var(--accent)" strokeWidth="2.5" />
                <rect x="22" y="12" width="20" height="12" rx="4" fill="#12131c" stroke="var(--accent)" strokeWidth="2.5" />
                <line x1="32" y1="12" x2="32" y2="4" stroke="var(--accent)" strokeWidth="2.5" />
                <circle cx="32" cy="4" r="3" fill="#22d3ee" />
                <circle cx="28" cy="18" r="2" fill="#22d3ee" className="animate-pulse" />
                <circle cx="36" cy="18" r="2" fill="#22d3ee" className="animate-pulse" />
                <rect x="18" y="15" width="4" height="6" rx="1" fill="var(--accent)" />
                <rect x="42" y="15" width="4" height="6" rx="1" fill="var(--accent)" />
                <path d="M48 32 C54 28, 58 22, 60 16" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
                <path d="M16 32 C10 34, 6 38, 4 44" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Terminal Code Button: Bottom Left */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-2 left-6 w-11 h-11 rounded-full glass border-white/20 flex items-center justify-center text-accent shadow-lg select-none cursor-pointer hover:bg-accent/10 transition-colors"
            >
              <span className="font-mono text-xs font-black tracking-tighter">&gt;_</span>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted">Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-white"
          />
        </div>
      </div>
    </section>
  );
}
