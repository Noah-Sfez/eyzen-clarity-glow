import { Eye, Lightbulb, Zap } from "lucide-react";

const steps = [
  {
    icon: Eye,
    title: "Detects Eye Strain",
    description: "Advanced sensors continuously monitor your eye movement and blinking patterns to detect early signs of fatigue.",
  },
  {
    icon: Zap,
    title: "Smart Analysis",
    description: "Powered algorithms analyze your visual behavior in real-time, learning your unique patterns and preferences.",
  },
  {
    icon: Lightbulb,
    title: "Adaptive Response",
    description: "Instantly adjusts screen brightness and suggests optimal breaks, creating a personalized eye care experience.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How <span className="text-gradient">EyeZen</span> Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Advanced technology that understands your eyes and adapts to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.2}s backwards`,
              }}
            >
              {/* Connecting line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative bg-card rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
