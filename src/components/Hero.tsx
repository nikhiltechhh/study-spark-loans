import { ArrowRight, Globe2, BookOpen, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  const features = [
    {
      icon: Globe2,
      title: "Global Universities",
      description: "Access to 500+ partner institutions worldwide",
    },
    {
      icon: BookOpen,
      title: "Expert Guidance",
      description: "Personalized counseling from experienced advisors",
    },
    {
      icon: DollarSign,
      title: "Flexible Loans",
      description: "Education financing with competitive rates",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-gradient opacity-90 z-10" />
        <img
          src={heroImage}
          alt="International students celebrating"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                Your Gateway to International Education
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Future with{" "}
              <span className="text-accent">Global Education</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
              Expert guidance for studying abroad with comprehensive loan
              solutions. Make your dream of international education a reality
              with our end-to-end support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                Explore Loan Options
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  15K+
                </span>
                <span className="text-white/80 text-sm">
                  Students Placed
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  30+
                </span>
                <span className="text-white/80 text-sm">
                  Countries
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  98%
                </span>
                <span className="text-white/80 text-sm">
                  Success Rate
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-4 lg:space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/90 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
