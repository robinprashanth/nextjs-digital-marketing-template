"use client"

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollInView } from '@/components/motion/ScrollInView';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/config';

interface CTACardProps {
  title: string;
  description: string;
  buttonText: string;
  path?: string;
  variant?: 'primary' | 'custom';
  showArrow?: boolean;
  className?: string;
}

export const CTACard: FC<CTACardProps> = ({
  title,
  description,
  buttonText,
  path,
  variant = 'primary',
  showArrow = false,
  className = '',
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path || siteConfig.cta);
  };

  return (
    <ScrollInView
      className={`mx-auto mt-16 max-w-3xl rounded-2xl ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600'
          : 'bg-gradient-to-r from-theme-primary-600 to-purple-700'
      } p-8 text-center text-white ${className}`}
    >
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="mb-6">{description}</p>
      <Button
        variant="white-action"
        size="fluid"
        rounded="full"
        onClick={handleClick}
      >
        {buttonText}
        {showArrow && <ArrowRight className="ml-2 inline-block h-4 w-4" />}
      </Button>
    </ScrollInView>
  );
};