import { ArrowRight, Leaf, Award, Users, Clock, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { QuoteForm } from "../components/QuoteForm";

export function Home() {
  const services = [
    {
      title: "Lawn Care",
      description: "Professional mowing, edging, and maintenance to keep your lawn looking pristine year-round.",
      icon: Leaf,
    },
    {
      title: "Landscaping",
      description: "Custom landscape design and installation that transforms your outdoor space into a beautiful oasis.",
      icon: Award,
    },
    {
      title: "Garden & Planting",
      description: "Expert plant selection and garden design to create vibrant, thriving outdoor environments.",
      icon: Users,
    },
    {
      title: "Seasonal Maintenance",
      description: "Year-round care including spring cleanups, fall leaf removal, and winter preparation.",
      icon: Clock,
    },
  ];

  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote-form");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1759412393800-0ac06909423a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYW5kc2NhcGUlMjBkZXNpZ24lMjBiYWNreWFyZHxlbnwxfHx8fDE3NzQ1MDIyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F4D3B]/80 to-[#1F4D3B]/40" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-2 bg-[#A3BFA8]/30 backdrop-blur-sm rounded-full text-[#F5F2E9] mb-6">
              <span className="text-sm">Premium Landscaping Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#F5F2E9] mb-6 leading-tight">
              Transform Your Outdoor Space with Blade & Bloom
            </h1>
            <p className="text-lg md:text-xl text-[#F5F2E9]/90 mb-8 leading-relaxed">
              Professional landscaping and lawn care services that bring your outdoor vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToQuote}
                className="px-8 py-4 bg-[#F5F2E9] text-[#1F4D3B] rounded-full hover:bg-white transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-[#F5F2E9] text-[#F5F2E9] rounded-full hover:bg-[#F5F2E9] hover:text-[#1F4D3B] transition-all flex items-center justify-center gap-2"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#A3BFA8] uppercase tracking-wider text-sm mb-4 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl text-[#1F4D3B] mb-4">
              Our Services
            </h2>
            <p className="text-[#2A2A2A]/70 text-lg max-w-2xl mx-auto">
              Comprehensive landscaping solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-[#A3BFA8]/20"
              >
                <div className="w-14 h-14 rounded-full bg-[#A3BFA8]/20 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#1F4D3B]" />
                </div>
                <h3 className="text-xl text-[#1F4D3B] mb-3">{service.title}</h3>
                <p className="text-[#2A2A2A]/70 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-[#1F4D3B] text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1F4D3B] to-[#163A2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-[#F5F2E9] mb-6">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-[#A3BFA8] text-lg mb-8">
            Get a free, no-obligation quote today and let's bring your vision to life.
          </p>
          <button
            onClick={scrollToQuote}
            className="px-8 py-4 bg-[#F5F2E9] text-[#1F4D3B] rounded-full hover:bg-white transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
          >
            Request Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}