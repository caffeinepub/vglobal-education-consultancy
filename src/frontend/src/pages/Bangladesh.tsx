import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Bangladesh",
  flag: "🇧🇩",
  tagline:
    "Affordable MBBS in India's Neighbouring Country with Familiar Culture",
  description:
    "Bangladesh is India's closest neighbor and shares deep cultural and linguistic ties, making it one of the most comfortable destinations for Indian students to study MBBS. Bangladeshi medical universities offer quality education at very affordable fees with a warm, welcoming environment for Indian students.",
  gradient: "from-green-800 via-red-700/20 to-navy",
  stats: [
    { label: "Annual Fees", value: "$3,000-5,000" },
    { label: "Partner Universities", value: "5+" },
    { label: "Indian Students", value: "1,500+" },
    { label: "Duration", value: "5 Years" },
  ],
  universities: [
    {
      name: "Chittagong Medical College",
      established: "1957",
      students: "4,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "BMDC"],
    },
    {
      name: "Dhaka National Medical College",
      established: "1988",
      students: "3,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Sylhet Medical University",
      established: "1962",
      students: "3,500+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Shahjalal University Medical College",
      established: "2001",
      students: "2,000+",
      fee: "$3,000/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "Closest country to India — no language barrier",
    "Bengali language familiar to many Indian students",
    "Similar food culture",
    "No cultural shock",
    "Very affordable living costs",
    "Direct bus and train connectivity from India",
  ],
  feeRange: "$3,000 - $5,000/yr",
  duration: "5 Years",
  language: "English/Bengali",
  climate: "Tropical",
  visa: "Indian students require a Student Visa for Bangladesh. The process is straightforward with an admission letter and valid passport. Land border crossings from West Bengal, Assam, and Tripura are available.",
  whyChoose: [
    "Culturally closest to India",
    "Language familiarity (Bengali)",
    "Most affordable MBBS fees",
    "Land border connectivity",
    "NMC-recognized universities",
    "Comfortable, familiar environment",
  ],
};

export default function Bangladesh() {
  return <CountryPage data={data} />;
}
