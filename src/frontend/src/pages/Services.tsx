import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Banknote,
  BookOpen,
  Building2,
  Car,
  CheckCircle,
  CreditCard,
  FileText,
  Globe,
  GraduationCap,
  HeartPulse,
  Home,
  Phone,
  Plane,
  Shield,
  Smartphone,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import SEOHead from "../components/SEOHead";

const services = [
  {
    icon: FileText,
    title: "Admission Application Assistance",
    desc: "Filling out university applications can get confusing — different countries, different portals, different document formats. We handle all of that for you. From filling out the forms to submitting everything correctly, we make sure your application gives you the best shot at getting in.",
    points: [
      "Application form filling",
      "Document checklist & verification",
      "Submission tracking",
      "Admission letter follow-up",
    ],
  },
  {
    icon: Globe,
    title: "Visa Application Support",
    desc: "Student visa rejections are usually caused by small documentation errors. Our team knows exactly what each country's embassy needs, and we make sure your file is complete and correct from day one. We've handled hundreds of student visas — it's our bread and butter.",
    points: [
      "Visa document preparation",
      "Embassy appointment scheduling",
      "Mock interview preparation",
      "Visa tracking assistance",
    ],
  },
  {
    icon: Car,
    title: "Airport Pick-up & Drop Facility",
    desc: "Landing in a foreign country for the first time, alone, with bags and no idea where to go — that's stressful. So we just take care of it. We arrange a trusted pick-up from the airport directly to your hostel or accommodation. One less thing to worry about.",
    points: [
      "Reliable airport transfers",
      "Available in all 9 countries",
      "24/7 coordination",
      "Safe & comfortable transport",
    ],
  },
  {
    icon: Home,
    title: "Accommodation Assistance",
    desc: "Finding a good place to stay near your university, in a country you've never been to, is harder than it sounds. We've already vetted hostels and apartments in all the countries we work with. We point you to safe, clean options — and wherever possible, places with Indian food nearby.",
    points: [
      "Hostel booking assistance",
      "Indian food availability check",
      "Safety-vetted residences",
      "Room-sharing coordination",
    ],
  },
  {
    icon: Plane,
    title: "Pre-Departure Orientation",
    desc: "Before you board that flight, you should know what to expect. We run a thorough orientation session — covering local culture, banking, what to pack, academic prep, emergency contacts, and anything else you'll need to hit the ground running. Students who attend this always tell us they felt so much more confident.",
    points: [
      "Cultural orientation sessions",
      "Academic preparation guidance",
      "Banking & SIM card advice",
      "Emergency contact setup",
    ],
  },
  {
    icon: BookOpen,
    title: "NMC/FMGE Preparation Guidance",
    desc: "The FMGE pass rate is around 15–25%, which means most students who don't prepare from Year 1 struggle badly. We give you a clear roadmap from the start — which subjects matter most, where to get coaching, and how to keep up with FMGE prep alongside your regular MBBS coursework.",
    points: [
      "NMC compliance roadmap",
      "FMGE study strategy",
      "Recommended coaching centers",
      "Past paper resources",
    ],
  },
  {
    icon: Award,
    title: "Scholarship Assistance",
    desc: "There's actually quite a bit of financial aid available for Indian students going abroad — but most students don't know about it because they don't know where to look. We dig into merit scholarships, government grants, and university-specific aid to find what you qualify for, then help you apply.",
    points: [
      "Scholarship eligibility check",
      "Application assistance",
      "Government grant information",
      "University scholarship matching",
    ],
  },
  {
    icon: CreditCard,
    title: "Education Loan Assistance",
    desc: "Money shouldn't stop you from becoming a doctor. We work with trusted banks and NBFCs that specifically offer education loans for MBBS abroad, and we walk you through the paperwork so the process doesn't become another headache.",
    points: [
      "Bank tie-ups & recommendations",
      "Loan eligibility assessment",
      "Documentation support",
      "Repayment planning advice",
    ],
  },
  {
    icon: Users,
    title: "Post-Admission Student Support",
    desc: "We're not the type to disappear after you've boarded the flight. Our team stays in touch throughout your MBBS — Year 1 to internship. Got an issue with the university administration? Need guidance on something? We're a WhatsApp message away.",
    points: [
      "Ongoing WhatsApp support",
      "Annual check-in sessions",
      "Issue resolution with universities",
      "Alumni network access",
    ],
  },
  {
    icon: Shield,
    title: "Document Verification & Attestation",
    desc: "MEA attestation, embassy legalization, notarization — it sounds complicated because it genuinely is. But we've done it so many times that we know every step by heart. We guide you through the entire process so your documents are valid for both Indian and foreign requirements.",
    points: [
      "MEA attestation guidance",
      "Embassy legalization help",
      "Document translation assistance",
      "Notarization support",
    ],
  },
  {
    icon: Building2,
    title: "University Shortlisting & Career Counselling",
    desc: "Not every university is right for every student. We look at your NEET score, budget, language comfort, and where you want to practice after graduation — then give you a shortlist of universities that genuinely fit your profile. No pushing students into universities just for the sake of it.",
    points: [
      "Personalized university matching",
      "Budget-based recommendations",
      "Comparative analysis",
      "One-on-one counselling sessions",
    ],
  },
  {
    icon: GraduationCap,
    title: "NEET & Eligibility Guidance",
    desc: "The NMC's eligibility rules can be confusing, especially with the 2021 regulation changes. We break it all down for you — minimum NEET scores, age criteria, category-wise cutoffs — so you know exactly which universities and countries are realistic options for you.",
    points: [
      "NEET cutoff clarification",
      "Country-specific eligibility",
      "Alternative pathways advice",
      "Application timing guidance",
    ],
  },
  {
    icon: Smartphone,
    title: "SIM Card & Mobile Setup",
    desc: "Getting a local SIM card on your first day abroad might seem trivial, but it can be a real hassle if you don't know the local system. We give you country-specific guidance on the best local SIM plans for students and help you get connected quickly so you can stay in touch with family back home.",
    points: [
      "Best local SIM recommendations",
      "Data plan guidance for students",
      "Setup assistance on arrival",
      "India-calling plan advice",
    ],
  },
  {
    icon: Banknote,
    title: "Forex & Banking Guidance",
    desc: "Carrying cash abroad, knowing when to exchange, which cards work internationally, and how to manage your money as a student — these are things nobody tells you until you're already stuck. We walk you through forex options, student-friendly bank accounts, and how to manage your finances without losing money on bad exchange rates.",
    points: [
      "Forex exchange guidance",
      "Student bank account advice",
      "International money transfer tips",
      "Avoiding hidden currency fees",
    ],
  },
  {
    icon: HeartPulse,
    title: "Medical Insurance Assistance",
    desc: "Most countries require valid health insurance for your student visa. We help you find affordable insurance plans that meet visa requirements while genuinely covering you in case of a medical emergency abroad. Don't skip this — healthcare costs can be brutal if you're uninsured.",
    points: [
      "Visa-compliant insurance plans",
      "Affordable student coverage",
      "Claim process guidance",
      "Annual renewal reminders",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Hostel & Mess Facility Coordination",
    desc: "Food is a big deal when you're far from home. We coordinate hostel bookings at student residences that offer Indian or vegetarian food options, so you're not stuck eating unfamiliar food every day of the week. We know which hostels have Indian cooks or nearby Indian restaurants, and we factor that into our recommendations.",
    points: [
      "Indian-food-friendly hostels",
      "Vegetarian meal availability",
      "Hygiene & safety checks",
      "Hostel community support",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Counselling",
    desc: "Start with a free call. We listen to your goals, check your eligibility, and figure out what options make the most sense for you.",
  },
  {
    step: "02",
    title: "University Shortlisting",
    desc: "We give you a curated list of 3–5 universities that actually fit your profile — no generic recommendations.",
  },
  {
    step: "03",
    title: "Application & Admission",
    desc: "We do the paperwork. We follow up with the university. We get you that admission letter.",
  },
  {
    step: "04",
    title: "Visa & Documentation",
    desc: "Every document, correctly prepared, submitted on time. We've done this hundreds of times — we know what works.",
  },
  {
    step: "05",
    title: "Pre-Departure Briefing",
    desc: "You attend our orientation session and leave feeling confident. No nasty surprises when you land.",
  },
  {
    step: "06",
    title: "Arrival & Ongoing Support",
    desc: "We're at the airport (or someone we trust is). And we stay in touch throughout your degree.",
  },
];

export default function Services() {
  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="MBBS Abroad Services | Admission, Visa, Accommodation | VGLOBAL Jaipur"
        description="VGLOBAL offers complete end-to-end services for MBBS abroad: admission applications, student visa processing, airport pick-up, accommodation, forex guidance, medical insurance, and pre-departure orientation. Jaipur's trusted MBBS consultancy."
        keywords="MBBS abroad services, visa application MBBS, airport pickup MBBS, accommodation abroad, MBBS admission support, VGLOBAL services, medical insurance MBBS, forex guidance students"
        canonicalPath="/services"
      />
      {/* Hero */}
      <section className="relative py-20 text-white overflow-hidden min-h-[400px] flex items-center">
        <img
          src="/assets/generated/services-hero.dim_1200x600.jpg"
          alt="VGLOBAL MBBS abroad services - complete support"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center w-full">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            We Handle Everything. You Just Study.
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            From your first counselling call to graduating as a doctor abroad —
            VGLOBAL takes care of the process so you can stay focused on what
            actually matters.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/counselling">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-bold px-8"
                data-ocid="services.counselling.primary_button"
              >
                Book Free Counselling <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+917230032949">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-8"
                data-ocid="services.call.button"
              >
                <Phone className="mr-2 w-5 h-5" /> Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              What We Offer
            </Badge>
            <h2 className="text-4xl font-display font-bold text-navy mb-4">
              16 Services, One Goal
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              16 comprehensive services designed to make your MBBS abroad
              journey smooth, safe, and successful — from day one to graduation
              day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Card
                key={s.title}
                className="hover:shadow-xl transition-all duration-300 border-border hover:border-gold group"
                data-ocid={`services.item.${i + 1}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <s.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                  <ul className="space-y-1">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        <span className="text-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Our Process
            </Badge>
            <h2 className="text-4xl font-display font-bold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Six steps from your first call to boarding the flight.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative bg-white rounded-2xl p-6 shadow-sm border border-border hover:border-gold hover:shadow-md transition-all"
              >
                <div className="text-5xl font-display font-black text-gold/20 leading-none mb-2">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            All our services come as part of one transparent package — no
            surprise fees, no hidden charges. Just honest help from people
            who've been doing this for 10 years.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/counselling">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
                data-ocid="services.cta.primary_button"
              >
                Get Free Counselling
              </Button>
            </Link>
            <a href="tel:+917230032949">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-10"
                data-ocid="services.cta.secondary_button"
              >
                <Phone className="mr-2 w-5 h-5" /> +91-7230032949
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
