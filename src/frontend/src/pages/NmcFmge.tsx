import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { BookOpen, CheckCircle } from "lucide-react";
import SEOHead from "../components/SEOHead";

const tips = [
  "Start FMGE preparation from 1st year of MBBS — don't leave it until you're back in India",
  "Enroll in a dedicated FMGE/NExT coaching program early",
  "Focus hard on the high-yield subjects: Anatomy, Physiology, Biochemistry",
  "Go through previous year question papers (2010 onwards)",
  "Join online FMGE prep groups and communities",
  "Attend revision courses in India during your summer and winter breaks",
  "Keep clinical notes from Day 1 — they'll save you later",
  "Use VGLOBAL's network to get access to prep resources and alumni guidance",
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
      <section className="relative py-20 text-white overflow-hidden">
        <SEOHead
          title="NMC FMGE NExT Exam Guide 2026 | MBBS Abroad Screening Test | VGLOBAL"
          description="Complete guide to FMGE and NExT exam for foreign MBBS graduates. Exam pattern, syllabus, passing criteria, preparation tips. NMC-recognized university requirements for Indian students."
          keywords="FMGE exam guide, NExT exam India, foreign medical graduate exam, FMGE passing rate, NMC screening test MBBS"
          canonicalPath="/nmc-fmge"
        />
        <img
          src="/assets/generated/nmc-fmge-hero.dim_1200x600.jpg"
          alt="NMC FMGE exam preparation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            NMC / FMGE / NExT
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg">
            NMC Recognition & FMGE — What You Need to Know
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Before you go abroad for MBBS and after you come back, there are
            rules you need to follow. Here's what actually matters.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6">
                What Is NMC Recognition — and Why Does It Matter?
              </h2>
              <p className="text-muted-foreground mb-4">
                The National Medical Commission (NMC) — which replaced the old
                Medical Council of India — maintains a list of foreign medical
                universities that are approved for Indian students. If your
                university isn't on that list, it doesn't matter how good your
                grades are — you simply cannot practice medicine in India.
              </p>
              <p className="text-muted-foreground mb-4">
                This is why VGLOBAL only works with NMC-recognized universities.
                Before we enrol any student, we verify the NMC status of the
                university — and we can show you that documentation.
              </p>
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <strong className="text-green-800">VGLOBAL Guarantee</strong>
                </div>
                <p className="text-green-700 text-sm">
                  Every university we recommend is NMC-recognized. We provide
                  the NMC approval documentation before you commit to any
                  admission.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6">
                FMGE & NExT — The Exam You'll Face When You Return
              </h2>
              <p className="text-muted-foreground mb-4">
                The Foreign Medical Graduate Examination (FMGE) is the screening
                test every Indian student with a foreign MBBS degree must pass
                before they can register and practice in India. It's run by the
                National Board of Examinations (NBE). From 2024 onwards, FMGE is
                being replaced by NExT (National Exit Test), which will apply to
                both Indian and foreign graduates.
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
          <h2 className="text-3xl font-display font-bold text-navy mb-4 text-center">
            How to Actually Pass the FMGE
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            The FMGE pass rate is between 15–25%. That sounds scary, but the
            truth is most students who fail simply didn't prepare early enough.
            Start from Year 1 and you'll be in much better shape.
          </p>
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
            Still Have Questions About NMC or FMGE?
          </h2>
          <p className="text-white/80 mb-8">
            Talk to our counsellors. We'll walk you through the complete pathway
            — from choosing the right university to clearing the screening test
            and practicing in India.
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
