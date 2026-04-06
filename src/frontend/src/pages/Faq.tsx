import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import SEOHead from "../components/SEOHead";

const faqs = [
  {
    q: "Is NEET mandatory to study MBBS abroad?",
    a: "Yes. As per NMC regulations effective from 2018, NEET qualification is mandatory for Indian students who wish to study MBBS at foreign medical universities and return to practice in India. Without NEET, you cannot apply for the FMGE/NExT exam required to practice in India after graduation.",
  },
  {
    q: "What is the minimum NEET score required for MBBS abroad?",
    a: "There is no minimum NEET score requirement for foreign universities — you just need to qualify (score above the cutoff). For General category, typically 50th percentile; for SC/ST/OBC, 40th percentile.",
  },
  {
    q: "Which country is best for MBBS abroad for Indian students?",
    a: "Kyrgyzstan is currently the most recommended destination due to its lowest fees ($3,000-5,000/year), NMC recognition, English-medium instruction, and large Indian student community.",
  },
  {
    q: "How long does the MBBS program abroad take?",
    a: "The MBBS program at most foreign universities is 5+1 years (5 years academic + 1 year internship), totaling 6 years. Philippines follows a 4+1 structure.",
  },
  {
    q: "What is the total cost of studying MBBS in Kyrgyzstan?",
    a: "The total cost for 6 years of MBBS in Kyrgyzstan (including tuition, hostel, food, and living expenses) is approximately $25,000-40,000, which translates to roughly ₹20-32 lakhs.",
  },
  {
    q: "Will my MBBS degree from abroad be recognized in India?",
    a: "Yes, provided you study at an NMC-listed university and clear the FMGE (Foreign Medical Graduates Examination) or the upcoming NExT after returning to India. VGLOBAL only places students in NMC-recognized universities.",
  },
  {
    q: "What is FMGE? How difficult is it to clear?",
    a: "FMGE is a licensing exam conducted by NBE twice a year (June and December). It consists of 300 MCQ questions. The pass mark is 50%. Students who prepare consistently throughout their MBBS program can clear it.",
  },
  {
    q: "Is it safe for Indian students to study abroad?",
    a: "Yes, countries like Kyrgyzstan, Russia, Georgia, Kazakhstan, and Philippines are safe for Indian students. These countries have large Indian student communities. VGLOBAL has placed 500+ students safely.",
  },
  {
    q: "What documents are required for MBBS abroad admission?",
    a: "Key documents include: 10th and 12th marksheets, NEET scorecard, valid Indian passport, passport photos, birth certificate, medical fitness certificate, and bank statement.",
  },
  {
    q: "Can I visit India during my MBBS program?",
    a: "Yes, students can visit India during semester breaks (typically 2-3 months per year). VGLOBAL ensures your visa allows multiple re-entry during the visa application process.",
  },
  {
    q: "How does VGLOBAL help with accommodation?",
    a: "VGLOBAL coordinates with partner universities to arrange on-campus hostel accommodation for all students. Most universities provide separate hostels for Indian students with Indian food options.",
  },
  {
    q: "What is VGLOBAL's fee for their services?",
    a: "VGLOBAL charges a transparent, one-time service fee covering complete end-to-end support. There are no hidden charges. Please contact us for the current service fee structure.",
  },
];

export default function Faq() {
  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="FAQ - MBBS Abroad | Common Questions Answered | VGLOBAL"
        description="Frequently asked questions about studying MBBS abroad - eligibility, fees, NEET, NMC recognition, FMGE, visa process, and more. Get answers from VGLOBAL experts in Jaipur."
        keywords="MBBS abroad FAQ, NEET MBBS questions, FMGE exam India, NMC recognized universities list, MBBS fees abroad, visa MBBS"
        canonicalPath="/faq"
        schemaType="FAQPage"
        faqItems={[
          {
            question: "What is the eligibility for MBBS abroad?",
            answer:
              "You need 50% marks in PCB in Class 12 and a valid NEET score (50th percentile for general category, 40th for SC/ST/OBC).",
          },
          {
            question: "Is NEET compulsory for MBBS abroad?",
            answer:
              "Yes. NEET qualification is mandatory for all Indian students seeking admission to foreign medical colleges as per NMC regulations.",
          },
          {
            question: "Are foreign MBBS degrees valid in India?",
            answer:
              "Yes, if from NMC-recognized universities. After completing MBBS, you must clear the NExT/FMGE screening exam to practice in India.",
          },
          {
            question: "What is the cost of MBBS abroad?",
            answer:
              "Fees range from $3,000 to $7,000 per year. Total 6-year cost ranges from ₹18 lakhs (Kyrgyzstan) to ₹42 lakhs (Georgia), much less than Indian private colleges.",
          },
          {
            question: "Which country is best for MBBS abroad?",
            answer:
              "Kyrgyzstan is most affordable and popular. Russia and Georgia offer European-standard education. Philippines is great for English-medium with US curriculum.",
          },
        ]}
      />
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            FAQ
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Everything you need to know about studying MBBS abroad with VGLOBAL.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-4 bg-white"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="text-navy font-semibold text-left py-4 hover:text-gold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-navy mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our counsellors are available to answer any specific questions about
            your situation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/counselling">
              <Button
                className="bg-navy hover:bg-navy-dark text-white px-8"
                data-ocid="faq.counselling.button"
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
