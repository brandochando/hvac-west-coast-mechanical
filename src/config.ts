// ============================================================
// config.ts — SINGLE SOURCE OF TRUTH
// Every brand-specific value lives here.
// Components import from this file — never hardcode below.
// The site_factory.py script patches ONLY this file.
// ============================================================

// ─── Brand Identity ───────────────────────────────────────────────────────────
export const BRAND_NAME       = "West Coast";          // e.g. "AirPro"
export const BRAND_FULL_NAME  = "West Coast Mechanical";           // e.g. "AirPro Heating & Air Conditioning"
export const BRAND_LEGAL_NAME = "West Coast Mechanical";          // e.g. "AirPro Heating & Air Conditioning, Inc."
export const BRAND_TAGLINE    = "Professional HVAC Service & Repair in San Jose";        // e.g. "Fast, Honest HVAC in San Jose"
export const BRAND_LICENSE    = "CSLB Licensed";  // e.g. "License #1069959"
export const BRAND_INITIALS   = "WCM";             // e.g. "AP" — used in decorative elements

// ─── Contact ──────────────────────────────────────────────────────────────────
export const PHONE_LABEL  = "";   // e.g. "(408) 898-6999"
export const PHONE_TEL    = "tel:14085551234";  // e.g. "tel:14088986999"
export const BRAND_EMAIL  = "alyssa@wc-mechanical.com";                    // e.g. "info@airpro.com"
export const BRAND_ADDRESS = "San Jose CA";                 // e.g. "1593 Trieste Way, San Jose, CA 95122"

// ─── Social Proof ─────────────────────────────────────────────────────────────
export const GOOGLE_RATING  = "5.0";   // e.g. "5.0"
export const GOOGLE_REVIEWS = "10+";  // e.g. "47"

// ─── Colors (CSS hex values) ──────────────────────────────────────────────────
export const PRIMARY_COLOR   = "#D03C41";   // brand accent — buttons, links, gold
export const SECONDARY_COLOR = "#0F2040";   // brand dark — nav, footer bg
export const TERTIARY_COLOR  = "#D4E2EC";   // brand soft — subtle backgrounds

// ─── Assets ───────────────────────────────────────────────────────────────────
export const BRAND_LOGO_DARK    = "/brand/logo.png";           // navbar + footer logo
export const HERO_BG_IMAGE      = "/brand/hero.jpg";           // hero section background
export const SERVICE_IMG_BEFORE = "/brand/service-before.jpg"; // before/after gallery — before
export const SERVICE_IMG_AFTER  = "/brand/install-after.jpg";  // before/after gallery — after

// ─── SEO / Browser Tab ────────────────────────────────────────────────────────
// NOTE: index.html <title> and <meta description> are also patched by factory.
// These vars drive dynamic og: tags if added later.
export const SEO_TITLE       = "West Coast Mechanical — San Jose HVAC";
export const SEO_DESCRIPTION = "West Coast Mechanical — San Jose's trusted HVAC professionals. Professional HVAC Service & Repair in San Jose.";
export const SEO_THEME_COLOR = PRIMARY_COLOR;

// ─── Hero Section ─────────────────────────────────────────────────────────────
export const HERO_HEADING_LINE1 = "Your comfort,";
export const HERO_HEADING_LINE2 = "handled right.";
export const HERO_SUBHEADING    = "San Jose's trusted HVAC specialists — fast diagnostics, same-day repairs, and full system installations backed by a 100% satisfaction guarantee.";
export const HERO_CTA_PRIMARY   = "Get a Free Quote";
export const HERO_CTA_SECONDARY = "Call ) -";   // patched to PHONE_LABEL
export const HERO_SIDE_RAIL_TEXT = "Serving Santa Clara County";
export const HERO_IMG_ALT       = "West Coast Mechanical technician servicing a residential HVAC system in San Jose";

// ─── Trust / Credential Strip (Hero bottom) ───────────────────────────────────
export const TRUST_ITEMS: { label: string }[] = [
  { label: "License #CSLB Licensed · C-20" },
  { label: "Licensed · Bonded · Insured" },
  { label: "Emergency Service Available" },
];

// ─── Trust Bar (4 pillars below hero) ────────────────────────────────────────
export const TRUST_PILLARS = [
  {
    num: "01",
    eyebrow: "Google Rating",
    title: "5.0 ★ · 10+",
    desc: "Bay Area homeowners rate our service the highest in San Jose.",
  },
  {
    num: "02",
    eyebrow: "Same-Day Service",
    title: "24/7 Dispatch",
    desc: "Book before 2pm and most homes are serviced the same day.",
  },
  {
    num: "03",
    eyebrow: "Credentials",
    title: "Licensed · NATE Certified",
    desc: "Bonded, insured, and background-checked technicians only.",
  },
  {
    num: "04",
    eyebrow: "The West Coast Promise",
    title: "100% Satisfaction Guarantee",
    desc: "On every repair, maintenance visit, and full system installation.",
  },
];

