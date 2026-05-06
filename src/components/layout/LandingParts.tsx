import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Phone, Menu, X, ArrowRight, Star, ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  BRAND_NAME, BRAND_FULL_NAME, BRAND_LOGO_DARK, BRAND_LICENSE,
  PHONE_LABEL, PHONE_TEL,
  GOOGLE_RATING, GOOGLE_REVIEWS,
  HERO_BG_IMAGE, HERO_HEADING_LINE1, HERO_HEADING_LINE2,
  HERO_SUBHEADING, HERO_CTA_PRIMARY, HERO_SIDE_RAIL_TEXT, HERO_IMG_ALT,
  TRUST_PILLARS, TESTIMONIALS, BRAND_INITIALS,
} from "../../config";

// ─── Utility Bar ──────────────────────────────────────────────────────────────
const UtilityBar = () => (
  <div className="fixed top-0 left-0 w-full z-[51] bg-charcoal text-white/90 text-[10px] tracking-[0.2em] uppercase font-semibold border-b border-white/5">
    <div className="container mx-auto px-6 lg:px-12 h-9 flex items-center justify-between gap-6">
      <div className="hidden md:flex items-center gap-6 text-white/80">
        <span className="inline-flex items-center gap-2"><Clock aria-hidden="true" size={12} className="text-luxury-gold" /> Same-Day Service · 24/7</span>
        <span aria-hidden="true" className="h-3 w-px bg-white/10" />
        <span className="inline-flex items-center gap-2"><ShieldCheck aria-hidden="true" size={12} className="text-luxury-gold" /> Licensed · Bonded · Insured</span>
        <span aria-hidden="true" className="h-3 w-px bg-white/10" />
        <span className="inline-flex items-center gap-2"><BadgeCheck aria-hidden="true" size={12} className="text-luxury-gold" /> 100% Satisfaction Guarantee</span>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <span className="hidden sm:inline-flex items-center gap-1.5 text-white/80">
          <Star aria-hidden="true" size={12} className="text-luxury-gold fill-luxury-gold" />
          <span className="text-white">{GOOGLE_RATING}</span>
          <span className="text-white/50 normal-case tracking-normal">on Google · {GOOGLE_REVIEWS} reviews</span>
        </span>
        <a href={PHONE_TEL} className="inline-flex items-center gap-2 text-luxury-gold hover:text-white transition-colors">
          <Phone aria-hidden="true" size={12} /> {PHONE_LABEL}
        </a>
      </div>
    </div>
  </div>
);

