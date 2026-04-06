import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Ukraine",
  flag: "🇺🇦",
  tagline: "European Medical Education with a Long Legacy for Indian Students",
  description:
    "Ukraine has been one of the most sought-after MBBS destinations for Indian students for decades. Ukrainian medical universities are globally recognized and offer high-quality English-medium programs. Please note that due to the ongoing conflict, VGLOBAL advises students to consider current geopolitical conditions. We provide updated guidance on university transfers and alternative options.",
  gradient: "from-blue-700 via-yellow-600 to-navy",
  heroImage: "/assets/generated/ukraine-hero.dim_1200x600.jpg",
  stats: [
    { label: "Annual Fees", value: "$3,000-4,500" },
    { label: "Partner Universities", value: "6+" },
    { label: "Indian Students", value: "18,000+" },
    { label: "Duration", value: "6 Years" },
  ],
  universities: [
    {
      name: "Kharkiv National Medical University",
      established: "1805",
      students: "7,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO", "ECFMG"],
      logo: "/assets/generated/logo-knmu.dim_200x200.png",
    },
    {
      name: "Bogomolets National Medical University",
      established: "1841",
      students: "10,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
      logo: "/assets/generated/logo-bogomolets.dim_200x200.png",
    },
    {
      name: "Ivano-Frankivsk National Medical University",
      established: "1945",
      students: "5,000+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Vinnitsa National Medical University",
      established: "1921",
      students: "6,000+",
      fee: "$3,000/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "Long tradition of quality medical education",
    "NMC-recognized universities",
    "English-medium instruction",
    "European-standard infrastructure",
    "18,000+ Indian students alumni",
    "VGLOBAL helps with university transfers",
  ],
  feeRange: "$3,000 - $4,500/yr",
  duration: "6 Years",
  language: "English/Ukrainian",
  climate: "Temperate",
  visa: "Ukraine student visa requires university admission letter, valid passport, and financial documents. VGLOBAL provides the latest guidance on current admissions and university transfer options for students affected by conflict.",
  whyChoose: [
    "Decades of proven medical education",
    "NMC-recognized degrees valid in India",
    "English-medium instruction",
    "Affordable fees",
    "European-standard teaching hospitals",
    "VGLOBAL assists with current options",
  ],
};

export default function Ukraine() {
  return <CountryPage data={data} />;
}
