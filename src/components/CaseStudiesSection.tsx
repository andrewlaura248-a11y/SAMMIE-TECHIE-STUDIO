import { CASE_STUDIES, buildWhatsAppUrl } from '../config/siteConfig';
import { ArrowUpRight, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function CaseStudiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#070D1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FF762B] mb-2">
            THE WORK BEHIND THE RESULTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
            From Store Ideas to Better Digital Experiences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3B0C2]">
            Detailed breakdowns of how intentional storefront architecture and optimization solve real selling challenges.
          </p>
        </div>

        {/* 2-Column Case Studies Grid (Inspired by Reference 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl bg-[#101B2D] border border-[#26354B] hover:border-[#FF762B]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl shadow-black/30 hover:-translate-y-1"
            >
              <div>
                {/* Visual Banner */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#070D1B]">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101B2D] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded bg-[#070D1B]/90 backdrop-blur-md text-[#FF762B] border border-[#26354B]">
                      {study.badge}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded bg-[#070D1B]/80 text-[#A3B0C2] border border-[#26354B]">
                      Demo Concept
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div>
                    <span className="text-xs uppercase font-semibold text-[#A3B0C2] tracking-wider">
                      {study.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[#F5F7FB] mt-1 group-hover:text-white transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-[#0D1728] border border-[#26354B]/80">
                      <p className="font-bold text-[#FF914D] mb-1 uppercase tracking-wider text-[11px]">
                        The Challenge
                      </p>
                      <p className="text-[#A3B0C2] leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0D1728] border border-[#26354B]/80">
                      <p className="font-bold text-[#FF762B] mb-1 uppercase tracking-wider text-[11px]">
                        The Strategy & Solution
                      </p>
                      <p className="text-[#A3B0C2] leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5 pt-1">
                      <CheckCircle2 className="w-4 h-4 text-[#FF762B] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#F5F7FB]/90 leading-relaxed font-medium">
                        <strong className="text-white">Outcome:</strong> {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Tags & Inquiry CTA */}
              <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-[#26354B]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-[#A3B0C2] bg-[#070D1B] px-2.5 py-1 rounded-md border border-[#26354B]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={buildWhatsAppUrl(`Hi Sammie! I read your case study on "${study.title}" and would like to discuss a similar project scope.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF762B] hover:text-[#FF914D] transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
