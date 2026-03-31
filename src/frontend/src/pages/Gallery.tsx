import { Badge } from "@/components/ui/badge";

const galleryItems = [
  {
    label: "Osh State Medical University, Kyrgyzstan",
    color: "bg-blue-700",
    category: "Campus",
  },
  {
    label: "Student Life in Bishkek, Kyrgyzstan",
    color: "bg-green-700",
    category: "Student Life",
  },
  {
    label: "Kazan Federal University, Russia",
    color: "bg-red-700",
    category: "Campus",
  },
  {
    label: "Pre-Departure Orientation - Jaipur Batch 2023",
    color: "bg-amber-700",
    category: "Events",
  },
  {
    label: "Tbilisi State Medical University, Georgia",
    color: "bg-purple-700",
    category: "Campus",
  },
  {
    label: "Clinical Training at Partner Hospital",
    color: "bg-teal-700",
    category: "Clinical",
  },
  {
    label: "VGLOBAL Counselling Session - Jaipur Office",
    color: "bg-indigo-700",
    category: "Office",
  },
  {
    label: "Student Batch - Philippines 2023",
    color: "bg-pink-700",
    category: "Student Life",
  },
  {
    label: "Graduation Ceremony - VGLOBAL Alumni",
    color: "bg-yellow-700",
    category: "Events",
  },
  {
    label: "China Medical University Campus",
    color: "bg-cyan-700",
    category: "Campus",
  },
  {
    label: "Cultural Exchange - Indian Students Abroad",
    color: "bg-orange-700",
    category: "Student Life",
  },
  {
    label: "VGLOBAL Annual Meet 2023, Jaipur",
    color: "bg-lime-700",
    category: "Events",
  },
];

const categories = [
  "All",
  "Campus",
  "Student Life",
  "Events",
  "Clinical",
  "Office",
];

export default function Gallery() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold/20 text-gold border-gold/30 mb-4">
            Gallery
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Life at VGLOBAL Universities
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Glimpses of student life, campuses, and events from VGLOBAL's
            student community across the world.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant="outline"
                className="cursor-pointer hover:bg-navy hover:text-white border-navy text-navy px-4 py-1.5"
              >
                {cat}
              </Badge>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={item.label}
                className={`${item.color} rounded-xl overflow-hidden aspect-square flex flex-col justify-end p-4 cursor-pointer hover:opacity-90 transition-opacity`}
                data-ocid={`gallery.item.${i + 1}`}
              >
                <Badge className="bg-white/20 text-white border-0 text-xs mb-1 self-start">
                  {item.category}
                </Badge>
                <p className="text-white text-xs font-medium leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
