# Didenur Sezen — Interactive Cyber Portfolio & CV

Ultra-modern, highly interactive personal portfolio website for **Didenur Sezen** (Computer Science Engineering student at Yeditepe University & UTBM France). 

Designed with a high-tech **Graph & Distributed Systems** aesthetic reflecting expertise in **Neo4j Graph Data Science, P2P Networks, Apache Spark, and .NET/Blazor Software Development**.

Live Target: `https://<your-username>.github.io/`

---

## Key Features & Highlights

- **Interactive Neural / Graph Constellation Canvas**: Background node & edge simulation responding dynamically to mouse movements, packet transmissions, and gravitational forces.
- **Embedded Developer CLI Terminal (`~`)**: Interactive command-line interface supporting commands like `help`, `skills`, `projects`, `inspect <id>`, `education`, `experience`, `certs`, `sudo hire`, and `matrix`.
- **CV Integration & Print-Ready Modal**: Instant digital resume viewer with print-to-PDF stylesheet optimization (`@media print`).
- **3D Hardware-Accelerated Perspective Tilt**: Interactive project cards with dynamic lighting and tilt physics.
- **Project Architecture Inspector**: In-depth architectural flowcharts, tech breakdowns, and engineering highlights for all 7 CV projects.
- **Web Audio API Sound Synthesizer**: Clean, haptic audio feedback for clicks and commands without external audio files (muted by default with toggle).
- **Zero Build Tool Dependencies**: Built strictly using modern HTML5, Vanilla CSS3, and ES6+ JavaScript. Deploys instantly to GitHub Pages with 0 build steps.

---

## Directory Structure

```
didenur-portfolio/
├── index.html               # Main semantic HTML5 portfolio
├── .nojekyll                # Direct static asset serving for GitHub Pages
├── README.md                # Project documentation
├── DEPLOY_GUIDE.md          # Step-by-step GitHub Pages deployment guide
├── css/
│   ├── style.css            # Cyberpunk obsidian theme, glassmorphism, animations
│   └── responsive.css       # Mobile & tablet layout optimizations
└── js/
    ├── app.js               # Audio synthesis, 3D tilt, modals, tabs, toast notifications
    ├── canvas-network.js    # Interactive graph constellation canvas
    └── terminal.js          # Interactive developer terminal engine
```

---

## Local Preview

To test locally on your computer:

```bash
# Option 1: Using Python's built-in server (recommended)
cd C:\Users\diden\.gemini\antigravity-ide\scratch\didenur-portfolio
python -m http.server 8000

# Then open in browser:
# http://localhost:8000
```

Or simply double-click `index.html` to open it in any web browser!

---

## Deploying to GitHub Pages (`github.io`)

Refer to [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md) for full instructions on publishing with your GitHub Token.
