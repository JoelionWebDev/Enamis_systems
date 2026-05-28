"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Sun,
  Camera,
  ShieldCheck,
  Flame,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  accent: string;
  glowColor: string;
  href: string;
}

// ─── Services Data ────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    id: "electrical",
    icon: <Zap className="w-5 h-5" />,
    title: "Electrical Installation",
    description:
      "Safe and professional electrical wiring, panel installation, maintenance, and power distribution solutions for residential and commercial properties.",
    features: [
      "Panel upgrades",
      "Wiring & rewiring",
      "Power distribution",
      "Load management",
    ],
    image: "/elect.png",
    imageAlt:
      "Electrician performing professional electrical panel installation",
    accent: "from-blue-500 to-blue-700",
    glowColor: "rgba(59,130,246,0.25)",
    href: "#electrical",
  },
  {
    id: "solar",
    icon: <Sun className="w-5 h-5" />,
    title: "Solar & Inverter Systems",
    description:
      "Reliable solar energy and inverter backup systems engineered for maximum efficiency, designed for homes, businesses, and industrial facilities.",
    features: [
      "Solar panel installation",
      "Inverter backup",
      "Battery storage",
      "Energy monitoring",
    ],
    image: "/sola.png",
    imageAlt: "Professional solar panel installation on commercial rooftop",
    accent: "from-sky-400 to-blue-600",
    glowColor: "rgba(14,165,233,0.25)",
    href: "#solar",
  },
  {
    id: "cctv",
    icon: <Camera className="w-5 h-5" />,
    title: "CCTV Installation",
    description:
      "Advanced HD surveillance systems for 24/7 monitoring, property protection, and safety—professionally installed and remotely accessible.",
    features: [
      "HD & 4K cameras",
      "Night vision",
      "Remote monitoring",
      "Cloud storage",
    ],
    image: "/cctv.png",
    imageAlt:
      "Modern CCTV security camera system installed in commercial building",
    accent: "from-indigo-500 to-blue-700",
    glowColor: "rgba(99,102,241,0.25)",
    href: "#cctv",
  },
  {
    id: "access",
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Access Control Systems",
    description:
      "Modern smart access solutions including biometric readers, smart locks, card systems, and intelligent entry management for any environment.",
    features: [
      "Biometric systems",
      "Smart card access",
      "Video intercom",
      "Audit trails",
    ],
    image: "/smartaccess.png",
    imageAlt: "Smart biometric access control system on modern office door",
    accent: "from-blue-600 to-indigo-700",
    glowColor: "rgba(37,99,235,0.25)",
    href: "#access",
  },
  {
    id: "fire",
    icon: <Flame className="w-5 h-5" />,
    title: "Fire Alarm Systems",
    description:
      "Intelligent fire detection and alarm systems that safeguard lives and property in residential, commercial, and industrial environments.",
    features: [
      "Smoke detectors",
      "Heat sensors",
      "Sprinkler integration",
      "Emergency alerts",
    ],
    image: "/fire.png",
    imageAlt:
      "Fire alarm detection system installed on commercial building ceiling",
    accent: "from-blue-500 to-blue-800",
    glowColor: "rgba(29,78,216,0.25)",
    href: "#fire",
  },
];

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Feature Tag ──────────────────────────────────────────────────────────────

