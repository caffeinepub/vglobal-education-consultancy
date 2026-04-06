import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Bangladesh",
  flag: "🇧🇩",
  tagline: "India's Closest Neighbor for Affordable MBBS Education",
  description:
    "Bangladesh offers an affordable MBBS option just across India's border. With a shared culture, language proximity, and NMC-recognized medical colleges, Bangladesh is a popular choice for Indian students — particularly from Eastern India. The lifestyle and climate are very similar to India.",
  gradient: "from-green-800 via-red-800 to-navy",
  heroImage: "/assets/generated/bangladesh-hero.dim_1200x600.jpg",
  stats: [
    { label: "Annual Fees", value: "$3,000-5,000" },
    { label: "Partner Universities", value: "5+" },
    { label: "Indian Students", value: "2,000+" },
    { label: "Duration", value: "5 Years" },
  ],
  universities: [
    {
      name: "Dhaka Medical College",
      established: "1946",
      students: "10,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "BMDC"],
      logo: "/assets/generated/logo-dhaka-medical.dim_200x200.png",
    },
    {
      name: "Chittagong Medical College",
      established: "1957",
      students: "5,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO", "BMDC"],
    },
    {
      name: "MARKS Medical College",
      established: "2005",
      students: "2,000+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Enam Medical College",
      established: "1997",
      students: "2,500+",
      fee: "$3,000/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "Closest MBBS destination to India",
    "Shared cultural background",
    "NMC-recognized medical colleges",
    "Bengali language similarity",
    "Affordable fees and living costs",
    "Similar food habits and climate",
  ],
  feeRange: "$3,000 - $5,000/yr",
  duration: "5 Years",
  language: "English/Bengali",
  climate: "Tropical",
  visa: "Bangladesh student visa for Indian students requires admission letter, valid passport, and financial documents. The proximity to India makes travel easy. VGLOBAL assists with all visa and admission paperwork.",
  whyChoose: [
    "Geographically closest MBBS destination",
    "Cultural similarities ease adjustment",
    "NMC-recognized degrees",
    "Very affordable fees and living costs",
    "Easy communication in Bengali",
    "Established Indian student community",
  ],
};

export default function Bangladesh() {
  return <CountryPage data={data} />;
}
