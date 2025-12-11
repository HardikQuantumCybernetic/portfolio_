import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    content: "Hardik delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made our vision come to life.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Business Owner",
    content: "Working with Hardik was a fantastic experience. He understood our requirements perfectly and delivered on time with excellent quality.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Restaurant Manager",
    content: "The dental clinic website Hardik built for us has significantly improved our online presence. Highly recommend his services!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-gradient">What Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Feedback from people I've had the pleasure of working with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass hover:glow-box transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
