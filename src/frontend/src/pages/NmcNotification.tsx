import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle,
  ExternalLink,
  FileText,
  Phone,
  Shield,
  XCircle,
} from "lucide-react";
import SEOHead from "../components/SEOHead";

const nmcRules = [
  {
    icon: Shield,
    title: "NMC-Recognized University is Non-Negotiable",
    desc: "Before you apply anywhere, check if the university is on the NMC's approved list. This isn't optional — if your university isn't recognized by the NMC, you won't be allowed to practice in India after graduating, no matter how good your grades are.",
    status: "mandatory",
  },
  {
    icon: FileText,
    title: "NEET Score is Mandatory (Section 13(4B), NMC Act 2019)",
    desc: "Under the NMC Act 2019, every Indian student who wants to study medicine abroad must first clear NEET. There's no way around this. Minimum qualifying percentile: 50th for General category, 40th for SC/ST/OBC.",
    status: "mandatory",
  },
  {
    icon: BookOpen,
    title: "FMGE / Screening Test (Gazette Notified: 18 Nov 2021)",
    desc: "Once you're back from your MBBS, you'll need to pass the FMGE Screening Test before you can register and practice in India. The pass rate historically sits between 15–25%, so preparation needs to start from Year 1, not after you return.",
    status: "mandatory",
  },
  {
    icon: CheckCircle,
    title: "Minimum 54 Months + 12-Month Internship Abroad",
    desc: "Your MBBS program must be at least 54 months (about 4.5 years) of actual study — not counting the internship. On top of that, you need to complete a 12-month internship at an NMC-approved hospital in the same country. Total: 66 months minimum.",
    status: "mandatory",
  },
  {
    icon: Shield,
    title: "Bond/Undertaking Before You Leave India",
    desc: "Since the 2021 regulations came into effect, every student heading abroad for medicine must submit a signed bond/undertaking to the NMC before departure. This confirms you understand the FMGE requirement and NMC rules.",
    status: "mandatory",
  },
  {
    icon: AlertTriangle,
    title: "Old Rules Still Apply for Pre-2021 Students",
    desc: "If you took admission before November 18, 2021, the older 2002 screening test regulations will apply to you — not the 2021 ones. If you're unsure which set of rules covers you, talk to us before making any decisions.",
    status: "important",
  },
];

const fmgeDetails = [
  {
    label: "Exam Name",
    value: "Foreign Medical Graduate Examination (FMGE) / Screening Test",
  },
  {
    label: "Conducted By",
    value: "National Board of Examinations (NBE), New Delhi",
  },
  { label: "Gazette Notification", value: "18 November 2021" },
  { label: "Frequency", value: "Twice a year — June and December" },
  { label: "Total Questions", value: "300 MCQs (150 + 150 in 2 parts)" },
  { label: "Duration", value: "3.5 hours (150 min + 60 min break + 150 min)" },
  { label: "Passing Score", value: "150 out of 300 (50%)" },
  { label: "Negative Marking", value: "No negative marking" },
  { label: "Mode", value: "Computer Based Test (CBT)" },
  {
    label: "Who Must Appear",
    value: "All Indian citizens with foreign MBBS degree",
  },
  {
    label: "Eligibility",
    value: "Completed 54-month MBBS + 12-month internship abroad",
  },
];

const approvalCriteria = [
  "University must be in the NMC's approved list of foreign medical colleges",
  "University must be listed in the World Directory of Medical Schools (WDOMS)",
  "University must be WHO-listed",
  "University must be recognized by the medical council of that country",
  "MBBS program must be taught in English or an acceptable medium",
  "Program must be at least 54 months + 12-month internship",
  "University must not be blacklisted or under scrutiny by NMC",
];

const doNotDo = [
  "Don't apply to a university without checking the NMC list first",
  "Don't take admission at a university not listed on the official NMC website",
  "Don't go abroad for MBBS without qualifying NEET",
  "Don't trust any agent who promises you an 'exemption' from FMGE — there's no such thing",
  "Don't pay capitation or donation fees to any university",
  "Don't leave India without submitting the mandatory bond/undertaking to NMC",
];

