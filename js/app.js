/**
 * Main Application Script — Didenur Sezen Portfolio
 * Emerald & Cyber-Mint Edition
 * Features: Dark/Light Mode, TR/EN Bilingual Switcher, 3D Tilt, Project Inspector, CV Modal
 */

// ==========================================================================
// 1. TR / EN BILINGUAL TRANSLATION DICTIONARY
// ==========================================================================
const translations = {
  en: {
    navAbout: "Background",
    navSkills: "Capabilities",
    navProjects: "Projects",
    navExp: "Education & Experience",
    navCerts: "Certifications",
    navContact: "Connect",

    photoTag: "Photo Frame",
    heroBadge: "Yeditepe & UTBM (France) • Computer Engineering",
    heroGreeting: "Hi, I'm",
    heroAction: "Engineering",
    heroLead: "Senior Computer Engineering student at Yeditepe University graduating next semester, having recently completed an exchange program at UTBM in France. Focused on Software & Data Technologies, I bridge low-level systems engineering (P2P multithreaded networking, Linux iptables, socket communication) with modern intelligent data processing (Neo4j Graph Data Science, Apache Spark pipelines) and robust enterprise web solutions (.NET Core & Blazor).",
    heroBtnProjects: "Explore Projects",
    heroBtnCv: "View CV (PDF)",
    heroBtnContact: "Connect",
    focus1Title: "Distributed & P2P",
    focus1Desc: "Multithreaded sockets & network protocols",
    focus2Title: "Graph & Big Data",
    focus2Desc: "Neo4j Data Science & Apache Spark",
    focus3Title: ".NET & Modern Web",
    focus3Desc: "C# Blazor Web & Smart Contracts",
    quickNav: "Quick Navigation",
    exploreBtn: "EXPLORE",

    aboutTitle: "Engineering Background & Core Focus",
    aboutHeadline: "Transforming Complex Challenges into Scalable Software Solutions",
    aboutP1: "I am a senior Computer Science Engineering student at Yeditepe University, graduating in one semester and having recently completed an academic exchange program at Université de Technologie de Belfort-Montbéliard (UTBM) in France. My technical journey bridges low-level systems engineering with intelligent data analytics and modern enterprise software.",
    aboutP2: "Whether it's building a P2P multi-source video streaming protocol from scratch in Java, orchestrating distributed data pipelines using Apache Spark, querying complex topological knowledge models with Neo4j & SPARQL, or developing reactive web applications with C# .NET and Blazor, I thrive on engineering scalable, robust systems.",
    aboutP3: "Beyond technical depth, I have experience working within cross-cultural teams (such as developing accessibility solutions during the international Innovation Crunch Time in France) and delivering collaborative features under real-world development workflows.",

    keyPoint1Title: "Distributed & High-Concurrency",
    keyPoint1Desc: "Multithreaded socket architectures, P2P network discovery, and Linux firewall management.",
    keyPoint2Title: "Graph Analytics & Semantic Web",
    keyPoint2Desc: "Neo4j Graph Data Science, RDF/OWL ontologies, SWRL reasoning, and community detection.",
    keyPoint3Title: "Enterprise & Web Systems",
    keyPoint3Desc: "Blazor/Razor components, SQLite/SQL database architectures, REST API integration, and testing.",

    spec1Title: "Graph & Knowledge Representation",
    spec1Desc: "Topological graph algorithms (centrality, shortest paths) in Neo4j, coupled with W3C Semantic Web standards (RDF/OWL, SPARQL).",
    spec2Title: "Distributed Computing & Big Data",
    spec2Desc: "Scalable data processing with Apache Spark RDDs and DataFrames, PCA dimensionality reduction, and IQR outlier detection.",
    spec3Title: "Blockchain & Smart Contracts",
    spec3Desc: "Private multi-node blockchain setups (Geth, MultiChain), Solidity smart contracts, Web3.js integration, and automated testing.",

    skillsTitle: "Capabilities & Technical Tooling",
    badgeLangs: "Languages",
    groupLangs: "Core Programming",
    badgeData: "Data Science",
    groupData: "Data & Distributed Engines",
    badgeGraphs: "Graphs",
    groupGraphs: "Semantic Web & Graph Analytics",
    badgeSys: "Infrastructure",
    groupSys: "Systems & Networking",
    badgeWeb: "Applications",
    groupWeb: "Web, Desktop & APIs",
    badgeTools: "Decentralized & Tools",
    groupTools: "Web3, Methods & Tooling",

    projectsTitle: "Engineered Projects & Systems",
    projectsSubtitle: "A curated showcase of academic, personal, and distributed engineering initiatives. Click on any project to explore architecture details and implementation highlights.",
    filterAll: "All Projects (7)",
    filterSys: "Distributed & Systems",
    filterData: "Data & Graph Science",
    filterWeb: "Web & Desktop",
    filterChain: "Blockchain",
    btnInspect: "View Architecture",

    expTitle: "Education & Experience",
    utbmRole: "Computer Science Engineering (Exchange)",
    courseworkLabel: "Relevant Coursework:",
    yeditepeRole: "Computer Science Engineering (B.Sc.)",
    yeditepeDesc: "Undergraduate studies focused on data structures, algorithms, object-oriented design, systems programming, network protocols, database engineering, and artificial intelligence foundations.",
    cloudpeerRole: "API Developer Intern",
    cloudpeer1: "Contributed to the development of a modern Blazor-based web application integrated with existing Mock API systems.",
    cloudpeer2: "Developed interactive frontend features for data visualization, user authentication, and multi-tier filtering using C# and Razor Components.",
    cloudpeer3: "Integrated SQLite for dynamic CRUD operations, data persistence, and caching.",
    cloudpeer4: "Performed comprehensive API testing, endpoint mock validation, and system response verification with Postman.",
    volunteerRole: "Multidisciplinary Innovation Member",
    volunteerDate: "International Team Project",
    volunteerDesc: "Collaborated within a multidisciplinary team during the intensive one-week Innovation Crunch Time event to engineer an accessibility-focused rain protection system for wheelchair users, aimed at improving mobility and daily comfort. Contributed to ideation, technical evaluation, CAD design, and creation of a functional physical prototype presented to an ADAPEI supervisor.",

    certsTitle: "Certifications & Seminars",
    certNvidia: "Hands-on mastery of GPU-accelerated data processing, rapid ETL pipelines, and high-performance analytics pipelines.",
    certCoder: "Attendance certificate covering cutting-edge software architecture trends, developer practices, and cloud patterns.",
    certSabanci: "Dual completion in Introduction to Computer Programming and 3D Organ Design Course.",
    viewCert: "View Certificate",

    contactTitle: "Let's Connect & Collaborate",
    contactSubtitle: "I am always open to discussing distributed software architectures, data science challenges, internship/full-time opportunities, or innovative engineering collaborations.",
    contactReach: "Reach Out Directly",
    contactReachDesc: "Feel free to connect via email, LinkedIn, or check out my code repositories on GitHub.",
    btnCv: "View & Download Verified CV",
    btnDownloadCv: "Download PDF",
    btnOpenTab: "Open in New Tab",
    cvModalTitle: "Curriculum Vitae — Didenur Sezen",
    skillsHint: "Click any capability to view and navigate to its associated project or experience.",
    formTitle: "Send a Direct Message",
    formLabelName: "Your Name",
    formLabelEmail: "Your Email",
    formLabelSubject: "Subject",
    formLabelMsg: "Message",
    formSubmit: "Send Message",
    formSubmitting: "Sending...",
    formSuccessTitle: "Message Delivered Successfully!",
    formSuccessDesc: "Thank you for reaching out. I will get back to you as soon as possible.",
    formSendAnother: "Send Another Message",
    formQuickLabel: "Or open directly with:",
    formOpenGmail: "Gmail Web",
    formCopyEmail: "Copy Email",
    toastEmailCopied: "Email address copied to clipboard!",
    footerStatus: "Open for Opportunities & Innovation"
  },

  tr: {
    navAbout: "Hakkımda",
    navSkills: "Yetkinlikler",
    navProjects: "Projeler",
    navExp: "Eğitim ve Deneyim",
    navCerts: "Sertifikalar",
    navContact: "İletişim",

    photoTag: "Fotoğraf Alanı",
    heroBadge: "Yeditepe & UTBM (Fransa) • Bilgisayar Mühendisliği",
    heroGreeting: "Merhaba, Ben",
    heroAction: "Geliştirdiğim Alan:",
    heroLead: "Yeditepe Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim ve bir dönem sonra mezun olacağım. Bir önceki dönem Fransa'da UTBM bünyesinde değişim eğitimimi tamamladım. Yazılım ve Veri Teknolojileri alanında uzmanlaşarak, alt seviye sistem mühendisliğini (P2P çok iş parçacıklı ağlar, Linux iptables, soket programlama), modern akıllı veri işleme (Neo4j Graph Data Science, Apache Spark veri hatları) ve kurumsal web çözümleri (.NET Core & Blazor) ile birleştiriyorum.",
    heroBtnProjects: "Projelerimi İncele",
    heroBtnCv: "CV İncele (PDF)",
    heroBtnContact: "İletişime Geç",
    focus1Title: "Dağıtık Sistemler & P2P",
    focus1Desc: "Çok iş parçacıklı soketler & ağ mimarisi",
    focus2Title: "Graf Analitiği & Büyük Veri",
    focus2Desc: "Neo4j Graph Data Science & Apache Spark",
    focus3Title: "Kurumsal Yazılım & Web",
    focus3Desc: "C# .NET Core, Blazor Web & Web3",
    quickNav: "Hızlı Gezinme",
    exploreBtn: "KEŞFET",

    aboutTitle: "Mühendislik Arka Planı & Odak Alanları",
    aboutHeadline: "Karmaşık Zorlukları Ölçeklenebilir Yazılım Çözümlerine Dönüştürmek",
    aboutP1: "Yeditepe Üniversitesi Bilgisayar Mühendisliği bölümünde son sınıf öğrencisiyim ve bir dönem sonra mezun olacağım; bir önceki dönemde ise Fransa'da Université de Technologie de Belfort-Montbéliard (UTBM) bünyesinde değişim programımı başarıyla tamamladım. Çalışmalarım, sistem programlama ile akıllı veri analitiğini ve modern kurumsal yazılımları buluşturmaktadır.",
    aboutP2: "Java ile sıfırdan P2P çok kaynaklı video akış protokolü geliştirmek, Apache Spark ile dağıtık veri hatları kurmak, Neo4j & SPARQL ile bilgi modellerini topolojik olarak sorgulamak ya da C# .NET ve Blazor ile reaktif web uygulamaları inşa etmek en büyük tutkumdur.",
    aboutP3: "Teknik derinliğimin yanı sıra, Fransa'daki uluslararası Innovation Crunch Time etkinliğinde 6 farklı ülkeden 10 kişilik çok disiplinli bir takımla engelli bireyler için erişilebilirlik prototipi geliştirmek gibi uluslararası takım çalışması ve çevik geliştirme deneyimlerine sahibim.",

    keyPoint1Title: "Dağıtık Sistemler & Yüksek Eşzamanlılık",
    keyPoint1Desc: "Çok iş parçacıklı soket mimarileri, P2P ağ keşfi ve Linux güvenlik duvarı yönetimi.",
    keyPoint2Title: "Graf Analitiği & Semantik Web",
    keyPoint2Desc: "Neo4j Graph Data Science, RDF/OWL ontolojileri, SWRL akıl yürütme ve topluluk tespiti.",
    keyPoint3Title: "Kurumsal Web Sistemleri",
    keyPoint3Desc: "Blazor/Razor bileşenleri, SQLite/SQL veritabanı mimarisi, REST API entegrasyonu ve testi.",

    spec1Title: "Graf & Bilgi Temsili",
    spec1Desc: "W3C Semantik Web standartları (RDF/OWL, SPARQL) ile Neo4j'de topolojik graf algoritmaları (merkezilik, en kısa yol).",
    spec2Title: "Dağıtık Hesaplama & Büyük Veri",
    spec2Desc: "Apache Spark RDD ve DataFrame'leri ile ölçeklenebilir veri işleme, PCA boyut indirgeme ve IQR aykırı değer tespiti.",
    spec3Title: "Blokzincir & Akıllı Sözleşmeler",
    spec3Desc: "Özel çok düğümlü blokzincir kurulumları (Geth, MultiChain), Solidity akıllı sözleşmeleri, Web3.js ve otomatik testler.",

    skillsTitle: "Teknik Yetkinlikler & Araçlar",
    badgeLangs: "Diller",
    groupLangs: "Temel Programlama",
    badgeData: "Veri Bilimi",
    groupData: "Veri & Dağıtık Motorlar",
    badgeGraphs: "Grafik Veri",
    groupGraphs: "Semantik Web & Graf Analitiği",
    badgeSys: "Altyapı",
    groupSys: "Sistemler & Ağ Teknolojileri",
    badgeWeb: "Uygulamalar",
    groupWeb: "Web, Masaüstü & API",
    badgeTools: "Merkeziyetsiz & Araçlar",
    groupTools: "Web3, Yöntemler & Araçlar",

    projectsTitle: "Mühendislik Projeleri & Sistemler",
    projectsSubtitle: "Akademik, kişisel ve dağıtık sistemler alanında geliştirdiğim projeler. Mimari detayları ve uygulama akışını görmek için kartlara tıklayabilirsiniz.",
    filterAll: "Tüm Projeler (7)",
    filterSys: "Dağıtık & Sistemler",
    filterData: "Veri & Graf Bilimi",
    filterWeb: "Web & Masaüstü",
    filterChain: "Blokzincir",
    btnInspect: "Mimariyi İncele",

    expTitle: "Eğitim ve Deneyim",
    utbmRole: "Bilgisayar Mühendisliği (Değişim / Erasmus)",
    courseworkLabel: "İlgili Dersler:",
    yeditepeRole: "Bilgisayar Mühendisliği (Lisans)",
    yeditepeDesc: "Veri yapıları, algoritmalar, nesne yönelimli tasarım, sistem programlama, ağ protokolleri, veritabanı mimarisi ve yapay zeka temelleri odaklı lisans eğitimi.",
    cloudpeerRole: "API Developer Stajyeri",
    cloudpeer1: "Mevcut Mock API sistemine entegre modern Blazor tabanlı web uygulamasının geliştirilmesine katkı sağlandı.",
    cloudpeer2: "C# ve Razor bileşenleri ile veri görselleştirme, kullanıcı yetkilendirme ve çok kademeli filtreleme özellikleri geliştirildi.",
    cloudpeer3: "Dinamik CRUD işlemleri ve yerel veri önbellekleme için SQLite entegrasyonu yapıldı.",
    cloudpeer4: "Postman kullanılarak kapsamlı API testi, uç nokta doğrulama ve yanıt kontrolleri gerçekleştirildi.",
    volunteerRole: "Çok Disiplinli İnovasyon Takım Üyesi",
    volunteerDate: "Uluslararası Takım Projesi",
    volunteerDesc: "Bir haftalık Innovation Crunch Time etkinliğinde 6 farklı ülkeden 10 kişilik uluslararası bir ekiple çalışarak, tekerlekli sandalye kullanıcıları için yağmurlu havalarda konfor sağlayan erişilebilirlik koruma sistemi geliştirildi. Fikir üretimi, teknik analiz, CAD tasarımı ve ADAPEI yöneticisine sunulan çalışan fiziksel prototip üretiminde aktif rol alındı.",

    certsTitle: "Sertifikalar & Seminerler",
    certNvidia: "GPU hızlandırmalı veri işleme, hızlı ETL veri hatları ve yüksek performanslı veri analitiği eğitimi.",
    certCoder: "Modern yazılım mimarisi trendleri, geliştirici pratikleri ve bulut desenleri katılım sertifikası.",
    certSabanci: "Bilgisayar Programlamaya Giriş ve 3 Boyutlu Organ Tasarımı Çift Ders Tamamlama Sertifikası.",
    viewCert: "Sertifikayı Görüntüle",

    contactTitle: "İletişime Geçin & İş Birliği",
    contactSubtitle: "Dağıtık yazılım mimarileri, veri bilimi projeleri, staj/iş fırsatları veya yenilikçi mühendislik iş birlikleri hakkında görüşmeye her zaman açığım.",
    contactReach: "Doğrudan İletişim",
    contactReachDesc: "E-posta, LinkedIn veya GitHub üzerindeki kod depolarım aracılığıyla bana kolayca ulaşabilirsiniz.",
    btnCv: "CV'yi Görüntüle & İndir",
    btnDownloadCv: "CV İndir (PDF)",
    btnOpenTab: "Yeni Sekmede Aç",
    cvModalTitle: "Özgeçmiş (CV) — Didenur Sezen",
    skillsHint: "Bu yeteneğin kullanıldığı projeyi görmek için terimlerin üzerine tıklayabilirsiniz.",
    formTitle: "Mesaj Gönderin",
    formLabelName: "Adınız Soyadınız",
    formLabelEmail: "E-posta Adresiniz",
    formLabelSubject: "Konu",
    formLabelMsg: "Mesajınız",
    formSubmit: "Mesajı Gönder",
    formSubmitting: "Gönderiliyor...",
    formSuccessTitle: "Mesajınız Başarıyla İletildi!",
    formSuccessDesc: "İletişime geçtiğiniz için teşekkür ederim. En kısa sürede e-posta adresinize dönüş yapacağım.",
    formSendAnother: "Yeni Mesaj Gönder",
    formQuickLabel: "Veya doğrudan açın:",
    formOpenGmail: "Gmail Web",
    formCopyEmail: "E-postayı Kopyala",
    toastEmailCopied: "E-posta adresi panoya kopyalandı!",
    footerStatus: "Fırsatlara ve İnovasyona Açık"
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);

  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    langLabel.textContent = lang === 'en' ? 'TR' : 'EN';
  }

  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', lang);
}

