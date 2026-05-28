"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Sun,
  Camera,
  ShieldCheck,
  Flame,
  Phone,
  MessageSquare,
  ChevronDown,
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  Mail,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavService {
  icon: React.ReactNode;
  label: string;
  desc: string;
  href: string;
}

interface NavLinkItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: NavService[] = [
  {
    icon: <Zap className="w-4 h-4" />,
    label: "Electrical Installation",
    desc: "Residential & commercial wiring",
    href: "#electrical",
  },
  {
    icon: <Sun className="w-4 h-4" />,
    label: "Solar & Inverter Systems",
    desc: "Clean, reliable power solutions",
    href: "#solar",
  },
  {
    icon: <Camera className="w-4 h-4" />,
    label: "CCTV Installation",
    desc: "HD surveillance & monitoring",
    href: "#cctv",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    label: "Access Control",
    desc: "Smart entry & biometric systems",
    href: "#access",
  },
  {
    icon: <Flame className="w-4 h-4" />,
    label: "Fire Alarm Systems",
    desc: "Detection & safety installations",
    href: "#fire",
  },
];

const NAV_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "/contact" },
];

const MOBILE_LINKS = [
  { icon: <Home className="w-4 h-4" />, label: "Home", href: "/" },
  {
    icon: <Zap className="w-4 h-4" />,
    label: "Electrical Installation",
    href: "#electrical",
  },
  {
    icon: <Sun className="w-4 h-4" />,
    label: "Solar & Inverter Systems",
    href: "#solar",
  },
  {
    icon: <Camera className="w-4 h-4" />,
    label: "CCTV Installation",
    href: "#cctv",
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    label: "Access Control",
    href: "#access",
  },
  {
    icon: <Flame className="w-4 h-4" />,
    label: "Fire Alarm Systems",
    href: "#fire",
  },
  { icon: <Info className="w-4 h-4" />, label: "About Us", href: "#about" },
  {
    icon: <Briefcase className="w-4 h-4" />,
    label: "Projects",
    href: "#projects",
  },
  { icon: <Mail className="w-4 h-4" />, label: "Contact", href: "#contact" },
];

// ─── Services Dropdown ────────────────────────────────────────────────────────

function ServicesDropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.97 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[260px] bg-[#040d1c]/97 border border-blue-500/20 rounded-2xl p-2 shadow-2xl shadow-blue-950/60 z-50"
          role="menu"
          aria-label="Services submenu"
        >
          {SERVICES.map((s, i) => (
            <div key={s.label}>
              {i === 2 && (
                <div
                  className="my-1.5 h-px bg-blue-500/10 mx-1"
                  aria-hidden="true"
                />
              )}
              <Link
                href={s.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-500/10 transition-colors duration-150 group"
                role="menuitem"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:bg-blue-600/25 transition-colors">
                  {s.icon}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-slate-200 leading-tight">
                    {s.label}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                    {s.desc}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          className="overflow-hidden border-t border-blue-500/12 bg-[#030a14]/98"
          role="navigation"
          aria-label="Mobile navigation"
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
                  className="flex items-center gap-3 py-3 text-[13px] font-medium text-slate-400 hover:text-white border-b border-blue-500/7 last:border-b-0 transition-colors duration-150"
                >
                  <span className="text-blue-500 w-5 flex-shrink-0">
                    {link.icon}
                  </span>
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: MOBILE_LINKS.length * 0.04 + 0.05 }}
              className="flex flex-col gap-3 mt-5"
            >
              <Link
                href="tel:+2348036227782"
                onClick={onClose}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-blue-500/25 text-blue-400 text-[12px] font-mono tracking-wide hover:bg-blue-600/10 transition-colors"
                aria-label="Call ENAMIS SYSTEMS"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                +234 08036227782
              </Link>
              <button
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-white text-[13px] font-bold transition-all"
                style={{
                  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                }}
                aria-label="Get a free quote"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                Get Free Quote
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ?
          "bg-[#02080f]/95 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-950/30"
        : "bg-transparent border-b border-blue-500/10"
      }`}
      role="banner"
    >
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 sm:h-[70px]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="ENAMIS SYSTEMS — Home"
            >
              <div className="relative">
                <Image
                  src="/enamis.png"
                  alt="ENAMIS SYSTEMS logo"
                  width={40}
                  height={40}
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-black tracking-[.18em] text-[15px] sm:text-[16px]"
                  style={{
                    fontFamily: "'Rajdhani', 'Barlow Condensed', sans-serif",
                  }}
                >
                  ENAMIS
                </span>
                <span className="text-blue-400 text-[9px] tracking-[.32em] font-semibold mt-[2px]">
                  SYSTEMS
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) =>
              link.hasDropdown ?
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    className={`relative flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-150 ${
                      activeLink === link.label ?
                        "text-blue-400 bg-blue-500/10"
                      : "text-slate-400 hover:text-white hover:bg-blue-500/8"
                    }`}
                    onClick={() => {
                      setServicesOpen((v) => !v);
                      setActiveLink(link.label);
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                    {activeLink === link.label && (
                      <span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <ServicesDropdown isOpen={servicesOpen} />
                  </div>
                </div>
              : <Link
                  key={link.label}
                  href={link.href!}
                  onClick={() => setActiveLink(link.label)}
                  className={`relative px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-150 ${
                    activeLink === link.label ?
                      "text-blue-400 bg-blue-500/10"
                    : "text-slate-400 hover:text-white hover:bg-blue-500/8"
                  }`}
                >
                  {link.label}
                  {activeLink === link.label && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400"
                      aria-hidden="true"
                    />
                  )}
                </Link>,
            )}
          </motion.nav>

          {/* Desktop right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:flex items-center gap-3"
          >
            <Link
              href="tel:+2348036227782"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-blue-500/20 text-blue-400 hover:text-blue-300 hover:bg-blue-600/10 hover:border-blue-500/45 transition-all duration-200 text-[11.5px] font-mono tracking-wide"
              aria-label="Call ENAMIS SYSTEMS: +234 08036227782"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              +234 08036227782
            </Link>

            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(59,130,246,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-[12px] font-bold transition-all duration-200 overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                boxShadow: "0 0 0 1px rgba(96,165,250,0.2)",
              }}
              aria-label="Get a free quote"
            >
              {/* shimmer */}
              <span
                className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700"
                aria-hidden="true"
              />
              <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
              Get Free Quote
            </motion.button>
          </motion.div>

          {/* Mobile toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-blue-500/20 bg-white/3 text-blue-400 hover:bg-blue-600/10 transition-all duration-200"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ?
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              : <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(59,130,246,0.35),transparent)",
        }}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
