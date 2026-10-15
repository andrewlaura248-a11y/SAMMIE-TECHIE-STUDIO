import { MessageSquare, ArrowRight, ShoppingBag, Package, Search, Filter } from 'lucide-react';
import { BRAND, ASSETS, buildWhatsAppUrl, WHATSAPP_TEMPLATES, QUICK_HERO_HIGHLIGHTS } from '../config/siteConfig';

export default function HeroSection() {
  const highlightIcons = [ShoppingBag, Package, Search, Filter];

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Subtle Background Glows: Navy base with delicate burgundy & amber ambient radials */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#780D2B]/20 via-[#FF762B]/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#981A43]/15 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101B2D] border border-[#26354B] text-xs font-semibold tracking-wider uppercase text-[#FF762B] w-fit shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF762B]" />
              <span>{BRAND.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7FB] leading-[1.1] text-balance">
              I Build, Optimize &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF762B] via-[#FF914D] to-[#981A43]">
                Grow Your Digital Store.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#A3B0C2] leading-relaxed max-w-2xl">
              {BRAND.subtitle}
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={buildWhatsAppUrl(WHATSAPP_TEMPLATES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#FF762B] hover:bg-[#FF914D] rounded-xl transition-all duration-200 shadow-lg shadow-[#FF762B]/25 hover:shadow-xl hover:shadow-[#FF762B]/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat With Me on WhatsApp</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold tracking-wide text-[#F5F7FB] bg-[#101B2D] hover:bg-[#16243C] border border-[#26354B] hover:border-[#FF762B]/50 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-[#FF762B]" />
              </a>
            </div>

            {/* Personal Positioning Quote from Reference Image 2 */}
            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-[#A3B0C2]">
              <div className="w-2 h-2 rounded-full bg-[#780D2B]" />
              <span className="italic font-medium">"{BRAND.personalQuote}"</span>
              <span className="text-[#26354B]">·</span>
              <span className="text-slate-400">Direct Freelance Partner</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container featuring Sammie + Studio Workspace */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-[#26354B]/80 via-[#101B2D] to-[#780D2B]/30 border border-[#26354B] shadow-2xl shadow-black/60 overflow-hidden group">
              {/* Main Studio Visual Preview */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#070D1B]">
                <img
                  src={ASSETS.heroWorkspace}
                  alt="Sammie Techie Studio workspace and e-commerce setups"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D1B] via-transparent to-transparent opacity-80" />
                
                {/* Storefront live demo tag */}
                <div className="absolute top-3 left-3 bg-[#070D1B]/80 backdrop-blur-md border border-[#26354B] px-3 py-1 rounded-md text-[11px] font-semibold text-[#FF762B]">
                  Shopify & Funnel Architecture
                </div>
              </div>

              {/* Floating Personal Branding Badge (Inspired by Reference 2) */}
              <div className="mt-3 p-3.5 bg-[#0D1728]/95 backdrop-blur-md rounded-xl border border-[#26354B] flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#780D2B] shrink-0 shadow-md">
                  <img
                    src={ASSETS.portrait}
                    alt="Sammie - E-Commerce & Digital Store Specialist"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-sm font-bold text-[#F5F7FB] truncate">Samuel Abiodun</p>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF762B] bg-[#FF762B]/10 px-2 py-0.5 rounded">
                      Specialist
                    </span>
                  </div>
                  <p className="text-xs text-[#A3B0C2] truncate">
                    E-Commerce Developer & Funnel Strategist
                  </p>
                  <p className="text-[11px] text-[#FF914D] font-medium mt-0.5">
                    Available for New Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Compact Trust / Capability Highlights Strip */}
        <div className="mt-16 pt-10 border-t border-[#26354B]/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_HERO_HIGHLIGHTS.map((item, idx) => {
              const Icon = highlightIcons[idx] || ShoppingBag;
              return (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-[#0D1728]/80 hover:bg-[#101B2D] border border-[#26354B]/70 hover:border-[#FF762B]/40 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#101B2D] border border-[#26354B] flex items-center justify-center text-[#FF762B] group-hover:bg-[#FF762B] group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-[#F5F7FB] group-hover:text-white transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-xs text-[#A3B0C2] mt-0.5 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
