import { PLATFORMS, buildWhatsAppUrl } from '../config/siteConfig';
import { ArrowUpRight, Store } from 'lucide-react';

export default function PlatformsSection() {
  return (
    <section id="platforms" className="py-16 sm:py-20 relative bg-[#070D1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#101B2D] to-[#0D1728] border border-[#26354B] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Burgundy accent illumination */}
          <div className="absolute -top-24 right-0 w-80 h-80 bg-[#780D2B]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#FF762B] mb-2 block">
                COMPATIBILITY & PLATFORMS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F7FB] tracking-tight">
                Built for the Way You Sell
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#A3B0C2] leading-relaxed">
                Whether you're launching a physical-product store, selling digital downloads, or building a creator business, I'll help you choose and configure a suitable selling experience.
              </p>
            </div>

            {/* Platform Badges Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {PLATFORMS.map((platform) => (
                <div
                  key={platform.id}
                  className="p-5 rounded-2xl bg-[#070D1B]/70 border border-[#26354B] hover:border-[#FF762B]/50 hover:bg-[#101B2D] transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#101B2D] border border-[#26354B] flex items-center justify-center text-[#FF762B] group-hover:bg-[#FF762B] group-hover:text-white transition-colors">
                        <Store className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] uppercase font-bold text-[#FF914D] tracking-wider">
                        {platform.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#F5F7FB] group-hover:text-white transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-xs font-medium text-[#FF762B] mt-0.5">
                      {platform.tagline}
                    </p>
                    <p className="text-xs text-[#A3B0C2] mt-2 leading-relaxed">
                      {platform.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#26354B]/50">
                    <a
                      href={buildWhatsAppUrl(`Hi Sammie! I'd like to discuss setting up or optimizing my store on ${platform.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#A3B0C2] hover:text-[#FF762B] transition-colors"
                    >
                      <span>Inquire for {platform.name}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
