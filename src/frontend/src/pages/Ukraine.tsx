import { Badge } from "@/components/ui/badge";
import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";

const data: CountryData = {
  name: "Ukraine",
  flag: "🇺🇦",
  tagline:
    "European Medical Education with a Long History of Welcoming Indian Students",
  description:
    "Ukraine was historically one of the most popular MBBS destinations for Indian students, known for its high-quality medical education and affordable fees. Please note: Due to the ongoing conflict (since 2022), VGLOBAL advises students to monitor the situation closely. We assist students who wish to explore options as well as those who need to transfer from Ukrainian universities to other institutions.",
  gradient: "from-blue-600 via-yellow-500/20 to-navy",
  stats: [
    { label: "Annual Fees", value: "$3,000-5,000" },
    { label: "Partner Universities", value: "8+" },
    { label: "Historical Students", value: "20,000+" },
    { label: "Duration", value: "6 Years" },
  ],
  universities: [
    {
      name: "Bogomolets National Medical University",
      established: "1841",
      students: "13,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "ECFMG"],
    },
    {
      name: "Kharkiv National Medical University",
      established: "1805",
      students: "8,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO"],
    },
    {
      name: "Lviv National Medical University",
      established: "1784",
      students: "6,000+",
      fee: "$4,000/yr",
      recognition: ["NMC", "WHO", "WFME"],
    },
    {
      name: "Zaporizhzhia State Medical University",
      established: "1903",
      students: "4,000+",
      fee: "$3,500/yr",
      recognition: ["NMC", "WHO"],
    },
  ],
  highlights: [
    "Historically top choice for Indian students",
    "European-quality medical education",
    "English-medium instruction",
    "Strong FMGE success rate historically",
    "Transfer options available for current students",
    "VGLOBAL assists with university transfers",
  ],
  feeRange: "$3,000 - $5,000/yr",
  duration: "6 Years",
  language: "English/Ukrainian",
  climate: "Temperate",
  visa: "For current students or those planning to study: Ukrainian Student Visa requires admission letter, passport, and financial documents. VGLOBAL strongly recommends consulting with us for the latest situation updates before applying.",
  whyChoose: [
    "Historically prestigious medical universities",
    "European standard medical education",
    "NMC-recognized programs",
    "English-medium instruction",
    "VGLOBAL assists with transfer if needed",
    "Strong alumni network in India",
  ],
};

export default function Ukraine() {
  return (
    <>
      <div className="bg-amber-50 border-b border-amber-200 pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-4">
          <Badge className="bg-amber-100 text-amber-800 border-amber-300">
            ⚠️ Important Notice
          </Badge>
          <p className="text-amber-800 text-sm mt-2">
            Due to the ongoing conflict in Ukraine (since February 2022), new
            admissions are currently limited. Students already enrolled have
            been advised to continue studies online or transfer. VGLOBAL is
            actively assisting affected students with university transfers to
            Kyrgyzstan, Russia, and Georgia.{" "}
            <strong>
              Please contact us for the latest updates before making any
              decisions.
            </strong>
          </p>
        </div>
      </div>
      <CountryPage data={data} />
    </>
  );
}
