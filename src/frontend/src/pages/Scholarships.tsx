import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Award, CheckCircle } from "lucide-react";
import SEOHead from "../components/SEOHead";

const scholarships = [
  {
    name: "Government of India ICCR Scholarship",
    country: "Multiple Countries",
    value: "Full tuition + stipend",
    eligibility: "NEET qualified, merit-based, apply through ICCR portal",
    type: "Government",
  },
  {
    name: "Russian Government Scholarship",
    country: "Russia",
    value: "Full tuition waiver",
    eligibility:
      "85%+ in 12th, NEET qualified, apply through Rossotrudnichestvo",
    type: "Government",
  },
  {
    name: "Kyrgyz State University Merit Scholarship",
    country: "Kyrgyzstan",
    value: "20-30% fee reduction",
    eligibility: "Top NEET scores (550+), first year performance-based",
    type: "Merit",
  },
  {
    name: "Chinese Government Scholarship (CSC)",
    country: "China",
    value: "Full tuition + accommodation + stipend",
    eligibility: "NEET qualified, age <25, apply through CSC portal",
    type: "Government",
  },
  {
    name: "Georgian State Scholarship",
    country: "Georgia",
    value: "Partial fee reduction",
    eligibility: "Academic merit, NEET qualification",
    type: "Merit",
  },
  {
    name: "VGLOBAL Early Bird Scholarship",
    country: "All Countries",
    value: "Application fee waiver + processing discount",
    eligibility: "Apply through VGLOBAL before June 30th",
    type: "VGLOBAL",
  },
];

export default function Scholarships() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="relative py-20 text-white overflow-hidden">
        <SEOHead
          title="Scholarships for MBBS Abroad | Government & University Grants | VGLOBAL"
          description="Scholarships available for MBBS abroad: Russian Government Scholarship, ICCR Scholarship, Chinese Government CSC Scholarship, University merit scholarships. Apply through VGLOBAL Jaipur."
          keywords="MBBS abroad scholarships, Indian students scholarships abroad, government scholarship MBBS, ICCR scholarship MBBS, Russia scholarship India"
          canonicalPath="/scholarships"
        />
        <img
          src="/assets/generated/scholarships-hero.dim_1200x600.jpg"
          alt="Scholarships for MBBS abroad students"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Scholarships
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg">
            Scholarships for MBBS Abroad
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Various scholarship opportunities available for deserving Indian
            students pursuing MBBS abroad.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {scholarships.map((s, i) => (
              <Card
                key={s.name}
                className="border-border hover:border-gold hover:shadow-lg transition-all"
                data-ocid={`scholarships.item.${i + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Award className="w-8 h-8 text-gold" />
                    <Badge
                      className={`text-xs ${
                        s.type === "Government"
                          ? "bg-blue-100 text-blue-800"
                          : s.type === "Merit"
                            ? "bg-green-100 text-green-800"
                            : "bg-gold/20 text-gold"
                      }`}
                    >
                      {s.type}
                    </Badge>
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-1">
                    {s.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Country: {s.country}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-gold" />
                    <span className="text-gold font-semibold text-sm">
                      {s.value}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Eligibility:</strong> {s.eligibility}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">
            Find Scholarships You Qualify For
          </h2>
          <p className="text-white/80 mb-8">
            Our counsellors will identify all scholarship opportunities for your
            profile and help you apply.
          </p>
          <Link to="/counselling">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
              data-ocid="scholarships.counselling.button"
            >
              Get Scholarship Guidance
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
