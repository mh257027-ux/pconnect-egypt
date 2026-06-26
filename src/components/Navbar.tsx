import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Record<string, any>;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'about' as const, href: '#about' },
    { key: 'services' as const, href: '#services' },
    { key: 'whyEgypt' as const, href: '#why-egypt' },
    { key: 'workforce' as const, href: '#workforce' },
    { key: 'process' as const, href: '#process' },
    { key: 'contact' as const, href: '#contact' },
  ];

  const langConfig = [
    { key: 'en' as Language, label: 'EN', full: 'English' },
    { key: 'ar' as Language, label: 'عر', full: 'العربية' },
    { key: 'zh' as Language, label: '中文', full: 'Chinese' },
  ];

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[100] transition-all duration-150"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #996515, #FFD700, #C5A028)',
          boxShadow: '0 0 8px rgba(197, 160, 40, 0.5)',
        }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-2xl border-b border-gold-500/10 py-3'
            : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/25 group-hover:shadow-gold-500/40 transition-shadow duration-500">
                <span className="text-black font-display font-bold text-base sm:text-lg">P</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gold-400 animate-ping opacity-5" />
            </div>
            <div className="hidden sm:block">
              <div>
                <span className="font-display font-bold text-gold-400 text-base tracking-wider">PRIME</span>
                <span className="font-display font-light text-white/90 text-base tracking-wider ml-1">CONNECT</span>
              </div>
              <span className="block text-gold-500/50 text-[9px] tracking-[0.35em] uppercase -mt-0.5">Egypt</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-white/60 hover:text-gold-400 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 relative group px-3 py-2"
              >
                {t.nav[link.key]}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold-400 group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs transition-all ${
                  langOpen
                    ? 'border-gold-500/50 bg-gold-500/10 text-gold-400'
                    : 'border-white/10 text-white/60 hover:border-gold-500/30 hover:text-gold-400'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{langConfig.find(l => l.key === lang)?.label}</span>
                <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    className="absolute top-full mt-2 right-0 glass-strong rounded-xl overflow-hidden min-w-[180px] shadow-2xl shadow-black/50"
                  >
                    {langConfig.map((option) => (
                      <button
                        key={option.key}
                        onClick={() => { setLang(option.key); setLangOpen(false); }}
                        className={`w-full px-4 py-3 text-left text-sm transition-all hover:bg-gold-500/10 flex items-center justify-between ${
                          lang === option.key ? 'text-gold-400' : 'text-white/60'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs font-medium bg-white/5">
                            {option.label}
                          </span>
                          <span>{option.full}</span>
                        </div>
                        {lang === option.key && (
                          <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gold-400 hover:text-gold-300 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <motion.div
                  animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-[2px] bg-gold-400 origin-center"
                />
                <motion.div
                  animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-[2px] bg-gold-400"
                />
                <motion.div
                  animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-[2px] bg-gold-400 origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: mobileOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-black/95 backdrop-blur-2xl z-[60] border-l border-gold-500/10 lg:hidden"
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <span className="text-black font-display font-bold text-lg">P</span>
            </div>
            <div>
              <span className="font-display font-bold text-gold-400 text-sm tracking-wider">PRIME</span>
              <span className="font-display font-light text-white/80 text-sm tracking-wider ml-1">CONNECT</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-white/70 hover:text-gold-400 text-base font-medium tracking-wider transition-colors py-3.5 border-b border-white/5 px-2"
              >
                <span className="text-gold-500/40 text-xs mr-3">0{i + 1}</span>
                {t.nav[link.key]}
              </motion.a>
            ))}
          </div>

          <div className="mt-auto space-y-6">
            <div className="flex gap-2">
              {langConfig.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setLang(option.key)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    lang === option.key
                      ? 'bg-gold-500/20 text-gold-400 border border-gold-500/40'
                      : 'text-white/40 border border-white/10 hover:border-white/20'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="space-y-3 pt-4 border-t border-white/5">
              <a href="tel:+201000982441" className="flex items-center gap-3 text-white/40 hover:text-gold-400 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +20 10 00982441
              </a>
              <a href="mailto:hesham@primeegypt.com" className="flex items-center gap-3 text-white/40 hover:text-gold-400 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hesham@primeegypt.com
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
