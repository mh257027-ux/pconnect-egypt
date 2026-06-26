export type Language = 'en' | 'ar' | 'zh';

export interface Translation {
  nav: {
    about: string;
    services: string;
    whyEgypt: string;
    workforce: string;
    process: string;
    contact: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    scrollHint: string;
    trusted: string;
    trustedSub: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    description2: string;
    description3: string;
    ceoName: string;
    ceoTitle: string;
    ceoQuote: string;
    stats: { value: string; label: string; }[];
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string; }[];
  };
  whyEgypt: {
    label: string;
    title: string;
    subtitle: string;
    points: { title: string; desc: string; }[];
    counterData: { value: string; label: string; }[];
  };
  workforce: {
    label: string;
    title: string;
    subtitle: string;
    categories: { name: string; icon: string; count: string }[];
  };
  industrial: {
    label: string;
    title: string;
    subtitle: string;
    categories: string[];
    images: { url: string; label: string }[];
  };
  process: {
    label: string;
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    btn: string;
  };
  map: {
    label: string;
    title: string;
    regions: { name: string; desc: string }[];
  };
  testimonials: {
    label: string;
    title: string;
    items: { name: string; role: string; text: string; company: string }[];
  };
  partners: {
    label: string;
    title: string;
    items: string[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    contactInfo: { phone: string; whatsapp: string; email: string; address: string; hours: string };
    emails: string[];
  };
  footer: {
    rights: string;
    quickLinks: string;
    services: string;
    contact: string;
    description: string;
  };
  loading: string;
}

