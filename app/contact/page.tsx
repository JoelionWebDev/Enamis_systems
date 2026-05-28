"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Shield,
  Zap,
  Sun,
  Camera,
  ShieldCheck,
  Flame,
  Home,
  Building2,
  Factory,
  LayoutGrid,
  MessageSquareText,
  CheckCircle2,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type PropertyType = "Residential" | "Commercial" | "Industrial" | "Other";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  propertyTypes: PropertyType[];
  message: string;
}

interface ContactInfoCard {
  icon: React.ReactNode;
  title: string;
  primary: string;
  secondary: string;
  extra?: React.ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES_LIST = [
  "Electrical Installation",
  "Solar & Inverter Systems",
  "CCTV Installation",
  "Access Control Systems",
  "Fire Alarm Systems",
  "Multiple / Other Services",
];

const PROPERTY_TYPES: { label: PropertyType; icon: React.ReactNode }[] = [
  { label: "Residential", icon: <Home className="w-4 h-4" /> },
  { label: "Commercial", icon: <Building2 className="w-4 h-4" /> },
  { label: "Industrial", icon: <Factory className="w-4 h-4" /> },
  { label: "Other", icon: <LayoutGrid className="w-4 h-4" /> },
];

const SERVICE_ICONS = [
  {
    icon: <Zap className="w-3.5 h-3.5" />,
    label: "Electrical Installation",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: <Sun className="w-3.5 h-3.5" />,
    label: "Solar & Inverter Systems",
    color: "from-sky-400 to-blue-600",
  },
  {
    icon: <Camera className="w-3.5 h-3.5" />,
    label: "CCTV Installation",
    color: "from-indigo-500 to-blue-700",
  },
  {
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    label: "Access Control Systems",
    color: "from-blue-600 to-indigo-800",
  },
  {
    icon: <Flame className="w-3.5 h-3.5" />,
    label: "Fire Alarm Systems",
    color: "from-blue-500 to-blue-900",
  },
];

const SOCIAL_LINKS = [
  {
    icon: <Phone className="w-3.5 h-3.5" />,
    label: "Call Us",
    href: "tel:+2348036227782",
  },
  {
    icon: (
      <svg
        className="w-3.5 h-3.5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.533 5.845L.057 23.177a.75.75 0 00.908.919l5.444-1.463A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.516-5.163-1.415l-.371-.22-3.833 1.03 1.054-3.726-.242-.382A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    label: "WhatsApp",
    href: "https://wa.me/2348036227782",
  },
  {
    icon: <Mail className="w-3.5 h-3.5" />,
    label: "Email Us",
    href: "mailto:info@enamissystems.com",
  },
];

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as any,
      delay: i * 0.08,
    },
  }),
};

// ─── Info Card ────────────────────────────────────────────────────────────────

function InfoCard({ card, index }: { card: ContactInfoCard; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group bg-[#060f1e] border border-blue-500/12 hover:border-blue-500/40 rounded-2xl p-5 transition-all duration-300"
      style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.35)" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white flex-shrink-0 group-hover:shadow-[0_0_16px_rgba(37,99,235,0.4)] transition-all duration-300">
          {card.icon}
        </div>
        <h3
          className="text-white font-bold text-[15px]"
          style={{ fontFamily: "'Rajdhani', 'Barlow Condensed', sans-serif" }}
        >
          {card.title}
        </h3>
      </div>
      <p className="text-blue-400 text-sm font-mono tracking-wide mb-1">
        {card.primary}
      </p>
      <p className="text-slate-500 text-xs mb-2">{card.secondary}</p>
      {card.extra}
    </motion.div>
  );
}

// ─── Hours Table ──────────────────────────────────────────────────────────────

