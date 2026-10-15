import { PROCESS_STEPS } from '../config/siteConfig';
import { Check } from 'lucide-react';

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0D1728]/40 relative border-t border-[#26354B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FF762B] mb-2">
            HOW WE WORK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
            A Clear Process From Idea to Launch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3B0C2]">
            A structured, transparent workflow ensuring each stage of your storefront or digital platform is built with intention.
          </p>
        </div>

        {/* Alternating Timeline (Desktop) & Stacked (Mobile) */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Center Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#FF762B] via-[#780D2B] to-[#FF762B] -translate-x-1/2 opacity-40" />

          <div className="space-y-10 md:space-y-16">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={step.stepNumber}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full md:w-[45%]">
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#101B2D] border border-[#26354B] hover:border-[#FF762B]/50 transition-all duration-300 shadow-xl shadow-black/30 group hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#FF762B]">
                          Stage {step.stepNumber}
                        </span>
                        <span className="text-[11px] font-mono text-[#A3B0C2] bg-[#070D1B] px-2 py-0.5 rounded border border-[#26354B]/50">
                          Structured Step
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#F5F7FB] group-hover:text-white transition-colors">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm text-[#A3B0C2] leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="mt-5 pt-4 border-t border-[#26354B]/60 space-y-2">
                        {step.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-[#F5F7FB]/90">
                            <Check className="w-3.5 h-3.5 text-[#FF762B] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node / Number Badge on Line */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#070D1B] border-2 border-[#FF762B] shadow-lg shadow-[#FF762B]/20 items-center justify-center text-xs font-extrabold text-[#FF762B] z-10">
                    {step.stepNumber}
                  </div>

                  {/* Empty space on opposite side for desktop symmetry */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
