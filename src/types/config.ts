export interface ServiceConfig {
  title: string;
  href: string;
  description: string;
  badge?: string;
}

export interface NavigationConfig {
  features: ServiceConfig[];
  services: ServiceConfig[];
}

export interface SocialConfig {
  twitter: string;
  linkedin: string;
  facebook: string;
  instagram: string;
}

export interface CompanyConfig {
  name: string;
  address: string;
  email: string;
  phone: string;
  foundedYear: string;
}

export interface SiteConfig {
  appName: string;
  appDescription: string;
  domainName: string;
  company: CompanyConfig;
  social: SocialConfig;
  navigation: NavigationConfig;
  contact: Record<string, string>;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: {
      light: string;
      dark: string;
    };
  };
}