export default function NmcNotification() {
  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="NMC Screening Test Regulations 2021 | MBBS Abroad Rules for Indian Students | VGLOBAL"
        description="NMC Screening Test Regulations 2021 gazette-notified on 18 Nov 2021. NEET mandatory, NMC-listed universities only, FMGE required to practice in India, bond/undertaking before departure. Complete guide for Indian students."
        keywords="NMC regulations 2021, NMC screening test 2021, FMGE exam rules India, NEET mandatory MBBS abroad, NMC approved universities, MBBS abroad eligibility India 2021"
        canonicalPath="/nmc-notification"
      />
      {/* Hero */}
      <section className="relative py-20 text-white overflow-hidden min-h-[380px] flex items-center">
        <img
          src="/assets/generated/nmc-notification-hero.dim_1200x600.jpg"
          alt="NMC Screening Test Regulations 2021 for MBBS abroad students"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center w-full">
          <Badge className="bg-red-500/20 text-red-300 border-red-400/30 mb-4">
            ⚠️ NMC 2021 Regulations — Currently in Effect
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            NMC Screening Test Regulations 2021
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            If you're planning to study MBBS abroad and return to practice in
            India, these are the rules that apply to you right now. Read every
            point carefully — missing any one of these can cost you your entire
            career.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+917230032949">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-bold px-8"
                data-ocid="nmc.call.primary_button"
              >
                <Phone className="mr-2 w-5 h-5" /> Call Now for Guidance
              </Button>
            </a>
            <Link to="/counselling">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-8"
                data-ocid="nmc.counselling.button"
              >
                Book Free Counselling <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <Alert className="border-amber-400 bg-amber-50">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertDescription className="text-amber-800 font-medium">
              <strong>NMC 2021 Regulations (Active):</strong> The NMC Screening
              Test Regulations 2021 were gazette-notified on 18 November 2021
              and are currently in effect. NEET is mandatory, only NMC-listed
              universities are valid, and you must clear FMGE to practice in
              India. All students going abroad must submit a bond/undertaking
              before leaving.
            </AlertDescription>
          </Alert>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="https://www.nmc.org.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="outline"
                className="border-amber-500 text-amber-700 hover:bg-amber-100 text-xs"
                data-ocid="nmc.official-website.button"
              >
                <ExternalLink className="mr-1.5 w-3.5 h-3.5" /> Official NMC
                Website
              </Button>
            </a>
            <a
              href="https://www.nmc.org.in/acts-rules-regulations/rules-regulations/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="outline"
                className="border-amber-500 text-amber-700 hover:bg-amber-100 text-xs"
                data-ocid="nmc.regulations.button"
              >
                <ExternalLink className="mr-1.5 w-3.5 h-3.5" /> View 2021
                Regulations
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Key Rules */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Key Regulations
            </Badge>
            <h2 className="text-3xl font-display font-bold text-navy mb-2">
              What the 2021 Regulations Actually Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These are the rules you'll be held to if you start your MBBS
              abroad on or after November 18, 2021.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {nmcRules.map((rule) => (
              <Card
                key={rule.title}
                className={`border-2 ${
                  rule.status === "mandatory"
                    ? "border-red-200 hover:border-red-400"
                    : "border-amber-200 hover:border-amber-400"
                } transition-colors`}
              >
                <CardContent className="p-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                      rule.status === "mandatory" ? "bg-red-50" : "bg-amber-50"
                    }`}
                  >
                    <rule.icon
                      className={`w-5 h-5 ${
                        rule.status === "mandatory"
                          ? "text-red-500"
                          : "text-amber-600"
                      }`}
                    />
                  </div>
                  <Badge
                    className={`mb-2 text-xs ${
                      rule.status === "mandatory"
                        ? "bg-red-100 text-red-700 border-red-200"
                        : "bg-amber-100 text-amber-700 border-amber-200"
                    }`}
                  >
                    {rule.status === "mandatory" ? "Mandatory" : "Important"}
                  </Badge>
                  <h3 className="font-display font-bold text-navy mb-2 text-base">
                    {rule.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{rule.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FMGE Details */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              FMGE Exam Details
            </Badge>
            <h2 className="text-3xl font-display font-bold text-navy mb-2">
              FMGE Screening Test — The Numbers You Need to Know
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              You'll face this exam when you come back from your MBBS. The
              better you understand it now, the better prepared you'll be.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow border border-border">
            <table className="w-full text-sm">
              <tbody>
                {fmgeDetails.map((item, i) => (
                  <tr
                    key={item.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-secondary"}
                  >
                    <td className="px-6 py-3 font-semibold text-navy w-48">
                      {item.label}
                    </td>
                    <td className="px-6 py-3 text-foreground">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.nmc.org.in/acts-rules-regulations/rules-regulations/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
                data-ocid="nmc.fmge-details.regulations-link"
              >
                <ExternalLink className="mr-2 w-4 h-4" /> View Official NMC 2021
                Regulations
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* University Approval Criteria */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <Badge className="bg-green-100 text-green-700 border-green-200 mb-3">
                ✅ Approval Checklist
              </Badge>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                What Makes a University NMC-Approved?
              </h2>
              <p className="text-muted-foreground mb-6">
                Your chosen university needs to tick every one of these boxes.
                If it doesn't, don't go there — regardless of what anyone tells
                you.
              </p>
              <ul className="space-y-3">
                {approvalCriteria.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Badge className="bg-red-100 text-red-700 border-red-200 mb-3">
                🚫 Common Mistakes to Avoid
              </Badge>
              <h2 className="text-2xl font-display font-bold text-navy mb-4">
                Things That Can End Your Medical Career Before It Starts
              </h2>
              <p className="text-muted-foreground mb-6">
                These aren't scare tactics — these are real mistakes students
                have made, and some of them couldn't recover from it.
              </p>
              <ul className="space-y-3">
                {doNotDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Not Sure How These Rules Apply to You?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            VGLOBAL only works with NMC-recognized universities. Talk to our
            counsellors and we'll walk you through exactly where you stand and
            what you need to do.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+917230032949">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
                data-ocid="nmc.cta.call_button"
              >
                <Phone className="mr-2 w-5 h-5" /> Call Now
              </Button>
            </a>
            <Link to="/counselling">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-10"
                data-ocid="nmc.cta.counselling_button"
              >
                Book Free Counselling <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a
              href="https://www.nmc.org.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-10"
                data-ocid="nmc.cta.nmc-website_button"
              >
                <ExternalLink className="mr-2 w-5 h-5" /> NMC Official Website
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