// ─── Services (6 cards) ───────────────────────────────────────────────────────
export const SERVICES = [
  {
    title: "A/C",
    desc: "Same-day diagnostics on any brand. Transparent upfront pricing, no diagnostic fee with repair.",
  },
  {
    title: "Heating",
    desc: "Gas, electric, and heat-pump systems — installed, serviced, and warrantied by certified pros.",
  },
  {
    title: "Mini Splits",
    desc: "HEPA, UV, and whole-home purification. Reduce allergens and wildfire smoke from day one.",
  },
  {
    title: "Radiant Heating",
    desc: "Duct cleaning, replacement, and rebalancing. Stop paying to cool rooms you don't use.",
  },
  {
    title: "Indoor Air Quality",
    desc: "Zoned thermostats and whole-home integration that cut utility bills without touching comfort.",
  },
  {
    title: "Maintenance Plans",
    desc: "Members get priority booking, 15% off repairs, and two seasonal precision tune-ups every year.",
  }
];

// ─── Specials (3 promo cards) ─────────────────────────────────────────────────
export const SPECIALS = [
  {
    badge: "Diagnostic",
    headline: "$49 Service Call",
    sub: "Waived with any repair. No hidden fees, ever.",
    fine: "New customers · Select areas",
  },
  {
    badge: "Tune-Up",
    headline: "$89 Precision Tune-Up",
    sub: "21-point inspection before the next heatwave — keeps your warranty valid.",
    fine: "Limited spring/fall availability",
  },
  {
    badge: "New Install",
    headline: "Up to $1,500 Off",
    sub: "On qualifying high-efficiency systems, stackable with 0% financing.",
    fine: "Pre-approved in under 60 seconds",
  },
];

// ─── Guarantee Promises (4 items) ─────────────────────────────────────────────
export const GUARANTEE_PROMISES = [
  { title: "100% Satisfaction", desc: "We don't leave until it's right. If you're not happy, you don't pay." },
  { title: "Upfront Pricing",   desc: "Flat-rate quotes approved before we start. No surprise charges, no hourly clock." },
  { title: "On-Time Promise",   desc: "We arrive inside your scheduled window or the service call is on us." },
  { title: "2-Year Labor Warranty", desc: "Every repair is covered for 2 full years. Parts warranty matches the manufacturer." },
];

// ─── Before / After Gallery ───────────────────────────────────────────────────
export const BEFORE_AFTER = [
  {
    label: "BEFORE",
    status: "20-YR-OLD UNIT · 58% EFFICIENCY",
    alt: "Technician servicing an aging residential AC system",
    image: SERVICE_IMG_BEFORE,
  },
  {
    label: "AFTER",
    status: "16-SEER HEAT PUMP · 48-HR INSTALL",
    alt: "New high-efficiency AC condenser cleanly installed on a home",
    image: SERVICE_IMG_AFTER,
  },
];

// ─── Testimonials (4 quotes) ──────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote: "Pat and his team are easy to work with, and are committed to meeting customers' needs!",
    author: "Steven C.",
    role: "Google Review · 5★",
  },
  {
    quote: "They did really good work. On time and helpful, answered all my questions and got my AC working again.",
    author: "Cliff D.",
    role: "Google Review · 5★",
  },
  {
    quote: "They are a quality company, who does exceptional work. “This is the best company I have ever worked with. I am recommending to all my friends and colleagues.”",
    author: "Ron B.",
    role: "Google Review · 5★",
  },
  {
    quote: "Very professional and knowledgeable. West Coast diagnosed an issue two other companies had missed.",
    author: "Sarah M.",
    role: "Google Review · 5★",
  }
];

// ─── Service Areas ────────────────────────────────────────────────────────────
export const SERVICE_AREAS = [
  "San Jose",
  "Santa Clara",
  "Sunnyvale",
  "Cupertino",
  "Campbell",
  "Los Gatos",
  "Milpitas",
  "Fremont",
  "Willow Glen",
  "Evergreen",
  "Berryessa",
  "Almaden",
  "East San Jose",
  "Alum Rock",
  "Morgan Hill",
  "Gilroy",
];

// ─── FAQ (6 questions) ────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    q: `Do you offer service in ${SERVICE_AREAS[0]} and the surrounding areas?`,
    a: `Yes — West Coast Mechanical has been proudly serving the area for years. Most appointments are booked the same week you call, and our service call department is open Monday through Friday, 8:00 AM – 5:00 PM.`,
  },
  {
    q: "Are you licensed, bonded, and insured?",
    a: `Absolutely. West Coast Mechanical is fully licensed, bonded, and insured. Every technician on our team is trained, professional, and treats your home with respect.`,
  },
  {
    q: "What does the 100% Satisfaction Guarantee actually cover?",
    a: "Our satisfaction guarantee applies to every repair, maintenance visit, and installation we perform. If you're not completely satisfied, we'll come back and make it right — that's our Promise, in writing.",
  },
  {
    q: "Do you offer financing for new systems?",
    a: "Yes. We offer flexible financing through our manufacturer partners on qualifying high-efficiency systems, including heat pumps and full AC and furnace replacements. Pre-qualification is fast and won't impact your credit score.",
  },
  {
    q: "What services do you provide?",
    a: "We provide A/C, Heating, Mini Splits, Radiant Heating, Indoor Air Quality — for both residential and commercial properties. Installations, replacements, repairs, and maintenance are all covered.",
  },
  {
    q: "What brands do you service?",
    a: "We're an independent contractor — meaning we service and install every major HVAC brand including Carrier, Lennox, Trane, Daikin, Mitsubishi, Rheem, Goodman, and American Standard. Existing manufacturer warranty? We'll honor it.",
  },
];
