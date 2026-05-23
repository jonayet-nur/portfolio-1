"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Terminal, ArrowRight, ChevronRight, HelpCircle, Code, Cpu, Database, RefreshCw, Sparkles, Send } from "lucide-react";

// SVGs for custom social icons
const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const DEVELOPER_NAME = "Jonayet";
const DEVELOPER_BIO = "Passionate Mern Stack developer creating digital experiences that make a difference. Always learning, always growing, always innovating.";

const QUICK_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

const SERVICES = [
  "Web Development",
  "Software Development",
  "Backend Development",
  "Database Management"
];

// Funny developer jokes for the CLI Terminal
const DEV_JOKES = [
  "Why do programmers wear glasses? Because they can't C#!",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "There are 10 types of people in this world: Those who understand binary, and those who don't.",
  "['hip', 'hip'] (hip hip array!)",
  "Why did the database administrator leave his wife? She had one-to-many relationships.",
  "What is a programmer's favorite hangout place? Foo Bar!"
];

export default function Footer() {
  const [isPlanetExpanded, setIsPlanetExpanded] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [isBooting, setIsBooting] = useState(false);
  const [isHacking, setIsHacking] = useState(false);
  const canvasRef = useRef(null);
  const historyEndRef = useRef(null);

  // Twinkling stars effect background
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const starCount = 35;
    const generatedStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
    setStars(generatedStars);
  }, []);

  // Matrix Rain effect canvas
  useEffect(() => {
    if (!isHacking) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    const columns = Math.floor(canvas.width / 14);
    const drops = Array(columns).fill(1);
    const matrixChars = "0101ABCDEFGHIJKLMNOPQRSTUVWXYZｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0"; // Green text
      ctx.font = "13px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * 14;
        const y = drops[i] * 14;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isHacking]);

  // Terminal scroll to bottom
  useEffect(() => {
    if (historyEndRef.current) {
      historyEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory, isBooting]);

  // Boot terminal sequence
  const bootTerminal = () => {
    setIsTerminalOpen(true);
    setIsBooting(true);
    setTerminalHistory([]);
    setTerminalInput("");

    const lines = [
      ">> INITIALIZING ANTIGRAVITY OS V3.5...",
      ">> ESTABLISHING HANDSHAKE WITH AL AMIN'S DATABASE...",
      ">> PORTFOLIO SECURE SHELL DECRYPTED SUCCESSFULLY.",
      ">> WELCOME, VISITOR! CUSTOM HOLOGRAPHIC SHELL BOOTED.",
      ">> Type /help for all available easter egg commands."
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setTerminalHistory((prev) => [...prev, { text: lines[currentLine], type: "system" }]);
        currentLine++;
      } else {
        setIsBooting(false);
        clearInterval(interval);
      }
    }, 300);
  };

  // Handle Terminal Commands
  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...terminalHistory, { text: `$ ${cmdText}`, type: "user" }];
    setTerminalHistory(newHistory);
    setTerminalInput("");

    setTimeout(() => {
      if (trimmed === "/help") {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "Available holographic terminal commands:", type: "system" },
          { text: "  /hack    - Run matrix digital rain hack animation", type: "info" },
          { text: "  /joke    - Request an elite developer joke from the server", type: "info" },
          { text: "  /skills  - Fetch Al Amin's secret terminal stats & core driver gauges", type: "info" },
          { text: "  /about   - Print full cryptographic background profile of the developer", type: "info" },
          { text: "  /clear   - Purge console log database history", type: "info" },
          { text: "  /back    - Shutdown terminal and return to normal website view", type: "info" }
        ]);
      } else if (trimmed === "/hack") {
        setIsHacking(true);
        setTerminalHistory((prev) => [
          ...prev,
          { text: "⚠ SYSTEM BREACH IMMINENT! DECRYPTING PORTFOLIO CODES...", type: "warning" },
          { text: "MATRIX CODE RAIN ACTIVATED. Type /clear to restore screen view.", type: "success" }
        ]);
      } else if (trimmed === "/clear") {
        setIsHacking(false);
        setTerminalHistory([]);
      } else if (trimmed === "/joke") {
        const randomJoke = DEV_JOKES[Math.floor(Math.random() * DEV_JOKES.length)];
        setTerminalHistory((prev) => [
          ...prev,
          { text: `💬 AI Assistant: "${randomJoke}"`, type: "success" }
        ]);
      } else if (trimmed === "/skills") {
        setTerminalHistory((prev) => [
          ...prev,
          { text: "⚡ CORE COMPILER GAUGE ENGINE STATUS:", type: "system" },
          { text: "  React/NextJS  [██████████] 100% - Critical Mastery", type: "success" },
          { text: "  Node.js/Exp   [█████████░] 90%  - Advanced Architect", type: "success" },
          { text: "  MongoDB/Sql   [████████░░] 80%  - Database Guardian", type: "success" },
          { text: "  Tailwind CSS  [██████████] 100% - Visual Perfectionist", type: "success" }
        ]);
      } else if (trimmed === "/about") {
        setTerminalHistory((prev) => [
          ...prev,
          { text: `👤 Subject: ${DEVELOPER_NAME}`, type: "system" },
          { text: `Description: ${DEVELOPER_BIO}`, type: "info" },
          { text: "Mission: Design beautiful interactive webscapes, optimizing layouts, backend pipelines, and UX with seamless visual animations.", type: "info" }
        ]);
      } else if (trimmed === "/back") {
        setIsHacking(false);
        setIsTerminalOpen(false);
      } else {
        setTerminalHistory((prev) => [
          ...prev,
          { text: `❌ Unknown command: "${trimmed}". Type /help to see all commands.`, type: "error" }
        ]);
      }
    }, 100);
  };

  return (
    <footer className="w-full py-16 px-4 md:px-12 relative overflow-hidden bg-transparent flex flex-col items-center">
      {/* Background twinkling stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-slate-400 dark:bg-cyan-400 opacity-35 dark:opacity-60 animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Floating ambient orbs inside main wrapping */}
      <div className="absolute top-[20%] left-[8%] w-[350px] h-[350px] bg-accent/5 dark:bg-cyan-glow/5 rounded-full blur-[100px] pointer-events-none z-0 animate-bounce" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[20%] right-[8%] w-[350px] h-[350px] bg-purple-500/5 dark:bg-magenta-glow/5 rounded-full blur-[100px] pointer-events-none z-0 animate-bounce" style={{ animationDuration: '10s' }}></div>

      {/* Main Glass Footer Container */}
      <div className="max-w-[1440px] w-full glass rounded-[2.5rem] p-8 md:p-12 relative z-10 border border-white/10 dark:border-cyan-500/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">

        {/* Holographic grid scanline overlay (always visible inside glass footer) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,19,28,0)_95%,rgba(34,211,238,0.35)_95%)] bg-[size:100%_24px] z-20"></div>

        <AnimatePresence mode="wait">
          {!isTerminalOpen ? (
            /* --- Standard Interactive Layout --- */
            <motion.div
              key="standard-layout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start z-10 relative"
            >
              {/* Left Column: Creator Profile & Interactive Planet */}
              <div className="space-y-6 flex flex-col items-start relative group">
                <div className="space-y-2">
                  <h3 className="text-3xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 uppercase text-glow">
                    {DEVELOPER_NAME}
                  </h3>
                  <p className="text-sm text-paragraph dark:text-slate-300 leading-relaxed font-sans max-w-sm">
                    {DEVELOPER_BIO}
                  </p>
                </div>

                {/* --- Social Planet Interactive Segment --- */}
                <div className="relative pt-6 flex items-center gap-6">
                  {/* Planet sphere wrapper */}
                  <div
                    onClick={() => setIsPlanetExpanded(!isPlanetExpanded)}
                    className="relative w-20 h-20 rounded-full flex items-center justify-center cursor-pointer group/planet select-none z-30"
                  >
                    {/* Atmospheric outer glow aura */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-600 to-orange-400 opacity-20 blur-md group-hover/planet:scale-110 transition-all duration-500"></div>

                    {/* Planet Ball */}
                    <div className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-orange-600 via-amber-600 to-orange-400 shadow-2xl relative overflow-hidden flex items-center justify-center border border-orange-300/20">
                      {/* Atmospheric moving bands overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.15)_25%,rgba(0,0,0,0.15)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.15)_75%)] bg-[size:20px_20px] opacity-40 animate-pulse"></div>

                      {/* Internal shadow detailing for depth */}
                      <div className="absolute inset-0 rounded-full shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.6),inset_8px_8px_16px_rgba(255,255,255,0.25)]"></div>
                    </div>

                    {/* Saturn-like planetary slanted ring */}
                    <div className="absolute w-[115px] h-[22px] border-2 border-orange-300/40 rounded-full -rotate-12 pointer-events-none scale-y-[0.35] shadow-[0_0_15px_rgba(251,146,60,0.2)] bg-amber-400/5 backdrop-blur-[0.5px]"></div>

                    {/* Ring foreground cutout shadow overlay */}
                    <div className="absolute w-[115px] h-[22px] border-t-2 border-orange-300/50 rounded-full -rotate-12 pointer-events-none scale-y-[0.35] clip-path-top z-10"></div>

                    {/* Center point core indicator */}
                    <span className="text-[10px] text-white font-black drop-shadow-md relative z-20 group-hover/planet:scale-110 transition-transform">
                      {isPlanetExpanded ? "CLOSE" : "EXPLORE"}
                    </span>

                    {/* Orbiting Social Icon Buttons (Slide out on click) */}
                    <AnimatePresence>
                      {isPlanetExpanded && (
                        <>
                          {/* Orbit 1: GitHub */}
                          <motion.a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ scale: 0, x: 0, y: 0 }}
                            animate={{ scale: 1, x: -65, y: -65 }}
                            exit={{ scale: 0, x: 0, y: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            onClick={(e) => e.stopPropagation()}
                            className="absolute w-10 h-10 rounded-full glass border-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-400 flex items-center justify-center shadow-lg hover:scale-110 transition-all z-40 bg-black/40"
                            title="GitHub Profile"
                          >
                            <GithubIcon className="w-4.5 h-4.5" />
                          </motion.a>

                          {/* Orbit 2: LinkedIn */}
                          <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ scale: 0, x: 0, y: 0 }}
                            animate={{ scale: 1, x: 65, y: -65 }}
                            exit={{ scale: 0, x: 0, y: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.05 }}
                            onClick={(e) => e.stopPropagation()}
                            className="absolute w-10 h-10 rounded-full glass border-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-400 flex items-center justify-center shadow-lg hover:scale-110 transition-all z-40 bg-black/40"
                            title="LinkedIn Profile"
                          >
                            <LinkedinIcon className="w-4.5 h-4.5" />
                          </motion.a>

                          {/* Orbit 3: Twitter/X */}
                          <motion.a
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ scale: 0, x: 0, y: 0 }}
                            animate={{ scale: 1, x: -65, y: 65 }}
                            exit={{ scale: 0, x: 0, y: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                            onClick={(e) => e.stopPropagation()}
                            className="absolute w-10 h-10 rounded-full glass border-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-400 flex items-center justify-center shadow-lg hover:scale-110 transition-all z-40 bg-black/40"
                            title="Twitter / X"
                          >
                            <TwitterIcon className="w-4.5 h-4.5" />
                          </motion.a>

                          {/* Orbit 4: Email */}
                          <motion.a
                            href="mailto:contact@example.com"
                            initial={{ scale: 0, x: 0, y: 0 }}
                            animate={{ scale: 1, x: 65, y: 65 }}
                            exit={{ scale: 0, x: 0, y: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
                            onClick={(e) => e.stopPropagation()}
                            className="absolute w-10 h-10 rounded-full glass border-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-400 flex items-center justify-center shadow-lg hover:scale-110 transition-all z-40 bg-black/40"
                            title="Send Email"
                          >
                            <MailIcon className="w-4.5 h-4.5" />
                          </motion.a>
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Planet interactive descriptive bubble badge */}
                  <div className="glass px-3 py-2 rounded-xl flex flex-col items-start border-white/10 select-none text-[11px] leading-tight shadow-md max-w-[130px] hover:border-accent/40 transition-colors z-20">
                    <span className="font-bold text-violet-400 tracking-wide">Social Planet</span>
                    <span className="text-cyan-400 text-[9px] font-semibold flex items-center gap-1 mt-0.5">
                      Click to explore <Sparkles className="w-2.5 h-2.5 animate-pulse" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle Column: Quick Links */}
              <div className="space-y-6 flex flex-col md:items-center w-full">
                <div className="flex flex-col items-start gap-4">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-400 font-display">
                    Quick Links
                  </h4>
                  <ul className="space-y-3.5">
                    {QUICK_LINKS.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-1 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4 text-cyan-400/0 -ml-4 group-hover:text-cyan-400 group-hover:ml-0 transition-all duration-300" />
                          <span className="relative">
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Services List & Floating Orbs */}
              <div className="space-y-6 flex flex-col md:items-end w-full relative">
                {/* Floating cyan orb to the right of the Services */}
                <div className="absolute right-[-20px] top-6 w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 blur-sm shadow-xl shadow-cyan-400/20 pointer-events-none opacity-60 z-0 animate-bounce" style={{ animationDuration: '6s' }}></div>
                <div className="absolute right-[50px] bottom-[-20px] w-6 h-6 rounded-full bg-violet-500 blur-[1px] shadow-lg pointer-events-none opacity-50 z-0 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>

                <div className="flex flex-col items-start gap-4 z-10 relative">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-400 font-display">
                    Services
                  </h4>
                  <ul className="space-y-3">
                    {SERVICES.map((srv) => (
                      <li key={srv} className="flex items-center gap-3 text-sm font-semibold text-slate-400 group cursor-default">
                        {/* Interactive cyan circle bullet marker */}
                        <div className="w-2.5 h-2.5 rounded-full border border-cyan-400/50 group-hover:bg-cyan-400 shadow-md group-hover:shadow-cyan-400/50 group-hover:scale-125 transition-all duration-300"></div>
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            /* --- Holographic Retro CLI Terminal Layout --- */
            <motion.div
              key="terminal-layout"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-[#08080a] border border-[#1e293b] rounded-2xl overflow-hidden font-mono flex flex-col min-h-[340px] z-30 relative shadow-inner"
            >
              {/* Matrix rain canvas background when triggered */}
              {isHacking && (
                <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-[0.25]"></canvas>
              )}

              {/* Scanline visual sweep overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#00ff00]/5 to-transparent h-1/2 w-full animate-scan z-10 opacity-30"></div>

              {/* Terminal Window Header Bar */}
              <div className="w-full bg-[#12131c] border-b border-[#1e293b] px-4 py-2.5 flex items-center justify-between z-10 relative select-none">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    [SYSTEM CONTROL - PORTFOLIO CLI v3.5]
                  </span>
                </div>
                {/* Simulated window buttons */}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-amber-500/50 hover:bg-amber-500 cursor-pointer" onClick={() => setIsHacking(!isHacking)}></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50 hover:bg-emerald-500 cursor-pointer" onClick={() => handleCommand("/clear")}></div>
                  <button
                    onClick={() => { setIsHacking(false); setIsTerminalOpen(false); }}
                    className="w-3.5 h-3.5 rounded-full bg-rose-500/60 hover:bg-rose-500 flex items-center justify-center text-[8px] font-bold text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Terminal Log Output Area */}
              <div className="flex-1 p-4 md:p-6 overflow-y-auto text-xs md:text-sm space-y-2 z-10 relative scrollbar-thin max-h-[220px]">
                {terminalHistory.map((line, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed ${line.type === "user" ? "text-cyan-300 font-bold" :
                        line.type === "success" ? "text-emerald-400" :
                          line.type === "warning" ? "text-amber-400" :
                            line.type === "error" ? "text-rose-400" :
                              "text-slate-300"
                      }`}
                  >
                    {line.text}
                  </div>
                ))}

                {/* System Typing/Booting State */}
                {isBooting && (
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <span className="animate-spin"><RefreshCw className="w-3.5 h-3.5" /></span>
                    <span>Decompiling sectors...</span>
                  </div>
                )}

                {/* Anchor for scroll to bottom */}
                <div ref={historyEndRef} />
              </div>

              {/* Quick Action Interactive Chips (For Easy Mobile Click) */}
              <div className="px-4 py-2 border-t border-[#1e293b] flex flex-wrap gap-2 z-10 relative bg-[#0c0d14]">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black self-center">Quick action:</span>
                <button onClick={() => handleCommand("/help")} className="px-2 py-0.5 rounded border border-slate-700 hover:border-cyan-500 text-[10px] text-slate-400 hover:text-cyan-400 transition-colors">/help</button>
                <button onClick={() => handleCommand("/hack")} className="px-2 py-0.5 rounded border border-slate-700 hover:border-emerald-500 text-[10px] text-slate-400 hover:text-emerald-400 transition-colors">/hack</button>
                <button onClick={() => handleCommand("/skills")} className="px-2 py-0.5 rounded border border-slate-700 hover:border-violet-500 text-[10px] text-slate-400 hover:text-violet-400 transition-colors">/skills</button>
                <button onClick={() => handleCommand("/joke")} className="px-2 py-0.5 rounded border border-slate-700 hover:border-amber-500 text-[10px] text-slate-400 hover:text-amber-400 transition-colors">/joke</button>
                <button onClick={() => handleCommand("/about")} className="px-2 py-0.5 rounded border border-slate-700 hover:border-pink-500 text-[10px] text-slate-400 hover:text-pink-400 transition-colors">/about</button>
                <button onClick={() => { setIsHacking(false); setIsTerminalOpen(false); }} className="px-2 py-0.5 rounded border border-rose-950 hover:bg-rose-950 text-[10px] text-rose-400 transition-colors">/back (Exit)</button>
              </div>

              {/* Terminal Bottom Command Prompt Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!isBooting) handleCommand(terminalInput);
                }}
                className="w-full bg-[#12131c] border-t border-[#1e293b] px-4 py-2 flex items-center gap-2.5 z-10 relative"
              >
                <span className="text-cyan-400 font-bold select-none">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  disabled={isBooting}
                  placeholder={isBooting ? "Booting database cores..." : "Type command (e.g. /help) and hit Enter..."}
                  className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-600 text-xs md:text-sm font-mono focus:ring-0 p-0"
                />
                <button
                  type="submit"
                  disabled={isBooting || !terminalInput.trim()}
                  className="p-1 text-slate-500 hover:text-cyan-400 disabled:text-slate-700 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Bottom Row Metabar Section --- */}
        <div className="mt-12 pt-8 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted font-semibold relative z-10">
          <p className="hover:text-cyan-400 transition-colors duration-300">
            Made by <span className="text-cyan-400 font-bold text-glow">{DEVELOPER_NAME}</span>
          </p>
          <p>© 2026 All rights reserved.</p>

          {/* Holographic interactive easter egg click button & cute waving assistant */}
          <div className="flex items-center gap-4 relative">
            <div
              onClick={bootTerminal}
              className="flex items-center gap-1.5 cursor-pointer hover:text-cyan-400 transition-colors group select-none text-right"
            >
              <span className="text-xs">💡 Click</span>
              <span className="text-cyan-400 underline decoration-cyan-400/30 group-hover:decoration-cyan-400 text-xs font-bold transition-all relative">
                here
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </span>
              <span className="text-xs">to discover easter egg</span>
            </div>

            {/* Waving AI Robot Assistant SVG */}
            <div
              onClick={bootTerminal}
              className="w-12 h-12 cursor-pointer relative group flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
              title="Click to interact with Assistant!"
            >
              {/* Cute tooltip bubble */}
              <div className="absolute bottom-14 right-0 glass px-2.5 py-1 rounded-xl text-[9px] font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none border-cyan-400/20 shadow-md pointer-events-none whitespace-nowrap">
                Hey! Click me! 🤖
              </div>

              {/* Outer circular glowing ripple indicator */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/50 animate-ping opacity-25 group-hover:scale-105 duration-1000 z-0"></div>

              {/* Beautiful detailed SVG Robot */}
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] relative z-10">
                {/* Robot Main Body */}
                <rect x="16" y="24" width="32" height="28" rx="6" fill="#12131c" stroke="var(--accent)" strokeWidth="2.5" />
                {/* Robot Screen Head */}
                <rect x="22" y="12" width="20" height="12" rx="4" fill="#08080a" stroke="var(--accent)" strokeWidth="2.5" />
                {/* Antenna */}
                <line x1="32" y1="12" x2="32" y2="4" stroke="var(--accent)" strokeWidth="2.5" />
                {/* Glowing light ball on top */}
                <circle cx="32" cy="4" r="3" fill="#22d3ee" className="animate-pulse" />
                {/* Cyan glowing eyes */}
                <circle cx="28" cy="18" r="2.5" fill="#22d3ee" className="animate-pulse" />
                <circle cx="36" cy="18" r="2.5" fill="#22d3ee" className="animate-pulse" />
                {/* Left/Right Ears */}
                <rect x="18" y="15" width="4" height="6" rx="1" fill="var(--accent)" />
                <rect x="42" y="15" width="4" height="6" rx="1" fill="var(--accent)" />

                {/* Waving Right Hand Arm Group */}
                <g className="origin-[48px_32px] animate-[wave_1.5s_ease-in-out_infinite]" style={{ transformOrigin: "48px 32px" }}>
                  <path d="M48 32 C54 28, 58 22, 60 16" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
                </g>

                {/* Left Arm */}
                <path d="M16 32 C10 34, 6 38, 4 44" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded CSS Wave Animation Keyframe (Inline fallback) */}
      <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-22deg); }
        }
        .clip-path-top {
          clip-path: ellipse(48% 50% at 50% 0%);
        }
      `}</style>
    </footer>
  );
}
