"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight, ChevronRight, CheckCircle2, Radio, Sun, Camera, ShieldCheck, Zap, Flame, Home } from "lucide-react";

const SERVICES = [
  { icon: <Zap className="w-4 h-4" />, label: "Electrical Installation", color: "from-blue-500 to-blue-700" },
  { icon: <Sun className="w-4 h-4" />, label: "Solar & Inverter", color: "from-amber-400 to-orange-500" },
  { icon: <Camera className="w-4 h-4" />, label: "CCTV Systems", color: "from-indigo-500 to-blue-700" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "Access Control", color: "from-blue-600 to-indigo-700" },
  { icon: <Flame className="w-4 h-4" />, label: "Fire Alarm", color: "from-blue-500 to-blue-800" },
  { icon: <Home className="w-4 h-4" />, label: "Home Automation", color: "from-emerald-500 to-teal-600" },
];

const TRUST_BADGES = [
  "Trusted Electrical & Security Experts",
  "Professional Installations",
  "24/7 Support",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square select-none">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[92%] h-[92%] rounded-full border border-brand-blue/20" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute w-[75%] h-[75%] rounded-full border border-brand-blue/15" style={{ borderStyle: "dashed" }} />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[58%] h-[58%] rounded-full border border-brand-blue/10" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[35%] h-[35%] rounded-full bg-brand-blue/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-[48%] h-[48%] flex items-center justify-center">
          <div className="absolute inset-[-20%] rounded-full bg-brand-blue/15 blur-2xl" aria-hidden="true" />
          <Image src="/enamis.png" alt="ENAMIS SYSTEMS logo" width={240} height={240}
            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_24px_rgba(37,99,235,0.3)]" priority />
        </div>
      </motion.div>

      <motion.div animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[4%] pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-blue shadow-[0_0_14px_4px_rgba(59,130,246,0.6)]" />
      </motion.div>

      <motion.div animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[12%] pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-brand-amber shadow-[0_0_10px_3px_rgba(245,158,11,0.5)]" />
      </motion.div>

      <div className="absolute inset-0" aria-hidden="true">
        {SERVICES.map((s, i) => {
          const angle = (i / SERVICES.length) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const r = 44;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.12, duration: 0.5, ease: "backOut" }}
              style={{ left: `${50 + r * Math.cos(rad)}%`, top: `${50 + r * Math.sin(rad)}%`, transform: "translate(-50%,-50%)" }}
              className="absolute"
            >
              <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg text-white ring-2 ring-brand-blue/20`} title={s.label}>
                {s.icon}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20"
        aria-hidden="true"
      >
        <div className="bg-surface-card/90 backdrop-blur-sm border border-border-light rounded-xl px-4 py-2 shadow-lg flex items-center gap-2.5">
          <Image src="/enamis2.png" alt="" width={24} height={24} className="w-5 h-5 object-contain opacity-70" />
          <span className="text-[10px] font-bold tracking-[0.15em] text-content-muted uppercase whitespace-nowrap font-heading">
            Est. 2015 · Lagos, Nigeria
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      aria-label="ENAMIS SYSTEMS — Electrical & Smart Technology Solutions"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-bg"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-brand-blue/5 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3 dark:bg-brand-blue/8" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-blue/4 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 dark:bg-brand-blue/7" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[120px] opacity-[0.04] dark:opacity-[0.06]">
          <Image src="/ENAMIS%20SYSTEM%20WORD%20MARK%20-%20YELLOW.png" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-24 sm:py-28 lg:py-16">
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-10 xl:gap-20">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
            className="flex-1 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
              </span>
              <span className="text-brand-blue text-[11px] font-bold tracking-[0.22em] uppercase">
                Nigeria&apos;s #1 Electrical & Smart Tech Experts
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="font-heading font-black leading-[1.05] tracking-tight text-content-primary mb-5"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
            >
              Reliable{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-blue to-brand-blue-dark">
                  Electrical
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-gradient-to-r from-brand-blue to-transparent" aria-hidden="true" />
              </span>
              {" & "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-brand-blue-light to-brand-blue">
                Smart Technology
              </span>
              {" Solutions"}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-content-muted text-base sm:text-[17px] leading-relaxed mb-8 max-w-[560px] mx-auto lg:mx-0">
              ENAMIS SYSTEMS delivers professional electrical installation, solar/inverter solutions, CCTV surveillance, access control systems, and fire alarm installations for homes and businesses across Nigeria.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-9">
              <motion.a
                href="tel:+2348036227782"
                whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(37,99,235,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2.5 text-white font-bold px-7 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto justify-center text-sm sm:text-base overflow-hidden bg-gradient-to-r from-brand-blue via-brand-blue-dark to-blue-900"
              >
                <span className="absolute inset-0 translate-x-[-115%] group-hover:translate-x-[115%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700" aria-hidden="true" />
                <Phone className="w-4 h-4 flex-shrink-0" />
                Get Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 border border-border-med hover:border-brand-blue/50 text-content-primary font-bold px-7 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                View Services
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </motion.div>

            <motion.ul variants={fadeUp} className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-x-6 sm:gap-y-2 mb-7">
              {TRUST_BADGES.map((text, i) => (
                <motion.li key={text}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 text-content-muted text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start gap-3">
              <Radio className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
              <a href="tel:+2348036227782" className="text-brand-blue hover:text-brand-blue-dark transition-colors text-sm font-mono tracking-wide">
                +234 08036227782
              </a>
              <span className="text-content-muted-2 text-sm">— Available 24/7</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="flex-1 w-full max-w-[480px] mx-auto lg:mx-0 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 1.7 }}
        className="relative z-10 w-full border-t border-border-light"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-6">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <span className="text-content-muted-2 text-[10px] uppercase tracking-[0.25em] font-semibold mr-2 hidden sm:inline">
              Services:
            </span>
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8 + i * 0.07 }}
                whileHover={{ y: -2, scale: 1.04 }}
                className="flex items-center gap-2 bg-surface-card border border-border-light hover:border-brand-blue/30 rounded-xl px-3.5 py-2 text-content-muted text-xs sm:text-sm font-semibold transition-all duration-200 cursor-default"
              >
                <span className={`bg-gradient-to-br ${s.color} p-1 rounded-lg text-white`}>{s.icon}</span>
                {s.label}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
