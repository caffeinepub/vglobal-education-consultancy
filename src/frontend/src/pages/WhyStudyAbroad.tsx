import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  CheckCircle,
  DollarSign,
  Globe,
  TrendingUp,
} from "lucide-react";
import SEOHead from "../components/SEOHead";

const benefits = [
  {
    Icon: DollarSign,
    title: "Affordable Fees",
    desc: "Study MBBS for $3,000-7,000/year compared to 50-100 lakhs in private Indian colleges. No capitation fees, no donation.",
  },
  {
    Icon: Award,
    title: "Global Recognition",
    desc: "Degrees recognized by NMC (India), WHO, and medical councils worldwide. Return to India and practice after clearing FMGE/NExT.",
  },
  {
    Icon: BookOpen,
    title: "Quality Education",
    desc: "Modern infrastructure, experienced faculty, and clinical exposure in major hospitals. Same MBBS curriculum as India.",
  },
  {
    Icon: Globe,
    title: "International Exposure",
    desc: "Study alongside students from 50+ countries. Build a global network, gain multicultural experience, and develop as a complete doctor.",
  },
  {
    Icon: TrendingUp,
    title: "Career Prospects",
    desc: "MBBS from recognized foreign universities opens doors in India and globally. Many students pursue PG abroad or return to India for FMGE.",
  },
  {
    Icon: CheckCircle,
    title: "Direct Admission",
    desc: "Most universities offer direct admission without entrance tests (other than NEET). Simple application process with VGLOBAL's guidance.",
  },
];

const comparison = [
  { aspect: "Annual Fees", india: "₹8-25 Lakhs", abroad: "$3,000-7,000" },
  { aspect: "Donation/Capitation", india: "₹20-100 Lakhs", abroad: "None" },
  { aspect: "Seats Availability", india: "Very Limited", abroad: "Abundant" },
  {
    aspect: "Entrance Exam",
    india: "NEET (Cut-throat)",
    abroad: "NEET (Qualifying)",
  },
  { aspect: "Medium of Instruction", india: "English", abroad: "English" },
  { aspect: "Duration", india: "5.5 Years", abroad: "5-6 Years" },
  {
    aspect: "NMC Recognition",
    india: "Yes",
    abroad: "Yes (select universities)",
  },
  {
    aspect: "Return on Investment",
    india: "High cost, high risk",
    abroad: "Low cost, high value",
  },
];

export default function WhyStudyAbroad() {
  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="Why Study MBBS Abroad? | Benefits & Advantages | VGLOBAL Jaipur"
        description="Why study MBBS abroad? Affordable fees ($3,000-7,000/yr), no capitation fees, NMC-recognized degrees, English medium, direct admission after NEET. Compare India vs abroad MBBS costs. VGLOBAL expert guidance."
        keywords="why study MBBS abroad, MBBS abroad benefits, affordable MBBS India, MBBS abroad vs India, reasons study medicine abroad"
        canonicalPath="/why-study-abroad"
      />
      <section className="relative py-20 text-white overflow-hidden min-h-[400px] flex items-center">
        <img
          src="/assets/generated/why-study-abroad.dim_1200x600.jpg"
          alt="Why study MBBS abroad - benefits for Indian students"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center w-full">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Why Study Abroad
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg">
            Why Study MBBS Abroad?
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow-md">
            Thousands of Indian students choose foreign medical universities
            every year. Here's why it makes sense for you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-4">
              Key Benefits
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <Card
                key={b.title}
                className="p-6 border-border hover:border-gold hover:shadow-lg transition-all"
              >
                <b.Icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-display font-bold text-navy text-xl mb-2">
                  {b.title}
                </h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-4">
              India vs. Abroad — Cost Comparison
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-4 font-semibold">Aspect</th>
                  <th className="text-center px-6 py-4 font-semibold">
                    Private MBBS in India
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-gold">
                    MBBS Abroad
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.aspect}
                    className="odd:bg-white even:bg-secondary border-b border-border"
                  >
                    <td className="px-6 py-3 font-medium text-navy">
                      {row.aspect}
                    </td>
                    <td className="text-center px-6 py-3 text-muted-foreground">
                      {row.india}
                    </td>
                    <td className="text-center px-6 py-3 text-gold font-semibold">
                      {row.abroad}
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
            Ready to Explore Your Options?
          </h2>
          <p className="text-white/80 mb-8">
            Our counsellors will help you choose the best country and university
            for your profile.
          </p>
          <Link to="/counselling">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
              data-ocid="why.counselling.button"
            >
              Get Free Counselling
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
