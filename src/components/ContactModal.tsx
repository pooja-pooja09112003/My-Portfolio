import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, Copy, ArrowUpRight, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onSuccessToast?: (msg: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  onSuccessToast
}) => {
  const targetEmail = "lothugedda09@gmail.com";

  const servicesList = [
    'UI/UX',
    'Front End Development',
    'Back End Development',
    'Full Stack Development',
    'Web Development',
    'Website Design',
    'Testing',
    'Other'
  ];

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: initialService && servicesList.includes(initialService) ? initialService : 'UI/UX',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Prepare email parameters
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Poojitha,\n\n` +
      `You have received a new project inquiry through your portfolio.\n\n` +
      `--- INQUIRY DETAILS ---\n` +
      `Client Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.service}\n\n` +
      `Project Overview / Message:\n` +
      `${formData.message}\n\n` +
      `------------------------\n` +
      `Sent from Portfolio contact portal to: ${targetEmail}`
    );

    // Save to local storage for persistent inquiry tracking
    try {
      const stored = localStorage.getItem('portfolio_inquiries') || '[]';
      const parsed = JSON.parse(stored);
      parsed.unshift({
        ...formData,
        id: 'inq_' + Date.now(),
        timestamp: new Date().toISOString(),
        status: 'sent'
      });
      localStorage.setItem('portfolio_inquiries', JSON.stringify(parsed));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger mailto link
      window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

      if (onSuccessToast) {
        onSuccessToast(`Inquiry prepared for ${targetEmail}!`);
      }
    }, 600);
  };

  const copyInquirySummary = () => {
    const text = 
`PROJECT INQUIRY FOR POOJITHA LOTHUGEDDA (${targetEmail})
Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}
Message: ${formData.message}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        id="contact-form-modal"
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto no-scrollbar bg-[#FAF7F2] rounded-2xl border border-[#DDD6CB] shadow-2xl p-6 sm:p-9 text-[#1A1917]"
      >
        {/* Close Button */}
        <button
          id="close-contact-modal"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EFE9DE] border border-[#DDD6CB] hover:bg-[#1A1917] hover:text-[#FAF7F2] text-[#423E37] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="pr-10">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#736C61] uppercase block mb-1">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#1A1917] leading-tight">
                Let's discuss your next{' '}
                <span className="font-editorial italic font-semibold">project</span>.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#666157] font-light leading-relaxed">
                Direct inquiry portal routed straight to <span className="font-medium text-[#1A1917] underline decoration-[#4D5844]">{targetEmail}</span>. Typical response time is within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#3D3933] uppercase mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Lin"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F2EDE4] border border-[#DDD5C7] text-sm text-[#1A1917] placeholder:text-[#948D80] focus:outline-none focus:border-[#4D5844] focus:bg-[#FAF7F2] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#3D3933] uppercase mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F2EDE4] border border-[#DDD5C7] text-sm text-[#1A1917] placeholder:text-[#948D80] focus:outline-none focus:border-[#4D5844] focus:bg-[#FAF7F2] transition-all"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[11px] font-semibold tracking-wider text-[#3D3933] uppercase mb-2">
                  Service You Need
                </label>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((svc) => (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: svc })}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                        formData.service === svc
                          ? 'bg-[#1A1917] text-[#FAF7F2] shadow-sm'
                          : 'bg-[#EDE7DC] border border-[#D9D1C3] text-[#423E37] hover:border-[#BBB09E]'
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-semibold tracking-wider text-[#3D3933] uppercase mb-1.5">
                  Project Details / Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me a little about your goals, requirements, or what you'd like to build together..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F2EDE4] border border-[#DDD5C7] text-sm text-[#1A1917] placeholder:text-[#948D80] focus:outline-none focus:border-[#4D5844] focus:bg-[#FAF7F2] transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-[#736C61] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#4D5844]" />
                  <span>Direct delivery to {targetEmail}</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#4D5844] hover:bg-[#3D4735] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Preparing email...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          </div>
        ) : (
          /* Submission Success View */
          <div className="py-6 text-center animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-[#E5ECE0] text-[#3D5A2C] flex items-center justify-center mx-auto mb-4 border border-[#C5D8BC]">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-normal text-[#1A1917]">
              Thank You, <span className="font-editorial italic font-semibold">{formData.name}</span>!
            </h3>
            
            <p className="mt-2 text-sm text-[#555047] max-w-md mx-auto leading-relaxed">
              Your inquiry has been compiled and dispatched to <span className="font-medium text-[#1A1917]">{targetEmail}</span>.
            </p>

            {/* Quick Actions Card */}
            <div className="mt-6 p-4 rounded-xl bg-[#F0EAE0] border border-[#DDD5C7] text-left max-w-md mx-auto space-y-3">
              <div className="flex items-center justify-between text-xs text-[#524D44]">
                <span className="font-semibold uppercase tracking-wider text-[10px] text-[#736C61]">Captured Inquiry</span>
                <button
                  onClick={copyInquirySummary}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-[#4D5844] hover:underline cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                </button>
              </div>

              <div className="text-xs text-[#33302B] space-y-1 bg-white/70 p-3 rounded-lg border border-[#E3DDD3]">
                <p><strong>Service:</strong> {formData.service}</p>
                <p className="line-clamp-2 text-[#555047]"><strong>Message:</strong> {formData.message}</p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`mailto:${targetEmail}?subject=Project Inquiry: ${formData.service} from ${formData.name}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#1A1917] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#4D5844] transition-colors text-center"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Mail Client</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      service: 'UI/UX',
                      message: ''
                    });
                  }}
                  className="text-xs text-[#736C61] hover:text-[#1A1917] underline py-1 cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full border border-[#CCC4B5] text-xs font-semibold tracking-wider uppercase hover:bg-[#EBE4D8] transition-colors cursor-pointer"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
