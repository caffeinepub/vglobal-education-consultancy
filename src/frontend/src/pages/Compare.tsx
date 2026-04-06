import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Phone, XCircle } from "lucide-react";
import SEOHead from "../components/SEOHead";

const countries = [
  {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    path: "/kyrgyzstan",
    featured: true,
    duration: "6 Years (incl. internship)",
    fee: "$3,000–5,000/yr",
    totalFee: "~₹18–30 Lakhs",
    language: "English / Russian",
    nmc: true,
    who: true,
    unesco: true,
    medium: "English",
    climate: "Cold winters",
    fmgePass: "~45–55%",
    hostel: "$600–900/yr",
    hostelQuality: "★★★★☆",
    visa: "Student Visa",
    indianFood: true,
    indianFoodRating: "Excellent",
    neetMin: "50th percentile",
    topUniversities:
      "Modern Medical University Jalalabad, Osh State Medical University, KSMA, ISM",
  },
  {
    name: "Russia",
    flag: "🇷🇺",
    path: "/russia",
    featured: false,
    duration: "6 Years (incl. internship)",
    fee: "$4,000–6,000/yr",
    totalFee: "~₹25–40 Lakhs",
    language: "English / Russian",
    nmc: true,
    who: true,
    unesco: true,
    medium: "English",
    climate: "Very cold winters",
    fmgePass: "~50–60%",
    hostel: "$800–1,200/yr",
    hostelQuality: "★★★★☆",
    visa: "Student Visa",
    indianFood: true,
    indianFoodRating: "Good",
    neetMin: "50th percentile",
    topUniversities:
      "Kazan Federal University, Sechenov University, RUDN University",
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
    path: "/georgia",
    featured: false,
    duration: "6 Years",
    fee: "$5,000–7,000/yr",
    totalFee: "~₹30–45 Lakhs",
    language: "English",
    nmc: true,
    who: true,
    unesco: true,
    medium: "English",
    climate: "Moderate European",
    fmgePass: "~45–55%",
    hostel: "$1,000–1,500/yr",
    hostelQuality: "★★★★★",
    visa: "Student Visa",
    indianFood: false,
    indianFoodRating: "Limited",
    neetMin: "50th percentile",
    topUniversities:
      "Tbilisi State Medical University, Batumi Shota Rustaveli State University",
  },
  {
    name: "Kazakhstan",
    flag: "🇰🇿",
    path: "/kazakhstan",
    featured: false,
    duration: "5 Years",
    fee: "$3,500–5,500/yr",
    totalFee: "~₹20–35 Lakhs",
    language: "English / Russian",
    nmc: true,
    who: true,
    unesco: true,
    medium: "English",
    climate: "Cold winters",
    fmgePass: "~40–50%",
    hostel: "$700–1,000/yr",
    hostelQuality: "★★★☆☆",
    visa: "Student Visa",
    indianFood: true,
    indianFoodRating: "Good",
    neetMin: "50th percentile",
    topUniversities:
      "Kazakh National Medical University, Astana Medical University",
  },
  {
    name: "Philippines",
    flag: "🇵🇭",
    path: "/philippines",
    featured: false,
    duration: "5.5 Years",
    fee: "$4,000–6,000/yr",
    totalFee: "~₹25–40 Lakhs",
    language: "English",
    nmc: true,
    who: true,
    unesco: true,
    medium: "English",
    climate: "Tropical",
    fmgePass: "~55–65%",
    hostel: "$900–1,400/yr",
    hostelQuality: "★★★★☆",
    visa: "Student Visa",
    indianFood: false,
    indianFoodRating: "Limited",
    neetMin: "50th percentile",
    topUniversities:
      "University of Santo Tomas, AMA School of Medicine, UV Gullas College",
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    path: "/bangladesh",
    featured: false,
    duration: "5 Years",
    fee: "$3,000–5,000/yr",
    totalFee: "~₹18–30 Lakhs",
    language: "English / Bengali",
    nmc: true,
    who: true,
    unesco: true,
    medium: "English",
    climate: "Tropical",
    fmgePass: "~40–50%",
    hostel: "$500–800/yr",
    hostelQuality: "★★★☆☆",
    visa: "Student Visa",
    indianFood: true,
    indianFoodRating: "Excellent",
    neetMin: "50th percentile",
    topUniversities: "Dhaka National Medical College, Eastern Medical College",
  },
  {
    name: "China",
    flag: "🇨🇳",
    path: "/china",
    featured: false,
    duration: "6 Years",
    fee: "$3,500–6,000/yr",
    totalFee: "~₹22–38 Lakhs",
    language: "English / Chinese",
    nmc: true,
    who: true,
    unesco: true,
    medium: "English",
    climate: "Varied (North cold, South mild)",
    fmgePass: "~40–50%",
    hostel: "$600–1,200/yr",
    hostelQuality: "★★★★☆",
    visa: "Student Visa (X1)",
    indianFood: false,
    indianFoodRating: "Limited",
    neetMin: "50th percentile",
    topUniversities:
      "China Medical University, Jilin University Medical, Nanjing Medical University",
  },
  {
    name: "Ukraine",
    flag: "🇺🇦",
    path: "/ukraine",
    featured: false,
    duration: "6 Years",
    fee: "$3,000–5,000/yr",
    totalFee: "~₹18–32 Lakhs",
    language: "English / Ukrainian",
    nmc: true,
    who: true,
    unesco: true,
    medium: "English",
    climate: "Cold winters",
    fmgePass: "~40–50%",
    hostel: "$500–900/yr",
    hostelQuality: "★★★☆☆",
    visa: "Student Visa",
    indianFood: false,
    indianFoodRating: "Limited",
    neetMin: "50th percentile",
    topUniversities:
      "Kharkiv National Medical University, Zaporizhzhia State Medical University",
  },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    path: "/uzbekistan",
    featured: false,
    duration: "6 Years",
    fee: "$3,000–4,500/yr",
    totalFee: "~₹18–28 Lakhs",
    language: "English / Uzbek",
    nmc: true,
    who: true,
    unesco: true,
    medium: "English",
    climate: "Hot summers, cold winters",
    fmgePass: "~35–45%",
    hostel: "$500–800/yr",
    hostelQuality: "★★★☆☆",
    visa: "Student Visa",
    indianFood: true,
    indianFoodRating: "Good",
    neetMin: "50th percentile",
    topUniversities:
      "Tashkent Medical Academy, Samarkand State Medical University",
  },
];

