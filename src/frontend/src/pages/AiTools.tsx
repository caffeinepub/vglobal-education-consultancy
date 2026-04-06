import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  BrainCircuit,
  Calculator,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  FileText,
  Info,
  Loader2,
  MapPin,
  Star,
  Target,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import SEOHead from "../components/SEOHead";
import { useActor } from "../hooks/useActor";

interface LeadData {
  name: string;
  phone: string;
  email: string;
}

type ToolId = "predictor" | "matcher" | "quiz" | "eligibility" | "budget";

const tools: {
  id: ToolId;
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
  accentBg: string;
}[] = [
  {
    id: "predictor",
    icon: Target,
    title: "NEET Score Predictor",
    desc: "Find out which countries and universities you qualify for based on your NEET score and category.",
    color: "from-blue-600 to-navy",
    accentBg: "bg-blue-600",
  },
  {
    id: "matcher",
    icon: BrainCircuit,
    title: "AI University Matcher",
    desc: "Get matched to your perfect university based on budget, language, climate, and NEET score.",
    color: "from-purple-600 to-blue-800",
    accentBg: "bg-purple-600",
  },
  {
    id: "quiz",
    icon: ClipboardList,
    title: "Country Fit Quiz",
    desc: "Answer 6 quick questions and discover which country suits you best for MBBS.",
    color: "from-gold-dark to-gold",
    accentBg: "bg-amber-500",
  },
  {
    id: "eligibility",
    icon: Bot,
    title: "MBBS Eligibility Checker",
    desc: "Instantly verify if you're eligible for MBBS abroad and get a detailed checklist.",
    color: "from-green-700 to-green-500",
    accentBg: "bg-green-600",
  },
  {
    id: "budget",
    icon: Calculator,
    title: "Budget Calculator",
    desc: "Calculate estimated total cost of MBBS abroad — tuition, hostel, food, and travel — for any country.",
    color: "from-orange-600 to-amber-500",
    accentBg: "bg-orange-500",
  },
];

// ---------------------------------------------------------------------------
// NEET State Cutoffs
// ---------------------------------------------------------------------------
const neetStateCutoffs = [
  {
    state: "Rajasthan",
    g23: "595–620",
    o23: "555–580",
    sc23: "510–540",
    st23: "460–500",
    g24: "600–625",
    o24: "560–585",
    sc24: "515–545",
    st24: "465–505",
    g25: "602–628",
    o25: "562–587",
    sc25: "518–548",
    st25: "467–508",
  },
  {
    state: "Maharashtra",
    g23: "605–630",
    o23: "570–595",
    sc23: "525–555",
    st23: "470–510",
    g24: "610–635",
    o24: "575–600",
    sc24: "530–560",
    st24: "475–515",
    g25: "612–638",
    o25: "577–602",
    sc25: "532–562",
    st25: "477–517",
  },
  {
    state: "Delhi",
    g23: "625–650",
    o23: "595–620",
    sc23: "555–580",
    st23: "505–535",
    g24: "630–655",
    o24: "600–625",
    sc24: "560–585",
    st24: "510–540",
    g25: "632–658",
    o25: "602–628",
    sc25: "562–588",
    st25: "512–542",
  },
  {
    state: "Uttar Pradesh",
    g23: "590–615",
    o23: "555–580",
    sc23: "510–535",
    st23: "455–490",
    g24: "595–620",
    o24: "560–585",
    sc24: "515–540",
    st24: "460–495",
    g25: "597–622",
    o25: "562–587",
    sc25: "517–542",
    st25: "462–497",
  },
  {
    state: "Tamil Nadu",
    g23: "600–625",
    o23: "565–590",
    sc23: "520–548",
    st23: "460–493",
    g24: "605–629",
    o24: "570–594",
    sc24: "525–553",
    st24: "465–498",
    g25: "607–631",
    o25: "572–596",
    sc25: "527–555",
    st25: "467–500",
  },
  {
    state: "Karnataka",
    g23: "592–616",
    o23: "557–581",
    sc23: "512–536",
    st23: "457–490",
    g24: "597–621",
    o24: "562–586",
    sc24: "517–541",
    st24: "462–495",
    g25: "599–623",
    o25: "564–588",
    sc25: "519–543",
    st25: "464–497",
  },
  {
    state: "Gujarat",
    g23: "585–610",
    o23: "550–575",
    sc23: "505–530",
    st23: "450–483",
    g24: "590–615",
    o24: "555–580",
    sc24: "510–535",
    st24: "455–488",
    g25: "592–617",
    o25: "557–582",
    sc25: "512–537",
    st25: "457–490",
  },
  {
    state: "Punjab",
    g23: "583–608",
    o23: "548–573",
    sc23: "503–528",
    st23: "448–480",
    g24: "588–613",
    o24: "553–578",
    sc24: "508–533",
    st24: "453–485",
    g25: "590–615",
    o25: "555–580",
    sc25: "510–535",
    st25: "455–487",
  },
  {
    state: "Madhya Pradesh",
    g23: "583–608",
    o23: "548–573",
    sc23: "502–528",
    st23: "447–480",
    g24: "588–613",
    o24: "553–578",
    sc24: "507–533",
    st24: "452–485",
    g25: "590–615",
    o25: "555–580",
    sc25: "509–535",
    st25: "454–487",
  },
  {
    state: "Bihar",
    g23: "578–603",
    o23: "543–568",
    sc23: "497–523",
    st23: "442–474",
    g24: "583–608",
    o24: "548–573",
    sc24: "502–528",
    st24: "447–479",
    g25: "585–610",
    o25: "550–575",
    sc25: "504–530",
    st25: "449–481",
  },
  {
    state: "West Bengal",
    g23: "590–614",
    o23: "556–580",
    sc23: "511–535",
    st23: "455–488",
    g24: "595–619",
    o24: "561–585",
    sc24: "516–540",
    st24: "460–493",
    g25: "597–621",
    o25: "563–587",
    sc25: "518–542",
    st25: "462–495",
  },
  {
    state: "Andhra Pradesh",
    g23: "595–620",
    o23: "561–585",
    sc23: "516–540",
    st23: "460–494",
    g24: "600–625",
    o24: "566–590",
    sc24: "521–545",
    st24: "465–499",
    g25: "602–627",
    o25: "568–592",
    sc25: "523–547",
    st25: "467–501",
  },
  {
    state: "Telangana",
    g23: "598–622",
    o23: "563–588",
    sc23: "518–543",
    st23: "463–496",
    g24: "603–627",
    o24: "568–593",
    sc24: "523–548",
    st24: "468–501",
    g25: "605–629",
    o25: "570–595",
    sc25: "525–550",
    st25: "470–503",
  },
  {
    state: "Kerala",
    g23: "603–627",
    o23: "568–593",
    sc23: "523–548",
    st23: "467–500",
    g24: "608–632",
    o24: "573–598",
    sc24: "528–553",
    st24: "472–505",
    g25: "610–634",
    o25: "575–600",
    sc25: "530–555",
    st25: "474–507",
  },
];

