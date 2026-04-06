import CountryPage from "../components/CountryPage";
import type { CountryData } from "../components/CountryPage";
import SEOHead from "../components/SEOHead";

const data: CountryData = {
  name: "Russia",
  flag: "🇷🇺",
  tagline:
    "World-Class Medical Education at Some of the World's Oldest Universities",
  description:
    "Russia has been a top MBBS destination for Indian students for over 50 years — and there's a good reason for that. Some of the world's oldest and most respected medical institutions are in Russia. Degrees are NMC, WHO, and globally recognized. Fees are affordable, especially compared to what you'd pay in India for a private college, and there's a large Indian community in most university cities.",
  gradient: "from-blue-900 via-red-900 to-navy",
  heroImage: "/assets/generated/russia-hero.dim_1200x600.jpg",
  stats: [
    { label: "Annual Fees", value: "$4,000-6,000" },
    { label: "Partner Universities", value: "10+" },
    { label: "Indian Students", value: "15,000+" },
    { label: "Years of History", value: "300+" },
  ],
  universities: [
    {
      name: "Sechenov First Moscow State Medical University",
      established: "1758",
      students: "12,000+",
      fee: "$6,000/yr",
      recognition: ["NMC", "WHO", "ECFMG"],
      logo: "/assets/generated/logo-sechenov.dim_200x200.png",
    },
    {
      name: "Kazan Federal University",
      established: "1804",
      students: "50,000+",
      fee: "$5,000/yr",
      recognition: ["NMC", "WHO", "ECFMG"],
      logo: "/assets/generated/logo-kazan-federal.dim_200x200.png",
    },
    {
      name: "Kursk State Medical University",
      established: "1935",
      students: "7,000+",
      fee: "$4,500/yr",
      recognition: ["NMC", "WHO", "GMC"],
      logo: "/assets/generated/logo-kursk-medical.dim_200x200.png",
    },
    {
      name: "Pirogov Russian National Research Medical University",
      established: "1906",
      students: "8,500+",
      fee: "$5,500/yr",
      recognition: ["NMC", "WHO"],
      logo: "/assets/generated/logo-pirogov.dim_200x200.png",
    },
  ],
  highlights: [
    "Medical education tradition spanning 300+ years",
    "Degrees recognized in 100+ countries",
    "Research-intensive, clinically strong universities",
    "English-medium programs widely available",
    "Rich cultural experience — unlike anywhere else",
    "Strong Indian student community across Russian cities",
  ],
  feeRange: "$4,000 - $6,000/yr",
  duration: "6 Years",
  language: "English/Russian",
  climate: "Continental",
  visa: "For a Russian Student Visa, you'll need an invitation letter from the university, a valid passport, medical certificate, and HIV test report. VGLOBAL assists with all documentation. Processing usually takes 3–4 weeks.",
  whyChoose: [
    "Prestigious universities with recognition across the world",
    "NMC-recognized MBBS programs",
    "English-medium instruction available",
    "Much more affordable than Indian private colleges",
    "Rich cultural history, safe environment",
    "Large Indian community across Russian university cities",
  ],
};

export default function Russia() {
  return (
    <>
      <SEOHead
        title="MBBS in Russia 2026 | Top Medical Universities | VGLOBAL Jaipur"
        description="Study MBBS in Russia at NMC-recognized universities like Kazan Federal University, Kursk State Medical University. Fees $4,000-6,000/yr. 300+ years of medical education tradition. Free counselling from VGLOBAL Jaipur."
        keywords="MBBS in Russia, MBBS Russia fees, Russian medical universities India, NMC recognized Russia, Kazan Federal University, Kursk State Medical"
        canonicalPath="/russia"
      />
      <CountryPage data={data} />
    </>
  );
}
