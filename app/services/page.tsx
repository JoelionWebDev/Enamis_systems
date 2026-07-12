"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/app/lib/services";
import { getIcon } from "@/app/lib/icons";
import Footer from "@/app/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.1 },
  }),
};

function FeatureTag({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-1.5 text-content-muted text-xs">
      <CheckCircle2 className="w-3 h-3 text-brand-blue flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function ServiceCard({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  return (
    <motion.article
      custom={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative flex flex-col bg-surface-card border border-border-light rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-blue/30"
      style={{ boxShadow: "var(--card-shadow)" }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{ boxShadow: `inset 0 0 0 1px ${service.glowColor}, 0 0 40px ${service.glowColor}` }} aria-hidden="true" />

      <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0">
        <Image src={service.image} alt={service.imageAlt} fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading={index < 2 ? "eager" : "lazy"} />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/60 to-transparent" aria-hidden="true" />
        <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
          <div className={`flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}>
            {getIcon(service.iconName, "w-5 h-5")}
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="text-content-primary font-heading font-bold text-[17px] sm:text-[18px] leading-snug mb-2.5">
          {service.title}
        </h3>
        <p className="text-content-muted text-sm leading-relaxed mb-4 flex-1">{service.description}</p>
        <ul className="grid grid-cols-2 gap-1.5 mb-5">
          {service.features.slice(0, 4).map((f) => <FeatureTag key={f} text={f} />)}
        </ul>
        <Link href={`/services/${service.slug}`}
          className={`group/btn relative flex items-center gap-2 self-start px-4 py-2.5 rounded-xl text-white text-xs font-bold overflow-hidden transition-all duration-200 hover:gap-3 bg-gradient-to-br ${service.accent}`}>
          <span className="absolute inset-0 translate-x-[-110%] group-hover/btn:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-600" aria-hidden="true" />
          Learn More
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface-primary">
      <section className="relative pt-20 sm:pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{ backgroundImage: `radial-gradient(circle, rgba(37,99,235,0.6) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-brand-blue/5 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3 dark:bg-brand-blue/8" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-blue/4 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 dark:bg-brand-blue/7" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
              </span>
              <span className="text-brand-blue text-[11px] font-bold tracking-[0.25em] uppercase">Our Services</span>
            </div>
            <h1 className="text-content-primary font-heading font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight mb-5">
              Professional{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-blue to-brand-blue-dark">Electrical</span>
              {" & "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-brand-blue-light to-brand-blue">Smart Security</span>
              {" Solutions"}
            </h1>
            <p className="text-content-muted text-base sm:text-lg leading-relaxed max-w-2xl">
              From electrical installations to solar energy, CCTV surveillance, access control, and fire alarm systems — we deliver safe, professional, and reliable solutions for homes and businesses across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.sort((a, b) => a.sortOrder - b.sortOrder).map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
