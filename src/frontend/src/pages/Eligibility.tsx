import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { AlertCircle, CheckCircle } from "lucide-react";
import SEOHead from "../components/SEOHead";

const criteria = [
  {
    label: "NEET Qualification",
    detail: "Must have qualified NEET UG examination in the year of admission",
  },
  {
    label: "PCB Marks (General)",
    detail:
      "Minimum 50% aggregate marks in Physics, Chemistry, and Biology in 12th standard",
  },
  {
    label: "PCB Marks (SC/ST/OBC)",
    detail:
      "Minimum 40% aggregate marks in Physics, Chemistry, and Biology (reserved categories)",
  },
  {
    label: "Age Requirement",
    detail:
      "Must be at least 17 years of age on or before December 31st of the admission year",
  },
  {
    label: "Valid Passport",
    detail:
      "Must possess a valid Indian passport with at least 1 year validity",
  },
  {
    label: "Medical Fitness",
    detail: "Must be medically fit and free from any communicable diseases",
  },
];

const countrySpecific = [
  {
    country: "Kyrgyzstan",
    neet: "Qualifying",
    pcb: "50% (Gen) / 40% (SC/ST)",
    age: "17+",
    extra: "No IELTS required",
  },
  {
    country: "Russia",
    neet: "Qualifying",
    pcb: "50% (Gen)",
    age: "17+",
    extra: "Basic English proficiency",
  },
  {
    country: "Georgia",
    neet: "Qualifying",
    pcb: "50% (Gen)",
    age: "17+",
    extra: "No language test required",
  },
  {
    country: "Kazakhstan",
    neet: "Qualifying",
    pcb: "50% (Gen)",
    age: "17+",
    extra: "Health certificate required",
  },
  {
    country: "Philippines",
    neet: "Qualifying",
    pcb: "50% (Gen)",
    age: "17+",
    extra: "English proficiency (IELTS optional)",
  },
  {
    country: "Bangladesh",
    neet: "Qualifying",
    pcb: "50% (Gen)",
    age: "17+",
    extra: "No extra requirements",
  },
  {
    country: "China",
    neet: "Qualifying",
    pcb: "50% (Gen)",
    age: "18+",
    extra: "Physical examination required",
  },
  {
    country: "Uzbekistan",
    neet: "Qualifying",
    pcb: "50% (Gen)",
    age: "17+",
    extra: "HIV test required",
  },
];

export default function Eligibility() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="relative py-20 text-white overflow-hidden">
        <SEOHead
          title="MBBS Abroad Eligibility 2026 | NEET Requirement | Age Limit | VGLOBAL"
          description="MBBS abroad eligibility criteria for Indian students: minimum 50% marks in PCB, NEET qualification, age 17+, valid passport. Check if you qualify for MBBS abroad with VGLOBAL."
          keywords="MBBS abroad eligibility, NEET required MBBS abroad, MBBS eligibility India, PCB marks MBBS abroad"
          canonicalPath="/eligibility"
        />
        <img
          src="/assets/generated/eligibility-hero.dim_1200x600.jpg"
          alt="MBBS eligibility criteria"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Eligibility
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg">
            Eligibility Criteria for MBBS Abroad
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Check if you qualify to study MBBS at NMC-recognized universities
            abroad.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-navy mb-8 text-center">
              Basic Eligibility Requirements (NMC Guidelines)
            </h2>
            <div className="space-y-4">
              {criteria.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 p-5 bg-white border border-border rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-navy">{c.label}</div>
                    <div className="text-muted-foreground text-sm mt-1">
                      {c.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-amber-800 mb-2">
                    Important Note
                  </div>
                  <p className="text-amber-700 text-sm">
                    NEET qualification is mandatory as per NMC regulations for
                    Indian students studying MBBS abroad. Students who do NOT
                    qualify NEET are NOT eligible to study MBBS at any
                    university abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-10 text-center">
            Country-wise Eligibility
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-4">Country</th>
                  <th className="text-center px-5 py-4">NEET</th>
                  <th className="text-center px-5 py-4">PCB Marks</th>
                  <th className="text-center px-5 py-4">Age</th>
                  <th className="text-center px-5 py-4">Special Req.</th>
                </tr>
              </thead>
              <tbody>
                {countrySpecific.map((c) => (
                  <tr
                    key={c.country}
                    className="odd:bg-white even:bg-secondary border-b border-border"
                  >
                    <td className="px-5 py-3 font-medium text-navy">
                      {c.country}
                    </td>
                    <td className="text-center px-5 py-3">
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        {c.neet}
                      </Badge>
                    </td>
                    <td className="text-center px-5 py-3 text-sm">{c.pcb}</td>
                    <td className="text-center px-5 py-3 text-sm">{c.age}</td>
                    <td className="text-center px-5 py-3 text-sm text-muted-foreground">
                      {c.extra}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">
            Are You Eligible? Let Us Help!
          </h2>
          <p className="text-white/80 mb-8">
            Not sure if you qualify? Our counsellors will assess your profile
            for free.
          </p>
          <Link to="/counselling">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
              data-ocid="eligibility.counselling.button"
            >
              Check Eligibility Free
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
