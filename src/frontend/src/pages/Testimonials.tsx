import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Star } from "lucide-react";
import type { Testimonial } from "../backend";
import { useTestimonials } from "../hooks/useQueries";

const staticTestimonials: Testimonial[] = [
  {
    studentName: "Priya Sharma",
    country: "Kyrgyzstan",
    university: "Osh State Medical University",
    text: "VGLOBAL guided me through every step of the admission process. Their counsellors are very knowledgeable and the visa process was smooth. I am now in my 3rd year and couldn't be happier!",
    rating: BigInt(5),
  },
  {
    studentName: "Rahul Mehta",
    country: "Russia",
    university: "Kazan Federal University",
    text: "Excellent service! VGLOBAL helped me get admission to one of Russia's top medical universities. Their pre-departure guidance was very helpful. Highly recommend to all NEET aspirants.",
    rating: BigInt(5),
  },
  {
    studentName: "Anjali Patel",
    country: "Georgia",
    university: "Tbilisi State Medical University",
    text: "Professional team, transparent process, and genuine care for students. VGLOBAL is the most trustworthy consultancy in Jaipur. My parents are very happy with the decision.",
    rating: BigInt(5),
  },
  {
    studentName: "Vikram Singh",
    country: "Kyrgyzstan",
    university: "Kyrgyz State Medical Academy",
    text: "I was skeptical about studying abroad but VGLOBAL's counsellor convinced me with facts and data. Best decision ever! The fees are a fraction of what Indian private colleges charge.",
    rating: BigInt(5),
  },
  {
    studentName: "Sneha Agarwal",
    country: "Philippines",
    university: "University of Santo Tomas",
    text: "The Philippines was my dream destination and VGLOBAL made it happen. Their expertise in visa processing is commendable. I secured admission in just 3 weeks!",
    rating: BigInt(4),
  },
  {
    studentName: "Arjun Kumar",
    country: "Kazakhstan",
    university: "Kazakh National Medical University",
    text: "Very professional team. They helped me with everything from document preparation to accommodation arrangements. Thank you VGLOBAL team!",
    rating: BigInt(5),
  },
  {
    studentName: "Meera Joshi",
    country: "Russia",
    university: "Kursk State Medical University",
    text: "VGLOBAL's support doesn't stop after admission. They are always available for any queries even after reaching Russia. Great after-service support.",
    rating: BigInt(5),
  },
  {
    studentName: "Rohan Verma",
    country: "Kyrgyzstan",
    university: "International School of Medicine",
    text: "Affordable fees, great university, and excellent VGLOBAL support. I would recommend VGLOBAL to every student from Rajasthan who wants to study MBBS abroad.",
    rating: BigInt(5),
  },
  {
    studentName: "Pooja Rawat",
    country: "Georgia",
    university: "New Vision University",
    text: "The team at VGLOBAL Jaipur office is very friendly and helpful. They explained everything in detail and supported my family throughout the process.",
    rating: BigInt(4),
  },
];

function StarRating({ rating }: { rating: bigint }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={String(i)}
          className={`w-4 h-4 ${i < Number(rating) ? "fill-gold text-gold" : "text-border"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <Card
      className="h-full border-border hover:border-gold hover:shadow-lg transition-all"
      data-ocid={`testimonials.item.${index + 1}`}
    >
      <CardContent className="p-6">
        <StarRating rating={t.rating} />
        <p className="text-muted-foreground text-sm my-4 italic">"{t.text}"</p>
        <div className="border-t border-border pt-4">
          <div className="font-semibold text-navy">{t.studentName}</div>
          <div className="text-sm text-muted-foreground">{t.university}</div>
          <div className="text-sm text-gold font-medium">{t.country}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  const { data: backendTestimonials, isLoading } = useTestimonials();
  const allTestimonials = [
    ...staticTestimonials,
    ...(backendTestimonials || []),
  ];

  return (
    <main className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Student Reviews
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What Our Students Say
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            500+ happy students and counting. Read what our students say about
            studying abroad with VGLOBAL.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {isLoading && (
            <div
              className="flex justify-center py-8"
              data-ocid="testimonials.loading_state"
            >
              <Loader2 className="w-8 h-8 animate-spin text-navy" />
            </div>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((t, i) => (
              <TestimonialCard key={t.studentName} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
