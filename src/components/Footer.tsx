import { FC } from "react";
import { Newsletter } from "./Footer/Newsletter";
import { SocialLinks } from "./Footer/SocialLinks";
import { siteConfig } from "@/config";
import Image from "next/image";

const footerLinks = {
  Solutions: [
    { name: "Digital Strategy", href: "#" },
    { name: "SEO Optimization", href: "#" },
    { name: "Content Marketing", href: "#" },
    { name: "Social Growth", href: "#" },
    { name: "Brand Analytics", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Our Work", href: "#" },
    { name: "Latest News", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Resources: [
    { name: "Marketing Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Digital Tools", href: "#" },
    { name: "Knowledge Base", href: "#" },
    { name: "Agency Partners", href: "#" },
  ],
};

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0B0B1E] pt-20">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 h-96 w-96 bg-theme-primary-500/10 blur-[100px]" />
      <div className="absolute right-0 top-0 h-96 w-96 bg-theme-ocean-500/10 blur-[100px]" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600 blur-sm" />
                  <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#0B0B1E]">
                  <Image 
        src="/logo.svg" 
        alt="Digitra Logo" 
        width={32} 
        height={32} 
        className="rounded-full" 
        priority // Ensures the logo loads quickly as it's a primary visual
      />
                  </div>
                </div>
                <span className=" bg-clip-text text-2xl font-bold text-white">
    {siteConfig.appName}
  </span>
              </div>
              <p className="text-theme-neutral-400">
                Transforming digital presence through innovative marketing
                solutions that drive exceptional results.
              </p>
            </div>

            <Newsletter />

            <div className="space-y-4">
              <p className="text-sm text-theme-neutral-400">Follow us on social media</p>
              <SocialLinks />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-4 bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600 bg-clip-text font-semibold text-transparent">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-theme-neutral-400 transition-colors hover:text-theme-primary-400"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-theme-neutral-800 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-theme-neutral-400 sm:flex-row">
            <div>© {currentYear} {siteConfig.appName}. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-theme-primary-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-theme-primary-400">
                Terms of Service
              </a>
              <a href="#" className="hover:text-theme-primary-400">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
