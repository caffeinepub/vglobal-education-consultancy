import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, MapPin } from "lucide-react";
import type { Event } from "../backend";
import SEOHead from "../components/SEOHead";
import { useEvents } from "../hooks/useQueries";

const staticEvents: Event[] = [
  {
    title: "MBBS Abroad Free Seminar — Jaipur",
    date: BigInt((Date.now() + 7 * 86400000) * 1000000),
    description:
      "Attend our free informational seminar about studying MBBS abroad. Expert counsellors will guide you through the process, eligibility, fees, and university selection.",
    location: "Hotel Clarks Amer, Jaipur, Rajasthan",
  },
  {
    title: "Kyrgyzstan University Fair 2026",
    date: BigInt((Date.now() + 14 * 86400000) * 1000000),
    description:
      "Representatives from Osh State Medical University, International School of Medicine, and Kyrgyz State Medical Academy will be present. Direct interaction with university officials.",
    location: "VGLOBAL Office, Near SMS Medical College, Jaipur",
  },
  {
    title: "Pre-Departure Orientation — Batch September 2026",
    date: BigInt((Date.now() + 21 * 86400000) * 1000000),
    description:
      "Mandatory orientation for all students departing for the September 2026 intake. Topics: travel tips, accommodation, bank accounts, cultural adjustment, academic preparation.",
    location: "VGLOBAL Conference Hall, Jaipur",
  },
  {
    title: "FMGE/NExT Preparation Seminar",
    date: BigInt((Date.now() + 30 * 86400000) * 1000000),
    description:
      "Expert faculty will guide current MBBS abroad students on FMGE/NExT preparation strategies, high-yield topics, and recommended resources.",
    location: "Online (Google Meet) + VGLOBAL Office, Jaipur",
  },
  {
    title: "MBBS Abroad Education Expo — Delhi NCR",
    date: BigInt((Date.now() + 45 * 86400000) * 1000000),
    description:
      "VGLOBAL will be participating in the National MBBS Abroad Education Expo. Visit our stall for free counselling, university brochures, and scholarship information.",
    location: "Pragati Maidan, New Delhi",
  },
];

export default function Events() {
  const { data: backendEvents, isLoading } = useEvents();
  const allEvents = [...staticEvents, ...(backendEvents || [])];

  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="MBBS Abroad Events & Seminars | VGLOBAL Jaipur | Free Workshops"
        description="Upcoming MBBS abroad seminars, free counselling camps, university admission workshops organized by VGLOBAL in Jaipur. Register for free admission guidance events."
        keywords="MBBS abroad events, VGLOBAL seminar Jaipur, free MBBS workshop, admission guidance event"
        canonicalPath="/events"
      />
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Events
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Upcoming Events & Seminars
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join our free seminars, university fairs, and orientation sessions
            to learn more about studying MBBS abroad.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {isLoading && (
            <div
              className="flex justify-center py-8"
              data-ocid="events.loading_state"
            >
              <Loader2 className="w-8 h-8 animate-spin text-navy" />
            </div>
          )}
          <div className="space-y-6">
            {allEvents.map((event, i) => (
              <Card
                key={event.title}
                className="border-border hover:border-gold hover:shadow-lg transition-all"
                data-ocid={`events.item.${i + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-navy text-center rounded-xl p-4 min-w-[80px]">
                      <div className="text-gold font-display font-bold text-2xl">
                        {new Date(Number(event.date) / 1_000_000).getDate()}
                      </div>
                      <div className="text-white text-xs">
                        {new Date(
                          Number(event.date) / 1_000_000,
                        ).toLocaleDateString("en-IN", {
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-navy text-xl mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
