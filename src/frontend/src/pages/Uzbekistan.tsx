import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Uzbekistan",
  flag: "🇺🇿",
  tagline: "Silk Road Heritage Meets Modern Medical Education",
  description:
    "Uzbekistan is an emerging MBBS destination with NMC-recognized universities, affordable fees, and a rapidly growing medical education sector. Located on the historic Silk Road, Uzbekistan offers Indian students a unique cultural experience combined with quality medical training.",
  gradient: "from-green-700 via-blue-700 to-navy",
  heroImage: "/assets/generated/uzbekistan-hero.dim_1200x600.jpg",
  stats: [
    { label: "Annual Fees", value: "$3,000-4,500" },
    { label: "Partner Universities", value: "4+" },
    { label: "Indian Students", value: "1,500+" },
    { label: "Duration", value: "6 Years" },
  ],
  universities: [
    {
      name: "Tashkent Medical Academy",
      established: "1935",
      students: "6,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO"],
      logo: "/assets/generated/logo-tashkent-medical.dim_200x200.png",
    },
    {
      name: "Samarkand State Medical University",
      established: "1930",
      students: "4,500+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO"],
      logo: "/assets/generated/logo-samarkand.dim_200x200.png",
    },
    {
      name: "Bukhara State Medical Institute",
      established: "1990",
      students: "3,000+",
      fee: "$3,000/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Andijan State Medical Institute",
      established: "1955",
      students: "5,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
    },
  ],
  highlights: [
    "Rapidly growing MBBS destination",
    "NMC-recognized universities",
    "Affordable fees and low cost of living",
    "English-medium programs available",
    "Rich Silk Road cultural heritage",
    "Welcoming environment for Indian students",
  ],
  feeRange: "$3,000 - $4,500/yr",
  duration: "6 Years",
  language: "English/Uzbek",
  climate: "Continental/Semi-arid",
  visa: "Uzbekistan student visa requires university admission letter, valid passport, and medical certificate. Processing time is 2-3 weeks. VGLOBAL provides complete documentation support.",
  whyChoose: [
    "Affordable fees with quality education",
    "NMC-recognized medical degrees",
    "Growing infrastructure and facilities",
    "English-medium instruction available",
    "Safe, culturally rich environment",
    "Increasing Indian student community",
  ],
};

export default function Uzbekistan() {
  return <CountryPage data={data} />;
}
