import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

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

export default function Universities() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Partner Universities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Partner Universities
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            50+ NMC-recognized partner universities across 9 countries. All
            verified for quality and recognition.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
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
                    className="border-border hover:border-gold hover:shadow-md transition-all"
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
