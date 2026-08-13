/* ============================================
   ORVIONAR TECH – Advanced Animations Engine
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Page Loader ---- */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 600);
    });
    setTimeout(() => { loader.classList.add('fade-out'); setTimeout(() => loader.remove(), 600); }, 2500);
  }

  /* ---- Scroll Progress Bar ---- */
  const progress = document.getElementById('scroll-progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progress.style.width = Math.min(scrolled, 100) + '%';
    }, { passive: true });
  }

  /* ---- Back to Top ---- */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- Custom Cursor ---- */
  const cursor    = document.getElementById('custom-cursor');
  const cursorDot = document.getElementById('custom-cursor-dot');
  if (cursor && cursorDot && window.innerWidth > 768) {
    let cx = 0, cy = 0, dx = 0, dy = 0;
    document.addEventListener('mousemove', e => {
      dx = e.clientX; dy = e.clientY;
      cursorDot.style.left = dx + 'px';
      cursorDot.style.top  = dy + 'px';
    });
    function animateCursor() {
      cx += (dx - cx) * 0.12;
      cy += (dy - cy) * 0.12;
      cursor.style.left = cx + 'px';
      cursor.style.top  = cy + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
    document.querySelectorAll('a,button,.btn,.course-card,.why-card,.brand-logo').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  }

  /* ---- Scroll Reveal ---- */
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

    // Auto-add reveal to key elements if not already set
    const autoReveal = [
      { sel: '.course-card',       rev: 'up',    base: 0.1 },
      { sel: '.why-card',          rev: 'scale', base: 0.1 },
      { sel: '.testimonial-card',  rev: 'up',    base: 0.15 },
      { sel: '.alumni-card',       rev: 'scale', base: 0.1 },
      { sel: '.student-card',      rev: 'up',    base: 0.1 },
      { sel: '.dash-card',         rev: 'scale', base: 0.15 },
      { sel: '.vm-card',           rev: 'left',  base: 0 },
      { sel: '.job-card',          rev: 'right', base: 0.1 },
      { sel: '.profile-card',      rev: 'up',    base: 0.1 },
      { sel: '.section-header',    rev: 'up',    base: 0 },
    ];
    autoReveal.forEach(({ sel, rev }) => {
      document.querySelectorAll(sel + ':not([data-reveal])').forEach((el, i) => {
        el.setAttribute('data-reveal', rev);
        el.setAttribute('data-reveal-delay', Math.min(i + 1, 6));
        revealObs.observe(el);
      });
    });
  }

  /* ---- Particles (hero background) ---- */
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });

    const PARTICLE_COUNT = 55;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1
    }));

    function drawParticles() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        // Move
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249,115,22,${p.opacity})`;
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(249,115,22,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawParticles);
    }
    drawParticles();
  }

  /* ---- Typewriter Effect ---- */
  const typer = document.getElementById('typewriter-text');
  if (typer) {
    const words = ['Smarter.', 'Efficiently.', 'With AI.', 'Professionally.'];
    let wIndex = 0, cIndex = 0, deleting = false;
    function type() {
      const word = words[wIndex];
      typer.textContent = deleting ? word.slice(0, cIndex--) : word.slice(0, cIndex++);
      if (!deleting && cIndex > word.length) { deleting = true; setTimeout(type, 1800); return; }
      if (deleting && cIndex < 0)            { deleting = false; wIndex = (wIndex + 1) % words.length; setTimeout(type, 300); return; }
      setTimeout(type, deleting ? 60 : 100);
    }
    type();
  }

  /* ---- Magnetic Button Effect ---- */
  document.querySelectorAll('.btn-primary, .btn-outline, .btn-lg').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  /* ---- 3D Tilt on cards ---- */
  document.querySelectorAll('.course-card, .why-card, .testimonial-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const rx   = (e.clientY - cy) / (rect.height / 2) * 6;
      const ry   = (e.clientX - cx) / (rect.width  / 2) * -6;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---- Smooth number counter ---- */
  function animateCount(el) {
    const raw    = el.dataset.target || el.innerText;
    const num    = parseFloat(raw.replace(/[^0-9.]/g, ''));
    const suffix = raw.replace(/[0-9.]/g, '');
    const dur    = 2000;
    const start  = performance.now();
    function step(now) {
      const t = Math.min((now - start) / dur, 1);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const val  = Number.isInteger(num) ? Math.floor(ease * num) : (ease * num).toFixed(1);
      el.textContent = val + suffix;
      el.classList.add('popping');
      setTimeout(() => el.classList.remove('popping'), 400);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    const cntObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); cntObs.unobserve(e.target); } });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-num').forEach(el => { el.dataset.target = el.textContent; cntObs.observe(el); });
  }

  /* ---- Stats strip stagger ---- */
  document.querySelectorAll('.stat-item').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`;
  });
  if ('IntersectionObserver' in window) {
    const statsObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.stat-item').forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
          statsObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    const statsStrip = document.querySelector('.stats-strip');
    if (statsStrip) statsObs.observe(statsStrip);
  }

});
