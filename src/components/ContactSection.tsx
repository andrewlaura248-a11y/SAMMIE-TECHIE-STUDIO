import { useState } from 'react';
import { CONTACT, ASSETS, buildWhatsAppUrl, SOCIAL_LINKS } from '../config/siteConfig';
import { MessageSquare, Send, CheckCircle2, AlertCircle, ArrowUpRight, Instagram, Linkedin, Briefcase, Facebook } from 'lucide-react';

export default function ContactSection() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Shopify Store Setup');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('Flexible / To discuss');
  const [timeline, setTimeline] = useState('Within 2-4 weeks');
  
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; description?: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceOptions = [
    'Shopify Store Setup & Development',
    'Digital Product Store Setup (Stan Store / Gumroad / Payhip)',
    'Website Design & Optimization',
    'SEO Optimization',
    'Sales Funnel Setup',
    'Marketing Automation & Email Flows',
    'Comprehensive Store Optimization',
    'Other / Custom Requirement',
  ];

  const budgetOptions = [
    'Flexible / To discuss',
    'Starter Project ($300 – $700)',
    'Growth Store ($700 – $1,500)',
    'Full-Scale Custom ($1,500+)',
  ];

  const timelineOptions = [
    'As soon as possible',
    'Within 2-4 weeks',
    'Within 1-2 months',
    'Flexible timeline',
  ];

  const socialIconMap: Record<string, React.ElementType> = {
    Instagram,
    Linkedin,
    Briefcase,
    Facebook,
  };

  const validate = () => {
    const errs: { fullName?: string; email?: string; description?: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!email.trim()) {
      errs.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errs.email = 'Please enter a valid email address.';
      }
    }

    if (!description.trim()) {
      errs.description = 'Please provide a short description of your project.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.set('form-name', 'project-inquiry');

    // Open a tab now so the browser doesn't block WhatsApp later.
    const whatsappTab = window.open('about:blank', '_blank');

    try {
const response = await fetch('/forms.html', {
  method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(
          Array.from(formData.entries()).map(([key, value]) => [
            key,
            String(value),
          ])
        ).toString(),
      });

      if (!response.ok) {
        throw new Error('The inquiry could not be submitted.');
      }

      const inquiryMessage = `Hi Sammie! I submitted an inquiry through your portfolio website.

Full Name: ${fullName.trim()}
Email: ${email.trim()}
Service Required: ${service}
Budget Range: ${budget}
Preferred Timeline: ${timeline}

Project Details:
${description.trim()}

Looking forward to hearing from you!`;

      const waUrl = buildWhatsAppUrl(inquiryMessage);

      setIsSuccess(true);

      if (whatsappTab) {
        whatsappTab.location.href = waUrl;
      } else {
        window.location.href = waUrl;
      }
    } catch (error) {
      if (whatsappTab) {
        whatsappTab.close();
      }

      setIsSuccess(false);
      alert(
        'Your inquiry could not be submitted. Please try again or contact me through WhatsApp.'
      );
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0D1728]/60 relative border-t border-[#26354B]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FF762B] mb-2">
            LET'S BUILD SOMETHING USEFUL
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
            Ready to Launch or Improve Your Online Store?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A3B0C2]">
            Tell me what you're building, what isn't working, or what you'd like to achieve. Let's discuss a practical way forward.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Verified Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101B2D] border border-[#26354B] shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#780D2B] shrink-0">
                  <img
                    src={ASSETS.portrait}
                    alt="Samuel Abiodun"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F7FB]">
                    Samuel Abiodun
                  </h3>
                  <p className="text-xs text-[#FF762B] font-semibold">
                    Sammie Techie Studio
                  </p>
                  <p className="text-xs text-[#A3B0C2] mt-0.5">
                    E-Commerce Developer & Growth Specialist
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#A3B0C2] leading-relaxed">
                Whether you need a new Shopify store, a streamlined digital product storefront, SEO improvements, or conversion funnels, I work directly with you with clear communication and fast turnaround.
              </p>

              {/* Direct WhatsApp Action */}
              <div className="mt-6 pt-6 border-t border-[#26354B]/60">
                <p className="text-xs uppercase font-bold tracking-wider text-[#A3B0C2] mb-3">
                  Direct WhatsApp Contact
                </p>
                <a
                  href={`https://wa.me/${CONTACT.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#070D1B] hover:bg-[#070D1B]/80 border border-[#26354B] hover:border-[#FF762B] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#F5F7FB] block">
                        {CONTACT.whatsappPhone}
                      </span>
                      <span className="text-[11px] text-[#A3B0C2]">
                        Click to start WhatsApp conversation
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A3B0C2] group-hover:text-[#FF762B] transition-colors" />
                </a>
              </div>

              {/* Official Social Profiles */}
              <div className="mt-6 pt-6 border-t border-[#26354B]/60">
                <p className="text-xs uppercase font-bold tracking-wider text-[#A3B0C2] mb-3">
                  Professional Profiles & Socials
                </p>
                <div className="space-y-2.5">
                  {SOCIAL_LINKS.map((item) => {
                    const Icon = socialIconMap[item.icon] || Briefcase;
                    return (
                      <a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#070D1B]/60 hover:bg-[#070D1B] border border-[#26354B]/70 hover:border-[#FF762B]/50 text-xs text-[#A3B0C2] hover:text-[#F5F7FB] transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-[#FF762B]" />
                          <span className="font-medium text-[#F5F7FB]">{item.platform}</span>
                          <span className="text-[#A3B0C2]">· {item.displayLabel}</span>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101B2D] border border-[#26354B] shadow-xl">
              <h3 className="text-xl font-bold text-[#F5F7FB] mb-1">
                Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#A3B0C2] mb-6">
                Fill out the details below. Submitting will prepare a formatted WhatsApp message with your project scope for immediate discussion.
              </p>

<form
  name="project-inquiry"
  onSubmit={handleSubmit}
  className="space-y-5"
  noValidate
>
  <input type="hidden" name="form-name" value="project-inquiry" />
  <input type="hidden" name="bot-field" value="" />                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-fullname" className="block text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="inquiry-fullname"
                      name="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g., Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-[#070D1B] border ${
                        errors.fullName ? 'border-red-500' : 'border-[#26354B]'
                      } text-sm text-[#F5F7FB] placeholder-[#A3B0C2]/50 focus:outline-none focus:border-[#FF762B] transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="inquiry-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#070D1B] border ${
                        errors.email ? 'border-red-500' : 'border-[#26354B]'
                      } text-sm text-[#F5F7FB] placeholder-[#A3B0C2]/50 focus:outline-none focus:border-[#FF762B] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="inquiry-service" className="block text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-1.5">
                    Service Required *
                  </label>
                  <select
                    id="inquiry-service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#070D1B] border border-[#26354B] text-sm text-[#F5F7FB] focus:outline-none focus:border-[#FF762B] transition-colors"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#070D1B] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget & Timeline Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-budget" className="block text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-1.5">
                      Budget Range
                    </label>
                    <select
                      id="inquiry-budget"
                      name="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1B] border border-[#26354B] text-sm text-[#F5F7FB] focus:outline-none focus:border-[#FF762B] transition-colors"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b} className="bg-[#070D1B] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inquiry-timeline" className="block text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-1.5">
                      Preferred Timeline
                    </label>
                    <select
                      id="inquiry-timeline"
                      name="timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1B] border border-[#26354B] text-sm text-[#F5F7FB] focus:outline-none focus:border-[#FF762B] transition-colors"
                    >
                      {timelineOptions.map((t) => (
                        <option key={t} value={t} className="bg-[#070D1B] text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="inquiry-description" className="block text-xs font-bold uppercase tracking-wider text-[#F5F7FB] mb-1.5">
                    Project Description *
                  </label>
                  <textarea
                    id="inquiry-description"
                    name="description"
                    rows={4}
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      if (errors.description) setErrors({ ...errors, description: undefined });
                    }}
                    placeholder="Tell me about your product, what you want to achieve, any reference websites, or challenges..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#070D1B] border ${
                      errors.description ? 'border-red-500' : 'border-[#26354B]'
                    } text-sm text-[#F5F7FB] placeholder-[#A3B0C2]/50 focus:outline-none focus:border-[#FF762B] transition-colors resize-none`}
                  />
                  {errors.description && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.description}</p>
                  )}
                </div>

                {/* Success Banner */}
                {isSuccess && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Inquiry formatted! Opening your WhatsApp chat so you can review and send the message.</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF762B] hover:bg-[#FF914D] rounded-xl transition-all shadow-lg shadow-[#FF762B]/20 hover:shadow-xl hover:shadow-[#FF762B]/30 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </button>
                </div>

                <p className="text-[11px] text-[#A3B0C2] text-center">
                  Submissions open directly in WhatsApp with all values encoded. Your privacy is respected.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
