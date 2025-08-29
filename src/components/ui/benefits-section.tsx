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
    <section className="tw-py-20 tw-bg-gradient-to-r tw-from-primary/5 tw-via-background tw-to-primary/5">
      <div className="tw-container tw-mx-auto tw-px-6">
        <div className="tw-text-center tw-mb-16 tw-space-y-6">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-bold">
            Key Benefits of <span className="tw-text-primary">Comish.AI</span>
          </h2>
          <p className="tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
            Transform your brokerage operations and unlock unprecedented growth potential.
          </p>
        </div>

        <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="tw-group tw-text-center tw-space-y-6 tw-p-8 tw-bg-card tw-rounded-2xl tw-border tw-border-border/50 hover:tw-border-primary/30 hover:tw-shadow-xl tw-transition-all tw-duration-300 hover:tw--translate-y-2">
              <div className="tw-flex tw-items-center tw-justify-center tw-w-20 tw-h-20 tw-bg-primary/10 tw-rounded-2xl tw-mx-auto group-hover:tw-bg-primary/20 tw-transition-colors">
                <benefit.icon className="tw-h-10 tw-w-10 tw-text-primary" />
              </div>
              
              <div className="tw-space-y-3">
                <h3 className="tw-text-2xl tw-font-bold tw-text-foreground group-hover:tw-text-primary tw-transition-colors">
                  {benefit.title}
                </h3>
                <p className="tw-text-muted-foreground tw-leading-relaxed">
                  {benefit.description}
                </p>
                <div className="tw-inline-block tw-px-3 tw-py-1 tw-bg-primary/10 tw-rounded-full tw-text-sm tw-font-semibold tw-text-primary">
                  {benefit.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};