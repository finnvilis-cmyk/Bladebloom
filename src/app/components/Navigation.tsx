import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "figma:asset/95035989a45cea383879f7313f34d90bd3fa783b.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const quoteSection = document.getElementById("quote-form");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1F4D3B]/95 backdrop-blur-sm shadow-md" : "bg-[#1F4D3B]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Blade & Bloom" 
              className="h-20 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors hover:text-[#A3BFA8] ${
                location.pathname === "/" ? "text-[#F5F2E9]" : "text-[#F5F2E9]/80"
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`transition-colors hover:text-[#A3BFA8] ${
                location.pathname === "/services" ? "text-[#F5F2E9]" : "text-[#F5F2E9]/80"
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`transition-colors hover:text-[#A3BFA8] ${
                location.pathname === "/about" ? "text-[#F5F2E9]" : "text-[#F5F2E9]/80"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`transition-colors hover:text-[#A3BFA8] ${
                location.pathname === "/contact" ? "text-[#F5F2E9]" : "text-[#F5F2E9]/80"
              }`}
            >
              Contact
            </Link>
            <button
              onClick={scrollToQuote}
              className="px-6 py-2.5 bg-[#F5F2E9] text-[#1F4D3B] rounded-full hover:bg-white transition-colors"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#F5F2E9]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#F5F2E9]/20">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === "/"
                    ? "bg-[#F5F2E9]/20 text-[#F5F2E9]"
                    : "text-[#F5F2E9]/80 hover:bg-[#F5F2E9]/10"
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === "/services"
                    ? "bg-[#F5F2E9]/20 text-[#F5F2E9]"
                    : "text-[#F5F2E9]/80 hover:bg-[#F5F2E9]/10"
                }`}
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === "/about"
                    ? "bg-[#F5F2E9]/20 text-[#F5F2E9]"
                    : "text-[#F5F2E9]/80 hover:bg-[#F5F2E9]/10"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === "/contact"
                    ? "bg-[#F5F2E9]/20 text-[#F5F2E9]"
                    : "text-[#F5F2E9]/80 hover:bg-[#F5F2E9]/10"
                }`}
              >
                Contact
              </Link>
              <button
                onClick={scrollToQuote}
                className="mx-4 px-6 py-2.5 bg-[#F5F2E9] text-[#1F4D3B] rounded-full hover:bg-white transition-colors"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}