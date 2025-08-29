import { Target, Zap, Eye, Trophy } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Built for insurance brokers, not generic CRMs",
    description: "Purpose-built for the unique needs of insurance brokerage operations."
  },
  {
    icon: Zap,
    title: "Designed to eliminate manual work & boost revenue collection",
    description: "Automate tedious tasks and focus on what matters - growing your business."
  },
  {
    icon: Eye,
    title: "Provides transparency & real-time visibility into commissions",
    description: "Never lose track of your earnings with complete visibility across all insurers."
  },
  {
    icon: Trophy,
    title: "Helps Insurance brokers stay ahead of competition",
    description: "Faster, smarter operations give you the competitive edge you need."
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="tw-py-20 tw-bg-gradient-to-b tw-from-background tw-to-muted/20">
      <div className="tw-container tw-mx-auto tw-px-6">
        <div className="tw-text-center tw-mb-16 tw-space-y-6">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-bold">
            Why Choose <span className="tw-text-primary">Comish.AI?</span>
          </h2>
          <p className="tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
            We understand the insurance brokerage industry because we built this platform specifically for you.
          </p>
        </div>

        <div className="tw-max-w-4xl tw-mx-auto">
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="tw-group tw-flex tw-gap-6 tw-p-8 tw-bg-card tw-rounded-xl tw-border tw-border-border/50 hover:tw-border-primary/30 hover:tw-shadow-xl tw-transition-all tw-duration-300 hover:tw--translate-y-2">
                <div className="tw-flex-shrink-0 tw-w-16 tw-h-16 tw-bg-primary/10 tw-rounded-xl tw-flex tw-items-center tw-justify-center group-hover:tw-bg-primary/20 tw-transition-colors">
                  <reason.icon className="tw-h-8 tw-w-8 tw-text-primary" />
                </div>
                <div className="tw-space-y-3">
                  <h3 className="tw-text-xl tw-font-bold tw-text-foreground group-hover:tw-text-primary tw-transition-colors">
                    {reason.title}
                  </h3>
                  <p className="tw-text-muted-foreground tw-leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};