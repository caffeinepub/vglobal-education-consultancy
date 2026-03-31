import { Link } from "@tanstack/react-router";
import {
  Facebook,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gold rounded-lg p-1.5">
                <GraduationCap className="w-5 h-5 text-navy" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">VGLOBAL</div>
                <div className="text-gold text-xs">
                  Your Gateway to Global Medical Education
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-4">
              India's trusted education consultancy helping students achieve
              their dream of studying MBBS abroad. 10 years of excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gold hover:text-navy p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gold hover:text-navy p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gold hover:text-navy p-2 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gold hover:text-navy p-2 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", to: "/about" },
                { label: "MBBS Abroad", to: "/mbbs-abroad" },
                { label: "Admissions Process", to: "/admissions" },
                { label: "Eligibility", to: "/eligibility" },
                { label: "Fee Structure", to: "/fees" },
                { label: "Scholarships", to: "/scholarships" },
                { label: "NMC/FMGE Info", to: "/nmc-fmge" },
                { label: "Partner Universities", to: "/universities" },
                { label: "Career at VGLOBAL", to: "/career" },
                { label: "FAQ", to: "/faq" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gold mb-4">
              Study Destinations
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "⭐ Kyrgyzstan", to: "/kyrgyzstan" },
                { label: "Russia", to: "/russia" },
                { label: "Georgia", to: "/georgia" },
                { label: "Kazakhstan", to: "/kazakhstan" },
                { label: "Philippines", to: "/philippines" },
                { label: "Bangladesh", to: "/bangladesh" },
                { label: "China", to: "/china" },
                { label: "Uzbekistan", to: "/uzbekistan" },
                { label: "Ukraine", to: "/ukraine" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-white/70">
                  Near SMS Medical College, Jaipur, Rajasthan 302004, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  +91-9876543210
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:info@vglobal.in"
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  info@vglobal.in
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/counselling"
                className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold text-sm px-4 py-2 rounded-md transition-colors"
              >
                Get Free Counselling
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <p className="text-white/60">
            © {year} VGLOBAL. All rights reserved.
          </p>
          <p className="text-white/60">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
