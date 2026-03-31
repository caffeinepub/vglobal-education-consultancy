import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Philippines",
  flag: "🇵🇭",
  tagline: "English-Medium MBBS with American-Style Medical Curriculum",
  description:
    "The Philippines is the only country in Asia where medical education is offered in English with a US-style curriculum. Filipino medical universities follow the American Medical Association standards, making it an excellent choice for students aspiring to practice medicine in the USA or other English-speaking countries.",
  gradient: "from-blue-700 via-red-700/30 to-navy",
  stats: [
    { label: "Annual Fees", value: "$4,000-6,000" },
    { label: "Partner Universities", value: "5+" },
    { label: "Indian Students", value: "4,000+" },
    { label: "Duration", value: "4+1 Years" },
  ],
  universities: [
    {
      name: "University of Santo Tomas",
      established: "1611",
      students: "40,000+",
      fee: "$6,000/yr",
      recognition: ["NMC", "WHO", "FAIMER", "ECFMG"],
    },
    {
      name: "Davao Medical School Foundation",
      established: "1976",
      students: "3,000+",
      fee: "$5,000/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
    },
    {
      name: "Emilio Aguinaldo College of Medicine",
      established: "1973",
      students: "5,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Our Lady of Fatima University",
      established: "1967",
      students: "6,000+",
      fee: "$5,500/yr",
      recognition: ["NMC", "WHO", "ECFMG"],
    },
  ],
  highlights: [
    "100% English-medium education",
    "American-style medical curriculum",
    "ECFMG-recognized for USA practice",
    "Tropical island lifestyle",
    "Friendly and welcoming people",
    "Affordable living costs",
  ],
  feeRange: "$4,000 - $6,000/yr",
  duration: "4+1 Years",
  language: "English",
  climate: "Tropical",
  visa: "Indian students require a Student Visa for the Philippines. Documents needed include acceptance letter, valid passport, financial documents, and health certificate. VGLOBAL assists with the complete visa process.",
  whyChoose: [
    "Only country with English-medium US curriculum in Asia",
    "ECFMG recognition for US licensing",
    "Warm tropical climate",
    "English-speaking population",
    "NMC-recognized medical universities",
    "4-year MD program structure",
  ],
};

export default function Philippines() {
  return <CountryPage data={data} />;
}
