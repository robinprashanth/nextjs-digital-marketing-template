import {
  CertificationsCTA,
  ConsultationCTA,
  ContentStrategyCTA,
  CustomSolutionCTA,
  DigitalMarketingCTA,
  DigitalPresenceCTA,
  EmailMarketingCTA,
  JoinTeamCTA,
  TeamCollaborationCTA,
} from "@/components/cta/Presets";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { FC } from "react";

const CTAPage: FC = () => {
  return (
    <div className="container relative mx-auto px-4 py-24 sm:px-6">
      {/* Page Header */}
      <ScrollInView>
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Call-to-Action Components</h1>
          <p className="text-lg text-muted-foreground">
            A collection of CTA components used throughout the application.
          </p>
        </div>
      </ScrollInView>

      {/* Card CTAs */}
      <section className="space-y-8">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Card CTAs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-medium">Join Team CTA</h3>
              <JoinTeamCTA />
              <div className="mt-4 rounded-lg border border-border p-4">
                <pre className="text-sm">
                  <code>{`import { JoinTeamCTA } from '@/components/cta';

<JoinTeamCTA />
// or with custom path
<JoinTeamCTA path="/careers" />`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Custom Solution CTA</h3>
              <CustomSolutionCTA />
              <div className="mt-4 rounded-lg border border-border p-4">
                <pre className="text-sm">
                  <code>{`import { CustomSolutionCTA } from '@/components/cta';

<CustomSolutionCTA />
// or with custom path
<CustomSolutionCTA path="/contact-sales" />`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Certifications CTA</h3>
              <CertificationsCTA />
              <div className="mt-4 rounded-lg border border-border p-4">
                <pre className="text-sm">
                  <code>{`import { CertificationsCTA } from '@/components/cta';

<CertificationsCTA />
// or with custom path
<CertificationsCTA path="/about/certifications" />`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Consultation CTA</h3>
              <ConsultationCTA />
              <div className="mt-4 rounded-lg border border-border p-4">
                <pre className="text-sm">
                  <code>{`import { ConsultationCTA } from '@/components/cta';

<ConsultationCTA />
// or with custom path
<ConsultationCTA path="/schedule-consultation" />`}</code>
                </pre>
              </div>
            </div>
          </div>
        </ScrollInView>
      </section>

      {/* Section CTAs */}
      <section className="space-y-8">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Section CTAs</h2>
          <div className="space-y-16">
            <div>
              <h3 className="mb-4 text-xl font-medium">
                Team Collaboration CTA
              </h3>
              <TeamCollaborationCTA />
              <div className="mt-4 rounded-lg border border-border p-4">
                <pre className="text-sm">
                  <code>{`import { TeamCollaborationCTA } from '@/components/cta';

<TeamCollaborationCTA />
// or with custom path
<TeamCollaborationCTA href="/contact" />`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Content Strategy CTA</h3>
              <ContentStrategyCTA />
              <div className="mt-4 rounded-lg border border-border p-4">
                <pre className="text-sm">
                  <code>{`import { ContentStrategyCTA } from '@/components/cta';

<ContentStrategyCTA />
// or with custom path
<ContentStrategyCTA href="/content-strategy" />`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">
                Digital Marketing CTA
              </h3>
              <DigitalMarketingCTA />
              <div className="mt-4 rounded-lg border border-border p-4">
                <pre className="text-sm">
                  <code>{`import { DigitalMarketingCTA } from '@/components/cta';

<DigitalMarketingCTA />
// or with custom path
<DigitalMarketingCTA href="/digital-marketing" />`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Email Marketing CTA</h3>
              <EmailMarketingCTA />
              <div className="mt-4 rounded-lg border border-border p-4">
                <pre className="text-sm">
                  <code>{`import { EmailMarketingCTA } from '@/components/cta';

<EmailMarketingCTA />
// or with custom path
<EmailMarketingCTA href="/email-marketing" />`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Digital Presence CTA</h3>
              <DigitalPresenceCTA />
              <div className="mt-4 rounded-lg border border-border p-4">
                <pre className="text-sm">
                  <code>{`import { DigitalPresenceCTA } from '@/components/cta';

<DigitalPresenceCTA />
// or with custom path
<DigitalPresenceCTA href="/transform-digital-presence" />`}</code>
                </pre>
              </div>
            </div>
          </div>
        </ScrollInView>
      </section>

      {/* Custom Usage */}
      <section>
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Custom Usage</h2>
          <div className="rounded-lg border border-border p-4">
            <pre className="text-sm">
              <code>{`import { CTACard, CTASection } from '@/components/cta';

// Card CTA
<CTACard
  title="Custom Title"
  description="Custom description"
  buttonText="Custom Button"
  path="/custom-path"
  showArrow
  variant="custom"
/>

// Section CTA
<CTASection
  title="Custom Section Title"
  description="Custom section description"
  background="navy"
  buttons={[
    {
      href: "/custom-path",
      text: "Primary Button",
      variant: "glass",
      size: "xl"
    },
    {
      href: "/another-path",
      text: "Secondary Button",
      variant: "outline"
    }
  ]}
/>`}</code>
            </pre>
          </div>
        </ScrollInView>
      </section>
    </div>
  );
};

export default CTAPage;
