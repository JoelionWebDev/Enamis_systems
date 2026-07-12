"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap, Sun, Camera, ShieldCheck, Flame,
  Phone, MessageSquare, ChevronDown, Menu, X,
  Home,
  Info,
  Mail,
  Radio,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavService {
  icon: React.ReactNode;
  label: string;
  desc: string;
  href: string;
  image: string;
}

const SERVICES: NavService[] = [
  { icon: <Zap className="w-4 h-4" />, label: "Electrical Installation", desc: "Residential & commercial wiring", href: "/services/electrical", image: "/elect.png" },
  { icon: <Sun className="w-4 h-4" />, label: "Solar & Inverter Systems", desc: "Clean, reliable power solutions", href: "/services/solar", image: "/sola.png" },
  { icon: <Camera className="w-4 h-4" />, label: "CCTV Installation", desc: "HD surveillance & monitoring", href: "/services/cctv", image: "/cctv.png" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "Access Control", desc: "Smart entry & biometric systems", href: "/services/access-control", image: "/smartaccess.png" },
  { icon: <Flame className="w-4 h-4" />, label: "Fire Alarm Systems", desc: "Detection & safety installations", href: "/services/fire-alarm", image: "/fire.png" },
  { icon: <Home className="w-4 h-4" />, label: "Home Automation", desc: "Smart living & voice control", href: "/services/home-automation", image: "/project1.jpeg" },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const MOBILE_LINKS = [
  { icon: <Home className="w-4 h-4" />, label: "Home", href: "/" },
  { icon: <Zap className="w-4 h-4" />, label: "Electrical Installation", href: "/services/electrical" },
  { icon: <Sun className="w-4 h-4" />, label: "Solar & Inverter Systems", href: "/services/solar" },
  { icon: <Camera className="w-4 h-4" />, label: "CCTV Installation", href: "/services/cctv" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "Access Control", href: "/services/access-control" },
  { icon: <Flame className="w-4 h-4" />, label: "Fire Alarm Systems", href: "/services/fire-alarm" },
  { icon: <Radio className="w-4 h-4" />, label: "Home Automation", href: "/services/home-automation" },
  { icon: <Info className="w-4 h-4" />, label: "About Us", href: "/about" },
  { icon: <Mail className="w-4 h-4" />, label: "Contact", href: "/contact" },
];

function ServicesDropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.97 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[280px] bg-surface-elevated border border-border-light rounded-2xl p-2 shadow-xl z-50"
          role="menu"
        >
          {SERVICES.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-blue/5 transition-colors duration-150 group"
              role="menuitem"
            >
              <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 bg-surface-secondary border border-border-light">
                <Image src={s.image} alt="" width={36} height={36} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-content-primary leading-tight">{s.label}</p>
                <p className="text-[10px] text-content-muted mt-0.5 leading-tight">{s.desc}</p>
              </div>
            </Link>
          ))}
          <Link
            href="/services"
            className="flex items-center justify-center gap-1.5 mt-1.5 px-3 py-2.5 rounded-xl bg-brand-blue/5 border border-border-light text-brand-blue text-[11px] font-bold tracking-wide hover:bg-brand-blue/10 transition-colors duration-150"
            role="menuitem"
          >
            <ChevronDown className="w-3 h-3 rotate-90" />
            View All Services
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          className="overflow-hidden border-t border-border-light bg-surface-primary/98"
          role="navigation"
        >
          <div className="px-5 pt-3 pb-5">
            {MOBILE_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.22 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center gap-3 py-3 text-[13px] font-medium text-content-muted hover:text-content-primary border-b border-border-light last:border-b-0 transition-colors duration-150"
                >
                  <span className="text-brand-blue w-5 flex-shrink-0">{link.icon}</span>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: MOBILE_LINKS.length * 0.04 + 0.05 }}
              className="flex flex-col gap-3 mt-5"
            >
              <Link
                href="tel:+2348036227782"
                onClick={onClose}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-border-med text-brand-blue text-[12px] font-mono tracking-wide hover:bg-brand-blue/5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                +234 08036227782
              </Link>
              <button
                onClick={onClose}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-blue text-white text-[13px] font-bold transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Get Quote
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-nav backdrop-blur-xl border-b border-border-light shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 sm:h-[70px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="ENAMIS SYSTEMS — Home">
              <Image
                src="/enamis.png"
                alt="ENAMIS SYSTEMS logo"
                width={40}
                height={40}
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-all duration-300"
                priority
              />
              <div className="flex flex-col leading-none">
                <span className="text-content-primary font-black tracking-[.18em] text-[15px] sm:text-[16px] font-heading">
                  ENAMIS
                </span>
                <span className="text-brand-blue text-[9px] tracking-[.32em] font-semibold mt-[2px]">
                  SYSTEMS
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:flex items-center gap-1"
          >
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    className={`relative flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-150 ${
                      activeLink === link.label
                        ? "text-brand-blue bg-brand-blue/10"
                        : "text-content-muted hover:text-content-primary hover:bg-brand-blue/5"
                    }`}
                    onClick={() => { setServicesOpen((v) => !v); setActiveLink(link.label); }}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                    <ServicesDropdown isOpen={servicesOpen} />
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  onClick={() => setActiveLink(link.label)}
                  className={`relative px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-150 ${
                    activeLink === link.label
                      ? "text-brand-blue bg-brand-blue/10"
                      : "text-content-muted hover:text-content-primary hover:bg-brand-blue/5"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:flex items-center gap-2"
          >
            <ThemeToggle />
            <Link
              href="tel:+2348036227782"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border-med text-brand-blue hover:text-brand-blue-dark hover:bg-brand-blue/5 transition-all duration-200 text-[11.5px] font-mono tracking-wide"
            >
              <Phone className="w-3.5 h-3.5" />
              +234 08036227782
            </Link>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(59,130,246,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-blue text-white text-[12px] font-bold overflow-hidden"
            >
              <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700" />
              <MessageSquare className="w-3.5 h-3.5" />
              Get Quote
            </motion.button>
          </motion.div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setMobileOpen((v) => !v)}
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-border-light text-content-muted hover:text-brand-blue hover:bg-brand-blue/5 transition-all duration-200"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
