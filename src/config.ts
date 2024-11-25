export const siteConfig = {
  // Basic Info
  appName: "REVENTO",
  appDescription:
    "Transform your digital presence with data-driven strategies and innovative solutions",
  domainName: "revento.agency", // Replace with your domain

  // Company Info
  company: {
    name: "REVENTO",
    address: "Your Address",
    email: "contact@revento.agency",
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
    twitter: "@reventoagency",
    linkedin: "https://linkedin.com/company/revento",
    facebook: "https://facebook.com/revento",
    instagram: "https://instagram.com/revento",
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

  // Contact Info for different purposes
  contact: {
    sales: "sales@revento.agency",
    support: "support@revento.agency",
    press: "press@revento.agency",
  },

  // Brand Colors
  colors: {
    primary: "#6D28D9", // Purple
    secondary: "#4338CA", // Indigo
    accent: "#EC4899", // Pink
    background: {
      light: "#FFFFFF",
      dark: "#0B0B1E",
    },
  },
} as const;
