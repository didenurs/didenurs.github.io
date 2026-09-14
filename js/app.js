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
    heroLead: "Computer Engineering student at Yeditepe University, currently pursuing specialized coursework at UTBM in France. Focused on Software & Data Technologies, I bridge low-level systems engineering (P2P multithreaded networking, Linux iptables, socket communication) with modern intelligent data processing (Neo4j Graph Data Science, Apache Spark pipelines) and robust enterprise web solutions (.NET Core & Blazor).",
    quickNav: "Quick Navigation",
    exploreBtn: "EXPLORE",

    aboutTitle: "Engineering Background & Core Focus",
    aboutHeadline: "Transforming Complex Challenges into Scalable Software Solutions",
    aboutP1: "I am a Computer Science Engineering student at Yeditepe University, currently broadening my academic and technical perspective at Université de Technologie de Belfort-Montbéliard (UTBM) in France. My technical journey bridges low-level systems engineering with intelligent data analytics and modern enterprise software.",
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
    viewCert: "View Certificate ↗",

    contactTitle: "Let's Connect & Collaborate",
    contactSubtitle: "I am always open to discussing distributed software architectures, data science challenges, internship/full-time opportunities, or innovative engineering collaborations.",
    contactReach: "Reach Out Directly",
    contactReachDesc: "Feel free to connect via email, LinkedIn, or check out my code repositories on GitHub.",
    btnCv: "View & Print Verified CV",
    btnPrint: "Print / Save as PDF",
    formTitle: "Send a Direct Message",
    formLabelName: "Your Name",
    formLabelEmail: "Your Email",
    formLabelSubject: "Subject",
    formLabelMsg: "Message",
    formSubmit: "Compose & Send Message",
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
    heroLead: "Yeditepe Üniversitesi Bilgisayar Mühendisliği öğrencisiyim ve şu anda eğitimime Fransa'da UTBM'de devam etmekteyim. Yazılım ve Veri Teknolojileri alanında uzmanlaşarak, alt seviye sistem mühendisliğini (P2P çok iş parçacıklı ağlar, Linux iptables, soket programlama), modern akıllı veri işleme (Neo4j Graph Data Science, Apache Spark veri hatları) ve kurumsal web çözümleri (.NET Core & Blazor) ile birleştiriyorum.",
    quickNav: "Hızlı Gezinme",
    exploreBtn: "KEŞFET",

    aboutTitle: "Mühendislik Arka Planı & Odak Alanları",
    aboutHeadline: "Karmaşık Zorlukları Ölçeklenebilir Yazılım Çözümlerine Dönüştürmek",
    aboutP1: "Yeditepe Üniversitesi Bilgisayar Mühendisliği bölümünde lisans eğitimime devam ederken, Fransa'da Université de Technologie de Belfort-Montbéliard (UTBM) bünyesinde akademik ve teknik vizyonumu genişletiyorum. Çalışmalarım, sistem programlama ile akıllı veri analitiğini ve modern kurumsal yazılımları buluşturmaktadır.",
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
    viewCert: "Sertifikayı Görüntüle ↗",

    contactTitle: "İletişime Geçin & İş Birliği",
    contactSubtitle: "Dağıtık yazılım mimarileri, veri bilimi projeleri, staj/iş fırsatları veya yenilikçi mühendislik iş birlikleri hakkında görüşmeye her zaman açığım.",
    contactReach: "Doğrudan İletişim",
    contactReachDesc: "E-posta, LinkedIn veya GitHub üzerindeki kod depolarım aracılığıyla bana kolayca ulaşabilirsiniz.",
    btnCv: "CV'yi Görüntüle & Yazdır",
    btnPrint: "Yazdır / PDF Olarak Kaydet",
    formTitle: "Mesaj Gönderin",
    formLabelName: "Adınız Soyadınız",
    formLabelEmail: "E-posta Adresiniz",
    formLabelSubject: "Konu",
    formLabelMsg: "Mesajınız",
    formSubmit: "Mesajı Hazırla ve Gönder",
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

  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
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
  }, 3000);
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

  function type() {
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
    });
  });
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

// Modal Open Trigger Listeners
document.querySelectorAll('[data-open-modal]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const id = btn.getAttribute('data-open-modal');
    window.openProjectModal(id);
  });
});

// Modal Close Listeners
const projectModal = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
if (modalCloseBtn && projectModal) {
  modalCloseBtn.addEventListener('click', () => {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
  });
}

window.addEventListener('click', (e) => {
  if (projectModal && e.target === projectModal) {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
  }
  const cvModal = document.getElementById('cv-modal');
  if (cvModal && e.target === cvModal) {
    cvModal.classList.remove('active');
    cvModal.setAttribute('aria-hidden', 'true');
  }
});

// ==========================================================================
// 8. CV MODAL & PRINT ENGINE
// ==========================================================================
(function initCVModal() {
  const cvModal = document.getElementById('cv-modal');
  const openCVBtn = document.getElementById('btn-open-cv-modal');
  const closeCVBtn = document.getElementById('cv-modal-close-btn');
  const printCVBtn = document.getElementById('btn-print-cv');

  if (openCVBtn && cvModal) {
    openCVBtn.addEventListener('click', () => {
      cvModal.classList.add('active');
      cvModal.setAttribute('aria-hidden', 'false');
    });
  }

  if (closeCVBtn && cvModal) {
    closeCVBtn.addEventListener('click', () => {
      cvModal.classList.remove('active');
      cvModal.setAttribute('aria-hidden', 'true');
    });
  }

  if (printCVBtn) {
    printCVBtn.addEventListener('click', () => {
      window.print();
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
    showToast(nextLang === 'tr' ? 'Dil Türkçe yapıldı 🇹🇷' : 'Language set to English 🇬🇧');
  });
}

const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    showToast(nextTheme === 'light' ? 'Açık Tema / Light Mode ☀️' : 'Koyu Tema / Dark Mode 🌙');
  });
}

// Initialize on page load
applyLanguage(currentLang);
applyTheme(currentTheme);

// ==========================================================================
// 10. CONTACT FORM DIRECT COMPOSER
// ==========================================================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value;

    const fullSubject = encodeURIComponent(`[Portfolio Contact] ${subject} - ${name}`);
    const fullBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    showToast('Opening email client...');
    window.location.href = `mailto:didenurszn@gmail.com?subject=${fullSubject}&body=${fullBody}`;
  });
}

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
