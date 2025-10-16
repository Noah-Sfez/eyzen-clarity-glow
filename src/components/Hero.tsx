import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lunettes-decore.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img src={logo} alt="EyeZen Logo" className="h-12 w-auto" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Innovation for Your Eyes
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              See Better.
              <br />
              <span className="text-gradient">Feel Better.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Revolutionary clip-on device that attaches to your glasses, 
              using advanced sensors and adaptive lighting to prevent eye fatigue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium glow-on-hover"
              >
                Discover EyeZen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg font-medium border-2"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">94%</div>
                <div className="text-sm text-muted-foreground">Less Fatigue</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
          
          {/* Product image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
            <img 
              src={heroImage} 
              alt="EyeZen clip-on device on glasses" 
              className="relative w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
