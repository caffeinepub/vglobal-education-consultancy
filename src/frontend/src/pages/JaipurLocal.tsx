import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  ExternalLink,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import SEOHead from "../components/SEOHead";
import { useActor } from "../hooks/useActor";

const reasons = [
  "10+ years serving students from Jaipur, Rajasthan & across India",
  "Conveniently located at Gopalpura Bypass — easily accessible from all parts of Jaipur",
  "Free, no-obligation counselling sessions — walk in or call anytime",
  "Direct NMC-recognized university admissions — no donation, no middle-man charges",
  "End-to-end support: admission → visa → travel → hostel booking",
  "Strong alumni network from Jaipur now practising medicine abroad",
  "Regular seminars and info sessions for Rajasthan students & parents",
  "Post-admission mentoring and FMGE preparation guidance",
];

const testimonials = [
  {
    name: "Rohan Gupta",
    city: "Jaipur, Rajasthan",
    university: "Osh State Medical University, Kyrgyzstan",
    text: "I visited VGLOBAL's Jaipur office and within 2 hours, I had a clear picture of which university to apply to. They arranged everything — from documents to visa. Best decision of my life.",
    rating: 5,
  },
  {
    name: "Kavita Sharma",
    city: "Jaipur, Rajasthan",
    university: "Tbilisi State Medical University, Georgia",
    text: "As a Jaipur girl, I was nervous about going abroad. The VGLOBAL team in Gopalpura Bypass was so patient and answered every single question from me and my parents. Very professional.",
    rating: 5,
  },
  {
    name: "Aditya Verma",
    city: "Ajmer, Rajasthan",
    university: "Kazan Federal University, Russia",
    text: "I drove from Ajmer to meet the VGLOBAL team in Jaipur. Worth every kilometre. They helped me get into one of Russia's top medical universities with full visa support.",
    rating: 5,
  },
];

const landmarks = [
  "Near Triveni Nagar Circle — one of Jaipur's most accessible junctions",
  "On Gopalpura Bypass — 10 minutes from Jaipur Railway Station",
  "5 minutes from World Trade Park, Jaipur",
  "Easily accessible from Mansarovar, Pratap Nagar, Vaishali Nagar",
];

