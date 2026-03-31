import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "China",
  flag: "🇨🇳",
  tagline:
    "World's Largest Medical Education System with Cutting-Edge Facilities",
  description:
    "China has one of the world's largest and most advanced medical education systems. With over 45 NMC-listed medical universities, China offers excellent MBBS programs in English, state-of-the-art facilities, and exposure to a vast patient population for unmatched clinical training.",
  gradient: "from-red-700 via-yellow-600/20 to-navy",
  stats: [
    { label: "Annual Fees", value: "$3,500-6,000" },
    { label: "NMC Universities", value: "45+" },
    { label: "Indian Students", value: "21,000+" },
    { label: "Duration", value: "5+1 Years" },
  ],
  universities: [
    {
      name: "China Medical University",
      established: "1931",
      students: "20,000+",
      fee: "$5,500/yr",
      recognition: ["NMC", "WHO", "ECFMG", "WFME"],
    },
    {
      name: "Jilin University Medical School",
      established: "1939",
      students: "30,000+",
      fee: "$5,000/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
    },
    {
      name: "Shandong University School of Medicine",
      established: "1901",
      students: "25,000+",
      fee: "$5,000/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Nanjing Medical University",
      established: "1934",
      students: "12,000+",
      fee: "$5,500/yr",
      recognition: ["NMC", "WHO", "WFME"],
    },
  ],
  highlights: [
    "45+ NMC-approved universities",
    "World-class medical facilities",
    "Massive clinical exposure (large patient volume)",
    "English-medium MBBS programs",
    "Government scholarships available",
    "Modern campus infrastructure",
  ],
  feeRange: "$3,500 - $6,000/yr",
  duration: "5+1 Years",
  language: "English/Chinese",
  climate: "Varies by region",
  visa: "Chinese Student Visa (X Visa) requires admission letter, passport, JW202 form, physical examination, and financial documents. Processing takes 2-3 weeks. VGLOBAL handles complete visa documentation.",
  whyChoose: [
    "Largest medical education system in the world",
    "45+ NMC-approved universities",
    "State-of-the-art facilities and technology",
    "Massive clinical exposure",
    "English-medium programs",
    "Government scholarships for Indian students",
  ],
};

export default function China() {
  return <CountryPage data={data} />;
}