// ─── Header ───────────────────────────────────────────────────────────────────
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services",     href: "#services" },
    { name: "Specials",     href: "#specials" },
    { name: "Guarantee",    href: "#guarantee" },
    { name: "Financing",    href: "#financing" },
    { name: "Service Area", href: "#service-area" },
  ];

  return (
    <header
      role="banner"
      className={`fixed top-9 left-0 w-full z-50 transition-all duration-500 h-20 flex items-center justify-between px-6 lg:px-12 border-b ${
        isScrolled ? "bg-stone/90 backdrop-blur-md text-charcoal border-charcoal/5" : "bg-transparent text-stone border-white/10"
      }`}
    >
      <a href="#" aria-label={`${BRAND_FULL_NAME} — home`} className="flex items-center group transition-colors">
        <img
          src={BRAND_LOGO_DARK}
          alt={BRAND_FULL_NAME}
          className="max-h-12 max-w-[200px] md:max-h-14 md:max-w-[240px] w-auto h-auto object-contain transition-[filter] duration-500"
          style={{ filter: isScrolled ? "none" : "drop-shadow(0 1px 6px rgba(0,0,0,0.55))" }}
          width={200} height={44}
        />
      </a>

      <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-[10px] font-semibold uppercase tracking-widest hover:text-luxury-gold transition-colors">
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3 sm:gap-5">
        <a
          href={PHONE_TEL}
          className={`hidden md:inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
            isScrolled ? "text-charcoal hover:text-luxury-gold" : "text-stone hover:text-luxury-gold"
          }`}
        >
          <Phone aria-hidden="true" size={14} /> {PHONE_LABEL}
        </a>
        <a
          href="#contact"
          className={`hidden sm:block px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm ${
            isScrolled ? "bg-charcoal text-white hover:bg-luxury-gold" : "bg-luxury-gold text-white hover:bg-white hover:text-charcoal"
          }`}
        >
          Book Same-Day Service
        </a>
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          className="lg:hidden p-2 transition-colors relative before:content-[''] before:absolute before:inset-[-6px]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-stone border-t border-charcoal/5 p-6 lg:hidden flex flex-col gap-6 shadow-xl text-charcoal"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium tracking-tight border-b border-charcoal/5 pb-2" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href={PHONE_TEL} className="w-full py-4 border border-charcoal/10 text-charcoal text-center font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <Phone aria-hidden="true" size={14} /> Call {PHONE_LABEL}
            </a>
            <a href="#contact" className="w-full py-4 bg-luxury-gold text-white text-center font-bold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
              Book Same-Day Service
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={sectionRef} aria-label="Hero" className="relative h-screen flex items-center overflow-hidden bg-charcoal">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          role="img" aria-label={HERO_IMG_ALT}
          className="absolute inset-0 w-full bg-cover bg-center brightness-[0.45]"
          style={{ backgroundImage: `url('${HERO_BG_IMAGE}')`, y: bgY, height: "130%", top: "-15%" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-white/15 bg-white/5 backdrop-blur-sm">
              <span aria-hidden="true" className="flex items-center gap-0.5 text-luxury-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-luxury-gold" />)}
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white">
                <span className="sr-only">Rated </span>{GOOGLE_RATING}/5
                <span className="text-white/50 font-normal tracking-normal normal-case ml-2">· {GOOGLE_REVIEWS} Google reviews · San Jose & Bay Area</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[108px] font-light leading-[0.9] mb-8 tracking-tighter text-white">
              {HERO_HEADING_LINE1}<br />
              <span className="font-bold italic">{HERO_HEADING_LINE2}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl font-light leading-relaxed">
              {HERO_SUBHEADING}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-10 py-5 bg-luxury-gold text-white text-[11px] font-bold uppercase tracking-widest border border-luxury-gold hover:bg-transparent hover:text-white transition-all duration-500 shadow-2xl text-center inline-flex items-center justify-center gap-3">
                {HERO_CTA_PRIMARY} <ArrowRight aria-hidden="true" size={14} />
              </a>
              <a href={PHONE_TEL} className="px-10 py-5 border border-white/25 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-500 text-center inline-flex items-center justify-center gap-3">
                <Phone aria-hidden="true" size={14} /> Call {PHONE_LABEL}
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] font-semibold tracking-[0.25em] uppercase text-white/60">
              <li className="inline-flex items-center gap-2"><BadgeCheck aria-hidden="true" size={14} className="text-luxury-gold" /> {BRAND_LICENSE} · C-20</li>
              <li className="inline-flex items-center gap-2"><ShieldCheck aria-hidden="true" size={14} className="text-luxury-gold" /> Licensed · Bonded · Insured</li>
              <li className="inline-flex items-center gap-2"><Clock aria-hidden="true" size={14} className="text-luxury-gold" /> Emergency Service Available</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Floating Promo Card */}
      <motion.a
        href="#financing"
        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 right-6 lg:right-12 p-8 bg-white/5 backdrop-blur-xl text-white shadow-2xl max-w-xs border border-white/10 hidden md:block hover:bg-white/10 transition-colors"
      >
        <span className="text-[9px] font-bold tracking-widest uppercase text-luxury-gold block mb-2">Limited-Time Offer</span>
        <h3 className="text-xl font-bold mb-2">$0 Down · 0% APR · 60 Mo</h3>
        <p className="text-[10px] leading-relaxed opacity-70">New system install financing on approved credit. Pre-qualify in under 60 seconds.</p>
        <span className="inline-flex items-center gap-1 mt-3 text-[10px] font-bold tracking-widest uppercase">
          Check Eligibility <ArrowRight aria-hidden="true" size={12} />
        </span>
      </motion.a>

      {/* Scroll indicator */}
      <motion.div aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>

      {/* Side Rail */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col space-y-8 pr-6 z-30">
        <div className="[writing-mode:vertical-rl] rotate-180 flex items-center space-x-6">
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">{HERO_SIDE_RAIL_TEXT}</span>
          <div className="h-20 w-px bg-white/10"></div>
          <a href={PHONE_TEL} className="text-xs font-bold tracking-widest text-white/40 hover:text-luxury-gold transition-colors">{PHONE_LABEL}</a>
        </div>
      </div>
    </section>
  );
};