// ---------------------------------------------------------------------------
// University-level NEET thresholds
// ---------------------------------------------------------------------------
const universityThresholds = [
  {
    name: "Modern Medical University, Jalalabad",
    country: "Kyrgyzstan",
    minGeneral: 150,
    minReserved: 120,
    notes: "Direct admission, NMC recognized, English medium",
  },
  {
    name: "KSMA (Kyrgyz State Medical Academy)",
    country: "Kyrgyzstan",
    minGeneral: 150,
    minReserved: 120,
    notes: "NMC recognized, Bishkek campus",
  },
  {
    name: "Osh State Medical University",
    country: "Kyrgyzstan",
    minGeneral: 150,
    minReserved: 120,
    notes: "NMC recognized, affordable fees",
  },
  {
    name: "ISM Kyrgyzstan",
    country: "Kyrgyzstan",
    minGeneral: 150,
    minReserved: 120,
    notes: "International School of Medicine",
  },
  {
    name: "Sechenov First Moscow State Medical University",
    country: "Russia",
    minGeneral: 500,
    minReserved: 460,
    notes: "Top-ranked, highly competitive",
  },
  {
    name: "Kazan Federal University",
    country: "Russia",
    minGeneral: 450,
    minReserved: 420,
    notes: "Research-intensive, ECFMG recognized",
  },
  {
    name: "Kursk State Medical University",
    country: "Russia",
    minGeneral: 400,
    minReserved: 370,
    notes: "Popular among Indian students",
  },
  {
    name: "Volgograd Medical University",
    country: "Russia",
    minGeneral: 350,
    minReserved: 320,
    notes: "Affordable, NMC recognized",
  },
  {
    name: "Rostov State Medical University",
    country: "Russia",
    minGeneral: 380,
    minReserved: 350,
    notes: "NMC recognized",
  },
  {
    name: "Tbilisi State Medical University",
    country: "Georgia",
    minGeneral: 450,
    minReserved: 420,
    notes: "Most competitive in Georgia",
  },
  {
    name: "TSMU (David Tvildiani)",
    country: "Georgia",
    minGeneral: 350,
    minReserved: 320,
    notes: "Popular English medium",
  },
  {
    name: "New Vision University",
    country: "Georgia",
    minGeneral: 300,
    minReserved: 270,
    notes: "Modern curriculum",
  },
  {
    name: "Kazakh National Medical University",
    country: "Kazakhstan",
    minGeneral: 150,
    minReserved: 120,
    notes: "NMC recognized, Almaty",
  },
  {
    name: "Semey Medical University",
    country: "Kazakhstan",
    minGeneral: 150,
    minReserved: 120,
    notes: "NMC recognized",
  },
  {
    name: "University of Santo Tomas (UST)",
    country: "Philippines",
    minGeneral: 400,
    minReserved: 370,
    notes: "Most competitive in Philippines",
  },
  {
    name: "De La Salle Medical (DMSF)",
    country: "Philippines",
    minGeneral: 300,
    minReserved: 270,
    notes: "US-pattern curriculum",
  },
  {
    name: "Dhaka Medical College",
    country: "Bangladesh",
    minGeneral: 150,
    minReserved: 120,
    notes: "Nearest option",
  },
  {
    name: "Chittagong Medical College",
    country: "Bangladesh",
    minGeneral: 150,
    minReserved: 120,
    notes: "NMC recognized",
  },
  {
    name: "China Medical University",
    country: "China",
    minGeneral: 400,
    minReserved: 370,
    notes: "Check English medium availability",
  },
  {
    name: "Nanjing Medical University",
    country: "China",
    minGeneral: 350,
    minReserved: 320,
    notes: "Growing recognition",
  },
  {
    name: "Zhejiang University",
    country: "China",
    minGeneral: 450,
    minReserved: 420,
    notes: "Competitive entry",
  },
  {
    name: "KNMU Kharkiv",
    country: "Ukraine",
    minGeneral: 200,
    minReserved: 170,
    notes: "Verify current admissions status",
  },
  {
    name: "Bogomolets National Medical University",
    country: "Ukraine",
    minGeneral: 250,
    minReserved: 220,
    notes: "Verify current status",
  },
  {
    name: "Tashkent Medical Academy",
    country: "Uzbekistan",
    minGeneral: 150,
    minReserved: 120,
    notes: "Growing NMC recognition",
  },
  {
    name: "Samarkand State Medical University",
    country: "Uzbekistan",
    minGeneral: 150,
    minReserved: 120,
    notes: "Affordable fees",
  },
];

// ---------------------------------------------------------------------------
// Budget data per country (annual, USD approximate)
// ---------------------------------------------------------------------------
const countryBudgetData: Record<
  string,
  {
    tuitionRange: [number, number];
    hostelRange: [number, number];
    foodRange: [number, number];
    travelRange: [number, number];
    currency: string;
    duration: number;
    notes: string;
  }
> = {
  Kyrgyzstan: {
    tuitionRange: [3000, 4500],
    hostelRange: [600, 1200],
    foodRange: [600, 1000],
    travelRange: [300, 500],
    currency: "USD",
    duration: 6,
    notes:
      "Most affordable destination. Kyrgyzstan Som; INR exchange is favourable.",
  },
  Russia: {
    tuitionRange: [4500, 7000],
    hostelRange: [1200, 2400],
    foodRange: [1200, 2000],
    travelRange: [500, 800],
    currency: "USD",
    duration: 6,
    notes:
      "Budget varies significantly by city. Moscow is costlier than Kursk/Volgograd.",
  },
  Georgia: {
    tuitionRange: [5000, 8000],
    hostelRange: [1500, 3000],
    foodRange: [1500, 2500],
    travelRange: [400, 700],
    currency: "USD",
    duration: 5,
    notes:
      "5-year program reduces total cost. Tbilisi cost of living is moderate.",
  },
  Kazakhstan: {
    tuitionRange: [3500, 5500],
    hostelRange: [1000, 1800],
    foodRange: [900, 1500],
    travelRange: [400, 700],
    currency: "USD",
    duration: 6,
    notes: "Good value for money. Strong Indian community in Almaty.",
  },
  Philippines: {
    tuitionRange: [4000, 6500],
    hostelRange: [1200, 2400],
    foodRange: [1000, 1800],
    travelRange: [600, 1000],
    currency: "USD",
    duration: 5,
    notes: "5-year program. English medium throughout. Warm tropical climate.",
  },
  Bangladesh: {
    tuitionRange: [2500, 4000],
    hostelRange: [600, 1200],
    foodRange: [500, 900],
    travelRange: [200, 400],
    currency: "USD",
    duration: 5,
    notes:
      "Cheapest and nearest option. 5-year program. India–Bangladesh flights are inexpensive.",
  },
  China: {
    tuitionRange: [4000, 7000],
    hostelRange: [1200, 2400],
    foodRange: [1000, 1800],
    travelRange: [600, 1000],
    currency: "USD",
    duration: 6,
    notes:
      "Strict Chinese language requirements post-2023. Confirm English medium availability.",
  },
  Ukraine: {
    tuitionRange: [3500, 5500],
    hostelRange: [1000, 1800],
    foodRange: [900, 1500],
    travelRange: [400, 700],
    currency: "USD",
    duration: 6,
    notes:
      "Admission currently limited due to ongoing conflict. Verify university status before applying.",
  },
  Uzbekistan: {
    tuitionRange: [3000, 4500],
    hostelRange: [600, 1200],
    foodRange: [600, 1000],
    travelRange: [350, 600],
    currency: "USD",
    duration: 6,
    notes:
      "Growing destination. Affordable and warm climate. NMC recognition improving.",
  },
};

