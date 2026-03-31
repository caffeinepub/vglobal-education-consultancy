import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Loader2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitEnquiry } from "../hooks/useQueries";

const countries = [
  "Kyrgyzstan",
  "Russia",
  "Georgia",
  "Kazakhstan",
  "Philippines",
  "Bangladesh",
  "China",
  "Uzbekistan",
  "Ukraine",
  "Not Sure (Help Me Decide)",
];

const benefits = [
  "Personalized MBBS abroad roadmap for your profile",
  "Country & university recommendations based on NEET score",
  "Detailed fee structure comparison",
  "Scholarship opportunities for your profile",
  "Visa & documentation guidance",
  "FMGE/NExT preparation strategy",
  "Answers to all your questions and concerns",
];

export default function Counselling() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending } = useSubmitEnquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.country) {
      toast.error("Please fill all required fields");
      return;
    }
    mutate(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        country: form.country,
        message: form.message,
        timestamp: BigInt(Date.now() * 1_000_000),
      },
      {
        onSuccess: () => {
          setSubmitted(true);
        },
        onError: () => {
          toast.error(
            "Failed to submit. Please try again or call us directly.",
          );
        },
      },
    );
  };

  return (
    <main className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Free Counselling
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Book Your Free Counselling Session
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Talk to our expert counsellors. Get personalized guidance for your
            MBBS abroad journey. 100% free, no obligation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6">
                What You'll Get
              </h2>
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <Phone className="w-5 h-5 text-gold" />
                  <div>
                    <div className="font-semibold text-navy text-sm">
                      Call Us
                    </div>
                    <a
                      href="tel:+919876543210"
                      className="text-muted-foreground text-sm hover:text-gold"
                    >
                      +91-9876543210
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <Mail className="w-5 h-5 text-gold" />
                  <div>
                    <div className="font-semibold text-navy text-sm">
                      Email Us
                    </div>
                    <a
                      href="mailto:info@vglobal.in"
                      className="text-muted-foreground text-sm hover:text-gold"
                    >
                      info@vglobal.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <Clock className="w-5 h-5 text-gold" />
                  <div>
                    <div className="font-semibold text-navy text-sm">
                      Office Hours
                    </div>
                    <span className="text-muted-foreground text-sm">
                      Mon-Sat: 9 AM - 7 PM IST
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <Card
                  className="border-green-200 bg-green-50"
                  data-ocid="counselling.success_state"
                >
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-display font-bold text-green-800 mb-3">
                      Thank You!
                    </h3>
                    <p className="text-green-700">
                      Your counselling request has been submitted successfully.
                      Our team will contact you within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-display font-bold text-navy mb-6">
                      Fill the Form
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-navy font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, name: e.target.value }))
                          }
                          className="mt-1"
                          data-ocid="counselling.name.input"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-navy font-medium"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, email: e.target.value }))
                          }
                          className="mt-1"
                          data-ocid="counselling.email.input"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-navy font-medium"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91-XXXXXXXXXX"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, phone: e.target.value }))
                          }
                          className="mt-1"
                          data-ocid="counselling.phone.input"
                        />
                      </div>
                      <div>
                        <Label className="text-navy font-medium">
                          Preferred Country *
                        </Label>
                        <Select
                          onValueChange={(val) =>
                            setForm((p) => ({ ...p, country: val }))
                          }
                        >
                          <SelectTrigger
                            className="mt-1"
                            data-ocid="counselling.country.select"
                          >
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label
                          htmlFor="message"
                          className="text-navy font-medium"
                        >
                          Message / Questions
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your NEET score, budget, preferred country..."
                          value={form.message}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, message: e.target.value }))
                          }
                          className="mt-1 min-h-[100px]"
                          data-ocid="counselling.message.textarea"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-3"
                        disabled={isPending}
                        data-ocid="counselling.submit.button"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />{" "}
                            Submitting...
                          </>
                        ) : (
                          "Book Free Counselling"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
