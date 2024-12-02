export const siteConfig = {
  // Basic Info
  appName: "DIGITRA",
  appDescription:
    "Transform your digital presence with data-driven strategies and innovative solutions",
  domainName: "Digitra", // Replace with your domain

  // Company Info
  company: {
    name: "DIGITRA",
    address: "Your Address",
    email: "contact@digitra.agency",
    phone: "+1 (555) 123-4567",
    foundedYear: "2014",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "US",
    founder: "Your Name",
  },

  // Social Media
  social: {
    twitter: "@digitraagency",
    linkedin: "https://linkedin.com/company/digitra",
    facebook: "https://facebook.com/digitra",
    instagram: "https://instagram.com/digitra",
  },

  // Navigation (for easy updates)
  navigation: {
    features: [
      {
        title: "Analytics",
        href: "/analytics",
        description: "Data-driven insights and performance tracking",
      },
      // ... other features
    ],
    services: [
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "Comprehensive digital marketing solutions",
      },
      // ... other services
    ],
  },
  cta: "/contact",

  // Contact Info for different purposes
  contact: {
    sales: "sales@digitra.agency",
    support: "support@digitra.agency",
    press: "press@digitra.agency",
  },
} as const;
