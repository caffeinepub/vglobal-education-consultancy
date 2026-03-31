import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Loader2, User } from "lucide-react";
import type { BlogPost } from "../backend";
import { useBlogPosts } from "../hooks/useQueries";

const staticPosts: BlogPost[] = [
  {
    title: "Top 5 Reasons to Choose Kyrgyzstan for MBBS in 2024",
    content:
      "Kyrgyzstan has been rapidly gaining popularity among Indian MBBS aspirants. Here are the top reasons why Kyrgyzstan should be your first choice...",
    date: BigInt(Date.now() * 1000000),
    author: "Dr. Rajesh Kumar",
    category: "Destinations",
  },
  {
    title: "NEET 2024: What Score Do You Need for MBBS Abroad?",
    content:
      "Many students wonder about the minimum NEET score required for admission to foreign medical universities. The good news is that NEET qualifying marks are sufficient...",
    date: BigInt((Date.now() - 7 * 86400000) * 1000000),
    author: "Ms. Priya Singh",
    category: "Admissions",
  },
  {
    title:
      "FMGE to NExT: Complete Transition Guide for Foreign Medical Graduates",
    content:
      "The National Medical Commission has announced the transition from FMGE to NExT. Here's everything you need to know about this change...",
    date: BigInt((Date.now() - 14 * 86400000) * 1000000),
    author: "Mr. Amit Sharma",
    category: "Exams",
  },
  {
    title: "Complete Guide to Student Visa for Kyrgyzstan 2024",
    content:
      "Getting a student visa for Kyrgyzstan is one of the simplest processes for Indian students. In this guide, we cover all the documents required...",
    date: BigInt((Date.now() - 21 * 86400000) * 1000000),
    author: "Ms. Kavita Joshi",
    category: "Visa",
  },
  {
    title: "Cost of Living for Indian Students in Russia: A Complete Breakdown",
    content:
      "Many Indian students and parents wonder about the cost of living in Russia. In this article, we break down all the monthly expenses...",
    date: BigInt((Date.now() - 28 * 86400000) * 1000000),
    author: "Dr. Rajesh Kumar",
    category: "Student Life",
  },
  {
    title: "Why Indian Students Love Studying MBBS in the Philippines",
    content:
      "The Philippines has a unique offering for Indian MBBS students: American-style medical education, English medium instruction, and a vibrant student life...",
    date: BigInt((Date.now() - 35 * 86400000) * 1000000),
    author: "Ms. Priya Singh",
    category: "Destinations",
  },
];

const bgColors = [
  "bg-blue-700",
  "bg-green-700",
  "bg-purple-700",
  "bg-red-700",
  "bg-amber-700",
  "bg-teal-700",
];

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
  const allPosts = [...staticPosts, ...(backendPosts || [])];

  return (
    <main className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Blog & News
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            MBBS Abroad Blog
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
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
                className="border-border hover:border-gold hover:shadow-lg transition-all cursor-pointer"
                data-ocid={`blog.item.${i + 1}`}
              >
                <div
                  className={`h-48 rounded-t-lg flex items-center justify-center ${bgColors[i % 6]}`}
                >
                  <Badge className="bg-white/20 text-white border-0">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-navy text-lg mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {formatDate(post.date)}
                    </span>
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
