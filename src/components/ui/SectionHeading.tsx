import { FC } from "react";
import { ScrollAnimations } from "@/components/motion/ScrollInView";
import { cn } from "@/lib/utils";

type SubtitleColor = "primary" | "secondary" | "sunflower" | "tulip" | "rose" | "ocean" | "indigo" | "violet";

interface SectionHeadingProps {
  title: string | string[];
  subtitle?: string;
  paragraph?: string;
  alignment?: "left" | "center";
  subtitleColor?: SubtitleColor;
  animated?: boolean;
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  title,
  subtitle,
  paragraph,
  alignment = "left",
  subtitleColor = "ocean",
}) => {
  const titles = Array.isArray(title) ? title : title.split('\n');
  const alignmentClasses = alignment === "center" ? "text-center mx-auto" : "text-left";
  const subtitleColors: Record<SubtitleColor, string> = {
    primary: "text-theme-primary-500",
    secondary: "text-theme-secondary-500",
    sunflower: "text-theme-sunflower-500",
    tulip: "text-theme-tulip-500",
    rose: "text-theme-rose-500",
    ocean: "text-theme-ocean-500",
    indigo: "text-theme-indigo-500",
    violet: "text-theme-violet-500",
  };

  return (
    <div className={cn("mb-16 max-w-3xl text-center", alignmentClasses)}>
      <ScrollAnimations.Stagger delayStep={0.2}>
        {subtitle && (
          <ScrollAnimations.StaggerItem>
            <span className={`mb-4 block text-sm font-bold uppercase ${subtitleColors[subtitleColor]}`}>
              {subtitle}
            </span>
          </ScrollAnimations.StaggerItem>
        )}
        <ScrollAnimations.StaggerItem>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase ">
            {titles.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>
        </ScrollAnimations.StaggerItem>
        {paragraph && (
          <ScrollAnimations.StaggerItem>
            <p className="text-md text-theme-neutral-600 pt-2">{paragraph}</p>
          </ScrollAnimations.StaggerItem>
        )}
      </ScrollAnimations.Stagger>
    </div>
  );
};
