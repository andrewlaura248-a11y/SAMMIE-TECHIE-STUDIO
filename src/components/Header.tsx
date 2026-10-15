import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { BRAND, buildWhatsAppUrl, WHATSAPP_TEMPLATES } from '../config/siteConfig';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Platforms', href: '#platforms' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070D1B]/90 backdrop-blur-md border-b border-[#26354B]/80 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
            aria-label="Sammie Techie Studio - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#780D2B] via-[#981A43] to-[#FF762B] flex items-center justify-center p-0.5 shadow-md shadow-[#780D2B]/30 transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full bg-[#070D1B] rounded-[6px] flex items-center justify-center">
                <span className="font-bold text-sm tracking-wider text-[#FF762B]">S</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#F5F7FB] group-hover:text-white transition-colors">
                {BRAND.name}
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-wider font-semibold text-[#A3B0C2] hover:text-[#FF762B] transition-colors whitespace-nowrap shrink-0 py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF762B] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={buildWhatsAppUrl(WHATSAPP_TEMPLATES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF762B] hover:bg-[#FF914D] rounded-full transition-all duration-200 shadow-md shadow-[#FF762B]/20 hover:shadow-lg hover:shadow-[#FF762B]/30 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF762B]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={buildWhatsAppUrl(WHATSAPP_TEMPLATES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-xs font-semibold text-white bg-[#FF762B] rounded-full"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A3B0C2] hover:text-white rounded-lg hover:bg-[#101B2D] focus-visible:outline-2 focus-visible:outline-[#FF762B]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0D1728]/95 backdrop-blur-xl border-b border-[#26354B] px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#F5F7FB] hover:text-[#FF762B] hover:bg-[#101B2D] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#26354B]">
              <a
                href={buildWhatsAppUrl(WHATSAPP_TEMPLATES.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF762B] hover:bg-[#FF914D] rounded-xl transition-all shadow-md shadow-[#FF762B]/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