const rows = [
  { label: "Duration", key: "duration" },
  { label: "Annual Fees (USD)", key: "fee" },
  { label: "Total Cost (INR)", key: "totalFee" },
  { label: "Language", key: "language" },
  { label: "Medium of Instruction", key: "medium" },
  { label: "NMC Recognized", key: "nmc", type: "bool" },
  { label: "WHO Listed", key: "who", type: "bool" },
  { label: "UNESCO Listed", key: "unesco", type: "bool" },
  { label: "Climate", key: "climate" },
  { label: "FMGE Pass Rate", key: "fmgePass" },
  { label: "Hostel Cost", key: "hostel" },
  { label: "Hostel Quality", key: "hostelQuality" },
  { label: "Visa Type", key: "visa" },
  { label: "Indian Food Available", key: "indianFood", type: "bool" },
  { label: "Indian Food Rating", key: "indianFoodRating" },
  { label: "NEET Minimum", key: "neetMin" },
  { label: "Top Universities", key: "topUniversities" },
] as const;

type RowKey = (typeof rows)[number]["key"];

export default function Compare() {
  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="Compare MBBS Countries 2026 | Fees, Duration, Recognition | VGLOBAL"
        description="Compare all 9 MBBS abroad destinations side-by-side: Kyrgyzstan, Russia, Georgia, Kazakhstan, Philippines, Bangladesh, China, Ukraine, Uzbekistan. Fees, NMC recognition, FMGE pass rate, climate and more."
        keywords="compare MBBS countries, MBBS abroad comparison, best country MBBS India, Kyrgyzstan vs Russia MBBS, Georgia MBBS fees comparison"
        canonicalPath="/compare"
      />
      {/* Hero */}
      <section className="relative py-20 text-white overflow-hidden min-h-[380px] flex items-center">
        <img
          src="/assets/generated/compare-hero.dim_1200x600.jpg"
          alt="Compare MBBS countries - fees, duration, recognition"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Single clean overlay — reduced opacity so hero image is visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/65 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center w-full">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Comparison Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg">
            MBBS Abroad — Country Comparison
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Compare all 9 MBBS destinations side-by-side on fees, duration,
            recognition, FMGE pass rate, and more to make the best decision for
            your future.
          </p>
        </div>
      </section>

      {/* #1 VGLOBAL Pick Banner */}
      <section className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-y-2 border-gold/40 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className="shrink-0">
                <img
                  src="/assets/generated/logo-mmu-jalalabad.dim_200x200.png"
                  alt="Modern Medical University Jalalabad"
                  className="w-16 h-16 rounded-full border-2 border-gold object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-gold text-navy font-bold text-xs">
                    🏆 #1 VGLOBAL Pick 2026
                  </Badge>
                  <Badge className="bg-navy text-white text-xs">
                    NMC Recognized
                  </Badge>
                  <Badge className="bg-green-700 text-white text-xs">
                    Direct Admission
                  </Badge>
                </div>
                <h2 className="text-lg md:text-xl font-display font-bold text-navy">
                  Modern Medical University, Jalalabad — Ranked #1 for Indian
                  Students 2026
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Best value MBBS in Kyrgyzstan · English medium · ₹18–22 Lakhs
                  total · 3,000+ Indian students · Dedicated Indian support
                </p>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link to="/kyrgyzstan">
                <Button
                  className="bg-gold hover:bg-gold-dark text-navy font-bold"
                  data-ocid="compare.mmu-banner.learn_button"
                >
                  View Details
                </Button>
              </Link>
              <Link to="/counselling">
                <Button
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-white"
                  data-ocid="compare.mmu-banner.apply_button"
                >
                  Apply 2026
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              All 9 Countries
            </Badge>
            <h2 className="text-3xl font-display font-bold text-navy mb-2">
              Full Comparison Table
            </h2>
            <p className="text-muted-foreground">
              Scroll horizontally to see all countries on mobile.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-lg">
            <table className="w-full text-sm border-separate border-spacing-0">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-4 font-semibold sticky left-0 bg-navy z-[20] min-w-[170px] border-r border-navy/30">
                    Feature
                  </th>
                  {countries.map((c) => (
                    <th
                      key={c.name}
                      className={`text-center px-3 py-3 font-semibold min-w-[130px] ${
                        c.featured ? "bg-gold text-navy" : ""
                      }`}
                    >
                      <div className="text-xl mb-1">{c.flag}</div>
                      <Link to={c.path} className="hover:underline">
                        {c.name}
                      </Link>
                      {c.featured && (
                        <div className="text-[10px] font-normal mt-0.5">
                          🏆 #1 Pick
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr
                    key={row.key}
                    className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td
                      className={`px-4 py-3 font-semibold text-navy sticky left-0 z-[10] border-r border-border border-b border-border ${
                        ri % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      {row.label}
                    </td>
                    {countries.map((c) => {
                      const val = c[row.key as RowKey];
                      if ("type" in row && row.type === "bool") {
                        return (
                          <td
                            key={c.name}
                            className="text-center px-3 py-3 border-b border-border"
                          >
                            {val ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                            )}
                          </td>
                        );
                      }
                      return (
                        <td
                          key={c.name}
                          className={`text-center px-3 py-3 text-sm border-b border-border ${
                            c.featured
                              ? "font-semibold text-navy bg-gold/5"
                              : "text-foreground"
                          }`}
                        >
                          {String(val)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Quick Summary
            </Badge>
            <h2 className="text-3xl font-display font-bold text-navy mb-2">
              Best Country For Each Scenario
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: "🏆",
                label: "Best Overall",
                country: "Kyrgyzstan",
                reason:
                  "Top pick for 2026. Affordable fees, NMC recognized, English medium, large Indian community, and easiest visa process.",
                highlight: true,
              },
              {
                emoji: "💰",
                label: "Most Affordable",
                country: "Kyrgyzstan / Bangladesh",
                reason:
                  "Total cost under ₹25 lakhs. NMC recognized, English medium, Indian-friendly campus life.",
                highlight: false,
              },
              {
                emoji: "🎓",
                label: "Best FMGE Pass Rate",
                country: "Philippines",
                reason:
                  "55–65% FMGE pass rate. US-pattern curriculum, English medium. Great for focused students.",
                highlight: false,
              },
              {
                emoji: "🌍",
                label: "European Standard",
                country: "Georgia",
                reason:
                  "5-year program, European-style education, NMC recognized. Slightly higher fees but strong outcome.",
                highlight: false,
              },
              {
                emoji: "🔬",
                label: "Research & Prestige",
                country: "Russia",
                reason:
                  "World-class research universities. NMC recognized, English medium, large Indian community.",
                highlight: false,
              },
              {
                emoji: "🍛",
                label: "Best Indian Food Access",
                country: "Kyrgyzstan / Bangladesh",
                reason:
                  "Indian food easily available, large Indian communities, familiar cultural environment.",
                highlight: false,
              },
            ].map((card, i) => (
              <div
                key={card.label}
                className={`rounded-2xl p-6 border-2 ${
                  card.highlight
                    ? "bg-gradient-to-br from-gold/10 to-amber-50 border-gold"
                    : "bg-white border-border hover:border-gold transition-colors"
                }`}
                data-ocid={`compare.summary.item.${i + 1}`}
              >
                <div className="text-3xl mb-3">{card.emoji}</div>
                <Badge
                  className={`mb-2 text-xs ${
                    card.highlight
                      ? "bg-gold text-navy"
                      : "bg-navy/10 text-navy"
                  }`}
                >
                  {card.label}
                </Badge>
                <h3 className="font-display font-bold text-navy text-lg mb-2">
                  {card.country}
                </h3>
                <p className="text-sm text-muted-foreground">{card.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">
            Still Not Sure Which Country?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Our counsellors have helped 2,000+ students choose the right
            destination. Get honest, personalised guidance — completely free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/counselling">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
                data-ocid="compare.cta.counselling_button"
              >
                Book Free Counselling <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+917230032949">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-10"
                data-ocid="compare.cta.call_button"
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
