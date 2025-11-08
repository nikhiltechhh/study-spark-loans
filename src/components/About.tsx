import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import patternBg from "@/assets/pattern-bg.png";
import collaborationImg from "@/assets/collaboration.jpg";
import missionImg from "@/assets/mission.jpg";
import globalNetworkImg from "@/assets/global-network.jpg";
import counselingImg from "@/assets/counseling.jpg";
import visaImg from "@/assets/visa.jpg";
import loanImg from "@/assets/loan.jpg";
import scholarshipImg from "@/assets/scholarship.jpg";
import departureImg from "@/assets/departure.jpg";

const About = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            // Stop observing this element once it's animated
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const services = [
    {
      image: globalNetworkImg,
      title: "Global University Network",
      description: "Access to 500+ partner universities across 25+ countries worldwide with guaranteed admissions support.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      image: counselingImg,
      title: "1-on-1 Expert Counseling",
      description: "Personalized guidance from certified counselors with 10+ years of experience in international education.",
      color: "from-purple-500 to-pink-500",
    },
    {
      image: visaImg,
      title: "End-to-End Visa Assistance",
      description: "98% visa success rate with complete documentation support and mock interview preparation.",
      color: "from-orange-500 to-red-500",
    },
    {
      image: loanImg,
      title: "Education Loan Support",
      description: "Tie-ups with 20+ banks for hassle-free education loans with competitive interest rates.",
      color: "from-green-500 to-emerald-500",
    },
    {
      image: scholarshipImg,
      title: "Scholarship Guidance",
      description: "Expert assistance in securing scholarships worth up to $50,000 from top universities.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      image: departureImg,
      title: "Pre-Departure Support",
      description: "Complete orientation on accommodation, travel, culture, and settling in your destination country.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const whyChooseUs = [
    "Decade of proven track record in overseas education",
    "Partnerships with top-ranked global universities",
    "Transparent processes with no hidden charges",
    "Post-admission support for smooth transition",
    "Regular visa success rate updates",
    "Alumni network of 5000+ successful students",
  ];

  const processSteps = [
    { step: "01", title: "Initial Consultation", desc: "Free profile evaluation and goal setting" },
    { step: "02", title: "University Selection", desc: "Shortlist best-fit universities based on your profile" },
    { step: "03", title: "Application Process", desc: "Complete application and documentation support" },
    { step: "04", title: "Visa Guidance", desc: "End-to-end visa application assistance" },
    { step: "05", title: "Pre-Departure", desc: "Final preparation and travel arrangements" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Floating Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <img src={patternBg} alt="" className="w-full h-full object-cover animate-float" />
      </div>

      {/* Mission Statement with Image */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground bg-clip-text">
                Empowering Dreams Through Education
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                At <span className="font-bold text-foreground">Astro Overseas</span>, we guide students through studying abroad with personalized support, 
                expert advice on loans, admissions, and visa assistance, ensuring a smooth journey to success.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience and a proven track record, we've helped thousands of students 
                turn their international education dreams into reality.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Universities</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Visa Success</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">5000+</p>
                  <p className="text-sm text-muted-foreground">Alumni</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl group-hover:blur-[100px] transition-all duration-500 opacity-60" />
                <img 
                  src={missionImg} 
                  alt="Celebrating students"
                  className="relative rounded-3xl shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section id="services" className="py-12 lg:py-20 -mt-10 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-foreground">
              Comprehensive Services
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for your international education journey, all under one roof
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 animate-on-scroll opacity-0 translate-y-10 border-border bg-card overflow-hidden hover:scale-105 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-10`} />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {/* <div className="flex items-center text-sm text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-2 transition-transform" />
                  </div> */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="About" className="py-16 lg:py-20 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <img 
                  src={collaborationImg} 
                  alt="Students collaborating"
                  className="relative rounded-3xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                Why Choose Astro Overseas?
              </h2>
              <div className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <p className="text-base text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 lg:py-20 -mt-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-foreground">
              Your Journey With Us
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined 5-step process to make your study abroad dream a reality
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary" />
              
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative mb-10 lg:mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`flex flex-col lg:flex-row items-center gap-6 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex-1 w-full">
                      <Card className={`p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card border-border ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {step.desc}
                        </p>
                      </Card>
                    </div>
                    
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg hover:scale-125 transition-transform duration-300 z-10">
                        <span className="text-xl font-display font-bold text-white">{step.step}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 w-full lg:block hidden" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url(${patternBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5 text-primary-foreground">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Join thousands of students who have achieved their dreams with Astro Overseas. 
              Let's make your global education aspirations a reality today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => window.open("https://wa.me/447377778725", "_blank")}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 group font-semibold"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>

              <Button
                onClick={() => (window.location.href = "tel:+447377778725")}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-2xl transition-all duration-300 hover:scale-110 font-semibold"
              >
                Schedule Free Call
              </Button>

            </div>
            <p className="mt-6 text-primary-foreground/80 text-base">
              No obligations. Free consultation. Expert advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
