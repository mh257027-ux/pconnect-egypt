import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { About, WhyEgypt, Workforce, Process, Industrial, CTABanner, EgyptMap, Testimonials, Partners } from './components/Sections';
import translations, { Language } from './translations';
import WeChatModal from './components/WeChatModal';

/* ============= LUXURIOUS GOLD DUST CURSOR TRAIL ============= */
const CursorGlow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number;
      vx: number; vy: number;
      size: number; alpha: number;
      decay: number; rotate: number;
      rotSpeed: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };

      // Spawn gold sparkle particles on movement
      if (Math.random() < 0.6) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          size: Math.random() * 4 + 2,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015,
          rotate: Math.random() * Math.PI,
          rotSpeed: (Math.random() - 0.5) * 0.1,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const drawDiamond = (x: number, y: number, size: number, angle: number, alpha: number) => {
      if (!ctx) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.6, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.6, 0);
      ctx.closePath();

      // Golden gradient fill for sparkles
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      grad.addColorStop(0, `rgba(255, 215, 0, ${alpha})`);
      grad.addColorStop(0.5, `rgba(212, 175, 55, ${alpha * 0.6})`);
      grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth custom cursor follower interpolation
      cursorRef.current.x += (targetRef.current.x - cursorRef.current.x) * 0.15;
      cursorRef.current.y += (targetRef.current.y - cursorRef.current.y) * 0.15;

      // Draw custom cursor ring
      ctx.beginPath();
      ctx.arc(cursorRef.current.x, cursorRef.current.y, 10, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Outer breathing ring
      ctx.beginPath();
      ctx.arc(cursorRef.current.x, cursorRef.current.y, 20 + Math.sin(Date.now() * 0.01) * 3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Draw and update sparkle trail particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.rotate += p.rotSpeed;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          drawDiamond(p.x, p.y, p.size, p.rotate, p.alpha);
        }
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Background ambient cursor glow */}
      <div
        className="fixed inset-0 pointer-events-none z-[2] hidden md:block"
        style={{
          background: `radial-gradient(450px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(212,175,55,0.04), transparent 60%)`,
        }}
      />
      {/* Sparkle Trail Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9999] hidden md:block" />
    </>
  );
};

/* ============= EXPANDABLE DUAL CHAT SPEED DIAL ============= */
const ExpandingContactWidget: React.FC<{ onOpenWeChat: () => void }> = ({ onOpenWeChat }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-center gap-3">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-center gap-3 mb-2">
            {/* Email Floating Option */}
            <motion.a
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              href="mailto:hesham@primeegypt.com"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-400/25 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 hover:scale-110 transition-transform"
              title="Send an Email"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>

            {/* Phone Call Floating Option */}
            <motion.a
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.25, ease: 'easeOut', delay: 0.04 }}
              href="tel:+201000982441"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 border border-yellow-400/25 flex items-center justify-center text-black shadow-lg shadow-yellow-500/20 hover:scale-110 transition-transform"
              title="Call Us"
            >
              <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </motion.a>

            {/* WeChat Floating Option */}
            <motion.button
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.25, ease: 'easeOut', delay: 0.08 }}
              onClick={onOpenWeChat}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-700 border border-green-500/25 flex items-center justify-center text-white shadow-lg shadow-green-500/20 hover:scale-110 transition-transform"
              title="Connect on WeChat"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.28 10.3c.4 0 .72-.34.72-.74 0-.4-.32-.73-.72-.73s-.74.33-.74.73c0 .4.33.74.74.74zm4.4 0c.4 0 .73-.34.73-.74 0-.4-.32-.73-.73-.73s-.74.33-.74.73c0 .4.33.74.74.74zm2.14-5.65c.16.03.3.1.4.24.8.96 1.25 2.14 1.25 3.39 0 2.87-2.3 5.2-5.13 5.2-.6 0-1.18-.1-1.72-.3L7.75 14.5c-.17.1-.38.07-.5-.08-.08-.1-.08-.24 0-.34l.84-1.3C5.7 11.66 4.15 9.77 4.15 7.6a5.16 5.16 0 014.28-5.11c.96.9 2.2 1.41 3.52 1.41.97 0 1.9-.27 2.7-.75h.01a5.64 5.64 0 01.76.7zM18 10.96c0-1.6-1-3-2.45-3.83.2.5.3 1.05.3 1.62a5.53 5.53 0 01-4.72 5.48c.84.44 1.83.69 2.88.69.52 0 1-.06 1.47-.18l1.6 1.06c.15.1.34.07.45-.07.07-.07.07-.2 0-.28l-.73-1.1a4.8 4.8 0 001.2-3.39zm-5.74 1.57c.3 0 .54-.26.54-.57s-.24-.58-.54-.58c-.3 0-.55.26-.55.58s.25.57.55.57zm3.17 0c.3 0 .54-.26.54-.57s-.24-.58-.54-.58c-.3 0-.55.26-.55.58s.25.57.55.57z" />
              </svg>
            </motion.button>

            {/* WhatsApp Floating Option */}
            <motion.a
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.25, ease: 'easeOut', delay: 0.12 }}
              href="https://wa.me/201000982441"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-lg shadow-green-500/20 hover:scale-110 transition-transform"
              title="Connect on WhatsApp"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Main expandable speed dial trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 via-gold-400 to-gold-600 flex items-center justify-center text-black shadow-lg shadow-gold-500/30 transition-transform duration-300 ${
          isOpen ? 'rotate-135' : ''
        }`}
        aria-label="Connect with us"
      >
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  );
};

/* ============= APP ============= */
const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);
  const t = translations[lang];

  // Mouse coordinate tracker for CSS variable
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Language & Dir handler
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.setAttribute('lang', lang);
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
      body.style.fontFamily = "'Noto Sans Arabic', 'Inter', sans-serif";
    } else if (lang === 'zh') {
      html.setAttribute('dir', 'ltr');
      body.style.fontFamily = "'Noto Sans SC', 'Inter', sans-serif";
    } else {
      html.setAttribute('dir', 'ltr');
      body.style.fontFamily = "'Inter', sans-serif";
    }
  }, [lang]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden">
        {/* Animated background rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border"
              style={{
                borderColor: `rgba(212, 175, 55, ${0.15 - i * 0.025})`,
              }}
              animate={{
                scale: [0.8 + i * 0.15, 1.1 + i * 0.1, 0.8 + i * 0.15],
                opacity: [0.3, 0, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              initial={{
                width: 100 + i * 80,
                height: 100 + i * 80,
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.3, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
          className="relative z-10"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.3)]">
            <span className="text-black font-display font-bold text-4xl md:text-6xl">P</span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-center relative z-10"
        >
          <div>
            <span className="font-display font-bold text-gold-400 text-2xl tracking-[0.2em]">PRIME</span>
            <span className="font-display font-light text-white/80 text-2xl tracking-[0.15em] ml-2">CONNECT</span>
          </div>
          <div className="text-gold-500/50 text-[10px] tracking-[0.5em] uppercase mt-1">Egypt</div>
        </motion.div>

        {/* Progress line */}
        <motion.div
          className="mt-12 w-48 h-[1px] bg-white/10 relative overflow-hidden rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.2, duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-white/20 text-[10px] tracking-[0.4em] uppercase mt-6 relative z-10"
        >
          {translations[lang].loading}
        </motion.p>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gold-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40 - Math.random() * 60],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Reading progress */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Gold Dust Custom Follower & Glow */}
      <CursorGlow />

      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <WhyEgypt t={t} />
      <CTABanner t={t} />
      <Workforce t={t} />
      <Process t={t} />
      <Industrial t={t} />
      <EgyptMap t={t} />
      <Testimonials t={t} />
      <Partners t={t} />
      <Contact t={t} />
      <Footer t={t} />

      {/* Multilingual Speed Dial Contact Widget */}
      <ExpandingContactWidget onOpenWeChat={() => setIsWeChatOpen(true)} />

      {/* Elegant WeChat Connect Modal */}
      <WeChatModal isOpen={isWeChatOpen} onClose={() => setIsWeChatOpen(false)} lang={lang} />
    </div>
  );
};

export default App;
