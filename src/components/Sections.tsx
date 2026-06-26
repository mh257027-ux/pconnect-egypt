import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

/* ============ SECTION HEADER ============ */
const SectionHeader: React.FC<{ label: string; title: string; subtitle?: string; number: string; inView: boolean }> = ({ label, title, subtitle, number, inView }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14 md:mb-20 relative">
    <span className="absolute top-[-30px] right-[-10px] md:top-[-40px] md:right-[-10px] font-display text-[80px] md:text-[140px] font-bold leading-none bg-gradient-to-b from-gold-500/[0.06] to-transparent bg-clip-text text-transparent select-none hidden md:block">{number}</span>
    <span className="text-gold-400/70 text-[10px] tracking-[0.4em] uppercase font-semibold relative z-10">{label}</span>
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5 relative z-10"><span className="gold-gradient">{title}</span></h2>
    {subtitle && <p className="text-white/40 max-w-2xl mx-auto relative z-10 text-sm md:text-base leading-relaxed">{subtitle}</p>}
    <div className="mx-auto mt-8 max-w-[200px]"><div className="section-divider" /></div>
  </motion.div>
);

/* ============ ABOUT ============ */
const About: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="about" className="relative py-28 md:py-40 section-dark overflow-hidden" ref={ref}>
      {/* Animated bg blobs */}
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-gold-500/[0.03] rounded-full blur-[120px] animate-breathe" />
      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-gold-500/[0.02] rounded-full blur-[100px] animate-breathe" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader label={t.about.label} title={t.about.title} inView={inView} number="01" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }} className="relative">
            {/* Image stack */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80" alt="Office" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
            </div>
            {/* Second image offset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-8 -right-6 md:-right-8 w-48 md:w-56 rounded-xl overflow-hidden border-4 border-black/60 shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" alt="Team" className="w-full h-32 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
            {/* Decorative frame */}
            <div className="absolute -top-5 -left-5 w-24 h-24 border border-gold-500/10 rounded-lg animate-rotate-slow" />
            <div className="absolute -bottom-5 -right-5 w-16 h-16 border border-gold-500/8 rounded-lg" />

            {/* Quote overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-24 -left-4 md:-left-8 glass-strong rounded-xl p-5 max-w-[300px]"
            >
              <div className="text-gold-400/40 text-3xl mb-2 font-display">"</div>
              <p className="text-white/50 text-xs leading-relaxed italic">{t.about.ceoQuote}</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-black font-display font-bold text-sm">M</div>
                <div>
                  <div className="text-white/70 text-xs font-semibold">{t.about.ceoName}</div>
                  <div className="text-gold-500/50 text-[10px]">{t.about.ceoTitle}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }} className="space-y-5 lg:pl-8">
            {/* Gold accent line */}
            <div className="w-12 h-[2px] bg-gradient-to-r from-gold-400 to-gold-600" />
            {t.about.description && <p className="text-white/50 leading-relaxed text-sm md:text-base">{t.about.description}</p>}
            {t.about.description2 && <p className="text-white/40 leading-relaxed text-sm">{t.about.description2}</p>}
            {t.about.description3 && <p className="text-white/30 leading-relaxed text-sm">{t.about.description3}</p>}

            <div className="section-divider my-8" />

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Investment Advisory', 'Market Entry', 'Legal Setup', 'Operations', 'Growth Strategy'].map((tag, i) => (
                <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.6 + i * 0.1 }}
                  className="px-3 py-1.5 rounded-full glass text-white/40 text-[10px] tracking-wider uppercase hover:text-gold-400 hover:border-gold-500/20 transition-all cursor-default">
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Mini stats inline */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/30 text-xs">Active Projects: <span className="text-gold-400/70 font-semibold">42</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
                <span className="text-white/30 text-xs">New This Month: <span className="text-gold-400/70 font-semibold">7</span></span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.8 }} className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {t.about.stats.map((stat: { value: string; label: string }, i: number) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
              className="glass rounded-xl p-6 md:p-8 text-center group hover:border-gold-500/25 relative overflow-hidden">
              {/* Background number */}
              <div className="absolute top-2 right-3 text-gold-500/[0.04] text-5xl font-display font-bold">{i + 1}</div>
              <div className="font-display text-3xl md:text-5xl font-bold gold-gradient-shimmer mb-2 counter-value">{stat.value}</div>
              <div className="text-white/25 text-[10px] tracking-[0.2em] uppercase">{stat.label}</div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ============ SERVICES ============ */
const Services: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  const icons = [
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 8h1m4 0h1m-5 4h1M5 21V11l7-4 7 4v10M9 21v-4h6v4" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  ];

  return (
    <section id="services" className="relative py-28 md:py-40 section-dark overflow-hidden" ref={ref}>
      <div className="absolute inset-0 egyptian-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16 md:mb-20 relative">
          <span className="absolute top-[-30px] right-[-10px] md:top-[-40px] md:right-[-10px] font-display text-[80px] md:text-[140px] font-bold leading-none bg-gradient-to-b from-gold-500/[0.06] to-transparent bg-clip-text text-transparent select-none hidden md:block">02</span>
          <span className="text-gold-400/70 text-[10px] tracking-[0.4em] uppercase font-semibold relative z-10">{t.services.label}</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5 relative z-10"><span className="gold-gradient">{t.services.title}</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto relative z-10 text-sm md:text-base">{t.services.subtitle}</p>
          <div className="mx-auto mt-8 max-w-[200px]"><div className="section-divider" /></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {t.services.items.map((item: { title: string; desc: string }, index: number) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
              className="service-card glass rounded-xl p-6 relative overflow-hidden group">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-gold-500/5 rounded-full blur-[50px] group-hover:bg-gold-500/10 transition-all duration-700" />

              {/* Icon */}
              <div className="relative mb-4 w-11 h-11 rounded-lg bg-gradient-to-br from-gold-500/10 to-gold-600/5 border border-gold-500/12 flex items-center justify-center text-gold-400 group-hover:border-gold-400/30 group-hover:from-gold-500/20 transition-all">
                {icons[index]}
              </div>

              {/* Number */}
              <div className="absolute top-3 right-4 text-gold-500/[0.06] font-display text-4xl font-bold">{String(index + 1).padStart(2, '0')}</div>

              <h3 className="relative font-display text-sm md:text-base font-semibold text-white/90 mb-2 group-hover:text-gold-400 transition-colors leading-snug">{item.title}</h3>
              <p className="relative text-white/30 text-[11px] leading-relaxed group-hover:text-white/50 transition-colors">{item.desc}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ WHY EGYPT ============ */
const WhyEgypt: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const icons = ['🌍', '📋', '📈', '🌐', '🏭', '👥'];

  return (
    <section id="why-egypt" className="relative py-28 md:py-40 section-alt overflow-hidden" ref={ref}>
      <div className="absolute inset-0 egyptian-pattern opacity-15" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/[0.03] rounded-full blur-[120px] animate-breathe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader label={t.whyEgypt.label} title={t.whyEgypt.title} subtitle={t.whyEgypt.subtitle} inView={inView} number="03" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {t.whyEgypt.points.map((point: { title: string; desc: string }, i: number) => (
            <motion.div key={point.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-xl p-7 group hover:border-gold-500/20 hover:bg-white/[0.03] transition-all relative overflow-hidden">
              <div className="absolute top-3 right-4 text-gold-500/[0.05] font-display text-4xl font-bold">{String(i + 1).padStart(2, '0')}</div>
              <div className="text-3xl mb-4 opacity-70">{icons[i]}</div>
              <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">{point.title}</h3>
              <p className="text-white/30 text-sm leading-relaxed">{point.desc}</p>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-gold-500/0 via-gold-500/30 to-gold-500/0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Counter bar */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-14 glass-strong rounded-2xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {t.whyEgypt.counterData.map((item: { value: string; label: string }, i: number) => (
            <div key={i} className="text-center group">
              <div className="font-display text-3xl md:text-5xl font-bold gold-gradient counter-value group-hover:scale-110 transition-transform">{item.value}</div>
              <div className="text-white/20 text-[10px] tracking-[0.2em] uppercase mt-2 group-hover:text-white/40 transition-colors">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ============ WORKFORCE ============ */
const Workforce: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="workforce" className="relative py-28 md:py-40 section-dark overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[150px] animate-breathe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader label={t.workforce.label} title={t.workforce.title} subtitle={t.workforce.subtitle} inView={inView} number="04" />

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {t.workforce.categories.map((cat: { name: string; icon: string; count: string }, i: number) => (
            <motion.div key={cat.name} initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-5 text-center group hover:border-gold-500/20 hover:bg-white/[0.03] transition-all">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="font-display text-2xl font-bold gold-gradient-shimmer counter-value">{cat.count}</div>
              <div className="text-white/30 text-[10px] tracking-wider mt-1 uppercase">{cat.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Highlight */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 glass-strong rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-56 md:h-auto min-h-[250px]">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="Team" className="w-full h-full object-cover img-reveal" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center relative">
              {/* Background watermark */}
              <div className="absolute top-4 right-6 text-gold-500/[0.04] font-display text-[120px] font-bold select-none">100M</div>
              <div className="font-display text-5xl md:text-6xl font-bold gold-gradient-shimmer mb-3 relative z-10">100M+</div>
              <div className="text-white/60 text-lg mb-4 relative z-10">Talented Workforce</div>
              <p className="text-white/30 text-sm leading-relaxed mb-6 relative z-10">
                Egypt offers a young, dynamic, and increasingly skilled workforce. With competitive labor costs and strong work ethic, your business can scale efficiently.
              </p>
              <a href="#contact" className="btn-gold-outline self-start px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase rounded-sm relative z-10">Find Talent →</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ============ PROCESS ============ */
const Process: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const icons = ['📞', '📊', '📝', '🚀'];

  return (
    <section id="process" className="relative py-28 md:py-40 section-alt overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader label={t.process.label} title={t.process.title} subtitle={t.process.subtitle} inView={inView} number="05" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-gold-500/10 via-gold-500/30 to-gold-500/10" />

          {t.process.steps.map((step: { title: string; desc: string }, i: number) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative glass rounded-xl p-7 group hover:border-gold-500/20 transition-all">
              {/* Number circle */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/15 to-gold-600/5 border border-gold-500/15 flex items-center justify-center text-2xl group-hover:border-gold-500/30 group-hover:from-gold-500/25 transition-all">
                    {icons[i]}
                  </div>
                </div>
                <div className="font-display text-4xl font-bold text-gold-500/[0.06]">{String(i + 1).padStart(2, '0')}</div>
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">{step.title}</h3>
              <p className="text-white/30 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ INDUSTRIAL ============ */
const Industrial: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section className="relative py-28 md:py-40 section-dark overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader label={t.industrial.label} title={t.industrial.title} subtitle={t.industrial.subtitle} inView={inView} number="06" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {t.industrial.images.map((img: { url: string; label: string }, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-xl overflow-hidden group ${i === 0 || i === 5 ? 'md:row-span-2' : ''}`}>
              <div className={`${i === 0 || i === 5 ? 'h-48 md:h-full min-h-[200px]' : 'h-48 md:h-64'}`}>
                <img src={img.url} alt={img.label} className="w-full h-full object-cover img-reveal" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              {/* Scan line effect */}
              <div className="absolute inset-0 overflow-hidden img-overlay-pattern opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="text-gold-400/70 text-[10px] tracking-[0.3em] uppercase mb-1">{img.label}</div>
                <div className="text-white/70 text-sm font-medium">{img.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ CTA BANNER ============ */
const CTABanner: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section className="relative py-24 md:py-32 cta-banner overflow-hidden" ref={ref}>
      {/* Animated bg elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute top-0 left-1/4 w-40 h-40 bg-gold-500/5 rounded-full blur-[80px]" animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute bottom-0 right-1/4 w-60 h-60 bg-gold-500/5 rounded-full blur-[100px]" animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} />
        {/* Gold particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-400/20"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30 - Math.random() * 40], opacity: [0, 0.5, 0] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
        className="relative text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="inline-block mb-6">
          <motion.div className="flex items-center gap-3" initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 0.3, duration: 0.8 }}>
            <div className="w-12 h-[1px] bg-gold-500/30" />
            <motion.div className="w-2 h-2 rotate-45 bg-gold-400/40" animate={{ rotate: [45, 405], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} />
            <div className="w-12 h-[1px] bg-gold-500/30" />
          </motion.div>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"><span className="gold-gradient">{t.cta.title}</span></h2>
        <p className="text-white/40 text-sm md:text-base mb-10 max-w-xl mx-auto">{t.cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-gold px-10 py-4 text-[11px] tracking-[0.25em] uppercase min-w-[250px] text-center rounded-sm">{t.cta.btn}</a>
          <a href="tel:+201000982441" className="btn-gold-outline px-10 py-4 text-[11px] tracking-[0.25em] uppercase min-w-[250px] text-center rounded-sm">Call: +20 10 00982441</a>
        </div>
      </motion.div>
    </section>
  );
};

/* ============ EGYPT MAP ============ */
const EgyptMap: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section className="relative py-28 md:py-40 section-alt overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader label={t.map.label} title={t.map.title} inView={inView} number="07" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* SVG Map */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="relative">
            <div className="glass-strong rounded-2xl p-6 md:p-8">
              <svg viewBox="0 0 400 450" className="w-full max-w-sm mx-auto">
                {/* Egypt simplified outline */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  d="M100,50 L150,40 L200,35 L280,40 L320,60 L340,100 L350,160 L340,220 L330,280 L300,320 L260,360 L200,400 L140,390 L100,360 L80,300 L70,240 L60,180 L65,120 L75,80 Z"
                  fill="rgba(212, 175, 55, 0.05)"
                  stroke="rgba(212, 175, 55, 0.25)"
                  strokeWidth="1.5"
                  style={{ pathLength: 1 }}
                />
                {/* Interactive Dynamic Cities */}
                {[
                  { id: 0, name: 'Cairo', cx: 200, cy: 150, r: 8, labelX: 218, labelY: 155, subY: 168, subText: 'Headquarters' },
                  { id: 1, name: 'Alexandria', cx: 130, cy: 80, r: 6, labelX: 65, labelY: 85, subY: 96, subText: 'Port & Industry' },
                  { id: 2, name: 'Suez Canal', cx: 230, cy: 140, r: 6, labelX: 246, labelY: 144, subY: 155, subText: 'Logistics Zone' },
                  { id: 3, name: 'New Capital', cx: 215, cy: 168, r: 6, labelX: 230, labelY: 178, subY: 189, subText: 'Admin Center' }
                ].map((city) => {
                  const isActive = activeRegion === city.id;
                  return (
                    <g key={city.id} className="cursor-pointer" onClick={() => setActiveRegion(city.id)}>
                      {/* Interactive Glow Ring */}
                      {isActive && (
                        <motion.circle
                          cx={city.cx}
                          cy={city.cy}
                          r={city.r * 2.5}
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="1"
                          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      )}
                      
                      {/* Core Circle */}
                      <circle
                        cx={city.cx}
                        cy={city.cy}
                        r={isActive ? city.r * 1.3 : city.r}
                        fill={isActive ? '#FFD700' : 'rgba(212, 175, 55, 0.5)'}
                        stroke="#000000"
                        strokeWidth="1.5"
                        className="transition-all duration-500"
                        style={{
                          filter: isActive ? 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.8))' : 'none'
                        }}
                      />

                      {/* Sparkle Pulse dot inside */}
                      {isActive && (
                        <circle
                          cx={city.cx}
                          cy={city.cy}
                          r={3}
                          fill="#FFFFFF"
                          className="animate-ping"
                        />
                      )}

                      {/* City Text Label */}
                      <text
                        x={city.labelX}
                        y={city.labelY}
                        fill={isActive ? '#FFD700' : 'rgba(255,255,255,0.6)'}
                        fontSize={isActive ? '13' : '11'}
                        fontFamily="Playfair Display"
                        fontWeight={isActive ? 'bold' : '500'}
                        className="transition-all duration-300 select-none"
                      >
                        {city.name}
                      </text>

                      {/* Sub-label */}
                      <text
                        x={city.labelX}
                        y={city.subY}
                        fill={isActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.25)'}
                        fontSize="8"
                        className="transition-all duration-300 select-none"
                      >
                        {city.subText}
                      </text>
                    </g>
                  );
                })}

                {/* Decorative Non-interactive Points (Aswan) */}
                <circle cx="200" cy="350" r="3" fill="rgba(212, 175, 55, 0.2)" />
                <text x="155" y="360" fill="rgba(255,255,255,0.15)" fontSize="8" className="select-none">Aswan</text>
                <circle cx="210" cy="290" r="3" fill="rgba(212, 175, 55, 0.15)" />
              </svg>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse" />
                  <span className="text-white/25 text-[10px] tracking-wider">HQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-400/50" />
                  <span className="text-white/25 text-[10px] tracking-wider">REGIONS</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Region cards */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-3">
            {t.map.regions.map((region: { name: string; desc: string }, i: number) => (
              <motion.div key={region.name} onClick={() => setActiveRegion(i)}
                className={`glass rounded-xl p-5 cursor-pointer transition-all ${activeRegion === i ? 'border-gold-500/30 bg-gold-500/[0.04]' : 'hover:border-gold-500/15'}`}
                whileHover={{ x: 5 }} transition={{ type: 'tween', duration: 0.2 }}>
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all ${activeRegion === i ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-black' : 'bg-gold-500/10 border border-gold-500/15 text-gold-400'}`}>
                    <span className="text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className={`font-display text-base font-semibold transition-colors ${activeRegion === i ? 'text-gold-400' : 'text-white/60'}`}>{region.name}</h3>
                    <p className="text-white/25 text-xs">{region.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick stats */}
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
              className="glass rounded-xl p-5 mt-2">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div><div className="font-display text-xl font-bold gold-gradient">3</div><div className="text-white/20 text-[9px] tracking-wider mt-1">CONTINENTS</div></div>
                <div><div className="font-display text-xl font-bold gold-gradient">100M+</div><div className="text-white/20 text-[9px] tracking-wider mt-1">POPULATION</div></div>
                <div><div className="font-display text-xl font-bold gold-gradient">5.2%</div><div className="text-white/20 text-[9px] tracking-wider mt-1">GDP GROWTH</div></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ============ TESTIMONIALS ============ */
const Testimonials: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActive((prev) => (prev + 1) % t.testimonials.items.length), 7000);
    return () => clearInterval(interval);
  }, [t.testimonials.items.length]);

  return (
    <section className="relative py-28 md:py-40 section-dark overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute inset-0 egyptian-pattern opacity-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader label={t.testimonials.label} title={t.testimonials.title} inView={inView} number="08" />

        {/* Testimonial Card */}
        <div className="relative">
          <motion.div key={active}
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="glass-strong rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background quote */}
            <div className="absolute top-4 left-6 md:left-10 text-gold-400/[0.06] text-[120px] md:text-[180px] font-display leading-none select-none">"</div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <motion.svg key={s} initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ delay: 0.3 + s * 0.05 }}
                  className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>

            <p className="text-white/55 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto relative z-10">
              {t.testimonials.items[active].text}
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-black font-display font-bold text-lg shadow-lg shadow-gold-500/20">
                {t.testimonials.items[active].name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-display text-base font-semibold text-gold-400">{t.testimonials.items[active].name}</div>
                <div className="text-white/30 text-sm">{t.testimonials.items[active].role} — <span className="text-gold-500/40">{t.testimonials.items[active].company}</span></div>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {t.testimonials.items.map((_: any, i: number) => (
              <motion.button key={i} onClick={() => setActive(i)}
                className={`transition-all duration-500 rounded-full ${i === active ? 'bg-gold-400 w-10 h-2' : 'bg-white/10 w-2 h-2 hover:bg-white/25'}`}
                whileHover={{ scale: 1.3 }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ PARTNERS ============ */
const Partners: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-5%' });

  return (
    <section className="relative py-20 md:py-28 section-alt overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-gold-400/70 text-[10px] tracking-[0.4em] uppercase font-semibold">{t.partners.label}</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-3"><span className="gold-gradient">{t.partners.title}</span></h2>
        </motion.div>

        {/* Infinite scroll */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10" />

          <div className="flex gap-5 animate-scroll-partners">
            {[...t.partners.items, ...t.partners.items, ...t.partners.items].map((name: string, i: number) => (
              <div key={i} className="flex-shrink-0 glass rounded-xl px-8 py-5 flex items-center justify-center min-w-[190px] hover:border-gold-500/20 transition-all cursor-default">
                <span className="text-white/25 text-sm tracking-wider whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { About, Services, WhyEgypt, Workforce, Process, Industrial, CTABanner, EgyptMap, Testimonials, Partners };
