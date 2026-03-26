import { Award, Users, Heart, Leaf, Target, Eye } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Nature",
      description: "We love what we do and it shows in every project. Our passion for creating beautiful outdoor spaces drives us to exceed expectations.",
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every detail matters. We take pride in delivering superior workmanship that stands the test of time.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen, communicate, and work collaboratively to bring your vision to life.",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "We're committed to sustainable practices that protect and enhance the natural environment.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1F4D3B] to-[#163A2C]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#A3BFA8] uppercase tracking-wider text-sm mb-4 block">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl text-[#F5F2E9] mb-6">
            Our Story
          </h1>
          <p className="text-[#A3BFA8] text-lg md:text-xl max-w-3xl mx-auto">
            Transforming outdoor spaces and creating lasting beauty
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl text-[#1F4D3B] mb-6">
                Growing Dreams, One Landscape at a Time
              </h2>
              <div className="space-y-4 text-[#2A2A2A]/70 text-lg leading-relaxed">
                <p>
                  Blade & Bloom was founded with a simple mission: to create beautiful, sustainable outdoor spaces that homeowners can enjoy for years to come.
                </p>
                <p>
                  What started as a small lawn care service has grown into a full-service landscaping company, but our core values remain the same. We believe that every outdoor space has the potential to become a natural sanctuary—a place where families gather, children play, and memories are made.
                </p>
                <p>
                  Today, we're proud to serve hundreds of homeowners across the region, bringing expertise, creativity, and dedication to every project. From simple lawn maintenance to complete landscape transformations, we approach each job with the same level of care and attention to detail.
                </p>
                <p>
                  Our team of certified professionals combines horticultural knowledge with design expertise to create landscapes that are not only beautiful but also sustainable and easy to maintain.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1713936025889-e7920f0fb952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsYW5kc2NhcGluZyUyMGdhcmRlbiUyMG91dGRvb3J8ZW58MXx8fHwxNzc0NTAyMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Landscaping work"
                className="rounded-3xl shadow-lg h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1703432043433-3bb86c844968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjBsYXduJTIweWFyZHxlbnwxfHx8fDE3NzQ1MDIyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Lush lawn"
                className="rounded-3xl shadow-lg h-48 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1762286769757-4367cbd54eb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudGluZyUyMGZsb3dlcnMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzQ1MDIyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Garden planting"
                className="rounded-3xl shadow-lg h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1763431879889-cdcec4d31e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGF0aW8lMjBsYW5kc2NhcGluZyUyMHN0b25lfGVufDF8fHx8MTc3NDUwMjIzNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Outdoor patio"
                className="rounded-3xl shadow-lg h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#F5F2E9] rounded-3xl p-12 border border-[#A3BFA8]/20">
              <div className="w-16 h-16 rounded-full bg-[#1F4D3B] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#F5F2E9]" />
              </div>
              <h3 className="text-2xl md:text-3xl text-[#1F4D3B] mb-4">Our Mission</h3>
              <p className="text-[#2A2A2A]/70 text-lg leading-relaxed">
                To transform outdoor spaces into beautiful, sustainable environments that enhance quality of life and connect people with nature. We are committed to delivering exceptional craftsmanship, personalized service, and lasting value to every client.
              </p>
            </div>

            <div className="bg-[#1F4D3B] rounded-3xl p-12">
              <div className="w-16 h-16 rounded-full bg-[#A3BFA8] flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#1F4D3B]" />
              </div>
              <h3 className="text-2xl md:text-3xl text-[#F5F2E9] mb-4">Our Vision</h3>
              <p className="text-[#A3BFA8] text-lg leading-relaxed">
                To be the most trusted and respected landscaping company in the region, known for our creativity, sustainability, and unwavering commitment to customer satisfaction. We envision a future where every outdoor space becomes a thriving ecosystem of natural beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#A3BFA8] uppercase tracking-wider text-sm mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-5xl text-[#1F4D3B] mb-4">
              What We Stand For
            </h2>
            <p className="text-[#2A2A2A]/70 text-lg max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md border border-[#A3BFA8]/20 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-[#A3BFA8]/20 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#1F4D3B]" />
                </div>
                <h3 className="text-xl text-[#1F4D3B] mb-3">{value.title}</h3>
                <p className="text-[#2A2A2A]/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-[#1F4D3B] mb-6">
            Join Our Growing Family
          </h2>
          <p className="text-[#2A2A2A]/70 text-lg mb-8">
            Experience the Blade & Bloom difference. Let's create something beautiful together.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#1F4D3B] text-[#F5F2E9] rounded-full hover:bg-[#163A2C] transition-all hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}