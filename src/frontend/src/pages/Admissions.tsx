import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  FileText,
  GraduationCap,
  Plane,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Free Counselling",
    desc: "Book a free counselling session with VGLOBAL. Our experts assess your NEET score, academic profile, budget, and preferences to recommend the best country and university.",
  },
  {
    icon: CheckCircle,
    step: "02",
    title: "Application & Document Submission",
    desc: "Submit your application with required documents: 10th/12th marksheets, NEET scorecard, passport, photographs, birth certificate, and medical fitness certificate.",
  },
  {
    icon: Award,
    step: "03",
    title: "Admission Letter",
    desc: "Upon acceptance, the university issues an official Admission/Invitation Letter. VGLOBAL verifies the authenticity and guides you on next steps.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Visa Application",
    desc: "VGLOBAL assists with complete student visa documentation. We guide you through the country-specific visa process, which typically takes 2-4 weeks.",
  },
  {
    icon: Plane,
    step: "05",
    title: "Pre-Departure Orientation",
    desc: "Attend VGLOBAL's pre-departure session covering accommodation, university registration, local travel, banking, and cultural tips for your destination country.",
  },
  {
    icon: GraduationCap,
    step: "06",
    title: "University Registration & Departure",
    desc: "Fly to your destination! VGLOBAL coordinates airport pickup and university registration support. Begin your MBBS journey with confidence.",
  },
];

const documents = [
  "10th Grade Marksheet & Certificate",
  "12th Grade Marksheet & Certificate (PCB)",
  "NEET Scorecard (valid year)",
  "Valid Indian Passport (6+ months validity)",
  "10 Passport-size Photographs (white background)",
  "Birth Certificate",
  "Medical Fitness Certificate",
  "HIV Test Report (for some countries)",
  "Bank Statement (financial proof)",
  "Police Clearance Certificate (some countries)",
  "Migration Certificate from School/College Board",
  "Affidavit/Gap Certificate (if applicable)",
];

export default function Admissions() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Admissions Process
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Step-by-Step Admissions Process
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            VGLOBAL handles your entire admission journey — from application to
            airport pickup.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <Card
                key={s.title}
                className="border-border hover:border-gold hover:shadow-lg transition-all"
                data-ocid={`admissions.step.item.${i + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-navy text-gold font-display font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                      {s.step}
                    </div>
                    <s.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-4 text-center">
            Required Documents
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Prepare these documents before starting your application
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {documents.map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-3 bg-white rounded-lg p-4 border border-border"
              >
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="text-sm text-foreground">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">
            Start Your Application Today
          </h2>
          <p className="text-white/80 mb-8">
            Book a free counselling session and we'll guide you through the
            entire process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/counselling">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
                data-ocid="admissions.counselling.button"
              >
                Book Free Counselling
              </Button>
            </Link>
            <Link to="/eligibility">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-10"
              >
                Check Eligibility
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
