import React from 'react';
import { ScrollInView } from '../motion/ScrollInView';

// Theme configuration
const headingTheme = {
  title: {
    primary: "mb-4 block bg-gradient-to-r from-theme-primary-600 to-pink-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent",
    secondary: "mb-4 block bg-gradient-to-r from-theme-primary-400 to-pink-400 bg-clip-text text-sm font-semibold tracking-wider text-transparent",
    indigo: "mb-4 block bg-gradient-to-r from-theme-indigo-600 to-theme-violet-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent",
    indigo_small: "mb-4 block bg-gradient-to-r from-theme-indigo-600 to-theme-violet-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent",
    indigo_light: "mb-4 block bg-gradient-to-r from-theme-indigo-400 to-theme-violet-400 bg-clip-text text-sm font-semibold tracking-wider text-transparent",
    badge: "mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400",
    light: "mb-4 block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent",
    dark: "mb-4 block bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent"
  },
  heading: {
    primary: "mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-5xl",
    secondary: "mb-6 text-3xl font-bold text-white md:text-5xl",
    indigo: "mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-5xl",
    indigo_small: "mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-4xl",
    indigo_light: "mb-6 text-3xl font-bold text-white md:text-5xl",
    badge: "mb-6 text-3xl font-bold text-foreground md:text-4xl",
    light: "mb-6 text-3xl font-bold text-theme-neutral-800 md:text-5xl",
    dark: "mb-6 text-3xl font-bold text-white md:text-5xl"
  },
  description: {
    primary: "text-lg text-theme-neutral-600 dark:text-theme-neutral-400",
    secondary: "text-lg text-theme-neutral-300",
    indigo: "text-lg text-theme-neutral-600 dark:text-theme-neutral-400",
    indigo_small: "text-lg text-theme-neutral-600 dark:text-theme-neutral-400",
    indigo_light: "text-lg text-theme-neutral-300",
    badge: "text-muted-foreground",
    light: "text-lg text-theme-neutral-600",
    dark: "text-lg text-theme-neutral-300"
  }
};

interface AnimatedHeadingProps {
  title?: string;
  heading: string;
  description?: string;
  className?: string;
  useInView?: boolean;
  theme?: 'primary' | 'secondary' | 'indigo' | 'indigo_small' | 'indigo_light' | 'badge' | 'light' | 'dark';
  customTitleClass?: string;
  customHeadingClass?: string;
  customDescriptionClass?: string;
  viewport?: Record<string, unknown>;
}

const AnimatedHeading = ({
  title,
  heading,
  description,
  className = "mx-auto mb-16 max-w-2xl text-center",
  useInView = true,
  theme = 'primary',
  customTitleClass,
  customHeadingClass,
  customDescriptionClass,
  viewport
}: AnimatedHeadingProps) => {
  return (
    <ScrollInView
      useInView={useInView}
      className={className}
      viewport={viewport}
    >
      {title && (
        <span className={customTitleClass || headingTheme.title[theme]}>
          {title}
        </span>
      )}
      <h2 className={customHeadingClass || headingTheme.heading[theme]}>
        {heading}
      </h2>
      {description && (
        <p className={customDescriptionClass || headingTheme.description[theme]}>
          {description}
        </p>
      )}
    </ScrollInView>
  );
};

export default AnimatedHeading;