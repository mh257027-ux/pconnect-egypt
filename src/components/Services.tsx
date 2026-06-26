import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ServicesProps {
  t: Record<string, any>;
}

const serviceIcons = [
  <svg key="0" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg key="1" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>,
  <svg key="2" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>,
  <svg key="3" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="4" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 8h1m4 0h1m-5 4h1M5 21V11l7-4 7 4v10M9 21v-4h6v4" />
  </svg>,
  <svg key="5" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="6" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  <svg key="7" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
];

const Services: React.FC<ServicesProps> = ({ t }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section id="services" className="relative py-28 md:py-36 section-dark overflow-hidden" ref={ref}>
      <div className="absolute inset-0 egyptian-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 relative"
        >
          <span className="absolute top-0 right-0 md:top-[-30px] md:right-[-10px] font-display text-[100px] font-bold leading-none bg-gradient-to-b from-gold-500/8 to-transparent bg-clip-text text-transparent select-none hidden md:block">
            02
          </span>
          <span className="text-gold-400/80 text-[10px] tracking-[0.4em] uppercase font-semibold relative z-10">
            {t.services.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 relative z-10">
            <span className="gold-gradient">{t.services.title}</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto relative z-10 text-sm md:text-base">{t.services.subtitle}</p>
          <div className="mx-auto mt-8 max-w-[200px]">
            <div className="section-divider" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.items.map((item: { title: string; desc: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="service-card glass rounded-xl p-7 relative overflow-hidden group"
            >
              {/* Hover glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/5 rounded-full blur-[60px] group-hover:bg-gold-500/10 transition-all duration-500" />

              {/* Icon */}
              <div className="relative mb-5 w-12 h-12 rounded-lg bg-gradient-to-br from-gold-500/10 to-gold-600/5 border border-gold-500/15 flex items-center justify-center text-gold-400 group-hover:border-gold-400/30 group-hover:from-gold-500/20 transition-all">
                {serviceIcons[index]}
              </div>

              {/* Step number */}
              <div className="absolute top-4 right-4 text-gold-500/10 font-display text-3xl font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <h3 className="relative font-display text-base font-semibold text-white/90 mb-3 group-hover:text-gold-400 transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="relative text-white/30 text-xs leading-relaxed group-hover:text-white/50 transition-colors">
                {item.desc}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
