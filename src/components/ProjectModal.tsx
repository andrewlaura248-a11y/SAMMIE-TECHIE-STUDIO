import { X, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { PortfolioProject } from '../types';
import { buildWhatsAppUrl } from '../config/siteConfig';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0D1728] border border-[#26354B] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#26354B] bg-[#070D1B]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#FF762B]/10 text-[#FF762B] border border-[#FF762B]/30">
              {project.platform}
            </span>
            <span className="text-xs text-[#A3B0C2] font-medium">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A3B0C2] hover:text-white hover:bg-[#101B2D] transition-colors focus-visible:outline-2 focus-visible:outline-[#FF762B]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Image */}
          <div className="rounded-xl overflow-hidden aspect-[16/9] border border-[#26354B] bg-[#070D1B]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <div className="flex items-center justify-between gap-4">
              <h3 id="modal-project-title" className="text-2xl font-bold text-[#F5F7FB]">
                {project.title}
              </h3>
              <span className="text-[11px] font-semibold text-[#A3B0C2] bg-[#101B2D] border border-[#26354B] px-3 py-1 rounded-md shrink-0">
                {project.demoLabel}
              </span>
            </div>
            <p className="mt-2 text-sm text-[#A3B0C2] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#101B2D] border border-[#26354B]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF914D] mb-1.5">
                The Objective / Challenge
              </h4>
              <p className="text-xs text-[#A3B0C2] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#101B2D] border border-[#26354B]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF762B] mb-1.5">
                The Implemented Solution
              </h4>
              <p className="text-xs text-[#A3B0C2] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables & Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-3">
              Key Features & Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs text-[#A3B0C2] bg-[#070D1B] p-2.5 rounded-lg border border-[#26354B]/60">
                  <Check className="w-3.5 h-3.5 text-[#FF762B] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 border-t border-[#26354B] bg-[#070D1B] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#A3B0C2]">
            Want a similar storefront or optimization for your business?
          </p>
          <a
            href={buildWhatsAppUrl(`Hi Sammie! I saw your work on "${project.title}" in your portfolio and I would like to discuss building or optimizing a similar store for my business.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF762B] hover:bg-[#FF914D] rounded-xl transition-all shadow-md shadow-[#FF762B]/20 w-full sm:w-auto justify-center"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Discuss A Similar Store</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
}
