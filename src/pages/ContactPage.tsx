import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  Facebook,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { GYM_INFO, getWhatsAppUrl } from '../data/gymInfo';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [enquiryType, setEnquiryType] = useState('Membership Enquiry');
  const [message, setMessage] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!contactInfo.trim()) {
      setFormError('Please enter your phone number or email address.');
      return;
    }
    if (!message.trim()) {
      setFormError('Please enter a brief message describing your enquiry.');
      return;
    }

    setFormError('');
    setFormSubmitted(true);
  };

  const getFormWhatsAppUrl = () => {
    const formatted = `Hello Shahzad Fitness Gym, my name is ${fullName.trim()}.
Enquiry: ${enquiryType}
Contact: ${contactInfo.trim()}
Message: ${message.trim()}`;
    return `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(formatted)}`;
  };

  const getFormMailtoUrl = () => {
    const subject = encodeURIComponent(`Gym Enquiry: ${enquiryType} - ${fullName.trim()}`);
    const body = encodeURIComponent(
      `Name: ${fullName.trim()}\nContact: ${contactInfo.trim()}\nEnquiry Type: ${enquiryType}\n\nMessage:\n${message.trim()}`
    );
    return `mailto:${GYM_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#101114] border-b border-[#303238] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block mb-3">
              Get In Touch
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-[#F5F5F2] uppercase tracking-tight mb-6">
              Contact Shahzad Fitness Gym
            </h1>
            <p className="text-base sm:text-lg text-[#B9BCC3] leading-relaxed">
              Reach out directly to enquire about membership, discuss available training with trainer
              Malik Shahzad Ahmed, or ask questions about getting started in Sargodha.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Contact Form */}
      <section className="py-20 bg-[#101114] border-b border-[#303238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase tracking-tight">
                  Official Contact Channels
                </h2>
                <p className="text-sm text-[#B9BCC3] leading-relaxed">
                  We encourage prospective and existing members to communicate directly with us
                  through phone or WhatsApp for prompt responses regarding membership and coaching.
                </p>
              </div>

              <div className="bg-[#1B1D21] border border-[#303238] rounded-lg p-6 space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#101114] border border-[#303238] flex items-center justify-center text-[#FF6B24] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F2] block">
                      Gym Location
                    </span>
                    <span className="text-sm text-[#B9BCC3]">{GYM_INFO.address}</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#101114] border border-[#303238] flex items-center justify-center text-[#FF6B24] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F2] block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${GYM_INFO.phoneClean}`}
                      className="text-sm text-[#F5F5F2] hover:text-[#FF6B24] transition-colors font-medium"
                    >
                      {GYM_INFO.phone}
                    </a>
                    <span className="block text-xs text-[#80838C]">Available for calls & enquiries</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#101114] border border-[#303238] flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F2] block">
                      Official WhatsApp
                    </span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#25D366] hover:underline font-medium"
                    >
                      {GYM_INFO.whatsappDisplay}
                    </a>
                    <span className="block text-xs text-[#80838C]">Quick chat & training advice</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#101114] border border-[#303238] flex items-center justify-center text-[#FF6B24] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F2] block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${GYM_INFO.email}`}
                      className="text-sm text-[#B9BCC3] hover:text-[#FF6B24] transition-colors break-all"
                    >
                      {GYM_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-4 pt-2 border-t border-[#303238]">
                  <div className="w-10 h-10 rounded bg-[#101114] border border-[#303238] flex items-center justify-center text-[#1877F2] shrink-0">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F2] block">
                      Facebook Page
                    </span>
                    <a
                      href={GYM_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#F5F5F2] hover:text-[#FF6B24] transition-colors inline-flex items-center gap-1 font-semibold"
                    >
                      <span>Shahzad Fitness GYM on Facebook</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Information Reminder */}
              <div className="p-4 bg-[#1B1D21] border border-[#303238] rounded text-xs text-[#80838C] leading-relaxed">
                Please note: Gym operating hours, current membership fee structures, and customized
                coaching plans are confirmed directly via phone or WhatsApp. We avoid publishing
                unverified or fluctuating pricing online.
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#1B1D21] border border-[#303238] rounded-lg p-6 sm:p-8">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24] block mb-1">
                  Direct Form
                </span>
                <h3 className="font-display font-black text-2xl text-[#F5F5F2] uppercase tracking-tight">
                  Send an Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#B9BCC3] mt-1">
                  Fill in your details below. You can send this message directly via WhatsApp or Email
                  to ensure immediate delivery to the gym.
                </p>
              </div>

              {formError && (
                <div className="mb-6 p-4 bg-red-950/40 border border-red-800 rounded flex items-center gap-3 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{formError}</span>
                </div>
              )}

              {formSubmitted ? (
                <div className="space-y-6 py-4">
                  <div className="p-5 bg-[#101114] border border-[#303238] rounded-lg space-y-3">
                    <div className="flex items-center gap-2 text-[#25D366]">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span className="font-display font-bold text-base text-[#F5F5F2]">
                        Enquiry Prepared!
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#B9BCC3] leading-relaxed">
                      Thank you, <strong className="text-white">{fullName}</strong>. To ensure your
                      enquiry reaches Shahzad Fitness Gym immediately without delay, please click
                      below to dispatch it via WhatsApp or Email.
                    </p>

                    <div className="bg-[#1B1D21] p-3 rounded text-xs text-[#80838C] border border-[#303238]">
                      <div><strong>Type:</strong> {enquiryType}</div>
                      <div><strong>From:</strong> {contactInfo}</div>
                      <div className="mt-1"><strong>Message:</strong> {message}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={getFormWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] rounded transition-colors text-center"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <a
                      href={getFormMailtoUrl()}
                      className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-colors text-center"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </a>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setMessage('');
                      }}
                      className="text-xs text-[#B9BCC3] hover:text-[#F5F5F2] underline"
                    >
                      Edit enquiry or submit another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F2] mb-1.5"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      placeholder="e.g. Usman Ali"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#101114] border border-[#303238] rounded text-sm text-[#F5F5F2] placeholder-[#80838C] focus:outline-none focus:border-[#FF6B24] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-info"
                      className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F2] mb-1.5"
                    >
                      Phone Number or Email *
                    </label>
                    <input
                      id="contact-info"
                      type="text"
                      required
                      placeholder="e.g. 0300 1234567 or email@domain.com"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#101114] border border-[#303238] rounded text-sm text-[#F5F5F2] placeholder-[#80838C] focus:outline-none focus:border-[#FF6B24] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-type"
                      className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F2] mb-1.5"
                    >
                      Enquiry Type
                    </label>
                    <select
                      id="enquiry-type"
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#101114] border border-[#303238] rounded text-sm text-[#F5F5F2] focus:outline-none focus:border-[#FF6B24] transition-colors"
                    >
                      <option value="Membership Enquiry">Membership Enquiry</option>
                      <option value="Training & Coaching With Malik Shahzad">
                        Training & Coaching With Malik Shahzad
                      </option>
                      <option value="Beginner Fitness Orientation">
                        Beginner Fitness Orientation
                      </option>
                      <option value="Diet & Guidance Question">Diet & Guidance Question</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#F5F5F2] mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Describe what you are looking for, your training background, or questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#101114] border border-[#303238] rounded text-sm text-[#F5F5F2] placeholder-[#80838C] focus:outline-none focus:border-[#FF6B24] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] active:bg-[#CC470E] rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B24]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Proceed to Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
