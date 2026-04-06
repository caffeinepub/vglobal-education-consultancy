import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";
import SEOHead from "../components/SEOHead";

const data: CountryData = {
  name: "Kyrgyzstan",
  flag: "🇰🇬",
  tagline:
    "The Most Affordable & NMC-Recognized MBBS Destination for Indian Students",
  description:
    "If you want a quality MBBS degree without spending a fortune, Kyrgyzstan is hard to beat. It's one of the most affordable medical education destinations in the world, the universities are NMC-recognized, classes are in English, and there's already a large Indian student community there — so you won't feel alone. VGLOBAL has been placing students here for 10 years and knows the universities inside out.",
  gradient: "from-red-900 via-red-800 to-navy",
  heroImage: "/assets/generated/kyrgyzstan-hero.dim_1200x600.jpg",
  stats: [
    { label: "Annual Fees", value: "$3,000-5,000" },
    { label: "Partner Universities", value: "4+" },
    { label: "Indian Students", value: "5,000+" },
    { label: "Years of Excellence", value: "10+" },
  ],
  universities: [
    {
      name: "Modern Medical University",
      established: "2002",
      students: "3,000+",
      fee: "$3,200/yr",
      recognition: ["NMC", "WHO", "WFME", "UNESCO"],
      logo: "/assets/generated/logo-mmu-jalalabad.dim_200x200.png",
    },
    {
      name: "Osh State Medical University",
      established: "1992",
      students: "5,000+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO", "FAIMER", "ECFMG"],
      logo: "/assets/generated/logo-osmu.dim_200x200.png",
    },
    {
      name: "International School of Medicine",
      established: "2003",
      students: "2,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO", "WFME"],
      logo: "/assets/generated/logo-ism-kyrgyzstan.dim_200x200.png",
    },
    {
      name: "Jalal-Abad State Medical University",
      established: "2000",
      students: "3,000+",
      fee: "$3,000/yr",
      recognition: ["NMC", "WHO"],
      logo: "/assets/generated/logo-jasmu.dim_200x200.png",
    },
    {
      name: "Kyrgyz State Medical Academy",
      established: "1939",
      students: "7,000+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
      logo: "/assets/generated/logo-ksma.dim_200x200.png",
    },
    {
      name: "Asian Medical Institute",
      established: "2002",
      students: "2,500+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "WFME"],
      logo: "/assets/generated/logo-ami-kyrgyzstan.dim_200x200.png",
    },
    {
      name: "International University of Kyrgyzstan Medical Faculty",
      established: "1993",
      students: "1,500+",
      fee: "$3,800/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "One of the most affordable MBBS destinations in the world",
    "All top universities NMC-recognized",
    "English-medium instruction throughout",
    "No IELTS/TOEFL required for admission",
    "Indian food available in university cafeterias",
    "Large Indian student community — you'll find your people",
    "Safe, peaceful environment for students",
    "Direct flights from major Indian cities",
    "Moderate climate, similar to North India",
    "Simple, student-friendly visa process",
    "5+1 year program (5 academic + 1 internship)",
    "Regular Indian cultural events on campus",
  ],
  feeRange: "$3,000 - $5,000/yr",
  duration: "5+1 Years",
  language: "English",
  climate: "Continental",
  visa: "Getting a student visa for Kyrgyzstan is genuinely straightforward. Once you have your admission letter, VGLOBAL walks you through the application process step by step. Processing typically takes 7–14 working days, and the visa is valid for 1 year and renewed annually throughout your degree.",
  whyChoose: [
    "Lowest tuition fees among all MBBS abroad destinations",
    "All universities recognized by NMC India",
    "English-medium — no language barrier at all",
    "5,000+ Indian students already studying here",
    "Safe, student-friendly environment",
    "Low cost of living ($150–250/month)",
    "Simple admission process — we handle most of it",
    "Strong alumni network back in India",
  ],
};

export default function Kyrgyzstan() {
  return (
    <>
      <SEOHead
        title="MBBS in Kyrgyzstan 2026 | Most Affordable MBBS Abroad | VGLOBAL"
        description="Study MBBS in Kyrgyzstan at Modern Medical University Jalalabad, Osh State Medical University, KSMA. Lowest fees $3,000-5,000/yr. NMC recognized, English medium. Best MBBS abroad for Indian students. VGLOBAL Jaipur."
        keywords="MBBS in Kyrgyzstan, Modern Medical University Jalalabad, Osh State Medical University, MBBS Kyrgyzstan fees, affordable MBBS abroad, KSMA"
        canonicalPath="/kyrgyzstan"
      />

      {/* Top Pick Banner — uses pt-16/pt-20 for navbar clearance */}
      <div className="pt-16 md:pt-20">
        <section className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-500 text-navy py-6 px-4 shadow-md">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="flex items-center gap-5">
                <img
                  src="/assets/generated/logo-mmu-jalalabad.dim_200x200.png"
                  alt="Modern Medical University Jalalabad logo"
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover shrink-0"
                  loading="eager"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-navy text-gold font-bold text-xs px-3 py-1 rounded-full">
                      🏆 Top Pick for Indian Students 2026
                    </span>
                    <span className="bg-white/30 text-navy text-xs px-3 py-1 rounded-full font-semibold">
                      NMC Recognized
                    </span>
                    <span className="bg-white/30 text-navy text-xs px-3 py-1 rounded-full font-semibold">
                      WHO Listed
                    </span>
                    <span className="bg-white/30 text-navy text-xs px-3 py-1 rounded-full font-semibold">
                      UNESCO
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-navy drop-shadow">
                    Modern Medical University, Jalalabad
                  </h2>
                  <p className="text-navy/80 text-sm mt-1 font-medium">
                    NMC Recognized · English Medium · ₹18–22 Lakhs
                    Total · 3,000+ Indian Students · Direct Admission Available
                  </p>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link to="/counselling">
                  <Button
                    className="bg-navy hover:bg-navy-dark text-white font-bold shadow-lg"
                    data-ocid="kyrgyzstan.mmu-banner.apply_button"
                  >
                    Apply for 2026 Intake
                  </Button>
                </Link>
                <Link to="/compare">
                  <Button
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-white"
                    data-ocid="kyrgyzstan.mmu-banner.compare_button"
                  >
                    Compare Countries
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CountryPage renders with noPaddingTop since banner already provides navbar offset */}
      <CountryPage data={data} featured noPaddingTop />
    </>
  );
}
