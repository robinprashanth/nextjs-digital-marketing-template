import { FC } from "react";
import { motion } from "motion/react";
import { Share2, Globe, Shield, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StatCardProps {
  icon: typeof Globe;
  value: string;
  label: string;
}

const StatCard: FC<StatCardProps> = ({ icon: Icon, value, label }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
    <div className="absolute bottom-0 left-0 right-0 top-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    <div className="relative z-10 flex flex-col">
      <div className="mb-3">
        <Icon className="h-6 w-6 text-purple-400" />
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  </div>
);

const PartnersHero: FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-background pb-20 pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1),transparent)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent)] opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgb(17,17,17))]" />

      {/* Animated Dots */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-purple-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative mx-auto px-4">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 backdrop-blur-sm">
            <Share2 className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">
              Partner Ecosystem
            </span>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="space-y-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              <div>Building</div>
              <div>
                the{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Future
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
              <Button variant="action" size="lg-rounded">
                Become a Partner
              </Button>
              <Button
                variant="action"
                size="lg-rounded"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Partner Directory
              </Button>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <StatCard icon={Globe} value="200+" label="Global Partners" />
            <StatCard icon={Share2} value="50M+" label="Revenue Generated" />
            <StatCard icon={Shield} value="15+" label="Integration Platforms" />
            <StatCard icon={Network} value="98%" label="Partner Satisfaction" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnersHero;
