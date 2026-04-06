import { Button } from "@/components/ui/button";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { BrainCircuit, ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  { name: "Why MBBS Abroad", path: "/why-study-abroad" },
  { name: "Eligibility Criteria", path: "/eligibility" },
  { name: "Fee Structure", path: "/fees" },
  { name: "Admissions Process", path: "/admissions" },
  { name: "Scholarships", path: "/scholarships" },
  { name: "Visa Guidance", path: "/visa" },
  { name: "Compare Countries", path: "/compare" },
  { name: "Our Services", path: "/services" },
  { name: "NMC Notification", path: "/nmc-notification" },
];

type SearchEntry = {
  title: string;
  path: string;
  category: string;
  keywords: string;
};

const searchIndex: SearchEntry[] = [
  {
    title: "MBBS in Kyrgyzstan",
    path: "/kyrgyzstan",
    category: "Countries",
    keywords: "kyrgyzstan mbbs osh ksma affordable nmc recognized university",
  },
  {
    title: "MBBS in Russia",
    path: "/russia",
    category: "Countries",
    keywords: "russia mbbs sechenov kazan moscow affordable university",
  },
  {
    title: "MBBS in Georgia",
    path: "/georgia",
    category: "Countries",
    keywords: "georgia mbbs tbilisi european standard english medium",
  },
  {
    title: "MBBS in Kazakhstan",
    path: "/kazakhstan",
    category: "Countries",
    keywords: "kazakhstan mbbs almaty astana affordable central asia",
  },
  {
    title: "MBBS in Philippines",
    path: "/philippines",
    category: "Countries",
    keywords: "philippines mbbs manila english medium american curriculum",
  },
  {
    title: "MBBS in Bangladesh",
    path: "/bangladesh",
    category: "Countries",
    keywords: "bangladesh mbbs dhaka nearby affordable south asia",
  },
  {
    title: "MBBS in Ukraine",
    path: "/ukraine",
    category: "Countries",
    keywords: "ukraine mbbs kharkiv kyiv european affordable",
  },
  {
    title: "MBBS in China",
    path: "/china",
    category: "Countries",
    keywords: "china mbbs beijing shanghai top ranked university",
  },
  {
    title: "MBBS in Uzbekistan",
    path: "/uzbekistan",
    category: "Countries",
    keywords: "uzbekistan mbbs samarkand tashkent central asia",
  },
  {
    title: "MBBS Abroad Overview",
    path: "/mbbs-abroad",
    category: "MBBS Abroad",
    keywords: "mbbs abroad overview introduction foreign medical",
  },
  {
    title: "Why MBBS Abroad",
    path: "/why-study-abroad",
    category: "MBBS Abroad",
    keywords: "why study abroad reason benefits foreign mbbs",
  },
  {
    title: "Eligibility Criteria",
    path: "/eligibility",
    category: "MBBS Abroad",
    keywords: "eligibility neet marks percentage criteria requirements",
  },
  {
    title: "Fee Structure",
    path: "/fees",
    category: "MBBS Abroad",
    keywords: "fee structure cost tuition annual total expense",
  },
  {
    title: "Admissions Process",
    path: "/admissions",
    category: "MBBS Abroad",
    keywords: "admission process apply application steps procedure",
  },
  {
    title: "Scholarships",
    path: "/scholarships",
    category: "MBBS Abroad",
    keywords: "scholarship financial aid merit iccr chinese government",
  },
  {
    title: "Visa Guidance",
    path: "/visa",
    category: "MBBS Abroad",
    keywords: "visa guidance student visa process documents embassy",
  },
  {
    title: "Compare Countries",
    path: "/compare",
    category: "MBBS Abroad",
    keywords: "compare countries comparison table fees duration fmge",
  },
  {
    title: "Our Services",
    path: "/services",
    category: "MBBS Abroad",
    keywords: "services admission visa pickup hostel sim forex insurance",
  },
  {
    title: "NMC Notification",
    path: "/nmc-notification",
    category: "MBBS Abroad",
    keywords: "nmc notification 2021 regulation gazette screening",
  },
  {
    title: "AI Tools",
    path: "/ai-tools",
    category: "AI Tools",
    keywords: "ai tools admission predictor university matcher",
  },
  {
    title: "Budget Calculator",
    path: "/ai-tools",
    category: "AI Tools",
    keywords: "budget calculator cost estimate total expenses",
  },
  {
    title: "Eligibility Checker",
    path: "/ai-tools",
    category: "AI Tools",
    keywords: "eligibility checker neet score qualifier",
  },
  {
    title: "Admission Predictor",
    path: "/ai-tools",
    category: "AI Tools",
    keywords: "admission predictor chance university shortlist",
  },
  {
    title: "About Us",
    path: "/about",
    category: "Resources",
    keywords: "about vglobal company history team jaipur consultancy",
  },
  {
    title: "NMC/FMGE Info",
    path: "/nmc-fmge",
    category: "Resources",
    keywords: "nmc fmge next exam screening foreign graduates",
  },
  {
    title: "Partner Universities",
    path: "/universities",
    category: "Resources",
    keywords: "partner universities ksma osmu sechenov tsmu list",
  },
  {
    title: "FAQ",
    path: "/faq",
    category: "Resources",
    keywords: "faq frequently asked questions common queries",
  },
  {
    title: "Blog",
    path: "/blog",
    category: "Pages",
    keywords: "blog news articles guides tips updates",
  },
  {
    title: "Testimonials",
    path: "/testimonials",
    category: "Pages",
    keywords: "testimonials reviews student experience feedback",
  },
  {
    title: "Gallery",
    path: "/gallery",
    category: "Pages",
    keywords: "gallery photos students university campus life",
  },
  {
    title: "Events",
    path: "/events",
    category: "Pages",
    keywords: "events seminars counselling sessions webinars",
  },
  {
    title: "Contact",
    path: "/contact",
    category: "Pages",
    keywords: "contact office phone email address jaipur",
  },
  {
    title: "Free Counselling",
    path: "/counselling",
    category: "Pages",
    keywords: "free counselling consultation appointment form",
  },
  {
    title: "Career at VGLOBAL",
    path: "/career",
    category: "Pages",
    keywords: "career jobs work employment vglobal",
  },
  {
    title: "MBBS Consultancy Jaipur",
    path: "/mbbs-consultancy-jaipur",
    category: "Local SEO",
    keywords: "mbbs consultancy jaipur rajasthan local office",
  },
];

