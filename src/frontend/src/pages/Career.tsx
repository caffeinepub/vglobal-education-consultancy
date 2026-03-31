import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Clock, MapPin } from "lucide-react";

const openings = [
  {
    title: "Senior Education Counsellor",
    type: "Full-time",
    location: "Jaipur, Rajasthan",
    exp: "2-5 years",
    desc: "Provide expert counselling to NEET aspirants about MBBS abroad options. Build relationships with students and parents, manage admissions pipeline.",
  },
  {
    title: "Visa Documentation Specialist",
    type: "Full-time",
    location: "Jaipur, Rajasthan",
    exp: "1-3 years",
    desc: "Handle student visa applications for 9 countries. Coordinate with embassies, verify documents, and ensure 100% visa success rate.",
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Jaipur / Remote",
    exp: "1-2 years",
    desc: "Manage VGLOBAL's social media presence, run lead generation campaigns, and create content for MBBS abroad education.",
  },
  {
    title: "Student Relationship Manager",
    type: "Full-time",
    location: "Jaipur, Rajasthan",
    exp: "0-2 years",
    desc: "Provide end-to-end support to enrolled students from admission to departure. Handle student queries and coordinate with universities.",
  },
];

export default function Career() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Careers
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Work with VGLOBAL
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join our mission to transform medical education for Indian students.
            We're a growing team based in Jaipur.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-10 text-center">
            Current Openings
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {openings.map((job, i) => (
              <Card
                key={job.title}
                className="border-border hover:border-gold hover:shadow-lg transition-all"
                data-ocid={`career.item.${i + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Briefcase className="w-8 h-8 text-gold" />
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {job.type}
                    </Badge>
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-3">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {job.desc}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gold" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-gold" /> {job.exp}
                    </span>
                  </div>
                  <a href="mailto:careers@vglobal.in">
                    <Button
                      className="bg-navy hover:bg-navy-dark text-white w-full"
                      data-ocid={`career.apply.button.${i + 1}`}
                    >
                      Apply Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-navy mb-4">
            Don't See a Match?
          </h2>
          <p className="text-muted-foreground mb-8">
            Send your CV to careers@vglobal.in. We're always looking for
            passionate people.
          </p>
          <a href="mailto:careers@vglobal.in">
            <Button
              className="bg-navy hover:bg-navy-dark text-white px-8"
              data-ocid="career.general.button"
            >
              Send Your CV
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
