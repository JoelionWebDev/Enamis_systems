"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Sun,
  Camera,
  ShieldCheck,
  Flame,
  Phone,
  MessageSquare,
  ArrowRight,
  Target,
  Eye,
  HandshakeIcon,
  Award,
  Clock,
  MapPin,
  Wrench,
  BadgeCheck,
  Lightbulb,
  Star,
  Shield,
  HeartHandshake,
  Sparkles,
  Users,
  CheckCircle2,
} from "lucide-react";

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "24/7", label: "Emergency Support" },
];

const MVP = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Our Mission",
    desc: "To deliver safe, efficient, and innovative electrical and smart security solutions that protect lives, assets, and infrastructure across Nigeria and beyond.",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Our Vision",
    desc: "To be the most trusted electrical and smart technology company in Nigeria, known for professional excellence, reliability, and cutting-edge innovation.",
    gradient: "from-sky-500 to-blue-700",
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: "Our Promise",
    desc: "Every project receives the same dedication — professional workmanship, certified materials, on-time delivery, and lasting after-sales support.",
    gradient: "from-indigo-500 to-blue-700",
  },
];

const WHY_US = [
  {
    icon: <BadgeCheck className="w-4 h-4" />,
    title: "Certified Professionals",
    desc: "Our engineers are trained, certified, and experienced in industry-standard electrical and security practices.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    title: "Safety First",
    desc: "Every installation follows strict safety codes and quality standards — no shortcuts, ever.",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    title: "24/7 Support",
    desc: "We provide round-the-clock emergency support and after-installation maintenance services.",
    gradient: "from-indigo-500 to-blue-700",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Competitive Pricing",
    desc: "Premium quality solutions at fair and fully transparent prices — no hidden charges, ever.",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    title: "Nationwide Reach",
    desc: "Based in Lagos, we serve clients across Nigeria with prompt, reliable field service teams.",
    gradient: "from-blue-500 to-blue-800",
  },
  {
    icon: <Wrench className="w-4 h-4" />,
    title: "Premium Equipment",
    desc: "We only use certified, grade-A materials and the latest smart technology systems.",
    gradient: "from-blue-400 to-blue-700",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "We discuss your requirements, assess your space, and understand your goals — completely free of charge.",
  },
  {
    step: "02",
    title: "Site Assessment",
    desc: "Our engineers conduct a detailed on-site technical evaluation to plan the safest and most efficient solution.",
  },
  {
    step: "03",
    title: "Professional Installation",
    desc: "Skilled technicians carry out the full installation using certified equipment and industry-safe practices.",
  },
  {
    step: "04",
    title: "Testing & Handover",
    desc: "Full system testing, client walkthrough, comprehensive documentation, and ongoing after-sales support.",
  },
];

const VALUES = [
  {
    icon: <Star className="w-5 h-5" />,
    title: "Excellence",
    desc: "Delivering the highest standard in every project, every time.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Integrity",
    desc: "Honest, transparent dealings with every client and partner.",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Innovation",
    desc: "Embracing the latest technologies to solve complex problems.",
    gradient: "from-indigo-500 to-blue-700",
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: "Reliability",
    desc: "Dependable installations and support you can count on 24/7.",
    gradient: "from-blue-600 to-indigo-800",
  },
];

const SERVICES_QUICK = [
  {
    icon: <Zap className="w-3.5 h-3.5" />,
    label: "Electrical Installation",
    c: "from-blue-500 to-blue-700",
  },
  {
    icon: <Sun className="w-3.5 h-3.5" />,
    label: "Solar & Inverter Systems",
    c: "from-sky-400 to-blue-600",
  },
  {
    icon: <Camera className="w-3.5 h-3.5" />,
    label: "CCTV Installation",
    c: "from-indigo-500 to-blue-700",
  },
  {
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    label: "Access Control Systems",
    c: "from-blue-600 to-indigo-800",
  },
  {
    icon: <Flame className="w-3.5 h-3.5" />,
    label: "Fire Alarm Systems",
    c: "from-blue-500 to-blue-900",
  },
];

