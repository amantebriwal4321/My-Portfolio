/* ============================================
   AMAN DEV — PORTFOLIO SCRIPTS
   ============================================ */

// === LOADER WITH TYPING EFFECT ===
(function initLoader() {
  const loaderText = document.getElementById('loaderText');
  const loaderBar = document.getElementById('loaderBar');
  const loader = document.getElementById('loader');
  const phrase = 'Crafting experiences...';
  let i = 0;

  function typeChar() {
    if (i < phrase.length) {
      const span = document.createElement('span');
      span.className = 'typed-char';
      span.textContent = phrase[i];
      span.style.animationDelay = (i * 0.02) + 's';
      // Insert before the cursor
      const cursor = loaderText.querySelector('.loader-cursor');
      loaderText.insertBefore(span, cursor);
      // Update progress bar
      if (loaderBar) {
        loaderBar.style.width = ((i + 1) / phrase.length * 100) + '%';
      }
      i++;
      setTimeout(typeChar, 50);
    } else {
      // Done typing, wait a beat then hide
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 600);
    }
  }

  window.addEventListener('load', () => {
    setTimeout(typeChar, 300);
  });
})();


// === CUSTOM CURSOR ===
(function initCursor() {
  const cur = document.querySelector('.cursor');
  const dot = document.querySelector('.cursor-dot');
  if (!cur || !dot) return;

  let curX = 0, curY = 0, dotX = 0, dotY = 0;

  document.addEventListener('mousemove', e => {
    curX = e.clientX;
    curY = e.clientY;
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });

  function animate() {
    dotX += (curX - dotX) * 0.15;
    dotY += (curY - dotY) * 0.15;
    cur.style.left = dotX + 'px';
    cur.style.top = dotY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  // Hover effects on interactive elements
  const hoverTargets = 'a, button, .skill-pill, .project-card, .social-tile, .milestone-card, .cta-btn';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('hover'));
    el.addEventListener('mouseleave', () => cur.classList.remove('hover'));
  });
})();


// === SCROLL PROGRESS BAR ===
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (s / h * 100) + '%';
  });
})();


// === NAVBAR SCROLL EFFECT ===
(function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
})();


// === MOBILE MENU ===
(function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
})();


// === BACK TO TOP ===
(function initBackToTop() {
  const btt = document.getElementById('backToTop');
  if (!btt) return;
  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 600);
  });
  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


// === INTERSECTION OBSERVER (Reveal animations) ===
(function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();


// === TYPEWRITER ===
(function initTypewriter() {
  const roles = ['Full Stack Developer', 'AI/ML Builder', 'Open Source Contributor', 'Problem Solver', 'Freelancer'];
  let ri = 0, ci = 0, deleting = false;
  const typed = document.getElementById('typedText');
  if (!typed) return;

  function typewrite() {
    const word = roles[ri];
    if (!deleting) {
      typed.textContent = word.slice(0, ++ci);
      if (ci === word.length) {
        deleting = true;
        setTimeout(typewrite, 1800);
        return;
      }
    } else {
      typed.textContent = word.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
    }
    setTimeout(typewrite, deleting ? 40 : 80);
  }
  setTimeout(typewrite, 2000);
})();


// === PARTICLE SYSTEM ===
(function initParticles() {
  const isMobile = window.innerWidth <= 768;
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COUNT = isMobile ? 20 : 60;
  const DIST = isMobile ? 80 : 120;
  const particles = [];

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.s = Math.random() * 2 + 0.5;
      this.sx = Math.random() * 0.3 - 0.15;
      this.sy = Math.random() * 0.3 - 0.15;
      this.o = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.sx;
      this.y += this.sy;
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }
    draw() {
      ctx.fillStyle = `rgba(123,47,255,${this.o})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    particles.forEach((a, i) => {
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < DIST) {
          ctx.strokeStyle = `rgba(123,47,255,${0.08 * (1 - d / DIST)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(animate);
  }
  animate();
})();


// === FLOATING ICONS ===
(function initFloatingIcons() {
  const icons = ['fab fa-react', 'fab fa-python', 'fab fa-node-js', 'fab fa-js', 'fab fa-html5', 'fab fa-css3-alt', 'fab fa-git-alt', 'fas fa-database'];
  const container = document.getElementById('floatingIcons');
  if (!container) return;

  icons.forEach((ic, i) => {
    const el = document.createElement('i');
    el.className = ic + ' floating-icon';
    el.style.left = Math.random() * 90 + '%';
    el.style.animationDelay = i * 2.5 + 's';
    el.style.animationDuration = (18 + Math.random() * 10) + 's';
    container.appendChild(el);
  });
})();


// === 3D TILT ON PROJECT CARDS ===
(function initTilt() {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = ((y - r.height / 2) / r.height) * -8;
      const ry = ((x - r.width / 2) / r.width) * 8;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();


// === RESUME BUTTON (Open in new tab + Download) ===
function handleResumeClick(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  const url = btn.getAttribute('href');
  const originalHTML = btn.innerHTML;

  // Feedback animation
  btn.classList.add('downloading');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening & Downloading...';

  // Open in new tab
  window.open(url, '_blank');

  // Trigger download via hidden anchor
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Aman_Tebriwal_Resume.pdf';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Restore button
  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.classList.remove('downloading');
  }, 2000);
}


// === SCROLL ORB (Storytelling element) ===
(function initScrollOrb() {
  const orb = document.getElementById('scrollOrb');
  const track = document.getElementById('scrollTrack');
  if (!orb || window.innerWidth <= 1024) return;

  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const progress = s / h;

    // Show/hide based on scroll position
    const isVisible = s > 200;
    orb.classList.toggle('visible', isVisible);
    if (track) track.classList.toggle('visible', isVisible);

    // Move orb along the track (15% to 85% of viewport)
    const topPos = 15 + (progress * 70);
    orb.style.top = topPos + 'vh';
  });
})();


