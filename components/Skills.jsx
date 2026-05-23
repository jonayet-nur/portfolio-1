"use client";
import { motion } from "framer-motion";
import { Cpu, Layout, Server, Database, Smartphone, Globe, Terminal, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Crafting visually stunning, highly interactive single-page applications and responsive interfaces with smooth user experiences.",
    skills: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "GSAP Animations", "Framer Motion"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Architecting high-performance server architectures, RESTful APIs, and middleware authentication systems.",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Socket.io", "GraphQL"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Database Modeling",
    icon: Database,
    description: "Designing non-relational database schemas, Mongoose models, and managing data aggregate pipelines.",
    skills: ["MongoDB", "Mongoose ODM", "Firebase Database", "PostgreSQL", "Supabase", "SQL"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "DevOps & Tooling",
    icon: Terminal,
    description: "Deploying production-grade MERN stacks, CI/CD orchestration, version control, and cloud environments.",
    skills: ["Git & GitHub", "Vercel / Netlify", "Render Server", "Docker", "AWS Cloud", "Postman APIs"],
    color: "from-orange-500/20 to-yellow-500/20",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent">Capabilities</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Expertise</span>
            </h3>
          </div>
          <p className="text-paragraph max-w-md text-lg leading-relaxed">
            I leverage a specialized set of MERN stack tools and companions to build high-performance applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-8 rounded-[2rem] border-accent/10 relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <category.icon className="w-8 h-8 text-accent" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold uppercase tracking-tight">{category.title}</h4>
                  <p className="text-secondary text-sm leading-relaxed">{category.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 glass rounded-lg text-[10px] font-bold uppercase tracking-widest bg-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Icon */}
              <category.icon className="absolute -bottom-8 -right-8 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 rotate-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
