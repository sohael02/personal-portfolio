import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { personalInfo } from "../../data/portfolio";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-lg font-bold text-text tracking-tight"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Sohael Shaik - Home"
          >
            {personalInfo.name}
          </motion.a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-text transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Button
              size="sm"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        <motion.div
          id="mobile-menu"
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-4 border-t border-slate-200 flex flex-col gap-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted hover:text-text transition-colors px-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 4 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}