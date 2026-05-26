"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Computer Science and Technology",
    school: "Feni Polytechnic Institute",
    date: "2022 - 2026",
    description: "Undergraduate Diploma in Computer Science and Technology.",
  },
  {
    degree: "Secondary School Certificate",
    school: "Porshuram Govt. Pilot High School",
    date: "2020 - 2022",
    description: "Science department with a focus on Mathematics and Physics. ",
  }
];

export default function Education() {
  return (
    <section className="py-24 relative overflow-hidden" id="education">
      <div className="absolute inset-0 matrix-grid opacity-10 -z-10"></div>
      {/* Section Frame Decoration */}
      <div className="max-w-[1440px] mx-auto relative border-x border-accent/10 py-20 px-6 md:px-12">
        {/* Corner Decor */}
        {/* <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-cyan-glow rounded-lg"></div>
        <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-glow rounded-lg"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-cyan-glow rounded-lg"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-cyan-glow rounded-lg"></div>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-cyan-glow rounded-full"></div> */}

        {/* Header Block */}
        <div className="flex justify-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass px-16 py-10 rounded-2xl border border-white/10 text-center max-w-2xl"
          >
            {/* <h2 className="text-4xl font-display font-bold uppercase tracking-tight mb-4 text-highlight">Education</h2> */}
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Education</span>
            </h3>
            <p className="text-muted font-mono text-[10px] uppercase tracking-widest leading-relaxed">
              My educational journey has been the foundation of my skills and passion for technology.
            </p>
          </motion.div>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-60 bottom-20 w-[1px] bg-gradient-to-b from-accent/20 via-accent to-accent/20 hidden md:block"></div>

        {/* Education Cards */}
        <div className="relative space-y-16">
          {educationData.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[45%] relative group"
              >
                {/* Timeline Dot */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(34,211,238,1)] z-10 hidden md:block ${index % 2 === 0 ? "-right-[calc(11.1%+8px)]" : "-left-[calc(11.1%+8px)]"}`}></div>

                {/* The Card */}
                <div className="overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                  {/* Top Half: Blue Gradient */}
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[10px] text-white/80 uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full">
                        <Calendar size={12} />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white leading-tight uppercase tracking-tight">
                      {item.degree}
                    </h3>
                  </div>

                  {/* Bottom Half: Glass */}
                  <div className="glass p-8 rounded-b-2xl border-t-0">
                    <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-4">
                      {item.school}
                    </h4>
                    <p className="text-paragraph text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-500/20 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}
