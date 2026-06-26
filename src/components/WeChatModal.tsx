import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: string;
}

const WeChatModal: React.FC<WeChatModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);
  const weChatId = '+201000982441';

  const handleCopy = () => {
    navigator.clipboard.writeText(weChatId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const content: Record<string, { title: string; desc: string; copy: string; copied: string; search: string; close: string }> = {
    en: {
      title: 'Connect on WeChat',
      desc: 'Scan the QR code or search by phone number to connect with Hesham Khalifa on WeChat.',
      copy: 'Copy WeChat ID',
      copied: 'WeChat ID Copied!',
      search: 'Search ID / Phone:',
      close: 'Close',
    },
    ar: {
      title: 'تواصل عبر وي تشات',
      desc: 'امسح رمز الـ QR أو ابحث برقم الهاتف للتواصل مع هشام خليفة عبر WeChat.',
      copy: 'نسخ معرف وي تشات',
      copied: 'تم النسخ!',
      search: 'البحث بالرقم / المعرف:',
      close: 'إغلاق',
    },
    zh: {
      title: '在微信上联系我们',
      desc: '扫描二维码或搜索手机号码，在微信上与 Hesham Khalifa 取得联系。',
      copy: '复制微信号',
      copied: '微信ID已复制！',
      search: '搜索微信号/手机号:',
      close: '关闭',
    },
  };

  const t = content[lang] || content.en;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm glass-strong rounded-2xl p-6 text-center border border-gold-500/20 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)]"
          >
            {/* Ambient gold glow */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl" />

            {/* WeChat Icon */}
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-400">
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.28 10.3c.4 0 .72-.34.72-.74 0-.4-.32-.73-.72-.73s-.74.33-.74.73c0 .4.33.74.74.74zm4.4 0c.4 0 .73-.34.73-.74 0-.4-.32-.73-.73-.73s-.74.33-.74.73c0 .4.33.74.74.74zm2.14-5.65c.16.03.3.1.4.24.8.96 1.25 2.14 1.25 3.39 0 2.87-2.3 5.2-5.13 5.2-.6 0-1.18-.1-1.72-.3L7.75 14.5c-.17.1-.38.07-.5-.08-.08-.1-.08-.24 0-.34l.84-1.3C5.7 11.66 4.15 9.77 4.15 7.6a5.16 5.16 0 014.28-5.11c.96.9 2.2 1.41 3.52 1.41.97 0 1.9-.27 2.7-.75h.01a5.64 5.64 0 01.76.7zM18 10.96c0-1.6-1-3-2.45-3.83.2.5.3 1.05.3 1.62a5.53 5.53 0 01-4.72 5.48c.84.44 1.83.69 2.88.69.52 0 1-.06 1.47-.18l1.6 1.06c.15.1.34.07.45-.07.07-.07.07-.2 0-.28l-.73-1.1a4.8 4.8 0 001.2-3.39zm-5.74 1.57c.3 0 .54-.26.54-.57s-.24-.58-.54-.58c-.3 0-.55.26-.55.58s.25.57.55.57zm3.17 0c.3 0 .54-.26.54-.57s-.24-.58-.54-.58c-.3 0-.55.26-.55.58s.25.57.55.57z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="font-display text-xl font-bold text-white mb-2">{t.title}</h3>
            <p className="text-white/40 text-xs leading-relaxed mb-6 px-2">{t.desc}</p>

            {/* QR Code SVG Mockup */}
            <div className="relative w-40 h-40 mx-auto mb-6 bg-white rounded-xl p-3 shadow-inner shadow-black/20 flex items-center justify-center border border-gold-500/10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                {/* Simulated high-tech QR code matrix */}
                <rect x="5" y="5" width="20" height="20" fill="currentColor" />
                <rect x="8" y="8" width="14" height="14" fill="white" />
                <rect x="11" y="11" width="8" height="8" fill="currentColor" />

                <rect x="75" y="5" width="20" height="20" fill="currentColor" />
                <rect x="78" y="8" width="14" height="14" fill="white" />
                <rect x="81" y="11" width="8" height="8" fill="currentColor" />

                <rect x="5" y="75" width="20" height="20" fill="currentColor" />
                <rect x="8" y="78" width="14" height="14" fill="white" />
                <rect x="11" y="81" width="8" height="8" fill="currentColor" />

                <path d="M30,10 h10 v5 h-10 z M45,5 h10 v10 h-10 z M60,10 h5 v5 h-5 z" fill="currentColor" />
                <path d="M10,30 h10 v10 h-10 z M5,45 h15 v5 h-15 z M20,60 h5 v5 h-5 z" fill="currentColor" />
                <path d="M35,35 h15 v15 h-15 z M30,55 h10 v10 h-10 z" fill="currentColor" />
                <path d="M55,30 h10 v20 h-10 z M70,35 h5 v5 h-5 z M60,65 h15 v5 h-15 z" fill="currentColor" />
                <path d="M30,75 h20 v5 h-20 z M40,85 h10 v10 h-10 z" fill="currentColor" />
                <path d="M75,30 h15 v5 h-15 z M80,45 h10 v20 h-10 z" fill="currentColor" />

                {/* Simulated WeChat Logo inside QR */}
                <rect x="40" y="40" width="20" height="20" rx="3" fill="#12B886" />
                <circle cx="46" cy="48" r="1.5" fill="white" />
                <circle cx="54" cy="48" r="1.5" fill="white" />
                <path d="M43,51 Q46,55 50,51" stroke="white" strokeWidth="1" fill="none" />
              </svg>
            </div>

            {/* Copy Field */}
            <div className="bg-black/40 border border-white/5 rounded-xl p-3.5 mb-5 flex items-center justify-between">
              <div className="text-left">
                <span className="block text-white/20 text-[9px] tracking-wider uppercase">{t.search}</span>
                <span className="font-display font-semibold text-gold-400 text-sm">{weChatId}</span>
              </div>
              <button
                onClick={handleCopy}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  copied
                    ? 'bg-green-600/20 border border-green-500/30 text-green-400'
                    : 'bg-gold-500/10 border border-gold-500/20 text-gold-400 hover:bg-gold-500/20'
                }`}
              >
                {copied ? t.copied : t.copy}
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-full py-3 border border-white/10 rounded-xl text-xs tracking-widest uppercase text-white/40 hover:text-white hover:border-white/20 transition-colors"
            >
              {t.close}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WeChatModal;
