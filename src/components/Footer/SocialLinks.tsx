import { FC } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "YouTube", icon: Youtube, url: "#" },
  { name: "GitHub", icon: Github, url: "#" },
];

export const SocialLinks: FC = () => (
  <div className="flex gap-4">
    {socialLinks.map(({ name, icon: Icon, url }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative rounded-full bg-gradient-to-br from-theme-primary-500/10 to-transparent p-2 transition-all hover:scale-110"
        aria-label={name}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-primary-600/20 to-theme-ocean-600/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
        <Icon className="relative h-5 w-5 text-theme-neutral-400 transition-colors group-hover:text-theme-primary-400" />
      </a>
    ))}
  </div>
);
