import { AlertTriangle, TrendingDown, Clock, FileX, DollarSign, Calendar, FileSpreadsheet } from "lucide-react";

const challenges = [
  {
    icon: FileSpreadsheet,
    text: "Scattered data across different insurers makes tracking difficult"
  },
  {
    icon: Clock,
    text: "Manual reconciliation consumes hours every month"
  },
  {
    icon: TrendingDown,
    text: "Policy tracking across multiple companies is inefficient"
  },
  {
    icon: AlertTriangle,
    text: "Commission errors lead to revenue leakage and loss of trust"
  },
  {
    icon: DollarSign,
    text: "Delayed commission payments affect cash flow"
  },
  {
    icon: FileX,
    text: "Work with different commission excel formats of Insurance companies"
  }
];

export const ChallengesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Tired of chasing commissions across 
            <span className="block text-destructive">multiple insurers?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Insurance brokers face countless challenges that slow down growth and impact profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="group p-8 bg-card rounded-xl border border-border/50 hover:border-destructive/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
                  <challenge.icon className="h-6 w-6 text-destructive" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {challenge.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 rounded-full border border-primary/20">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <p className="text-lg font-semibold text-primary">
              It's time to replace spreadsheets and guesswork with automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};