import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Uzbekistan",
  flag: "🇺🇿",
  tagline: "Emerging MBBS Destination with Affordable Fees in Central Asia",
  description:
    "Uzbekistan is rapidly emerging as a preferred MBBS destination in Central Asia. With recent reforms in its medical education system and government focus on healthcare education, Uzbekistani medical universities now offer quality programs at among the lowest fees in the region. The country's cultural similarity to North India makes it comfortable for Indian students.",
  gradient: "from-blue-700 via-green-700/20 to-navy",
  stats: [
    { label: "Annual Fees", value: "$3,000-4,500" },
    { label: "Partner Universities", value: "4+" },
    { label: "Indian Students", value: "1,000+" },
    { label: "Duration", value: "5+1 Years" },
  ],
  universities: [
    {
      name: "Tashkent Medical Academy",
      established: "1919",
      students: "8,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Samarkand State Medical University",
      established: "1930",
      students: "5,000+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO"],
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
      students: "4,000+",
      fee: "$3,200/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "Among the lowest MBBS fees globally",
    "Cultural similarity to North India",
    "Halal food easily available",
    "Safe and peaceful environment",
    "NMC-recognized universities",
    "Growing Indian student community",
  ],
  feeRange: "$3,000 - $4,500/yr",
  duration: "5+1 Years",
  language: "English/Uzbek",
  climate: "Continental/Arid",
  visa: "Indian students require a Student Visa for Uzbekistan. The process is streamlined through the university. Required: admission letter, passport, medical certificate. Processing time: 2-3 weeks. Uzbekistan also offers e-visa facilities.",
  whyChoose: [
    "Lowest fees in the region",
    "Cultural familiarity for North Indian students",
    "NMC-recognized universities",
    "Peaceful and safe environment",
    "Simple visa process",
    "Growing infrastructure and modernization",
  ],
};

export default function Uzbekistan() {
  return <CountryPage data={data} />;
}
