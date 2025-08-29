import { Button } from "@/components/ui/button";
import { Calendar, Rocket, CheckCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.05),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Ready to Grow Your Brokerage
            <span className="block">with Comish.AI?</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful insurance brokers who have already transformed their operations.
            Start your journey to effortless commission management today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="group text-lg px-10 py-6 bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Schedule a Demo
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group text-lg px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              <Rocket className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Get Started Free Today
            </Button>
          </div>

          <div className="pt-12 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>24/7 support included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};