import { FC } from "react";
import { CTACard } from "./CTACard";
import { CTASection } from "./CTASection";
import { GradientCTA } from "./GradientCTA";

export const JoinTeamCTA: FC<{ path?: string }> = ({ path }) => (
  <CTACard
    title="Join Our Team"
    description="We're always looking for talented individuals to join our growing team. Check out our open positions and become part of our success story."
    buttonText="View Open Positions"
    path={path || "/current-openings"}
  />
);

export const CustomSolutionCTA: FC<{ path?: string }> = ({ path }) => (
  <CTACard
    title="Need a Custom Solution?"
    description="Contact our team for a tailored package that meets your specific needs and objectives."
    buttonText="Contact Sales"
    showArrow
    path={path}
  />
);

export const CertificationsCTA: FC<{ path?: string }> = ({ path }) => (
  <CTACard
    title="Certified Excellence"
    description="Our team holds multiple certifications from leading platforms, ensuring the highest standards of digital marketing expertise."
    buttonText="View All Certifications"
    path={path || "/about/certifications"}
  />
);

export const ConsultationCTA: FC<{ path?: string }> = ({ path }) => (
  <CTACard
    title="Ready to Transform Your Industry?"
    description="Let's discuss how our expertise can drive growth for your business."
    buttonText="Schedule a Consultation"
    path={path}
  />
);

export const TeamCollaborationCTA: FC<{ href?: string }> = ({
  href = "/contact",
}) => (
  <CTASection
    title={
      <>
        Ready to Transform Your
        <br />
        Team Collaboration?
      </>
    }
    description="Join thousands of teams already using our tools to work better together."
    background="primary"
    viewport={true}
    buttons={[
      {
        href,
        text: "Get Started Now",
        variant: "white-action",
        size: "xl",
      },
    ]}
  />
);

export const ContentStrategyCTA: FC<{ href?: string }> = ({
  href = "/contact",
}) => (
  <CTASection
    title={
      <>
        Ready to Transform Your
        <br />
        Content Strategy?
      </>
    }
    description="Let's create engaging content that builds your brand and drives measurable business results."
    background="navy"
    buttons={[
      {
        href,
        text: "Schedule a Strategy Call",
        variant: "glass",
        size: "xl",
      },
    ]}
  />
);

export const DigitalMarketingCTA: FC<{ href?: string }> = ({
  href = "/contact",
}) => (
  <CTASection
    title={
      <>
        Ready to Transform Your
        <br />
        Digital Marketing Strategy?
      </>
    }
    description="Let's create a customized digital marketing strategy that drives growth and delivers measurable results for your business."
    background="navy"
    buttons={[
      {
        href,
        text: "Schedule a Strategy Call",
        variant: "cta2",
        size: "fluid",
        rounded: "full",
        showArrow: true,
      },
    ]}
  />
);

export const EmailMarketingCTA: FC<{ href?: string }> = ({
  href = "/contact",
}) => (
  <CTASection
    title={
      <>
        Ready to Transform Your
        <br />
        Email Marketing Strategy?
      </>
    }
    description="Let's create data-driven email campaigns that engage your audience and drive measurable results."
    background="navy"
    buttons={[
      {
        href,
        text: "Schedule a Strategy Call",
        variant: "cta2",
        size: "fluid",
        rounded: "full",
        showArrow: true,
      },
    ]}
  />
);
export const SocialMediaCTA: FC<{ href?: string }> = ({
  href = "/contact",
}) => (
  <CTASection
    title={
      <>
        Ready to Transform Your
        <br />
        Social Media Presence?
      </>
    }
    description="Let's create engaging social media strategies that build your brand and drive measurable results."
    background="navy"
    buttons={[
      {
        href,
        text: "Schedule a Strategy Call",
        variant: "cta2",
        size: "fluid",
        rounded: "full",
        showArrow: true,
      },
    ]}
  />
);

export const DigitalPresenceCTA: FC<{ href?: string }> = ({
  href = "/contact",
}) => (
  <CTASection
    title="Ready to Transform Your Digital Presence?"
    description="Let's discuss how we can help you achieve your business goals with our expert digital marketing solutions."
    background="gradient"
    buttons={[
      {
        href,
        text: "Get Started",
        variant: "white-action",
      },
      {
        href,
        text: "Schedule a Call",
        variant: "glass",
      },
    ]}
    className="border-t border-theme-neutral-800"
  />
);

export const ProjectCTA: FC<{ className?: string }> = ({ className }) => (
  <GradientCTA
    title="Ready to Achieve Similar Results?"
    description="Let's discuss how we can help transform your business with our proven strategies."
    buttons={[
      {
        text: "Start Your Project",
        href: "/contact",
        variant: "primary",
      },
      {
        text: "View More Case Studies",
        href: "/case-studies",
        variant: "secondary",
      },
    ]}
    className={className}
  />
);

export const ConsultationCTA2: FC<{ className?: string }> = ({ className }) => (
  <GradientCTA
    title="Transform Your Digital Strategy"
    description="Schedule a free consultation with our experts and discover your growth potential."
    buttons={[
      {
        text: "Book Consultation",
        href: "/consultation",
        variant: "primary",
      },
      {
        text: "Learn More",
        href: "/services",
        variant: "secondary",
      },
    ]}
    gradient="ocean"
    className={className}
  />
);

export const PartnershipCTA: FC<{ className?: string }> = ({ className }) => (
  <GradientCTA
    title="Let's Grow Together"
    description="Join our partner network and unlock new opportunities for collaboration and growth."
    buttons={[
      {
        text: "Become a Partner",
        href: "/partners",
        variant: "primary",
      },
      {
        text: "Partner Benefits",
        href: "/partner-program",
        variant: "secondary",
      },
    ]}
    gradient="rose"
    className={className}
  />
);

export const DemoCTA: FC<{ className?: string }> = ({ className }) => (
  <GradientCTA
    title="See Our Platform in Action"
    description="Watch a personalized demo of our digital marketing solutions tailored to your needs."
    buttons={[
      {
        text: "Request Demo",
        href: "/demo",
        variant: "primary",
      },
      {
        text: "Watch Overview",
        href: "/platform",
        variant: "secondary",
      },
    ]}
    gradient="sunset"
    className={className}
  />
);

export const ContactCTA: FC<{ className?: string }> = ({ className }) => (
  <GradientCTA
    title="Ready to Get Started?"
    description="Join thousands of businesses already using our platform to grow
              their digital presence. Start your 14-day free trial today."
    buttons={[
      {
        text: "Start Free Trial",
        href: "/contact",
        variant: "primary",
      },
      {
        text: "Contact Sales",
        href: "/contact",
        variant: "secondary",
      },
    ]}
    gradient="purple"
    className={className}
  />
);
