import { ShoppingBag, Package, Layout, Search, Filter, Zap, Check, ArrowRight } from 'lucide-react';
import { SERVICES, buildWhatsAppUrl } from '../config/siteConfig';

export default function ServicesSection() {
  const iconMap: Record<string, React.ElementType> = {
    ShoppingBag,
    Package,
    Layout,
    Search,
    Filter,
    Zap,
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0D1728]/50 relative border-t border-[#26354B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FF762B] mb-2">
            WHAT I DO
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
            E-commerce Solutions Built Around Your Goals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3B0C2]">
            Practical digital solutions to help you launch, improve, and grow your online business.
          </p>
        </div>

        {/* 6 Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || ShoppingBag;
            return (
              <div
                key={service.id}
                className="rounded-2xl p-6 sm:p-7 bg-[#101B2D] border border-[#26354B] hover:border-[#FF762B]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1"
              >
                <div>
                  {/* Top Header with Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0D1728] border border-[#26354B] flex items-center justify-center text-[#FF762B] group-hover:bg-[#FF762B] group-hover:text-white transition-colors duration-200 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#A3B0C2] uppercase tracking-wider bg-[#070D1B] px-2.5 py-1 rounded-md border border-[#26354B]/60">
                      Tailored Setup
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#F5F7FB] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#A3B0C2] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-6 pt-5 border-t border-[#26354B]/60 space-y-2.5">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-[#F5F7FB]/90">
                        <Check className="w-4 h-4 text-[#FF762B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Service CTA */}
                <div className="mt-8 pt-4">
                  <a
                    href={buildWhatsAppUrl(service.whatsappTemplate)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F5F7FB] group-hover:text-white bg-[#0D1728] hover:bg-[#FF762B] border border-[#26354B] hover:border-[#FF762B] rounded-xl transition-all duration-200"
                  >
                    <span>Discuss This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF762B] group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
