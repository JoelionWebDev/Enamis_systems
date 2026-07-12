"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Zap, Sun, Camera, ShieldCheck, Flame, Home, Phone, MessageSquare, ArrowRight, Target, Eye, HeartHandshake, BadgeCheck, Shield, Clock, MapPin, Wrench, Lightbulb, Star, CheckCircle2, Sparkles } from "lucide-react";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.08 } }),
};

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "24/7", label: "Emergency Support" },
];

const MVP = [
  { icon: <Target className="w-5 h-5" />, title: "Our Mission", desc: "To deliver safe, efficient, and innovative electrical and smart security solutions that protect lives, assets, and infrastructure across Nigeria and beyond.", gradient: "from-brand-blue to-blue-800" },
  { icon: <Eye className="w-5 h-5" />, title: "Our Vision", desc: "To be the most trusted electrical and smart technology company in Nigeria, known for professional excellence, reliability, and cutting-edge innovation.", gradient: "from-amber-500 to-orange-600" },
  { icon: <HeartHandshake className="w-5 h-5" />, title: "Our Promise", desc: "Every project receives the same dedication — professional workmanship, certified materials, on-time delivery, and lasting after-sales support.", gradient: "from-indigo-500 to-brand-blue" },
];

const WHY_US = [
  { icon: <BadgeCheck className="w-4 h-4" />, title: "Certified Professionals", desc: "Our engineers are trained, certified, and experienced in industry-standard electrical and security practices.", gradient: "from-brand-blue to-brand-blue-dark" },
  { icon: <Shield className="w-4 h-4" />, title: "Safety First", desc: "Every installation follows strict safety codes and quality standards — no shortcuts, ever.", gradient: "from-amber-400 to-orange-500" },
  { icon: <Clock className="w-4 h-4" />, title: "24/7 Support", desc: "We provide round-the-clock emergency support and after-installation maintenance services.", gradient: "from-indigo-500 to-brand-blue" },
  { icon: <Zap className="w-4 h-4" />, title: "Competitive Pricing", desc: "Premium quality solutions at fair and fully transparent prices — no hidden charges, ever.", gradient: "from-brand-blue to-indigo-700" },
  { icon: <MapPin className="w-4 h-4" />, title: "Nationwide Reach", desc: "Based in Lagos, we serve clients across Nigeria with prompt, reliable field service teams.", gradient: "from-brand-blue to-blue-800" },
  { icon: <Wrench className="w-4 h-4" />, title: "Premium Equipment", desc: "We only use certified, grade-A materials and the latest smart technology systems.", gradient: "from-blue-400 to-brand-blue" },
];

const PROCESS = [
  { step: "01", title: "Free Consultation", desc: "We discuss your requirements, assess your space, and understand your goals — completely free of charge." },
  { step: "02", title: "Site Assessment", desc: "Our engineers conduct a detailed on-site technical evaluation to plan the safest and most efficient solution." },
  { step: "03", title: "Professional Installation", desc: "Skilled technicians carry out the full installation using certified equipment and industry-safe practices." },
  { step: "04", title: "Testing & Handover", desc: "Full system testing, client walkthrough, comprehensive documentation, and ongoing after-sales support." },
];

const VALUES = [
  { icon: <Star className="w-5 h-5" />, title: "Excellence", desc: "Delivering the highest standard in every project, every time.", gradient: "from-brand-blue to-brand-blue-dark" },
  { icon: <Shield className="w-5 h-5" />, title: "Integrity", desc: "Honest, transparent dealings with every client and partner.", gradient: "from-amber-400 to-brand-blue" },
  { icon: <Lightbulb className="w-5 h-5" />, title: "Innovation", desc: "Embracing the latest technologies to solve complex problems.", gradient: "from-indigo-500 to-brand-blue" },
  { icon: <HeartHandshake className="w-5 h-5" />, title: "Reliability", desc: "Dependable installations and support you can count on 24/7.", gradient: "from-brand-blue to-indigo-800" },
];