// ─── Reusable section header ──────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 mb-4">
      <span
        className="w-6 h-px bg-gradient-to-r from-transparent to-blue-500"
        aria-hidden="true"
      />
      <span className="text-blue-400 text-[10px] font-bold tracking-[0.28em] uppercase">
        {text}
      </span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-white font-black text-3xl sm:text-4xl leading-[1.08] tracking-tight mb-3"
      style={{ fontFamily: "'Rajdhani','Barlow Condensed',sans-serif" }}
    >
      {children}
    </h2>
  );
}

// ─── Logo Orb (hero visual) ───────────────────────────────────────────────────

function LogoOrb() {
  return (
    <div
      className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] mx-auto select-none"
      aria-hidden="true"
    >
      {/* Rings */}
      {[0, 12, 24].map((inset, i) => (
        <motion.div
          key={i}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 45 - i * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full border border-blue-500/10"
          style={{
            inset: `${inset}%`,
            borderStyle: i === 1 ? "dashed" : "solid",
          }}
        />
      ))}
      {/* Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[30%] rounded-full bg-blue-600/20 blur-3xl"
      />
      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[44%] h-[44%]">
          <div className="absolute inset-[-20%] rounded-full bg-blue-600/18 blur-2xl" />
          <Image
            src="/enamis.png"
            alt="ENAMIS SYSTEMS"
            fill
            className="object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.65)] relative z-10"
            priority
          />
        </div>
      </div>
      {/* Orbiting dots */}
      {[
        {
          dur: 8,
          inset: "4%",
          pos: "top-0 left-1/2 -translate-x-1/2",
          size: "w-3 h-3",
          color: "bg-blue-400",
          glow: "rgba(96,165,250,.8)",
        },
        {
          dur: 16,
          inset: "13%",
          pos: "top-0 right-0",
          size: "w-2 h-2",
          color: "bg-sky-300",
          glow: "rgba(125,211,252,.65)",
        },
      ].map((d, i) => (
        <motion.div
          key={i}
          animate={{ rotate: i === 0 ? 360 : -360 }}
          transition={{ duration: d.dur, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full pointer-events-none"
          style={{ inset: d.inset }}
        >
          <div
            className={`absolute ${d.pos} ${d.size} rounded-full ${d.color}`}
            style={{ boxShadow: `0 0 12px 3px ${d.glow}` }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ─── Stats Band ───────────────────────────────────────────────────────────────

function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-4 border-y border-blue-500/10"
      style={{ background: "rgba(2,8,15,0.8)" }}
      role="list"
      aria-label="Company statistics"
    >
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          custom={i}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="py-6 px-4 text-center border-r border-blue-500/8 last:border-r-0 sm:odd:border-r sm:border-r [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r"
          role="listitem"
        >
          <div
            className="font-black text-[32px] sm:text-[36px] leading-none mb-1.5 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg,#93c5fd,#3b82f6,#1d4ed8)",
              fontFamily: "'Rajdhani','Barlow Condensed',sans-serif",
            }}
          >
            {s.value}
          </div>
          <div className="text-slate-500 text-xs font-medium">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── About Hero Section ───────────────────────────────────────────────────────

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24"
      aria-label="About ENAMIS SYSTEMS"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex-1 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            <span className="text-blue-400 text-[11px] font-bold tracking-[0.25em] uppercase">
              About Us
            </span>
          </div>

          <h1
            className="text-white font-black text-4xl sm:text-5xl lg:text-[54px] leading-[1.06] tracking-tight mb-6"
            style={{ fontFamily: "'Rajdhani','Barlow Condensed',sans-serif" }}
          >
            Powering Homes &{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#93c5fd,#3b82f6,#1d4ed8)",
              }}
            >
              Securing Businesses
            </span>{" "}
            Across Nigeria
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-5 max-w-xl">
            ENAMIS SYSTEMS is a professional electrical and smart security
            engineering company based in Lagos, Nigeria. Founded on a deep
            commitment to quality and safety, we deliver cutting-edge solutions
            to homes, businesses, and industrial clients nationwide.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xl">
            With over a decade of hands-on experience, our certified team of
            engineers and technicians has completed hundreds of successful
            installations — from basic household wiring to large-scale
            industrial security infrastructure.
          </p>

          {/* Quick service tags */}
          <div className="flex flex-wrap gap-2 mb-8" aria-label="Our services">
            {SERVICES_QUICK.map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border border-blue-500/15 rounded-lg text-slate-400 text-xs font-medium"
              >
                <span
                  className={`flex items-center justify-center w-4 h-4 rounded bg-gradient-to-br ${s.c} text-white flex-shrink-0`}
                  aria-hidden="true"
                >
                  {s.icon}
                </span>
                {s.label}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 24px rgba(59,130,246,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-2.5 text-white font-bold px-6 py-3.5 rounded-xl text-sm overflow-hidden transition-all duration-200"
              style={{
                background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                boxShadow: "0 0 0 1px rgba(96,165,250,0.2)",
              }}
              aria-label="Get a free consultation"
            >
              <span
                className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700"
                aria-hidden="true"
              />
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              Get Free Consultation
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-blue-500/20 hover:border-blue-500/45 bg-white/[0.03] hover:bg-blue-600/10 text-white font-bold text-sm transition-all duration-200"
              aria-label="View our services"
            >
              <Wrench className="w-4 h-4" aria-hidden="true" />
              View Services
            </motion.a>
          </div>
        </motion.div>

        {/* Right: logo orb */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex-1 flex justify-center"
        >
          <LogoOrb />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Mission / Vision / Promise ───────────────────────────────────────────────

function MissionSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20"
      aria-labelledby="mission-heading"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionLabel text="Our Purpose" />
        <SectionTitle>
          <span id="mission-heading">Mission, Vision &</span>{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg,#93c5fd,#3b82f6)",
            }}
          >
            Core Values
          </span>
        </SectionTitle>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mb-10">
          Everything we do is driven by a commitment to safety, quality, and
          innovation in every installation we deliver.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {MVP.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="group bg-[#060f1e] border border-blue-500/12 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300"
            style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            <div
              className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-4 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300`}
              aria-hidden="true"
            >
              {item.icon}
            </div>
            <h3
              className="text-white font-bold text-[17px] mb-3"
              style={{ fontFamily: "'Rajdhani','Barlow Condensed',sans-serif" }}
            >
              {item.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────

function WhyUsSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 border-t border-blue-500/8"
      aria-labelledby="why-heading"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionLabel text="Why Choose Us" />
        <SectionTitle>
          <span id="why-heading">What Sets Us</span>{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg,#93c5fd,#3b82f6)",
            }}
          >
            Apart
          </span>
        </SectionTitle>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mb-10">
          From certified professionals to 24/7 emergency support — here's why
          hundreds of Nigerians trust ENAMIS SYSTEMS.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {WHY_US.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group flex items-start gap-4 bg-[#060f1e] border border-blue-500/10 hover:border-blue-500/35 rounded-2xl p-5 transition-all duration-300"
          >
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:shadow-[0_0_16px_rgba(37,99,235,0.35)] transition-all duration-300`}
              aria-hidden="true"
            >
              {item.icon}
            </div>
            <div>
              <h3 className="text-slate-100 font-bold text-[14px] mb-1.5">
                {item.title}
              </h3>
              <p className="text-slate-500 text-[12.5px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Our Process ──────────────────────────────────────────────────────────────

function ProcessSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 border-t border-blue-500/8"
      aria-labelledby="process-heading"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionLabel text="How We Work" />
        <SectionTitle>
          <span id="process-heading">Our Simple</span>{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg,#93c5fd,#3b82f6)",
            }}
          >
            4-Step Process
          </span>
        </SectionTitle>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mb-12">
          From first contact to full handover — our streamlined process ensures
          every project is delivered on time, on budget, and to the highest
          standard.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS.map((step, i) => (
          <motion.div
            key={step.step}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Connector line */}
            {i < PROCESS.length - 1 && (
              <div
                className="hidden lg:block absolute top-[22px] left-[calc(50%+28px)] right-[-50%] h-px bg-gradient-to-r from-blue-500/30 to-transparent z-0"
                aria-hidden="true"
              />
            )}

            <div className="relative z-10 bg-[#060f1e] border border-blue-500/12 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
              {/* Step number bubble */}
              <div
                className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-5 font-black text-white text-lg"
                style={{
                  fontFamily: "'Rajdhani','Barlow Condensed',sans-serif",
                  boxShadow: "0 0 0 4px rgba(37,99,235,0.18)",
                }}
                aria-label={`Step ${step.step}`}
              >
                {step.step}
              </div>
              <h3
                className="text-white font-bold text-[16px] mb-2.5"
                style={{
                  fontFamily: "'Rajdhani','Barlow Condensed',sans-serif",
                }}
              >
                {step.title}
              </h3>
              <p className="text-slate-500 text-[12.5px] leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Core Values ─────────────────────────────────────────────────────────────

function ValuesSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 border-t border-blue-500/8"
      aria-labelledby="values-heading"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionLabel text="Our Core Values" />
        <SectionTitle>
          <span id="values-heading">The Principles</span>{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg,#93c5fd,#3b82f6)",
            }}
          >
            We Stand By
          </span>
        </SectionTitle>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mb-10">
          Our values are the foundation of every decision we make and every
          service we deliver.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {VALUES.map((v, i) => (
          <motion.div
            key={v.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.22 } }}
            className="group bg-[#060f1e] border border-blue-500/10 hover:border-blue-500/38 rounded-2xl p-6 text-center transition-all duration-300"
          >
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all duration-300`}
              aria-hidden="true"
            >
              {v.icon}
            </div>
            <h3
              className="text-white font-bold text-[16px] mb-2"
              style={{ fontFamily: "'Rajdhani','Barlow Condensed',sans-serif" }}
            >
              {v.title}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Trust Indicators Band ────────────────────────────────────────────────────

function TrustBand() {
  const items = [
    "Certified Electrical Engineers",
    "Grade-A Materials & Equipment",
    "Over 500 Completed Projects",
    "ISO-Compliant Installation Standards",
    "Serving Homes & Businesses Nationwide",
  ];
  return (
    <div
      className="border-y border-blue-500/8 overflow-hidden py-3"
      aria-label="Trust indicators"
    >
      <div
        className="flex gap-0 animate-marquee whitespace-nowrap"
        style={{ animation: "marquee 22s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 px-8 text-slate-500 text-xs font-medium"
          >
            <CheckCircle2
              className="w-3 h-3 text-blue-500 flex-shrink-0"
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

// ─── CTA Strip ────────────────────────────────────────────────────────────────

function CtaStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-12"
      aria-label="Call to action"
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-[#060f1e]"
        style={{ boxShadow: "0 0 60px rgba(37,99,235,0.08)" }}
      >
        {/* BG glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-blue-600/8 rounded-full blur-3xl" />
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-indigo-600/8 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle,rgba(59,130,246,.6) 1px,transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 sm:px-10 py-8 sm:py-10">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
                Ready to Start?
              </span>
            </div>
            <h2
              className="text-white font-black text-2xl sm:text-3xl mb-1"
              style={{ fontFamily: "'Rajdhani','Barlow Condensed',sans-serif" }}
            >
              Ready to Work With Us?
            </h2>
            <p className="text-slate-400 text-sm">
              Contact our team today for a free consultation and site
              assessment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <a
              href="tel:+2348036227782"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-blue-500/25 text-blue-400 hover:bg-blue-600/10 hover:border-blue-500/50 transition-all duration-200 text-sm font-mono tracking-wide"
              aria-label="Call ENAMIS SYSTEMS"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
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
              aria-label="Get free consultation"
            >
              <span
                className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700"
                aria-hidden="true"
              />
              Get Free Consultation
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="border-t border-blue-500/8 bg-[#02080f]"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src="/Enamis_system.png"
            alt="ENAMIS SYSTEMS"
            width={28}
            height={28}
            className="w-7 h-7 object-contain opacity-70"
          />
          <span className="text-slate-600 text-xs">
            © {new Date().getFullYear()} ENAMIS SYSTEMS · Lagos, Nigeria
          </span>
        </div>
        <div className="flex items-center gap-4">
          {[
            ["Services", "#services"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-slate-600 hover:text-slate-400 text-xs transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#02080f] overflow-x-hidden">
      {/* Background atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#02080f]" />
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(circle,rgba(59,130,246,.55) 1px,transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-700/6 rounded-full blur-[130px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[110px] translate-x-1/4" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-700/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <StatsBand />
        <TrustBand />
        <MissionSection />
        <WhyUsSection />
        <ProcessSection />
        <ValuesSection />
        <CtaStrip />
        <Footer />
      </div>
    </div>
  );
}
