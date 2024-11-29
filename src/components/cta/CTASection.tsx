import { FC, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollInView } from '@/components/motion/ScrollInView';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Update the button variant type to match your Button component's allowed variants
type ButtonVariant = 
  | "white-action" 
  | "glass" 
  | "cta2" 
  | "secondary" 
  | "gradient" 
  | "default" 
  | "link" 
  | "destructive" 
  | "outline" 
  | "ghost" 
  | "premium" 
  | "submit" 
  | "action" 
  | "cta" 
  | "text-link" 
  | "soft" 
  | "tag" 
  | null;

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: ButtonVariant;
  size?: 'xl' | 'fluid';
  rounded?: 'full';
  showArrow?: boolean;
}

interface CTASectionProps {
  title: string | ReactNode;
  description: string;
  background?: 'primary' | 'navy' | 'gradient';
  className?: string;
  viewport?: boolean;
  buttons: CTAButtonProps[];
}

export const CTASection: FC<CTASectionProps> = ({
  title,
  description,
  background = 'primary',
  className = '',
  viewport = false,
  buttons
}) => {
  const getBgClass = () => {
    switch (background) {
      case 'primary':
        return 'bg-theme-primary-600';
      case 'navy':
        return 'bg-navy';
      case 'gradient':
        return 'bg-gradient-to-r from-theme-primary-500 to-purple-700';
      default:
        return 'bg-theme-primary-600';
    }
  };

  const getDescriptionClass = () => {
    return background === 'navy' 
      ? 'text-theme-neutral-400' 
      : 'text-white/80';
  };

  const renderButton = (button: CTAButtonProps, index: number) => {
    if (background === 'gradient') {
      return (
        <Link
          key={index}
          href={button.href}
          className={`rounded-full ${
            index === 0
              ? 'bg-white text-theme-primary-600 hover:bg-theme-neutral-100'
              : 'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
          } px-8 py-3 text-base font-semibold transition-all`}
        >
          {button.text}
        </Link>
      );
    }

    return (
      <Button
        key={index}
        variant={button.variant || 'default'}
        size={button.size}
        rounded={button.rounded}
        asChild
      >
        <Link href={button.href} className="group">
          {button.text}
          {button.showArrow && (
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          )}
        </Link>
      </Button>
    );
  };

  return (
    <section className={`relative overflow-hidden ${getBgClass()} py-24 ${className}`}>
      <div className="container relative mx-auto px-4 sm:px-6">
        <ScrollInView
          viewport={viewport}
          className={`mx-auto max-w-4xl ${
            background === 'gradient' ? 'rounded-2xl p-12' : ''
          } text-center`}
        >
          <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
            {title}
          </h2>
          <p className={`mb-12 text-lg ${getDescriptionClass()}`}>
            {description}
          </p>
          {buttons.length === 1 ? (
            renderButton(buttons[0], 0)
          ) : (
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              {buttons.map((button, index) => renderButton(button, index))}
            </div>
          )}
        </ScrollInView>
      </div>
    </section>
  );
};
