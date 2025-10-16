import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const features = [
  "30-day money-back guarantee",
  "Free shipping worldwide",
  "Compatible with all glasses",
  "1-year warranty included",
];

const CallToAction = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-[3rem] p-12 md:p-16 shadow-2xl border border-border/50 text-center">
            <div className="space-y-6 mb-10">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Join the <span className="text-gradient">EyeZen Experience</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Take the first step towards healthier, happier eyes. 
                Over 50,000 people have already made the switch.
              </p>
            </div>
            
            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-left"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg font-semibold glow-on-hover"
              >
                Pre-Order Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-10 py-7 text-lg font-semibold border-2"
              >
                Learn More
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-10 pt-10 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Trusted by professionals at leading companies worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
