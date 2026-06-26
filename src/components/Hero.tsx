import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GoldWavesBg from './GoldWavesBg';

const Hero: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1200], [0, 400]);
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);

  // Gold particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; phase: number;
    }[] = [];

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.4 - 0.2,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.05,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.001;

      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        const a = p.opacity * (0.3 + 0.7 * Math.sin(t * 0.8 + p.phase));

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${a})`;
        ctx.fill();

        // Glow
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
        g.addColorStop(0, `rgba(212, 175, 55, ${a * 0.15})`);
        g.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x, dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.05 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background video/image slideshow */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {/* Layer 1: Cairo */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1920&q=80')" }}
        />
        {/* Layer 2: Industrial/Port */}
        <div className="absolute inset-0 bg-cover bg-center opacity-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')" }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        {/* Gold tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold-900/5 to-transparent" />
        {/* Flowing Gold waves simulated luxury backdrop */}
        <GoldWavesBg />
      </motion.div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

      {/* Animated light streaks */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute left-0"
            style={{ top: `${25 + i * 18}%`, width: '60%', height: '1px' }}
            animate={{
              x: ['-150%', '250%'],
              opacity: [0, 0.12 + i * 0.03, 0],
            }}
            transition={{
              duration: 7 + i * 2,
              repeat: Infinity,
              repeatDelay: 2 + i * 3,
              ease: 'easeInOut',
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-gold-300/60 to-transparent blur-[1px]" />
          </motion.div>
        ))}
        {/* Vertical streaks */}
        {[0, 1].map((i) => (
          <motion.div
            key={`v${i}`}
            className="absolute top-0"
            style={{ left: `${20 + i * 60}%`, width: '1px', height: '40%' }}
            animate={{
              y: ['-100%', '200%'],
              opacity: [0, 0.08, 0],
            }}
            transition={{
              duration: 6 + i * 3,
              repeat: Infinity,
              repeatDelay: 4 + i * 5,
              ease: 'easeInOut',
            }}
          >
            <div className="w-full h-full bg-gradient-to-b from-transparent via-gold-400/40 to-transparent blur-[1px]" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Diamond decoration */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 45 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto w-3 h-3 border border-gold-400/50 mb-8"
        />

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full glass border-gold-500/10"
        >
          <div className="flex -space-x-2">
            {['W', 'L', 'A', 'S'].map((letter, i) => (
              <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-black/80 flex items-center justify-center text-[9px] font-bold text-black">
                {letter}
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="text-white/60 text-xs tracking-wide">{t.hero.trusted}</div>
            <div className="text-gold-500/40 text-[10px] tracking-wider">{t.hero.trustedSub}</div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-6"
        >
          <span className="text-white/95">
            {t.hero.headline.split('\n').map((line: string, i: number) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {i === 1 ? <span className="gold-gradient-shimmer">{line}</span> : line}
              </React.Fragment>
            ))}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-white/40 text-xs sm:text-sm md:text-base tracking-[0.25em] font-light mb-10 uppercase"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-gold px-10 py-4 text-[11px] tracking-[0.25em] uppercase min-w-[250px] text-center rounded-sm">
            {t.hero.cta1}
          </a>
          <a href="https://wa.me/201000982441" target="_blank" rel="noopener noreferrer"
            className="btn-gold-outline px-10 py-4 text-[11px] tracking-[0.25em] uppercase min-w-[250px] text-center rounded-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            {t.hero.cta2}
          </a>
        </motion.div>

        {/* Bottom diamond */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mx-auto mt-12 max-w-[200px]"
        >
          <div className="section-divider" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">{t.hero.scrollHint}</span>
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="flex flex-col items-center gap-1">
          <div className="w-[1px] h-8 bg-gradient-to-b from-gold-400/50 to-transparent" />
          <div className="w-[1px] h-3 bg-gradient-to-b from-gold-400/20 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 z-20 hidden md:block">
        <div className="w-16 h-16 border-l-[1px] border-t-[1px] border-gold-500/12" />
      </div>
      <div className="absolute top-8 right-8 z-20 hidden md:block">
        <div className="w-16 h-16 border-r-[1px] border-t-[1px] border-gold-500/12" />
      </div>
      <div className="absolute bottom-8 left-8 z-20 hidden md:block">
        <div className="w-16 h-16 border-l-[1px] border-b-[1px] border-gold-500/12" />
      </div>
      <div className="absolute bottom-8 right-8 z-20 hidden md:block">
        <div className="w-16 h-16 border-r-[1px] border-b-[1px] border-gold-500/12" />
      </div>
    </section>
  );
};

export default Hero;
