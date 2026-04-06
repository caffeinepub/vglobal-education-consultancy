import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import SEOHead from "../components/SEOHead";

const universities = [
  {
    country: "Kyrgyzstan",
    flag: "🇰🇬",
    featured: true,
    unis: [
      {
        name: "Osh State Medical University",
        fee: "$3,500/yr",
        recognition: ["NMC", "WHO", "FAIMER"],
      },
      {
        name: "International School of Medicine",
        fee: "$4,000/yr",
        recognition: ["NMC", "WHO"],
      },
      {
        name: "Jalal-Abad State Medical University",
        fee: "$3,000/yr",
        recognition: ["NMC", "WHO"],
      },
      {
        name: "Kyrgyz State Medical Academy",
        fee: "$3,500/yr",
        recognition: ["NMC", "WHO", "FAIMER"],
      },
      {
        name: "Asian Medical Institute",
        fee: "$4,500/yr",
        recognition: ["NMC", "WHO"],
      },
    ],
  },
  {
    country: "Russia",
    flag: "🇷🇺",
    unis: [
      {
        name: "Kazan Federal University",
        fee: "$5,000/yr",
        recognition: ["NMC", "WHO", "ECFMG"],
      },
      {
        name: "Kursk State Medical University",
        fee: "$4,500/yr",
        recognition: ["NMC", "WHO"],
      },
      {
        name: "Volgograd State Medical University",
        fee: "$4,000/yr",
        recognition: ["NMC", "WHO"],
      },
    ],
  },
  {
    country: "Georgia",
    flag: "🇬🇪",
    unis: [
      {
        name: "Tbilisi State Medical University",
        fee: "$6,000/yr",
        recognition: ["NMC", "WHO", "GMC"],
      },
      {
        name: "David Tvildiani Medical University",
        fee: "$5,500/yr",
        recognition: ["NMC", "WHO"],
      },
      {
        name: "New Vision University",
        fee: "$7,000/yr",
        recognition: ["NMC", "WHO", "ECFMG"],
      },
    ],
  },
  {
    country: "Kazakhstan",
    flag: "🇰🇿",
    unis: [
      {
        name: "Kazakh National Medical University",
        fee: "$5,000/yr",
        recognition: ["NMC", "WHO"],
      },
      {
        name: "Semey Medical University",
        fee: "$4,000/yr",
        recognition: ["NMC", "WHO"],
      },
    ],
  },
  {
    country: "Philippines",
    flag: "🇵🇭",
    unis: [
      {
        name: "University of Santo Tomas",
        fee: "$6,000/yr",
        recognition: ["NMC", "WHO", "ECFMG"],
      },
      {
        name: "Davao Medical School Foundation",
        fee: "$5,000/yr",
        recognition: ["NMC", "WHO"],
      },
    ],
  },
  {
    country: "China",
    flag: "🇨🇳",
    unis: [
      {
        name: "China Medical University",
        fee: "$5,500/yr",
        recognition: ["NMC", "WHO", "ECFMG"],
      },
      {
        name: "Jilin University Medical School",
        fee: "$5,000/yr",
        recognition: ["NMC", "WHO"],
      },
      {
        name: "Nanjing Medical University",
        fee: "$5,500/yr",
        recognition: ["NMC", "WHO"],
      },
    ],
  },
];

// Partner university logos/badges data
const partnerUniversities = [
  {
    abbr: "KSMA",
    full: "Kyrgyz State Medical Academy",
    country: "Kyrgyzstan",
    logo: "/assets/generated/logo-ksma.dim_200x200.png",
    fee: "$3,500/yr",
    recognition: ["NMC", "WHO", "FAIMER"],
  },
  {
    abbr: "OSMU",
    full: "Osh State Medical University",
    country: "Kyrgyzstan",
    logo: "/assets/generated/logo-osmu.dim_200x200.png",
    fee: "$3,500/yr",
    recognition: ["NMC", "WHO", "FAIMER"],
  },
  {
    abbr: "SECHENOV",
    full: "Sechenov First Moscow State Medical University",
    country: "Russia",
    logo: "/assets/generated/logo-sechenov.dim_200x200.png",
    fee: "$6,000/yr",
    recognition: ["NMC", "WHO", "ECFMG"],
  },
  {
    abbr: "TSMU",
    full: "Tbilisi State Medical University",
    country: "Georgia",
    logo: "/assets/generated/logo-tsmu.dim_200x200.png",
    fee: "$6,000/yr",
    recognition: ["NMC", "WHO", "GMC"],
  },
  {
    abbr: "CMU",
    full: "China Medical University",
    country: "China",
    logo: "/assets/generated/logo-china-medical.dim_200x200.png",
    fee: "$5,000/yr",
    recognition: ["NMC", "WHO", "ECFMG"],
  },
];

