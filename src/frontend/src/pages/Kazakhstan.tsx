import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Kazakhstan",
  flag: "🇰🇿",
  tagline: "Central Asia's Most Modern Medical Education Hub",
  description:
    "Kazakhstan is rapidly emerging as a top MBBS destination for Indian students. With modern infrastructure, affordable fees, and NMC-recognized universities, Kazakhstan offers a high-quality medical education in a stable, safe environment. The country has invested heavily in its education sector.",
  gradient: "from-blue-800 via-yellow-800 to-navy",
  heroImage: "/assets/generated/kazakhstan-hero.dim_1200x600.jpg",
  stats: [
    { label: "Annual Fees", value: "$3,500-5,500" },
    { label: "Partner Universities", value: "6+" },
    { label: "Indian Students", value: "4,000+" },
    { label: "Duration", value: "5 Years" },
  ],
  universities: [
    {
      name: "Semey Medical University",
      established: "1952",
      students: "4,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
      logo: "/assets/generated/logo-semey-medical.dim_200x200.png",
    },
    {
      name: "Kazakh National Medical University",
      established: "1930",
      students: "6,000+",
      fee: "$5,000/yr",
      recognition: ["NMC", "WHO", "ECFMG"],
      logo: "/assets/generated/logo-kaznmu.dim_200x200.png",
    },
    {
      name: "South Kazakhstan Medical Academy",
      established: "1979",
      students: "3,500+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "West Kazakhstan Marat Ospanov Medical University",
      established: "1957",
      students: "3,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
    },
  ],
  highlights: [
    "Modern university facilities",
    "NMC-recognized medical degrees",
    "English-medium programs available",
    "Affordable living costs",
    "Safe, stable country",
    "Growing Indian student community",
  ],
  feeRange: "$3,500 - $5,500/yr",
  duration: "5 Years",
  language: "English/Russian",
  climate: "Continental",
  visa: "Kazakhstan student visa requires admission letter, valid passport, medical certificate. Processing time is approximately 2-3 weeks. VGLOBAL guides students through the entire visa process.",
  whyChoose: [
    "Affordable fees with modern facilities",
    "NMC-recognized universities",
    "English-medium instruction available",
    "Safe and stable environment",
    "Growing tech-forward city campuses",
    "Strong academic research culture",
  ],
};

export default function Kazakhstan() {
  return <CountryPage data={data} />;
}