export default function JaipurLocal() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Inject Local Business schema
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "VGLOBAL Education Consultancy",
      description:
        "Jaipur's most trusted MBBS abroad consultancy with 10+ years experience helping Rajasthan students study medicine overseas.",
      url: "https://vglobal.online/mbbs-consultancy-jaipur",
      telephone: "+91-7230032949",
      email: "enquiry@vglobal.online",
      image:
        "https://vglobal.online/assets/generated/jaipur-mbbs-hero.dim_1200x600.jpg",
      priceRange: "Free Counselling",
      areaServed: [
        { "@type": "State", name: "Rajasthan" },
        { "@type": "City", name: "Jaipur" },
        { "@type": "City", name: "Ajmer" },
        { "@type": "City", name: "Kota" },
      ],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "26.8468",
          longitude: "75.7520",
        },
        geoRadius: "200000",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.8468",
        longitude: "75.7520",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "A7, A8, 1st Floor, Ajmera Empire Complex, 10 B Scheme, Near Triveni Nagar Circle, Gopalpura Bypass",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302017",
        addressCountry: "IN",
      },
      openingHours: "Mo-Sa 09:00-19:00",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "MBBS Abroad Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Free MBBS Abroad Counselling",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "University Admission Assistance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Visa Guidance" },
          },
        ],
      },
      sameAs: ["https://facebook.com/vglobal", "https://instagram.com/vglobal"],
    };
    let el = document.getElementById(
      "jaipur-local-schema",
    ) as HTMLScriptElement;
    if (!el) {
      el = document.createElement("script");
      el.id = "jaipur-local-schema";
      el.setAttribute("type", "application/ld+json");
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
    return () => {
      const s = document.getElementById("jaipur-local-schema");
      if (s) s.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      toast.error("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      if (actor) {
        await actor.submitEnquiry({
          name,
          phone,
          email,
          country: "Jaipur Local",
          message: message || "Enquiry from Jaipur Local SEO page",
          timestamp: BigInt(Date.now()),
        });
      }
      setSubmitted(true);
      toast.success("Thank you! Our Jaipur counsellor will call you shortly.");
    } catch {
      toast.error(
        "Submission failed. Please call us directly at +91-7230032949",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="MBBS Consultancy in Jaipur | VGLOBAL Education | Best MBBS Abroad Advisor Jaipur"
        description="VGLOBAL is Jaipur's most trusted MBBS abroad consultancy with 10+ years experience. Located at Gopalpura Bypass, we help students from Rajasthan study MBBS in Kyrgyzstan, Russia, Philippines and more."
        keywords="mbbs consultancy jaipur, mbbs abroad jaipur, mbbs consultant rajasthan, abroad mbbs jaipur, vglobal jaipur, medical college abroad jaipur, mbbs admission jaipur, best mbbs consultant jaipur"
        canonicalPath="/mbbs-consultancy-jaipur"
        schemaType="MedicalBusiness"
      />

      {/* Hero */}
      <section className="relative py-28 text-white overflow-hidden min-h-[480px] flex items-center">
        <img
          src="/assets/generated/jaipur-mbbs-hero.dim_1200x600.jpg"
          alt="MBBS Consultancy in Jaipur Rajasthan"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/65 to-navy/30 z-[1]" />
        <div className="relative container mx-auto px-4 z-[2]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
              📍 Jaipur, Rajasthan
            </Badge>
            <h1
              className="text-4xl md:text-5xl font-display font-bold mb-4"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
            >
              Best MBBS Abroad Consultancy
              <br className="hidden md:block" /> in Jaipur, Rajasthan
            </h1>
            <p
              className="text-xl text-white/90 max-w-2xl mb-6"
              style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
            >
              Helping Jaipur & Rajasthan students achieve their MBBS dreams
              abroad for 10+ years. Walk in to our Gopalpura Bypass office or
              call us for a free consultation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+917230032949">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-navy font-bold"
                  data-ocid="jaipur.call.button"
                >
                  <Phone className="mr-2 w-5 h-5" /> Call Now: +91-7230032949
                </Button>
              </a>
              <Link to="/counselling">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy"
                  data-ocid="jaipur.counselling.button"
                >
                  Free Counselling <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose VGLOBAL Jaipur */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-display font-bold text-navy mb-6">
                Why Jaipur Students Choose VGLOBAL
              </h2>
              <p className="text-muted-foreground mb-6">
                We're not just another consultancy. VGLOBAL has been the go-to
                name for MBBS abroad in Jaipur since 2014. Students and parents
                from all over Rajasthan — Ajmer, Kota, Jodhpur, Bikaner — come
                to our Gopalpura Bypass office because they trust us to give
                them honest, complete guidance.
              </p>
              <ul className="space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Address Card */}
            <Card className="border-gold/30 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-navy to-gold" />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="font-display font-bold text-navy text-lg">
                    Our Jaipur Office
                  </h3>
                </div>
                <address className="not-italic text-sm text-foreground space-y-2">
                  <p className="font-semibold text-navy">
                    VGLOBAL Education Consultancy
                  </p>
                  <p className="text-muted-foreground">
                    A7, A8, 1st Floor,
                    <br />
                    Ajmera Empire Complex, 10 B Scheme,
                    <br />
                    Near Triveni Nagar Circle,
                    <br />
                    Gopalpura Bypass,
                    <br />
                    Jaipur, Rajasthan 302017
                  </p>
                </address>
                <div className="mt-4 space-y-2">
                  <a
                    href="tel:+917230032949"
                    className="flex items-center gap-2 text-sm text-navy hover:text-gold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gold" /> +91-7230032949
                  </a>
                  <a
                    href="mailto:enquiry@vglobal.online"
                    className="flex items-center gap-2 text-sm text-navy hover:text-gold transition-colors"
                  >
                    <Mail className="w-4 h-4 text-gold" />{" "}
                    enquiry@vglobal.online
                  </a>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-gold" /> Mon–Sat: 9:00 AM –
                    7:00 PM
                  </div>
                </div>
                <a
                  href="https://maps.google.com/maps?q=Gopalpura+Bypass+Jaipur+Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-navy underline hover:text-gold transition-colors"
                  data-ocid="jaipur.maps.link"
                >
                  <ExternalLink className="w-4 h-4" /> Open in Google Maps
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-navy mb-3">
              MBBS Abroad from Jaipur
            </h2>
            <p className="text-muted-foreground">
              Our office is conveniently located for students from all parts of
              Rajasthan.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {landmarks.map((l) => (
              <div
                key={l}
                className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border"
              >
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
              Student Stories
            </Badge>
            <h2 className="text-3xl font-display font-bold text-navy mb-3">
              What Jaipur Students Say
            </h2>
            <p className="text-muted-foreground">
              Real stories from students who visited our Jaipur office and went
              on to study MBBS abroad.
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
                  data-ocid={`jaipur.testimonials.item.${i + 1}`}
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
                      <div className="text-sm text-gold">{t.city}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {t.university}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gold/20 text-gold border-gold/30 mb-3">
                Free Counselling
              </Badge>
              <h2 className="text-3xl font-display font-bold mb-4">
                Book a Free Counselling Session in Jaipur
              </h2>
              <p className="text-white/80 mb-6">
                Walk into our Gopalpura Bypass office or fill this form and our
                Jaipur counsellor will call you back within 24 hours. No
                charges, no obligation.
              </p>
              <ul className="space-y-3">
                {[
                  "Free, honest guidance — no sales pressure",
                  "Discuss your NEET score & budget privately",
                  "Get a personalised country & university shortlist",
                  "Parents are welcome to join the session",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-white/90"
                  >
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />{" "}
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-white" data-ocid="jaipur.form.card">
              <CardContent className="p-6">
                {submitted ? (
                  <div
                    className="text-center py-8"
                    data-ocid="jaipur.form.success_state"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-display font-bold text-navy text-xl mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Our Jaipur counsellor will call you within 24 hours. You
                      can also call us directly at{" "}
                      <a
                        href="tel:+917230032949"
                        className="text-navy font-semibold"
                      >
                        +91-7230032949
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="font-display font-bold text-navy text-lg">
                      Get Free Counselling
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="jaipur-name">Full Name *</Label>
                      <Input
                        id="jaipur-name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        data-ocid="jaipur.name.input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jaipur-phone">Phone Number *</Label>
                      <Input
                        id="jaipur-phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        data-ocid="jaipur.phone.input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jaipur-email">Email Address *</Label>
                      <Input
                        id="jaipur-email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        data-ocid="jaipur.email.input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jaipur-msg">Your Query (Optional)</Label>
                      <Input
                        id="jaipur-msg"
                        placeholder="e.g. NEET score 350, budget ₹4L/yr"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        data-ocid="jaipur.message.input"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-gold hover:bg-gold-dark text-navy font-bold w-full"
                      disabled={loading}
                      data-ocid="jaipur.submit.button"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Callback{" "}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
