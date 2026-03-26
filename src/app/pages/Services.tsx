import { Scissors, TreeDeciduous, Flower2, CloudSun, CheckCircle } from "lucide-react";
import { QuoteForm } from "../components/QuoteForm";

export function Services() {
  const services = [
    {
      title: "Lawn Care",
      icon: Scissors,
      description: "Maintain a healthy, lush lawn with our comprehensive care services.",
      image: "https://images.unsplash.com/photo-1767328796803-756a72608d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXduJTIwY2FyZSUyMGdyZWVufGVufDF8fHx8MTc3NDUwMjIzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Professional mowing and edging",
        "Fertilization and weed control",
        "Aeration and overseeding",
        "Soil testing and pH balancing",
        "Disease and pest management",
      ],
    },
    {
      title: "Landscaping",
      icon: TreeDeciduous,
      description: "Transform your property with custom landscape design and installation.",
      image: "https://images.unsplash.com/photo-1629366865050-c4e33ffc9799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjB0cmFuc2Zvcm1hdGlvbiUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc3NDUwMjIzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Custom landscape design",
        "Hardscape installation (patios, walkways)",
        "Retaining walls and borders",
        "Outdoor lighting systems",
        "Water features and irrigation",
      ],
    },
    {
      title: "Garden & Planting",
      icon: Flower2,
      description: "Create vibrant gardens with expert plant selection and care.",
      image: "https://images.unsplash.com/photo-1762286769757-4367cbd54eb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudGluZyUyMGZsb3dlcnMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzQ1MDIyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Flower bed design and installation",
        "Perennial and annual planting",
        "Shrub and tree installation",
        "Mulching and edging",
        "Garden maintenance and care",
      ],
    },
    {
      title: "Seasonal Maintenance",
      icon: CloudSun,
      description: "Year-round care to keep your landscape looking its best in every season.",
      image: "https://images.unsplash.com/photo-1766177122141-f4d2b80aef2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMGxhbmRzY2FwZSUyMG1haW50ZW5hbmNlJTIwYXV0dW1ufGVufDF8fHx8MTc3NDUwMjIzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Spring cleanup and preparation",
        "Summer watering and maintenance",
        "Fall leaf removal and cleanup",
        "Winter protection and snow removal",
        "Seasonal pruning and trimming",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1F4D3B] to-[#163A2C]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#A3BFA8] uppercase tracking-wider text-sm mb-4 block">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-6xl text-[#F5F2E9] mb-6">
            Our Services
          </h1>
          <p className="text-[#A3BFA8] text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive landscaping solutions designed to bring out the natural beauty of your property
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-full bg-[#A3BFA8]/20 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#1F4D3B]" />
                </div>
                <h2 className="text-3xl md:text-4xl text-[#1F4D3B] mb-4">
                  {service.title}
                </h2>
                <p className="text-[#2A2A2A]/70 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#1F4D3B] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2A2A2A]">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const quoteSection = document.getElementById("quote-form");
                    if (quoteSection) {
                      quoteSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="mt-8 px-8 py-3 bg-[#1F4D3B] text-[#F5F2E9] rounded-full hover:bg-[#163A2C] transition-colors"
                >
                  Request a Quote
                </button>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>
          ))}
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