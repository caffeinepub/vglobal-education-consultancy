import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  Eye,
  Globe,
  Heart,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & CEO",
    exp: "15 years in medical education consulting",
  },
  {
    name: "Ms. Priya Singh",
    role: "Head of Admissions",
    exp: "Expert in university placements across 9 countries",
  },
  {
    name: "Mr. Amit Sharma",
    role: "Visa Counsellor",
    exp: "Specialized in student visa processing",
  },
  {
    name: "Ms. Kavita Joshi",
    role: "Student Relations",
    exp: "Dedicated support for enrolled students",
  },
];

const milestones = [
  { year: "2014", event: "VGLOBAL founded in Jaipur, Rajasthan" },
  { year: "2015", event: "First batch of 15 students placed in Kyrgyzstan" },
  { year: "2017", event: "Expanded to Russia and Georgia" },
  { year: "2019", event: "100+ students successfully placed" },
  {
    year: "2021",
    event: "Expanded to 9 countries with 50+ university partnerships",
  },
  { year: "2023", event: "500+ successful student placements" },
  { year: "2024", event: "Celebrating 10 years of excellence" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To empower every aspiring Indian doctor with transparent guidance, affordable pathways, and unwavering support to study MBBS at NMC-recognized universities abroad.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be India's most trusted and impactful medical education consultancy, enabling a generation of Indian doctors to serve globally and at home.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Transparency, integrity, student-first approach, and commitment to excellence in every interaction. We treat every student's dream as our own responsibility.",
  },
];

const statsData = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Students Placed" },
  { icon: Globe, value: "9+", label: "Countries" },
  { icon: CheckCircle, value: "50+", label: "Partner Universities" },
];

export default function About() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            About VGLOBAL
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            10 Years of Transforming Medical Dreams
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Based in Jaipur, Rajasthan — India's most trusted MBBS abroad
            consultancy since 2014
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
                Our Story
              </Badge>
              <h2 className="text-3xl font-display font-bold text-navy mb-6">
                A Decade of Excellence in Medical Education
              </h2>
              <p className="text-muted-foreground mb-4">
                VGLOBAL was founded in 2014 with a singular mission: to make
                quality medical education accessible to every deserving Indian
                student, regardless of financial constraints. We recognized that
                thousands of talented students from Rajasthan and across India
                were unable to pursue their MBBS dreams due to limited MBBS
                seats and prohibitive donation fees in India.
              </p>
              <p className="text-muted-foreground mb-4">
                Operating from the heart of Jaipur, near SMS Medical College —
                one of India's premier medical institutions — we built a deep
                understanding of medical education requirements and student
                aspirations.
              </p>
              <p className="text-muted-foreground">
                Over 10 years, we have placed 500+ students in top medical
                universities across Kyrgyzstan, Russia, Georgia, Kazakhstan,
                Philippines, Bangladesh, China, Uzbekistan, and Ukraine.
              </p>
            </div>
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-navy text-gold font-bold text-sm px-3 py-1 rounded-full shrink-0 mt-0.5">
                    {m.year}
                  </div>
                  <p className="text-foreground">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <Card key={v.title} className="text-center p-6 border-border">
                <v.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold text-navy mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm">{v.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-4">
              Our Expert Team
            </h2>
            <p className="text-muted-foreground">
              Dedicated professionals committed to your success
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Card
                key={member.name}
                className="text-center p-6 hover:shadow-lg transition-shadow border-border"
                data-ocid={`about.team.item.${i + 1}`}
              >
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-display font-bold text-xl">
                    {member.name[0]}
                  </span>
                </div>
                <h4 className="font-display font-semibold text-navy mb-1">
                  {member.name}
                </h4>
                <div className="text-gold text-sm font-medium mb-2">
                  {member.role}
                </div>
                <p className="text-muted-foreground text-xs">{member.exp}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {statsData.map((s) => (
              <div key={s.label}>
                <s.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-white">
                  {s.value}
                </div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-navy mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-muted-foreground mb-8">
            Book a free counselling session with our experienced team
          </p>
          <Link to="/counselling">
            <Button
              size="lg"
              className="bg-navy hover:bg-navy-dark text-white font-semibold px-10"
              data-ocid="about.counselling.button"
            >
              Book Free Counselling
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
