import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/30 to-primary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(217_91%_35%_/_0.1),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(217_91%_50%_/_0.05),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Take Control of Your 
                <span className="block text-primary">Commissions</span>
                <span className="block">with Comish.AI</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                The all-in-one platform for insurance brokers to track commissions, 
                reconcile policies, and grow faster with zero manual hassle.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                Book a Demo
                <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group text-lg px-8 py-6 border-2 hover:bg-primary/5">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by insurance brokers nationwide</p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="text-xs font-semibold px-3 py-1 bg-primary/10 rounded-full">500+ Brokers</div>
                <div className="text-xs font-semibold px-3 py-1 bg-primary/10 rounded-full">₹100Cr+ Tracked</div>
                <div className="text-xs font-semibold px-3 py-1 bg-primary/10 rounded-full">99.9% Accuracy</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3" />
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Comish.AI Dashboard showing commission tracking interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};