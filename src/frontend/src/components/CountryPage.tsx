import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  Star,
  Users,
} from "lucide-react";

export interface University {
  name: string;
  established: string;
  students: string;
  fee: string;
  recognition: string[];
  logo?: string;
}

export interface CountryData {
  name: string;
  flag: string;
  tagline: string;
  description: string;
  gradient: string;
  heroImage?: string;
  stats: { label: string; value: string }[];
  universities: University[];
  highlights: string[];
  feeRange: string;
  duration: string;
  language: string;
  climate: string;
  visa: string;
  whyChoose: string[];
}

interface Props {
  data: CountryData;
  featured?: boolean;
  /** Skip the default pt-16/pt-20 top padding — use when a banner above already provides navbar clearance */
  noPaddingTop?: boolean;
}

const infoCards = [
  { icon: DollarSign, key: "feeRange" as const, label: "Annual Fees" },
  { icon: Clock, key: "duration" as const, label: "Duration" },
  { icon: MapPin, key: "language" as const, label: "Language" },
  { icon: Users, key: "climate" as const, label: "Climate" },
];

export default function CountryPage({ data, featured, noPaddingTop }: Props) {
  return (
    <main className={noPaddingTop ? "" : "pt-16 md:pt-20"}>
      <section className="relative py-24 text-white overflow-hidden min-h-[420px] flex items-center">
        {/* Background image */}
        {data.heroImage && (
          <img
            src={data.heroImage}
            alt={`MBBS in ${data.name}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Single overlay for text readability with image visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-transparent z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <div className="text-6xl mb-4 drop-shadow-lg">{data.flag}</div>
          {featured && (
            <Badge className="bg-gold text-navy mb-3 font-semibold">
              ⭐ Featured Destination
            </Badge>
          )}
          <h1
            className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          >
            MBBS in {data.name}
          </h1>
          <p
            className="text-xl text-white/95 max-w-2xl mx-auto mb-8"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
          >
            {data.tagline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/counselling">
              <Button
                className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3"
                data-ocid="country.counselling.button"
              >
                Get Free Counselling
              </Button>
            </Link>
            <Link to="/admissions">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-8 py-3"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-gold text-2xl font-display font-bold">
                  {s.value}
                </div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6">
                Why Study MBBS in {data.name}?
              </h2>
              <p className="text-muted-foreground mb-6">{data.description}</p>
              <ul className="space-y-3">
                {data.whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((item) => (
                <Card
                  key={item.key}
                  className="text-center p-4 border-border hover:border-gold transition-colors"
                >
                  <item.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="font-semibold text-navy text-sm">
                    {data[item.key]}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-2 text-center">
            Top Medical Universities
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            NMC-recognized universities with quality education
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.universities.map((uni, i) => (
              <Card
                key={uni.name}
                className="hover:shadow-lg transition-shadow border-border"
                data-ocid={`universities.item.${i + 1}`}
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    {uni.logo ? (
                      <img
                        src={uni.logo}
                        alt={`${uni.name} logo`}
                        className="w-14 h-14 object-contain rounded-lg border border-border bg-white p-1 shrink-0"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-lg border border-border bg-gradient-to-br from-navy/10 to-gold/20 flex items-center justify-center shrink-0">
                        <Star className="w-6 h-6 text-gold" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-navy text-base leading-tight">
                        {uni.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Est. {uni.established} · {uni.students} students
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-3 text-sm">
                    <span className="text-muted-foreground">Annual Fee:</span>
                    <span className="font-semibold text-gold">{uni.fee}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {uni.recognition.map((r) => (
                      <Badge key={r} variant="secondary" className="text-xs">
                        {r}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-10 text-center">
            Key Highlights
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-3 bg-secondary rounded-lg p-4"
              >
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="text-sm text-foreground">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Visa Information
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">{data.visa}</p>
          <Link to="/visa">
            <Button className="bg-gold hover:bg-gold-dark text-navy font-semibold">
              Full Visa Guide
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-navy mb-4">
            Ready to Study in {data.name}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get personalized guidance from our expert counsellors. Free
            consultation available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/counselling">
              <Button
                className="bg-navy hover:bg-navy-dark text-white font-semibold px-8"
                data-ocid="country.cta.button"
              >
                Book Free Counselling
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white px-8"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
