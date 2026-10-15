import { TRUST_EXPECTATIONS, buildWhatsAppUrl, ASSETS } from '../config/siteConfig';
import { ShieldCheck, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function TestimonialsSection() {
  const iconList = [MessageCircle, Sparkles, ShieldCheck];

  return (
    <section className="py-20 lg:py-28 bg-[#070D1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FF762B] mb-2">
            CLIENT COMMITMENT & VALUES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
            Built With Care. Focused on Your Goals.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3B0C2]">
            What you can consistently expect when partnering with Sammie Techie Studio on your online store.
          </p>
        </div>

        {/* 3 Trust-Focused Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TRUST_EXPECTATIONS.map((trust, idx) => {
            const Icon = iconList[idx] || Sparkles;
            return (
              <div
                key={trust.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#101B2D] border border-[#26354B] hover:border-[#FF762B]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/20 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#070D1B] border border-[#26354B] flex items-center justify-center text-[#FF762B] group-hover:bg-[#FF762B] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#FF914D] bg-[#070D1B] px-3 py-1 rounded-md border border-[#26354B]/60">
                      {trust.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F7FB] group-hover:text-white transition-colors">
                    {trust.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#A3B0C2] leading-relaxed">
                    {trust.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#26354B]/60 space-y-2.5">
                    {trust.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5 text-xs text-[#F5F7FB]/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF762B] mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#A3B0C2] group-hover:text-[#FF762B] transition-colors">
                    <span>Guaranteed standard on every project</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Personal Note Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#101B2D] via-[#0D1728] to-[#101B2D] border border-[#26354B] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#780D2B] shrink-0">
              <img
                src={ASSETS.portrait}
                alt="Samuel Abiodun"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#F5F7FB]">
                Looking to discuss your specific requirements?
              </h4>
              <p className="text-xs sm:text-sm text-[#A3B0C2] mt-0.5">
                Every online store has unique bottlenecks. Let's look at your store and outline practical steps.
              </p>
            </div>
          </div>

          <a
            href={buildWhatsAppUrl("Hi Sammie! I'd like to ask a few questions and discuss my online store requirements.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF762B] hover:bg-[#FF914D] rounded-xl transition-all shadow-md shadow-[#FF762B]/20 whitespace-nowrap shrink-0"
          >
            <span>Ask Me a Question</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
