import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";
import SEOHead from "../components/SEOHead";
import { useSubmitEnquiry } from "../hooks/useQueries";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending } = useSubmitEnquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill all required fields");
      return;
    }
    mutate(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        country: "General Inquiry",
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
        title="Contact VGLOBAL | MBBS Abroad Consultancy Jaipur | +91-7230032949"
        description="Contact VGLOBAL for free MBBS abroad counselling. Office: A7, A8, 1st Floor, Ajmera Empire Complex, Gopalpura Bypass, Jaipur. Phone: +91-7230032949. Email: enquiry@vglobal.online"
        keywords="contact VGLOBAL, MBBS consultancy Jaipur address, VGLOBAL phone number, free MBBS counselling Jaipur"
        canonicalPath="/contact"
        schemaType="Organization"
      />
      <section className="relative py-20 text-white overflow-hidden">
        <img
          src="/assets/generated/admissions-process.dim_1200x600.jpg"
          alt="Contact VGLOBAL office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-navy/30 z-[1]" />
        <div className="relative z-[2] container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Contact
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-lg">
            Contact VGLOBAL
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            We're here to help. Reach us at our Jaipur office or fill the form
            below.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-display font-bold text-navy mb-8">
                Our Office
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy mb-1">
                      Office Address
                    </div>
                    <p className="text-muted-foreground">
                      A7, A8, 1st Floor, Ajmera Empire Complex
                      <br />
                      10 B Scheme, Near Triveni Nagar Circle
                      <br />
                      Gopalpura Bypass, Jaipur, Rajasthan 302017
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy mb-1">Phone</div>
                    <a
                      href="tel:+917230032949"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      +91 - 7230032949
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-xl">
                    <SiWhatsapp className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/917230032949"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      +91 - 7230032949
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy mb-1">Email</div>
                    <a
                      href="mailto:enquiry@vglobal.online"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      enquiry@vglobal.online
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy mb-1">
                      Office Hours
                    </div>
                    <p className="text-muted-foreground">
                      Monday to Saturday: 9:00 AM – 7:00 PM IST
                      <br />
                      Sunday: Closed (emergency contact available)
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-secondary rounded-xl h-48 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">
                    Ajmera Empire Complex, Gopalpura Bypass
                    <br />
                    Jaipur, Rajasthan 302017
                  </p>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <Card
                  className="border-green-200 bg-green-50"
                  data-ocid="contact.success_state"
                >
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-display font-bold text-green-800 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-green-700">
                      We've received your message and will get back to you
                      within 24 hours. For urgent queries, please call
                      +91-7230032949.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-display font-bold text-navy mb-6">
                      Send us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label
                          htmlFor="cname"
                          className="text-navy font-medium"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="cname"
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, name: e.target.value }))
                          }
                          className="mt-1"
                          data-ocid="contact.name.input"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="cemail"
                          className="text-navy font-medium"
                        >
                          Email *
                        </Label>
                        <Input
                          id="cemail"
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, email: e.target.value }))
                          }
                          className="mt-1"
                          data-ocid="contact.email.input"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="cphone"
                          className="text-navy font-medium"
                        >
                          Phone *
                        </Label>
                        <Input
                          id="cphone"
                          type="tel"
                          placeholder="+91-XXXXXXXXXX"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, phone: e.target.value }))
                          }
                          className="mt-1"
                          data-ocid="contact.phone.input"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="cmessage"
                          className="text-navy font-medium"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="cmessage"
                          placeholder="How can we help you?"
                          value={form.message}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, message: e.target.value }))
                          }
                          className="mt-1 min-h-[120px]"
                          data-ocid="contact.message.textarea"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-navy hover:bg-navy-dark text-white font-bold py-3"
                        disabled={isPending}
                        data-ocid="contact.submit.button"
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
          </div>
        </div>
      </section>
    </main>
  );
}
