import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Info } from "lucide-react";

const feeData = [
  {
    country: "Kyrgyzstan",
    flag: "🇰🇬",
    tuition: "$3,000 - $5,000",
    hostel: "$800 - $1,200",
    living: "$150 - $250",
    total6yr: "$25,000 - $40,000",
    featured: true,
  },
  {
    country: "Russia",
    flag: "🇷🇺",
    tuition: "$4,000 - $6,000",
    hostel: "$1,000 - $1,500",
    living: "$200 - $350",
    total6yr: "$35,000 - $55,000",
  },
  {
    country: "Georgia",
    flag: "🇬🇪",
    tuition: "$5,000 - $7,000",
    hostel: "$1,200 - $2,000",
    living: "$300 - $500",
    total6yr: "$45,000 - $60,000",
  },
  {
    country: "Kazakhstan",
    flag: "🇰🇿",
    tuition: "$3,500 - $5,500",
    hostel: "$900 - $1,400",
    living: "$150 - $300",
    total6yr: "$30,000 - $48,000",
  },
  {
    country: "Philippines",
    flag: "🇵🇭",
    tuition: "$4,000 - $6,000",
    hostel: "$1,500 - $2,000",
    living: "$300 - $450",
    total6yr: "$38,000 - $55,000",
  },
  {
    country: "Bangladesh",
    flag: "🇧🇩",
    tuition: "$3,000 - $5,000",
    hostel: "$700 - $1,000",
    living: "$100 - $200",
    total6yr: "$23,000 - $38,000",
  },
  {
    country: "China",
    flag: "🇨🇳",
    tuition: "$3,500 - $6,000",
    hostel: "$800 - $1,500",
    living: "$200 - $350",
    total6yr: "$30,000 - $50,000",
  },
  {
    country: "Uzbekistan",
    flag: "🇺🇿",
    tuition: "$3,000 - $4,500",
    hostel: "$700 - $1,000",
    living: "$100 - $200",
    total6yr: "$22,000 - $35,000",
  },
  {
    country: "Ukraine",
    flag: "🇺🇦",
    tuition: "$3,000 - $5,000",
    hostel: "$800 - $1,200",
    living: "$150 - $250",
    total6yr: "$25,000 - $40,000",
  },
];

export default function Fees() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Fee Structure
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            MBBS Abroad Fee Structure 2024
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Transparent, country-wise fee comparison. No hidden charges. No
            donation required.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg border border-border">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-4">Country</th>
                  <th className="text-center px-5 py-4">Annual Tuition</th>
                  <th className="text-center px-5 py-4">Annual Hostel</th>
                  <th className="text-center px-5 py-4">Living/Month</th>
                  <th className="text-center px-5 py-4">Total (6 yrs)</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((row, i) => (
                  <tr
                    key={row.country}
                    className={`border-b border-border ${row.featured ? "bg-gold/5" : i % 2 === 0 ? "bg-white" : "bg-secondary"}`}
                    data-ocid={`fees.item.${i + 1}`}
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{row.flag}</span>
                        <span className="font-medium text-navy">
                          {row.country}
                        </span>
                        {row.featured && (
                          <Badge className="bg-gold text-navy text-xs">
                            ⭐
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="text-center px-5 py-4 text-gold font-semibold">
                      {row.tuition}
                    </td>
                    <td className="text-center px-5 py-4 text-muted-foreground">
                      {row.hostel}
                    </td>
                    <td className="text-center px-5 py-4 text-muted-foreground">
                      {row.living}
                    </td>
                    <td className="text-center px-5 py-4 font-semibold text-navy">
                      {row.total6yr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl flex gap-3">
            <Info className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            <div className="text-sm text-amber-800">
              <strong>Disclaimer:</strong> Fees mentioned are approximate and
              subject to change. VGLOBAL provides exact, verified fee structures
              during counselling sessions.
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-navy mb-4">
            Compare MBBS Abroad vs India
          </h2>
          <p className="text-muted-foreground mb-4">
            Private MBBS in India costs ₹70 lakhs to ₹1.5 crores. MBBS abroad
            costs just ₹20-45 lakhs total.
          </p>
          <Link to="/counselling">
            <Button
              className="bg-navy hover:bg-navy-dark text-white font-semibold px-8"
              data-ocid="fees.counselling.button"
            >
              Get Exact Fee Details
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
