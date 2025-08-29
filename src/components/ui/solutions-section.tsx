import { BarChart3, Shield, Calculator, Database, TrendingUp, Zap } from "lucide-react";
import mockupComplete from "@/assets/mockup-complete.jpg";

const solutions = [
  {
    icon: BarChart3,
    title: "Multi-Company Tracking",
    description: "Compare commission % changes across insurers in real-time."
  },
  {
    icon: Shield,
    title: "Unified Policy Dashboard",
    description: "Manage & track all customer policies in one place."
  },
  {
    icon: TrendingUp,
    title: "Commission Monitoring",
    description: "Track month-end receivables with ease."
  },
  {
    icon: Calculator,
    title: "Automated Calculations",
    description: "No more manual errors – everything is auto-calculated."
  },
  {
    icon: Database,
    title: "Data Reconciliation",
    description: "Simplify reporting & close books faster."
  },
  {
    icon: Zap,
    title: "Real-Time Insights",
    description: "Get live data for better decision-making."
  }
];

export const SolutionsSection = () => {
  return (
    <section className="tw-py-20 tw-bg-gradient-to-b tw-from-muted/30 tw-to-background">
      <div className="tw-container tw-mx-auto tw-px-6">
        <div className="tw-text-center tw-mb-16 tw-space-y-6">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-bold">
            How <span className="tw-text-primary">Comish.AI</span> Solves Your Problems
          </h2>
          <p className="tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
            A smarter way to manage brokerage operations in one platform.
          </p>
        </div>

        <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="tw-group tw-p-8 tw-bg-card tw-rounded-xl tw-border tw-border-border/50 hover:tw-border-primary/30 hover:tw-shadow-xl tw-transition-all tw-duration-300 hover:tw--translate-y-2">
              <div className="tw-space-y-4">
                <div className="tw-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-bg-primary/10 tw-rounded-xl group-hover:tw-bg-primary/20 tw-transition-colors">
                  <solution.icon className="tw-h-8 tw-w-8 tw-text-primary" />
                </div>
                <h3 className="tw-text-xl tw-font-bold tw-text-foreground group-hover:tw-text-primary tw-transition-colors">
                  {solution.title}
                </h3>
                <p className="tw-text-muted-foreground tw-leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="tw-mt-16 tw-text-center">
          <div className="tw-max-w-4xl tw-mx-auto">
            <div className="tw-bg-card tw-rounded-2xl tw-border tw-border-border/50 hover:tw-border-primary/30 hover:tw-shadow-2xl tw-transition-all tw-duration-500 tw-overflow-hidden">
              <img 
                src={mockupComplete} 
                alt="Comish.AI Platform Screenshot"
                className="tw-w-full tw-h-auto tw-object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};