"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);


const projects = [
  {
    title: "Tiles-gallery",
    category: "Tiles Gallery Web App",
    description: "A modern tile-based image gallery platform where users can explore, organize, and showcase stunning visual collections with a responsive and user-friendly interface.",
    image: "/Tiles-gallery.png",
    tags: ["Next.js", "Tailwind", "Rest Api"],
    link: "https://tiles-gallery-a8-sable.vercel.app/",
    repo: "https://github.com/jonayet-nur/tiles-gallery-a8"
  },
  {
    title: "Doctor-Appointment-project",
    category: "Doctor Appointment Web App",
    description: "A professional doctor appointment booking platform enabling patients to schedule consultations, manage appointments, and access healthcare services online.",
    image: "/doctor-appoint.png",
    tags: ["Next.js", "Express.js", "MongoDb", "Node.js", "JWT"],
    link: "https://doctor-appointment-project-six.vercel.app/",
    repo: "https://github.com/jonayet-nur/Doctor-Appointment-project"
  },
  {
    title: "Digi-tools-platform",
    category: "Digital Tools Platform Web App",
    description: "A comprehensive digital tools platform offering a suite of productivity tools and utilities for professionals and developers.",
    image: "/digi-tool.png",
    tags: ["React.js", "Tailwind", "JavaScript(ES6)", "Api"],
    link: "https://digitool-platform-a6.netlify.app",
    repo: "https://github.com/jonayet-nur/digi-tools-platform"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent">Selected Work</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Projects</span>
            </h3>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors"
          >
            All Projects <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-[2.5rem] overflow-hidden border-accent/10 transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-2xl group-hover:shadow-accent/10">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3 z-20 translate-x-0 opacity-100 md:translate-x-12 md:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-accent hover:text-white transition-all shadow-xl flex items-center justify-center">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-accent hover:text-white transition-all shadow-xl flex items-center justify-center">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">{project.category}</p>
                      <h4 className="text-2xl font-bold tracking-tight">{project.title}</h4>
                    </div>
                  </div>
                  
                  <p className="text-secondary text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 glass rounded-lg text-[10px] font-bold uppercase tracking-widest bg-accent/5 text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
