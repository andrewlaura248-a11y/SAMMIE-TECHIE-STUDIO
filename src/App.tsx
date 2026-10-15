import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PlatformsSection from './components/PlatformsSection';
import PortfolioGallery from './components/PortfolioGallery';
import ResultsSection from './components/ResultsSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ProcessTimeline from './components/ProcessTimeline';
import TestimonialsSection from './components/TestimonialsSection';
import StoreAuditSection from './components/StoreAuditSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070D1B] text-[#F5F7FB] selection:bg-[#FF762B] selection:text-white flex flex-col font-sans">
      {/* 1. Header and Navigation */}
      <Header />

      {/* Main Single-Page Sections Container */}
      <main className="flex-1">
        {/* 2 & 3. Hero Section & 4 Quick Service Highlights */}
        <HeroSection />

        {/* 4. End-to-End E-Commerce Services */}
        <ServicesSection />

        {/* 5. Selling Platform Showcase */}
        <PlatformsSection />

        {/* 6. Portfolio Gallery */}
        <PortfolioGallery />

        {/* 7. Store Performance & Optimization Overview */}
        <ResultsSection />

        {/* 8. Case Studies */}
        <CaseStudiesSection />

        {/* 9. Five-Step Process Timeline */}
        <ProcessTimeline />

        {/* 10. Testimonials & What You Can Expect */}
        <TestimonialsSection />

        {/* 11. WhatsApp Store Audit / Initial Discussion Panel */}
        <StoreAuditSection />

        {/* 12. FAQ Accordion */}
        <FAQSection />

        {/* 13. Final Contact Section with Inquiry Form */}
        <ContactSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Floating WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