function HoursTable() {
  return (
    <div className="space-y-2">
      {[
        { day: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
        { day: "Saturday", time: "9:00 AM – 4:00 PM" },
      ].map(({ day, time }) => (
        <div
          key={day}
          className="flex items-center justify-between py-1.5 border-b border-blue-500/8"
        >
          <span className="text-slate-400 text-xs">{day}</span>
          <span className="text-blue-400 text-xs font-mono">{time}</span>
        </div>
      ))}
      <div className="flex items-center justify-between pt-1">
        <span className="text-slate-400 text-xs">Emergency</span>
        <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full">
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
            aria-hidden="true"
          />
          24 / 7
        </span>
      </div>
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    propertyTypes: [],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof FormData, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const toggleProperty = (pt: PropertyType) =>
    setForm((p) => ({
      ...p,
      propertyTypes:
        p.propertyTypes.includes(pt) ?
          p.propertyTypes.filter((x) => x !== pt)
        : [...p.propertyTypes, pt],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const inputCls =
    "w-full bg-white/[0.03] border border-blue-500/18 hover:border-blue-500/35 focus:border-blue-500/55 focus:bg-blue-600/[0.04] focus:outline-none focus:ring-2 focus:ring-blue-500/12 rounded-xl px-4 py-3 text-[13px] text-slate-200 placeholder-slate-600 transition-all duration-200 font-['DM_Sans']";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
        className="bg-[#060f1e] border border-blue-500/20 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[480px] gap-5"
        style={{ boxShadow: "0 0 60px rgba(37,99,235,0.08)" }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-[0_0_32px_rgba(37,99,235,0.4)]">
          <CheckCircle2 className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
        <div>
          <h3
            className="text-white font-black text-2xl mb-2"
            style={{ fontFamily: "'Rajdhani', 'Barlow Condensed', sans-serif" }}
          >
            Message Sent!
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
            Thank you for reaching out. Our team will get back to you within 24
            hours.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/8 border border-blue-500/20 hover:border-blue-500/40 rounded-xl text-slate-300 text-sm font-semibold transition-all duration-200"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={fadeUp}
      custom={2}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#060f1e] border border-blue-500/15 rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
      style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.4)" }}
      aria-label="Contact form"
      noValidate
    >
      {/* Form header */}
      <div className="mb-1">
        <h2
          className="text-white font-black text-xl sm:text-2xl mb-1"
          style={{ fontFamily: "'Rajdhani', 'Barlow Condensed', sans-serif" }}
        >
          Send Us a Message
        </h2>
        <p className="text-slate-500 text-sm">
          We'll get back to you within 24 hours.
        </p>
      </div>

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="firstName"
            className="text-slate-500 text-[10px] font-bold tracking-[0.18em] uppercase"
          >
            First Name{" "}
            <span className="text-blue-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="firstName"
            type="text"
            required
            className={inputCls}
            placeholder="John"
            value={form.firstName}
            onChange={(e) => set("firstName", e.target.value)}
            aria-required="true"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="lastName"
            className="text-slate-500 text-[10px] font-bold tracking-[0.18em] uppercase"
          >
            Last Name{" "}
            <span className="text-blue-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="lastName"
            type="text"
            required
            className={inputCls}
            placeholder="Doe"
            value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)}
            aria-required="true"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-slate-500 text-[10px] font-bold tracking-[0.18em] uppercase"
        >
          Email Address{" "}
          <span className="text-blue-500" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="email"
          type="email"
          required
          className={inputCls}
          placeholder="john@example.com"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          aria-required="true"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="phone"
          className="text-slate-500 text-[10px] font-bold tracking-[0.18em] uppercase"
        >
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          className={inputCls}
          placeholder="+234 000 000 0000"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
      </div>

      {/* Service select */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="service"
          className="text-slate-500 text-[10px] font-bold tracking-[0.18em] uppercase"
        >
          Service Required{" "}
          <span className="text-blue-500" aria-hidden="true">
            *
          </span>
        </label>
        <select
          id="service"
          required
          className={`${inputCls} cursor-pointer`}
          value={form.service}
          onChange={(e) => set("service", e.target.value)}
          aria-required="true"
        >
          <option value="">— Choose a service —</option>
          {SERVICES_LIST.map((s) => (
            <option key={s} value={s} className="bg-[#060f1e] text-slate-200">
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Property type */}
      <div className="flex flex-col gap-2">
        <span className="text-slate-500 text-[10px] font-bold tracking-[0.18em] uppercase">
          Property Type
        </span>
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5"
          role="group"
          aria-label="Select property type"
        >
          {PROPERTY_TYPES.map(({ label, icon }) => {
            const active = form.propertyTypes.includes(label);
            return (
              <button
                key={label}
                type="button"
                onClick={() => toggleProperty(label)}
                aria-pressed={active}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  active ?
                    "bg-blue-600/15 border-blue-500/45 text-blue-200"
                  : "bg-white/[0.02] border-blue-500/12 text-slate-400 hover:border-blue-500/30 hover:bg-blue-500/5"
                }`}
              >
                <span
                  className={`${active ? "text-blue-400" : "text-blue-600"}`}
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <span className="text-xs">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-slate-500 text-[10px] font-bold tracking-[0.18em] uppercase"
        >
          Message{" "}
          <span className="text-blue-500" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className={`${inputCls} resize-y min-h-[100px]`}
          placeholder="Tell us about your project — location, scope, timeline, or any specific requirements..."
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          aria-required="true"
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{
          scale: loading ? 1 : 1.02,
          boxShadow: "0 0 28px rgba(59,130,246,0.35)",
        }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        className="group relative w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-white text-[13px] font-bold overflow-hidden transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        style={{
          background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
          boxShadow: "0 0 0 1px rgba(96,165,250,0.2)",
        }}
        aria-label={loading ? "Sending message..." : "Send your message"}
      >
        <span
          className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700"
          aria-hidden="true"
        />
        {loading ?
          <>
            <svg
              className="animate-spin w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Sending…
          </>
        : <>
            <Send className="w-4 h-4" aria-hidden="true" />
            Send Message
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
              aria-hidden="true"
            />
          </>
        }
      </motion.button>

      {/* Privacy note */}
      <p className="text-center text-[11px] text-slate-600 flex items-center justify-center gap-1.5">
        <Shield className="w-3 h-3 text-blue-600" aria-hidden="true" />
        Your information is safe and will never be shared with third parties.
      </p>
    </motion.form>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function PageHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
      className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
    >
      <div className="inline-flex items-center gap-2.5 mb-5">
        <span
          className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500"
          aria-hidden="true"
        />
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
        </span>
        <span className="text-blue-400 text-[11px] font-bold tracking-[0.28em] uppercase">
          Get In Touch
        </span>
        <span
          className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500"
          aria-hidden="true"
        />
      </div>

      <h1
        className="text-white font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.06] tracking-tight mb-5"
        style={{ fontFamily: "'Rajdhani', 'Barlow Condensed', sans-serif" }}
      >
        Let's Build Something{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg,#93c5fd,#3b82f6,#1d4ed8)",
          }}
        >
          Powerful Together
        </span>
      </h1>

      <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
        Reach out to our team of experts for a free consultation, site
        assessment, or quotation on any of our electrical and smart security
        services.
      </p>
    </motion.div>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function ContactPage() {
  const INFO_CARDS: ContactInfoCard[] = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Phone & WhatsApp",
      primary: "+234 08036227782",
      secondary: "Available for calls and WhatsApp messages",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email Address",
      primary: "info@enamissystems.com",
      secondary: "We respond within 24 business hours",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Location",
      primary: "Lagos, Nigeria",
      secondary: "Serving clients across Lagos and nationwide",
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: "Business Hours",
      primary: "Mon – Sat",
      secondary: "Emergency support available 24/7",
      extra: <HoursTable />,
    },
  ];

  return (
    <main
      className="relative min-h-screen bg-[#02080f] overflow-x-hidden"
      aria-label="ENAMIS SYSTEMS contact page"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#02080f] via-[#030c1a] to-[#02080f]" />
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,.4) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-700/7 rounded-full blur-[130px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/6 rounded-full blur-[110px] translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-indigo-800/4 rounded-full blur-[160px]" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <PageHeader />

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-8 xl:gap-12">
          {/* ── LEFT: Info ── */}
          <div className="flex flex-col gap-5">
            {INFO_CARDS.map((card, i) => (
              <InfoCard key={card.title} card={card} index={i} />
            ))}

            {/* Services Quick Reference */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#060f1e] border border-blue-500/12 rounded-2xl p-5"
              style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.35)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white flex-shrink-0">
                  <MessageSquareText className="w-4 h-4" />
                </div>
                <h3
                  className="text-white font-bold text-[15px]"
                  style={{
                    fontFamily: "'Rajdhani', 'Barlow Condensed', sans-serif",
                  }}
                >
                  We Specialise In
                </h3>
              </div>
              <ul className="space-y-2">
                {SERVICE_ICONS.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center gap-2.5 py-2 px-3 bg-white/[0.02] border border-blue-500/8 rounded-lg"
                  >
                    <span
                      className={`flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-br ${s.color} text-white flex-shrink-0`}
                      aria-hidden="true"
                    >
                      {s.icon}
                    </span>
                    <span className="text-slate-400 text-[12.5px] font-medium">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── RIGHT: Form ── */}
          <ContactForm />
        </div>

        {/* ── Bottom social / quick contact strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 border-t border-blue-500/10 pt-10 flex flex-wrap items-center justify-center gap-4"
          aria-label="Quick contact links"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.03] hover:bg-blue-600/10 border border-blue-500/15 hover:border-blue-500/40 rounded-xl text-blue-400 hover:text-blue-300 text-[12.5px] font-semibold transition-all duration-200"
              aria-label={link.label}
              {...(link.href.startsWith("http") ?
                { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            >
              {link.icon}
              {link.label}
            </a>
          ))}

          <div className="w-full text-center mt-2">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} ENAMIS SYSTEMS · Lagos, Nigeria · All
              rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