export default function Universities() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="relative py-20 text-white overflow-hidden">
        <SEOHead
          title="NMC Recognized Partner Universities | MBBS Abroad | VGLOBAL Jaipur"
          description="VGLOBAL partner universities for MBBS abroad: 50+ NMC-recognized universities across 9 countries. Osh State Medical University, Kazan Federal University, Tbilisi State Medical, and more."
          keywords="NMC recognized universities MBBS, partner universities VGLOBAL, Osh State Medical University, best MBBS universities abroad India"
          canonicalPath="/universities"
        />
        <img
          src="/assets/generated/universities-hero.dim_1200x600.jpg"
          alt="Partner universities worldwide"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-transparent z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Partner Universities
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          >
            Our Partner Universities
          </h1>
          <p
            className="text-white/90 text-lg max-w-2xl mx-auto"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
          >
            50+ NMC-recognized partner universities across 9 countries. All
            verified for quality and recognition.
          </p>
        </div>
      </section>

      {/* Featured University Logos Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Featured Partners
            </Badge>
            <h2 className="text-3xl font-display font-bold text-navy mb-3">
              Our Partner Universities
            </h2>
            <p className="text-muted-foreground">
              Trusted, NMC-recognized institutions where our students are
              currently enrolled.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {partnerUniversities.map((uni, i) => (
              <div
                key={uni.abbr}
                className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-gold hover:shadow-md transition-all text-center bg-card"
                data-ocid={`universities.partner.item.${i + 1}`}
              >
                {uni.logo ? (
                  <img
                    src={uni.logo}
                    alt={uni.full}
                    className="w-16 h-16 object-contain mb-3 rounded-lg"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-3 shrink-0">
                    <span className="text-gold font-display font-bold text-xs text-center leading-tight px-1">
                      {uni.abbr}
                    </span>
                  </div>
                )}
                {/* Name below image — no overlap */}
                <div className="font-display font-bold text-navy text-sm leading-tight mb-1">
                  {uni.abbr}
                </div>
                <div className="text-xs text-muted-foreground mb-1 line-clamp-2">
                  {uni.full}
                </div>
                <div className="text-xs text-gold font-semibold">
                  {uni.country}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {uni.fee}
                </div>
                <div className="flex flex-wrap gap-1 mt-2 justify-center">
                  {uni.recognition.map((r) => (
                    <Badge
                      key={r}
                      variant="secondary"
                      className="text-xs px-1.5 py-0"
                    >
                      {r}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          {universities.map((group, gi) => (
            <div key={group.country} className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{group.flag}</span>
                <h2 className="text-2xl font-display font-bold text-navy">
                  {group.country}
                </h2>
                {group.featured && (
                  <Badge className="bg-gold text-navy">⭐ Featured</Badge>
                )}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.unis.map((uni, ui) => (
                  <Card
                    key={uni.name}
                    className="border-border hover:border-gold hover:shadow-md transition-all bg-card"
                    data-ocid={`universities.item.${gi * 10 + ui + 1}`}
                  >
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-navy text-sm pr-2">
                          {uni.name}
                        </h3>
                        <Star className="w-4 h-4 text-gold shrink-0" />
                      </div>
                      <p className="text-gold font-semibold text-sm mb-3">
                        {uni.fee}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {uni.recognition.map((r) => (
                          <Badge
                            key={r}
                            variant="secondary"
                            className="text-xs"
                          >
                            {r}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">
            Find Your Perfect University
          </h2>
          <p className="text-white/80 mb-8">
            Our counsellors match your profile with the best university in your
            preferred country.
          </p>
          <Link to="/counselling">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
              data-ocid="universities.counselling.button"
            >
              Get University Recommendations
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
