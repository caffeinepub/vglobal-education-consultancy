import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";
import SEOHead from "../components/SEOHead";

const data: CountryData = {
  name: "Georgia",
  flag: "🇬🇪",
  tagline: "European Standard Medical Education at Asian Prices",
  description:
    "Georgia sits at the crossroads of Europe and Asia, and its medical universities reflect that unique position. You get genuinely European-standard education — English medium, modern facilities, internationally recognized degrees — but at fees that are a fraction of what European countries charge. Georgian universities are recognized by NMC, WHO, ECFMG, and GMC (UK), which makes them especially attractive for students who might want to practice abroad later.",
  gradient: "from-red-700 via-white/10 to-navy",
  heroImage: "/assets/generated/georgia-hero.dim_1200x600.jpg",
  stats: [
    { label: "Annual Fees", value: "$5,000-7,000" },
    { label: "Partner Universities", value: "5+" },
    { label: "Indian Students", value: "3,000+" },
    { label: "Duration", value: "6 Years" },
  ],
  universities: [
    {
      name: "Tbilisi State Medical University",
      established: "1918",
      students: "8,000+",
      fee: "$6,000/yr",
      recognition: ["NMC", "WHO", "ECFMG", "GMC"],
      logo: "/assets/generated/logo-tsmu.dim_200x200.png",
    },
    {
      name: "David Tvildiani Medical University",
      established: "1992",
      students: "2,500+",
      fee: "$5,500/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
      logo: "/assets/generated/logo-dtmu.dim_200x200.png",
    },
    {
      name: "New Vision University",
      established: "2013",
      students: "3,000+",
      fee: "$7,000/yr",
      recognition: ["NMC", "WHO", "ECFMG"],
      logo: "/assets/generated/logo-geomedi.dim_200x200.png",
    },
    {
      name: "University of Georgia Medical School",
      established: "2004",
      students: "4,000+",
      fee: "$6,500/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "European standard medical infrastructure",
    "100% English-medium instruction",
    "Recognized by GMC UK and ECFMG USA",
    "Safe country with a genuinely low crime rate",
    "Direct flights available from India",
    "Growing, welcoming Indian student community",
  ],
  feeRange: "$5,000 - $7,000/yr",
  duration: "6 Years",
  language: "English",
  climate: "Temperate",
  visa: "Georgia's student visa process is refreshingly simple. You need an admission letter, a valid passport, and a bank statement. Tourist visa on arrival is available for short visits. Student visa processing takes about 2–3 weeks, and VGLOBAL guides you through every step.",
  whyChoose: [
    "Genuinely European-quality education",
    "GMC (UK) and ECFMG (USA) recognized — opens global doors",
    "100% English-medium instruction",
    "Affordable cost of living by European standards",
    "Beautiful country, welcoming culture",
    "NMC-recognized — you can practice in India after returning",
  ],
};

export default function Georgia() {
  return (
    <>
      <SEOHead
        title="MBBS in Georgia 2026 | European Standard Medical Education | VGLOBAL"
        description="Study MBBS in Georgia at Tbilisi State Medical University, New Vision University. European standard, GMC UK recognized. Fees $5,000-7,000/yr. Free counselling from VGLOBAL Jaipur."
        keywords="MBBS in Georgia, Tbilisi State Medical University, MBBS Georgia fees India, GMC recognized Georgia, European MBBS"
        canonicalPath="/georgia"
      />
      <CountryPage data={data} />
    </>
  );
}
