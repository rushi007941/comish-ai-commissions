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
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why Choose <span className="text-primary">Comish.AI?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We understand the insurance brokerage industry because we built this platform specifically for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="group flex gap-6 p-8 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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