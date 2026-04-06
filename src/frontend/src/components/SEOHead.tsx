import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalPath?: string;
  schemaType?: "Organization" | "FAQPage" | "WebPage" | "MedicalBusiness";
  faqItems?: { question: string; answer: string }[];
}

export default function SEOHead({
  title,
  description,
  keywords,
  ogImage,
  canonicalPath,
  schemaType,
  faqItems,
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const updateMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);
    updateMeta("robots", "index, follow");

    // Open Graph
    updateMeta("og:title", title, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:type", "website", "property");
    updateMeta("og:site_name", "VGLOBAL Education Consultancy", "property");
    if (ogImage) updateMeta("og:image", ogImage, "property");

    // Twitter Card
    updateMeta("twitter:card", ogImage ? "summary_large_image" : "summary");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    if (ogImage) updateMeta("twitter:image", ogImage);

    // Canonical
    if (canonicalPath) {
      let canonical = document.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", `https://vglobal.online${canonicalPath}`);
    }

    // Structured data — Organization / MedicalBusiness
    if (schemaType === "Organization" || schemaType === "MedicalBusiness") {
      const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "VGLOBAL Education Consultancy",
        description:
          "India's trusted MBBS abroad consultancy helping Indian students study medicine in NMC-recognized universities worldwide.",
        url: "https://vglobal.online",
        telephone: "+91-7230032949",
        email: "enquiry@vglobal.online",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "A7, A8, 1st Floor, Ajmera Empire Complex, 10 B Scheme, Near Triveni Nagar Circle, Gopalpura Bypass",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          postalCode: "302017",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "26.8468",
          longitude: "75.7520",
        },
        openingHours: "Mo-Sa 09:00-19:00",
        sameAs: [
          "https://facebook.com/vglobal",
          "https://instagram.com/vglobal",
          "https://youtube.com/@vglobal",
        ],
      };
      addOrUpdateSchema("org-schema", schema);
    }

    // Structured data — FAQPage
    if (schemaType === "FAQPage" && faqItems) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      };
      addOrUpdateSchema("faq-schema", schema);
    }
  }, [
    title,
    description,
    keywords,
    ogImage,
    canonicalPath,
    schemaType,
    faqItems,
  ]);

  return null;
}

function addOrUpdateSchema(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.setAttribute("type", "application/ld+json");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}
