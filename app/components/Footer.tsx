import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-primary" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/enamis.png" alt="ENAMIS SYSTEMS" width={36} height={36} className="w-9 h-9 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-content-primary font-heading font-black tracking-[.18em] text-sm">ENAMIS</span>
                <span className="text-brand-blue text-[8px] tracking-[.32em] font-semibold">SYSTEMS</span>
              </div>
            </div>
            <p className="text-content-muted text-sm leading-relaxed max-w-sm">
              Professional electrical installation, solar/inverter solutions, CCTV surveillance, access control, and fire alarm systems for homes and businesses across Nigeria.
            </p>
          </div>

          <div>
            <h4 className="text-content-primary font-bold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[{ label: "Home", href: "/" }, { label: "Services", href: "#services" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-content-muted hover:text-content-primary text-sm transition-colors duration-150">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-content-primary font-bold text-xs uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li><a href="tel:+2348036227782" className="text-content-muted hover:text-content-primary text-sm transition-colors duration-150">+234 08036227782</a></li>
              <li><a href="mailto:enamissystems@gmail.com" className="text-content-muted hover:text-content-primary text-sm transition-colors duration-150">enamissystems@gmail.com</a></li>
              <li className="text-content-muted text-sm">Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-light pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-content-muted-2 text-xs">© {new Date().getFullYear()} ENAMIS SYSTEMS · Lagos, Nigeria · All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Services", "About", "Contact"].map((l) => (
              <Link key={l} href={l === "Services" ? "#services" : `/${l.toLowerCase()}`}
                className="text-content-muted-2 hover:text-content-muted text-xs transition-colors duration-150">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
