import React from 'react';

const Footer: React.FC<{ t: Record<string, any> }> = ({ t }) => {
  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.whyEgypt, href: '#why-egypt' },
    { label: t.nav.workforce, href: '#workforce' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#030303] border-t border-gold-500/8">
      {/* Top wave */}
      <div className="overflow-hidden">
        <svg viewBox="0 0 1440 80" className="w-full h-12 md:h-16 -mb-[1px]">
          <path fill="rgba(212, 175, 55, 0.03)" d="M0,30 C360,60 720,10 1080,30 C1260,40 1380,35 1440,30 L1440,80 L0,80 Z" />
          <path fill="rgba(212, 175, 55, 0.02)" d="M0,50 C240,15 480,60 720,40 C960,20 1200,55 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <span className="text-black font-display font-bold text-xl">P</span>
              </div>
              <div>
                <div><span className="font-display font-bold text-gold-400 text-lg tracking-wider">PRIME</span><span className="font-display font-light text-white/80 text-lg tracking-wider ml-1">CONNECT</span></div>
                <span className="block text-gold-500/40 text-[10px] tracking-[0.35em] uppercase -mt-0.5">Egypt</span>
              </div>
            </div>
            <p className="text-white/25 text-sm leading-relaxed mb-6">{t.footer.description}</p>
            <div className="flex gap-2.5">
              {[
                { href: 'https://wa.me/201000982441', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>, color: 'green' },
                { href: 'mailto:hesham@primeegypt.com', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, color: 'gold' },
                { href: 'tel:+201000982441', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, color: 'gold' },
              ].map((social, i) => (
                <a key={i} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined}
                  className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/30 transition-all hover:border-${social.color === 'green' ? 'green-500/30 text-green-400' : 'gold-500/30 text-gold-400'}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-white/60 text-[10px] tracking-[0.2em] uppercase mb-6">{t.footer.quickLinks}</h3>
            <div className="space-y-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block text-white/25 text-sm hover:text-gold-400 transition-colors">{item.label}</a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-white/60 text-[10px] tracking-[0.2em] uppercase mb-6">{t.footer.services}</h3>
            <div className="space-y-3">
              {t.services.items.slice(0, 5).map((s: { title: string }) => (
                <span key={s.title} className="block text-white/25 text-sm">{s.title}</span>
              ))}
              <a href="#services" className="inline-block text-gold-500/40 text-xs hover:text-gold-400 transition-colors mt-2">View all →</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-white/60 text-[10px] tracking-[0.2em] uppercase mb-6">{t.footer.contact}</h3>
            <div className="space-y-4">
              <a href="tel:+201000982441" className="flex items-center gap-3 text-white/25 text-sm hover:text-gold-400 transition-colors group">
                <svg className="w-4 h-4 text-gold-500/20 group-hover:text-gold-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +20 10 00982441
              </a>
              {t.contact.emails.map((email: string, i: number) => (
                <a key={i} href={`mailto:${email}`} className="flex items-center gap-3 text-white/25 text-sm hover:text-gold-400 transition-colors group">
                  <svg className="w-4 h-4 text-gold-500/20 group-hover:text-gold-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  {email}
                </a>
              ))}
              <div className="pt-2">
                <a href="https://wa.me/201000982441" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-600/10 border border-green-500/20 text-green-400 text-xs hover:bg-green-600/20 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-xs">{t.footer.rights}</p>
          <div className="flex items-center gap-2 text-white/15 text-xs">
            <span className="font-display text-gold-500/20">Prime Connect Egypt</span>
            <span>—</span>
            <span>Excellence in Every Connection</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
