import { useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/siteConfig';

export default function StoreAuditSection() {
  const [storeUrl, setStoreUrl] = useState('');
  const [noStoreYet, setNoStoreYet] = useState(false);
  const [areaOfInterest, setAreaOfInterest] = useState('Shopify Store Setup');
  const [description, setDescription] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const interestOptions = [
    'Shopify Store Setup',
    'Digital Product Store',
    'Website Design',
    'SEO Optimization',
    'Sales Funnel',
    'Marketing Automation',
    'Store Optimization',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!noStoreYet && !storeUrl.trim()) {
      setValidationError("Please enter your store/website URL or check \"I don't have a live store yet\".");
      return;
    }

    if (!noStoreYet && storeUrl.trim()) {
      // Basic URL sanity check
      const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
      if (!urlPattern.test(storeUrl.trim()) && !storeUrl.includes('.')) {
        setValidationError('Please provide a valid website address (e.g., mystore.com or https://mystore.myshopify.com).');
        return;
      }
    }

    // Build formatted message
    const formattedUrl = noStoreYet ? 'New Store Idea (Not launched yet)' : storeUrl.trim();
    const notesText = description.trim() ? description.trim() : 'Looking for initial insights and recommendations.';

    const message = `Hi Sammie! I'd like to discuss opportunities for my store.

Store / Website: ${formattedUrl}
Main Area of Interest: ${areaOfInterest}
Notes / Goals: ${notesText}

Looking forward to your thoughts!`;

    const waUrl = buildWhatsAppUrl(message);
    setIsSuccess(true);

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="store-audit" className="py-20 lg:py-28 bg-[#0D1728]/70 relative border-t border-[#26354B]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#101B2D] via-[#0D1728] to-[#101B2D] border border-[#26354B] shadow-2xl relative overflow-hidden">
          {/* Subtle Burgundy/Amber Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#780D2B]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#FF762B]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Header */}
            <p className="text-xs uppercase font-bold tracking-widest text-[#FF762B] mb-2">
              FREE INITIAL DISCUSSION
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
              Let's Look at Your Store's Opportunities
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A3B0C2] leading-relaxed">
              Share your store link and tell me what you'd like to improve. I'll use your message to understand your goals and discuss practical next steps with you.
            </p>

            {/* Interactive Form */}
            <form onSubmit={handleSubmit} className="mt-10 text-left space-y-5">
              {/* Store URL Input & Checkbox */}
              <div>
                <label htmlFor="store-url-input" className="block text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-2">
                  Store or Website Address
                </label>
                <div className="relative">
                  <input
                    id="store-url-input"
                    type="text"
                    disabled={noStoreYet}
                    value={storeUrl}
                    onChange={(e) => {
                      setStoreUrl(e.target.value);
                      if (validationError) setValidationError('');
                    }}
                    placeholder={noStoreYet ? "Planning a new store from scratch" : "e.g., yourstore.com or mystore.myshopify.com"}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#070D1B] border ${
                      validationError ? 'border-red-500' : 'border-[#26354B]'
                    } text-sm text-[#F5F7FB] placeholder-[#A3B0C2]/50 focus:outline-none focus:border-[#FF762B] transition-colors disabled:opacity-50`}
                  />
                </div>

                <div className="mt-2.5 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="no-store-checkbox"
                    checked={noStoreYet}
                    onChange={(e) => {
                      setNoStoreYet(e.target.checked);
                      if (validationError) setValidationError('');
                    }}
                    className="w-4 h-4 rounded bg-[#070D1B] border-[#26354B] text-[#FF762B] focus:ring-[#FF762B]"
                  />
                  <label htmlFor="no-store-checkbox" className="text-xs text-[#A3B0C2] cursor-pointer">
                    I don't have a live website yet (I'm planning a new store)
                  </label>
                </div>
              </div>

              {/* Area of Interest Dropdown */}
              <div>
                <label htmlFor="area-of-interest-select" className="block text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-2">
                  Primary Area of Interest
                </label>
                <select
                  id="area-of-interest-select"
                  value={areaOfInterest}
                  onChange={(e) => setAreaOfInterest(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#070D1B] border border-[#26354B] text-sm text-[#F5F7FB] focus:outline-none focus:border-[#FF762B] transition-colors"
                >
                  {interestOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#070D1B] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Optional Short Description */}
              <div>
                <label htmlFor="store-notes-input" className="block text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-2">
                  What would you like to achieve? (Optional)
                </label>
                <textarea
                  id="store-notes-input"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Share any bottlenecks, desired features, or what isn't converting well..."
                  className="w-full px-4 py-3 rounded-xl bg-[#070D1B] border border-[#26354B] text-sm text-[#F5F7FB] placeholder-[#A3B0C2]/50 focus:outline-none focus:border-[#FF762B] transition-colors resize-none"
                />
              </div>

              {/* Validation Error Message */}
              {validationError && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/40 border border-red-800 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Success Message Banner */}
              {isSuccess && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Opening WhatsApp draft with your project details... You can review and edit before sending!</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#FF762B] hover:bg-[#FF914D] rounded-xl transition-all shadow-lg shadow-[#FF762B]/25 hover:shadow-xl hover:shadow-[#FF762B]/35 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss My Store on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-[#A3B0C2] leading-normal pt-1">
                Submitting will generate a structured inquiry draft in your WhatsApp app. No spam, no automated scraping, and no obligation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
