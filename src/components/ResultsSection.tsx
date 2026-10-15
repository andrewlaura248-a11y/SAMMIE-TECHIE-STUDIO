import { RESULTS_METRICS, buildWhatsAppUrl } from '../config/siteConfig';
import { Gauge, Smartphone, Eye, Sparkles, Compass, Workflow, MessageSquare } from 'lucide-react';

export default function ResultsSection() {
  const iconMap: Record<string, React.ElementType> = {
    'store-speed': Gauge,
    'conversion-journey': Compass,
    'seo-readiness': Sparkles,
    'mobile-experience': Smartphone,
    'product-presentation': Eye,
    'marketing-workflows': Workflow,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0D1728]/60 relative border-y border-[#26354B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FF762B] mb-2">
            FOCUSED ON IMPROVEMENT
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
            Better Experiences. Smarter Store Performance.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3B0C2]">
            Targeted enhancements designed to eliminate hurdles in your store and streamline how visitors buy.
          </p>
        </div>

        {/* 6 Metric / Optimization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {RESULTS_METRICS.map((metric) => {
            const Icon = iconMap[metric.id] || Sparkles;
            return (
              <div
                key={metric.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#101B2D] border border-[#26354B] hover:border-[#FF762B]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#070D1B] border border-[#26354B] flex items-center justify-center text-[#FF762B] group-hover:bg-[#FF762B] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#A3B0C2] bg-[#070D1B] px-2.5 py-1 rounded border border-[#26354B]/60">
                      {metric.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F7FB] group-hover:text-white transition-colors">
                    {metric.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#FF914D] mt-1">
                    Focus: {metric.focusArea}
                  </p>

                  <p className="mt-3 text-sm text-[#A3B0C2] leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#26354B]/60 flex items-center justify-between">
                  <span className="text-xs text-[#F5F7FB]/80 font-medium">
                    {metric.metricType}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#FF762B]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#A3B0C2] max-w-xl mx-auto">
            Ready to find out which areas of your store have the greatest room for improvement?
          </p>
          <div className="mt-4">
            <a
              href={buildWhatsAppUrl("Hi Sammie! I'd like to discuss optimizing my store performance, speed, or checkout journey.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF762B] hover:bg-[#FF914D] rounded-xl transition-all shadow-md shadow-[#FF762B]/20"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss Store Improvements</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
