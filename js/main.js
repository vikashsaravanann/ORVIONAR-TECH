/* ============================================
   ORVIONAR TECH – Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Navbar scroll effect ----------
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // ---------- Mobile hamburger ----------
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Programs dropdown ----------
  const dropdown = document.querySelector('.nav-dropdown');
  if (dropdown) {
    dropdown.addEventListener('mouseenter', () => dropdown.classList.add('open'));
    dropdown.addEventListener('mouseleave', () => dropdown.classList.remove('open'));
  }

  // ---------- Domain tabs (domains.html) ----------
  const tabBtns = document.querySelectorAll('.tab-btn');
  const domainSections = document.querySelectorAll('.domain-section');
  if (tabBtns.length) {
    const activateTab = (tabId) => {
      tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tabId));
      domainSections.forEach(s => s.classList.toggle('active', s.id === tabId));
      const target = document.getElementById(tabId);
      if (target) {
        // Optional: scroll to the tabs if a specific tab was requested
        // target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => activateTab(btn.dataset.tab));
    });

    // Check URL for initial tab (e.g., domains.html?tab=ece or domains.html#ece)
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    const hashParam = window.location.hash.replace('#', '');
    const initialTab = tabParam || hashParam;
    if (initialTab) {
      activateTab(initialTab);
    }
  }

  const BACKEND_URL = 'http://localhost:31415'; // Change to live URL in production

  // ---------- Contact form ----------
  // Handled by Formspree SDK directly in contact.html

  // ---------- Talent pool form ----------
  const talentForm = document.getElementById('talentForm');
  if (talentForm) {
    talentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.getElementById('talentSuccess');
      if (success) { success.classList.add('show'); }
      talentForm.reset();
      setTimeout(() => success && success.classList.remove('show'), 5000);
    });
  }

  // ---------- Auth forms ----------
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const email = loginForm.querySelector('input[type=\"email\"]').value;
        const password = loginForm.querySelector('input[type=\"password\"]').value;
        
        // Explicit check for static hosting without backend
        if (BACKEND_URL.includes('localhost') && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
          alert('Login system requires a backend service to be deployed (e.g. Node.js on Render/Vercel or Firebase) to handle authentication securely.');
          throw new Error('Missing backend infrastructure');
        }

        const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        
        if (res.ok) {
          const data = await res.json();
          localStorage.setItem('token', data.token); // Store token for future requests
          window.location.href = 'dashboard.html';
        } else {
          const errorData = await res.json();
          alert(`Login failed: ${errorData.error}`);
        }
      } catch (err) {
        console.error(err);
        alert('Error connecting to the server.');
      }
    });
  }
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const name = signupForm.querySelector('input[type=\"text\"]').value;
        const email = signupForm.querySelector('input[type=\"email\"]').value;
        const password = signupForm.querySelector('input[type=\"password\"]').value;
        const phone = signupForm.querySelector('input[type=\"tel\"]')?.value || '';
        const college = signupForm.querySelectorAll('input[type=\"text\"]')[1]?.value || '';

        const res = await fetch(`${BACKEND_URL}/api/auth/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password, phone, college })
        });

        if (res.ok) {
          const success = document.getElementById('signupSuccess');
          if (success) { success.classList.add('show'); }
          setTimeout(() => { window.location.href = 'login.html'; }, 1800);
        } else {
          const errorData = await res.json();
          alert(`Signup failed: ${errorData.error}`);
        }
      } catch (err) {
        console.error(err);
        alert('Error connecting to the server.');
      }
    });
  }
  const resetForm = document.getElementById('resetForm');
  if (resetForm) {
    resetForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.getElementById('resetSuccess');
      if (success) { success.classList.add('show'); }
    });
  }

  // ---------- Animate on scroll (simple) ----------
  const animEls = document.querySelectorAll('.course-card, .why-card, .testimonial-card, .dash-card, .job-card, .vm-card, .why-item');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    animEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  // ---------- Counter animation ----------
  const counters = document.querySelectorAll('.stat-num');
  counters.forEach(counter => {
    const target = counter.innerText;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    const suffix = target.replace(/[0-9.]/g, '');
    let current = 0;
    const increment = num / 60;
    const update = () => {
      current += increment;
      if (current < num) {
        counter.innerText = (Number.isInteger(num) ? Math.floor(current) : current.toFixed(1)) + suffix;
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { update(); observer.unobserve(counter); }
    });
    observer.observe(counter);
  });

});

// ---------- Alumni slider ----------
(function() {
  const track = document.getElementById('alumniTrack');
  const prevBtn = document.getElementById('alumniPrev');
  const nextBtn = document.getElementById('alumniNext');
  if (!track || !prevBtn || !nextBtn) return;

  let current = 0;
  const cards = track.querySelectorAll('.alumni-card');
  const visibleCount = () => window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const maxIndex = () => Math.max(0, cards.length - visibleCount());

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 24; // gap
    track.style.transform = `translateX(-${current * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    current = current >= maxIndex() ? 0 : current + 1;
    updateSlider();
  });
  prevBtn.addEventListener('click', () => {
    current = current <= 0 ? maxIndex() : current - 1;
    updateSlider();
  });

  // Auto slide every 4s
  setInterval(() => {
    current = current >= maxIndex() ? 0 : current + 1;
    updateSlider();
  }, 4000);

  window.addEventListener('resize', updateSlider);
})();

  // ---------- Back to Top ----------
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
      backToTop.style.transform = window.scrollY > 300 ? 'translateY(0)' : 'translateY(20px)';
      backToTop.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Theme toggle (light / dark) ----------
  (function() {
    const themeCss = `
/* Theme overrides injected by theme-toggle.js (tuned) */
:root { transition: background-color 0.28s ease, color 0.28s ease; }
body[data-theme] { transition: background-color 0.28s ease, color 0.28s ease; }

