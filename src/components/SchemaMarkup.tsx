import { siteConfig } from "@/config";

export function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MarketingAgency",
          "@id": `https://${siteConfig.domainName}/#organization`,
          name: siteConfig.appName,
          description: siteConfig.appDescription,
          url: `https://${siteConfig.domainName}`,
          logo: {
            "@type": "ImageObject",
            url: `https://${siteConfig.domainName}/logo.png`,
          },
          image: {
            "@type": "ImageObject",
            url: `https://${siteConfig.domainName}/og-image.jpg`,
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.company.address,
            addressLocality: siteConfig.company.city,
            addressRegion: siteConfig.company.state,
            postalCode: siteConfig.company.zip,
            addressCountry: siteConfig.company.country,
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: siteConfig.company.phone,
              email: siteConfig.contact.sales,
              contactType: "sales",
              availableLanguage: ["English"],
            },
            {
              "@type": "ContactPoint",
              telephone: siteConfig.company.phone,
              email: siteConfig.contact.support,
              contactType: "customer support",
              availableLanguage: ["English"],
            },
          ],
          sameAs: [
            siteConfig.social.facebook,
            siteConfig.social.twitter,
            siteConfig.social.linkedin,
            siteConfig.social.instagram,
          ],
          founder: {
            "@type": "Person",
            name: siteConfig.company.founder,
          },
          foundingDate: siteConfig.company.foundedYear,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "180",
          },
          areaServed: "Worldwide",
          // Add services offered
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Digital Marketing Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Digital Marketing",
                  description: "Comprehensive digital marketing solutions",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SEO Services",
                  description: "Search engine optimization services",
                },
              },
              // Add more services as needed
            ],
          },
        }),
      }}
    />
  );
}
