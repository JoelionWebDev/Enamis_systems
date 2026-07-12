"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, ArrowRight, Phone, Shield, ChevronDown,
  Zap, BarChart3, Users, Clock, ChevronRight, Home,
} from "lucide-react";
import type { ServiceData } from "@/app/lib/services";
import Footer from "@/app/components/Footer";
import ChatWidget from "@/app/components/ChatWidget";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.08 },
  }),
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const statIcons = [Zap, BarChart3, Users, Clock];

function FaqItem({ question, answer, open, onToggle }: {
  question: string; answer: string; open: boolean; onToggle: () => void;
}) {
  return (
    <div className="border border-border-light rounded-xl overflow-hidden bg-surface-card">
      <button onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-content-primary font-semibold text-sm transition-colors hover:bg-brand-blue/5">
        <span>{question}</span>
        <ChevronDown className={`w-4 h-4 text-content-muted transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden">
            <div className="px-5 pb-4 pt-0 text-content-muted text-sm leading-relaxed border-t border-border-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceDetailClient({ service }: { service: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-surface-primary">
      {/* ─── HERO ─── */}
      <section className="relative pt-20 sm:pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.image} alt={service.imageAlt} fill
            className="object-cover brightness-[0.25] dark:brightness-[0.2] scale-105"
            priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/95 via-[#050d1a]/70 to-[#050d1a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex items-center gap-2 text-white/50 text-xs mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-3 h-3" />
              </Link>
              <ChevronRight className="w-3 h-3 text-white/30" />
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3 h-3 text-white/30" />
              <span className="text-white/70">{service.title}</span>
            </nav>

            <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${service.accent} text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-5 shadow-lg`}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
              </span>
              {service.shortTitle}
            </div>

            <h1 className="text-white font-heading font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight mb-4 max-w-3xl">
              {service.title}
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              {service.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2.5 text-white font-bold px-7 py-3.5 rounded-xl text-sm overflow-hidden bg-brand-blue shadow-xl shadow-brand-blue/25">
                <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700" />
                Get Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
              <a href="tel:+2348036227782"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 text-white font-bold text-sm transition-all backdrop-blur-sm bg-white/5">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="relative z-10 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 bg-surface-card border border-border-light rounded-2xl p-5 sm:p-6 shadow-xl">
          {service.stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div key={stat.label} variants={fadeUp} custom={i}
                className="text-center sm:text-left sm:border-r sm:border-border-light last:border-r-0 sm:pr-4 last:pr-0">
                <Icon className="w-5 h-5 text-brand-blue mx-auto sm:mx-0 mb-2" />
                <div className="text-content-primary font-heading font-black text-2xl sm:text-3xl">{stat.value}</div>
                <div className="text-content-muted text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ─── OVERVIEW + FEATURES ─── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">Overview</span>
            <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl mt-3 mb-5 leading-tight">
              What We Deliver
            </h2>
            <p className="text-content-muted text-base leading-relaxed">{service.longDescription}</p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">Key Features</span>
            <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl mt-3 mb-1 leading-tight">
              What&apos;s Included
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ─── EXPANDED FEATURE DETAILS ─── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-24">
        <div className="space-y-8 sm:space-y-10">
          {service.featureDetails.map((fd, i) => (
            <motion.div key={fd.title}
              variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 sm:gap-6 lg:gap-10 bg-surface-card border border-border-light rounded-2xl p-5 sm:p-6 lg:p-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${service.accent} text-white text-xs font-black flex-shrink-0`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-content-primary font-heading font-bold text-base sm:text-lg leading-snug">{fd.title}</h3>
                </div>
              </div>
              <div className="space-y-3">
                {fd.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-content-muted text-sm leading-relaxed">{p}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-surface-secondary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">Our Process</span>
            <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl mt-3 mb-4">
              How It Works
            </h2>
            <p className="text-content-muted text-sm sm:text-base max-w-lg mx-auto">
              A proven step-by-step approach to deliver quality results every time.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/40 via-brand-blue/10 to-transparent -translate-x-1/2" aria-hidden="true" />
            <div className="space-y-8 sm:space-y-12">
              {service.processSteps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div key={step.title}
                    variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                    className={`relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-6 sm:gap-10`}>
                    <div className="flex-1 w-full lg:w-1/2">
                      <div className={`bg-surface-card border border-border-light rounded-2xl p-6 sm:p-8 ${isEven ? "lg:text-right" : ""}`}>
                        <span className={`inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${service.accent} text-white text-xs font-black mb-4 shadow-lg`}>
                          0{i + 1}
                        </span>
                        <h3 className="text-content-primary font-heading font-bold text-lg sm:text-xl mb-2">{step.title}</h3>
                        <p className="text-content-muted text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-center flex-shrink-0 relative z-10">
                      <div className={`w-10 h-10 rounded-full border-2 border-brand-blue bg-surface-secondary flex items-center justify-center font-heading font-black text-sm shadow-xl ${
                        isEven ? "text-brand-blue" : "text-brand-amber"
                      }`}>
                        <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${service.accent}`} />
                      </div>
                    </div>

                    <div className="flex-1 w-full lg:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">Project Gallery</span>
            <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl mt-3 mb-4">
              Our {service.shortTitle} Installations
            </h2>
            <p className="text-content-muted text-sm sm:text-base max-w-xl mx-auto">
              Real projects we&apos;ve completed for homes and businesses across Nigeria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[service.image, ...service.gallery].map((img, i) => (
              <motion.div key={img}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`group relative rounded-2xl overflow-hidden border border-border-light bg-surface-card ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}>
                <Image src={img} alt={`${service.title} ${i === 0 ? "hero" : `project ${i}`}`}
                  width={i === 0 ? 800 : 600} height={i === 0 ? 600 : 400}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 ? "aspect-[4/3] sm:aspect-auto sm:h-full" : "aspect-[4/3]"
                  }`}
                  loading={i === 0 ? "eager" : "lazy"} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.accent}`} />
                    <span className="text-white text-xs font-semibold">
                      {i === 0 ? "Featured Project" : `${service.shortTitle} Project ${i}`}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="bg-surface-secondary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">Why Choose Us</span>
              <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl mt-3 mb-6 leading-tight">
                Why ENAMIS for {service.shortTitle}?
              </h2>
              <div className="space-y-3">
                {service.whyChoose.map((w) => (
                  <div key={w} className="flex items-start gap-3 bg-surface-card border border-border-light rounded-xl p-4">
                    <Shield className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-content-body text-sm">{w}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">Benefits</span>
              <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl mt-3 mb-6 leading-tight">
                What You Gain
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((b) => (
                  <div key={b} className="bg-surface-card border border-border-light rounded-xl p-4 sm:p-5 text-center sm:text-left hover:border-brand-blue/30 transition-colors duration-200">
                    <CheckCircle2 className="w-6 h-6 text-brand-blue mb-3 mx-auto sm:mx-0" />
                    <span className="text-content-body text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">FAQ</span>
            <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl mt-3 mb-5 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-content-muted text-sm leading-relaxed">
              Have more questions? <a href="#contact" className="text-brand-blue hover:underline">Contact our team</a> for a free consultation.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="space-y-3">
              {service.faqs.map((faq, i) => (
                <FaqItem key={i}
                  question={faq.question}
                  answer={faq.answer}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-24">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-border-light bg-surface-card"
          style={{ boxShadow: `0 0 60px ${service.glowColor}` }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-brand-blue/5 rounded-full blur-3xl" />
            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-brand-amber/5 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 sm:px-10 py-8 sm:py-10">
            <div className="text-center sm:text-left">
              <h2 className="text-content-primary font-heading font-black text-2xl sm:text-3xl mb-1">Ready to Get Started?</h2>
              <p className="text-content-muted text-sm">Contact us for a free consultation and site assessment.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              <a href="tel:+2348036227782"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border-med text-brand-blue hover:bg-brand-blue/5 transition-all text-sm font-mono tracking-wide">
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
      <ChatWidget />
    </div>
  );
}
