/**
 * Main Application Script — Didenur Sezen Portfolio
 * Micro-animations, 3D tilt, audio synthesis, filter tabs, modals, and CV view.
 */

// ==========================================================================
// 1. WEB AUDIO API SYNTHESIZER (ZERO EXTERNAL SOUND FILES)
// ==========================================================================
class PortfolioSoundEngine {
  constructor() {
    this.enabled = false; // muted by default for respectful UX
    this.ctx = null;
    this.init();
  }

  init() {
    // Check localStorage preference
    const saved = localStorage.getItem('didenur_sfx_enabled');
    if (saved === 'true') {
      this.enabled = true;
    }
    this.updateIconUI();
  }

  getContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('didenur_sfx_enabled', this.enabled ? 'true' : 'false');
    this.updateIconUI();
    if (this.enabled) {
      this.playTone(880, 'sine', 0.08); // Confirmation chirp
      showToast('Sound Effects Enabled 🔊');
    } else {
      showToast('Sound Effects Muted 🔇');
    }
  }

  updateIconUI() {
    const iconOn = document.querySelector('.icon-sound-on');
    const iconOff = document.querySelector('.icon-sound-off');
    if (iconOn && iconOff) {
      iconOn.style.display = this.enabled ? 'block' : 'none';
      iconOff.style.display = this.enabled ? 'none' : 'block';
    }
  }

  playTone(freq = 440, type = 'sine', duration = 0.05, volume = 0.08) {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy or device fallback
    }
  }
}

window.portfolioAudio = new PortfolioSoundEngine();

// ==========================================================================
// 2. TOAST NOTIFICATION UTILITY
// ==========================================================================
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');
  window.portfolioAudio.playTone(520, 'triangle', 0.08);

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================================================
// 3. TYPEWRITER ROTATING HERO HEADLINE
// ==========================================================================
(function initTypewriter() {
  const target = document.getElementById('typewriter');
  if (!target) return;

  const phrases = [
    'Distributed Systems.',
    'Graph Data Science (Neo4j).',
    'Big Data Pipelines (Spark).',
    '.NET & Blazor Solutions.',
    'P2P Protocols & Networks.'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const current = phrases[phraseIndex];

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
      typingSpeed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
})();

// ==========================================================================
// 4. 3D PERSPECTIVE TILT CARDS
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

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
})();

// ==========================================================================
// 5. PROJECT FILTERING ENGINE
// ==========================================================================
(function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      window.portfolioAudio.playTone(700, 'sine', 0.04);

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
// 6. DETAILED PROJECT ARCHITECTURE DATA & MODAL
// ==========================================================================
const projectDatabase = {
  firewall: {
    title: 'Linux Firewall Rule Management & Monitoring Application',
    badge: 'Systems Security & GUI Architecture',
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
      'Video demonstration available showcasing end-to-end rule evaluation and packet drops.'
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
      'Integrated cryptographic SHA-256 chunk verification to prevent stream corruption or malicious injections.'
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
      'Executed Neo4j Graph Data Science (GDS) algorithms: PageRank, betweenness centrality, and Louvain community detection.',
      'Extracted hidden relational patterns and semantic linkages across high-dimensional graph topologies.'
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
      'Demonstrated high-throughput data processing and resilient dataset transformations.'
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
      'Integrated Web3.js client libraries for event listening and peer-to-peer transaction verification.',
      'Validated consensus state consistency across decentralized nodes.'
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
      'Engineered a full-featured role-based web application for real-time parking space reservations and tracking.',
      'Designed system architecture using rigorous UML Class, Sequence, and Activity diagrams.',
      'Implemented dynamic availability tracking, announcements, and internal customer messaging.',
      'Optimized relational database queries for high concurrency reservation locking and data consistency.'
    ],
    tech: ['HTML5', 'PHP', 'SQL', 'Relational DB Design', 'UML Architecture', 'Concurrency Handling']
  },

  music: {
    title: 'Database-Driven Music Player Web Platform',
    badge: 'Relational Database Design & Streaming',
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

  window.portfolioAudio.playTone(640, 'sine', 0.05);

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
      <button class="btn btn-primary" onclick="document.getElementById('project-modal').classList.remove('active')">Close Inspector</button>
      <a href="#contact" class="btn btn-outline" onclick="document.getElementById('project-modal').classList.remove('active')">Inquire About This Project</a>
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
    window.portfolioAudio.playTone(400, 'sine', 0.04);
  });
}

// Close Modal when clicking outside the box
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
// 7. CV MODAL & PRINT ENGINE
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
      window.portfolioAudio.playTone(600, 'sine', 0.05);
    });
  }

  if (closeCVBtn && cvModal) {
    closeCVBtn.addEventListener('click', () => {
      cvModal.classList.remove('active');
      cvModal.setAttribute('aria-hidden', 'true');
      window.portfolioAudio.playTone(400, 'sine', 0.04);
    });
  }

  if (printCVBtn) {
    printCVBtn.addEventListener('click', () => {
      window.portfolioAudio.playTone(800, 'sine', 0.05);
      window.print();
    });
  }
})();

// ==========================================================================
// 8. COPY EMAIL ACTIONS
// ==========================================================================
document.querySelectorAll('[data-email]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = btn.getAttribute('data-email') || 'didenurszn@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Email copied: ${email}`);
    }).catch(() => {
      showToast(`Email: ${email}`);
    });
  });
});

// ==========================================================================
// 9. SOUND TOGGLE BUTTON
// ==========================================================================
const sfxToggleBtn = document.getElementById('sfx-toggle');
if (sfxToggleBtn) {
  sfxToggleBtn.addEventListener('click', () => {
    window.portfolioAudio.toggle();
  });
}

// ==========================================================================
// 10. CONTACT FORM MAILTO GENERATOR
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

    showToast('Opening default email client...');
    window.portfolioAudio.playTone(800, 'sine', 0.08);

    window.location.href = `mailto:didenurszn@gmail.com?subject=${fullSubject}&body=${fullBody}`;
  });
}

// ==========================================================================
// 11. NAVBAR SCROLL & MOBILE MENU
// ==========================================================================
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy for active link
    const sections = document.querySelectorAll('section');
    let current = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      window.portfolioAudio.playTone(500, 'sine', 0.04);
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
})();
