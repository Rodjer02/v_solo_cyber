import { ZONES } from "@/data/content";
import { isPlaceholder, site } from "@/data/site";

/**
 * schema.org: локальный бизнес + сайт + офферы с ценами.
 * Поля-заглушки (в [скобках] или пустые) не выводятся.
 */
export function JsonLd() {
  const businessId = `${site.url}/#business`;
  const websiteId = `${site.url}/#website`;

  const offers = ZONES.flatMap((z) =>
    z.rows
      .filter((r) => r.price !== null)
      .map((r) => ({
        "@type": "Offer",
        name: `${z.title} — ${r.ru}`,
        price: r.price,
        priceCurrency: "KZT",
        itemOffered: { "@type": "Service", name: `${z.title}: ${r.ru}`, serviceType: "Аренда игрового места" },
        availability: "https://schema.org/InStock",
      })),
  );

  const business: Record<string, unknown> = {
    "@type": ["LocalBusiness", "EntertainmentBusiness"],
    "@id": businessId,
    name: site.name,
    alternateName: "CYBER CLUB V SOLO",
    description: site.seo.description,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon.svg`,
    priceRange: "800 – 3 000 тг",
    areaServed: { "@type": "City", name: site.city },
    currenciesAccepted: "KZT",
    makesOffer: offers,
  };

  if (!isPlaceholder(site.phone)) business.telephone = site.phone.replace(/[^\d+]/g, "");
  if (!isPlaceholder(site.address)) {
    business.address = {
      "@type": "PostalAddress",
      streetAddress: site.address,
      ...(site.city ? { addressLocality: site.city } : {}),
      addressCountry: "KZ",
    };
  }
  business.geo = { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lon };
  business.hasMap = site.social.twoGis;
  if (site.openingHours.length) business.openingHours = site.openingHours;
  const sameAs = [site.social.instagram, site.social.twoGis].filter((u) => u && u !== "#");
  if (sameAs.length) business.sameAs = sameAs;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      business,
      { "@type": "WebSite", "@id": websiteId, url: site.url, name: site.name, inLanguage: "ru", publisher: { "@id": businessId } },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: site.seo.title,
        description: site.seo.description,
        inLanguage: "ru",
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
