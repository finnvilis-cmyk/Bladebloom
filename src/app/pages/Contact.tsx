import { Phone, Clock } from "lucide-react";
import { QuoteForm } from "../components/QuoteForm";

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1F4D3B] to-[#163A2C]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#A3BFA8] uppercase tracking-wider text-sm mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl text-[#F5F2E9] mb-6">
            Contact Us
          </h1>
          <p className="text-[#A3BFA8] text-lg md:text-xl max-w-3xl mx-auto">
            Have questions or ready to start your project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-md border border-[#A3BFA8]/20">
                <div className="w-14 h-14 rounded-full bg-[#A3BFA8]/20 flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-[#1F4D3B]" />
                </div>
                <h3 className="text-xl text-[#1F4D3B] mb-2">Phone</h3>
                <a
                  href="tel:2369989911"
                  className="text-[#2A2A2A]/70 hover:text-[#1F4D3B] transition-colors"
                >
                  236 998 9911
                </a>
                <p className="text-[#2A2A2A]/50 text-sm mt-2">
                  Monday - Friday: 8am - 6pm
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-md border border-[#A3BFA8]/20">
                <div className="w-14 h-14 rounded-full bg-[#A3BFA8]/20 flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-[#1F4D3B]" />
                </div>
                <h3 className="text-xl text-[#1F4D3B] mb-2">Business Hours</h3>
                <div className="text-[#2A2A2A]/70 text-sm space-y-1">
                  <p>Monday - Friday: 8:00am - 6:00pm</p>
                  <p>Saturday: 9:00am - 4:00pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2" id="quote-form">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-[#1F4D3B] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#A3BFA8]/20">
              <h3 className="text-xl text-[#1F4D3B] mb-3">
                How quickly can you provide a quote?
              </h3>
              <p className="text-[#2A2A2A]/70">
                We typically provide quotes within 24-48 hours of your request. For urgent projects, we can often schedule a site visit within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#A3BFA8]/20">
              <h3 className="text-xl text-[#1F4D3B] mb-3">
                Do you offer free consultations?
              </h3>
              <p className="text-[#2A2A2A]/70">
                Yes! We offer free, no-obligation consultations where we'll visit your property, discuss your vision, and provide professional recommendations.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#A3BFA8]/20">
              <h3 className="text-xl text-[#1F4D3B] mb-3">
                Are you licensed and insured?
              </h3>
              <p className="text-[#2A2A2A]/70">
                Absolutely. Blade & Bloom is fully licensed, bonded, and insured. We carry comprehensive liability and workers' compensation insurance for your peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#A3BFA8]/20">
              <h3 className="text-xl text-[#1F4D3B] mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-[#2A2A2A]/70">
                We accept cash, checks, and all major credit cards. For larger projects, we can arrange flexible payment schedules.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#A3BFA8]/20">
              <h3 className="text-xl text-[#1F4D3B] mb-3">
                Do you offer maintenance contracts?
              </h3>
              <p className="text-[#2A2A2A]/70">
                Yes, we offer seasonal and year-round maintenance contracts to keep your landscape looking its best throughout the year. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1F4D3B] to-[#163A2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-[#F5F2E9] mb-6">
            Let's Bring Your Vision to Life
          </h2>
          <p className="text-[#A3BFA8] text-lg mb-8">
            Ready to transform your outdoor space? Call us today or fill out the quote form above.
          </p>
          <a
            href="tel:2369989911"
            className="inline-block px-8 py-4 bg-[#F5F2E9] text-[#1F4D3B] rounded-full hover:bg-white transition-all hover:scale-105 shadow-lg"
          >
            Call 236 998 9911
          </a>
        </div>
      </section>
    </div>
  );
}