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
    <section className="tw-py-20 tw-bg-gradient-to-b tw-from-background tw-to-muted/30">
      <div className="tw-container tw-mx-auto tw-px-6">
        <div className="tw-text-center tw-mb-16 tw-space-y-6">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-foreground">
            Tired of chasing commissions across 
            <span className="tw-block tw-text-destructive">multiple insurers?</span>
          </h2>
          <p className="tw-text-xl tw-text-muted-foreground tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
            Insurance brokers face countless challenges that slow down growth and impact profitability.
          </p>
        </div>

        <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-mb-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="tw-group tw-p-8 tw-bg-card tw-rounded-xl tw-border tw-border-border/50 hover:tw-border-destructive/30 hover:tw-shadow-lg tw-transition-all tw-duration-300">
              <div className="tw-flex tw-items-start tw-gap-4">
                <div className="tw-flex-shrink-0 tw-p-3 tw-bg-destructive/10 tw-rounded-lg group-hover:tw-bg-destructive/20 tw-transition-colors">
                  <challenge.icon className="tw-h-6 tw-w-6 tw-text-destructive" />
                </div>
                <p className="tw-text-foreground tw-font-medium tw-leading-relaxed">
                  {challenge.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="tw-text-center">
          <div className="tw-inline-flex tw-items-center tw-gap-3 tw-px-8 tw-py-4 tw-bg-primary/10 tw-rounded-full tw-border tw-border-primary/20">
            <AlertTriangle className="tw-h-5 tw-w-5 tw-text-primary" />
            <p className="tw-text-lg tw-font-semibold tw-text-primary">
              It's time to replace spreadsheets and guesswork with automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};