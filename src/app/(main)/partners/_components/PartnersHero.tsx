import { FC } from "react";
import { motion } from "motion/react";
import { Share2, Globe, Shield, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface StatCardProps {
  icon: typeof Globe;
  value: string;
  label: string;
}

const StatCard: FC<StatCardProps> = ({ icon: Icon, value, label }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-theme-primary-500/5 opacity-0 transition-all duration-500 group-hover:opacity-100" />
    <div className="relative z-10 flex flex-col">
      <div className="mb-3">
        <Icon className="h-6 w-6 text-theme-primary-400" />
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  </div>
);

const PartnersHero: FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,#2C0B4F,#1A0B2E)] pb-20 pt-32">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.15),transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-theme-primary-500/20 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-1/4 top-3/4 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-theme-primary-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="container relative mx-auto px-4">
        <ScrollInView className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-theme-primary-500/20 bg-theme-primary-500/10 px-4 py-2 backdrop-blur-sm">
            <Share2 className="h-4 w-4 text-theme-primary-400" />
            <span className="text-sm font-medium text-theme-primary-400">
              Partner Ecosystem
            </span>
          </div>
        </ScrollInView>

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollInView delay={0.2} className="space-y-8">
            <h1 className="space-y-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              <div>Building</div>
              <div>
                the{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
                    Future
                  </span>
                  <motion.span 
                    className="absolute -inset-1 -z-10 block rounded-lg bg-theme-primary-500/20 blur-xl"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </div>
              <div>Together</div>
            </h1>

            <p className="text-lg text-white/70">
              Join our ecosystem of innovators and market leaders. Together,
              we&apos;re shaping the future of digital marketing through
              cutting-edge technology and strategic partnerships.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="action" 
                size="lg-rounded"
                className="bg-gradient-to-r from-theme-primary-500 to-theme-primary-600 hover:from-theme-primary-600 hover:to-theme-primary-700"
              >
                Become a Partner
              </Button>
              <Button
                variant="action"
                size="lg-rounded"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-theme-primary-500/20"
              >
                Partner Directory
              </Button>
            </div>
          </ScrollInView>

          <ScrollInView delay={0.4} className="grid grid-cols-2 gap-4">
            <StatCard icon={Globe} value="200+" label="Global Partners" />
            <StatCard icon={Share2} value="50M+" label="Revenue Generated" />
            <StatCard icon={Shield} value="15+" label="Integration Platforms" />
            <StatCard icon={Network} value="98%" label="Partner Satisfaction" />
          </ScrollInView>
        </div>
      </div>
    </div>
  );
};

export default PartnersHero;