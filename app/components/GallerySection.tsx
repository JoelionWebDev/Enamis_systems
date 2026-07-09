"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
  { src: "/img1.jpeg", label: "Electrical Panel Installation", desc: "Residential distribution board setup" },
  { src: "/img2.png", label: "Solar Array Deployment", desc: "Commercial solar panel installation" },
  { src: "/img3.jpeg", label: "CCTV Surveillance System", desc: "HD security camera deployment" },
  { src: "/img4.png", label: "Smart Access Control", desc: "Biometric entry system integration" },
  { src: "/img5.png", label: "Fire Alarm Infrastructure", desc: "Intelligent detection & alert system" },
  { src: "/img6.png", label: "Industrial Wiring Project", desc: "Full electrical infrastructure setup" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.08 },
  }),
};

export default function GallerySection() {
  return (
    <section className="relative bg-surface-primary py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{ backgroundImage: `radial-gradient(circle, rgba(37,99,235,0.6) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-brand-blue" aria-hidden="true" />
            <span className="text-brand-blue text-[11px] font-bold tracking-[0.3em] uppercase">Our Portfolio</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-brand-blue" aria-hidden="true" />
          </div>
          <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight mb-5">
            Recent{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-blue to-brand-blue-dark">Projects</span>
          </h2>
          <p className="text-content-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A glimpse of our completed electrical, solar, security, and fire alarm installations across Lagos and Nigeria.
          </p>
          <div className="flex items-center justify-center gap-3 mt-7" aria-hidden="true">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-brand-blue/50" />
            <div className="w-2 h-2 rounded-full bg-brand-amber" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-brand-blue/50" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.src}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className={`group relative overflow-hidden rounded-2xl bg-surface-card border border-border-light ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-[4/3] sm:aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={project.src}
                  alt={project.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 translate-y-0 transition-transform duration-300">
                  <span className="text-white/80 text-[10px] font-mono tracking-wider uppercase block mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-bold text-xs sm:text-sm leading-tight">{project.label}</h3>
                  <p className="text-white/60 text-[10px] sm:text-xs mt-1 leading-tight hidden sm:block">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