const translations: Record<Language, Translation> = {
  en: {
    nav: { about: 'About', services: 'Services', whyEgypt: 'Why Egypt', workforce: 'Workforce', process: 'Process', contact: 'Contact' },
    hero: {
      headline: 'Your Gateway to the\nEgyptian Market',
      subtitle: 'Investment • Industrial Development • Market Expansion',
      cta1: 'Start Your Business',
      cta2: 'Contact Us',
      scrollHint: 'Scroll to explore',
      trusted: 'Trusted by 80+ Chinese Investors',
      trustedSub: 'in Egypt since 2013',
    },
    about: {
      label: 'Who We Are',
      title: 'About Prime Connect Egypt',
      description: 'Prime Connect Egypt is a premier business consultancy that bridges the gap between Chinese investors and Egypt\'s rapidly evolving market. We deliver comprehensive, end-to-end solutions for international enterprises seeking to establish, expand, and thrive in one of Africa\'s most dynamic economies.',
      description2: 'With over a decade of deep-rooted expertise in both Egyptian and Chinese business ecosystems, our seasoned team of professionals provides unparalleled market intelligence, regulatory navigation, strategic partnerships, and operational excellence.',
      description3: 'From initial market entry strategy to full-scale operational deployment, we serve as your dedicated partner throughout every phase of your Egyptian investment journey.',
      ceoName: 'Mohamed Al-Sayed',
      ceoTitle: 'Founder & Managing Director',
      ceoQuote: '"Our mission is to make Egypt the most accessible and profitable market for international investors."',
      stats: [
        { value: '150+', label: 'Projects Delivered' },
        { value: '80+', label: 'Chinese Investors' },
        { value: '12+', label: 'Years Experience' },
        { value: '25+', label: 'Industry Sectors' },
      ],
    },
    services: {
      label: 'What We Do',
      title: 'Investment Services',
      subtitle: 'Comprehensive, tailored solutions designed to accelerate your market entry and expansion in Egypt',
      items: [
        { title: 'Real Estate Investment', desc: 'Premium property acquisition and development across Cairo, New Administrative Capital, Red Sea coast, and strategic economic corridors.' },
        { title: 'Factory & Industrial Setup', desc: 'Complete factory establishment including feasibility studies, site selection, construction permits, and operational commissioning.' },
        { title: 'Import & Export Solutions', desc: 'End-to-end trade facilitation: customs clearance, logistics optimization, documentation, and bilateral trade compliance.' },
        { title: 'Company Formation', desc: 'Full-spectrum business registration, legal entity structuring, tax optimization, and regulatory compliance setup.' },
        { title: 'Government Relations & Licensing', desc: 'Expedited permit processing through established government channels, investment authority coordination, and policy advisory.' },
        { title: 'Recruitment Solutions', desc: 'Strategic talent acquisition: engineers, management teams, skilled labor, and multilingual professionals across all sectors.' },
        { title: 'Office & Headquarters Setup', desc: 'Premium workspace sourcing in Egypt\'s most prestigious business districts, including New Capital and Smart Village.' },
        { title: 'Industrial Expansion', desc: 'Scale operations through industrial zone partnerships, infrastructure development, and supply chain optimization.' },
      ],
    },
    whyEgypt: {
      label: 'Opportunity',
      title: 'Why Invest in Egypt',
      subtitle: 'Egypt presents an unmatched investment landscape with strategic advantages for global businesses',
      points: [
        { title: 'Strategic Geographic Hub', desc: 'Gateway to Africa, Europe, and the Middle East with access to 3 continents, Suez Canal, and major international shipping corridors.' },
        { title: 'Government Investment Incentives', desc: 'Tax holidays, customs exemptions, free zone benefits, and special economic zone advantages designed for foreign investors.' },
        { title: 'Rapidly Growing Economy', desc: 'One of Africa\'s top 3 economies with consistent GDP growth, massive infrastructure investments, and structural reforms.' },
        { title: 'Massive Market Access', desc: 'Access to 2.5+ billion consumers through COMESA, GAFTA, EU-Egypt Association, and African Continental Free Trade Agreement.' },
        { title: 'Expanding Industrial Base', desc: 'Thriving manufacturing ecosystem with modern industrial parks, SCZone special economic area, and growing tech sector.' },
        { title: 'Competitive Labor Market', desc: 'Over 100 million people with a young, educated workforce, competitive costs, and growing technical expertise.' },
      ],
      counterData: [
        { value: '100M+', label: 'Population' },
        { value: '5.2%', label: 'GDP Growth' },
        { value: '$130B', label: 'Economy Size' },
        { value: '#1', label: 'Africa FDI Hub' },
      ],
    },
    workforce: {
      label: 'Talent',
      title: 'Workforce & Recruitment',
      subtitle: 'We connect you with Egypt\'s exceptional talent pool across every industry and skill level',
      categories: [
        { name: 'Engineers', icon: '⚙️', count: '500K+' },
        { name: 'Factory Workers', icon: '🔧', count: '2M+' },
        { name: 'Management Teams', icon: '👔', count: '200K+' },
        { name: 'Office Staff', icon: '💼', count: '1.5M+' },
        { name: 'Skilled Labor', icon: '🏗️', count: '3M+' },
        { name: 'Multilingual Teams', icon: '🌐', count: '100K+' },
      ],
    },
    industrial: {
      label: 'Real Estate',
      title: 'Industrial & Real Estate',
      subtitle: 'Premium industrial and commercial properties across Egypt\'s most strategic economic zones',
      categories: ['Industrial Zones', 'Warehouses', 'Office Spaces', 'Commercial Buildings', 'Factories', 'Mixed-Use'],
      images: [
        { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', label: 'Industrial Zones' },
        { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', label: 'Office Spaces' },
        { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', label: 'Construction' },
        { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', label: 'Commercial' },
        { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', label: 'Factories' },
        { url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80', label: 'Residential' },
      ],
    },
    process: {
      label: 'How It Works',
      title: 'Our Proven Process',
      subtitle: 'A structured, transparent approach that ensures your Egyptian investment journey is seamless from day one',
      steps: [
        { title: 'Initial Consultation', desc: 'We begin with a comprehensive understanding of your business goals, investment capacity, and target market. Our team conducts a preliminary feasibility assessment.' },
        { title: 'Market Research & Strategy', desc: 'Deep-dive market analysis, competitive landscape review, regulatory environment assessment, and customized investment strategy development.' },
        { title: 'Entity Setup & Legal', desc: 'Complete business registration, legal structuring, tax optimization, banking setup, and full regulatory compliance documentation.' },
        { title: 'Operations Launch', desc: 'Site selection, facility setup, team recruitment, supply chain establishment, and full operational deployment with ongoing support.' },
      ],
    },
    cta: {
      title: 'Ready to Enter the Egyptian Market?',
      subtitle: 'Let our experts guide your investment journey. Schedule a free consultation today.',
      btn: 'Get Free Consultation',
    },
    map: {
      label: 'Locations',
      title: 'Strategic Locations Across Egypt',
      regions: [
        { name: 'Cairo', desc: 'Capital city, business hub' },
        { name: 'Alexandria', desc: 'Major port, industrial zone' },
        { name: 'Suez Canal Zone', desc: 'Free trade, logistics' },
        { name: 'New Capital', desc: 'New administrative center' },
      ],
    },
    testimonials: {
      label: 'Success Stories',
      title: 'What Our Clients Say',
      items: [
        { name: 'Wei Zhang', role: 'CEO', text: 'Prime Connect Egypt made our factory setup in Cairo completely seamless. Their deep understanding of both Chinese and Egyptian business cultures was invaluable. We were operational in just 6 months.', company: 'Zhang Industries' },
        { name: 'Li Chen', role: 'Director', text: 'The team\'s expertise in government relations saved us months of bureaucratic delays. Their network and knowledge of Egyptian regulations is unmatched. Highly recommended.', company: 'Pacific Trading Co.' },
        { name: 'Ahmed Hassan', role: 'Managing Partner', text: 'Their real estate investment advisory identified prime locations that exceeded our ROI expectations by 40%. Professional, responsive, and truly committed to client success.', company: 'Suez Development Group' },
        { name: 'Sarah Wang', role: 'VP Operations', text: 'From recruitment to office setup, Prime Connect handled everything. Their multilingual team made communication effortless. We\'ve expanded to 3 locations in Egypt with their help.', company: 'Dragon Tech Solutions' },
      ],
    },
    partners: {
      label: 'Global Network',
      title: 'Our Partners & Network',
      items: [
        'Suez Canal Authority', 'GAFI Egypt', 'MCIT', 'New Capital Authority',
        'Industrial Dev Auth', 'Chinese Embassy', 'CIB Bank', 'Trade Agency',
        'Egyptian FRA', 'SCZone', 'Ministry of Investment', 'ITIDA',
        'Cairo Chamber', 'Federation of Industries', 'Egypt Export Council', 'Chinese Business Council',
      ],
    },
    contact: {
      label: 'Get in Touch',
      title: 'Start Your Journey',
      subtitle: 'Ready to explore business opportunities in Egypt? Our team of experts is ready to guide your investment.',
      formName: 'Full Name',
      formEmail: 'Email Address',
      formPhone: 'Phone Number',
      formSubject: 'Subject',
      formMessage: 'Your Message',
      formSubmit: 'Send Message',
      namePlaceholder: 'Enter your full name',
      emailPlaceholder: 'Enter your email address',
      phonePlaceholder: 'Enter your phone number',
      subjectPlaceholder: 'How can we help?',
      messagePlaceholder: 'Tell us about your business needs and investment goals...',
      contactInfo: {
        phone: '+20 10 00982441',
        whatsapp: '+20 10 00982441',
        email: 'hesham@primeegypt.com',
        address: 'Cairo, Egypt',
        hours: 'Sunday – Thursday: 9:00 AM – 6:00 PM',
      },
      emails: ['hesham@primeegypt.com', 'mo@primeegypt.com', 'khalifa@primeegypt.com'],
    },
    footer: {
      rights: '© 2025 Prime Connect Egypt. All rights reserved.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact Us',
      description: 'Your trusted gateway to Egypt\'s booming market. We connect Chinese investment with Egyptian opportunity, delivering world-class business solutions across all sectors.',
    },
    loading: 'Loading...',
  },
  ar: {
    nav: { about: 'من نحن', services: 'خدماتنا', whyEgypt: 'لماذا مصر', workforce: 'القوى العاملة', process: 'آلية العمل', contact: 'تواصل معنا' },
    hero: {
      headline: 'بوابتك إلى\nالسوق المصري',
      subtitle: 'استثمار • تنمية صناعية • توسع سوقي',
      cta1: 'ابدأ أعمالك',
      cta2: 'تواصل معنا',
      scrollHint: 'مرر للاستكشاف',
      trusted: 'موثوق من قبل أكثر من 80 مستثمر صيني',
      trustedSub: 'في مصر منذ 2013',
    },
    about: {
      label: 'من نحن',
      title: 'عن برايم كونكت إيجيبت',
      description: 'برايم كونكت إيجيبت هي شركة استشارات أعمال رائدة تربط بين المستثمرين الصينيين والسوق المصري المزدهر. نقدم حلولاً شاملة ومتكاملة للشركات الدولية التي تتطلع للتأسيس والتوسع والنجاح في أحد أكثر الاقتصادات ديناميكية في أفريقيا.',
      description2: 'بأكثر من عقد من الخبرة المتجذرة في كل من النظامين التجاريين المصري والصيني، يقدم فريقنا من المحترفين ذوي الخبرة استخبارات سوقية لا مثيل لها وتوجيهاً تنظيمياً وشراكات استراتيجية وتميزاً تشغيلياً.',
      description3: 'من استراتيجية دخول السوق الأولى إلى النشر التشغيلي الكامل، نخدم كشريكك المخصص طوال كل مرحلة من رحلة استثمارك في مصر.',
      ceoName: 'محمد السيد',
      ceoTitle: 'المؤسس والمدير العام',
      ceoQuote: '"مهمتنا هي جعل مصر السوق الأكثر سهولة وربحية للمستثمرين الدوليين."',
      stats: [
        { value: '+150', label: 'مشروع منجز' },
        { value: '+80', label: 'مستثمر صيني' },
        { value: '+12', label: 'سنوات خبرة' },
        { value: '+25', label: 'قطاع صناعي' },
      ],
    },
    services: {
      label: 'خدماتنا',
      title: 'خدمات الاستثمار',
      subtitle: 'حلول شاملة ومصممة خصيصاً لتسريع دخولك السوق المصري وتوسعك فيه',
      items: [
        { title: 'الاستثمار العقاري', desc: 'الاستحواذ العقاري والتنمية الفاخرة عبر القاهرة والعاصمة الإدارية الجديدة وساحل البحر الأحمر.' },
        { title: 'إنشاء المصانع', desc: 'تأسيس المصانع بشكل كامل يشمل دراسات الجدوى واختيار الموقع والتراخيص والتشغيل.' },
        { title: 'حلول الاستيراد والتصدير', desc: 'تسهيل التجارة من الألف إلى الياء: التخليص الجمركي والخدمات اللوجستية والامتثال.' },
        { title: 'تأسيس الشركات', desc: 'تسجيل الأعمال الكامل والهيكلة القانونية وتحسين الضرائب والامتثال التنظيمي.' },
        { title: 'العلاقات الحكومية والتراخيص', desc: 'معالجة التصاريح المعجلة عبر القنوات الحكومية الراسخة والتنسيق مع هيئة الاستثمار.' },
        { title: 'حلول التوظيف', desc: 'استقطاب المواهب: مهندسون وفرق إدارة وعمال مهرة ومحترفون متعددو اللغات.' },
        { title: 'إعداد المكاتب والمقار', desc: 'توفير مساحات عمل فاخرة في أرقى الأحياء التجارية بما في ذلك العاصمة الجديدة.' },
        { title: 'التوسع الصناعي', desc: 'توسيع العمليات من خلال شراكات المناطق الصناعية وتطوير البنية التحتية.' },
      ],
    },
    whyEgypt: {
      label: 'الفرصة',
      title: 'لماذا الاستثمار في مصر',
      subtitle: 'تقدم مصر مشهداً استثمارياً لا مثيل له مع مزايا استراتيجية للشركات العالمية',
      points: [
        { title: 'مركز جغرافي استراتيجي', desc: 'بوابة أفريقيا وأوروبا والشرق الأوسط مع الوصول إلى 3 قارات وقناة السويس.' },
        { title: 'حوافز استثمارية حكومية', desc: 'إعفاءات ضريبية وجمركية ومزايا المناطق الحرة والمناطق الاقتصادية الخاصة.' },
        { title: 'اقتصاد سريع النمو', desc: 'من أفضل 3 اقتصادات في أفريقيا مع نمو متسق واستثمارات بنية تحتية ضخمة.' },
        { title: 'وصول ضخم للأسواق', desc: 'الوصول لأكثر من 2.5 مليار مستهلك عبر اتفاقيات تجارية مع أفريقيا والاتحاد الأوروبي.' },
        { title: 'قاعدة صناعية متنامية', desc: 'نظام تصنيع مزدهر مع حدائق صناعية حديثة ومنطقة قناة السويس الاقتصادية.' },
        { title: 'سوق عمل تنافسي', desc: 'أكثر من 100 مليون شخص مع قوة عاملة شابة ومتعلمة وتكاليف تنافسية.' },
      ],
      counterData: [
        { value: '+100M', label: 'عدد السكان' },
        { value: '5.2%', label: 'نمو الناتج' },
        { value: '$130B', label: 'حجم الاقتصاد' },
        { value: '#1', label: 'مركز أفريقيا' },
      ],
    },
    workforce: {
      label: 'المواهب',
      title: 'القوى العاملة والتوظيف',
      subtitle: 'نربطك بمجموعة المواهب الاستثنائية في مصر عبر جميع الصناعات ومستويات المهارات',
      categories: [
        { name: 'المهندسون', icon: '⚙️', count: '+500K' },
        { name: 'عمال المصانع', icon: '🔧', count: '+2M' },
        { name: 'فرق الإدارة', icon: '👔', count: '+200K' },
        { name: 'الموظفون', icon: '💼', count: '+1.5M' },
        { name: 'العمالة الماهرة', icon: '🏗️', count: '+3M' },
        { name: 'فرق متعددة اللغات', icon: '🌐', count: '+100K' },
      ],
    },
    industrial: {
      label: 'العقارات',
      title: 'الصناعي والعقاري',
      subtitle: 'عقارات صناعية وتجارية فاخرة في أكثر المناطق الاقتصادية استراتيجية في مصر',
      categories: ['المناطق الصناعية', 'المستودعات', 'المساحات المكتبية', 'المباني التجارية', 'المصانع', 'متعدد الاستخدامات'],
      images: [
        { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', label: 'المناطق الصناعية' },
        { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', label: 'المساحات المكتبية' },
        { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', label: 'الإنشاءات' },
        { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', label: 'التجاري' },
        { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', label: 'المصانع' },
        { url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80', label: 'السكني' },
      ],
    },
    process: {
      label: 'آلية العمل',
      title: 'عمليتنا المثبتة',
      subtitle: 'نهج منظم وشفاف يضمن أن رحلة استثمارك المصرية ستكون سلسة من اليوم الأول',
      steps: [
        { title: 'الاستشارة الأولية', desc: 'نبدأ بفهم شامل لأهداف عملك وقدرة الاستثمار والسوق المستهدف. يقوم فريقنا بإجراء تقييم أولي للجدوى.' },
        { title: 'بحث السوق والاستراتيجية', desc: 'تحليل متعمق للسوق ومراجعة المشهد التنافسي وتقييم البيئة التنظيمية وتطوير استراتيجية استثمار مخصصة.' },
        { title: 'تأسيس الكيان والقانوني', desc: 'تسجيل الأعمال الكامل والهيكلة القانونية وتحسين الضرائب وإعداد البنوك والوثائق التنظيمية.' },
        { title: 'إطلاق العمليات', desc: 'اختيار الموقع وإعداد المرفق وتوظيف الفريق وتأسيس سلسلة التوريد والنشر التشغيلي الكامل.' },
      ],
    },
    cta: {
      title: 'مستعد لدخول السوق المصري؟',
      subtitle: 'دع خبرائنا يرشدون رحلة استثمارك. احجز استشارة مجانية اليوم.',
      btn: 'احصل على استشارة مجانية',
    },
    map: {
      label: 'المواقع',
      title: 'مواقع استراتيجية في مصر',
      regions: [
        { name: 'القاهرة', desc: 'العاصمة، مركز الأعمال' },
        { name: 'الإسكندرية', desc: 'ميناء رئيسي، منطقة صناعية' },
        { name: 'منطقة قناة السويس', desc: 'تجارة حرة، لوجستيات' },
        { name: 'العاصمة الجديدة', desc: 'المركز الإداري الجديد' },
      ],
    },
    testimonials: {
      label: 'قصص النجاح',
      title: 'ماذا يقول عملاؤنا',
      items: [
        { name: 'وي تشانغ', role: 'الرئيس التنفيذي', text: 'جعل برايم كونكت إيجيبت إنشاء مصنعنا في القاهرة سلساً تماماً. فهمهم العميق لثقافات الأعمال الصينية والمصرية كان لا يقدر بثمن. كنا عاملين في 6 أشهر فقط.', company: 'تشانغ للصناعات' },
        { name: 'لي تشين', role: 'المدير', text: 'خبرة الفريق في العلاقات الحكومية وفرت لنا أشهر من التأخير البيروقراطي. شبكتهم ومعرفتهم باللوائح المصرية لا مثيل لها.', company: 'باسيفيك للتجارة' },
        { name: 'أحمد حسن', role: 'شريك إداري', text: 'استشارتهم في الاستثمار العقاري حددت مواقع رئيسية تجاوزت توقعاتنا للعائد بنسبة 40%. محترفون ومتجاوبون.', company: 'مجموعة السويس' },
        { name: 'سارة وانغ', role: 'نائب الرئيس للعمليات', text: 'من التوظيف إلى إعداد المكاتب، تعامل برايم كونكت مع كل شيء. فريقهم متعدد اللغات جعل التواصل سهلاً.', company: 'دراجون تيك' },
      ],
    },
    partners: {
      label: 'الشبكة العالمية',
      title: 'شركاؤنا وشبكتنا',
      items: [
        'هيئة قناة السويس', 'الهيئة العامة للاستثمار', 'وزارة الاتصالات', 'هيئة العاصمة الإدارية',
        'هيئة التنمية الصناعية', 'السفارة الصينية', 'بنك القاهرة', 'وكالة التجارة',
        'الهيئة المالية', 'منطقة قناة السويس', 'وزارة الاستثمار', 'ايتيدا',
        'غرفة القاهرة', 'اتحاد الصناعات', 'مجلس التصدير', 'مجلس الأعمال الصيني',
      ],
    },
    contact: {
      label: 'تواصل معنا',
      title: 'ابدأ رحلتك',
      subtitle: 'مستعد لاستكشاف فرص الأعمال في مصر؟ فريق الخبراء لدينا جاهز لتوجيه استثمارك.',
      formName: 'الاسم الكامل',
      formEmail: 'البريد الإلكتروني',
      formPhone: 'رقم الهاتف',
      formSubject: 'الموضوع',
      formMessage: 'رسالتك',
      formSubmit: 'إرسال الرسالة',
      namePlaceholder: 'أدخل اسمك الكامل',
      emailPlaceholder: 'أدخل بريدك الإلكتروني',
      phonePlaceholder: 'أدخل رقم هاتفك',
      subjectPlaceholder: 'كيف يمكننا مساعدتك؟',
      messagePlaceholder: 'أخبرنا عن احتياجاتك التجارية وأهدافك الاستثمارية...',
      contactInfo: {
        phone: '+20 10 00982441',
        whatsapp: '+20 10 00982441',
        email: 'hesham@primeegypt.com',
        address: 'القاهرة، مصر',
        hours: 'الأحد – الخميس: 9:00 ص – 6:00 م',
      },
      emails: ['hesham@primeegypt.com', 'mo@primeegypt.com', 'khalifa@primeegypt.com'],
    },
    footer: {
      rights: '© 2025 برايم كونكت إيجيبت. جميع الحقوق محفوظة.',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
      contact: 'تواصل معنا',
      description: 'بوابتك الموثوقة للسوق المصري المزدهر. نربط الاستثمار الصيني بالفرصة المصرية منذ 2013.',
    },
    loading: 'جاري التحميل...',
  },
  zh: {
    nav: { about: '关于我们', services: '服务', whyEgypt: '为什么埃及', workforce: '人力资源', process: '流程', contact: '联系我们' },
    hero: {
      headline: '通往埃及市场的\n门户',
      subtitle: '投资 • 工业发展 • 市场拓展',
      cta1: '开启您的业务',
      cta2: '联系我们',
      scrollHint: '滚动探索',
      trusted: '超过80位中国投资者信赖',
      trustedSub: '自2013年起服务埃及',
    },
    about: {
      label: '关于我们',
      title: '关于 Prime Connect Egypt',
      description: 'Prime Connect Egypt 是一家顶级商业咨询公司，致力于连接中国投资者与埃及蓬勃发展的市场。我们为寻求在非洲最具活力的经济体之一建立、扩展和取得成功的国际企业提供全面的端到端解决方案。',
      description2: '凭借在埃及和中国商业生态系统中十多年的深厚专业知识，我们经验丰富的专业团队提供无与伦比的市场情报、监管导航、战略合作伙伴关系和卓越运营。',
      description3: '从最初的市场进入战略到全面的运营部署，我们在您埃及投资之旅的每个阶段都作为您的专属合作伙伴。',
      ceoName: 'Mohamed Al-Sayed',
      ceoTitle: '创始人兼总经理',
      ceoQuote: '"我们的使命是让埃及成为国际投资者最容易进入和最盈利的市场。"',
      stats: [
        { value: '150+', label: '项目交付' },
        { value: '80+', label: '中国投资者' },
        { value: '12+', label: '年经验' },
        { value: '25+', label: '行业领域' },
      ],
    },
    services: {
      label: '我们的服务',
      title: '投资服务',
      subtitle: '全面、量身定制的解决方案，旨在加速您进入埃及市场并实现扩张',
      items: [
        { title: '房地产投资', desc: '在开罗、新行政首都、红海海岸和战略经济走廊提供优质物业收购和开发。' },
        { title: '工厂与工业建设', desc: '完整的工厂建设，包括可行性研究、选址、施工许可和运营调试。' },
        { title: '进出口解决方案', desc: '端到端的贸易便利化：清关、物流优化、文件和双边贸易合规。' },
        { title: '公司注册', desc: '全方位商业注册、法律实体架构、税务优化和监管合规设置。' },
        { title: '政府关系与许可', desc: '通过既定的政府渠道加速许可处理、投资局协调和政策咨询。' },
        { title: '招聘解决方案', desc: '战略人才获取：工程师、管理团队、熟练劳动力和各行业的多语言专业人士。' },
        { title: '办公室与总部建设', desc: '在埃及最负盛名的商业区提供优质工作空间，包括新首都和智能村。' },
        { title: '工业扩张', desc: '通过工业区合作伙伴关系、基础设施开发和供应链优化扩展业务。' },
      ],
    },
    whyEgypt: {
      label: '机遇',
      title: '为什么投资埃及',
      subtitle: '埃及为全球企业提供了无与伦比的投资环境和战略优势',
      points: [
        { title: '战略地理枢纽', desc: '通往非洲、欧洲和中东的门户，可进入三大洲、苏伊士运河和主要国际航运走廊。' },
        { title: '政府投资激励', desc: '税收减免、关税豁免、自由区利益和专为外国投资者设计的特殊经济区优势。' },
        { title: '快速增长的经济', desc: '非洲前三大经济体之一，GDP持续增长，大规模基础设施投资和结构性改革。' },
        { title: '巨大的市场准入', desc: '通过COMESA、GAFTA、欧盟-埃及协定和非洲大陆自由贸易协定进入超过25亿消费者。' },
        { title: '不断扩大的工业基础', desc: '蓬勃发展的制造生态系统，拥有现代工业园和SCZone特殊经济区。' },
        { title: '有竞争力的劳动力市场', desc: '超过1亿人口，拥有年轻、受过良好教育的劳动力、具有竞争力的成本和技术专长。' },
      ],
      counterData: [
        { value: '1亿+', label: '人口' },
        { value: '5.2%', label: 'GDP增长' },
        { value: '$1300亿', label: '经济规模' },
        { value: '#1', label: '非洲FDI中心' },
      ],
    },
    workforce: {
      label: '人才',
      title: '人力资源与招聘',
      subtitle: '我们将您与埃及各行各业的优秀人才联系起来',
      categories: [
        { name: '工程师', icon: '⚙️', count: '50万+' },
        { name: '工厂工人', icon: '🔧', count: '200万+' },
        { name: '管理团队', icon: '👔', count: '20万+' },
        { name: '办公人员', icon: '💼', count: '150万+' },
        { name: '熟练劳动力', icon: '🏗️', count: '300万+' },
        { name: '多语言团队', icon: '🌐', count: '10万+' },
      ],
    },
    industrial: {
      label: '房地产',
      title: '工业与房地产',
      subtitle: '埃及最具战略意义的经济区的优质工业和商业物业',
      categories: ['工业区', '仓库', '办公空间', '商业建筑', '工厂', '综合用途'],
      images: [
        { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', label: '工业区' },
        { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', label: '办公空间' },
        { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', label: '建筑' },
        { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', label: '商业' },
        { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', label: '工厂' },
        { url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80', label: '住宅' },
      ],
    },
    process: {
      label: '工作流程',
      title: '我们经过验证的流程',
      subtitle: '结构化、透明的方法，确保您的埃及投资之旅从第一天起就顺畅无阻',
      steps: [
        { title: '初步咨询', desc: '我们首先全面了解您的业务目标、投资能力和目标市场。我们的团队进行初步可行性评估。' },
        { title: '市场研究与战略', desc: '深入的市场分析、竞争环境审查、监管环境评估和定制化投资战略制定。' },
        { title: '实体设立与法律', desc: '完整的商业注册、法律架构、税务优化、银行设置和全面的监管合规文件。' },
        { title: '运营启动', desc: '选址、设施建设、团队招聘、供应链建立和全面运营部署及持续支持。' },
      ],
    },
    cta: {
      title: '准备好进入埃及市场了吗？',
      subtitle: '让我们的专家指导您的投资之旅。立即预约免费咨询。',
      btn: '获取免费咨询',
    },
    map: {
      label: '位置',
      title: '埃及的战略位置',
      regions: [
        { name: '开罗', desc: '首都，商业中心' },
        { name: '亚历山大', desc: '主要港口，工业区' },
        { name: '苏伊士运河区', desc: '自由贸易，物流' },
        { name: '新首都', desc: '新行政中心' },
      ],
    },
    testimonials: {
      label: '成功案例',
      title: '客户评价',
      items: [
        { name: '张伟', role: '首席执行官', text: 'Prime Connect Egypt 让我们在开罗的工厂建设过程完全顺利。他们对中国和埃及商业文化的深刻理解是无价的。我们仅在6个月内就投入运营。', company: '张氏工业' },
        { name: '李晨', role: '总监', text: '团队在政府关系方面的专业知识为我们节省了数月的官僚延误。他们在埃及法规方面的网络知识无与伦比。强烈推荐。', company: '太平洋贸易公司' },
        { name: '艾哈迈德·哈桑', role: '管理合伙人', text: '他们的房地产投资咨询帮助我们确定了超过我们投资回报率预期40%的黄金地段。专业、响应迅速。', company: '苏伊士发展集团' },
        { name: '王莎拉', role: '运营副总裁', text: '从招聘到办公室设置，Prime Connect 处理了一切。他们的多语言团队使沟通变得轻松。在他们的帮助下我们扩展到了3个地点。', company: '龙科技解决方案' },
      ],
    },
    partners: {
      label: '全球网络',
      title: '我们的合作伙伴与网络',
      items: [
        '苏伊士运河管理局', '埃及投资局', '通信部', '新首都开发局',
        '工业发展局', '中国驻埃大使馆', '开罗国际银行', '贸易代理',
        '埃及金融监管局', '苏伊士运河经济区', '投资部', 'ITIDA',
        '开罗商会', '工业联合会', '出口理事会', '中国商业委员会',
      ],
    },
    contact: {
      label: '联系我们',
      title: '开启您的旅程',
      subtitle: '准备好探索埃及的商业机会了吗？我们的专家团队随时准备指导您的投资。',
      formName: '全名',
      formEmail: '电子邮箱',
      formPhone: '电话号码',
      formSubject: '主题',
      formMessage: '您的留言',
      formSubmit: '发送消息',
      namePlaceholder: '输入您的全名',
      emailPlaceholder: '输入您的邮箱',
      phonePlaceholder: '输入您的电话号码',
      subjectPlaceholder: '我们能如何帮助您？',
      messagePlaceholder: '告诉我们您的业务需求和投资目标...',
      contactInfo: {
        phone: '+20 10 00982441',
        whatsapp: '+20 10 00982441',
        email: 'hesham@primeegypt.com',
        address: '开罗，埃及',
        hours: '周日 – 周四：上午9:00 – 下午6:00',
      },
      emails: ['hesham@primeegypt.com', 'mo@primeegypt.com', 'khalifa@primeegypt.com'],
    },
    footer: {
      rights: '© 2025 Prime Connect Egypt. 保留所有权利。',
      quickLinks: '快速链接',
      services: '服务',
      contact: '联系方式',
      description: '您值得信赖的通往埃及繁荣市场的门户。自2013年以来，连接中国投资与埃及机遇。',
    },
    loading: '加载中...',
  },
};

export default translations;
