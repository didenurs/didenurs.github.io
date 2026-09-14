/**
 * Interactive Developer CLI / Terminal Engine
 * Provides a hacker-friendly interactive playground for recruiters and engineers.
 */

(function () {
  const terminalDrawer = document.getElementById('terminal-drawer');
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const openTerminalBtn = document.getElementById('btn-open-terminal');
  const triggerCliBtn = document.getElementById('btn-trigger-cli');
  const closeTerminalBtn = document.getElementById('terminal-close-btn');

  if (!terminalDrawer || !terminalInput || !terminalOutput) return;

  const history = [];
  let historyIndex = -1;

  // Sound trigger helper if app.js exposed it
  function playClick() {
    if (window.portfolioAudio && typeof window.portfolioAudio.playTone === 'function') {
      window.portfolioAudio.playTone(600, 'sine', 0.04);
    }
  }

  function openTerminal() {
    terminalDrawer.classList.add('active');
    terminalDrawer.setAttribute('aria-hidden', 'false');
    playClick();
    setTimeout(() => terminalInput.focus(), 150);
  }

  function closeTerminal() {
    terminalDrawer.classList.remove('active');
    terminalDrawer.setAttribute('aria-hidden', 'true');
    playClick();
  }

  function toggleTerminal() {
    if (terminalDrawer.classList.contains('active')) {
      closeTerminal();
    } else {
      openTerminal();
    }
  }

  // Event Listeners for Open/Close
  if (openTerminalBtn) openTerminalBtn.addEventListener('click', toggleTerminal);
  if (triggerCliBtn) triggerCliBtn.addEventListener('click', openTerminal);
  if (closeTerminalBtn) closeTerminalBtn.addEventListener('click', closeTerminal);

  // Global Keyboard Shortcuts (~ or Esc)
  window.addEventListener('keydown', (e) => {
    if (e.key === '`' || e.key === '~') {
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        toggleTerminal();
      }
    } else if (e.key === 'Escape' && terminalDrawer.classList.contains('active')) {
      closeTerminal();
    }
  });

  // Print helper
  function printLine(htmlContent, className = 'term-line') {
    const line = document.createElement('div');
    line.className = className;
    line.innerHTML = htmlContent;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  // Commands Directory
  const commands = {
    help: () => {
      return `
<span class="term-glow-cyan">Available Commands:</span>
  <span class="term-highlight">about</span>        - Brief summary of Didenur's engineering profile
  <span class="term-highlight">skills</span>       - List core technical proficiencies & data stacks
  <span class="term-highlight">projects</span>     - Display engineered projects
  <span class="term-highlight">inspect &lt;id&gt;</span>  - Open project architecture (e.g. 'inspect p2p', 'inspect firewall')
  <span class="term-highlight">education</span>    - Details on Yeditepe & UTBM (France) exchange
  <span class="term-highlight">experience</span>   - Cloudpeer internship & Innovation Crunch Time
  <span class="term-highlight">certs</span>        - NVIDIA, Coderspace, and Sabancı certificates
  <span class="term-highlight">cv</span>           - View & print verified Curriculum Vitae
  <span class="term-highlight">contact</span>      - Contact details & quick links
  <span class="term-highlight">sudo hire</span>    - Initiate offer workflow
  <span class="term-highlight">matrix</span>       - Cyber animation Easter egg
  <span class="term-highlight">clear</span>        - Clear the terminal screen
  <span class="term-highlight">exit</span>         - Close the terminal window
      `;
    },

    about: () => {
      return `
<span class="term-glow-cyan">Didenur Sezen</span> — Computer Science Engineering Student
• <strong>Yeditepe University</strong> (Istanbul) & <strong>UTBM</strong> (France).
• Engineering high-performance distributed systems, Neo4j Graph Data Science,
  Apache Spark analytics pipelines, and C# / .NET Blazor enterprise software.
• Multicultural team experience & verified international hackathon prototype presenter.
      `;
    },

    skills: () => {
      return `
<span class="term-glow-cyan">Technical Stack Overview:</span>
  <strong>• Languages:</strong> Python, Java, C#, C++, SQL, Solidity, PHP, JavaScript
  <strong>• Big Data:</strong> Apache Spark, PySpark, Pandas, PCA, IQR Outlier Detection
  <strong>• Graph:</strong> Neo4j, Graph Data Science (GDS), RDF/OWL, SPARQL, SWRL
  <strong>• Systems:</strong> Linux (iptables), TCP/UDP Sockets, Concurrency, P2P Protocols
  <strong>• Web/Desktop:</strong> .NET Core, Blazor, Razor Components, PyQt5, SQLite, REST
  <strong>• Web3/Tools:</strong> Solidity, Geth, Truffle, Ganache, Web3.js, Git, Postman
      `;
    },

    projects: () => {
      return `
<span class="term-glow-cyan">Engineered Projects:</span>
  1. <span class="term-highlight">firewall</span>    - Linux Firewall Rule Management & Monitoring (PyQt5/iptables)
  2. <span class="term-highlight">p2p</span>         - Decentralized P2P Video Streaming Engine (Java Sockets)
  3. <span class="term-highlight">graph</span>       - Semantic Web, Knowledge Models & Neo4j Analytics
  4. <span class="term-highlight">spark</span>       - Intelligent Analytics & Distributed Spark Pipeline
  5. <span class="term-highlight">blockchain</span>  - Multi-Node Private Consortium & Solidity Contracts
  6. <span class="term-highlight">parking</span>     - Smart Parking Management System & UML Architecture
  7. <span class="term-highlight">music</span>       - Database-Driven Music Player Web Platform

<span class="term-dim">Tip: Type 'inspect p2p' or 'inspect firewall' to view full architecture details!</span>
      `;
    },

    inspect: (args) => {
      const id = args[0] ? args[0].toLowerCase() : null;
      if (!id) return `<span class="term-err">Please specify a project ID (e.g. 'inspect p2p', 'inspect firewall')</span>`;
      
      if (window.openProjectModal && typeof window.openProjectModal === 'function') {
        const success = window.openProjectModal(id);
        if (success) {
          return `<span class="term-highlight">✓ Opened architecture inspection for [${id}].</span>`;
        }
      }
      return `<span class="term-err">Project '${id}' not found. Type 'projects' to list valid IDs.</span>`;
    },

    education: () => {
      return `
<span class="term-glow-cyan">Academic Background:</span>
  <strong>• Yeditepe University</strong> (2022 - Present)
    B.Sc. in Computer Science Engineering — Istanbul, Turkey
  <strong>• UTBM (Université de Technologie de Belfort-Montbéliard)</strong> (Feb 2026 - July 2026)
    Computer Science Engineering Exchange — Belfort-Montbéliard, France
    <em>Coursework:</em> Intelligent Analytics & Data Management, Foundations of Data Science,
    Big Data Business Intelligence, Blockchain and Distributed Systems, Cloud Engineering.
      `;
    },

    experience: () => {
      return `
<span class="term-glow-cyan">Professional & Volunteer Experience:</span>
  <strong>• Cloudpeer Global Technology</strong> (July 2025)
    <em>Role:</em> API Developer Intern
    <em>Stack:</em> C# / .NET / Blazor / Razor Components / SQLite / Postman
    Developed frontend data visualization, filtering, and CRUD operations with SQLite; verified with Postman.

  <strong>• Innovation Crunch Time — ADAPEI Project</strong> (France)
    <em>Role:</em> Multidisciplinary Team Member (10 participants from 6 countries)
    Designed and developed a physical accessibility-focused rain protection prototype for wheelchair users.
      `;
    },

    certs: () => {
      return `
<span class="term-glow-cyan">Certifications & Seminars:</span>
  ✓ <strong>NVIDIA:</strong> Accelerating End-to-End Data Science Workflows Certificate (2026)
  ✓ <strong>Coderspace:</strong> Tech & Dev Talks Seminar Attendance Certificate (2024)
  ✓ <strong>Sabancı University:</strong> Summer School (Programming & 3D Organ Design, 2019)
      `;
    },

    contact: () => {
      return `
<span class="term-glow-cyan">Direct Contact:</span>
  • Email:    <a href="mailto:didenurszn@gmail.com" style="color:#38bdf8;">didenurszn@gmail.com</a>
  • Phone:    +90 539 503 0687
  • GitHub:   <a href="https://github.com/didenurszn" target="_blank" style="color:#38bdf8;">github.com/didenurszn</a>
  • LinkedIn: <a href="https://linkedin.com" target="_blank" style="color:#38bdf8;">linkedin.com/in/didenur-sezen</a>
      `;
    },

    cv: () => {
      const cvModal = document.getElementById('cv-modal');
      if (cvModal) {
        cvModal.classList.add('active');
        return `<span class="term-highlight">✓ Opened printable Curriculum Vitae modal.</span>`;
      }
      return `<span class="term-err">Unable to open CV modal.</span>`;
    },

    sudo: (args) => {
      if (args[0] && args[0].toLowerCase() === 'hire' || args.join(' ').toLowerCase() === 'hire-didenur') {
        return `
<span class="term-highlight" style="font-size:1.1em;">[ACCESS GRANTED: CANDIDATE ACQUIRED]</span>
🎉 Excellent choice! Didenur is ready to bring high impact, precision engineering, 
and strong problem-solving skills to your team.
Direct email: <strong>didenurszn@gmail.com</strong>
        `;
      }
      return `<span class="term-err">sudo: permission denied or unknown sub-command. Try 'sudo hire'</span>`;
    },

    matrix: () => {
      let count = 0;
      const matrixInterval = setInterval(() => {
        const randStr = Array.from({ length: 38 }, () => String.fromCharCode(33 + Math.floor(Math.random() * 90))).join(' ');
        printLine(`<span style="color:#22c55e; font-size:0.75rem;">${randStr}</span>`);
        count++;
        if (count > 10) clearInterval(matrixInterval);
      }, 70);
      return `<span class="term-glow-cyan">Initializing Neural Matrix Traversal...</span>`;
    },

    clear: () => {
      terminalOutput.innerHTML = '';
      return '';
    },

    exit: () => {
      closeTerminal();
      return `<span class="term-dim">Session closed.</span>`;
    }
  };

  // Process Command Submission
  terminalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawVal = terminalInput.value.trim();
    if (!rawVal) return;

    // History tracking
    history.push(rawVal);
    historyIndex = history.length;

    // Echo input
    printLine(`<span class="term-dim">didenur@portfolio:~$</span> <span style="color:#fff;">${rawVal}</span>`);

    // Parse command
    const parts = rawVal.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (commands[cmd]) {
      const response = commands[cmd](args);
      if (response) printLine(response);
    } else {
      printLine(`<span class="term-err">command not found: ${cmd}. Type <span class="term-highlight">'help'</span> for a list of commands.</span>`);
    }

    terminalInput.value = '';
    playClick();
  });

  // History Navigation via Arrow Keys
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = history[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        terminalInput.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        terminalInput.value = '';
      }
    }
  });

  // Expose command invoker globally
  window.runTerminalCommand = function (cmdString) {
    openTerminal();
    terminalInput.value = cmdString;
    terminalForm.dispatchEvent(new Event('submit'));
  };
})();
