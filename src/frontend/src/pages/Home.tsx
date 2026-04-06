import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  CheckCircle,
  Download,
  ExternalLink,
  Globe,
  Loader2,
  Phone,
  Star,
  Users,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import SEOHead from "../components/SEOHead";
import { useActor } from "../hooks/useActor";

const stats = [
  { icon: Award, value: "10+", label: "Years of Excellence" },
  { icon: Users, value: "2,000+", label: "Students Placed" },
  { icon: Globe, value: "9+", label: "Countries" },
  { icon: BookOpen, value: "50+", label: "Partner Universities" },
];

const countries = [
  {
    name: "Kyrgyzstan",
    flag: "\uD83C\uDDF0\uD83C\uDDEC",
    path: "/kyrgyzstan",
    featured: true,
    fee: "$3,000-5,000/yr",
    desc: "Most affordable MBBS destination with NMC recognition",
    image: "/assets/generated/kyrgyzstan-hero.dim_1200x600.jpg",
  },
  {
    name: "Russia",
    flag: "\uD83C\uDDF7\uD83C\uDDFA",
    path: "/russia",
    fee: "$4,000-6,000/yr",
    desc: "World-class medical education since 1755",
    image: "/assets/generated/russia-hero.dim_1200x600.jpg",
  },
  {
    name: "Georgia",
    flag: "\uD83C\uDDEC\uD83C\uDDEA",
    path: "/georgia",
    fee: "$5,000-7,000/yr",
    desc: "European standard education at Asian prices",
    image: "/assets/generated/georgia-hero.dim_1200x600.jpg",
  },
  {
    name: "Kazakhstan",
    flag: "\uD83C\uDDF0\uD83C\uDDFF",
    path: "/kazakhstan",
    fee: "$3,500-5,500/yr",
    desc: "Rapidly growing medical education hub",
    image: "/assets/generated/kazakhstan-hero.dim_1200x600.jpg",
  },
  {
    name: "Philippines",
    flag: "\uD83C\uDDF5\uD83C\uDDED",
    path: "/philippines",
    fee: "$4,000-6,000/yr",
    desc: "English-medium MBBS with US curriculum",
    image: "/assets/generated/philippines-hero.dim_1200x600.jpg",
  },
  {
    name: "Bangladesh",
    flag: "\uD83C\uDDE7\uD83C\uDDE9",
    path: "/bangladesh",
    fee: "$3,000-5,000/yr",
    desc: "Closest neighbor with affordable medical education",
    image: "/assets/generated/bangladesh-hero.dim_1200x600.jpg",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    country: "Kyrgyzstan",
    university: "Osh State Medical University",
    text: "Choosing VGLOBAL was the turning point in my life. The team handled everything from my application to hostel booking. I'm now completing my 3rd year at Osh State Medical University and couldn't be happier!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    country: "Russia",
    university: "Kazan Federal University",
    text: "I was confused about which country to choose for MBBS. VGLOBAL's counsellors spent hours with me explaining the pros and cons. Now I'm at Kazan Federal University — absolutely no regrets.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    country: "Georgia",
    university: "Tbilisi State Medical University",
    text: "What sets VGLOBAL apart is their honesty. No false promises, no hidden fees. They told me exactly what to expect and delivered on every word. I'd recommend them to any NEET student.",
    rating: 5,
  },
];

const statsBoxes = [
  { value: "10+", label: "Years of Excellence" },
  { value: "2,000+", label: "Happy Students" },
  { value: "50+", label: "Partner Universities" },
  { value: "9+", label: "Countries Covered" },
];