// ==========================================================================
// 2. DARK / LIGHT THEME TOGGLE ENGINE
// ==========================================================================
let currentTheme = localStorage.getItem('portfolio_theme') || 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('portfolio_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    themeToggle.setAttribute('title', isDark ? 'Açık Temaya Geç / Switch to Light Mode' : 'Koyu Temaya Geç / Switch to Dark Mode');
  }
}

// ==========================================================================
// 3. TOAST NOTIFICATION UTILITY
// ==========================================================================
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

// ==========================================================================
// 4. TYPEWRITER ROTATING HERO HEADLINE
// ==========================================================================
(function initTypewriter() {
  const target = document.getElementById('typewriter');
  if (!target) return;

  const phrases = {
    en: [
      'Distributed Systems.',
      'Graph Data Science (Neo4j).',
      'Big Data Pipelines (Spark).',
      '.NET & Blazor Solutions.',
      'P2P Protocols & Networks.'
    ],
    tr: [
      'Dağıtık Sistemler.',
      'Graf Veri Bilimi (Neo4j).',
      'Büyük Veri Hatları (Spark).',
      '.NET & Blazor Çözümleri.',
      'P2P Protokol ve Ağları.'
    ]
  };

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;
  let isHeroVisible = true;

  // Pause typewriter animation when hero is off-screen to eliminate any possible DOM reflow/layout shifts
  const heroSection = document.getElementById('hero');
  if ('IntersectionObserver' in window && heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isHeroVisible = entry.isIntersecting;
      });
    }, { threshold: 0.05 });
    heroObserver.observe(heroSection);
  }

  function type() {
    if (!isHeroVisible) {
      setTimeout(type, 400);
      return;
    }

    const list = phrases[currentLang] || phrases.en;
    const current = list[phraseIndex % list.length];

    if (isDeleting) {
      target.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      target.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === current.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % list.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
})();

