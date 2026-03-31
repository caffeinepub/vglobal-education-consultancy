import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  Globe,
  Phone,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Students Placed" },
  { icon: Globe, value: "9+", label: "Countries" },
  { icon: BookOpen, value: "50+", label: "Partner Universities" },
];

const countries = [
  {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    path: "/kyrgyzstan",
    featured: true,
    fee: "$3,000-5,000/yr",
    desc: "Most affordable MBBS destination with NMC recognition",
  },
  {
    name: "Russia",
    flag: "🇷🇺",
    path: "/russia",
    fee: "$4,000-6,000/yr",
    desc: "World-class medical education since 1755",
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
    path: "/georgia",
    fee: "$5,000-7,000/yr",
    desc: "European standard education at Asian prices",
  },
  {
    name: "Kazakhstan",
    flag: "🇰🇿",
    path: "/kazakhstan",
    fee: "$3,500-5,500/yr",
    desc: "Rapidly growing medical education hub",
  },
  {
    name: "Philippines",
    flag: "🇵🇭",
    path: "/philippines",
    fee: "$4,000-6,000/yr",
    desc: "English-medium MBBS with US curriculum",
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    path: "/bangladesh",
    fee: "$3,000-5,000/yr",
    desc: "Closest neighbor with affordable medical education",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    country: "Kyrgyzstan",
    university: "Osh State Medical University",
    text: "VGLOBAL guided me through every step. From application to visa, everything was smooth. Now I'm in my 3rd year!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    country: "Russia",
    university: "Kazan Federal University",
    text: "The best decision of my life was choosing VGLOBAL. They are truly dedicated to student success.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    country: "Georgia",
    university: "Tbilisi State Medical University",
    text: "Professional, transparent, and always available. VGLOBAL is the most trustworthy consultancy in Jaipur.",
    rating: 5,
  },
];

const reasons = [
  "Free counselling and career guidance",
  "Direct admission without donation",
  "Complete visa & documentation support",
  "Pre-departure orientation sessions",
  "Post-admission support & mentoring",
  "NMC/FMGE preparation guidance",
  "10 years of proven track record",
  "500+ successful placements",
];

const statsBoxes = [
  { value: "10+", label: "Years of Excellence", bg: "bg-navy text-white" },
  { value: "500+", label: "Happy Students", bg: "bg-gold text-navy" },
  { value: "50+", label: "Partner Universities", bg: "bg-gold text-navy" },
  { value: "9+", label: "Countries Covered", bg: "bg-navy text-white" },
];

export default function Home() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
                🇮🇳 India's Most Trusted MBBS Abroad Consultancy
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Study MBBS Abroad with
              <span className="text-gold block">VGLOBAL</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white/85 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Realize your dream of becoming a doctor. 10 years of trusted
              guidance, 500+ successful placements across 9 countries. Based in
              Jaipur, serving all of India.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/counselling">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-navy font-bold px-8"
                  data-ocid="home.counselling.button"
                >
                  Get Free Counselling <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy px-8"
                >
                  <Phone className="mr-2 w-5 h-5" /> Call Now
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <s.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-white">
                  {s.value}
                </div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Study Destinations
            </Badge>
            <h2 className="text-4xl font-display font-bold text-navy mb-4">
              Top MBBS Destinations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore NMC-recognized universities across 9 countries. Direct
              admission, no donation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`hover:shadow-xl transition-all duration-300 cursor-pointer group border-border hover:border-gold ${c.featured ? "ring-2 ring-gold" : ""}`}
                  data-ocid={`home.countries.item.${i + 1}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-4xl">{c.flag}</span>
                      {c.featured && (
                        <Badge className="bg-gold text-navy text-xs font-semibold">
                          ⭐ Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-display font-bold text-navy mb-1 group-hover:text-gold transition-colors">
                      MBBS in {c.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {c.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-semibold text-sm">
                        {c.fee}
                      </span>
                      <Link
                        to={c.path}
                        className="text-navy hover:text-gold text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        Explore <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/mbbs-abroad">
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                View All Countries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl font-display font-bold text-navy mb-6">
                Why 500+ Students Trust VGLOBAL
              </h2>
              <p className="text-muted-foreground mb-8">
                With 10 years of experience in overseas medical education,
                VGLOBAL has helped hundreds of students from Rajasthan and
                across India fulfill their dream of becoming doctors. Our
                end-to-end support ensures a smooth journey from application to
                graduation.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {reasons.map((r) => (
                  <div key={r} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{r}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button
                    className="bg-navy hover:bg-navy-dark text-white"
                    data-ocid="home.about.button"
                  >
                    Learn About Us <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {statsBoxes.map((item) => (
                <div
                  key={item.label}
                  className={`${item.bg} rounded-2xl p-6 text-center`}
                >
                  <div className="text-4xl font-display font-bold mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm opacity-80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Student Reviews
            </Badge>
            <h2 className="text-4xl font-display font-bold text-navy mb-4">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground">
              Hundreds of successful students from VGLOBAL
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full border-border hover:border-gold transition-colors"
                  data-ocid={`home.testimonials.item.${i + 1}`}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={String(j)}
                          className="w-4 h-4 fill-gold text-gold"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 italic">
                      "{t.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-navy">{t.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.university}
                      </div>
                      <div className="text-sm text-gold">{t.country}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
                data-ocid="home.all-testimonials.button"
              >
                View All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Start Your Medical Journey Today
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book a free counselling session with our experts. We'll help you
            choose the right country, university, and guide you through the
            entire process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/counselling">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
                data-ocid="home.cta.primary_button"
              >
                Book Free Counselling
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-10"
              >
                <Phone className="mr-2 w-5 h-5" /> +91-9876543210
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
