import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";
import SEOHead from "../components/SEOHead";

const visaInfo = [
  {
    country: "Kyrgyzstan",
    flag: "🇰🇬",
    type: "Student Visa",
    processing: "7-14 days",
    validity: "1 year (renewable)",
    docs: [
      "Admission Letter",
      "Valid Passport",
      "Bank Statement",
      "Medical Certificate",
      "Passport Photos",
    ],
  },
  {
    country: "Russia",
    flag: "🇷🇺",
    type: "Student Visa (D)",
    processing: "3-4 weeks",
    validity: "1 year",
    docs: [
      "Invitation Letter",
      "Valid Passport",
      "Medical Certificate",
      "HIV Test",
      "Insurance",
      "Photos",
    ],
  },
  {
    country: "Georgia",
    flag: "🇬🇪",
    type: "Student Visa",
    processing: "2-3 weeks",
    validity: "1 year",
    docs: ["Admission Letter", "Passport", "Bank Statement", "Passport Photos"],
  },
  {
    country: "Kazakhstan",
    flag: "🇰🇿",
    type: "Student Visa",
    processing: "2-3 weeks",
    validity: "1 year",
    docs: [
      "Invitation Letter",
      "Passport",
      "Medical Certificate",
      "Police Clearance",
      "Photos",
    ],
  },
  {
    country: "Philippines",
    flag: "🇵🇭",
    type: "Student Visa (9f)",
    processing: "3-4 weeks",
    validity: "1 year",
    docs: [
      "Acceptance Letter",
      "Passport",
      "Financial Documents",
      "Health Certificate",
      "Photos",
    ],
  },
  {
    country: "Bangladesh",
    flag: "🇧🇩",
    type: "Student Visa",
    processing: "1-2 weeks",
    validity: "1 year",
    docs: ["Admission Letter", "Passport", "Bank Statement", "Photos"],
  },
  {
    country: "China",
    flag: "🇨🇳",
    type: "X1 Visa",
    processing: "2-3 weeks",
    validity: "Until program end",
    docs: [
      "JW202 Form",
      "Passport",
      "Medical Exam Report",
      "HIV Certificate",
      "Bank Statement",
      "Photos",
    ],
  },
  {
    country: "Uzbekistan",
    flag: "🇺🇿",
    type: "Student Visa",
    processing: "2-3 weeks",
    validity: "1 year",
    docs: [
      "Invitation Letter",
      "Passport",
      "Medical Certificate",
      "HIV Test",
      "Photos",
    ],
  },
];

export default function Visa() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="relative py-20 text-white overflow-hidden">
        <SEOHead
          title="MBBS Abroad Student Visa Guide 2026 | All Countries | VGLOBAL"
          description="Complete student visa guide for MBBS abroad. Country-wise visa requirements, documents needed, processing time, fees. VGLOBAL experts handle entire visa process for students from Jaipur."
          keywords="MBBS abroad student visa, visa requirements MBBS, student visa Kyrgyzstan, Russia student visa India, MBBS visa process"
          canonicalPath="/visa"
        />
        <img
          src="/assets/generated/visa-hero.dim_1200x600.jpg"
          alt="Student visa guidance for MBBS abroad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Visa Guidance
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg">
            Student Visa Guidance
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            VGLOBAL assists with complete visa documentation and application for
            all destination countries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {visaInfo.map((v, i) => (
              <Card
                key={v.country}
                className="border-border hover:border-gold hover:shadow-lg transition-all"
                data-ocid={`visa.item.${i + 1}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{v.flag}</span>
                    <div>
                      <CardTitle className="text-navy">{v.country}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {v.type} · Processing: {v.processing} · Validity:{" "}
                        {v.validity}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-navy mb-2">
                    Required Documents:
                  </p>
                  <ul className="space-y-1">
                    {v.docs.map((doc) => (
                      <li
                        key={doc}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-gold shrink-0" />{" "}
                        {doc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need Visa Assistance?
          </h2>
          <p className="text-white/80 mb-8">
            VGLOBAL's expert team handles all your visa documentation. 100% visa
            success rate for our students.
          </p>
          <Link to="/counselling">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
              data-ocid="visa.counselling.button"
            >
              Get Visa Help
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
