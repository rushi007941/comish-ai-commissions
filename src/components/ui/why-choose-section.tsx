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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="group flex gap-6 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {/* Stats Card */}
            <div className="p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Platform Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-primary-foreground/80">Active Brokers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">₹100Cr+</div>
                  <div className="text-primary-foreground/80">Commissions Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-primary-foreground/80">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-primary-foreground/80">Support</div>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="p-8 bg-card rounded-2xl border border-border/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">RK</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Rajesh Kumar</h4>
                  <p className="text-sm text-muted-foreground">Senior Insurance Broker</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "Comish.AI transformed our operations completely. What used to take us 3 days now takes 30 minutes. 
                The accuracy and time savings are incredible!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};