import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Kyrgyzstan",
  flag: "🇰🇬",
  tagline:
    "Most Affordable & NMC-Recognized MBBS Destination for Indian Students",
  description:
    "Kyrgyzstan has emerged as one of the top MBBS destinations for Indian students due to its highly affordable fees, English-medium education, and NMC-recognized universities. Located in Central Asia, this beautiful mountainous country offers Indian students a safe, friendly environment with a close cultural affinity.",
  gradient: "from-red-900 via-red-800 to-navy",
  stats: [
    { label: "Annual Fees", value: "$3,000-5,000" },
    { label: "Partner Universities", value: "4+" },
    { label: "Indian Students", value: "5,000+" },
    { label: "Years of Excellence", value: "10+" },
  ],
  universities: [
    {
      name: "Osh State Medical University",
      established: "1992",
      students: "5,000+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO", "FAIMER", "ECFMG"],
    },
    {
      name: "International School of Medicine",
      established: "2003",
      students: "2,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO", "WFME"],
    },
    {
      name: "Jalal-Abad State Medical University",
      established: "2000",
      students: "3,000+",
      fee: "$3,000/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Kyrgyz State Medical Academy",
      established: "1939",
      students: "7,000+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO", "FAIMER"],
    },
    {
      name: "Asian Medical Institute",
      established: "2002",
      students: "2,500+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "WFME"],
    },
    {
      name: "International University of Kyrgyzstan Medical Faculty",
      established: "1993",
      students: "1,500+",
      fee: "$3,800/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "Most affordable MBBS destination in the world",
    "All top universities NMC-recognized",
    "English-medium instruction throughout",
    "No IELTS/TOEFL required for admission",
    "Indian food available in university cafeterias",
    "Large Indian student community for support",
    "Safe and peaceful environment for Indian students",
    "Direct flights from major Indian cities",
    "Moderate climate similar to North India",
    "Simple visa process — student visa available",
    "5+1 year program structure (5 academic + 1 internship)",
    "Regular Indian cultural events on campus",
  ],
  feeRange: "$3,000 - $5,000/yr",
  duration: "5+1 Years",
  language: "English",
  climate: "Continental",
  visa: "Indian students require a Student Visa (Study Visa) for Kyrgyzstan. The visa process is simple — after receiving the admission letter, VGLOBAL will guide you through the visa application. Processing time is typically 7-14 working days. The visa is usually valid for 1 year and renewable annually.",
  whyChoose: [
    "Lowest tuition fees among all MBBS abroad destinations",
    "All universities recognized by NMC India",
    "English-medium education — no language barrier",
    "5,000+ Indian students already studying here",
    "Peaceful, student-friendly environment",
    "Low cost of living ($150-250/month)",
    "Simple admission process with VGLOBAL",
    "Strong alumni network back in India",
  ],
};

export default function Kyrgyzstan() {
  return <CountryPage data={data} featured />;
}
