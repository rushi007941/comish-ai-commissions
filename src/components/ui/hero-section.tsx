import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export const HeroSection = () => {
  return (
    <section className="tw-relative tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-bg-gradient-to-br tw-from-background tw-via-accent/30 tw-to-primary/5 tw-overflow-hidden">
      {/* Background Elements */}
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_30%_20%,hsl(217_91%_35%_/_0.1),transparent)] tw-pointer-events-none" />
      <div className="tw-absolute tw-inset-0 tw-bg-[radial-gradient(circle_at_70%_80%,hsl(217_91%_50%_/_0.05),transparent)] tw-pointer-events-none" />
      
      <div className="tw-container tw-mx-auto tw-px-6 tw-py-20 tw-relative tw-z-10">
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
          {/* Content */}
          <div className="tw-space-y-8">
            <div className="tw-space-y-6">
              <h1 className="tw-text-5xl lg:tw-text-6xl tw-font-bold tw-leading-tight">
                Take Control of Your 
                <span className="tw-block tw-text-primary">Commissions</span>
                <span className="tw-block">with Comish.AI</span>
              </h1>
              <p className="tw-text-xl tw-text-muted-foreground tw-leading-relaxed tw-max-w-2xl">
                The all-in-one platform for insurance brokers to track commissions, 
                reconcile policies, and grow faster with zero manual hassle.
              </p>
            </div>
            
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4">
              <Button size="lg" className="tw-group tw-text-lg tw-px-8 tw-py-6 tw-shadow-lg hover:tw-shadow-xl tw-transform hover:tw--translate-y-1 tw-transition-all">
                Book a Demo
                <Play className="tw-ml-2 tw-h-5 tw-w-5 group-hover:tw-scale-110 tw-transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="tw-group tw-text-lg tw-px-8 tw-py-6 tw-border-2 hover:tw-bg-primary/5">
                Get Started Free
                <ArrowRight className="tw-ml-2 tw-h-5 tw-w-5 group-hover:tw-translate-x-1 tw-transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="tw-pt-8 tw-border-t tw-border-border/50">
              <p className="tw-text-sm tw-text-muted-foreground tw-mb-4">Trusted by insurance brokers nationwide</p>
              <div className="tw-flex tw-items-center tw-gap-8 tw-opacity-60">
                <div className="tw-text-xs tw-font-semibold tw-px-3 tw-py-1 tw-bg-primary/10 tw-rounded-full">500+ Brokers</div>
                <div className="tw-text-xs tw-font-semibold tw-px-3 tw-py-1 tw-bg-primary/10 tw-rounded-full">₹100Cr+ Tracked</div>
                <div className="tw-text-xs tw-font-semibold tw-px-3 tw-py-1 tw-bg-primary/10 tw-rounded-full">99.9% Accuracy</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="tw-relative">
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-tr tw-from-primary/20 tw-to-transparent tw-rounded-2xl tw-transform tw-rotate-3" />
            <div className="tw-relative tw-bg-white tw-rounded-2xl tw-shadow-2xl tw-overflow-hidden tw-transform tw--rotate-1 hover:tw-rotate-0 tw-transition-transform tw-duration-500">
              <img 
                src={heroImage} 
                alt="Comish.AI Dashboard showing commission tracking interface"
                className="tw-w-full tw-h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};