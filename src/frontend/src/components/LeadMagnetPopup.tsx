import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Download, Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export default function LeadMagnetPopup() {
  const { actor } = useActor();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("leadMagnetShown")) return;

    // Timed popup after 15 seconds
    const timer = setTimeout(() => {
      sessionStorage.setItem("leadMagnetShown", "1");
      setOpen(true);
    }, 15000);

    // Exit intent popup
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("leadMagnetShown")) {
        sessionStorage.setItem("leadMagnetShown", "1");
        clearTimeout(timer);
        setOpen(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("leadMagnetShown", "1");
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      if (actor) {
        await actor.submitEnquiry({
          name,
          phone,
          email,
          country: "Lead Magnet",
          message: "Lead Magnet: Free MBBS Abroad Guide 2026",
          timestamp: BigInt(Date.now()),
        });
      }
      setSubmitted(true);
      toast.success("Your free guide is ready! Check your inbox.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-2xl p-0 overflow-hidden border-0 shadow-2xl"
        data-ocid="lead-magnet.dialog"
        onInteractOutside={handleClose}
      >
        {/* Close button */}
        <button
          type="button"
          className="absolute right-3 top-3 z-50 bg-white/20 hover:bg-white/40 text-white rounded-full p-1.5 transition-colors"
          onClick={handleClose}
          aria-label="Close"
          data-ocid="lead-magnet.close.button"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left: Book Cover */}
          <div
            className="relative w-full md:w-2/5 min-h-[200px] md:min-h-[520px] flex flex-col justify-end overflow-hidden"
            style={{
              backgroundImage:
                "url(/assets/generated/lead-magnet-popup-bg.dim_800x500.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-navy/60" />
            <div className="relative p-6 pb-8">
              <img
                src="/assets/generated/lead-magnet-guide.dim_600x800.jpg"
                alt="Free MBBS Abroad Guide 2026"
                className="w-32 mx-auto shadow-2xl rounded-lg border-2 border-gold/40"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 p-6 bg-white">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full py-10 text-center"
                data-ocid="lead-magnet.success_state"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h2 className="font-display font-bold text-navy text-2xl mb-2">
                  Guide is On Its Way! 🎉
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Thank you, <strong>{name}</strong>! Our counsellor will send
                  the guide to <strong>{email}</strong> and may also call you on{" "}
                  <strong>{phone}</strong> for a free personalised session.
                </p>
                <div className="flex items-center gap-2 text-gold font-semibold text-sm">
                  <Download className="w-4 h-4" /> Free MBBS Abroad Guide 2026
                </div>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <div className="text-2xl mb-1">🎓</div>
                  <h2 className="font-display font-bold text-navy text-xl mb-1">
                    FREE MBBS Abroad Guide 2026
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Complete guide to studying MBBS in Kyrgyzstan, Russia,
                    Georgia &amp; more
                  </p>
                </div>
                <ul className="space-y-1.5 mb-5">
                  {[
                    "Country-wise fee comparison",
                    "NMC recognition list 2026",
                    "Top 50 universities ranked",
                    "Visa tips & documents checklist",
                    "Life abroad for Indian students",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="lm-name" className="text-xs">
                      Full Name
                    </Label>
                    <Input
                      id="lm-name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-9"
                      data-ocid="lead-magnet.name.input"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="lm-phone" className="text-xs">
                      Phone Number
                    </Label>
                    <Input
                      id="lm-phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="h-9"
                      data-ocid="lead-magnet.phone.input"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="lm-email" className="text-xs">
                      Email Address
                    </Label>
                    <Input
                      id="lm-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-9"
                      data-ocid="lead-magnet.email.input"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gold hover:bg-gold-dark text-navy font-bold w-full"
                    disabled={loading}
                    data-ocid="lead-magnet.submit.button"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      <>Get My Free Guide →</>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    No spam. Unsubscribe anytime. Your info is safe with us.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
