import { Brain, Heart, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Enhanced Comfort",
    description: "Experience extended screen time without the usual strain, headaches, or dry eyes.",
  },
  {
    icon: Brain,
    title: "Better Focus",
    description: "Stay productive longer with optimized lighting that keeps you alert and concentrated.",
  },
  {
    icon: Shield,
    title: "Eye Health Protection",
    description: "Proactive prevention of long-term eye damage from excessive screen exposure.",
  },
  {
    icon: Sparkles,
    title: "Seamless Integration",
    description: "Lightweight design that clips effortlessly to any glasses without compromising style.",
  },
];

const Benefits = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="text-gradient">EyeZen</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            More than a device—it's your personal eye care companion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.15}s backwards`,
              }}
            >
              <div className="relative bg-card rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 border border-border/50 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
