import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Georgia",
  flag: "🇬🇪",
  tagline: "European Standard Medical Education at Asian Prices",
  description:
    "Georgia, nestled between Europe and Asia, has become a popular MBBS destination for Indian students. Georgian medical universities offer European-standard education with English-medium programs, and the degrees are recognized by NMC, WHO, ECFMG, and GMC (UK).",
  gradient: "from-red-700 via-white/10 to-navy",
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
    },
    {
      name: "David Tvildiani Medical University",
      established: "1992",
      students: "2,500+",
      fee: "$5,500/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
    },
    {
      name: "New Vision University",
      established: "2013",
      students: "3,000+",
      fee: "$7,000/yr",
      recognition: ["NMC", "WHO", "ECFMG"],
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
    "Safe, beautiful country with low crime rate",
    "Direct flights from India",
    "Growing Indian student community",
  ],
  feeRange: "$5,000 - $7,000/yr",
  duration: "6 Years",
  language: "English",
  climate: "Temperate",
  visa: "Georgia offers a simple student visa process. Indian students require an admission letter, valid passport, and bank statement. Tourist visa on arrival available for short visits. Student visa processing takes 2-3 weeks.",
  whyChoose: [
    "European-quality education",
    "GMC (UK) and ECFMG (USA) recognized",
    "English-medium instruction",
    "Affordable European lifestyle",
    "Beautiful country with welcoming culture",
    "NMC-recognized universities",
  ],
};

export default function Georgia() {
  return <CountryPage data={data} />;
}
