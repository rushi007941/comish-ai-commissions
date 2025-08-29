import { Button } from "@/components/ui/button";
import { Calendar, Rocket, CheckCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="tw-py-20 tw-bg-gradient-to-r tw-from-primary tw-via-primary/90 tw-to-primary tw-text-white tw-relative tw-overflow-hidden">
      {/* Background Elements */}
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent)]" />
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.05),transparent)]" />
      
      <div className="tw-container tw-mx-auto tw-px-6 tw-relative tw-z-10">
        <div className="tw-text-center tw-space-y-8">
          <h2 className="tw-text-4xl lg:tw-text-6xl tw-font-bold tw-leading-tight">
            Ready to Grow Your Brokerage
            <span className="tw-block">with Comish.AI?</span>
          </h2>
          
          <p className="tw-text-xl tw-text-primary-foreground/90 tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
            Join hundreds of successful insurance brokers who have already transformed their operations.
            Start your journey to effortless commission management today.
          </p>

          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-6 tw-justify-center tw-items-center tw-pt-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="tw-group tw-text-lg tw-px-10 tw-py-6 tw-bg-white tw-text-primary hover:tw-bg-white/90 tw-shadow-xl hover:tw-shadow-2xl tw-transform hover:tw--translate-y-1 tw-transition-all"
            >
              <Calendar className="tw-mr-3 tw-h-6 tw-w-6 group-hover:tw-scale-110 tw-transition-transform" />
              Schedule a Demo
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="tw-group tw-text-lg tw-px-10 tw-py-6 tw-border-2 tw-border-white tw-text-white hover:tw-bg-white hover:tw-text-primary tw-shadow-xl hover:tw-shadow-2xl tw-transform hover:tw--translate-y-1 tw-transition-all"
            >
              <Rocket className="tw-mr-3 tw-h-6 tw-w-6 group-hover:tw-scale-110 tw-transition-transform" />
              Get Started Free Today
            </Button>
          </div>

          <div className="tw-pt-12 tw-border-t tw-border-white/20">
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center tw-gap-8 tw-text-sm">
              <div className="tw-flex tw-items-center tw-gap-2">
                <CheckCircle className="tw-h-5 tw-w-5" />
                <span>No setup fees</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-2">
                <CheckCircle className="tw-h-5 tw-w-5" />
                <span>30-day free trial</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-2">
                <CheckCircle className="tw-h-5 tw-w-5" />
                <span>24/7 support included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};