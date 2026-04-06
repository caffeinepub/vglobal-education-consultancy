import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Calendar, CheckCircle, Loader2, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SEOHead from "../components/SEOHead";
import { useBlogPosts, useSubmitEnquiry } from "../hooks/useQueries";

type EnhancedPost = {
  title: string;
  content: string;
  date: bigint;
  author: string;
  category: string;
  image: string;
  excerpt: string;
};

const staticPosts: EnhancedPost[] = [
  {
    title: "Top 5 Reasons to Choose Kyrgyzstan for MBBS in 2026",
    content:
      "Kyrgyzstan has been rapidly gaining popularity among Indian MBBS aspirants, and it's easy to see why. With NMC-recognised universities, affordable tuition under $5,000 per year, English-medium instruction, and a large Indian student community already settled there, it checks almost every box.",
    date: BigInt(Date.now() * 1000000),
    author: "Dr. Rajesh Kumar",
    category: "Destinations",
    image: "/assets/generated/blog-kyrgyzstan-guide.dim_800x450.jpg",
    excerpt:
      "Affordable, NMC-recognised, English-medium — Kyrgyzstan is the top pick for NEET students in 2026.",
  },
  {
    title: "NEET 2026: What Score Do You Need for MBBS Abroad?",
    content:
      "Many students wonder about the minimum NEET score required for admission to foreign medical universities. The good news is that NEET qualifying marks are sufficient for most NMC-listed universities abroad.",
    date: BigInt((Date.now() - 7 * 86400000) * 1000000),
    author: "Ms. Priya Singh",
    category: "Admissions",
    image: "/assets/generated/blog-neet-score.dim_800x450.jpg",
    excerpt:
      "NEET qualifying marks are enough for most countries abroad — but here's what each country expects.",
  },
  {
    title:
      "FMGE to NExT: Complete Transition Guide for Foreign Medical Graduates",
    content:
      "The National Medical Commission has officially announced the transition from FMGE to the NExT (National Exit Test). For Indian students studying MBBS abroad, this is a significant change.",
    date: BigInt((Date.now() - 14 * 86400000) * 1000000),
    author: "Mr. Amit Sharma",
    category: "Exams",
    image: "/assets/generated/blog-fmge-next.dim_800x450.jpg",
    excerpt:
      "The NExT exam is replacing FMGE. Here's what foreign medical graduates need to know and prepare.",
  },
  {
    title: "Complete Guide to Student Visa for Kyrgyzstan 2026",
    content:
      "Getting a student visa for Kyrgyzstan is one of the simplest processes for Indian students. This step-by-step guide covers everything from documents to timelines.",
    date: BigInt((Date.now() - 21 * 86400000) * 1000000),
    author: "Ms. Kavita Joshi",
    category: "Visa",
    image: "/assets/generated/blog-visa-guide.dim_800x450.jpg",
    excerpt:
      "Step-by-step Kyrgyzstan student visa guide for 2026 — documents, timeline, and pro tips.",
  },
  {
    title: "Cost of Living for Indian Students in Russia: A Real Breakdown",
    content:
      "Many Indian students and parents wonder about the true cost of living in Russia beyond just tuition. We break down monthly hostel fees, food costs, transport, winter clothing, and more.",
    date: BigInt((Date.now() - 28 * 86400000) * 1000000),
    author: "Dr. Rajesh Kumar",
    category: "Student Life",
    image: "/assets/generated/blog-cost-russia.dim_800x450.jpg",
    excerpt:
      "Real numbers from Indian students in Russia — hostel, food, transport, and monthly total.",
  },
  {
    title: "Why Indian Students Love Studying MBBS in the Philippines",
    content:
      "The Philippines offers something unique for Indian MBBS students: American-style medical education, English medium instruction, and a welcoming local culture.",
    date: BigInt((Date.now() - 35 * 86400000) * 1000000),
    author: "Ms. Priya Singh",
    category: "Destinations",
    image: "/assets/generated/blog-philippines-mbbs.dim_800x450.jpg",
    excerpt:
      "English medium, US curriculum, tropical life — the Philippines is an underrated MBBS gem.",
  },
];

