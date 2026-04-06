import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  FileText,
  GraduationCap,
  Plane,
} from "lucide-react";
import { motion } from "motion/react";
import SEOHead from "../components/SEOHead";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Free Counselling",
    desc: "Start with a free call. We look at your NEET score, academic background, budget, and preferred country — then give you a shortlist of universities that actually match your profile. No generic advice, no sales pitch.",
  },
  {
    icon: CheckCircle,
    step: "02",
    title: "Application & Document Submission",
    desc: "Once you've chosen a university, we help you pull together everything needed — 10th/12th marksheets, NEET scorecard, passport, photos, birth certificate, and medical fitness certificate. We check everything before it goes out.",
  },
  {
    icon: Award,
    step: "03",
    title: "Admission Letter",
    desc: "After the university accepts your application, they'll issue an official Admission/Invitation Letter. We verify it's legitimate and guide you on exactly what to do next.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Visa Application",
    desc: "We handle your student visa documentation from start to finish. Every country's embassy has different requirements — we know them all. Most student visas take 2–4 weeks to process.",
  },
  {
    icon: Plane,
    step: "05",
    title: "Pre-Departure Orientation",
    desc: "Before you fly, we sit down with you for a full pre-departure session. We cover accommodation, how to register at the university, local travel, banking, what to pack, and what to expect culturally. You won't be going in blind.",
  },
  {
    icon: GraduationCap,
    step: "06",
    title: "University Registration & Departure",
    desc: "Time to go! We coordinate your airport pickup at the destination and help with university registration. Our support doesn't stop at the airport gate.",
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
      <section className="relative py-20 text-white overflow-hidden">
        <SEOHead
          title="MBBS Abroad Admissions 2026 | Step-by-Step Process | VGLOBAL Jaipur"
          description="Complete MBBS abroad admission process guide. Document checklist, application steps, university selection, visa process. VGLOBAL handles everything end-to-end. Free counselling: +91-7230032949."
          keywords="MBBS abroad admission process, MBBS application documents, MBBS abroad apply 2026, admission timeline MBBS"
          canonicalPath="/admissions"
        />
        <img
          src="/assets/generated/admissions-process.dim_1200x600.jpg"
          alt="MBBS admission process"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Admissions Process
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg">
            How the Admission Process Works
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Six steps from your first conversation with us to boarding your
            flight. We handle most of it — you just show up.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Step by Step
            </Badge>
            <h2 className="text-3xl font-display font-bold text-navy mb-3">
              Your Journey to Medical School
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Six simple steps — we handle most of them, you just show up.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            <div className="space-y-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  className="relative flex gap-6 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  data-ocid={`admissions.step.item.${i + 1}`}
                >
                  {/* Step bubble */}
                  <div className="shrink-0 w-16 h-16 bg-navy text-gold rounded-full flex flex-col items-center justify-center border-2 border-gold shadow-lg z-10">
                    <span className="font-display font-bold text-lg leading-none">
                      {s.step}
                    </span>
                  </div>
                  {/* Content card */}
                  <div
                    className={`flex-1 bg-white border-2 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? "border-gold/30" : "border-navy/20"}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <s.icon className="w-5 h-5 text-gold shrink-0" />
                      <h3 className="font-display font-bold text-navy text-lg">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-4 text-center">
            Documents You'll Need
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Start gathering these early — last-minute document runs are
            stressful.
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
            Ready to Start?
          </h2>
          <p className="text-white/80 mb-8">
            Book a free counselling session and let's figure out your next step
            together.
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