function FeatureTag({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-1.5 text-slate-400 text-xs">
      <CheckCircle2
        className="w-3 h-3 text-blue-500 flex-shrink-0"
        aria-hidden="true"
      />
      <span>{text}</span>
    </li>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.article
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative flex flex-col bg-[#060f1e] border border-blue-500/12 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/40"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
      aria-label={`Service: ${service.title}`}
    >
      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          boxShadow: `inset 0 0 0 1px ${service.glowColor}, 0 0 40px ${service.glowColor}`,
        }}
        aria-hidden="true"
      />

      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading={index < 2 ? "eager" : "lazy"}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-[#060f1e]/60 to-transparent"
          aria-hidden="true"
        />

        {/* Blue gradient wash on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
          }}
          aria-hidden="true"
        />

        {/* Icon badge */}
        <div className="absolute top-4 left-4 z-20">
          <div
            className={`flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
            aria-hidden="true"
          >
            {service.icon}
          </div>
        </div>

        {/* Number */}
        <div
          className="absolute top-4 right-4 z-20 font-mono text-xs font-bold text-blue-400/50 group-hover:text-blue-400/80 transition-colors duration-300"
          aria-hidden="true"
        >
          0{String(index + 1).padStart(1, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col flex-1 p-5 sm:p-6">
        {/* Title */}
        <h3
          className="text-white font-bold text-[17px] sm:text-[18px] leading-snug mb-2.5 group-hover:text-blue-100 transition-colors duration-200"
          style={{
            fontFamily: "'Rajdhani', 'Barlow Condensed', sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        {/* Features */}
        <ul
          className="grid grid-cols-2 gap-1.5 mb-5"
          aria-label={`${service.title} features`}
        >
          {service.features.map((f) => (
            <FeatureTag key={f} text={f} />
          ))}
        </ul>

        {/* CTA */}
        <a
          href={service.href}
          className={`group/btn relative flex items-center gap-2 self-start px-4 py-2.5 rounded-xl text-white text-xs font-bold overflow-hidden transition-all duration-200 hover:gap-3`}
          style={{
            background: `linear-gradient(135deg, ${service.accent.replace("from-", "").replace(" to-", ", ")})`,
          }}
          aria-label={`Learn more about ${service.title}`}
        >
          <span
            className="absolute inset-0 translate-x-[-110%] group-hover/btn:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-600 ease-in-out"
            aria-hidden="true"
          />
          Learn More
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </motion.article>
  );
}

// ─── Featured Large Card (index 0) ───────────────────────────────────────────

function FeaturedCard({ service }: { service: Service }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative lg:col-span-2 bg-[#060f1e] border border-blue-500/12 rounded-2xl overflow-hidden flex flex-col sm:flex-row transition-all duration-300 hover:border-blue-500/40"
      style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.45)" }}
      aria-label={`Featured service: ${service.title}`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          boxShadow: `inset 0 0 0 1px ${service.glowColor}, 0 0 50px ${service.glowColor}`,
        }}
        aria-hidden="true"
      />

      {/* Image — left half on desktop */}
      <div className="relative w-full sm:w-1/2 aspect-[16/9] sm:aspect-auto sm:min-h-[320px] overflow-hidden flex-shrink-0">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#060f1e] hidden sm:block"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-[#060f1e]/40 to-transparent sm:hidden"
          aria-hidden="true"
        />

        {/* Featured badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span
              className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"
              aria-hidden="true"
            />
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">
              Featured
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center p-6 sm:p-8 flex-1">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-lg mb-4 self-start`}
          aria-hidden="true"
        >
          {service.icon}
        </div>

        <span className="text-blue-400/70 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
          01 — Core Service
        </span>

        <h3
          className="text-white font-black text-2xl sm:text-3xl leading-snug mb-3 group-hover:text-blue-100 transition-colors"
          style={{ fontFamily: "'Rajdhani', 'Barlow Condensed', sans-serif" }}
        >
          {service.title}
        </h3>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5 max-w-md">
          {service.description}
        </p>

        <ul
          className="grid grid-cols-2 gap-2 mb-6"
          aria-label={`${service.title} features`}
        >
          {service.features.map((f) => (
            <FeatureTag key={f} text={f} />
          ))}
        </ul>

        <a
          href={service.href}
          className="group/btn relative flex items-center gap-2 self-start px-5 py-3 rounded-xl text-white text-sm font-bold overflow-hidden transition-all duration-200 hover:gap-3"
          style={{
            background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
            boxShadow: "0 0 0 1px rgba(96,165,250,0.2)",
          }}
          aria-label={`Learn more about ${service.title}`}
        >
          <span
            className="absolute inset-0 translate-x-[-110%] group-hover/btn:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700"
            aria-hidden="true"
          />
          Learn More
          <ArrowRight
            className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200"
            aria-hidden="true"
          />
        </a>
      </div>
    </motion.article>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={headerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
    >
      {/* Label */}
      <div className="inline-flex items-center gap-2.5 mb-5">
        <span
          className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500"
          aria-hidden="true"
        />
        <span className="text-blue-400 text-[11px] font-bold tracking-[0.3em] uppercase">
          Our Services
        </span>
        <span
          className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500"
          aria-hidden="true"
        />
      </div>

      {/* Heading */}
      <h2
        className="text-white font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight mb-5"
        style={{ fontFamily: "'Rajdhani', 'Barlow Condensed', sans-serif" }}
      >
        Professional{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg,#93c5fd,#3b82f6,#1d4ed8)",
          }}
        >
          Electrical
        </span>{" "}
        &{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg,#bfdbfe,#60a5fa,#3b82f6)",
          }}
        >
          Smart Security
        </span>{" "}
        Solutions
      </h2>

      {/* Subheading */}
      <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
        We provide reliable electrical engineering and smart technology
        solutions for homes, offices, businesses, and industrial environments.
      </p>

      {/* Decorative divider */}
      <div
        className="flex items-center justify-center gap-3 mt-7"
        aria-hidden="true"
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-500/50" />
        <div className="w-2 h-2 rounded-full bg-blue-500/50" />
        <div className="w-2 h-2 rounded-full bg-blue-400" />
        <div className="w-2 h-2 rounded-full bg-blue-500/50" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-blue-500/50" />
      </div>
    </motion.div>
  );
}

