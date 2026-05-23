"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, X } from "lucide-react";

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/jonayetnur@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        }),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent">Contact</h2>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Let&apos;s talk <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Business</span>
              </h3>
            </div>

            <p className="text-lg text-paragraph max-w-md leading-relaxed">
              Have a project in mind? Or just want to say hi? Feel free to reach out. I&apos;m always open to new opportunities and creative collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Email Me</p>
                  <p className="text-xl font-bold">jonayetnur@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Location</p>
                  <p className="text-xl font-bold">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: GithubIcon, href: "https://github.com/jonayet-nur" },
                { Icon: X, href: "https://x.com" },
                { Icon: LinkedinIcon, href: "https://linkedin.com/in/jonayet-nur-tanjim"}
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                <button 
                  className="p-4 rounded-2xl glass hover:text-accent hover:border-accent transition-all hover:-translate-y-1"
                >
                  <Icon className="w-6 h-6" />
                </button>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem] border-accent/10 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:border-accent outline-none transition-all focus:bg-white/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:border-accent outline-none transition-all focus:bg-white/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-2">Message</label>
                <textarea 
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:border-accent outline-none transition-all focus:bg-white/10 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-accent text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-accent/20 disabled:opacity-50"
              >
                {status === "sending" ? "SENDING..." : (
                  <>
                    SEND MESSAGE <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-bold text-green-500 uppercase tracking-widest"
                >
                  Message Sent Successfully!
                </motion.p>
              )}

              {status === "error" && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-bold text-red-500 uppercase tracking-widest"
                >
                  Failed to send email. Check your SMTP settings.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
