/**
 * Interactive Neural Network / Graph Constellation Background Canvas
 * Directly reflects Didenur's specialization in Graph Data Science (Neo4j),
 * P2P Distributed Systems, and Blockchain Network Topologies.
 */

(function () {
  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Mouse interaction state
  const mouse = {
    x: null,
    y: null,
    radius: 160
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  });

  // Graph Node / Particle Definition
  class Node {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.baseRadius = Math.random() * 2 + 1.2;
      this.radius = this.baseRadius;
      // Vibrant cyber color assignment
      const colors = ['#38bdf8', '#818cf8', '#a855f7', '#34d399'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.pulseSpeed = Math.random() * 0.03 + 0.01;
      this.pulseVal = Math.random() * Math.PI;
    }

    update() {
      // Gentle floating motion
      this.x += this.vx;
      this.y += this.vy;

      // Bounce against screen boundaries
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactivity (gentle gravitational attraction & expansion)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.8;
          this.x += (dx / dist) * force;
          this.y += (dy / dist) * force;
          this.radius = this.baseRadius + force * 2.5;
        } else {
          this.radius = this.baseRadius;
        }
      } else {
        this.radius = this.baseRadius;
      }

      this.pulseVal += this.pulseSpeed;
    }

    draw() {
      const alpha = 0.5 + Math.sin(this.pulseVal) * 0.3;
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = alpha;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  // Data packet traveling along edges (representing P2P chunk transfer / graph traversal)
  class Packet {
    constructor(nodeA, nodeB) {
      this.nodeA = nodeA;
      this.nodeB = nodeB;
      this.progress = 0;
      this.speed = Math.random() * 0.012 + 0.008;
      this.color = '#38bdf8';
    }

    update() {
      this.progress += this.speed;
      return this.progress < 1;
    }

    draw() {
      const x = this.nodeA.x + (this.nodeB.x - this.nodeA.x) * this.progress;
      const y = this.nodeA.y + (this.nodeB.y - this.nodeA.y) * this.progress;

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#38bdf8';
      ctx.fill();
      ctx.restore();
    }
  }

  let nodes = [];
  let packets = [];
  const maxDistance = 135;

  function initParticles() {
    nodes = [];
    packets = [];
    // Adjust particle count dynamically based on screen real estate
    const nodeCount = Math.floor((width * height) / 16000);
    const count = Math.min(Math.max(nodeCount, 45), 100);

    for (let i = 0; i < count; i++) {
      nodes.push(new Node());
    }
  }

  // Periodic packet generation across connected edges
  function spawnPacket() {
    if (nodes.length < 2 || packets.length > 12) return;
    const i = Math.floor(Math.random() * nodes.length);
    const j = Math.floor(Math.random() * nodes.length);
    if (i === j) return;

    const dx = nodes[i].x - nodes[j].x;
    const dy = nodes[i].y - nodes[j].y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < maxDistance) {
      packets.push(new Packet(nodes[i], nodes[j]));
    }
  }

  setInterval(spawnPacket, 800);

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      // Connect to mouse pointer
      if (mouse.x !== null && mouse.y !== null) {
        const dx = nodes[i].x - mouse.x;
        const dy = nodes[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const alpha = (1 - dist / mouse.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }

    // Update & draw packets
    for (let p = packets.length - 1; p >= 0; p--) {
      if (packets[p].update()) {
        packets[p].draw();
      } else {
        packets.splice(p, 1);
      }
    }

    // Update & draw nodes
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update();
      nodes[i].draw();
    }

    requestAnimationFrame(animate);
  }

  initParticles();
  animate();
})();
