import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Russia",
  flag: "🇷🇺",
  tagline:
    "World-Class Medical Education at One of the World's Oldest Medical Universities",
  description:
    "Russia has been a top MBBS destination for Indian students for over 50 years. With some of the world's oldest and most prestigious medical universities, Russia offers world-class education at affordable fees. Russian medical degrees are recognized by NMC, WHO, and medical councils globally.",
  gradient: "from-blue-900 via-red-900 to-navy",
  stats: [
    { label: "Annual Fees", value: "$4,000-6,000" },
    { label: "Partner Universities", value: "10+" },
    { label: "Indian Students", value: "15,000+" },
    { label: "Years of History", value: "300+" },
  ],
  universities: [
    {
      name: "Kazan Federal University",
      established: "1804",
      students: "50,000+",
      fee: "$5,000/yr",
      recognition: ["NMC", "WHO", "ECFMG"],
    },
    {
      name: "Kursk State Medical University",
      established: "1935",
      students: "7,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "GMC"],
    },
    {
      name: "Volgograd State Medical University",
      established: "1935",
      students: "6,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Crimea State Medical University",
      established: "1931",
      students: "5,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "One of the world's oldest medical education traditions",
    "Globally recognized degrees (100+ countries)",
    "Research-intensive universities",
    "English-medium programs available",
    "Rich cultural experience",
    "Strong Indian student community",
  ],
  feeRange: "$4,000 - $6,000/yr",
  duration: "6 Years",
  language: "English/Russian",
  climate: "Continental",
  visa: "Russian Student Visa requires an invitation letter from the university, valid passport, medical certificate, and HIV test. Processing takes 3-4 weeks. VGLOBAL assists with all documentation.",
  whyChoose: [
    "Prestigious universities with global recognition",
    "NMC-recognized MBBS programs",
    "English-medium instruction available",
    "Affordable fees compared to India",
    "Rich cultural history and safe environment",
    "Large Indian community across Russian cities",
  ],
};

export default function Russia() {
  return <CountryPage data={data} />;
}