const universityMarquee = [
  {
    name: "Modern Medical University",
    country: "\uD83C\uDDF0\uD83C\uDDEC Kyrgyzstan",
    logo: "/assets/generated/logo-mmu-jalalabad.dim_200x200.png",
  },
  {
    name: "Osh State Medical University",
    country: "\uD83C\uDDF0\uD83C\uDDEC Kyrgyzstan",
    logo: "/assets/generated/logo-osmu.dim_200x200.png",
  },
  {
    name: "Kyrgyz State Medical Academy",
    country: "\uD83C\uDDF0\uD83C\uDDEC Kyrgyzstan",
    logo: "/assets/generated/logo-ksma.dim_200x200.png",
  },
  {
    name: "Sechenov University",
    country: "\uD83C\uDDF7\uD83C\uDDFA Russia",
    logo: "/assets/generated/logo-sechenov.dim_200x200.png",
  },
  {
    name: "Kazan Federal University",
    country: "\uD83C\uDDF7\uD83C\uDDFA Russia",
    logo: "/assets/generated/logo-kazan-federal.dim_200x200.png",
  },
  {
    name: "Tbilisi State Medical University",
    country: "\uD83C\uDDEC\uD83C\uDDEA Georgia",
    logo: "/assets/generated/logo-tsmu.dim_200x200.png",
  },
  {
    name: "Samarkand State Medical University",
    country: "\uD83C\uDDFA\uD83C\uDDFF Uzbekistan",
    logo: "/assets/generated/logo-samarkand.dim_200x200.png",
  },
  {
    name: "Kazakh National Medical University",
    country: "\uD83C\uDDF0\uD83C\uDDFF Kazakhstan",
    logo: "/assets/generated/logo-kaznmu.dim_200x200.png",
  },
  {
    name: "University of Santo Tomas",
    country: "\uD83C\uDDF5\uD83C\uDDED Philippines",
    logo: "/assets/generated/logo-ust-philippines.dim_200x200.png",
  },
  {
    name: "Kharkiv National Medical University",
    country: "\uD83C\uDDFA\uD83C\uDDE6 Ukraine",
    logo: "/assets/generated/logo-knmu.dim_200x200.png",
  },
  {
    name: "Dhaka Medical College",
    country: "\uD83C\uDDE7\uD83C\uDDE9 Bangladesh",
    logo: "/assets/generated/logo-dhaka-medical.dim_200x200.png",
  },
  {
    name: "Modern Medical University",
    country: "\uD83C\uDDF0\uD83C\uDDEC Kyrgyzstan",
    logo: "/assets/generated/logo-mmu-jalalabad.dim_200x200.png",
  },
  {
    name: "Osh State Medical University",
    country: "\uD83C\uDDF0\uD83C\uDDEC Kyrgyzstan",
    logo: "/assets/generated/logo-osmu.dim_200x200.png",
  },
  {
    name: "Kyrgyz State Medical Academy",
    country: "\uD83C\uDDF0\uD83C\uDDEC Kyrgyzstan",
    logo: "/assets/generated/logo-ksma.dim_200x200.png",
  },
  {
    name: "Sechenov University",
    country: "\uD83C\uDDF7\uD83C\uDDFA Russia",
    logo: "/assets/generated/logo-sechenov.dim_200x200.png",
  },
  {
    name: "Kazan Federal University",
    country: "\uD83C\uDDF7\uD83C\uDDFA Russia",
    logo: "/assets/generated/logo-kazan-federal.dim_200x200.png",
  },
  {
    name: "Tbilisi State Medical University",
    country: "\uD83C\uDDEC\uD83C\uDDEA Georgia",
    logo: "/assets/generated/logo-tsmu.dim_200x200.png",
  },
  {
    name: "Samarkand State Medical University",
    country: "\uD83C\uDDFA\uD83C\uDDFF Uzbekistan",
    logo: "/assets/generated/logo-samarkand.dim_200x200.png",
  },
  {
    name: "Kazakh National Medical University",
    country: "\uD83C\uDDF0\uD83C\uDDFF Kazakhstan",
    logo: "/assets/generated/logo-kaznmu.dim_200x200.png",
  },
  {
    name: "University of Santo Tomas",
    country: "\uD83C\uDDF5\uD83C\uDDED Philippines",
    logo: "/assets/generated/logo-ust-philippines.dim_200x200.png",
  },
];

function LeadMagnetSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      if (actor) {
        await actor.submitEnquiry({
          name,
          phone,
          email,
          country: "Lead Magnet",
          message:
            "Lead Magnet: Free MBBS Abroad 2026 Ultimate Guide (Homepage)",
          timestamp: BigInt(Date.now()),
        });
      }
      setSubmitted(true);
      toast.success("Guide request received! Our counsellor will be in touch.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage:
          "url(/assets/generated/lead-magnet-popup-bg.dim_800x500.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-navy/85 z-[1]" />
      <div className="relative z-[2] container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Book cover */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 rounded-2xl blur-xl pointer-events-none" />
              <img
                src="/assets/generated/guide-2026-cover.dim_600x800.jpg"
                alt="Free MBBS Abroad 2026 Ultimate Guide"
                className="relative w-56 md:w-72 shadow-2xl rounded-xl border-2 border-gold/40 rotate-2 hover:rotate-0 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </motion.div>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
              \uD83C\uDF81 100% Free Guide
            </Badge>
            <h2
              className="text-3xl md:text-4xl font-display font-bold text-white mb-3"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
            >
              MBBS Abroad 2026 Ultimate Guide
            </h2>
            <p className="text-white/80 mb-4">
              The most complete guide for Indian NEET students planning MBBS
              abroad in 2026.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Country-wise fee comparison 2026",
                "NMC recognition list \u2014 updated",
                "Top 50 universities ranked",
                "Visa tips & documents checklist",
                "Life abroad for Indian students",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/90"
                >
                  <CheckCircle className="w-4 h-4 text-gold shrink-0" /> {item}
                </li>
              ))}
            </ul>
            {submitted ? (
              <div
                className="bg-white/10 rounded-xl p-6 text-center border border-gold/30"
                data-ocid="home.lead-magnet.success_state"
              >
                <CheckCircle className="w-12 h-12 text-gold mx-auto mb-3" />
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  You're all set!
                </h3>
                <p className="text-white/80 text-sm mb-3">
                  Your guide is ready! Check your email, or click below to
                  download.
                </p>
                <a
                  href="/assets/generated/guide-2026-cover.dim_600x800.jpg"
                  download="MBBS-Abroad-2026-Guide.pdf"
                  className="mt-3 inline-block text-gold underline text-sm"
                >
                  Download Now \u2192
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Label
                    htmlFor="lm-home-name"
                    className="text-white/80 text-sm"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="lm-home-name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    data-ocid="home.lead-magnet.name.input"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="lm-home-phone"
                    className="text-white/80 text-sm"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="lm-home-phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="mt-1 bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    data-ocid="home.lead-magnet.phone.input"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="lm-home-email"
                    className="text-white/80 text-sm"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="lm-home-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    data-ocid="home.lead-magnet.email.input"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-navy font-bold w-full"
                  disabled={loading}
                  data-ocid="home.lead-magnet.submit.button"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 w-4 h-4" /> Get My Free 2026
                      Guide
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [nmcDismissed, setNmcDismissed] = useState(false);

  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="MBBS Abroad Consultancy Jaipur | VGLOBAL | Study Medicine Overseas"
        description="VGLOBAL is Jaipur's most trusted MBBS abroad consultancy with 10+ years experience. We help Indian NEET students get admission in NMC-recognized universities in Kyrgyzstan, Russia, Georgia, Kazakhstan, Philippines. Free counselling!"
        keywords="MBBS abroad, MBBS in Kyrgyzstan, MBBS in Russia, MBBS in Georgia, MBBS consultancy Jaipur, NEET MBBS abroad, NMC recognized universities, study medicine abroad India"
        canonicalPath="/"
        schemaType="Organization"
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
        <img
          src="/assets/generated/students-studying.dim_800x500.jpg"
          alt="Indian medical students studying abroad"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/70 to-navy/50 z-[1]" />

        <div className="relative z-[2] container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
                \uD83C\uDDEE\uD83C\uDDF3 India's Most Trusted MBBS Abroad
                Consultancy
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Study MBBS Abroad with
              <span className="text-gold block">VGLOBAL</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We've been helping Indian students get into good medical
              universities abroad since 2014. Over 2,000 students placed, 9
              countries covered, and we're based right here in Jaipur.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/counselling">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-navy font-bold px-8"
                  data-ocid="home.counselling.button"
                >
                  Get Free Counselling <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/ai-tools">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy px-8"
                  data-ocid="home.ai-tools.button"
                >
                  Try AI Tools
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy border-y border-gold/20 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, _i) => (
              <motion.div
                key={s.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <s.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-white">
                  {s.value}
                </div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured University \u2014 Modern Medical University */}
      <section className="py-10 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-y border-gold/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Badge className="bg-gold text-navy font-bold mb-3">
                \uD83C\uDFC6 VGLOBAL's #1 Recommended University
              </Badge>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-3">
                Modern Medical University, Jalalabad
              </h2>
              <p className="text-muted-foreground mb-4">
                Consistently ranked as the top choice for Indian students,
                Modern Medical University in Jalalabad, Kyrgyzstan offers
                NMC-recognized MBBS in English at one of the most affordable
                rates in the world. Over 3,000 Indian students are already
                studying here \u2014 and VGLOBAL is their trusted admission
                partner.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  "NMC Recognized",
                  "English Medium",
                  "\u20b918-22 Lakhs Total",
                  "Direct Admission",
                  "3,000+ Indian Students",
                  "WHO Listed",
                  "UNESCO",
                  "WFME",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white border border-gold/40 text-navy px-3 py-1 rounded-full font-medium shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link to="/kyrgyzstan">
                  <Button
                    className="bg-gold hover:bg-gold-dark text-navy font-bold"
                    data-ocid="home.featured-uni.learn_button"
                  >
                    Learn More
                  </Button>
                </Link>
                <Link to="/counselling">
                  <Button
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-white"
                    data-ocid="home.featured-uni.apply_button"
                  >
                    Apply Now 2026
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-56 text-center shrink-0">
              <img
                src="/assets/generated/logo-mmu-jalalabad.dim_200x200.png"
                alt="Modern Medical University Jalalabad"
                className="w-36 h-36 object-cover mx-auto mb-3 rounded-2xl shadow-lg border-2 border-gold/30"
                loading="lazy"
              />
              <div className="bg-gold text-navy text-sm font-bold px-4 py-2 rounded-full inline-block shadow">
                \uD83C\uDFC6 Top Pick 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Logo Marquee */}
      <section className="py-8 bg-white border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 mb-4 text-center">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
            Our Partner Universities
          </p>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap items-center">
            {universityMarquee.map((uni, idx) => (
              <div
                key={uni.name + String(idx)}
                className="flex flex-col items-center justify-center min-w-[180px] px-6 py-3 bg-secondary rounded-xl border border-border hover:border-gold transition-colors group"
              >
                {uni.logo ? (
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="w-12 h-12 object-contain rounded-full border border-border bg-white p-1 mb-2"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-2 text-gold font-display font-bold text-lg group-hover:bg-gold group-hover:text-navy transition-colors">
                    {uni.name.charAt(0)}
                  </div>
                )}
                <p className="text-xs font-semibold text-navy text-center leading-tight">
                  {uni.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {uni.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NMC Notification Banner */}
      {!nmcDismissed && (
        <section className="bg-red-700 text-white py-5 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start md:items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-300 shrink-0 mt-0.5 md:mt-0" />
                <div>
                  <span className="font-bold text-yellow-200 text-sm uppercase tracking-wide block md:inline md:mr-2">
                    NMC 2021 Regulation:
                  </span>
                  <span className="text-white/95 text-sm">
                    NMC Screening Test Regulations 2021 are in effect. NEET is
                    mandatory for MBBS abroad. Only NMC-listed universities
                    count. You must clear FMGE to practice in India.
                    Bond/undertaking required before departure.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link to="/nmc-notification">
                  <Button
                    size="sm"
                    className="bg-yellow-300 hover:bg-yellow-400 text-red-900 font-bold text-xs px-4"
                    data-ocid="home.nmc-banner.read-guidelines_button"
                  >
                    Read Full Guidelines
                  </Button>
                </Link>
                <a
                  href="https://www.nmc.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-200 text-xs underline underline-offset-2 hover:text-white flex items-center gap-1"
                  data-ocid="home.nmc-banner.nmc-website_link"
                >
                  <ExternalLink className="w-3 h-3" /> NMC Website
                </a>
                <a href="tel:+917230032949">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-700 text-xs px-4"
                  >
                    <Phone className="mr-1.5 w-3.5 h-3.5" /> Call Now
                  </Button>
                </a>
                <button
                  type="button"
                  onClick={() => setNmcDismissed(true)}
                  className="text-white/70 hover:text-white p-1 rounded"
                  aria-label="Dismiss NMC notification"
                  data-ocid="home.nmc-banner.close_button"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Countries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Study Destinations
            </Badge>
            <h2 className="text-4xl font-display font-bold text-navy mb-4">
              Where Can You Study MBBS?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with NMC-recognized universities in 9 countries. All
              direct admissions, no donation fees.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`hover:shadow-xl transition-all duration-300 cursor-pointer group border-border hover:border-gold overflow-hidden ${
                    c.featured ? "ring-2 ring-gold" : ""
                  }`}
                  data-ocid={`home.countries.item.${i + 1}`}
                >
                  {/* Country image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={c.image}
                      alt={`MBBS in ${c.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="text-2xl">{c.flag}</span>
                      <span className="text-white font-display font-bold text-lg drop-shadow">
                        {c.name}
                      </span>
                    </div>
                    {c.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-gold text-navy text-xs font-semibold">
                          \uD83C\uDFC6 #1 Pick
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-display font-bold text-navy mb-1 group-hover:text-gold transition-colors">
                      MBBS in {c.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {c.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-semibold text-sm">
                        {c.fee}
                      </span>
                      <Link
                        to={c.path}
                        className="text-navy hover:text-gold text-sm font-medium flex items-center gap-1 transition-colors"
                        data-ocid={`home.countries.explore.${i + 1}`}
                      >
                        Explore <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            {/* AI Tools card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Card
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-border hover:border-gold overflow-hidden h-full"
                data-ocid="home.aitools.card"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-navy to-blue-900 flex items-center justify-center">
                  <img
                    src="/assets/generated/ai-tools-hero.dim_1200x600.jpg"
                    alt="AI MBBS Admission Tools"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    loading="lazy"
                  />
                  <div className="relative text-center">
                    <BrainCircuit className="w-12 h-12 text-gold mx-auto mb-2" />
                    <span className="text-white font-display font-bold text-lg">
                      AI Tools
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-display font-bold text-navy mb-1 group-hover:text-gold transition-colors">
                    AI MBBS Admission Tools
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    NEET predictor, university matcher, eligibility checker &
                    country quiz \u2014 all free.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-semibold text-sm">
                      100% Free
                    </span>
                    <Link
                      to="/ai-tools"
                      className="text-navy hover:text-gold text-sm font-medium flex items-center gap-1 transition-colors"
                      data-ocid="home.aitools.explore.link"
                    >
                      Try Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="text-center mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/mbbs-abroad">
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
                data-ocid="home.countries.view-all_button"
              >
                View All Countries
              </Button>
            </Link>
            <Link to="/compare">
              <Button
                className="bg-gold hover:bg-gold-dark text-navy font-semibold"
                data-ocid="home.countries.compare_button"
              >
                Compare Countries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl font-display font-bold text-navy mb-6">
                Why Do 2,000+ Students Trust VGLOBAL?
              </h2>
              <p className="text-muted-foreground mb-8">
                Honestly? Because we just get it done. We've been in this for 10
                years \u2014 we know the universities, we know the visa
                processes, and we know what mistakes to avoid. Students from all
                over Rajasthan and India come to us because they want straight
                answers and real support, not sales pitches.
              </p>
              {/* Bento Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Free Counselling",
                    desc: "No charge, no pressure",
                    color: "bg-white border-border",
                  },
                  {
                    icon: Award,
                    title: "Direct Admissions",
                    desc: "Zero donation fees",
                    color: "bg-white border-border",
                  },
                  {
                    icon: Globe,
                    title: "Visa Support",
                    desc: "End-to-end documentation",
                    color: "bg-white border-border",
                  },
                  {
                    icon: Users,
                    title: "2,000+ Placed",
                    desc: "Proven track record",
                    color: "bg-white border-border",
                  },
                  {
                    icon: BookOpen,
                    title: "NMC/FMGE Guidance",
                    desc: "Post-admission coaching",
                    color: "bg-white border-border",
                  },
                  {
                    icon: Star,
                    title: "Orientation Sessions",
                    desc: "Pre-departure prep",
                    color: "bg-white border-border",
                  },
                  {
                    icon: Phone,
                    title: "24/7 Support",
                    desc: "Always reachable",
                    color: "bg-white border-border",
                  },
                  {
                    icon: Award,
                    title: "10+ Years",
                    desc: "Est. in Jaipur, 2014",
                    color: "bg-white border-border",
                  },
                ].map((item, _i) => (
                  <motion.div
                    key={item.title}
                    className={`${item.color} border rounded-xl p-4 hover:shadow-md transition-shadow`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="w-5 h-5 text-gold mb-2" />
                    <p className="font-semibold text-navy text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/about">
                  <Button
                    className="bg-navy hover:bg-navy-dark text-white"
                    data-ocid="home.about.button"
                  >
                    Learn About Us <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-white"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            {/* Image + stats grid */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-56">
                <img
                  src="/assets/generated/counselling-session.dim_800x500.jpg"
                  alt="VGLOBAL counselling session"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {statsBoxes.map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-border rounded-2xl p-6 text-center shadow-sm"
                  >
                    <div className="text-4xl font-display font-bold mb-1 text-gold">
                      {item.value}
                    </div>
                    <div className="text-sm text-navy">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor/career image banner */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="/assets/generated/university-campus.dim_800x500.jpg"
          alt="University campus"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/80 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center text-white">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Your Future Starts Here
          </Badge>
          <h2 className="text-4xl font-display font-bold mb-4 drop-shadow-lg">
            Ready to Take the First Step?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Join 2,000+ students who chose VGLOBAL and are now studying at
            NMC-recognized universities around the world. Free counselling, zero
            hidden charges, honest guidance.
          </p>
          <Link to="/counselling">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
              data-ocid="home.mid-cta.counselling_button"
            >
              Book Free Counselling <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Student Reviews
            </Badge>
            <h2 className="text-4xl font-display font-bold text-navy mb-4">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it \u2014 hear from students who've
              been through the journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full border-border hover:border-gold transition-colors"
                  data-ocid={`home.testimonials.item.${i + 1}`}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={String(j)}
                          className="w-4 h-4 fill-gold text-gold"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 italic">
                      "{t.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-navy">{t.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.university}
                      </div>
                      <div className="text-sm text-gold">{t.country}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
                data-ocid="home.all-testimonials.button"
              >
                View All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Video Stories
            </Badge>
            <h2 className="text-4xl font-display font-bold text-navy mb-4">
              Hear It From Our Students
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real students, real journeys. Watch their stories and see why
              VGLOBAL is their top choice.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rahul Verma",
                country: "Kyrgyzstan",
                uni: "Modern Medical University, Jalalabad",
                year: "3rd Year",
                thumb: "/assets/generated/student-life-campus.dim_800x600.jpg",
                query: "Indian+MBBS+student+Kyrgyzstan+experience",
              },
              {
                name: "Suhani Gupta",
                country: "Russia",
                uni: "Kazan Federal University",
                year: "2nd Year",
                thumb:
                  "/assets/generated/student-life-classroom.dim_800x600.jpg",
                query: "Indian+MBBS+student+Russia+review",
              },
              {
                name: "Amit Sharma",
                country: "Georgia",
                uni: "Tbilisi State Medical University",
                year: "4th Year",
                thumb: "/assets/generated/student-life-city.dim_800x600.jpg",
                query: "Indian+medical+student+Georgia+MBBS",
              },
            ].map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <a
                  href={`https://www.youtube.com/results?search_query=${v.query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  data-ocid={`home.video-testimonials.item.${i + 1}`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border group-hover:border-gold transition-colors">
                    <img
                      src={v.thumb}
                      alt={`${v.name} - ${v.country}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy/50 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gold/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                        <svg
                          className="w-7 h-7 text-navy fill-current ml-1"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="presentation"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-4">
                      <p className="text-white font-semibold text-sm">
                        {v.name}
                      </p>
                      <p className="text-white/80 text-xs">
                        {v.uni} \u2022 {v.year}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <Badge className="bg-gold/10 text-gold border-gold/20 text-xs">
                      {v.country}
                    </Badge>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/results?search_query=Indian+MBBS+students+abroad+experience"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
                data-ocid="home.video-testimonials.youtube_link"
              >
                Watch More Stories on YouTube
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Life as a Student Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Student Life
            </Badge>
            <h2 className="text-4xl font-display font-bold text-navy mb-4">
              Life as a Student Abroad
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From classrooms to hostels, labs to city streets \u2014 here's a
              glimpse of what awaits you.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {/* Large featured image */}
            <motion.div
              className="col-span-2 md:col-span-2 row-span-2 rounded-2xl overflow-hidden h-64 md:h-auto relative group"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/generated/student-life-lab.dim_800x600.jpg"
                alt="Medical students in anatomy lab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[250px]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-4">
                <p className="text-white font-semibold text-sm">
                  Anatomy Lab Sessions
                </p>
              </div>
            </motion.div>
            {[
              {
                src: "/assets/generated/student-life-classroom.dim_800x600.jpg",
                label: "Library & Study",
              },
              {
                src: "/assets/generated/student-life-hostel.dim_800x600.jpg",
                label: "Hostel Life",
              },
              {
                src: "/assets/generated/student-life-city.dim_800x600.jpg",
                label: "City Exploration",
              },
              {
                src: "/assets/generated/student-life-dining.dim_800x600.jpg",
                label: "Campus Dining",
              },
            ].map((item, _i) => (
              <motion.div
                key={item.label}
                className="rounded-2xl overflow-hidden h-32 md:h-40 relative group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/50 transition-colors" />
                <div className="absolute bottom-2 left-2">
                  <span className="text-white text-xs font-semibold drop-shadow-md">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery">
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
                data-ocid="home.gallery.view-more_button"
              >
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <LeadMagnetSection />

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Let's Get You Into Medical School
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book a free call with our counsellors. We'll look at your NEET
            score, your budget, and your goals \u2014 then give you honest
            advice on what's realistically possible and how to get there.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/counselling">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
                data-ocid="home.cta.primary_button"
              >
                Book Free Counselling
              </Button>
            </Link>
            <a href="tel:+917230032949">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-10"
              >
                <Phone className="mr-2 w-5 h-5" /> +91-7230032949
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
