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
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How <span className="text-primary">Comish.AI</span> Solves Your Problems
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A smarter way to manage brokerage operations in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group p-8 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <img 
                src={mockupComplete} 
                alt="Comish.AI Platform Screenshot"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};