// === SMOOTH SCROLL ===
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();


// === CERTIFICATE MODAL ===
(function initCertModal() {
  const overlay = document.getElementById('certModal');
  const closeBtn = document.getElementById('certModalClose');
  const modalMedia = document.getElementById('certModalMedia');
  const modalTitle = document.getElementById('certModalTitle');
  const modalDesc = document.getElementById('certModalDesc');
  const modalIssuer = document.getElementById('certModalIssuer');
  const modalLink = document.getElementById('certModalLink');
  if (!overlay) return;

  // Helper: check if file is a PDF
  function isPDF(src) {
    return src && src.toLowerCase().endsWith('.pdf');
  }

  // Open modal with card data
  function openCertModal(card) {
    const title = card.dataset.certTitle || '';
    const desc = card.dataset.certDesc || '';
    const issuer = card.dataset.certIssuer || '';
    const img = card.dataset.certImg || '';
    const video = card.dataset.certVideo || '';
    const link = card.dataset.certLink || '';

    // Set text content
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalIssuer.textContent = issuer ? 'Issued by: ' + issuer : '';

    // Set media — video > PDF > image > placeholder
    modalMedia.innerHTML = '';
    if (video) {
      const vid = document.createElement('video');
      vid.src = video;
      vid.controls = true;
      vid.autoplay = false;
      vid.preload = 'metadata';
      modalMedia.appendChild(vid);
    } else if (isPDF(img)) {
      // Embed PDF inline
      const iframe = document.createElement('iframe');
      iframe.src = img;
      iframe.style.width = '100%';
      iframe.style.height = '400px';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '0';
      iframe.title = title;
      modalMedia.appendChild(iframe);
    } else if (img) {
      const imgEl = document.createElement('img');
      imgEl.src = img;
      imgEl.alt = title;
      imgEl.onerror = function () {
        modalMedia.innerHTML = '<div class="cert-placeholder"><i class="fas fa-certificate"></i>Certificate image coming soon</div>';
      };
      modalMedia.appendChild(imgEl);
    } else {
      modalMedia.innerHTML = '<div class="cert-placeholder"><i class="fas fa-certificate"></i>Certificate image coming soon</div>';
    }

    // External link button
    if (link) {
      modalLink.href = link;
      modalLink.classList.remove('hidden');
    } else {
      modalLink.classList.add('hidden');
    }

    // Show modal
    overlay.classList.add('active');
    document.body.classList.add('modal-open');
  }

  // Close modal
  function closeCertModal() {
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
    // Stop any playing video
    const vid = modalMedia.querySelector('video');
    if (vid) vid.pause();
  }

  // Cards that open modal (have data-cert-title)
  document.querySelectorAll('.milestone-card[data-cert-title]').forEach(card => {
    card.addEventListener('click', () => openCertModal(card));
  });

  // Cards that redirect directly (have data-cert-redirect)
  document.querySelectorAll('.milestone-card[data-cert-redirect]').forEach(card => {
    card.addEventListener('click', () => {
      const url = card.dataset.certRedirect;
      if (url) window.open(url, '_blank');
    });
  });

  // Close handlers
  closeBtn.addEventListener('click', closeCertModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCertModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeCertModal();
  });
})();