// ─── Bottom CTA Strip ─────────────────────────────────────────────────────────

function CtaStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16 sm:mt-20 relative overflow-hidden rounded-2xl border border-blue-500/20 bg-[#060f1e]"
      style={{ boxShadow: "0 0 60px rgba(37,99,235,0.1)" }}
    >
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59,130,246,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 sm:px-10 py-8 sm:py-10">
        <div className="text-center sm:text-left">
          <p
            className="text-white font-black text-xl sm:text-2xl mb-1"
            style={{ fontFamily: "'Rajdhani', 'Barlow Condensed', sans-serif" }}
          >
            Need a Custom Solution?
          </p>
          <p className="text-slate-400 text-sm">
            Talk to our experts and get a free consultation today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
          <a
            href="tel:+2348036227782"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-blue-500/25 text-blue-400 hover:bg-blue-600/10 hover:border-blue-500/50 transition-all duration-200 text-sm font-mono tracking-wide"
            aria-label="Call ENAMIS SYSTEMS"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +234 08036227782
          </a>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 24px rgba(59,130,246,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold overflow-hidden transition-all duration-200"
            style={{
              background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
              boxShadow: "0 0 0 1px rgba(96,165,250,0.2)",
            }}
            aria-label="Get free consultation from ENAMIS SYSTEMS"
          >
            <span
              className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700"
              aria-hidden="true"
            />
            Get Free Consultation
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
              aria-hidden="true"
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServicesSection() {
  const [featured, ...rest] = SERVICES;

  return (
    <section
      id="services"
      className="relative bg-[#02080f] py-20 sm:py-24 lg:py-28 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#02080f] via-[#030c1a] to-[#02080f]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-blue-700/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-800/4 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <SectionHeader />

        {/* Featured card — full width on lg */}
        <div className="mb-5 sm:mb-6">
          <FeaturedCard service={featured} />
        </div>

        {/* Grid of remaining 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {rest.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i + 1} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <CtaStrip />
      </div>
    </section>
  );
}
