import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Study Destinations", href: "#destinations" },
    { name: "Loan Options", href: "#loans" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-gradient-to-b from-background/80 via-background/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground drop-shadow-md">
              EduGlobal
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:scale-105 drop-shadow-md"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen
                    ? "rotate-45 translate-y-2 w-6"
                    : "rotate-0 translate-y-0 w-4"
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-2 w-6"
                    : "rotate-0 translate-y-0 w-6"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="bg-background border-t border-border px-4 py-6 space-y-4 animate-slide-down">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-semibold text-foreground hover:text-primary transition-colors py-2 hover:pl-2"
              style={{
                animationDelay: `${index * 50}ms`,
                opacity: 0,
                animation: isMenuOpen
                  ? `slide-down 0.3s ease-out ${index * 50}ms forwards`
                  : "none",
              }}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
