import { MadeWithDyad } from "@/components/made-with-dyad";
import { Rocket, ShieldCheck, BarChart2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Lightning Fast",
      description: "Our platform delivers unmatched speed and performance."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security to protect your data."
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-primary" />,
      title: "Actionable Insights",
      description: "Get valuable analytics to grow your business."
    }
  ];

  const testimonials = [
    {
      quote: "This product transformed our workflow completely. Highly recommended!",
      author: "Sarah Johnson, CEO at TechCorp"
    },
    {
      quote: "The best solution we've found for our needs. Incredible value.",
      author: "Michael Chen, CTO at InnovateX"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Transform Your Business Today</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The all-in-one platform to streamline your operations and boost productivity.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background p-8 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-secondary/10 p-8 rounded-lg">
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <p className="font-medium text-muted-foreground">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers today.
          </p>
          <Button variant="secondary" size="lg" className="text-primary">
            Sign Up Now
          </Button>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;