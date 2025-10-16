import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Developer",
    content: "EyeZen has completely transformed my workday. I used to get terrible headaches after coding for hours, but now I feel fresh even after long sessions.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Graphic Designer",
    content: "As a designer, my eyes are everything. EyeZen keeps them protected while I work on detailed projects. It's like having a personal eye care assistant.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Medical Student",
    content: "Studying late at night is no longer a problem. The adaptive lighting adjusts perfectly, and I've noticed significantly less eye strain. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Loved by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join our community of happy users protecting their vision
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.2}s backwards`,
              }}
            >
              <div className="bg-card rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                
                {/* Testimonial content */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author info */}
                <div className="border-t border-border/50 pt-6">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
