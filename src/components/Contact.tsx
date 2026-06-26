import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hesham@primeegypt.com?subject=${encodeURIComponent(formData.subject || 'Investment Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`)}`;
  };

  const contactMethods = [
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
      label: 'Phone', value: t.contact.contactInfo.phone, link: 'tel:+201000982441',
    },
    {
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>,
      label: 'WhatsApp', value: t.contact.contactInfo.whatsapp, link: 'https://wa.me/201000982441',
    },
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      label: 'Email', value: t.contact.contactInfo.email, link: 'mailto:hesham@primeegypt.com',
    },
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      label: 'Office', value: t.contact.contactInfo.address, link: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-40 section-dark overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/[0.03] rounded-full blur-[180px] animate-breathe" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16 md:mb-20 relative">
          <span className="absolute top-[-30px] right-[-10px] md:top-[-40px] md:right-[-10px] font-display text-[80px] md:text-[140px] font-bold leading-none bg-gradient-to-b from-gold-500/[0.06] to-transparent bg-clip-text text-transparent select-none hidden md:block">09</span>
          <span className="text-gold-400/70 text-[10px] tracking-[0.4em] uppercase font-semibold relative z-10">{t.contact.label}</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5 relative z-10"><span className="gold-gradient">{t.contact.title}</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto relative z-10 text-sm md:text-base">{t.contact.subtitle}</p>
          <div className="mx-auto mt-8 max-w-[200px]"><div className="section-divider" /></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-6 sm:p-8 md:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/35 text-[10px] tracking-[0.2em] uppercase mb-2 block">{t.contact.formName}</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={t.contact.namePlaceholder}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm placeholder-white/15 transition-all" />
                </div>
                <div>
                  <label className="text-white/35 text-[10px] tracking-[0.2em] uppercase mb-2 block">{t.contact.formEmail}</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={t.contact.emailPlaceholder}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm placeholder-white/15 transition-all" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/35 text-[10px] tracking-[0.2em] uppercase mb-2 block">{t.contact.formPhone}</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder={t.contact.phonePlaceholder}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm placeholder-white/15 transition-all" />
                </div>
                <div>
                  <label className="text-white/35 text-[10px] tracking-[0.2em] uppercase mb-2 block">{t.contact.formSubject}</label>
                  <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder={t.contact.subjectPlaceholder}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm placeholder-white/15 transition-all" />
                </div>
              </div>
              <div>
                <label className="text-white/35 text-[10px] tracking-[0.2em] uppercase mb-2 block">{t.contact.formMessage}</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={t.contact.messagePlaceholder}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm placeholder-white/15 resize-none transition-all" />
              </div>
              <button type="submit" className="btn-gold w-full py-4 rounded-lg text-[11px] tracking-[0.25em] uppercase">{t.contact.formSubmit}</button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="lg:col-span-2 space-y-4">
            {contactMethods.map((method, i) => (
              <a key={i} href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined} rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass rounded-xl p-5 flex items-center gap-4 group hover:border-gold-500/20 transition-all">
                <div className="w-11 h-11 rounded-lg bg-gold-500/10 border border-gold-500/12 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 group-hover:border-gold-500/25 transition-all flex-shrink-0">
                  {method.icon}
                </div>
                <div>
                  <div className="text-white/25 text-[10px] tracking-wider uppercase mb-0.5">{method.label}</div>
                  <div className="text-white/60 group-hover:text-gold-400 transition-colors text-sm">{method.value}</div>
                </div>
              </a>
            ))}

            {/* Hours */}
            <div className="glass rounded-xl p-5">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white/40 text-sm">{t.contact.contactInfo.hours}</span>
              </div>
            </div>

            {/* All emails */}
            <div className="glass rounded-xl p-5">
              <div className="text-white/25 text-[10px] tracking-[0.2em] uppercase mb-3">All Contact Emails</div>
              <div className="space-y-2">
                {t.contact.emails.map((email: string, i: number) => (
                  <a key={i} href={`mailto:${email}`} className="flex items-center gap-2 text-white/40 text-sm hover:text-gold-400 transition-colors group">
                    <svg className="w-3.5 h-3.5 text-gold-500/20 group-hover:text-gold-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/201000982441" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-lg bg-gradient-to-r from-green-600/15 to-green-700/15 border border-green-500/20 text-green-400 text-sm font-medium hover:from-green-600/25 hover:to-green-700/25 hover:border-green-500/30 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              Chat with us on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
