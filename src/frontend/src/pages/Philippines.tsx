import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Philippines",
  flag: "🇵🇭",
  tagline: "US-Curriculum MBBS in a 100% English-Speaking Country",
  description:
    "The Philippines is the only Asian country with a full English-medium medical education system following the US curriculum. Filipino medical degrees are globally recognized and the country offers a familiar, tropical climate for Indian students. The Philippines is among the top choices for students targeting the USMLE.",
  gradient: "from-blue-700 via-red-700 to-navy",
  heroImage: "/assets/generated/philippines-hero.dim_1200x600.jpg",
  stats: [
    { label: "Annual Fees", value: "$4,000-6,000" },
    { label: "Partner Universities", value: "8+" },
    { label: "Indian Students", value: "2,500+" },
    { label: "Duration", value: "5.5 Years" },
  ],
  universities: [
    {
      name: "University of Santo Tomas Faculty of Medicine",
      established: "1611",
      students: "12,000+",
      fee: "$5,500/yr",
      recognition: ["NMC", "WHO", "ECFMG", "FAIMER"],
      logo: "/assets/generated/logo-ust-philippines.dim_200x200.png",
    },
    {
      name: "University of the Philippines Manila",
      established: "1908",
      students: "8,000+",
      fee: "$5,000/yr",
      recognition: ["NMC", "WHO", "ECFMG"],
    },
    {
      name: "Davao Medical School Foundation",
      established: "1976",
      students: "3,500+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
      logo: "/assets/generated/logo-davao-medical.dim_200x200.png",
    },
    {
      name: "Our Lady of Fatima University",
      established: "1967",
      students: "4,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "100% English-medium instruction",
    "US-based curriculum (USMLE pathway)",
    "NMC-recognized programs",
    "Tropical climate similar to India",
    "Friendly, welcoming culture",
    "Strong focus on clinical training",
  ],
  feeRange: "$4,000 - $6,000/yr",
  duration: "5.5 Years",
  language: "English",
  climate: "Tropical",
  visa: "Philippines student visa requires admission letter, valid passport, financial proof, and medical certificate. Processing takes 2-4 weeks. VGLOBAL provides complete guidance.",
  whyChoose: [
    "English-speaking country — no language barrier",
    "US curriculum enables USMLE eligibility",
    "Globally recognized medical degrees",
    "NMC-approved universities",
    "Tropical, student-friendly environment",
    "Affordable compared to Western countries",
  ],
};

export default function Philippines() {
  return <CountryPage data={data} />;
}