/* Dark theme (default) */
body[data-theme="dark"] {
  --black: #0b0b0b;
  --white: #ffffff;
  --dark: #0f1113;
  --gray-900: #0b1220;
  --gray-700: #2b3440;
  --gray-500: #6b7280;
  --gray-300: #cbd5e1;
  --gray-100: #f3f4f6;
  --nav-bg: #060608;
  --orange: #ff7a18; /* slightly brighter */
  --accent: #ff7a18;
  --muted: rgba(255,255,255,0.78);
}

/* Light theme (inverted colors for professional white background) */
body[data-theme="light"] {
  --black: #ffffff; /* background */
  --white: #0f172a; /* primary text */
  --dark: #f8fafc;  /* card backgrounds */
  --gray-900: #0f172a;
  --gray-700: #475569;
  --gray-500: #6b7280;
  --gray-300: #9ca3af;
  --gray-100: #f8fafc;
  --nav-bg: #ffffff;
  --orange: #ff7a18;
  --accent: #ff7a18;
  --muted: rgba(15,23,42,0.78);
}

/* apply to page background and primary text (uses theme variables above) */
body[data-theme="dark"] { background: var(--black); color: var(--white); }
body[data-theme="light"] { background: var(--black); color: var(--white); }

/* map existing semantic vars used in stylesheet to theme-aware values */
body[data-theme="light"] {
  --nav-bg: var(--nav-bg);
  --white: var(--white);
  --black: var(--black);
  --dark: var(--dark);
  --gray-300: var(--gray-300);
  --gray-400: rgba(15,23,42,0.7);
}

/* Stronger cloud text for major headings in dark theme */
body[data-theme="dark"] .section-title,
body[data-theme="dark"] .hero-title,
body[data-theme="dark"] h1, body[data-theme="dark"] h2, body[data-theme="dark"] h3 {
  text-shadow: 0 10px 32px rgba(0,0,0,0.6), 0 0 14px rgba(255,255,255,0.04);
}

/* cloud-like soft white stroke behind letters for specific accent */
.cloud-text {
  color: var(--white);
  position: relative;
}
body[data-theme="dark"] .cloud-text {
  text-shadow: 0 0 18px rgba(255,255,255,0.14), 0 4px 12px rgba(0,0,0,0.6);
}

/* Auto-apply cloud-text styling to major headings (no HTML edits required) */
.section-title, .hero-title { will-change: text-shadow, color; }

/* Accent rule — use bright orange for links and highlights in both themes */
a, .gradient-text, .btn-primary, .nav-links a.active { color: var(--accent) !important; }
.btn-primary { background: var(--accent) !important; }
.btn-outline-white:hover { background: var(--accent); color: var(--white); }

/* ensure navbar and cards use theme-aware backgrounds */
.navbar { background: var(--nav-bg) !important; }
.course-card, .why-card, .testimonial-card, .hero-card, .contact-form-card, .vm-card, .job-card, .footer { background: var(--dark) !important; color: var(--white) !important; }

/* make sure muted text uses appropriate contrast */
body[data-theme="dark"] .muted, body[data-theme="dark"] .hero-sub, body[data-theme="dark"] p { color: rgba(255,255,255,0.82); }
body[data-theme="light"] .muted, body[data-theme="light"] .hero-sub, body[data-theme="light"] p { color: rgba(15,23,42,0.78); }

/* smooth theme transition for images and containers */
img, .course-img, .brand-logo img { transition: filter 0.25s ease, opacity 0.2s ease; }

/* small toggle button */
#theme-toggle { display:inline-flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:8px; background:transparent; color:inherit; border:1px solid rgba(255,255,255,0.08); }
#theme-toggle:hover { transform: translateY(-2px); background: rgba(0,0,0,0.06); }
`;
    const styleEl = document.createElement('style');
    styleEl.setAttribute('id','theme-injected-styles');
    styleEl.innerHTML = themeCss;
    document.head.appendChild(styleEl);

    function applyTheme(theme) {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('site-theme', theme);
      const btn = document.getElementById('theme-toggle');
      if (btn) {
        btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
        btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      }
    }

    // create toggle button in navbar if present
    function initToggle() {
      const navInner = document.querySelector('.nav-inner');
      if (!navInner) return;
      if (document.getElementById('theme-toggle')) return;
      const toggle = document.createElement('button');
      toggle.setAttribute('id','theme-toggle');
      toggle.setAttribute('title','Toggle theme');
      toggle.className = 'btn-outline';
      toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      // insert before hamburger if present
      const hamburger = document.getElementById('hamburger');
      if (hamburger) navInner.insertBefore(toggle, hamburger);
      else navInner.appendChild(toggle);

      toggle.addEventListener('click', () => {
        const current = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    }

    // initial theme: preference -> localStorage -> default dark
    const stored = localStorage.getItem('site-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light') || 'dark';
    document.addEventListener('DOMContentLoaded', () => {
      applyTheme(initial);
      initToggle();
    });
    // also run immediately in case DOM already loaded
    applyTheme(initial);
    initToggle();
  })();

End of file.
