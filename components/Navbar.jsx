"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 glass shadow-lg backdrop-blur-md
        ${isMobileMenuOpen
          ? "rounded-2xl w-[94%]"
          : `rounded-full w-[94%] ${isScrolled ? "md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-5xl" : "md:w-[90%] lg:w-[82%] xl:w-[75%] max-w-6xl"}`
        }
        ${isScrolled ? "py-2.5 px-4 shadow-xl border-accent/20" : "py-4 px-6 border-white/10"}
      `}
    >
      <nav className="w-full flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-lg shadow-lg relative overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-white/10 opacity-50"
            ></motion.div>
            <span className="text-white font-bold text-xl relative z-10">J</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight hover:text-accent transition-colors"> JONAYET</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1.5 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-300 block ${isActive ? "text-accent font-semibold" : "hover:text-accent text-foreground/80 dark:text-foreground/90"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-accent/10 dark:bg-accent/20 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-black/5 dark:border-white/10 hover:bg-accent/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </motion.button>

          {/* <button className="hidden md:block bg-accent text-white px-6 py-2 rounded-full font-medium hover:brightness-110 transition-all shadow-lg shadow-accent/20">
            Resume
          </button> */}

          <button
            className="md:hidden p-2.5 rounded-full border border-black/5 dark:border-white/10 hover:bg-accent/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-black/5 dark:border-white/10 mt-3 overflow-hidden w-full"
          >
            <div className="pt-6 pb-2 flex flex-col gap-4">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.name.toLowerCase();
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-xl font-bold uppercase tracking-tight block py-1.5 transition-colors ${isActive ? "text-accent" : "text-foreground/80 dark:text-foreground/90 hover:text-accent"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              {/* <button className="w-full bg-accent text-white py-3.5 rounded-xl font-bold mt-2 shadow-lg shadow-accent/20 hover:brightness-110 active:scale-[0.98] transition-all">
                RESUME
              </button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
