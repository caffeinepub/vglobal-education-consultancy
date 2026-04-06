import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Star, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "What is VGLOBAL?",
    a: "VGLOBAL is Jaipur's trusted MBBS abroad consultancy with 10+ years of experience, helping Indian students study medicine in top NMC-recognized universities worldwide.",
  },
  {
    q: "Which countries do you offer MBBS?",
    a: "We offer admissions in Kyrgyzstan, Russia, Georgia, Kazakhstan, Philippines, Bangladesh, China, Ukraine, and Uzbekistan — all NMC-recognized.",
  },
  {
    q: "What is the eligibility for MBBS abroad?",
    a: "You need 50% marks in Physics, Chemistry, Biology in Class 12 (40% for reserved categories) and a valid NEET score.",
  },
  {
    q: "What are the fees for MBBS abroad?",
    a: "Fees range from $3,000 to $7,000 per year depending on the country and university. Kyrgyzstan is the most affordable at $3,000-5,000/yr.",
  },
  {
    q: "Is NEET compulsory?",
    a: "Yes. NEET qualification is mandatory for Indian students to pursue MBBS abroad as per NMC regulations.",
  },
  {
    q: "How do I apply?",
    a: "Contact us for a free counselling session. We handle your entire application, documentation, and visa process end-to-end.",
  },
  {
    q: "Is the degree valid in India?",
    a: "Yes, all our partner universities are NMC-recognized. After completing MBBS, you must pass the NMC screening test (FMGE/NExT) to practice in India.",
  },
  {
    q: "What is the contact number?",
    a: "You can reach us at +91-7230032949 or email enquiry@vglobal.online. Office: A7, A8, 1st Floor, Ajmera Empire Complex, Gopalpura Bypass, Jaipur, Rajasthan 302017.",
  },
  {
    q: "Do you offer visa assistance?",
    a: "Yes, we provide complete visa guidance and documentation support for all countries we operate in.",
  },
  {
    q: "Is Kyrgyzstan good for MBBS?",
    a: "Kyrgyzstan is one of the best affordable options — low tuition, English-medium programs, NMC-recognized universities, and a safe environment for Indian students.",
  },
  {
    q: "Which is the best country for MBBS abroad for Indians?",
    a: "Kyrgyzstan is the most popular and affordable choice for Indian students — low fees ($3,000-5,000/yr), NMC-recognized universities, English medium, and a large Indian student community. Russia and Georgia are excellent for those seeking European-standard education.",
  },
  {
    q: "What documents are needed for MBBS admission abroad?",
    a: "You need: 10th & 12th marksheets, NEET scorecard, valid passport, passport-size photographs, birth certificate, medical fitness certificate, HIV test report (some countries), and bank statement.",
  },
  {
    q: "How long does MBBS take abroad?",
    a: "MBBS abroad is typically 6 years including the internship (5 years academic + 1 year internship). Some countries have a 1-year pre-medical foundation year making it 7 years total.",
  },
  {
    q: "What is FMGE or NExT exam?",
    a: "FMGE (Foreign Medical Graduates Examination), now replaced by NExT (National Exit Test), is mandatory for Indian students who completed MBBS abroad. You must clear this exam to practice medicine in India.",
  },
  {
    q: "Can I get scholarship for MBBS abroad?",
    a: "Yes! Scholarships include the Russian Government Scholarship, ICCR Scholarship, Chinese Government (CSC) Scholarship, and VGLOBAL Early Bird Scholarship. Contact us for eligibility details.",
  },
  {
    q: "How much does MBBS abroad cost in total?",
    a: "Total cost over 6 years: Kyrgyzstan (~Rs.18-30 lakhs), Russia (~Rs.24-36 lakhs), Georgia (~Rs.30-42 lakhs), Kazakhstan (~Rs.21-33 lakhs). This includes tuition, hostel, and living expenses.",
  },
  {
    q: "Are MBBS degrees from abroad valid in India?",
    a: "Yes, degrees from NMC-recognized foreign universities are valid in India. After completing MBBS, you must clear the FMGE/NExT screening exam to get a license to practice in India.",
  },
  {
    q: "What is the admission timeline for MBBS abroad?",
    a: "Applications open from May onwards. Most universities start in September-October. Apply by July-August to secure admission and process visa in time. Contact VGLOBAL for the latest timeline.",
  },
  {
    q: "Can I practice in other countries after MBBS abroad?",
    a: "Yes! Universities recognized by WHO, ECFMG, and GMC allow graduates to appear for USMLE (USA), PLAB (UK), AMC (Australia), and other licensing exams for international practice.",
  },
  {
    q: "What languages are MBBS programs taught in?",
    a: "Most programs are English-medium for international students. Georgia and Philippines are fully English-medium. Russia and Kyrgyzstan have English programs for Indian students, though local language is used in some clinical settings.",
  },
];