const categoryColors: Record<string, string> = {
  Destinations: "bg-blue-700",
  Admissions: "bg-green-700",
  Exams: "bg-purple-700",
  Visa: "bg-red-700",
  "Student Life": "bg-amber-700",
};

function formatDate(ns: bigint): string {
  const ms = Number(ns) / 1_000_000;
  return new Date(ms).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const { data: backendPosts, isLoading } = useBlogPosts();
  const { mutate, isPending } = useSubmitEnquiry();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const backendPostsMapped: EnhancedPost[] = (backendPosts || []).map((p) => ({
    ...p,
    image: "/assets/generated/blog-hero.dim_1200x600.jpg",
    excerpt: `${p.content.slice(0, 150)}...`,
  }));

  const allPosts = [...staticPosts, ...backendPostsMapped];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    mutate(
      {
        name: form.name,
        email: form.email,
        phone: "",
        country: "Blog Inquiry",
        message: form.message,
        timestamp: BigInt(Date.now() * 1_000_000),
      },
      {
        onSuccess: () => setSubmitted(true),
        onError: () =>
          toast.error("Failed to send. Please call us at +91-7230032949."),
      },
    );
  };

  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="MBBS Abroad Blog | Study Tips, Country Guides, NMC Updates | VGLOBAL"
        description="VGLOBAL blog: latest news and guides on MBBS abroad, NMC updates, country reviews, FMGE preparation tips, visa guides. Expert insights from Jaipur's leading MBBS consultancy."
        keywords="MBBS abroad blog, NMC updates India, FMGE tips, study abroad medicine blog, Kyrgyzstan MBBS guide"
        canonicalPath="/blog"
      />
      <section className="relative py-20 text-white overflow-hidden">
        <img
          src="/assets/generated/blog-hero.dim_1200x600.jpg"
          alt="MBBS abroad blog and news"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Blog &amp; News
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg">
            MBBS Abroad Blog
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Expert insights, country guides, admission tips, and student stories
            from VGLOBAL.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {isLoading && (
            <div
              className="flex justify-center py-8"
              data-ocid="blog.loading_state"
            >
              <Loader2 className="w-8 h-8 animate-spin text-navy" />
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post, i) => (
              <Card
                key={post.title}
                className="border-border hover:border-gold hover:shadow-lg transition-all cursor-pointer group overflow-hidden"
                data-ocid={`blog.item.${i + 1}`}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={`${categoryColors[post.category] ?? "bg-teal-700"} text-white border-0 text-xs`}
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-navy text-lg mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {formatDate(post.date)}
                    </span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-navy text-navy hover:bg-navy hover:text-white text-xs w-full"
                      data-ocid={`blog.item.readmore.${i + 1}`}
                    >
                      Read More <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
              Get in Touch
            </Badge>
            <h2 className="text-3xl font-display font-bold text-navy mb-3">
              Have Questions? Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Our counsellors are ready to help with any queries about MBBS
              abroad, university applications, or the admission process.
            </p>
          </div>
          {submitted ? (
            <Card
              className="border-green-200 bg-green-50"
              data-ocid="blog.contact.success_state"
            >
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-green-800 mb-3">
                  Message Sent!
                </h3>
                <p className="text-green-700">
                  Thank you for reaching out. We will get back to you within 24
                  hours. For urgent queries, call +91-7230032949.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label
                      htmlFor="blog-name"
                      className="text-navy font-medium"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="blog-name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="mt-1"
                      data-ocid="blog.contact.name.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="blog-email"
                      className="text-navy font-medium"
                    >
                      Email *
                    </Label>
                    <Input
                      id="blog-email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="mt-1"
                      data-ocid="blog.contact.email.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="blog-message"
                      className="text-navy font-medium"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="blog-message"
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="mt-1 min-h-[120px]"
                      data-ocid="blog.contact.message.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-navy hover:bg-navy-dark text-white font-bold py-3"
                    disabled={isPending}
                    data-ocid="blog.contact.submit.button"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </main>
  );
}
