"use client";
import { motion } from "framer-motion";
import { User, Code, Cpu, Globe } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "3+", icon: User },
  { label: "Projects Completed", value: "50+", icon: Globe },
  { label: "Technologies", value: "20+", icon: Cpu },
  { label: "Lines of Code", value: "100k+", icon: Code },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Crafting Scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">MERN Stack Apps</span>
              </h3>
            </div>

            <p className="text-lg text-paragraph leading-relaxed max-w-xl">
              I am a highly motivated MERN Stack Developer specializing in building high-performance, robust, and pixel-perfect web applications. By leveraging MongoDB, Express.js, React.js, and Node.js, I bridge the gap between complex database architectures and fluid, intuitive user experiences.
            </p>

            <p className="text-lg text-paragraph leading-relaxed max-w-xl">
              From crafting optimized RESTful and GraphQL APIs to designing flawless responsive frontends, I handle the entire lifecycle of development. I am dedicated to writing clean, maintainable, and highly performant code that drives real business value.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl hover:border-accent/50 transition-colors group"
                >
                  <stat.icon className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-[3rem] overflow-hidden p-8 border-accent/20">
              <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 matrix-grid opacity-10"></div>
                <div className="text-center space-y-6 relative z-10">
                  <div className="w-24 h-24 bg-accent rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-accent/40 group-hover:scale-110 transition-transform duration-500">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold uppercase tracking-tighter">Tech Stack</h4>
                    <p className="text-sm text-secondary">My Daily Drivers</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 max-w-xs mx-auto">
                    {["MongoDB", "Express", "React", "Node.js", "Next.js", "Tailwind", "Redux", "Mongoose"].map((tech) => (
                      <span key={tech} className="px-4 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/30 blur-[80px] rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/30 blur-[80px] rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
