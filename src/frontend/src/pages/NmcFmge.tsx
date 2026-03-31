import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { BookOpen, CheckCircle } from "lucide-react";

const tips = [
  "Start FMGE preparation from 1st year of MBBS",
  "Enroll in dedicated FMGE/NExT coaching programs",
  "Focus on high-yield subjects: Anatomy, Physiology, Biochemistry",
  "Practice previous year question papers (2010-2023)",
  "Join online FMGE prep communities",
  "Attend revision courses in India during vacations",
  "Maintain clinical notes alongside academic studies",
  "Use VGLOBAL's network for access to prep resources",
];

const examFacts = [
  { label: "Exam", value: "FMGE (transitioning to NExT)" },
  { label: "Conducted by", value: "National Board of Examinations (NBE)" },
  { label: "Frequency", value: "Twice a year (June & December)" },
  { label: "Format", value: "300 MCQ questions, 3.5 hours" },
  { label: "Pass Mark", value: "50% (150/300)" },
  { label: "Attempts", value: "No limit" },
];

export default function NmcFmge() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            NMC / FMGE / NExT
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            NMC Recognition & FMGE/NExT Guide
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Everything you need to know about practicing medicine in India after
            studying MBBS abroad.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6">
                What is NMC Recognition?
              </h2>
              <p className="text-muted-foreground mb-4">
                The National Medical Commission (NMC), formerly Medical Council
                of India (MCI), maintains a list of approved foreign medical
                universities. Indian students must study ONLY at NMC-listed
                universities to be eligible to practice medicine in India after
                graduation.
              </p>
              <p className="text-muted-foreground mb-4">
                VGLOBAL only works with NMC-recognized universities. Before
                enrolling a student, we verify the NMC status of every
                university.
              </p>
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <strong className="text-green-800">VGLOBAL Guarantee</strong>
                </div>
                <p className="text-green-700 text-sm">
                  All universities recommended by VGLOBAL are NMC-recognized. We
                  provide NMC approval documentation before admission.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6">
                FMGE & NExT Examination
              </h2>
              <p className="text-muted-foreground mb-4">
                Foreign Medical Graduates Examination (FMGE) is a screening test
                conducted by NBE for Indian students who have completed MBBS
                from abroad. From 2024, this is being replaced by NExT (National
                Exit Test).
              </p>
              <div className="space-y-4">
                {examFacts.map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 p-3 bg-secondary rounded-lg"
                  >
                    <span className="text-gold font-semibold text-sm min-w-[130px]">
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
            FMGE/NExT Preparation Tips
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tips.map((tip) => (
              <div
                key={tip}
                className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border"
              >
                <BookOpen className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">
            Get Guidance on NMC & FMGE
          </h2>
          <p className="text-white/80 mb-8">
            Our counsellors will help you understand the complete pathway from
            MBBS abroad to practicing in India.
          </p>
          <Link to="/counselling">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
              data-ocid="nmc.counselling.button"
            >
              Talk to Our Expert
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
