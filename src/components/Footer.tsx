import { BRAND, CONTACT, buildWhatsAppUrl, WHATSAPP_TEMPLATES, SOCIAL_LINKS } from '../config/siteConfig';
import { MessageSquare, ArrowUpRight, Instagram, Linkedin, Briefcase, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIconMap: Record<string, React.ElementType> = {
    Instagram,
    Linkedin,
    Briefcase,
    Facebook,
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Platforms', href: '#platforms' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    { label: 'Shopify Store Setup', href: '#services' },
    { label: 'Digital Product Platforms', href: '#services' },
    { label: 'Website Redesign', href: '#services' },
    { label: 'SEO Optimization', href: '#services' },
    { label: 'Sales Funnel Engineering', href: '#services' },
    { label: 'Marketing Automation', href: '#services' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-[#070D1B] border-t border-[#26354B] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#26354B]/60">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#780D2B] via-[#981A43] to-[#FF762B] flex items-center justify-center p-0.5 shadow-md">
                <div className="w-full h-full bg-[#070D1B] rounded-[6px] flex items-center justify-center">
                  <span className="font-bold text-xs text-[#FF762B]">S</span>
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-[#F5F7FB]">
                {BRAND.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A3B0C2] leading-relaxed max-w-sm">
              {BRAND.footerSummary}
            </p>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl(WHATSAPP_TEMPLATES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#FF762B] hover:bg-[#FF914D] rounded-lg transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs text-[#A3B0C2] hover:text-[#FF762B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    onClick={(e) => handleNavClick(e, service.href)}
                    className="text-xs text-[#A3B0C2] hover:text-[#FF762B] transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-4">
              Connect With Me
            </h4>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((item) => {
                const Icon = socialIconMap[item.icon] || Briefcase;
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-[#A3B0C2] hover:text-[#FF762B] transition-colors group"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#FF762B]" />
                      <span>{item.platform}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#25D366] hover:text-[#25D366]/80 font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{CONTACT.whatsappPhone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3B0C2]">
          <p>
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Specialist E-Commerce Portfolio</span>
            <span className="text-[#26354B]">·</span>
            <span>WhatsApp-First Conversion Flow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
