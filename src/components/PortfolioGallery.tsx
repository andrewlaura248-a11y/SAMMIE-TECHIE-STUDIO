import { useState } from 'react';
import { PORTFOLIO_PROJECTS, buildWhatsAppUrl } from '../config/siteConfig';
import { PortfolioProject } from '../types';
import ProjectModal from './ProjectModal';
import { Eye, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filters = [
    { label: 'All Projects', slug: 'all' },
    { label: 'Shopify Store', slug: 'shopify' },
    { label: 'Digital Product', slug: 'digital' },
    { label: 'Website Redesign', slug: 'redesign' },
    { label: 'SEO & Optimization', slug: 'seo' },
    { label: 'Sales Funnel', slug: 'funnel' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.categorySlug === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative bg-[#070D1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FF762B] mb-2">
            SELECTED WORK
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
            Stores I've Built, Designed & Optimized
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3B0C2]">
            Explore examples of storefront design, digital product presentation, and conversion-focused website experiences.
          </p>
        </div>

        {/* Filter Tabs (Interactive segmented buttons adhering to design guidelines) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.slug;
            return (
              <button
                key={filter.slug}
                type="button"
                onClick={() => setActiveFilter(filter.slug)}
                className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#FF762B] text-white shadow-md shadow-[#FF762B]/20'
                    : 'bg-[#101B2D] text-[#A3B0C2] hover:text-[#F5F7FB] hover:bg-[#16243C] border border-[#26354B]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* 3-Column Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#101B2D] border border-[#26354B] hover:border-[#FF762B]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg shadow-black/30 hover:-translate-y-1"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#070D1B]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101B2D] via-transparent to-transparent opacity-60" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#070D1B]/90 backdrop-blur-md text-[#FF762B] border border-[#26354B]">
                      {project.platform}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#070D1B]/80 text-[#A3B0C2] border border-[#26354B]">
                      {project.demoLabel}
                    </span>
                  </div>

                  {/* Hover Overlay Button to open Modal */}
                  <div className="absolute inset-0 bg-[#070D1B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF762B] hover:bg-[#FF914D] shadow-lg transition-transform duration-200 transform scale-95 group-hover:scale-100"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick Details</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#A3B0C2]">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#F5F7FB] mt-1 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#A3B0C2] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="px-6 pb-6 pt-2 border-t border-[#26354B]/50 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#A3B0C2] hover:text-[#F5F7FB] transition-colors"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={buildWhatsAppUrl(`Hi Sammie! I saw your work on "${project.title}" and would like to discuss a similar project for my business.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF762B] hover:text-[#FF914D] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss Similar</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
