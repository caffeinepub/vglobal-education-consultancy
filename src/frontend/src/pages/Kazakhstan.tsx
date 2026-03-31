import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Kazakhstan",
  flag: "🇰🇿",
  tagline: "A Rapidly Growing Medical Education Hub in Central Asia",
  description:
    "Kazakhstan has invested heavily in modernizing its medical education system. The country's medical universities offer quality MBBS programs recognized by NMC India, with affordable fees and a growing Indian student community. Kazakhstan's proximity to India and cultural similarities make it a comfortable study destination.",
  gradient: "from-blue-600 via-yellow-600/30 to-navy",
  stats: [
    { label: "Annual Fees", value: "$3,500-5,500" },
    { label: "Partner Universities", value: "6+" },
    { label: "Indian Students", value: "2,000+" },
    { label: "Duration", value: "5+1 Years" },
  ],
  universities: [
    {
      name: "Kazakh National Medical University",
      established: "1931",
      students: "8,000+",
      fee: "$5,000/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
    },
    {
      name: "Semey Medical University",
      established: "1953",
      students: "4,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Karaganda Medical University",
      established: "1950",
      students: "5,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "WFME"],
    },
    {
      name: "South Kazakhstan Medical Academy",
      established: "1979",
      students: "3,500+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "Modern university infrastructure",
    "English-medium programs available",
    "Affordable living costs",
    "Safe and growing economy",
    "NMC-recognized universities",
    "Indian food available in major cities",
  ],
  feeRange: "$3,500 - $5,500/yr",
  duration: "5+1 Years",
  language: "English/Russian",
  climate: "Continental",
  visa: "Indian students need a student visa for Kazakhstan. Required documents include admission letter, valid passport, medical certificate, and police clearance. Processing time is 2-3 weeks. VGLOBAL assists with complete documentation.",
  whyChoose: [
    "Modernized medical education system",
    "NMC-recognized universities",
    "Affordable fees and living costs",
    "Culturally familiar environment",
    "Safe and stable country",
    "Growing Indian student community",
  ],
};

export default function Kazakhstan() {
  return <CountryPage data={data} />;
}
