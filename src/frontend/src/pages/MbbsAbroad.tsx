import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import SEOHead from "../components/SEOHead";

const countries = [
  {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    path: "/kyrgyzstan",
    fee: "$3,000-5,000/yr",
    featured: true,
  },
  { name: "Russia", flag: "🇷🇺", path: "/russia", fee: "$4,000-6,000/yr" },
  { name: "Georgia", flag: "🇬🇪", path: "/georgia", fee: "$5,000-7,000/yr" },
  {
    name: "Kazakhstan",
    flag: "🇰🇿",
    path: "/kazakhstan",
    fee: "$3,500-5,500/yr",
  },
  {
    name: "Philippines",
    flag: "🇵🇭",
    path: "/philippines",
    fee: "$4,000-6,000/yr",
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    path: "/bangladesh",
    fee: "$3,000-5,000/yr",
  },
  { name: "China", flag: "🇨🇳", path: "/china", fee: "$3,500-6,000/yr" },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    path: "/uzbekistan",
    fee: "$3,000-4,500/yr",
  },
  { name: "Ukraine", flag: "🇺🇦", path: "/ukraine", fee: "$3,000-5,000/yr" },
];

const mbbsFacts = [
  {
    label: "Eligibility",
    value: "NEET qualified, 50% PCB (45% SC/ST), Age 17+",
  },
  { label: "Duration", value: "5.5 - 6 years (including internship)" },
  { label: "Recognition", value: "NMC, WHO, ECFMG, GMC recognized" },
  { label: "Return to India", value: "Clear FMGE/NExT to practice in India" },
  { label: "Annual Fees", value: "$3,000 - $7,000 depending on country" },
  {
    label: "Intake",
    value: "September/October (some universities in February)",
  },
];

const mbbsPoints = [
  "NMC-recognized universities with valid standing",
  "Same MBBS curriculum as Indian medical colleges",
  "English-medium instruction in most countries",
  "Duration: 5-6 years including internship",
  "Must clear NEET to be eligible",
  "Return to India after FMGE/NExT clearance",
];

export default function MbbsAbroad() {
  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="MBBS Abroad 2026 | Complete Guide for Indian Students | VGLOBAL"
        description="Complete guide to MBBS abroad for Indian students in 2026. Top 9 countries, NMC-recognized universities, total fees, eligibility, NEET requirements. Get free counselling from VGLOBAL, Jaipur's most trusted MBBS abroad consultancy."
        keywords="MBBS abroad 2026, MBBS abroad India, foreign MBBS guide, NMC recognized universities, study medicine abroad India, NEET MBBS abroad"
        canonicalPath="/mbbs-abroad"
      />
      <section className="relative py-20 text-white overflow-hidden min-h-[400px] flex items-center">
        <img
          src="/assets/generated/mbbs-abroad-hero.dim_1200x600.jpg"
          alt="MBBS abroad for Indian students - complete guide 2026"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center w-full">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            MBBS Abroad 2026
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg">
            MBBS Abroad for Indian Students
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow-md">
            Complete guide to studying MBBS abroad — top countries, fees,
            eligibility, and why VGLOBAL is your best partner.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6">
                What is MBBS Abroad?
              </h2>
              <p className="text-muted-foreground mb-4">
                MBBS abroad refers to pursuing a Bachelor of Medicine, Bachelor
                of Surgery (MBBS) degree at foreign medical universities
                recognized by the National Medical Commission (NMC) of India.
                Students can return to India and practice medicine after
                clearing the Foreign Medical Graduates Examination (FMGE) or
                NExT.
              </p>
              <p className="text-muted-foreground mb-6">
                Over 10,000 Indian students travel abroad every year to study
                MBBS, attracted by affordable fees, direct admission, and
                globally recognized degrees.
              </p>
              <div className="space-y-3">
                {mbbsPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6">
                Key Facts
              </h2>
              <div className="space-y-4">
                {mbbsFacts.map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 p-4 bg-secondary rounded-lg"
                  >
                    <span className="text-gold font-semibold text-sm min-w-[120px]">
                      {item.label}:
                    </span>
                    <span className="text-foreground text-sm">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-10 text-center">
            Choose Your Destination
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((c, i) => (
              <Card
                key={c.name}
                className={`hover:shadow-lg transition-all border-border hover:border-gold ${
                  c.featured ? "ring-2 ring-gold" : ""
                }`}
                data-ocid={`mbbs.countries.item.${i + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-4xl">{c.flag}</span>
                    {c.featured && (
                      <Badge className="bg-gold text-navy text-xs">
                        ⭐ Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-1">
                    {c.name}
                  </h3>
                  <p className="text-gold font-semibold text-sm mb-3">
                    {c.fee}
                  </p>
                  <Link to={c.path}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-navy text-navy hover:bg-navy hover:text-white w-full"
                    >
                      View Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">
            Not Sure Where to Apply?
          </h2>
          <p className="text-white/80 mb-8">
            Our experts will assess your NEET score and profile to recommend the
            best destination.
          </p>
          <Link to="/counselling">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
              data-ocid="mbbs.counselling.button"
            >
              Free Counselling
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
