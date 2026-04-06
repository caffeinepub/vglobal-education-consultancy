import { Link } from "@tanstack/react-router";
import {
  BrainCircuit,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
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
            <img
              src="/assets/v_global_logo-019d48da-75a9-741d-b210-d7db4c810fa4.jpg"
              alt="VGLOBAL Logo"
              className="h-14 w-auto object-contain bg-white rounded-lg p-1.5 mb-4"
            />
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
                href="https://wa.me/917230032949"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gold hover:text-navy p-2 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/vglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gold hover:text-navy p-2 rounded-full transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
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
                { label: "Our Services", to: "/services" },
                { label: "Compare Countries", to: "/compare" },
                { label: "Admissions Process", to: "/admissions" },
                { label: "Eligibility", to: "/eligibility" },
                { label: "Fee Structure", to: "/fees" },
                { label: "Scholarships", to: "/scholarships" },
                { label: "NMC/FMGE Info", to: "/nmc-fmge" },
                { label: "NMC Notification", to: "/nmc-notification" },
                { label: "Partner Universities", to: "/universities" },
                { label: "Career at VGLOBAL", to: "/career" },
                { label: "FAQ", to: "/faq" },
                { label: "AI Tools", to: "/ai-tools" },
                {
                  label: "MBBS Consultancy Jaipur",
                  to: "/mbbs-consultancy-jaipur",
                },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/70 hover:text-gold transition-colors flex items-center gap-1"
                  >
                    {l.to === "/ai-tools" && (
                      <BrainCircuit className="w-3 h-3" />
                    )}
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
                { label: "\u2b50 Kyrgyzstan", to: "/kyrgyzstan" },
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
                  A7, A8, 1st Floor, Ajmera Empire Complex, 10 B Scheme, Near
                  Triveni Nagar Circle, Gopalpura Bypass, Jaipur, Rajasthan
                  302017
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="tel:+917230032949"
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  +91 - 7230032949
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:enquiry@vglobal.online"
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  enquiry@vglobal.online
                </a>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              <Link
                to="/counselling"
                className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold text-sm px-4 py-2 rounded-md transition-colors"
              >
                Get Free Counselling
              </Link>
              <Link
                to="/mbbs-consultancy-jaipur"
                className="block text-white/60 hover:text-gold text-xs transition-colors mt-2"
              >
                MBBS Consultancy Jaipur
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center text-sm">
          <p className="text-white/60">
            &copy; {year} VGLOBAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
