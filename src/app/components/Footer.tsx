import { Link } from "react-router";
import { Phone } from "lucide-react";
import logo from "figma:asset/95035989a45cea383879f7313f34d90bd3fa783b.png";

export function Footer() {
  return (
    <footer className="bg-[#1F4D3B] text-[#F5F2E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Blade & Bloom" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-[#A3BFA8] text-sm leading-relaxed">
              Transforming outdoor spaces with professional landscaping services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-[#A3BFA8] hover:text-[#F5F2E9] transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="text-[#A3BFA8] hover:text-[#F5F2E9] transition-colors text-sm">
                Services
              </Link>
              <Link to="/about" className="text-[#A3BFA8] hover:text-[#F5F2E9] transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="text-[#A3BFA8] hover:text-[#F5F2E9] transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:2369989911"
                className="flex items-center gap-2 text-[#A3BFA8] hover:text-[#F5F2E9] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                236 998 9911
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#A3BFA8]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A3BFA8] text-sm">
            Blade & Bloom. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#A3BFA8] hover:text-[#F5F2E9] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#A3BFA8] hover:text-[#F5F2E9] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}