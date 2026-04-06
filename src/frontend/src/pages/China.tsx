import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "China",
  flag: "🇨🇳",
  tagline: "World-Ranked Universities for MBBS at Affordable Fees",
  description:
    "China was one of the most popular MBBS destinations for Indian students for many years. With world-ranked medical universities, English-medium programs, and affordable fees, China offers excellent medical education. Hundreds of Indian students have successfully completed MBBS from Chinese universities and are now practicing doctors.",
  gradient: "from-red-800 via-yellow-800 to-navy",
  heroImage: "/assets/generated/china-hero.dim_1200x600.jpg",
  stats: [
    { label: "Annual Fees", value: "$3,500-5,000" },
    { label: "Partner Universities", value: "8+" },
    { label: "Indian Students", value: "20,000+" },
    { label: "Duration", value: "6 Years" },
  ],
  universities: [
    {
      name: "China Medical University",
      established: "1931",
      students: "12,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
      logo: "/assets/generated/logo-china-medical.dim_200x200.png",
    },
    {
      name: "Jilin University Medical College",
      established: "1946",
      students: "8,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Huazhong University of Science and Technology",
      established: "1952",
      students: "7,500+",
      fee: "$5,000/yr",
      recognition: ["NMC", "WHO", "ECFMG"],
    },
    {
      name: "Shandong University Medical School",
      established: "1901",
      students: "6,000+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "World-ranked medical universities",
    "English-medium MBBS programs",
    "20,000+ Indian students alumni",
    "Modern labs and hospital training",
    "Rich cultural experience",
    "NMC-recognized degrees",
  ],
  feeRange: "$3,500 - $5,000/yr",
  duration: "6 Years",
  language: "English/Chinese",
  climate: "Varied",
  visa: "Chinese student visa (X visa) requires admission letter from university, valid passport, JW202 form, and health certificate. Processing takes 2-4 weeks. VGLOBAL guides students through complete documentation.",
  whyChoose: [
    "World-class university infrastructure",
    "NMC-recognized MBBS degrees",
    "English-medium instruction",
    "Proven track record with Indian students",
    "Excellent clinical training hospitals",
    "Affordable fees with quality education",
  ],
};

export default function China() {
  return <CountryPage data={data} />;
}