// ---------------------------------------------------------------------------
// NeetPredictor
// ---------------------------------------------------------------------------
function NeetPredictor({ lead }: { lead: LeadData }) {
  const [score, setScore] = useState(300);
  const [category, setCategory] = useState<"General" | "OBC" | "SC" | "ST">(
    "General",
  );
  const [year, setYear] = useState("2026");
  const [results, setResults] = useState<null | {
    eligible: {
      country: string;
      status: string;
      color: string;
      universities: string[];
      note?: string;
    }[];
    topRecommendations: { name: string; country: string; reason: string }[];
  }>(null);

  const isReserved = category !== "General";

  const calculate = () => {
    let minQualifying: number;
    if (year === "2024") {
      minQualifying = isReserved ? 120 : 150;
    } else {
      minQualifying = isReserved ? 121 : 151;
    }

    const allCountries = [
      {
        country: "Kyrgyzstan",
        minGeneral: 150,
        minReserved: 120,
        universities: [
          "Modern Medical University Jalalabad",
          "KSMA",
          "Osh State Medical University",
          "ISM",
        ],
      },
      {
        country: "Russia",
        minGeneral: 350,
        minReserved: 320,
        universities: [
          "Sechenov First Moscow State",
          "Kazan Federal University",
          "Kursk State Medical",
          "Volgograd Medical",
        ],
        note: "Top universities like Sechenov require 500+",
      },
      {
        country: "Georgia",
        minGeneral: 350,
        minReserved: 320,
        universities: [
          "Tbilisi State Medical University",
          "TSMU",
          "New Vision University",
        ],
        note: "Tbilisi State Medical requires 450+",
      },
      {
        country: "Kazakhstan",
        minGeneral: 150,
        minReserved: 120,
        universities: ["Kazakh National Medical University", "Semey Medical"],
      },
      {
        country: "Philippines",
        minGeneral: 300,
        minReserved: 270,
        universities: [
          "University of Santo Tomas",
          "De La Salle Medical (DMSF)",
        ],
        note: "UST requires 400+; other colleges accept 300+",
      },
      {
        country: "Bangladesh",
        minGeneral: 150,
        minReserved: 120,
        universities: ["Dhaka Medical College", "Chittagong Medical College"],
      },
      {
        country: "China",
        minGeneral: 350,
        minReserved: 320,
        universities: [
          "China Medical University",
          "Nanjing Medical University",
          "Zhejiang University",
        ],
        note: "Requires MCC approval; check English-medium availability",
      },
      {
        country: "Ukraine",
        minGeneral: 200,
        minReserved: 170,
        universities: [
          "KNMU Kharkiv",
          "Bogomolets National Medical University",
        ],
        note: "Verify current admissions status given ongoing conflict",
      },
      {
        country: "Uzbekistan",
        minGeneral: 150,
        minReserved: 120,
        universities: [
          "Tashkent Medical Academy",
          "Samarkand State Medical University",
        ],
      },
    ];

    const eligible: {
      country: string;
      status: string;
      color: string;
      universities: string[];
      note?: string;
    }[] = [];
    const threshold = isReserved ? "minReserved" : "minGeneral";

    for (const c of allCountries) {
      const countryMin = c[threshold as "minGeneral" | "minReserved"];
      if (score < minQualifying) {
        if (
          ["Kyrgyzstan", "Kazakhstan", "Uzbekistan", "Bangladesh"].includes(
            c.country,
          )
        ) {
          eligible.push({
            country: c.country,
            universities: c.universities,
            status: "Need qualifying NEET score first",
            color: "yellow",
          });
        } else {
          eligible.push({
            country: c.country,
            universities: c.universities,
            status: "Not Eligible — NEET score too low",
            color: "red",
          });
        }
      } else if (score >= countryMin) {
        eligible.push({
          country: c.country,
          universities: c.universities,
          status: "Eligible ✓",
          color: "green",
          note: c.note,
        });
      } else {
        eligible.push({
          country: c.country,
          universities: c.universities,
          status: "Score may be insufficient",
          color: "yellow",
          note: c.note,
        });
      }
    }

    const topRecommendations: {
      name: string;
      country: string;
      reason: string;
    }[] = [];

    if (score >= (isReserved ? 120 : 150)) {
      topRecommendations.push({
        name: "Modern Medical University, Jalalabad",
        country: "Kyrgyzstan",
        reason: `VGLOBAL's #1 pick. NMC-recognized, English medium, large Indian community. Perfect for ${category} category with NEET ${score}.`,
      });
    }
    if (score >= (isReserved ? 320 : 380)) {
      topRecommendations.push({
        name: "Rostov State Medical University",
        country: "Russia",
        reason: `Good option for ${category} category with score ${score}. NMC recognized, well-established.`,
      });
    }
    if (score >= (isReserved ? 270 : 300)) {
      topRecommendations.push({
        name: "New Vision University",
        country: "Georgia",
        reason: `5-year English medium program. European exposure. Score ${score} is sufficient.`,
      });
    }
    if (score >= (isReserved ? 120 : 150)) {
      topRecommendations.push({
        name: "Kazakh National Medical University",
        country: "Kazakhstan",
        reason: `Affordable NMC-recognized option. Good for ${category} category.`,
      });
    }
    if (score >= (isReserved ? 270 : 300)) {
      topRecommendations.push({
        name: "De La Salle Medical (DMSF)",
        country: "Philippines",
        reason: `English-medium, US-pattern MBBS. Warm climate. Score ${score} qualifies.`,
      });
    }

    setResults({
      eligible,
      topRecommendations: topRecommendations.slice(0, 4),
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label>
            NEET Score: <span className="text-gold font-bold">{score}</span>
          </Label>
          <Slider
            min={0}
            max={720}
            step={10}
            value={[score]}
            onValueChange={([v]) => {
              setScore(v);
              setResults(null);
            }}
            data-ocid="predictor.score.slider"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>360</span>
            <span>720</span>
          </div>
        </div>
        <div className="space-y-3">
          <Label>Category</Label>
          <select
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value as "General" | "OBC" | "SC" | "ST");
              setResults(null);
            }}
            data-ocid="predictor.category.select"
          >
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
          </select>
        </div>
        <div className="space-y-3">
          <Label>Year of Attempt</Label>
          <select
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setResults(null);
            }}
            data-ocid="predictor.year.select"
          >
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
          </select>
        </div>
      </div>
      <Button
        className="bg-navy hover:bg-navy-dark text-white w-full"
        onClick={calculate}
        data-ocid="predictor.calculate.button"
      >
        Check My Eligibility <Target className="ml-2 w-4 h-4" />
      </Button>
      {results && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div>
            <h3 className="font-display font-bold text-navy text-lg mb-4">
              Country Eligibility
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {results.eligible.map((e) => (
                <div
                  key={e.country}
                  className={`flex items-start gap-2 p-3 rounded-lg border text-sm ${e.color === "green" ? "bg-green-50 border-green-200 text-green-800" : e.color === "yellow" ? "bg-yellow-50 border-yellow-200 text-yellow-800" : "bg-red-50 border-red-200 text-red-800"}`}
                >
                  <div className="shrink-0 mt-0.5">
                    {e.color === "green" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : e.color === "yellow" ? (
                      <Star className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold">{e.country}</div>
                    <div className="text-xs mt-0.5 break-words">{e.status}</div>
                    {e.note && (
                      <div className="text-xs mt-0.5 italic break-words">
                        {e.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-navy text-lg mb-4">
              ⭐ Top Recommended Universities for{" "}
              <span className="text-gold">{category}</span> Category
            </h3>
            <div className="space-y-3">
              {results.topRecommendations.map((r, i) => (
                <div
                  key={r.name}
                  className={`flex gap-3 p-4 rounded-lg border ${i === 0 ? "bg-amber-50 border-gold" : "bg-secondary border-border"}`}
                >
                  <div
                    className={`font-display font-bold text-2xl shrink-0 ${i === 0 ? "text-gold" : "text-navy"}`}
                  >
                    {i + 1}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-navy">{r.name}</div>
                    <div className="text-xs text-gold">{r.country}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {r.reason}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-navy/5 rounded-lg p-4 border border-navy/20 text-sm">
            <p className="text-navy font-semibold mb-1">
              👋 {lead.name}, want personalised guidance?
            </p>
            <p className="text-muted-foreground">
              Our counsellors will call you on <strong>{lead.phone}</strong> to
              discuss these options in detail.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// UniversityMatcher
// ---------------------------------------------------------------------------
function UniversityMatcher({ lead: _lead }: { lead: LeadData }) {
  const [score, setScore] = useState(350);
  const [budget, setBudget] = useState(5000);
  const [hostelBudget, setHostelBudget] = useState(300);
  const [language, setLanguage] = useState("English Only");
  const [climate, setClimate] = useState("Moderate");
  const [duration, setDuration] = useState("No preference");
  const [category, setCategory] = useState<"General" | "OBC" | "SC" | "ST">(
    "General",
  );
  const [familyConcerns, setFamilyConcerns] = useState<string[]>([]);
  const [results, setResults] = useState<
    | {
        country: string;
        match: number;
        matchPct: number;
        reasons: string[];
        universities: string[];
      }[]
    | null
  >(null);

  const familyConcernOptions = [
    "Safety & Security",
    "Indian Food Availability",
    "Distance from India",
    "Cost of Living",
    "Hindi/Indian Community",
  ];

  const toggleConcern = (concern: string) => {
    setFamilyConcerns((prev) =>
      prev.includes(concern)
        ? prev.filter((c) => c !== concern)
        : [...prev, concern],
    );
    setResults(null);
  };

  const calculate = () => {
    const isReserved = category !== "General";
    const matches: {
      country: string;
      match: number;
      reasons: string[];
      universities: string[];
    }[] = [
      {
        country: "Kyrgyzstan",
        universities: [
          "Modern Medical University, Jalalabad",
          "KSMA",
          "Osh State Medical University",
          "ISM",
        ],
        match: 0,
        reasons: [],
      },
      {
        country: "Russia",
        universities: [
          "Sechenov First Moscow State",
          "Kazan Federal",
          "Kursk State Medical",
          "Volgograd Medical",
        ],
        match: 0,
        reasons: [],
      },
      {
        country: "Georgia",
        universities: [
          "Tbilisi State Medical",
          "TSMU",
          "New Vision University",
        ],
        match: 0,
        reasons: [],
      },
      {
        country: "Kazakhstan",
        universities: ["Kazakh National Medical", "Semey Medical"],
        match: 0,
        reasons: [],
      },
      {
        country: "Philippines",
        universities: ["University of Santo Tomas", "De La Salle Medical"],
        match: 0,
        reasons: [],
      },
      {
        country: "Bangladesh",
        universities: ["Dhaka Medical College", "Chittagong Medical College"],
        match: 0,
        reasons: [],
      },
      {
        country: "Uzbekistan",
        universities: ["Tashkent Medical Academy", "Samarkand State Medical"],
        match: 0,
        reasons: [],
      },
      {
        country: "China",
        universities: [
          "China Medical University",
          "Nanjing Medical University",
          "Zhejiang University",
        ],
        match: 0,
        reasons: [],
      },
      {
        country: "Ukraine",
        universities: [
          "KNMU Kharkiv",
          "Bogomolets National Medical University",
        ],
        match: 0,
        reasons: [],
      },
    ];

    for (const m of matches) {
      const c = m.country;

      // Budget scoring
      if (budget < 4000) {
        if (["Kyrgyzstan", "Bangladesh", "Uzbekistan"].includes(c)) {
          m.match += 30;
          m.reasons.push("Matches your low budget range");
        } else if (c === "Kazakhstan") {
          m.match += 15;
        } else {
          m.match += 5;
        }
      } else if (budget < 6000) {
        if (["Kyrgyzstan", "Kazakhstan", "Russia", "Uzbekistan"].includes(c)) {
          m.match += 20;
          m.reasons.push("Good value within budget");
        } else {
          m.match += 10;
        }
      } else if (budget < 8000) {
        if (["Georgia", "Philippines", "Russia", "China"].includes(c)) {
          m.match += 20;
          m.reasons.push("Premium destination within budget");
        } else {
          m.match += 10;
        }
      } else {
        if (["Georgia", "Philippines"].includes(c)) {
          m.match += 25;
          m.reasons.push("Premium destination");
        } else {
          m.match += 12;
        }
      }

      // Hostel budget scoring
      if (hostelBudget < 200) {
        if (["Kyrgyzstan", "Bangladesh", "Uzbekistan"].includes(c)) {
          m.match += 15;
          m.reasons.push("Very affordable hostel options");
        }
      } else if (hostelBudget < 500) {
        if (
          ["Kyrgyzstan", "Kazakhstan", "Uzbekistan", "Bangladesh"].includes(c)
        ) {
          m.match += 10;
        }
      }

      // Language scoring
      if (language === "English Only") {
        if (["Philippines", "Georgia", "Bangladesh"].includes(c)) {
          m.match += 20;
          m.reasons.push("English medium throughout");
        } else if (["Kyrgyzstan", "Kazakhstan"].includes(c)) {
          m.match += 12;
          m.reasons.push("English medium available");
        } else if (c === "Ukraine") {
          m.match += 10;
        }
      } else if (language === "English + Russian/Local OK") {
        if (["Russia", "Kazakhstan", "Kyrgyzstan", "Ukraine"].includes(c)) {
          m.match += 20;
          m.reasons.push("Russian/local language widely spoken");
        } else {
          m.match += 8;
        }
      }

      // Climate scoring
      if (climate === "Cold (Snow)") {
        if (["Russia", "Kazakhstan", "Kyrgyzstan", "Ukraine"].includes(c)) {
          m.match += 20;
          m.reasons.push("Cold climate matches preference");
        }
      } else if (climate === "Warm/Tropical") {
        if (["Philippines", "Bangladesh"].includes(c)) {
          m.match += 20;
          m.reasons.push("Warm tropical climate");
        } else if (["Uzbekistan", "Georgia"].includes(c)) {
          m.match += 12;
        }
      } else if (climate === "Moderate") {
        if (["Georgia", "Uzbekistan", "Kazakhstan"].includes(c)) {
          m.match += 15;
          m.reasons.push("Moderate temperate climate");
        } else {
          m.match += 5;
        }
      } else {
        m.match += 8;
      }

      // Duration scoring
      if (duration === "5yr") {
        if (["Georgia", "Philippines", "Bangladesh"].includes(c)) {
          m.match += 20;
          m.reasons.push("5-year program available");
        }
      } else if (duration === "6yr") {
        if (
          [
            "Russia",
            "Kyrgyzstan",
            "Kazakhstan",
            "China",
            "Ukraine",
            "Uzbekistan",
          ].includes(c)
        ) {
          m.match += 20;
          m.reasons.push("6-year comprehensive program");
        } else {
          m.match += 6;
        }
      } else {
        m.match += 12;
      }

      // NEET score + category scoring
      const relevantUniversities = universityThresholds.filter(
        (u) => u.country === c,
      );
      const eligibleUniversities = relevantUniversities.filter(
        (u) => score >= (isReserved ? u.minReserved : u.minGeneral),
      );
      const eligibleFraction =
        relevantUniversities.length > 0
          ? eligibleUniversities.length / relevantUniversities.length
          : 0;
      const neetBonus = Math.round(eligibleFraction * 15);
      if (neetBonus > 0) {
        m.match += neetBonus;
        m.reasons.push(
          `${eligibleUniversities.length}/${relevantUniversities.length} universities eligible for your NEET+category`,
        );
      }

      // Family concerns scoring
      if (familyConcerns.includes("Indian Food Availability")) {
        if (["Kyrgyzstan", "Bangladesh", "Russia"].includes(c)) {
          m.match += 18;
          m.reasons.push("Indian food widely available");
        } else if (c === "Kazakhstan") {
          m.match += 12;
        }
      }
      if (familyConcerns.includes("Safety & Security")) {
        if (["Kyrgyzstan", "Georgia", "Philippines"].includes(c)) {
          m.match += 18;
          m.reasons.push("Safe, student-friendly environment");
        }
        if (c === "Ukraine") {
          m.match -= 10;
          m.reasons.push("⚠️ Safety concerns due to ongoing conflict");
        }
      }
      if (familyConcerns.includes("Distance from India")) {
        if (["Bangladesh", "Kyrgyzstan"].includes(c)) {
          m.match += 25;
          m.reasons.push("Closest to India (2,000–3,200 km)");
        } else if (["Uzbekistan", "Kazakhstan", "China"].includes(c)) {
          m.match += 15;
          m.reasons.push("Moderate distance from India (3,000–3,600 km)");
        } else if (c === "Georgia") {
          m.match += 8;
          m.reasons.push("~4,000 km from India");
        } else if (["Philippines", "Russia", "Ukraine"].includes(c)) {
          m.match += 3;
          m.reasons.push("Further from India (4,800–5,500 km)");
        }
      }
      if (familyConcerns.includes("Hindi/Indian Community")) {
        if (c === "Kyrgyzstan") {
          m.match += 25;
          m.reasons.push("Largest Indian student community");
        } else if (["Bangladesh", "Russia", "Kazakhstan"].includes(c)) {
          m.match += 12;
          m.reasons.push("Good Indian student community");
        }
      }
      if (familyConcerns.includes("Cost of Living")) {
        if (["Kyrgyzstan", "Bangladesh", "Uzbekistan"].includes(c)) {
          m.match += 18;
          m.reasons.push("Low cost of living (₹12,000–₹20,000/mo)");
        } else if (["Kazakhstan", "Ukraine", "Russia"].includes(c)) {
          m.match += 8;
          m.reasons.push("Moderate cost of living");
        }
      }
    }

    const rawScores = matches.map((m) => m.match);
    const maxRaw = Math.max(...rawScores);
    const minRaw = Math.min(...rawScores);
    const range = maxRaw - minRaw || 1;

    const normalized = matches.map((m) => ({
      ...m,
      matchPct: Math.round(50 + ((m.match - minRaw) / range) * 48),
    }));

    const sorted = normalized.sort((a, b) => b.match - a.match);
    const topResults = sorted.slice(0, 5);

    for (const r of topResults) {
      if (r.country === "Kyrgyzstan") {
        r.universities = [
          "Modern Medical University, Jalalabad",
          "KSMA",
          "Osh State Medical University",
          "ISM",
        ];
      }
    }

    setResults(topResults);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label>
            NEET Score: <span className="text-gold font-bold">{score}</span>
          </Label>
          <Slider
            min={0}
            max={720}
            step={10}
            value={[score]}
            onValueChange={([v]) => {
              setScore(v);
              setResults(null);
            }}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>720</span>
          </div>
        </div>
        <div className="space-y-3">
          <Label>Category</Label>
          <select
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value as "General" | "OBC" | "SC" | "ST");
              setResults(null);
            }}
          >
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
          </select>
        </div>
        <div className="space-y-3">
          <Label>
            Annual Tuition Budget:{" "}
            <span className="text-gold font-bold">
              ${budget.toLocaleString()}
            </span>
          </Label>
          <Slider
            min={2500}
            max={10000}
            step={500}
            value={[budget]}
            onValueChange={([v]) => {
              setBudget(v);
              setResults(null);
            }}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$2,500</span>
            <span>$10,000</span>
          </div>
        </div>
        <div className="space-y-3">
          <Label>
            Monthly Hostel Budget:{" "}
            <span className="text-gold font-bold">${hostelBudget}/mo</span>
          </Label>
          <Slider
            min={100}
            max={1500}
            step={50}
            value={[hostelBudget]}
            onValueChange={([v]) => {
              setHostelBudget(v);
              setResults(null);
            }}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$100</span>
            <span>$1,500</span>
          </div>
        </div>
        <div className="space-y-3">
          <Label>Language Preference</Label>
          <select
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setResults(null);
            }}
          >
            <option>English Only</option>
            <option>English + Russian/Local OK</option>
            <option>Hindi preferred</option>
            <option>No Preference</option>
          </select>
        </div>
        <div className="space-y-3">
          <Label>Climate Preference</Label>
          <select
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
            value={climate}
            onChange={(e) => {
              setClimate(e.target.value);
              setResults(null);
            }}
          >
            <option>Cold (Snow)</option>
            <option>Moderate</option>
            <option>Warm/Tropical</option>
            <option>No Preference</option>
          </select>
        </div>
        <div className="space-y-3">
          <Label>Preferred Duration</Label>
          <select
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
              setResults(null);
            }}
          >
            <option value="5yr">5 Years</option>
            <option value="6yr">6 Years</option>
            <option value="No preference">No Preference</option>
          </select>
        </div>
      </div>
      <div className="space-y-3">
        <Label className="text-sm font-semibold">
          Family Concerns{" "}
          <span className="font-normal text-muted-foreground">
            (tick all that apply)
          </span>
        </Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {familyConcernOptions.map((concern) => (
            <div
              key={concern}
              className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-gold/40 bg-secondary/50"
            >
              <Checkbox
                id={`concern-${concern}`}
                checked={familyConcerns.includes(concern)}
                onCheckedChange={() => toggleConcern(concern)}
                data-ocid="matcher.concern.checkbox"
              />
              <label
                htmlFor={`concern-${concern}`}
                className="text-sm text-foreground cursor-pointer select-none"
              >
                {concern}
              </label>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="bg-navy hover:bg-navy-dark text-white w-full"
        onClick={calculate}
        data-ocid="matcher.calculate.button"
      >
        Find My Best Match <BrainCircuit className="ml-2 w-4 h-4" />
      </Button>
      {results && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h3 className="font-display font-bold text-navy text-lg">
            🎯 Your Top 5 Country Matches
          </h3>
          {results.map((r, i) => (
            <div
              key={r.country}
              className={`rounded-lg p-4 border ${i === 0 ? "bg-amber-50 border-gold" : "bg-secondary border-border"}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-navy font-bold text-lg shrink-0">
                    #{i + 1}
                  </span>
                  <span className="font-semibold text-navy shrink-0">
                    {r.country}
                  </span>
                  {i === 0 && (
                    <Badge className="bg-gold text-navy text-xs">
                      🏆 Top Match
                    </Badge>
                  )}
                </div>
                <Badge
                  className={`shrink-0 font-bold ${r.matchPct >= 80 ? "bg-green-100 text-green-800" : r.matchPct >= 65 ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-700"}`}
                >
                  {r.matchPct}% match
                </Badge>
              </div>
              <Progress value={r.matchPct} className="h-2 mb-3" />
              <div className="flex flex-wrap gap-1 mb-2">
                {r.reasons.slice(0, 4).map((reason) => (
                  <span
                    key={reason}
                    className="text-xs bg-navy/10 text-navy px-2 py-0.5 rounded-full"
                  >
                    {reason}
                  </span>
                ))}
              </div>
              <div className="text-xs text-muted-foreground">
                Top universities: {r.universities.join(", ")}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// CountryQuiz
// ---------------------------------------------------------------------------
const quizQuestions = [
  {
    q: "What's your annual budget for MBBS (including living expenses)?",
    options: ["Under ₹3 Lakh", "₹3–5 Lakh", "₹5–8 Lakh", "Over ₹8 Lakh"],
    key: "budget",
  },
  {
    q: "How comfortable are you with language?",
    options: [
      "English only",
      "Can learn Russian basics",
      "Any language is fine",
      "Prefer English medium strongly",
    ],
    key: "language",
  },
  {
    q: "What climate do you prefer?",
    options: [
      "Cold/Snowy winters",
      "Moderate/temperate",
      "Warm/tropical",
      "No preference at all",
    ],
    key: "climate",
  },
  {
    q: "What is your NEET score range?",
    options: ["Below 300", "300–450", "450–550", "Above 550"],
    key: "neet",
  },
  {
    q: "What is your top priority?",
    options: [
      "Lowest possible cost",
      "Best NMC recognition",
      "English medium education",
      "Easiest visa process",
    ],
    key: "priority",
  },
  {
    q: "Preferred MBBS duration?",
    options: ["5 years", "6 years", "Doesn't matter"],
    key: "duration",
  },
];

function CountryQuiz({ lead }: { lead: LeadData }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [results, setResults] = useState<
    { country: string; score: number; reason: string }[] | null
  >(null);

  const pickAnswer = (idx: number) => {
    const newAnswers = { ...answers, [quizQuestions[step].key]: idx };
    setAnswers(newAnswers);
    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      const scores: Record<string, number> = {
        Kyrgyzstan: 0,
        Russia: 0,
        Georgia: 0,
        Kazakhstan: 0,
        Philippines: 0,
        Bangladesh: 0,
        Uzbekistan: 0,
        China: 0,
        Ukraine: 0,
      };
      const b = newAnswers.budget ?? 1;
      const l = newAnswers.language ?? 2;
      const cl = newAnswers.climate ?? 3;
      const n = newAnswers.neet ?? 1;
      const p = newAnswers.priority ?? 0;
      const d = newAnswers.duration ?? 2;

      if (b === 0) {
        scores.Kyrgyzstan += 30;
        scores.Bangladesh += 25;
        scores.Uzbekistan += 25;
      } else if (b === 1) {
        scores.Kyrgyzstan += 25;
        scores.Kazakhstan += 20;
        scores.Russia += 20;
        scores.Ukraine += 18;
      } else if (b === 2) {
        scores.Russia += 25;
        scores.Philippines += 25;
        scores.Georgia += 20;
        scores.China += 20;
        scores.Ukraine += 18;
      } else {
        scores.Georgia += 30;
        scores.Philippines += 25;
        scores.Russia += 20;
        scores.China += 25;
      }

      if (l === 0 || l === 3) {
        scores.Philippines += 20;
        scores.Georgia += 15;
        scores.Bangladesh += 15;
        scores.Kyrgyzstan += 15;
        scores.Ukraine += 14;
      } else if (l === 1) {
        scores.Russia += 20;
        scores.Kazakhstan += 20;
        scores.Kyrgyzstan += 15;
        scores.Ukraine += 18;
      } else {
        for (const k of Object.keys(scores)) scores[k] += 5;
      }

      if (cl === 0) {
        scores.Russia += 20;
        scores.Kazakhstan += 20;
        scores.Kyrgyzstan += 15;
        scores.Ukraine += 15;
      } else if (cl === 2) {
        scores.Philippines += 20;
        scores.Bangladesh += 20;
        scores.Uzbekistan += 15;
      } else {
        for (const k of Object.keys(scores)) scores[k] += 8;
      }

      if (n === 0) {
        scores.Kyrgyzstan += 20;
        scores.Bangladesh += 15;
        scores.Uzbekistan += 15;
      } else if (n === 1) {
        scores.Kyrgyzstan += 20;
        scores.Kazakhstan += 15;
        scores.Philippines += 15;
        scores.Ukraine += 12;
      } else if (n === 2) {
        scores.Russia += 20;
        scores.Philippines += 20;
        scores.Georgia += 15;
        scores.China += 15;
      } else {
        scores.Georgia += 25;
        scores.Russia += 20;
        scores.Philippines += 20;
        scores.China += 20;
      }

      if (p === 0) {
        scores.Kyrgyzstan += 15;
        scores.Bangladesh += 15;
        scores.Uzbekistan += 15;
      } else if (p === 1) {
        scores.Georgia += 15;
        scores.Russia += 15;
        scores.Philippines += 15;
      } else if (p === 2) {
        scores.Philippines += 15;
        scores.Georgia += 10;
        scores.Ukraine += 10;
      } else {
        scores.Georgia += 15;
        scores.Kazakhstan += 10;
        scores.Kyrgyzstan += 8;
      }

      if (d === 0) {
        scores.Georgia += 10;
        scores.Philippines += 10;
        scores.Bangladesh += 10;
      } else if (d === 1) {
        scores.Russia += 10;
        scores.Kyrgyzstan += 10;
        scores.Kazakhstan += 10;
        scores.China += 10;
        scores.Ukraine += 10;
        scores.Uzbekistan += 10;
      }

      const reasonMap: Record<string, string> = {
        Kyrgyzstan:
          "Best for budget-conscious students. Modern Medical University Jalalabad is VGLOBAL's #1 pick — NMC-recognized, English medium, 3,000+ Indian students.",
        Russia:
          "Ideal for students comfortable with Russian, preferring cold climate and world-class medical research. Multiple city options at different price points.",
        Georgia:
          "Perfect for students wanting European-standard education in English with a 5-year program and moderate climate.",
        Kazakhstan:
          "Great mid-range option with NMC recognition and moderate climate. Closest to Central Asia Indian community.",
        Philippines:
          "Best for English-medium education with US-pattern curriculum. Warm tropical climate. 5-year program.",
        Bangladesh:
          "Most affordable and nearest option for students with limited NEET scores and tight budgets.",
        Uzbekistan:
          "Affordable option with easy admissions and warm climate. Growing NMC recognition.",
        China:
          "Good option for higher NEET scorers who prefer structured clinical training. Confirm English-medium availability before applying.",
        Ukraine:
          "Historically affordable with European exposure. Check current admissions status with counsellors before applying.",
      };

      const sorted = Object.entries(scores)
        .sort(([, a], [, bv]) => bv - a)
        .slice(0, 3)
        .map(([country, sc]) => ({
          country,
          score: sc,
          reason: reasonMap[country],
        }));
      setResults(sorted);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setResults(null);
  };

  if (results) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="text-center">
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="font-display font-bold text-navy text-xl">
            Quiz Complete, {lead.name}!
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Based on your answers, here are your top 3 country matches:
          </p>
        </div>
        {results.map((r, i) => (
          <div
            key={r.country}
            className={`p-4 rounded-xl border-2 ${i === 0 ? "border-gold bg-gold/5" : "border-border bg-secondary"}`}
          >
            <div className="flex items-center gap-3 mb-2">
              {i === 0 && <span className="text-2xl">🥇</span>}
              {i === 1 && <span className="text-2xl">🥈</span>}
              {i === 2 && <span className="text-2xl">🥉</span>}
              <div className="font-display font-bold text-navy text-lg">
                #{i + 1} {r.country}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{r.reason}</p>
          </div>
        ))}
        <Button
          variant="outline"
          className="w-full border-navy text-navy"
          onClick={resetQuiz}
          data-ocid="quiz.retake.button"
        >
          Retake Quiz
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          Question {step + 1} of {quizQuestions.length}
        </span>
        <Progress
          value={(step / quizQuestions.length) * 100}
          className="flex-1 h-2"
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-4"
        >
          <h3 className="font-display font-bold text-navy text-lg">
            {quizQuestions[step].q}
          </h3>
          <div className="space-y-2">
            {quizQuestions[step].options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                className="w-full text-left px-4 py-3 rounded-lg border border-border hover:border-gold hover:bg-gold/5 transition-all text-sm font-medium group flex items-start gap-3"
                onClick={() => pickAnswer(i)}
                data-ocid={`quiz.option.${i + 1}`}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy/10 text-navy text-xs font-bold text-center leading-6 group-hover:bg-gold group-hover:text-white transition-colors">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ---------------------------------------------------------------------------
// EligibilityChecker
// ---------------------------------------------------------------------------
function EligibilityChecker({ lead }: { lead: LeadData }) {
  const [pcb, setPcb] = useState("");
  const [neet, setNeet] = useState("");
  const [age, setAge] = useState("");
  const [category, setCategory] = useState("General");
  const [attempts, setAttempts] = useState("1");
  const [result, setResult] = useState<{
    eligible: boolean;
    reasons: string[];
    docs: string[];
  } | null>(null);

  const check = () => {
    const pcbNum = Number.parseFloat(pcb);
    const neetNum = Number.parseInt(neet);
    const ageNum = Number.parseInt(age);
    const attemptsNum = Number.parseInt(attempts);
    const minPcb = category === "General" ? 50 : 40;
    const minNeet = category === "General" ? 150 : 120;
    const reasons: string[] = [];
    let eligible = true;

    if (Number.isNaN(pcbNum) || pcbNum < minPcb) {
      eligible = false;
      reasons.push(
        `PCB aggregate must be ≥${minPcb}% for ${category} category (you entered ${pcb}%)`,
      );
    } else {
      reasons.push(
        `✅ PCB aggregate ${pcb}% meets the ≥${minPcb}% requirement`,
      );
    }

    if (Number.isNaN(neetNum) || neetNum < minNeet) {
      eligible = false;
      reasons.push(
        `NEET score must be ≥${minNeet} for ${category} category (you entered ${neet})`,
      );
    } else {
      reasons.push(`✅ NEET score ${neet} meets the ≥${minNeet} requirement`);
    }

    if (Number.isNaN(ageNum) || ageNum < 17) {
      eligible = false;
      reasons.push(`Minimum age for MBBS is 17 years (you entered ${age})`);
    } else {
      reasons.push(
        `✅ Age ${age} meets the minimum age requirement of 17 years`,
      );
      if (ageNum > 25) {
        reasons.push(
          "ℹ️ Note: No upper age limit applies for MBBS abroad. The 25-year limit is only for Indian government college seats.",
        );
      }
    }

    if (attemptsNum > 3) {
      reasons.push(
        `⚠️ Note: ${attempts} NEET attempts noted. Some universities may have their own attempt limits — consult with a VGLOBAL counsellor.`,
      );
    } else {
      reasons.push(
        `✅ ${attempts} NEET attempt(s) — within acceptable range for most universities abroad.`,
      );
    }

    const docs = [
      "10th Mark Sheet & Certificate",
      "12th Mark Sheet & Certificate",
      "NEET Score Card (all attempts)",
      "Passport (valid for 5+ years)",
      "Birth Certificate",
      "Photographs (36 passport size)",
      "Migration Certificate",
      "Domicile / Residence Certificate",
      "Category Certificate (if applicable)",
      "NMC Undertaking / Bond",
    ];

    setResult({ eligible, reasons, docs });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="elig-pcb">12th PCB Aggregate (%)</Label>
          <Input
            id="elig-pcb"
            type="number"
            placeholder="e.g. 65"
            value={pcb}
            onChange={(e) => {
              setPcb(e.target.value);
              setResult(null);
            }}
            data-ocid="eligibility.pcb.input"
          />
        </div>
        <div className="space-y-3">
          <Label htmlFor="elig-neet">NEET Score</Label>
          <Input
            id="elig-neet"
            type="number"
            placeholder="e.g. 350"
            value={neet}
            onChange={(e) => {
              setNeet(e.target.value);
              setResult(null);
            }}
            data-ocid="eligibility.neet.input"
          />
        </div>
        <div className="space-y-3">
          <Label htmlFor="elig-age">Your Age</Label>
          <Input
            id="elig-age"
            type="number"
            placeholder="e.g. 19"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setResult(null);
            }}
            data-ocid="eligibility.age.input"
          />
        </div>
        <div className="space-y-3">
          <Label htmlFor="elig-category">Category</Label>
          <select
            id="elig-category"
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setResult(null);
            }}
            data-ocid="eligibility.category.select"
          >
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
          </select>
        </div>
        <div className="space-y-3">
          <Label htmlFor="elig-attempts">NEET Attempts</Label>
          <select
            id="elig-attempts"
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
            value={attempts}
            onChange={(e) => {
              setAttempts(e.target.value);
              setResult(null);
            }}
            data-ocid="eligibility.attempts.select"
          >
            {["1", "2", "3", "4", "5+"].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>
      <Button
        className="bg-navy hover:bg-navy-dark text-white w-full"
        onClick={check}
        data-ocid="eligibility.check.button"
      >
        Check My Eligibility <CheckCircle className="ml-2 w-4 h-4" />
      </Button>
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div
            className={`p-4 rounded-xl border-2 text-center ${result.eligible ? "border-green-400 bg-green-50" : "border-red-400 bg-red-50"}`}
          >
            {result.eligible ? (
              <>
                <div className="text-4xl mb-2">✅</div>
                <div className="font-display font-bold text-green-800 text-xl">
                  ELIGIBLE for MBBS Abroad
                </div>
                <div className="text-green-700 text-sm mt-1">
                  {lead.name}, you meet the basic eligibility criteria!
                </div>
              </>
            ) : (
              <>
                <div className="text-4xl mb-2">❌</div>
                <div className="font-display font-bold text-red-800 text-xl">
                  NOT Eligible Currently
                </div>
                <div className="text-red-700 text-sm mt-1">
                  Please review the issues below and contact us for guidance.
                </div>
              </>
            )}
          </div>
          <div className="space-y-2">
            {result.reasons.map((r, i) => (
              <div
                key={String(i)}
                className={`text-sm p-3 rounded-lg ${r.startsWith("✅") ? "bg-green-50 text-green-800" : r.startsWith("⚠️") || r.startsWith("ℹ️") ? "bg-yellow-50 text-yellow-800" : "bg-red-50 text-red-800"}`}
              >
                {r}
              </div>
            ))}
          </div>
          <div className="bg-secondary p-4 rounded-lg border border-border">
            <h4 className="font-semibold text-navy mb-3">
              📋 Required Documents Checklist
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {result.docs.map((doc) => (
                <div
                  key={doc}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                  {doc}
                </div>
              ))}
            </div>
          </div>
          <Link to="/counselling">
            <Button
              className="bg-gold hover:bg-gold-dark text-navy font-bold w-full"
              data-ocid="eligibility.counselling.button"
            >
              Book Free Counselling Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// BudgetCalculator
// ---------------------------------------------------------------------------
function BudgetCalculator({ lead: _lead }: { lead: LeadData }) {
  const countries = Object.keys(countryBudgetData);
  const [selectedCountry, setSelectedCountry] = useState("Kyrgyzstan");
  const [tuitionMode, setTuitionMode] = useState<"low" | "mid" | "high">("mid");
  const [hostelMode, setHostelMode] = useState<"low" | "mid" | "high">("mid");
  const [showBreakdown, setShowBreakdown] = useState(false);

  const data = countryBudgetData[selectedCountry];

  const getModeValue = (
    range: [number, number],
    mode: "low" | "mid" | "high",
  ) => {
    if (mode === "low") return range[0];
    if (mode === "high") return range[1];
    return Math.round((range[0] + range[1]) / 2);
  };

  const tuitionPerYear = getModeValue(data.tuitionRange, tuitionMode);
  const hostelPerMonth = getModeValue(data.hostelRange, hostelMode);
  const hostelPerYear = hostelPerMonth * 12;
  const foodPerYear = Math.round((data.foodRange[0] + data.foodRange[1]) / 2);
  const travelPerYear = Math.round(
    (data.travelRange[0] + data.travelRange[1]) / 2,
  );
  const miscPerYear = 300;

  const totalPerYear =
    tuitionPerYear + hostelPerYear + foodPerYear + travelPerYear + miscPerYear;
  const totalCourse = totalPerYear * data.duration;
  const totalInINR = Math.round(totalPerYear * 83);

  const breakdown = [
    {
      label: "Tuition Fee",
      usd: tuitionPerYear,
      pct: Math.round((tuitionPerYear / totalPerYear) * 100),
    },
    {
      label: "Hostel / Accommodation",
      usd: hostelPerYear,
      pct: Math.round((hostelPerYear / totalPerYear) * 100),
    },
    {
      label: "Food & Meals",
      usd: foodPerYear,
      pct: Math.round((foodPerYear / totalPerYear) * 100),
    },
    {
      label: "Travel (India ↔ Country)",
      usd: travelPerYear,
      pct: Math.round((travelPerYear / totalPerYear) * 100),
    },
    {
      label: "Miscellaneous (Books, SIM, etc.)",
      usd: miscPerYear,
      pct: Math.round((miscPerYear / totalPerYear) * 100),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label>Select Country</Label>
          <select
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setShowBreakdown(false);
            }}
            data-ocid="budget.country.select"
          >
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="space-y-3">
          <Label>Tuition Budget Level</Label>
          <div className="flex gap-2">
            {(["low", "mid", "high"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setTuitionMode(m)}
                className={`flex-1 py-2 rounded-md text-sm font-medium border transition-all ${tuitionMode === m ? "bg-navy text-white border-navy" : "border-border hover:border-navy"}`}
              >
                {m === "low" ? "Budget" : m === "mid" ? "Average" : "Premium"}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Range: ${data.tuitionRange[0].toLocaleString()}–$
            {data.tuitionRange[1].toLocaleString()}/yr
          </p>
        </div>
        <div className="space-y-3">
          <Label>Hostel / Accommodation</Label>
          <div className="flex gap-2">
            {(["low", "mid", "high"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setHostelMode(m)}
                className={`flex-1 py-2 rounded-md text-sm font-medium border transition-all ${hostelMode === m ? "bg-navy text-white border-navy" : "border-border hover:border-navy"}`}
              >
                {m === "low" ? "Shared" : m === "mid" ? "Standard" : "Private"}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Range: ${data.hostelRange[0]}–${data.hostelRange[1]}/mo
          </p>
        </div>
      </div>
      <Button
        className="bg-navy hover:bg-navy-dark text-white w-full"
        onClick={() => setShowBreakdown(true)}
        data-ocid="budget.calculate.button"
      >
        Calculate My Budget <Calculator className="ml-2 w-4 h-4" />
      </Button>
      {showBreakdown && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 text-center">
              <div className="text-xs text-muted-foreground mb-1">
                Per Year (USD)
              </div>
              <div className="font-display font-bold text-navy text-xl">
                ${totalPerYear.toLocaleString()}
              </div>
            </div>
            <div className="bg-navy/5 border border-navy/20 rounded-xl p-4 text-center">
              <div className="text-xs text-muted-foreground mb-1">
                Per Year (INR approx.)
              </div>
              <div className="font-display font-bold text-navy text-xl">
                ₹{(totalInINR / 100000).toFixed(1)}L
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <div className="text-xs text-muted-foreground mb-1">
                {data.duration}-Year Total (USD)
              </div>
              <div className="font-display font-bold text-green-800 text-xl">
                ${totalCourse.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-2">Expense</th>
                  <th className="text-right px-4 py-2">Annual (USD)</th>
                  <th className="text-right px-4 py-2">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {breakdown.map((item, i) => (
                  <tr
                    key={item.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-secondary"}
                  >
                    <td className="px-4 py-2.5">{item.label}</td>
                    <td className="px-4 py-2.5 text-right font-medium">
                      ${item.usd.toLocaleString()}
                    </td>
                    <td className="px-4 py-2.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div
                          className="h-2 bg-gold/30 rounded-full"
                          style={{
                            width: `${Math.min(item.pct, 70)}%`,
                            maxWidth: "56px",
                            minWidth: "6px",
                          }}
                        />
                        <span className="shrink-0">{item.pct}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr className="bg-navy text-white font-bold">
                  <td className="px-4 py-2.5">Total Per Year</td>
                  <td className="px-4 py-2.5 text-right">
                    ${totalPerYear.toLocaleString()}
                  </td>
                  <td className="px-4 py-2.5 text-right">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
          {data.notes && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-2 text-sm">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span className="text-amber-900">{data.notes}</span>
            </div>
          )}
          <div className="bg-navy text-white rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 justify-between">
            <div>
              <p className="font-semibold">Want an exact fee quote?</p>
              <p className="text-white/80 text-sm mt-0.5">
                VGLOBAL counsellors can give you the current fee structure from
                the university directly.
              </p>
            </div>
            <Link to="/counselling">
              <Button
                className="bg-gold hover:bg-gold-dark text-navy font-bold shrink-0"
                data-ocid="budget.counselling.button"
              >
                Get Exact Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// LeadForm
// ---------------------------------------------------------------------------
function LeadForm({
  toolTitle,
  onSubmit,
}: { toolTitle: string; onSubmit: (data: LeadData) => void }) {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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
          country: "AI Tools",
          message: `Lead from AI Tool: ${toolTitle}`,
          timestamp: BigInt(Date.now()),
        });
      }
      toast.success("Details saved! Your results are ready.");
      onSubmit({ name, phone, email });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6 bg-gold/5 border border-gold/20 rounded-xl p-5">
        <div className="text-4xl mb-3">🔓</div>
        <h3 className="font-display font-bold text-navy text-xl">
          Enter Your Details to Access Results
        </h3>
        <p className="text-muted-foreground text-sm mt-2">
          Our counsellor will also follow up with personalised advice. No spam,
          promise!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="lead-name">Full Name *</Label>
          <Input
            id="lead-name"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            data-ocid="lead.name.input"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-phone">Phone Number *</Label>
          <Input
            id="lead-phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            data-ocid="lead.phone.input"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-email">Email Address *</Label>
          <Input
            id="lead-email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-ocid="lead.email.input"
          />
        </div>
        <Button
          type="submit"
          className="bg-gold hover:bg-gold-dark text-navy font-bold w-full"
          disabled={loading}
          data-ocid="lead.submit.button"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Unlock My Results <ChevronRight className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ToolSection wrapper — renders LeadForm if not unlocked, else the tool
// ---------------------------------------------------------------------------
function ToolSection({
  id,
  tool,
  lead,
  onLeadSubmit,
  bg,
  children,
}: {
  id: ToolId;
  tool: (typeof tools)[number];
  lead: LeadData | null;
  onLeadSubmit: (data: LeadData) => void;
  bg: string;
  children: React.ReactNode;
}) {
  const Icon = tool.icon;
  return (
    <section id={id} className={`py-16 ${bg} scroll-mt-24`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-start gap-4 mb-8">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${tool.color} text-white shrink-0`}
            >
              <Icon className="w-7 h-7" />
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl font-display font-bold text-navy">
                {tool.title}
              </h2>
              <p className="text-muted-foreground text-sm mt-1">{tool.desc}</p>
            </div>
          </div>
          {/* Card body */}
          <Card className="border-border shadow-md overflow-hidden">
            <div className={`h-1.5 bg-gradient-to-r ${tool.color}`} />
            <CardContent className="p-6 md:p-8 min-h-[400px]">
              {lead ? (
                children
              ) : (
                <LeadForm toolTitle={tool.title} onSubmit={onLeadSubmit} />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// JumpNav
// ---------------------------------------------------------------------------
function JumpNav({ activeSection }: { activeSection: ToolId | null }) {
  const navItems: { id: ToolId; label: string; icon: React.ElementType }[] = [
    { id: "predictor", label: "NEET Predictor", icon: Target },
    { id: "matcher", label: "Uni Matcher", icon: BrainCircuit },
    { id: "quiz", label: "Country Quiz", icon: ClipboardList },
    { id: "eligibility", label: "Eligibility", icon: Bot },
    { id: "budget", label: "Budget Calc", icon: Calculator },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="sticky top-16 z-30 bg-white border-b border-border shadow-sm"
      data-ocid="aitools.jump_nav.panel"
    >
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex flex-nowrap gap-1 py-2 min-w-max md:min-w-0 md:justify-center">
            {navItems.map((item) => {
              const ItemIcon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-navy text-white"
                      : "text-foreground hover:bg-secondary hover:text-navy"
                  }`}
                  data-ocid={`aitools.jump.${item.id}.button`}
                >
                  <ItemIcon className="w-4 h-4 shrink-0" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main AiTools page
// ---------------------------------------------------------------------------
export default function AiTools() {
  const [lead, setLead] = useState<LeadData | null>(null);
  const [activeSection, setActiveSection] = useState<ToolId | null>(null);

  // IntersectionObserver to track active section
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as ToolId);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
    );

    const toolIds: ToolId[] = [
      "predictor",
      "matcher",
      "quiz",
      "eligibility",
      "budget",
    ];
    for (const id of toolIds) {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current.set(id, el);
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  const handleLeadSubmit = (data: LeadData) => {
    setLead(data);
  };

  return (
    <main className="pt-16 md:pt-20">
      <SEOHead
        title="AI MBBS Admission Tools | NEET Predictor | University Matcher | VGLOBAL"
        description="Use VGLOBAL's free AI-powered tools to predict MBBS admission chances, match universities, take the country fit quiz, check eligibility, and calculate budget. Designed for Indian NEET students."
        keywords="AI admission predictor, NEET score predictor MBBS, MBBS university matcher, MBBS eligibility checker, MBBS budget calculator, NEET MBBS abroad tools, best country for MBBS India"
        canonicalPath="/ai-tools"
      />

      {/* Hero */}
      <section className="relative py-24 text-white overflow-hidden min-h-[420px] flex items-center">
        <img
          src="/assets/generated/ai-tools-hero.dim_1200x600.jpg"
          alt="AI MBBS Admission Tools"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40 z-[1]" />
        <div className="relative container mx-auto px-4 z-[2]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
              Free AI-Powered Tools
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 max-w-2xl drop-shadow-lg">
              Find Your Perfect MBBS University
            </h1>
            <p className="text-white/80 text-lg max-w-2xl drop-shadow-md">
              Use our free AI tools to predict your chances, match universities,
              check eligibility, and calculate your budget — all based on your
              NEET score and goals.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {tools.map((t) => {
                const TIcon = t.icon;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      const el = document.getElementById(t.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/20"
                  >
                    <TIcon className="w-3.5 h-3.5" />
                    {t.title.replace("AI ", "")}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jump Navigation */}
      <JumpNav activeSection={activeSection} />

      {/* Tool 1: NEET Score Predictor */}
      <ToolSection
        id="predictor"
        tool={tools[0]}
        lead={lead}
        onLeadSubmit={handleLeadSubmit}
        bg="bg-white"
      >
        <NeetPredictor lead={lead!} />
      </ToolSection>

      {/* Tool 2: AI University Matcher */}
      <ToolSection
        id="matcher"
        tool={tools[1]}
        lead={lead}
        onLeadSubmit={handleLeadSubmit}
        bg="bg-gray-50"
      >
        <UniversityMatcher lead={lead!} />
      </ToolSection>

      {/* Tool 3: Country Fit Quiz */}
      <ToolSection
        id="quiz"
        tool={tools[2]}
        lead={lead}
        onLeadSubmit={handleLeadSubmit}
        bg="bg-white"
      >
        <CountryQuiz lead={lead!} />
      </ToolSection>

      {/* Tool 4: MBBS Eligibility Checker */}
      <ToolSection
        id="eligibility"
        tool={tools[3]}
        lead={lead}
        onLeadSubmit={handleLeadSubmit}
        bg="bg-gray-50"
      >
        <EligibilityChecker lead={lead!} />
      </ToolSection>

      {/* Tool 5: Budget Calculator */}
      <ToolSection
        id="budget"
        tool={tools[4]}
        lead={lead}
        onLeadSubmit={handleLeadSubmit}
        bg="bg-white"
      >
        <BudgetCalculator lead={lead!} />
      </ToolSection>

      {/* Admission Nuances Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-navy/10 rounded-xl">
                <FileText className="w-6 h-6 text-navy" />
              </div>
              <h2 className="text-2xl font-display font-bold text-navy">
                Important Admission Nuances for 2026
              </h2>
            </div>

            {/* Intake Deadlines */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-gold/10 rounded-xl">
                  <CalendarDays className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-navy">
                  Intake Deadlines 2026
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                      <span className="text-gold font-bold text-sm">SEP</span>
                    </div>
                    <div>
                      <div className="font-display font-bold text-navy text-lg">
                        September Intake
                      </div>
                      <div className="text-gold font-semibold text-sm">
                        Deadline: 30th September
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Main intake for Kyrgyzstan, Russia, Kazakhstan, Uzbekistan,
                    and most CIS countries. Applications open from May. Seats
                    fill quickly — apply early.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-bold text-sm">
                        FEB
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-bold text-navy text-lg">
                        February Intake
                      </div>
                      <div className="text-blue-600 font-semibold text-sm">
                        Deadline: 28th February
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Available for Philippines, Georgia, Bangladesh, and select
                    Russian universities. Ideal for students who missed the
                    September deadline.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Admission vs Entrance Exam */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-green-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-navy">
                  Direct Admission vs Entrance Exam
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Direct Admission
                    Countries
                  </h4>
                  <div className="space-y-1.5">
                    {[
                      "Kyrgyzstan — Direct admission, no entrance exam",
                      "Bangladesh — Direct MBBS admission (NEET qualifying)",
                      "Uzbekistan — Direct admission process",
                      "Kazakhstan — Entrance test is minimal/internal",
                    ].map((step) => (
                      <div
                        key={step}
                        className="flex items-center gap-2 text-sm text-green-900"
                      >
                        <span className="w-5 h-5 bg-green-600 text-white rounded-full text-xs flex items-center justify-center font-bold shrink-0">
                          ✓
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4" /> Entrance/Requirements
                  </h4>
                  <div className="space-y-1.5">
                    {[
                      "Russia — Internal test at some top universities",
                      "Georgia — Some universities need interview",
                      "Philippines — NMAT (medical admission test)",
                      "China — MCC approved college + HSK language test",
                    ].map((step) => (
                      <div
                        key={step}
                        className="flex items-center gap-2 text-sm text-blue-900"
                      >
                        <span className="w-5 h-5 bg-blue-600 text-white rounded-full text-xs flex items-center justify-center font-bold shrink-0">
                          i
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bond / Undertaking */}
            <div className="mb-10">
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-navy text-lg mb-2">
                      Bond / Undertaking Requirements (NMC Mandate)
                    </h3>
                    <p className="text-sm text-foreground mb-3">
                      As per NMC regulations (Screening Test Regulations 2021),
                      students going abroad for MBBS must submit an{" "}
                      <strong>undertaking/bond</strong> confirming they will
                      appear for the FMGE/NExT exam upon return to India before
                      practicing medicine.
                    </p>
                    <ul className="space-y-1.5 text-sm text-foreground">
                      {[
                        "This bond is mandatory and non-negotiable under NMC rules",
                        "Must be signed before departure, usually at the university's India liaison office",
                        "VGLOBAL assists all students in completing this bond formality",
                        "Failure to appear for FMGE/NExT can result in inability to practice in India",
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0 self-start mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* NEET State Cutoffs Table */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-gold/10 rounded-xl">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-navy">
                  NEET Cutoff Ranges for Government Medical Colleges by State
                </h3>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 flex gap-2 text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-amber-900">
                  <strong>Important:</strong> These are{" "}
                  <strong>approximate closing score ranges</strong> based on
                  publicly available MCC/NEET UG counselling data for 2023,
                  2024, and 2025. Actual cutoffs vary by college, counselling
                  round, seat matrix, and year. Always verify with official MCC
                  data at{" "}
                  <a
                    href="https://mcc.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold"
                  >
                    mcc.nic.in
                  </a>{" "}
                  before making any decisions.
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-2 md:hidden">
                ← Scroll to see all states and years
              </p>
              <div className="rounded-2xl border border-border shadow-sm mb-6 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs md:text-sm border-separate border-spacing-0">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="text-left px-3 py-3 font-semibold sticky left-0 bg-navy z-[20] min-w-[130px]">
                          State
                        </th>
                        <th
                          className="text-center px-3 py-3 font-semibold"
                          colSpan={4}
                        >
                          2023 (Approx. Range)
                        </th>
                        <th
                          className="text-center px-3 py-3 font-semibold"
                          colSpan={4}
                        >
                          2024 (Approx. Range)
                        </th>
                        <th
                          className="text-center px-3 py-3 font-semibold"
                          colSpan={4}
                        >
                          2025 (Approx. Range)
                        </th>
                      </tr>
                      <tr className="bg-[#1b2f5e] text-gold/90 text-xs">
                        <th className="sticky left-0 bg-[#1b2f5e] px-3 py-2 z-[20]" />
                        <th className="px-3 py-2">Gen</th>
                        <th className="px-3 py-2">OBC</th>
                        <th className="px-3 py-2">SC</th>
                        <th className="px-3 py-2">ST</th>
                        <th className="px-3 py-2">Gen</th>
                        <th className="px-3 py-2">OBC</th>
                        <th className="px-3 py-2">SC</th>
                        <th className="px-3 py-2">ST</th>
                        <th className="px-3 py-2">Gen</th>
                        <th className="px-3 py-2">OBC</th>
                        <th className="px-3 py-2">SC</th>
                        <th className="px-3 py-2">ST</th>
                      </tr>
                    </thead>
                    <tbody>
                      {neetStateCutoffs.map((row, i) => (
                        <tr
                          key={row.state}
                          className={i % 2 === 0 ? "bg-white" : "bg-secondary"}
                        >
                          <td
                            className={`px-3 py-2.5 font-semibold text-navy sticky left-0 z-[10] ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                          >
                            {row.state}
                          </td>
                          <td className="px-3 py-2.5 text-center">{row.g23}</td>
                          <td className="px-3 py-2.5 text-center">{row.o23}</td>
                          <td className="px-3 py-2.5 text-center">
                            {row.sc23}
                          </td>
                          <td className="px-3 py-2.5 text-center">
                            {row.st23}
                          </td>
                          <td className="px-3 py-2.5 text-center">{row.g24}</td>
                          <td className="px-3 py-2.5 text-center">{row.o24}</td>
                          <td className="px-3 py-2.5 text-center">
                            {row.sc24}
                          </td>
                          <td className="px-3 py-2.5 text-center">
                            {row.st24}
                          </td>
                          <td className="px-3 py-2.5 text-center font-medium">
                            {row.g25}
                          </td>
                          <td className="px-3 py-2.5 text-center font-medium">
                            {row.o25}
                          </td>
                          <td className="px-3 py-2.5 text-center font-medium">
                            {row.sc25}
                          </td>
                          <td className="px-3 py-2.5 text-center font-medium">
                            {row.st25}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-navy text-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1">
                    🎯 If your NEET score is below the cutoff for government
                    colleges in your state…
                  </p>
                  <p className="text-white/80 text-sm">
                    Studying MBBS abroad is a smart, NMC-recognized alternative.
                    With VGLOBAL's guidance, you can secure admission at a
                    quality university without a donation seat.
                  </p>
                </div>
                <Link to="/counselling">
                  <Button
                    className="bg-gold hover:bg-gold-dark text-navy font-bold shrink-0"
                    data-ocid="aitools.neet-table.counselling_button"
                  >
                    Get Personalised Guidance{" "}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counselling CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold mb-4">
            Want Expert Guidance?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Our AI tools give you a head start, but our counsellors give you the
            complete picture. Book a free call today.
          </p>
          <Link to="/counselling">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-10"
              data-ocid="aitools.cta.button"
            >
              Book Free Counselling <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