// ==========================================================================
// 5. 3D PERSPECTIVE TILT CARDS
// ==========================================================================
(function init3DTilt() {
  const tiltElements = document.querySelectorAll('.tilt-element');

  tiltElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
})();

// ==========================================================================
// 6. PROJECT FILTERING ENGINE
// ==========================================================================
(function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  function updateCenteredProjects() {
    const isDesktop = window.innerWidth > 1024;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    const visibleCards = Array.from(document.querySelectorAll('.projects-grid > .project-card:not(.hide)'));

    projectCards.forEach((card) => {
      card.classList.remove('center-single-last', 'center-single-last-2col');
    });

    if (visibleCards.length === 0) return;

    if (isDesktop && visibleCards.length % 3 === 1) {
      visibleCards[visibleCards.length - 1].classList.add('center-single-last');
    } else if (isTablet && visibleCards.length % 2 === 1) {
      visibleCards[visibleCards.length - 1].classList.add('center-single-last-2col');
    }
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 40);
        } else {
          card.classList.add('hide');
        }
      });

      updateCenteredProjects();
    });
  });

  window.addEventListener('resize', updateCenteredProjects);
  updateCenteredProjects();
})();

// ==========================================================================
// 7. DETAILED PROJECT ARCHITECTURE DATA & MODAL
// ==========================================================================
const projectDatabase = {
  firewall: {
    title: 'Linux Firewall Rule Management & Monitoring Application',
    badge: 'Systems Security & GUI Architecture',
    demoUrl: 'https://www.youtube.com/watch?v=HR1CsCVQlRw',
    demoLabel: 'Watch Demo on YouTube ↗',
    diagram: `[User GUI (PyQt5)]
       │
       ▼ (Subprocess & Sockets API)
[Kernel iptables Engine] ────> [Traffic Monitor Worker Thread]
       │                                     │
       ▼                                     ▼
[INPUT Chain Tables] <────── [Live Packet Stats & Whitelist Filter]`,
    highlights: [
      'Engineered a complete GUI utilizing Python & PyQt5 for Linux kernel iptables inspection.',
      'Implemented real-time traffic statistics collection without locking UI main event loop.',
      'Designed safe rule lifecycle management: dynamic reordering, atomic append, and validation.',
      'Integrated security whitelist and blacklist filtering for active cyber defense.',
      'Live demonstration available on YouTube showcasing end-to-end rule evaluation.'
    ],
    tech: ['Python', 'PyQt5', 'Linux iptables', 'Kernel Sockets', 'Multi-threading', 'Security Auditing']
  },

  p2p: {
    title: 'Decentralized Peer-to-Peer Video Streaming Application',
    badge: 'Distributed Systems & Network Protocols',
    diagram: `[Peer Node A] ──(UDP Broadcast Discovery: TTL Flooding)──> [Peer Node B, C, D]
       │
       ▼ (Parallel TCP Socket Handshake)
[Concurrent Multi-Source Chunk Downloader]
       │
       ▼ (Out-of-Order Packet Reassembly Buffer)
[Cryptographic SHA-256 Checksum Engine]
       │
       ▼ (Verified Video Chunks)
[Integrated Media Player GUI]`,
    highlights: [
      'Developed a 100% decentralized P2P video streaming architecture in Java with no single point of failure.',
      'Implemented UDP-based peer discovery utilizing TTL-controlled network flooding.',
      'Constructed multithreaded TCP chunk delivery supporting concurrent multi-source chunk downloads.',
      'Engineered out-of-order chunk reassembly buffers with dynamic window management.',
      'Integrated cryptographic SHA-256 chunk verification to prevent stream corruption.'
    ],
    tech: ['Java', 'TCP/UDP Sockets', 'High Concurrency', 'SHA-256', 'P2P Protocol', 'Chunk Reassembly']
  },

  graph: {
    title: 'Semantic Web, Knowledge Representation & Graph Analytics',
    badge: 'Knowledge Graphs & Topological Analytics',
    diagram: `[Raw Knowledge Sources] ──> [RDF/OWL Ontology Modeling]
                                   │
                                   ▼ (SWRL Inference Engine)
                            [Inferred Knowledge Base]
                                   │
                                   ▼ (SPARQL Query Pipeline)
                          [Neo4j Graph Database]
                                   │
                                   ▼ (Graph Data Science - GDS)
           [PageRank • Betweenness Centrality • Community Louvain]`,
    highlights: [
      'Built formal semantic models and domain ontologies following W3C RDF & OWL specifications.',
      'Authored SPARQL queries and applied SWRL (Semantic Web Rule Language) logical reasoning engines.',
      'Exported and ingested ontologies into Neo4j graph databases for advanced topological analytics.',
      'Executed Neo4j Graph Data Science (GDS) algorithms: PageRank, betweenness centrality, and community detection.',
      'Extracted hidden relational patterns across high-dimensional graph topologies.'
    ],
    tech: ['Neo4j', 'Graph Data Science (GDS)', 'RDF', 'OWL', 'SPARQL', 'SWRL', 'Graph Algorithms']
  },

  spark: {
    title: 'Intelligent Analytics & Distributed Big Data Pipeline',
    badge: 'Big Data Engineering & Analytics',
    diagram: `[Web Sources] ──(Selenium / BeautifulSoup)──> [Raw Data Ingestion]
                                                       │
                                                       ▼ (OpenRefine / IQR Outlier Filter)
                                              [Cleaned Data Warehouse]
                                                       │
                                                       ▼ (PCA Dimensionality Reduction)
                                           [Optimized Feature Matrices]
                                                       │
                                                       ▼ (Apache Spark Distributed Execution)
                                    [Spark RDDs & DataFrames Parallel Transforms]`,
    highlights: [
      'Architected an end-to-end data pipeline combining web scraping, sanitization, and distributed analytics.',
      'Implemented automated extraction utilizing Python, Selenium, and BeautifulSoup.',
      'Applied Interquartile Range (IQR) outlier detection algorithms and PCA dimensionality reduction.',
      'Engineered distributed data transformations using Apache Spark RDDs and DataFrames with PySpark.',
      'Demonstrated high-throughput resilient dataset transformations.'
    ],
    tech: ['Apache Spark', 'PySpark', 'Pandas', 'Selenium', 'BeautifulSoup', 'PCA', 'IQR Outlier Detection']
  },

  blockchain: {
    title: 'Blockchain Consortium & Multi-Node Smart Contracts',
    badge: 'Web3 & Distributed Ledgers',
    diagram: `[Private Node 1 (Geth)] <──(P2P Consensus)──> [Private Node 2 (MultiChain)]
           │                                                │
           └──────────────────┬─────────────────────────────┘
                              ▼
               [Solidity Smart Contract Layer]
                              │
                              ▼ (Web3.js RPC Bridge)
             [Truffle & Ganache Deployment Suite]
                              │
                              ▼
                 [Automated Mocha Test Suite]`,
    highlights: [
      'Configured multi-node private blockchain consortium networks using Geth and MultiChain.',
      'Engineered robust Ethereum smart contracts in Solidity with security best practices.',
      'Implemented automated deployment and testing suites using Truffle, Ganache, and Mocha.',
      'Integrated Web3.js client libraries for event listening and peer-to-peer transaction verification.'
    ],
    tech: ['Solidity', 'Geth', 'MultiChain', 'Truffle', 'Ganache', 'Web3.js', 'Mocha']
  },

  parking: {
    title: 'Smart Parking Management System Web Platform',
    badge: 'Full-Stack Architecture & UML Modeling',
    diagram: `[Client Browser] ──(HTTP/HTTPS)──> [Role-Based Auth Controller]
                                              │
                    ┌─────────────────────────┴─────────────────────────┐
                    ▼                                                   ▼
       [Live Occupancy Engine]                              [Reservation Scheduler]
                    │                                                   │
                    └─────────────────────────┬─────────────────────────┘
                                              ▼
                             [MySQL Relational Database]`,
    highlights: [
      'Engineered a role-based web application for real-time parking space reservations and tracking.',
      'Designed system architecture using rigorous UML Class, Sequence, and Activity diagrams.',
      'Implemented dynamic availability tracking, announcements, and internal customer messaging.',
      'Optimized relational database queries for high concurrency reservation locking.'
    ],
    tech: ['HTML5', 'PHP', 'SQL', 'Relational DB Design', 'UML Architecture', 'Concurrency Handling']
  },

  music: {
    title: 'Database-Driven Music Player Web Platform',
    badge: 'Relational Database Design & Streaming',
    demoUrl: 'https://drive.google.com/file/d/1I_6cJ3o8fx2xlX-RVNxNpcoLxVl80SqE/view?pli=1',
    demoLabel: 'Open Google Drive Demo ↗',
    diagram: `[Audio Streaming UI] ──(Dynamic Query)──> [Media Controller]
                                                   │
                                                   ▼ (ER-Modeled Relational Core)
[Artists Table] <─── [Albums Table] <─── [Tracks Table] <─── [Playlists Table]`,
    highlights: [
      'Engineered a database-driven music streaming web platform with search, playlist generation, and media cataloging.',
      'Modeled complex many-to-many relationships via formal Entity-Relationship (ER) diagrams.',
      'Constructed dynamic SQL table generation for user libraries and media attributes.',
      'Mapped system navigation and user journey through formal Action Flow models.'
    ],
    tech: ['HTML5', 'PHP', 'SQL', 'ER Modeling', 'Action Flow Design', 'Media Streaming']
  }
};

