"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, Shield, Clock, Zap, MapPin, Wrench, CheckCircle2 } from "lucide-react";

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "24/7", label: "Emergency Support" },
];

const WHY_US = [
  { icon: <BadgeCheck className="w-5 h-5" />, title: "Certified Professionals", desc: "Our engineers are trained, certified, and experienced in industry-standard practices.", gradient: "from-blue-500 to-blue-700" },
  { icon: <Shield className="w-5 h-5" />, title: "Safety First", desc: "Every installation follows strict safety codes and quality standards.", gradient: "from-amber-500 to-orange-600" },
  { icon: <Clock className="w-5 h-5" />, title: "24/7 Support", desc: "Round-the-clock emergency support and after-installation maintenance.", gradient: "from-blue-600 to-indigo-700" },
  { icon: <Zap className="w-5 h-5" />, title: "Competitive Pricing", desc: "Premium quality solutions at fair, transparent prices.", gradient: "from-amber-600 to-orange-700" },
  { icon: <MapPin className="w-5 h-5" />, title: "Nationwide Reach", desc: "Based in Lagos, serving clients across Nigeria.", gradient: "from-blue-500 to-blue-800" },
  { icon: <Wrench className="w-5 h-5" />, title: "Premium Equipment", desc: "Only certified, grade-A materials and latest smart technology.", gradient: "from-blue-400 to-blue-700" },
];

const PROCESS = [
  { step: "01", title: "Free Consultation", desc: "We discuss your requirements and understand your goals — free of charge." },
  { step: "02", title: "Site Assessment", desc: "Our engineers conduct a detailed on-site technical evaluation." },
  { step: "03", title: "Professional Installation", desc: "Skilled technicians carry out the full installation safely." },
  { step: "04", title: "Testing & Handover", desc: "Full testing, client walkthrough, and ongoing after-sales support." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.08 } }),
};

function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 border-y border-border-light bg-surface-card/50">
      {STATS.map((s, i) => (
        <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="py-6 px-4 text-center border-r border-border-light last:border-r-0">
          <div className="font-heading font-black text-[32px] sm:text-[36px] leading-none mb-1.5 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-blue to-brand-blue-dark">
            {s.value}
          </div>
          <div className="text-content-muted text-xs font-medium">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-surface-primary py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <StatsBand />

        {/* Intro */}
        <div className="mt-16 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-6 h-px bg-gradient-to-r from-transparent to-brand-blue" aria-hidden="true" />
            <span className="text-brand-blue text-[10px] font-bold tracking-[0.28em] uppercase">Why ENAMIS</span>
          </div>
          <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl leading-[1.08] tracking-tight mb-3">
            What Sets Us{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light to-brand-blue">Apart</span>
          </h2>
          <p className="text-content-muted text-sm sm:text-base leading-relaxed">
            From certified professionals to 24/7 emergency support — here&apos;s why hundreds of Nigerians trust us.
          </p>
        </div>

        {/* Why Us grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {WHY_US.map((item, i) => (
            <motion.div key={item.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group flex items-start gap-4 bg-surface-card border border-border-light hover:border-brand-blue/30 rounded-2xl p-5 transition-all duration-300">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-content-primary font-bold text-[14px] mb-1.5">{item.title}</h3>
                <p className="text-content-muted text-[12.5px] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-content-primary font-heading font-black text-3xl sm:text-4xl leading-[1.08] tracking-tight mb-3">
            Our Simple{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light to-brand-blue">4-Step Process</span>
          </h2>
          <p className="text-content-muted text-sm sm:text-base leading-relaxed">
            From first contact to full handover — streamlined and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROCESS.map((step, i) => (
            <motion.div key={step.step} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative group">
              {i < PROCESS.length - 1 && (
                <div className="hidden lg:block absolute top-[22px] left-[calc(50%+28px)] right-[-50%] h-px bg-gradient-to-r from-brand-blue/30 to-transparent z-0" aria-hidden="true" />
              )}
              <div className="relative z-10 bg-surface-card border border-border-light hover:border-brand-blue/30 rounded-2xl p-6 transition-all duration-300">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-blue to-blue-800 flex items-center justify-center mb-5 font-heading font-black text-white text-lg"
                  style={{ boxShadow: "0 0 0 4px rgba(37,99,235,0.18)" }}>
                  {step.step}
                </div>
                <h3 className="text-content-primary font-heading font-bold text-[16px] mb-2.5">{step.title}</h3>
                <p className="text-content-muted text-[12.5px] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust marquee */}
        <div className="border-y border-border-light overflow-hidden py-3">
          <div className="flex gap-0 whitespace-nowrap" style={{ animation: "marquee 22s linear infinite" }}>
            {[
              ...["Certified Electrical Engineers", "Grade-A Materials & Equipment", "Over 500 Completed Projects", "ISO-Compliant Installation Standards", "Serving Homes & Businesses Nationwide"],
              ...["Certified Electrical Engineers", "Grade-A Materials & Equipment", "Over 500 Completed Projects", "ISO-Compliant Installation Standards", "Serving Homes & Businesses Nationwide"],
            ].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2.5 px-8 text-content-muted text-xs font-medium">
                <CheckCircle2 className="w-3 h-3 text-brand-blue flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
