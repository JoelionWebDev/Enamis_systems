"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Shield, CheckCircle2, AlertCircle } from "lucide-react";

type PropertyType = "Residential" | "Commercial" | "Industrial" | "Other";

const PROPERTY_TYPES: { label: PropertyType }[] = [
  { label: "Residential" }, { label: "Commercial" }, { label: "Industrial" }, { label: "Other" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.08 } }),
};

function ContactForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", service: "", propertyTypes: [] as PropertyType[], message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const toggleProperty = (pt: PropertyType) =>
    setForm((p) => ({ ...p, propertyTypes: p.propertyTypes.includes(pt) ? p.propertyTypes.filter((x) => x !== pt) : [...p.propertyTypes, pt] }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", propertyTypes: [], message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
    }
  };

  const inputCls = "w-full bg-surface-secondary border border-border-light hover:border-brand-blue/30 focus:border-brand-blue/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/15 rounded-xl px-4 py-3 text-[13px] text-content-primary placeholder-content-muted-2 transition-all duration-200";

  if (status === "success") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-surface-card border border-border-light rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[480px] gap-5">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dark flex items-center justify-center shadow-lg">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-content-primary font-heading font-black text-2xl mb-2">Message Sent!</h3>
          <p className="text-content-muted text-sm leading-relaxed max-w-xs mx-auto">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
        </div>
        <button onClick={() => setStatus("idle")}
          className="flex items-center gap-2 px-5 py-2.5 bg-surface-secondary hover:bg-surface-card-hover border border-border-light rounded-xl text-content-muted text-sm font-semibold transition-all duration-200">
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form onSubmit={handleSubmit} variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="bg-surface-card border border-border-light rounded-2xl p-6 sm:p-8 flex flex-col gap-5" noValidate>
      <div className="mb-1">
        <h2 className="text-content-primary font-heading font-black text-xl sm:text-2xl mb-1">Send Us a Message</h2>
        <p className="text-content-muted text-sm">We&apos;ll get back to you within 24 hours.</p>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-firstName" className="text-content-muted text-[10px] font-bold tracking-[0.18em] uppercase">First Name <span className="text-brand-blue">*</span></label>
          <input id="cf-firstName" type="text" required className={inputCls} placeholder="John" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-lastName" className="text-content-muted text-[10px] font-bold tracking-[0.18em] uppercase">Last Name <span className="text-brand-blue">*</span></label>
          <input id="cf-lastName" type="text" required className={inputCls} placeholder="Doe" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="text-content-muted text-[10px] font-bold tracking-[0.18em] uppercase">Email Address <span className="text-brand-blue">*</span></label>
        <input id="cf-email" type="email" required className={inputCls} placeholder="john@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-phone" className="text-content-muted text-[10px] font-bold tracking-[0.18em] uppercase">Phone Number</label>
        <input id="cf-phone" type="tel" className={inputCls} placeholder="+234 000 000 0000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-service" className="text-content-muted text-[10px] font-bold tracking-[0.18em] uppercase">Service Required <span className="text-brand-blue">*</span></label>
        <select id="cf-service" required className={`${inputCls} cursor-pointer`} value={form.service} onChange={(e) => set("service", e.target.value)}>
          <option value="">— Choose a service —</option>
          {["Electrical Installation", "Solar & Inverter Systems", "CCTV Installation", "Access Control Systems", "Fire Alarm Systems", "Multiple / Other Services"].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-content-muted text-[10px] font-bold tracking-[0.18em] uppercase">Property Type</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" role="group" aria-label="Select property type">
          {PROPERTY_TYPES.map(({ label }) => {
            const active = form.propertyTypes.includes(label);
            return (
              <button key={label} type="button" onClick={() => toggleProperty(label)} aria-pressed={active}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  active ? "bg-brand-blue/15 border-brand-blue/45 text-brand-blue-dark" : "bg-surface-secondary border-border-light text-content-muted hover:border-brand-blue/30"
                }`}>
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-content-muted text-[10px] font-bold tracking-[0.18em] uppercase">Message <span className="text-brand-blue">*</span></label>
        <textarea id="cf-message" required rows={4} className={`${inputCls} resize-y min-h-[100px]`}
          placeholder="Tell us about your project..." value={form.message} onChange={(e) => set("message", e.target.value)} />
      </div>

      <motion.button type="submit" disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.02, boxShadow: "0 0 28px rgba(37,99,235,0.3)" }}
        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        className="group relative w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-brand-blue text-white text-[13px] font-bold overflow-hidden transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed">
        <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700" aria-hidden="true" />
        {status === "loading" ? (
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>
        ) : (
          <><Send className="w-4 h-4" /> Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" /></>
        )}
      </motion.button>

      <p className="text-center text-[11px] text-content-muted-2 flex items-center justify-center gap-1.5">
        <Shield className="w-3 h-3 text-brand-blue" />
        Your information is safe and will never be shared.
      </p>
    </motion.form>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-surface-secondary py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-brand-blue" aria-hidden="true" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
            </span>
            <span className="text-brand-blue text-[11px] font-bold tracking-[0.28em] uppercase">Get In Touch</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-brand-blue" aria-hidden="true" />
          </div>
          <h2 className="text-content-primary font-heading font-black text-4xl sm:text-5xl lg:text-[56px] leading-[1.06] tracking-tight mb-5">
            Let&apos;s Build Something{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-blue to-brand-blue-dark">Powerful Together</span>
          </h2>
          <p className="text-content-muted text-base sm:text-lg leading-relaxed">
            Reach out for a free consultation, site assessment, or quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-8 xl:gap-12">
          <div className="flex flex-col gap-5">
            {[
              { icon: <Phone className="w-4 h-4" />, title: "Phone & WhatsApp", primary: "+234 08036227782", secondary: "Available for calls and WhatsApp messages" },
              { icon: <Mail className="w-4 h-4" />, title: "Email Address", primary: "enamissystems@gmail.com", secondary: "We respond within 24 business hours" },
              { icon: <MapPin className="w-4 h-4" />, title: "Location", primary: "Lagos, Nigeria", secondary: "Serving clients across Lagos and nationwide" },
              { icon: <Clock className="w-4 h-4" />, title: "Business Hours", primary: "Mon – Sat", secondary: "Emergency support available 24/7",
                extra: (
                  <div className="space-y-2 mt-2">
                    {[{ day: "Mon – Fri", time: "8:00 AM – 6:00 PM" }, { day: "Saturday", time: "9:00 AM – 4:00 PM" }].map(({ day, time }) => (
                      <div key={day} className="flex items-center justify-between py-1.5 border-b border-border-light">
                        <span className="text-content-muted text-xs">{day}</span>
                        <span className="text-brand-blue text-xs font-mono">{time}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-content-muted text-xs">Emergency</span>
                      <span className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-500 text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />24 / 7
                      </span>
                    </div>
                  </div>
                ),
              },
            ].map((card, i) => (
              <motion.div key={card.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="group bg-surface-card border border-border-light hover:border-brand-blue/30 rounded-2xl p-5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-blue-800 flex items-center justify-center text-white flex-shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-content-primary font-heading font-bold text-[15px]">{card.title}</h3>
                </div>
                <p className="text-brand-blue text-sm font-mono tracking-wide mb-1">{card.primary}</p>
                <p className="text-content-muted text-xs mb-2">{card.secondary}</p>
                {card.extra}
              </motion.div>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