function LogoOrb() {
  return (
    <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] mx-auto select-none" aria-hidden="true">
      {[0, 12, 24].map((inset, i) => (
        <motion.div key={i} animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 45 - i * 10, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full border border-brand-blue/10"
          style={{ inset: `${inset}%`, borderStyle: i === 1 ? "dashed" : "solid" }} />
      ))}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[30%] rounded-full bg-brand-blue/15 blur-3xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[44%] h-[44%]">
          <div className="absolute inset-[-20%] rounded-full bg-brand-blue/10 blur-2xl" />
          <Image src="/enamis.png" alt="ENAMIS SYSTEMS" fill className="object-contain drop-shadow-[0_0_20px_rgba(37,99,235,0.4)] relative z-10" priority />
        </div>
      </div>
      {[
        { dur: 8, inset: "4%", pos: "top-0 left-1/2 -translate-x-1/2", size: "w-3 h-3", color: "bg-brand-blue", glow: "rgba(59,130,246,.8)" },
        { dur: 16, inset: "13%", pos: "top-0 right-0", size: "w-2 h-2", color: "bg-brand-amber", glow: "rgba(245,158,11,.65)" },
      ].map((d, i) => (
        <motion.div key={i} animate={{ rotate: i === 0 ? 360 : -360 }}
          transition={{ duration: d.dur, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full pointer-events-none" style={{ inset: d.inset }}>
          <div className={`absolute ${d.pos} ${d.size} rounded-full ${d.color}`} style={{ boxShadow: `0 0 12px 3px ${d.glow}` }} />
        </motion.div>
      ))}
    </div>
  );
}

function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
            </span>
            <span className="text-brand-blue text-[11px] font-bold tracking-[0.25em] uppercase">About Us</span>
          </div>
          <h1 className="text-content-primary font-heading font-black text-4xl sm:text-5xl lg:text-[54px] leading-[1.06] tracking-tight mb-6">
            Powering Homes &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-blue to-brand-blue-dark">Securing Businesses</span>
            {" "}Across Nigeria
          </h1>
          <p className="text-content-muted text-base sm:text-lg leading-relaxed mb-5 max-w-xl">
            ENAMIS SYSTEMS is a professional electrical and smart security engineering company based in Lagos, Nigeria. Founded on a deep commitment to quality and safety, we deliver cutting-edge solutions to homes, businesses, and industrial clients nationwide.
          </p>
          <p className="text-content-muted-2 text-sm leading-relaxed mb-8 max-w-xl">
            With over a decade of hands-on experience, our certified team of engineers and technicians has completed hundreds of successful installations — from basic household wiring to large-scale industrial security infrastructure.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {[{ icon: <Zap className="w-3.5 h-3.5" />, label: "Electrical Installation", c: "from-brand-blue to-brand-blue-dark" },
              { icon: <Sun className="w-3.5 h-3.5" />, label: "Solar & Inverter Systems", c: "from-amber-400 to-orange-500" },
              { icon: <Camera className="w-3.5 h-3.5" />, label: "CCTV Installation", c: "from-indigo-500 to-brand-blue" },
              { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: "Access Control Systems", c: "from-brand-blue to-indigo-800" },
              { icon: <Flame className="w-3.5 h-3.5" />, label: "Fire Alarm Systems", c: "from-brand-blue to-blue-900" },
              { icon: <Home className="w-3.5 h-3.5" />, label: "Home Automation", c: "from-emerald-500 to-teal-600" },
            ].map((s) => (
              <span key={s.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-card border border-border-light rounded-lg text-content-muted text-xs font-medium">
                <span className={`flex items-center justify-center w-4 h-4 rounded bg-gradient-to-br ${s.c} text-white flex-shrink-0`}>{s.icon}</span>
                {s.label}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a href="/contact" whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(37,99,235,0.3)" }} whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-2.5 text-white font-bold px-6 py-3.5 rounded-xl text-sm overflow-hidden bg-brand-blue">
              <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700" />
              <MessageSquare className="w-4 h-4" /> Get Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a href="#services" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border-med hover:border-brand-blue/45 text-content-primary font-bold text-sm transition-all">
              <Wrench className="w-4 h-4" /> View Services
            </motion.a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="flex-1 flex justify-center">
          <LogoOrb />
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-surface-primary overflow-x-hidden">
      <div className="relative z-10">
        <AboutHero />

        <div className="border-y border-border-light bg-surface-card/50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="py-6 px-4 text-center border-r border-border-light last:border-r-0">
                  <div className="font-heading font-black text-[32px] sm:text-[36px] leading-none mb-1.5 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-blue to-brand-blue-dark">{s.value}</div>
                  <div className="text-content-muted text-xs font-medium">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-y border-border-light overflow-hidden py-3">
          <div className="flex gap-0 whitespace-nowrap" style={{ animation: "marquee 22s linear infinite" }}>
            {[
              ...["Certified Electrical Engineers", "Grade-A Materials & Equipment", "Over 500 Completed Projects", "ISO-Compliant Installation Standards", "Serving Homes & Businesses Nationwide"],
              ...["Certified Electrical Engineers", "Grade-A Materials & Equipment", "Over 500 Completed Projects", "ISO-Compliant Installation Standards", "Serving Homes & Businesses Nationwide"],
            ].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 px-8 text-content-muted text-xs font-medium">
                <CheckCircle2 className="w-3 h-3 text-brand-blue flex-shrink-0" />{item}
              </span>
            ))}
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gradient-to-r from-transparent to-brand-blue" aria-hidden="true" />
              <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">Our Purpose</span>
            </div>
            <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl leading-[1.08] tracking-tight mb-3">
              Mission, Vision & <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light to-brand-blue">Core Values</span>
            </h2>
            <p className="text-content-muted text-sm sm:text-base leading-relaxed max-w-2xl mb-10">
              Everything we do is driven by a commitment to safety, quality, and innovation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {MVP.map((item, i) => (
              <motion.div key={item.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-surface-card border border-border-light hover:border-brand-blue/30 rounded-2xl p-6 transition-all duration-300">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-4`}>{item.icon}</div>
                <h3 className="text-content-primary font-heading font-bold text-[17px] mb-3">{item.title}</h3>
                <p className="text-content-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 border-t border-border-light">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gradient-to-r from-transparent to-brand-blue" aria-hidden="true" />
              <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl leading-[1.08] tracking-tight mb-3">
              What Sets Us <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light to-brand-blue">Apart</span>
            </h2>
            <p className="text-content-muted text-sm sm:text-base leading-relaxed max-w-2xl mb-10">
              From certified professionals to 24/7 emergency support.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map((item, i) => (
              <motion.div key={item.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="group flex items-start gap-4 bg-surface-card border border-border-light hover:border-brand-blue/30 rounded-2xl p-5 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0`}>{item.icon}</div>
                <div>
                  <h3 className="text-content-primary font-bold text-[14px] mb-1.5">{item.title}</h3>
                  <p className="text-content-muted text-[12.5px] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 border-t border-border-light">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gradient-to-r from-transparent to-brand-blue" aria-hidden="true" />
              <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">How We Work</span>
            </div>
            <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl leading-[1.08] tracking-tight mb-3">
              Our Simple <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light to-brand-blue">4-Step Process</span>
            </h2>
            <p className="text-content-muted text-sm sm:text-base leading-relaxed max-w-2xl mb-12">
              From first contact to full handover — streamlined and stress-free.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative group">
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-[22px] left-[calc(50%+28px)] right-[-50%] h-px bg-gradient-to-r from-brand-blue/30 to-transparent z-0" aria-hidden="true" />
                )}
                <div className="relative z-10 bg-surface-card border border-border-light hover:border-brand-blue/30 rounded-2xl p-6 transition-all">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-blue to-blue-800 flex items-center justify-center mb-5 font-heading font-black text-white text-lg"
                    style={{ boxShadow: "0 0 0 4px rgba(37,99,235,0.18)" }}>{step.step}</div>
                  <h3 className="text-content-primary font-heading font-bold text-[16px] mb-2.5">{step.title}</h3>
                  <p className="text-content-muted text-[12.5px] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 border-t border-border-light">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-gradient-to-r from-transparent to-brand-blue" aria-hidden="true" />
              <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">Our Core Values</span>
            </div>
            <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl leading-[1.08] tracking-tight mb-3">
              The Principles <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light to-brand-blue">We Stand By</span>
            </h2>
            <p className="text-content-muted text-sm sm:text-base leading-relaxed max-w-xl mb-10">
              Our values are the foundation of every decision we make.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-surface-card border border-border-light hover:border-brand-blue/30 rounded-2xl p-6 text-center transition-all">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white mx-auto mb-4`}>{v.icon}</div>
                <h3 className="text-content-primary font-heading font-bold text-[16px] mb-2">{v.title}</h3>
                <p className="text-content-muted text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-12">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative overflow-hidden rounded-2xl border border-border-light bg-surface-card">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-brand-blue/5 rounded-full blur-3xl" />
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-brand-amber/5 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 sm:px-10 py-8 sm:py-10">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-brand-blue" />
                  <span className="text-brand-blue text-xs font-bold tracking-widest uppercase">Ready to Start?</span>
                </div>
                <h2 className="text-content-primary font-heading font-black text-2xl sm:text-3xl mb-1">Ready to Work With Us?</h2>
                <p className="text-content-muted text-sm">Contact our team today for a free consultation and site assessment.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
                <a href="tel:+2348036227782" className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border-med text-brand-blue hover:bg-brand-blue/5 transition-all text-sm font-mono tracking-wide">
                  <Phone className="w-4 h-4" /> +234 08036227782
                </a>
                <motion.a href="/contact" whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(37,99,235,0.3)" }} whileTap={{ scale: 0.97 }}
                  className="group relative flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white text-sm font-bold overflow-hidden">
                  <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700" />
                  Get Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