window.openProjectModal = function (projectId) {
  const data = projectDatabase[projectId];
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  if (!data || !modal || !modalBody) return false;

  const demoButtonHtml = data.demoUrl
    ? `<a href="${data.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${data.demoLabel}</a>`
    : '';

  modalBody.innerHTML = `
    <span class="modal-project-badge">${data.badge}</span>
    <h2 class="modal-project-title">${data.title}</h2>
    
    <div class="modal-architecture-diagram">
      <pre><code>${data.diagram}</code></pre>
    </div>

    <h4 class="modal-section-h4">Engineering & Implementation Highlights</h4>
    <ul class="modal-bullets">
      ${data.highlights.map((h) => `<li>${h}</li>`).join('')}
    </ul>

    <h4 class="modal-section-h4">Technology Stack</h4>
    <div class="card-footer-tags">
      ${data.tech.map((t) => `<span class="tech-pill">${t}</span>`).join('')}
    </div>

    <div class="modal-actions">
      ${demoButtonHtml}
      <button class="btn btn-outline" onclick="document.getElementById('project-modal').classList.remove('active')">Close</button>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  return true;
};

// ==========================================================================
// 7. CLICKABLE PROJECT CARDS (DEMO NAVIGATION)
// ==========================================================================
(function initClickableProjectDemoCards() {
  const demoCards = document.querySelectorAll('.project-card[data-demo-url]');
  demoCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      // If user clicked directly on an anchor or button inside, allow default navigation
      if (e.target.closest('a') || e.target.closest('button')) return;
      const url = card.getAttribute('data-demo-url');
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  });
})();

// ==========================================================================
// 8. CAPABILITIES -> PROJECT INTERACTIVE NAVIGATION
// ==========================================================================
(function initCapabilitiesNavigation() {
  const projectDirectory = {
    firewall: {
      titleEn: "Linux Firewall Rule Management & Monitoring",
      titleTr: "Linux Güvenlik Duvarı Kural Yönetimi (iptables)",
      elementId: "project-firewall",
      isExp: false
    },
    p2p: {
      titleEn: "Decentralized P2P Video Streaming Application",
      titleTr: "Merkeziyetsiz P2P Video Akış Uygulaması",
      elementId: "project-p2p",
      isExp: false
    },
    graph: {
      titleEn: "Semantic Web, Ontologies & Neo4j Graph Analytics",
      titleTr: "Semantik Web & Neo4j Graf Veri Analitiği",
      elementId: "project-graph",
      isExp: false
    },
    spark: {
      titleEn: "Intelligent Analytics & Distributed Data Pipeline",
      titleTr: "Akıllı Analitik & Apache Spark Büyük Veri Hattı",
      elementId: "project-spark",
      isExp: false
    },
    blockchain: {
      titleEn: "Blockchain & Multi-Node Smart Contracts",
      titleTr: "Blokzincir & Çok Düğümlü Akıllı Sözleşmeler",
      elementId: "project-blockchain",
      isExp: false
    },
    parking: {
      titleEn: "Smart Parking Management System Website",
      titleTr: "Akıllı Otopark Yönetim Sistemi Web Platformu",
      elementId: "project-parking",
      isExp: false
    },
    music: {
      titleEn: "Database-Driven Music Player Web Platform",
      titleTr: "Veritabanı Destekli Müzik Çalar Web Platformu",
      elementId: "project-music",
      isExp: false
    },
    cloudpeer: {
      titleEn: "Cloudpeer Global Technology (.NET / Blazor Internship)",
      titleTr: "Cloudpeer Global Technology (C# / .NET / Blazor Stajı)",
      elementId: "exp-cloudpeer",
      isExp: true
    }
  };

  let activePopover = null;

  function closeActivePopover() {
    if (activePopover) {
      activePopover.remove();
      activePopover = null;
    }
    document.querySelectorAll('.skill-tag.has-projects').forEach(t => t.classList.remove('active-tag'));
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (activePopover && !activePopover.contains(e.target) && !e.target.closest('.skill-tag.has-projects')) {
      closeActivePopover();
    }
  });

  // Close on Escape key, window resize or page scroll to avoid positioning disconnects
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeActivePopover();
  });
  window.addEventListener('scroll', () => {
    if (activePopover) closeActivePopover();
  }, { passive: true });
  window.addEventListener('resize', () => {
    if (activePopover) closeActivePopover();
  }, { passive: true });

  const skillTags = document.querySelectorAll('.skill-tag.has-projects');
  skillTags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
      e.stopPropagation();
      const skillName = tag.getAttribute('data-skill') || tag.innerText.trim();
      const projectKeys = (tag.getAttribute('data-projects') || '').split(',').map(s => s.trim()).filter(Boolean);
      
      if (!projectKeys.length) return;

      closeActivePopover();
      tag.classList.add('active-tag');

      const popover = document.createElement('div');
      popover.className = 'skill-project-popover glass-panel';
      
      const isTr = currentLang === 'tr';
      const labelText = isTr ? 'Bu yeteneğin kullanıldığı projeler & deneyimler:' : 'Associated projects & experience:';
      const goBtnText = isTr ? 'Projeye Git' : 'Go to Project';
      const goExpText = isTr ? 'Deneyime Git' : 'Go to Experience';

      let itemsHtml = '';
      projectKeys.forEach((key) => {
        const item = projectDirectory[key];
        if (!item) return;
        const title = isTr ? item.titleTr : item.titleEn;
        const btnLabel = item.isExp ? goExpText : goBtnText;
        itemsHtml += `
          <div class="popover-project-item">
            <span class="popover-project-title">${title}</span>
            <button class="btn-go-to-project" data-target-elem="${item.elementId}" data-title="${title}">
              <span>${btnLabel}</span> →
            </button>
          </div>
        `;
      });

      popover.innerHTML = `
        <div class="popover-header">
          <span class="popover-skill-name">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            ${skillName}
          </span>
          <button class="popover-close-btn" aria-label="Close popover">&times;</button>
        </div>
        <span class="popover-label">${labelText}</span>
        <div class="popover-project-list">
          ${itemsHtml}
        </div>
      `;

      document.body.appendChild(popover);
      activePopover = popover;

      // Position popover using rock-solid fixed coordinates (zero vertical sliding or layout drift)
      const rect = tag.getBoundingClientRect();
      const isMobile = window.innerWidth <= 768;
      const popWidth = Math.min(360, window.innerWidth - 30);
      
      let left = isMobile ? Math.max(15, (window.innerWidth - popWidth) / 2) : rect.left;
      if (!isMobile) {
        if (left + popWidth > window.innerWidth - 15) {
          left = window.innerWidth - popWidth - 15;
        }
        if (left < 15) left = 15;
      }

      // Vertical placement: default below tag, flip above if bottom viewport is cramped
      let top = rect.bottom + 8;
      if (top + 160 > window.innerHeight - 15) {
        top = Math.max(15, rect.top - 160);
      }
      if (isMobile && (top < 70 || top + 160 > window.innerHeight)) {
        top = Math.max(80, (window.innerHeight - 180) / 2);
      }

      popover.style.position = 'fixed';
      popover.style.width = `${popWidth}px`;
      popover.style.left = `${left}px`;
      popover.style.top = `${top}px`;

      // Close button inside popover
      const closeBtn = popover.querySelector('.popover-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          closeActivePopover();
        });
      }

      // Go to project button handlers
      popover.querySelectorAll('.btn-go-to-project').forEach((btn) => {
        btn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const targetId = btn.getAttribute('data-target-elem');
          closeActivePopover();

          if (!targetId) return;

          // If navigating to a project, reset project filters so the card is visible
          if (targetId.startsWith('project-')) {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
            if (allBtn) {
              filterBtns.forEach(b => b.classList.remove('active'));
              allBtn.classList.add('active');
              document.querySelectorAll('.project-card').forEach(c => {
                c.style.display = 'flex';
                c.classList.remove('fade-out');
              });
            }
          }

          const targetElem = document.getElementById(targetId);
          if (targetElem) {
            targetElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Remove previous pulse if any
            targetElem.classList.remove('card-highlight-pulse');
            // Trigger reflow to restart animation
            void targetElem.offsetWidth;
            targetElem.classList.add('card-highlight-pulse');

            setTimeout(() => {
              targetElem.classList.remove('card-highlight-pulse');
            }, 3000);
          }
        });
      });
    });
  });
})();

// ==========================================================================
// 9. CV MODAL ENGINE
// ==========================================================================
(function initCVModal() {
  const cvModal = document.getElementById('cv-modal');
  const openCVBtn = document.getElementById('btn-open-cv-modal');
  const heroCvBtn = document.getElementById('hero-cv-btn');
  const closeCVBtn = document.getElementById('cv-modal-close-btn');

  function openModal() {
    if (cvModal) {
      cvModal.classList.add('active');
      cvModal.setAttribute('aria-hidden', 'false');
    }
  }

  if (openCVBtn) openCVBtn.addEventListener('click', openModal);
  if (heroCvBtn) heroCvBtn.addEventListener('click', openModal);

  const closeCVBtns = document.querySelectorAll('#cv-modal-close-btn, #cv-modal-close-btn-mobile, .cv-close-btn-desktop, .cv-close-btn-mobile');
  closeCVBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      cvModal.classList.remove('active');
      cvModal.setAttribute('aria-hidden', 'true');
    });
  });

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal || e.target.classList.contains('modal-backdrop')) {
        cvModal.classList.remove('active');
        cvModal.setAttribute('aria-hidden', 'true');
      }
    });
  }
})();

// ==========================================================================
// 9. LANGUAGE & THEME TOGGLE EVENT LISTENERS
// ==========================================================================
const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'tr' : 'en';
    applyLanguage(nextLang);
  });
}

const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

// Initialize on page load
applyLanguage(currentLang);
applyTheme(currentTheme);

// ==========================================================================
// 10. CONTACT FORM DIRECT ENGINE & ACCESSIBLE COMMUNICATION SUITE
// ==========================================================================
(function initContactSuite() {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('btn-submit-form');
  const submitBtnText = document.getElementById('submit-btn-text');
  const submitBtnIcon = document.getElementById('submit-btn-icon');
  const successBanner = document.getElementById('form-success-banner');
  const sendAnotherBtn = document.getElementById('btn-send-another');
  const quickGmailBtn = document.getElementById('btn-quick-gmail');
  const quickCopyBtn = document.getElementById('btn-quick-copy');

  const myEmail = 'didenurszn@gmail.com';
  // Web3Forms: Official access key for didenurszn@gmail.com
  const WEB3FORMS_ACCESS_KEY = 'cd219722-986b-4fc1-8e0c-543d662f4eee';

  function getFormValues() {
    const nameEl = document.getElementById('form-name');
    const emailEl = document.getElementById('form-email');
    const subjectEl = document.getElementById('form-subject');
    const msgEl = document.getElementById('form-message');
    return {
      name: (nameEl ? nameEl.value : '').trim(),
      email: (emailEl ? emailEl.value : '').trim(),
      subject: (subjectEl ? subjectEl.value : '').trim() || (currentLang === 'tr' ? 'Portfolyo İletişim' : 'Portfolio Contact'),
      message: (msgEl ? msgEl.value : '').trim()
    };
  }

  // A. Direct Form Submission (Web3Forms Primary -> FormSubmit Resilient Fallback -> Gmail Web)
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const vals = getFormValues();

      if (!vals.name || !vals.email || !vals.message) {
        showToast(currentLang === 'tr' ? 'Lütfen tüm alanları doldurun.' : 'Please fill in all required fields.');
        return;
      }

      // Enter loading state
      if (submitBtn) submitBtn.disabled = true;
      if (submitBtnText) submitBtnText.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';
      if (submitBtnIcon) {
        submitBtnIcon.innerHTML = `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-dasharray="32" stroke-linecap="round" fill="none" class="spin-animation"></circle>`;
      }

      try {
        let sentSuccessfully = false;

        // 1. Primary Engine: Web3Forms (if access key configured)
        if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY.trim() !== '') {
          try {
            const w3fResponse = await fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY.trim(),
                name: vals.name,
                email: vals.email,
                from_name: `${vals.name} (Portfolio)`,
                subject: `[Portfolio] ${vals.subject} - ${vals.name}`,
                message: vals.message
              })
            });
            if (w3fResponse.ok) {
              const resJson = await w3fResponse.json();
              if (resJson.success) {
                sentSuccessfully = true;
              }
            }
          } catch (w3fErr) {
            console.warn('Web3Forms submission failed, using resilient fallback', w3fErr);
          }
        }

        // 2. Resilient Fallback: FormSubmit (Zero setup required)
        if (!sentSuccessfully) {
          const response = await fetch(`https://formsubmit.co/ajax/${myEmail}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: vals.name,
              email: vals.email,
              _subject: `[Portfolio] ${vals.subject} - ${vals.name}`,
              message: vals.message,
              _template: 'table'
            })
          });

          if (response.ok) {
            sentSuccessfully = true;
          }
        }

        if (sentSuccessfully) {
          // Success: Show animated in-card success banner and hide inputs
          if (successBanner) {
            successBanner.style.display = 'flex';
          }
          contactForm.querySelectorAll('.form-group, #btn-submit-form, .contact-quick-options').forEach(el => {
            el.style.display = 'none';
          });
          contactForm.reset();
          showToast(currentLang === 'tr' ? 'Mesajınız başarıyla iletildi!' : 'Message sent successfully!');
        } else {
          throw new Error('API server returned error');
        }
      } catch (err) {
        // Fallback: If network error or block occurs, seamlessly open Gmail Web in new tab with prefilled contents
        const fullSubject = encodeURIComponent(`[Portfolio] ${vals.subject} - ${vals.name}`);
        const fullBody = encodeURIComponent(`Name: ${vals.name}\nEmail: ${vals.email}\n\nMessage:\n${vals.message}`);
        const fallbackMsg = currentLang === 'tr' ? 'Doğrudan gönderilemedi. Gmail Web açılıyor...' : 'Opening Gmail Web...';
        showToast(fallbackMsg);
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${fullSubject}&body=${fullBody}`, '_blank');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.textContent = currentLang === 'tr' ? 'Mesajı Gönder' : 'Send Message';
        if (submitBtnIcon) {
          submitBtnIcon.innerHTML = `<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>`;
        }
      }
    });
  }

  // B. Reset button ("Yeni Mesaj Gönder")
  if (sendAnotherBtn && contactForm) {
    sendAnotherBtn.addEventListener('click', () => {
      if (successBanner) successBanner.style.display = 'none';
      contactForm.querySelectorAll('.form-group, #btn-submit-form, .contact-quick-options').forEach(el => {
        el.style.display = '';
      });
    });
  }

  // C. Quick Action 1: Open in Gmail Web directly in browser (No Outlook / No system mail setup required)
  if (quickGmailBtn) {
    quickGmailBtn.addEventListener('click', () => {
      const vals = getFormValues();
      const subject = vals.subject ? encodeURIComponent(`[Portfolio] ${vals.subject}${vals.name ? ' - ' + vals.name : ''}`) : encodeURIComponent('Portfolio Contact');
      const body = vals.message ? encodeURIComponent(`Name: ${vals.name}\nEmail: ${vals.email}\n\nMessage:\n${vals.message}`) : '';
      showToast(currentLang === 'tr' ? 'Gmail Web sekmesi açılıyor...' : 'Opening Gmail Web in new tab...');
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`, '_blank');
    });
  }

  // D. Quick Action 2: Copy email address to clipboard with instant notification
  if (quickCopyBtn) {
    quickCopyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(myEmail);
        showToast(currentLang === 'tr' ? 'didenurszn@gmail.com panoya kopyalandı!' : 'didenurszn@gmail.com copied to clipboard!');
      } catch (err) {
        showToast(myEmail);
      }
    });
  }
})();

// ==========================================================================
// 11. NAVBAR SCROLL & MOBILE MENU
// ==========================================================================
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
})();

// ==========================================================================
// 12. SCROLL TO TOP BUTTON (VISIBLE FROM PROJECTS SECTION ONWARD)
// ==========================================================================
(function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-to-top');
  const projectsSection = document.getElementById('projects');
  if (!scrollTopBtn) return;

  function handleScroll() {
    if (projectsSection) {
      const rect = projectsSection.getBoundingClientRect();
      // Show when the top of the Projects section reaches within 140px of the viewport top or has passed it
      if (rect.top <= 140) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    } else {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();

