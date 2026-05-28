"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Sun,
  Camera,
  ShieldCheck,
  Zap,
  Flame,
  Phone,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Radio,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FloatingCardProps {
  icon: React.ReactNode;
  label: string;
  sub: string;
  delay: number;
  className?: string;
}

interface TrustBadgeProps {
  text: string;
  index: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: <Zap className="w-4 h-4" />,
    label: "Electrical Installation",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <Sun className="w-4 h-4" />,
    label: "Solar & Inverter",
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: <Camera className="w-4 h-4" />,
    label: "CCTV Systems",
    color: "from-indigo-400 to-blue-600",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    label: "Access Control",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <Flame className="w-4 h-4" />,
    label: "Fire Alarm",
    color: "from-blue-400 to-blue-700",
  },
];

const TRUST_BADGES = [
  "Trusted Electrical & Security Experts",
  "Professional Installations",
  "24/7 Support",
];

const FLOATING_CARDS: Omit<FloatingCardProps, "delay">[] = [
  {
    icon: <Sun className="w-5 h-5 text-sky-300" />,
    label: "Solar Energy",
    sub: "Clean power solutions",
    className: "top-4 right-0 sm:right-2",
  },
  {
    icon: <Camera className="w-5 h-5 text-blue-300" />,
    label: "CCTV Monitoring",
    sub: "24/7 surveillance",
    className: "top-1/2 -translate-y-1/2 -left-2 sm:-left-6",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-indigo-300" />,
    label: "Smart Security",
    sub: "Access control systems",
    className: "bottom-4 right-0 sm:right-2",
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-200" />,
    label: "Power Solutions",
    sub: "Reliable installations",
    className: "bottom-20 -left-2 sm:-left-4",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FloatingCard({
  icon,
  label,
  sub,
  delay,
  className = "",
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as any }}
      className={`absolute ${className} z-20`}
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 3.5 + delay * 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bg-[#050d1a]/90 backdrop-blur-lg border border-blue-500/20 rounded-2xl px-3.5 py-2.5 shadow-xl shadow-blue-900/40 flex items-center gap-2.5 min-w-[150px]"
      >
        <div className="w-8 h-8 rounded-xl bg-blue-600/15 flex items-center justify-center border border-blue-400/20 flex-shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-white text-[11px] font-bold leading-tight tracking-wide">
            {label}
          </p>
          <p className="text-blue-300/70 text-[9px] mt-0.5 leading-tight">
            {sub}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TrustBadge({ text, index }: TrustBadgeProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
      className="flex items-center gap-2 text-slate-300 text-sm"
    >
      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
      <span>{text}</span>
    </motion.li>
  );
}

// ─── Hero Visual (Right Panel) ────────────────────────────────────────────────

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square select-none">
      {/* Outer decorative rings */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[92%] h-[92%] rounded-full border border-blue-500/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute w-[75%] h-[75%] rounded-full border border-blue-400/15"
          style={{ borderStyle: "dashed" }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[58%] h-[58%] rounded-full border border-blue-300/10"
        />

        {/* Core ambient glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[35%] h-[35%] rounded-full bg-blue-600/25 blur-3xl"
        />
      </div>

      {/* Logo in centre */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as any }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-[48%] h-[48%] flex items-center justify-center">
          {/* Glow halo behind logo */}
          <div
            className="absolute inset-[-20%] rounded-full bg-blue-600/20 blur-2xl"
            aria-hidden="true"
          />
          <Image
            src="/enamis.png"
            alt="ENAMIS SYSTEMS logo"
            width={240}
            height={240}
            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_24px_rgba(59,130,246,0.6)]"
            priority
          />
        </div>
      </motion.div>

      {/* Orbiting dot — fast ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[4%] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_14px_4px_rgba(96,165,250,0.8)]" />
      </motion.div>

      {/* Orbiting dot — slow ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[12%] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_10px_3px_rgba(125,211,252,0.7)]" />
      </motion.div>

      {/* Radial service icon pills */}
      <div className="absolute inset-0" aria-hidden="true">
        {SERVICES.map((s, i) => {
          const angle = (i / SERVICES.length) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const r = 44;
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.1 + i * 0.12,
                duration: 0.5,
                ease: "backOut",
              }}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%,-50%)",
              }}
              className="absolute"
            >
              <div
                className={`w-9 h-9 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg text-white ring-2 ring-blue-500/20`}
                title={s.label}
              >
                {s.icon}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating info cards */}
      {FLOATING_CARDS.map((card, i) => (
        <FloatingCard key={card.label} {...card} delay={1.3 + i * 0.18} />
      ))}

      {/* Radial grid overlay */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

// ─── Main Hero Section ────────────────────────────────────────────────────────

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section
      ref={ref}
      aria-label="ENAMIS SYSTEMS — Electrical & Smart Technology Solutions"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#02080f]"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#02080f] via-[#040d1c] to-[#030b15]" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ambient orbs */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-700/8 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/7 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-blue-800/5 rounded-full blur-[160px]" />

        {/* Diagonal accent line */}
        <div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
          style={{ transform: "rotate(-15deg) translateX(100px)" }}
        />
      </div>

      {/* ── Navbar logo strip ── */}
      <div className="relative z-10 w-full border-b border-blue-500/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div>
              <p
                className="text-white font-black text-sm sm:text-base tracking-widest leading-none"
                style={{
                  fontFamily: "'Rajdhani', 'Orbitron', sans-serif",
                  letterSpacing: "0.18em",
                }}
              >
                .
              </p>
              <p className="text-blue-400 text-[9px] sm:text-[10px] tracking-[0.35em] font-semibold leading-none mt-0.5">
                .
              </p>
            </div>
          </motion.div>

          <motion.a
            href="tel:+2348036227782"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-mono"
            aria-label="Call ENAMIS SYSTEMS"
          >
            <span className="hidden sm:inline"></span>
          </motion.a>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-16">
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-10 xl:gap-20">
          {/* ── LEFT: Copy ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={controls}
            className="flex-1 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            {/* Live badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
              </span>
              <span className="text-blue-400 text-[11px] font-bold tracking-[0.22em] uppercase">
                Nigeria's #1 Electrical & Smart Tech Experts
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="font-black leading-[1.05] tracking-tight text-white mb-5"
              style={{
                fontFamily: "'Rajdhani', 'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              }}
            >
              Reliable{" "}
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #60a5fa 0%, #3b82f6 45%, #1d4ed8 100%)",
                  }}
                >
                  Electrical
                </span>
                {/* Underline glow */}
                <span
                  className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, transparent)",
                  }}
                  aria-hidden="true"
                />
              </span>
              {" & "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #93c5fd 0%, #60a5fa 50%, #3b82f6 100%)",
                }}
              >
                Smart Technology
              </span>
              {" Solutions"}
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="text-slate-400 text-base sm:text-[17px] leading-relaxed mb-8 max-w-[560px] mx-auto lg:mx-0"
            >
              ENAMIS SYSTEMS delivers professional electrical installation,
              solar/inverter solutions, CCTV surveillance, access control
              systems, and fire alarm installations for homes and businesses
              across Nigeria.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-9"
            >
              {/* Primary */}
              <motion.a
                href="tel:+2348036227782"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 32px rgba(59,130,246,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2.5 text-white font-bold px-7 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto justify-center text-sm sm:text-base overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e3a8a 100%)",
                }}
                aria-label="Get Free Consultation — call ENAMIS SYSTEMS"
              >
                {/* Shimmer sweep */}
                <span
                  className="absolute inset-0 translate-x-[-115%] group-hover:translate-x-[115%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out"
                  aria-hidden="true"
                />
                {/* Border glow */}
                <span
                  className="absolute inset-0 rounded-2xl ring-1 ring-blue-400/40"
                  aria-hidden="true"
                />
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                Get Free Consultation
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </motion.a>

              {/* Secondary */}
              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 bg-white/[0.04] hover:bg-blue-600/10 border border-blue-500/20 hover:border-blue-500/50 text-white font-bold px-7 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto justify-center text-sm sm:text-base backdrop-blur-sm"
                aria-label="View our services"
              >
                View Services
                <ChevronRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.ul
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-x-6 sm:gap-y-2 list-none p-0 m-0 mb-7"
              aria-label="Trust indicators"
            >
              {TRUST_BADGES.map((text, i) => (
                <TrustBadge key={text} text={text} index={i} />
              ))}
            </motion.ul>

            {/* Phone + divider */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <Radio
                className="w-3.5 h-3.5 text-blue-400 animate-pulse"
                aria-hidden="true"
              />
              <a
                href="tel:+2348036227782"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-mono tracking-wide"
                aria-label="Call us: +234 08036227782"
              >
                +234 08036227782
              </a>
              <span className="text-slate-600 text-sm">— Available 24/7</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1] as any,
              delay: 0.25,
            }}
            className="flex-1 w-full max-w-[480px] mx-auto lg:mx-0 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* ── Services strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 1.7 }}
        className="relative z-10 w-full border-t border-blue-500/10"
        aria-label="Our core services"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-6">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <span className="text-slate-500 text-[10px] uppercase tracking-[0.25em] font-semibold mr-2 hidden sm:inline">
              Services:
            </span>
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8 + i * 0.07 }}
                whileHover={{ y: -2, scale: 1.04 }}
                className="flex items-center gap-2 bg-white/[0.03] hover:bg-blue-600/10 border border-blue-500/15 hover:border-blue-500/35 rounded-xl px-3.5 py-2 text-slate-300 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-default"
              >
                <span
                  className={`bg-gradient-to-br ${s.color} p-1 rounded-lg text-white`}
                  aria-hidden="true"
                >
                  {s.icon}
                </span>
                {s.label}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom edge glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
