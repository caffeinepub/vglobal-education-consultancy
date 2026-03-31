import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const countries = [
  { name: "Kyrgyzstan", path: "/kyrgyzstan", featured: true },
  { name: "Russia", path: "/russia" },
  { name: "Georgia", path: "/georgia" },
  { name: "Kazakhstan", path: "/kazakhstan" },
  { name: "Philippines", path: "/philippines" },
  { name: "Bangladesh", path: "/bangladesh" },
  { name: "Ukraine", path: "/ukraine" },
  { name: "China", path: "/china" },
  { name: "Uzbekistan", path: "/uzbekistan" },
];

const mbbsDropdown = [
  { name: "MBBS Abroad Overview", path: "/mbbs-abroad" },
  { name: "Eligibility Criteria", path: "/eligibility" },
  { name: "Fee Structure", path: "/fees" },
  { name: "Admissions Process", path: "/admissions" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mbbsOpen, setMbbsOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMbbsOpen(false);
    setCountriesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy shadow-lg" : "bg-navy"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
            <div className="bg-gold rounded-lg p-1.5">
              <GraduationCap className="w-6 h-6 text-navy" />
            </div>
            <div>
              <div className="text-white font-display font-bold text-xl leading-tight">
                VGLOBAL
              </div>
              <div className="text-gold text-xs leading-tight hidden sm:block">
                Your Gateway to Global Medical Education
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className="text-white/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              data-ocid="nav.home.link"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              data-ocid="nav.about.link"
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setMbbsOpen(true)}
              onMouseLeave={() => setMbbsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-white/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
                data-ocid="nav.mbbs.toggle"
              >
                MBBS Abroad <ChevronDown className="w-4 h-4" />
              </button>
              {mbbsOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[200px] z-50">
                  {mbbsDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-navy transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setCountriesOpen(true)}
              onMouseLeave={() => setCountriesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-white/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
                data-ocid="nav.countries.toggle"
              >
                Countries <ChevronDown className="w-4 h-4" />
              </button>
              {countriesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[180px] z-50">
                  {countries.map((c) => (
                    <Link
                      key={c.path}
                      to={c.path}
                      className={`block px-4 py-2 text-sm transition-colors ${c.featured ? "text-gold font-semibold hover:bg-secondary" : "text-foreground hover:bg-secondary hover:text-navy"}`}
                    >
                      {c.featured ? "⭐ " : ""}
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/nmc-fmge"
              className="text-white/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              data-ocid="nav.nmc.link"
            >
              NMC/FMGE
            </Link>
            <Link
              to="/universities"
              className="text-white/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              data-ocid="nav.universities.link"
            >
              Universities
            </Link>
            <Link
              to="/testimonials"
              className="text-white/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              data-ocid="nav.testimonials.link"
            >
              Reviews
            </Link>
            <Link
              to="/blog"
              className="text-white/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              data-ocid="nav.blog.link"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-white/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              data-ocid="nav.contact.link"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link to="/counselling">
              <Button
                className="bg-gold hover:bg-gold-dark text-navy font-semibold"
                data-ocid="nav.counselling.button"
              >
                Free Counselling
              </Button>
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-ocid="nav.mobile.toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              to="/"
              className="text-white py-2 text-sm font-medium border-b border-white/10"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white py-2 text-sm font-medium border-b border-white/10"
            >
              About Us
            </Link>
            <div className="text-gold text-xs font-semibold pt-2 pb-1">
              MBBS ABROAD
            </div>
            {mbbsDropdown.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white/80 py-1.5 text-sm pl-3"
              >
                {item.name}
              </Link>
            ))}
            <div className="text-gold text-xs font-semibold pt-2 pb-1">
              COUNTRIES
            </div>
            {countries.map((c) => (
              <Link
                key={c.path}
                to={c.path}
                className={`py-1.5 text-sm pl-3 ${c.featured ? "text-gold font-semibold" : "text-white/80"}`}
              >
                {c.featured ? "⭐ " : ""}
                {c.name}
              </Link>
            ))}
            <Link
              to="/nmc-fmge"
              className="text-white py-2 text-sm font-medium border-t border-white/10 mt-1"
            >
              NMC/FMGE
            </Link>
            <Link
              to="/universities"
              className="text-white py-2 text-sm font-medium"
            >
              Universities
            </Link>
            <Link
              to="/testimonials"
              className="text-white py-2 text-sm font-medium"
            >
              Testimonials
            </Link>
            <Link to="/blog" className="text-white py-2 text-sm font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-white py-2 text-sm font-medium">
              Contact
            </Link>
            <Link to="/counselling" className="mt-3">
              <Button className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold">
                Free Counselling
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