function fuzzyScore(query: string, target: string): number {
  const q = query.toLowerCase();
  const t = target.toLowerCase();
  if (t.includes(q)) return 100;
  let score = 0;
  let qi = 0;
  let lastMatch = -1;
  for (let i = 0; i < t.length && qi < q.length; i++) {
    if (t[i] === q[qi]) {
      score += 10;
      if (lastMatch !== -1 && i === lastMatch + 1) score += 5;
      lastMatch = i;
      qi++;
    }
  }
  return qi === q.length ? score : 0;
}

function searchPages(query: string): Record<string, SearchEntry[]> {
  if (!query.trim()) return {};
  const results: { item: SearchEntry; score: number }[] = [];
  for (const item of searchIndex) {
    const titleScore = fuzzyScore(query, item.title);
    const keywordScore = fuzzyScore(query, item.keywords) * 0.7;
    const categoryScore = fuzzyScore(query, item.category) * 0.5;
    const maxScore = Math.max(titleScore, keywordScore, categoryScore);
    if (maxScore > 0) {
      results.push({ item, score: maxScore });
    }
  }
  results.sort((a, b) => b.score - a.score);
  const grouped: Record<string, SearchEntry[]> = {};
  let total = 0;
  for (const { item } of results) {
    if (total >= 15) break;
    if (!grouped[item.category]) grouped[item.category] = [];
    if (grouped[item.category].length < 5) {
      grouped[item.category].push(item);
      total++;
    }
  }
  return grouped;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mbbsOpen, setMbbsOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const navigate = useNavigate();

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
    setSearchQuery("");
    setSearchOpen(false);
    setMobileSearchQuery("");
    setMobileSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  useEffect(() => {
    const handleOutsideMobile = (e: MouseEvent) => {
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(e.target as Node)
      ) {
        setMobileSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideMobile);
    return () => document.removeEventListener("mousedown", handleOutsideMobile);
  }, []);

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleMobileSearchKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Escape") {
      setMobileSearchOpen(false);
      setMobileSearchQuery("");
    }
  };

  const handleResultClick = (path: string) => {
    navigate({ to: path });
    setSearchQuery("");
    setSearchOpen(false);
  };

  const handleMobileResultClick = (path: string) => {
    navigate({ to: path });
    setMobileSearchQuery("");
    setMobileSearchOpen(false);
    setIsOpen(false);
  };

  const searchResults = searchQuery.length >= 2 ? searchPages(searchQuery) : {};
  const mobileSearchResults =
    mobileSearchQuery.length >= 2 ? searchPages(mobileSearchQuery) : {};
  const hasResults = Object.keys(searchResults).length > 0;
  const hasMobileResults = Object.keys(mobileSearchResults).length > 0;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy shadow-lg" : "bg-navy"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
            <img
              src="/assets/v_global_logo-019d48da-75a9-741d-b210-d7db4c810fa4.jpg"
              alt="VGLOBAL Logo"
              className="h-12 w-auto object-contain bg-white rounded-lg p-1"
            />
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
            <Link
              to="/ai-tools"
              className="flex items-center gap-1 text-white/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              data-ocid="nav.aitools.link"
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              AI Tools
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
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] z-50">
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
                      {c.featured ? "\u2b50 " : ""}
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

          <div className="hidden lg:flex items-center gap-3">
            {/* Search Bar */}
            <div
              ref={searchRef}
              className="relative"
              data-ocid="nav.search.input"
            >
              <div className="flex items-center bg-white/10 hover:bg-white/15 rounded-lg px-3 py-1.5 gap-2 border border-white/20 transition-colors">
                <Search className="w-4 h-4 text-white/60 shrink-0" />
                <input
                  type="text"
                  placeholder="Search pages..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchOpen(true);
                  }}
                  onFocus={() => setSearchOpen(true)}
                  onKeyDown={handleSearchKeyDown}
                  className="bg-transparent text-white placeholder-white/50 text-sm outline-none w-32 focus:w-44 transition-all duration-300"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchOpen(false);
                    }}
                    className="text-white/60 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
              {searchOpen && searchQuery.length >= 2 && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white shadow-2xl rounded-xl border border-border overflow-hidden z-50">
                  {hasResults ? (
                    <div className="max-h-80 overflow-y-auto">
                      {Object.entries(searchResults).map(
                        ([category, items]) => (
                          <div key={category}>
                            <div className="px-3 py-1.5 bg-secondary/60 text-xs font-semibold text-muted-foreground uppercase tracking-wider sticky top-0">
                              {category}
                            </div>
                            {items.map((item) => (
                              <button
                                key={item.path + item.title}
                                type="button"
                                onClick={() => handleResultClick(item.path)}
                                className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-navy transition-colors flex items-center gap-2"
                              >
                                <Search className="w-3 h-3 text-muted-foreground shrink-0" />
                                {item.title}
                              </button>
                            ))}
                          </div>
                        ),
                      )}
                    </div>
                  ) : (
                    <div
                      className="px-4 py-6 text-center"
                      data-ocid="nav.search.empty_state"
                    >
                      <Search className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-40" />
                      <p className="text-sm text-muted-foreground">
                        No results found for{" "}
                        <strong>&ldquo;{searchQuery}&rdquo;</strong>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Try a country name, topic, or page name.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

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
            {/* Mobile Search */}
            <div
              ref={mobileSearchRef}
              className="relative mb-2"
              data-ocid="nav.mobile.search.input"
            >
              <div className="flex items-center bg-white/10 rounded-lg px-3 py-2 gap-2 border border-white/20">
                <Search className="w-4 h-4 text-white/60 shrink-0" />
                <input
                  type="text"
                  placeholder="Search pages..."
                  value={mobileSearchQuery}
                  onChange={(e) => {
                    setMobileSearchQuery(e.target.value);
                    setMobileSearchOpen(true);
                  }}
                  onFocus={() => setMobileSearchOpen(true)}
                  onKeyDown={handleMobileSearchKeyDown}
                  className="bg-transparent text-white placeholder-white/50 text-sm outline-none flex-1"
                />
                {mobileSearchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileSearchQuery("");
                      setMobileSearchOpen(false);
                    }}
                    className="text-white/60 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
              {mobileSearchOpen && mobileSearchQuery.length >= 2 && (
                <div className="mt-1 bg-white rounded-xl border border-border overflow-hidden shadow-xl">
                  {hasMobileResults ? (
                    <div className="max-h-60 overflow-y-auto">
                      {Object.entries(mobileSearchResults).map(
                        ([category, items]) => (
                          <div key={category}>
                            <div className="px-3 py-1.5 bg-secondary/60 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                              {category}
                            </div>
                            {items.map((item) => (
                              <button
                                key={item.path + item.title}
                                type="button"
                                onClick={() =>
                                  handleMobileResultClick(item.path)
                                }
                                className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                              >
                                {item.title}
                              </button>
                            ))}
                          </div>
                        ),
                      )}
                    </div>
                  ) : (
                    <div
                      className="px-4 py-4 text-center"
                      data-ocid="nav.mobile.search.empty_state"
                    >
                      <p className="text-sm text-muted-foreground">
                        No results for{" "}
                        <strong>&ldquo;{mobileSearchQuery}&rdquo;</strong>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

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
            <Link
              to="/ai-tools"
              className="flex items-center gap-2 text-gold py-2 text-sm font-semibold border-b border-white/10"
              data-ocid="nav.mobile.aitools.link"
            >
              <BrainCircuit className="w-4 h-4" /> AI Tools
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
                {c.featured ? "\u2b50 " : ""}
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