interface Message {
  from: "user" | "bot";
  text: string;
}

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const faq of faqs) {
    const keywords = faq.q
      .toLowerCase()
      .split(" ")
      .filter((w) => w.length > 3);
    if (keywords.some((kw) => lower.includes(kw))) return faq.a;
  }
  if (
    lower.includes("fee") ||
    lower.includes("cost") ||
    lower.includes("price")
  )
    return faqs[3].a;
  if (
    lower.includes("eligib") ||
    lower.includes("qualify") ||
    lower.includes("neet")
  )
    return faqs[2].a;
  if (
    lower.includes("contact") ||
    lower.includes("phone") ||
    lower.includes("address")
  )
    return faqs[7].a;
  if (lower.includes("visa")) return faqs[8].a;
  if (
    lower.includes("valid") ||
    lower.includes("nmc") ||
    lower.includes("fmge")
  )
    return faqs[6].a;
  if (lower.includes("best") || lower.includes("recommend")) return faqs[10].a;
  if (lower.includes("document") || lower.includes("certificate"))
    return faqs[11].a;
  if (
    lower.includes("year") ||
    lower.includes("duration") ||
    lower.includes("long")
  )
    return faqs[12].a;
  if (lower.includes("scholarship") || lower.includes("financial"))
    return faqs[14].a;
  if (
    lower.includes("total") ||
    lower.includes("lakh") ||
    lower.includes("rupee")
  )
    return faqs[15].a;
  return "I'd be happy to help! For detailed information, please call +91-7230032949 or visit our office. You can also fill out the free counselling form on our website.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! I'm the VGLOBAL assistant. Ask me about MBBS admissions, fees, eligibility, or countries!",
    },
  ]);
  const [input, setInput] = useState("");
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [hoverRating, setHoverRating] = useState<{
    msgIdx: number;
    star: number;
  } | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text },
      { from: "bot", text: getBotResponse(text) },
    ]);
    setInput("");
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") send();
  };

  const handleStarClick = (msgIdx: number, star: number) => {
    setRatings((prev) => ({ ...prev, [msgIdx]: star }));
  };

  const handleStarHover = (msgIdx: number, star: number) => {
    setHoverRating({ msgIdx, star });
  };

  const handleStarLeave = () => {
    setHoverRating(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div
          className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
          style={{ height: "460px" }}
        >
          <div className="bg-navy px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm">
                V
              </div>
              <div>
                <div className="text-white font-semibold text-sm">
                  VGLOBAL Assistant
                </div>
                <div className="text-gold text-xs">Online</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={String(i)}>
                <div
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      m.from === "user"
                        ? "bg-navy text-white rounded-br-sm"
                        : "bg-white border border-border text-foreground rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
                {m.from === "bot" && i > 0 && (
                  <div className="flex justify-start mt-1 pl-1">
                    {ratings[i] !== undefined ? (
                      <span className="text-xs text-muted-foreground">
                        Thanks for your feedback! &#11088;
                      </span>
                    ) : (
                      <div
                        className="flex items-center gap-1.5"
                        onMouseLeave={handleStarLeave}
                        data-ocid="chatbot.rating.row"
                      >
                        <span className="text-xs text-muted-foreground">
                          Helpful?
                        </span>
                        {[1, 2, 3, 4, 5].map((star) => {
                          const isActive =
                            hoverRating?.msgIdx === i
                              ? star <= hoverRating.star
                              : false;
                          return (
                            <button
                              key={star}
                              type="button"
                              onMouseEnter={() => handleStarHover(i, star)}
                              onClick={() => handleStarClick(i, star)}
                              className="focus:outline-none transition-transform hover:scale-110"
                              aria-label={`Rate ${star} stars`}
                            >
                              <Star
                                className={`w-3.5 h-3.5 transition-colors ${
                                  isActive
                                    ? "fill-gold text-gold"
                                    : "text-muted-foreground"
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="p-3 border-t border-border bg-white flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about admissions, fees..."
              className="text-sm"
            />
            <Button
              onClick={send}
              size="icon"
              className="bg-navy hover:bg-navy-dark text-white shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-gold text-navy w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        aria-label="Open chat"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
