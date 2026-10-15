import { useState } from 'react';
import { FAQ_ITEMS, buildWhatsAppUrl, WHATSAPP_TEMPLATES } from '../config/siteConfig';
import { ChevronDown, MessageSquare } from 'lucide-react';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#070D1B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FF762B] mb-2">
            COMMON QUESTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
            Questions? Let's Make Things Clear.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3B0C2]">
            Straightforward answers about services, platform support, store improvements, and pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#101B2D] border border-[#26354B] hover:border-[#FF762B]/40 transition-all duration-200 overflow-hidden shadow-md shadow-black/20"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF762B]"
                >
                  <span className="text-base sm:text-lg font-bold text-[#F5F7FB] hover:text-white transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#070D1B] border border-[#26354B] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#FF762B]/10 border-[#FF762B]/40 text-[#FF762B]' : 'text-[#A3B0C2]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#A3B0C2] leading-relaxed border-t border-[#26354B]/40 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Orange FAQ CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#A3B0C2] mb-4">
            Didn't find what you are looking for or have a unique store requirement?
          </p>
          <a
            href={buildWhatsAppUrl(WHATSAPP_TEMPLATES.faqQuestion)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF762B] hover:bg-[#FF914D] rounded-xl transition-all shadow-lg shadow-[#FF762B]/20 hover:shadow-xl hover:shadow-[#FF762B]/30 hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Have a Different Question? Chat With Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
