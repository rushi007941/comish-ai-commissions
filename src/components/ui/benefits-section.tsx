import { Banknote, Rocket, CheckCircle, Heart } from "lucide-react";

const benefits = [
  {
    icon: Banknote,
    title: "Save Big",
    description: "No more reconciliation delays and errors.",
    highlight: "Save 40+ hours monthly"
  },
  {
    icon: Rocket,
    title: "Grow Faster",
    description: "Reports in minutes instead of days.",
    highlight: "10x faster reporting"
  },
  {
    icon: CheckCircle,
    title: "Accuracy & Efficiency",
    description: "Minimize errors and streamline workflows.",
    highlight: "99.9% accuracy rate"
  },
  {
    icon: Heart,
    title: "Happy Clients",
    description: "Deliver timely, accurate service to retain more customers.",
    highlight: "95% client satisfaction"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Key Benefits of <span className="text-primary">Comish.AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your brokerage operations and unlock unprecedented growth potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center space-y-6 p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mx-auto group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-10 w-10 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                  {benefit.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 p-6 bg-gradient-to-r from-primary to-primary/80 rounded-2xl text-white">
            <div className="text-left">
              <p className="text-lg font-semibold">Ready to see these benefits in action?</p>
              <p className="text-primary-foreground/80">Join hundreds of successful brokers</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">₹10L+</div>
              <div className="text-sm text-primary-foreground/80">Average annual savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};