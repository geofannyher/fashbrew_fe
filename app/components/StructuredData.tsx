import Script from "next/script";

interface StructuredDataProps {
  type: "website" | "organization" | "localBusiness" | "article";
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  let structuredData;

  switch (type) {
    case "website":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: data.name,
        url: data.url,
        description: data.description,
        potentialAction: {
          "@type": "SearchAction",
          target: `${data.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };
      break;
    case "organization":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: data.name,
        url: data.url,
        logo: data.logo,
        sameAs: data.socialLinks,
      };
      break;
    case "localBusiness":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: data.name,
        image: data.image,
        address: data.address,
        geo: data.geo,
        url: data.url,
        telephone: data.telephone,
        priceRange: data.priceRange,
        openingHours: data.openingHours,
      };
      break;
    case "article":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.headline,
        image: data.image,
        author: data.author,
        publisher: data.publisher,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        mainEntityOfPage: data.url,
      };
      break;
    default:
      structuredData = {};
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
