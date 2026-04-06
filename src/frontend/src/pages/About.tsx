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
import SEOHead from "../components/SEOHead";

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & CEO",
    exp: "10+ years in medical education consulting",
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
  { year: "2023", event: "2,000+ successful student placements" },
  { year: "2026", event: "Celebrating 10+ years of excellence" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Every Indian student who wants to become a doctor deserves a real shot at it — regardless of budget. We're here to make that happen through honest guidance, proper NMC-recognized pathways, and support that doesn't stop at admission.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "We want to be the consultancy that Indian students and their parents actually trust — not because of flashy marketing, but because our students come back years later and say 'VGLOBAL changed my life.'",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Transparency first, always. We don't push students into universities that don't suit them. We don't make promises we can't keep. And we treat every student's dream like it's our own responsibility.",
  },
];

const statsData = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "2,000+", label: "Students Placed" },
  { icon: Globe, value: "9+", label: "Countries" },
  { icon: CheckCircle, value: "50+", label: "Partner Universities" },
];

export default function About() {
  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="About VGLOBAL | 10 Years of MBBS Abroad Excellence in Jaipur"
        description="VGLOBAL was founded in 2014 in Jaipur. We have 10+ years of experience helping 2,000+ Indian students study MBBS in NMC-recognized universities across 9 countries. Meet our expert team."
        keywords="about VGLOBAL, MBBS consultancy Jaipur, medical education consultancy Rajasthan, VGLOBAL history, MBBS abroad experts Jaipur"
        canonicalPath="/about"
      />
      <section className="relative py-20 text-white overflow-hidden">
        <img
          src="/assets/generated/about-team.dim_1200x600.jpg"
          alt="VGLOBAL team and students"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            About VGLOBAL
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg">
            10 Years of Helping Students Become Doctors
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Started in Jaipur in 2014. Still going strong. Here's our story.
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
                How VGLOBAL Started
              </h2>
              <p className="text-muted-foreground mb-4">
                VGLOBAL was founded in 2014 with a simple idea: talented Indian
                students shouldn't have to give up their MBBS dream just because
                seats in India are limited or donation fees are through the
                roof. We set up in Jaipur, started building university
                partnerships, and placed our first batch of 15 students in
                Kyrgyzstan the following year.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years we expanded to Russia, Georgia, Kazakhstan,
                Philippines, Bangladesh, China, Ukraine, and Uzbekistan. But
                we've always kept our focus on what matters: finding students
                the right university, at the right price, with the right
                support.
              </p>
              <p className="text-muted-foreground">
                Ten years later, 2,000+ students have graduated or are currently
                studying through us. A lot of them refer their juniors to us
                now. That, more than anything, tells us we're doing something
                right.
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
              The Team Behind VGLOBAL
            </h2>
            <p className="text-muted-foreground">
              Real people, real experience — not just consultants with
              brochures.
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
            Want to Talk to Us?
          </h2>
          <p className="text-muted-foreground mb-8">
            Book a free session with our team. No sales pressure, just honest
            guidance.
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