// ─── Trust Bar ────────────────────────────────────────────────────────────────
const iconMap = [
  <Star aria-hidden="true" className="w-5 h-5 fill-luxury-gold text-luxury-gold" />,
  <Clock aria-hidden="true" className="w-5 h-5 text-luxury-gold" />,
  <BadgeCheck aria-hidden="true" className="w-5 h-5 text-luxury-gold" />,
  <ShieldCheck aria-hidden="true" className="w-5 h-5 text-luxury-gold" />,
];

const TrustBar = () => (
  <section aria-label={`Why homeowners choose ${BRAND_FULL_NAME}`} className="bg-white border-t border-charcoal/5 px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-charcoal/5">
    {TRUST_PILLARS.map((point, i) => (
      <motion.div
        key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.08, duration: 0.6 }} viewport={{ once: true }}
        className="flex flex-col justify-center py-10 lg:py-16 px-6"
      >
        <div className="flex items-center gap-3 mb-4">
          {iconMap[i]}
          <span className="text-[9px] font-bold tracking-[0.25em] text-luxury-gold uppercase">{point.num} · {point.eyebrow}</span>
        </div>
        <h3 className="text-lg font-bold tracking-tight uppercase">{point.title}</h3>
        <p className="text-xs text-charcoal/50 mt-2 leading-relaxed">{point.desc}</p>
      </motion.div>
    ))}
  </section>
);

// ─── Testimonials ─────────────────────────────────────────────────────────────
const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section aria-label="Client testimonials" className="py-32 bg-charcoal text-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <div className="md:w-1/3">
            <span className="text-luxury-gold text-[10px] font-bold tracking-[0.4em] uppercase block mb-6 inline-flex items-center gap-2">
              <Star aria-hidden="true" size={12} className="fill-luxury-gold" /> {GOOGLE_RATING} · {GOOGLE_REVIEWS} Google Reviews
            </span>
            <h2 className="text-4xl font-light leading-tight mb-6">Trusted by <br /><span className="font-bold italic">San Jose Homeowners</span></h2>
            <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-xs">
              Real reviews from real neighbors across San Jose, Milpitas, Fremont, and the greater Bay Area.
            </p>
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(BRAND_FULL_NAME + " San Jose reviews")}`}
              target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold hover:text-white transition-colors mb-10"
            >
              Read All Reviews <ArrowRight aria-hidden="true" size={12} />
            </a>
            <div role="tablist" aria-label="Select testimonial" className="flex gap-4">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i} type="button" role="tab" aria-selected={active === i}
                  aria-label={`Show testimonial from ${t.author}`}
                  onClick={() => setActive(i)}
                  className={`relative w-12 h-1 bg-white/20 transition-all duration-500 before:content-[''] before:absolute before:inset-x-0 before:inset-y-[-20px] ${active === i ? "bg-luxury-gold w-24" : ""}`}
                />
              ))}
            </div>
          </div>

          <div role="tabpanel" aria-live="polite" className="md:w-2/3 border-l border-white/10 pl-12 md:pl-24 py-12">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-2xl md:text-4xl font-light italic leading-relaxed mb-12">
                  "{TESTIMONIALS[active].quote}"
                </blockquote>
                <figcaption>
                  <p className="text-lg font-bold tracking-tighter">{TESTIMONIALS[active].author}</p>
                  <p className="text-xs font-mono text-white/30 uppercase tracking-widest mt-2">{TESTIMONIALS[active].role}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* Decorative initials */}
      <div aria-hidden="true" className="absolute -bottom-12 -right-12 text-[15vw] font-bold text-white/[0.02] leading-none pointer-events-none select-none">
        {BRAND_INITIALS}°
      </div>
    </section>
  );
};

export { UtilityBar, Header, Hero, TrustBar, Testimonials };
