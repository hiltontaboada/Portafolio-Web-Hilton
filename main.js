/* ═══════════════════════════════════════════════════════════
   HILTON TABOADA JR. — main.js
   Se carga en index.html Y proyecto.html
   Cada módulo verifica si los elementos existen antes de correr
   ═══════════════════════════════════════════════════════════ */

/* ─── CURSOR ─── */
(function () {
  const dot  = document.getElementById('cur');
  const ring = document.getElementById('cur2');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });
  (function loop() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  function activar(el) {
    el.addEventListener('mouseenter', () => { dot.classList.add('active'); ring.classList.add('active'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('active'); ring.classList.remove('active'); });
  }
  document.querySelectorAll('a, button, .port-card, .pf, .tag, .edu-card, .galeria-item, .proy-next-card').forEach(activar);
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
})();


/* ─── NAVBAR ─── */
(function () {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  let lastY = 0;
  nav.style.transition = 'transform 0.35s ease, background 0.4s, border-color 0.4s, padding 0.3s';
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 60);
    nav.style.transform = (y > lastY && y > 200) ? 'translateY(-100%)' : 'translateY(0)';
    lastY = y;
  }, { passive: true });
})();


/* ─── REVEAL EN SCROLL ─── */
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  items.forEach(el => obs.observe(el));
})();


/* ─── SMOOTH SCROLL ─── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const t = document.querySelector(link.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();


/* ─── FILTRO PORTAFOLIO (solo index.html) ─── */
(function () {
  const btns  = document.querySelectorAll('.pf');
  const cards = document.querySelectorAll('.port-card');
  if (!btns.length || !cards.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cards.forEach(card => {
        const match = f === 'all' || card.dataset.cat === f;
        if (match) {
          card.style.display = 'flex';
          requestAnimationFrame(() => {
            card.style.opacity = '0'; card.style.transform = 'translateY(12px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
              card.style.opacity = '1'; card.style.transform = 'translateY(0)';
            });
          });
        } else {
          card.style.transition = 'opacity 0.2s ease';
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
})();


/* ─── NAVEGACIÓN A PROYECTO — pasa el id por URL ─── */
(function () {
  const cards = document.querySelectorAll('.port-card[data-id]');
  if (!cards.length) return;
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      if (id) window.location.href = 'proyecto.html?id=' + id;
    });
  });
})();


/* ─── SKILL DOTS (solo index.html) ─── */
(function () {
  document.querySelectorAll('.sk-dots').forEach(wrap => {
    const val = parseInt(wrap.dataset.val, 10) || 0;
    wrap.innerHTML = [1,2,3,4,5].map(i =>
      `<div class="sk-dot ${i <= val ? 'on' : 'off'}"></div>`
    ).join('');
  });
})();


/* ─── ACTIVE NAV LINK (solo index.html) ─── */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) links.forEach(l => {
        l.style.color = l.getAttribute('href') === '#' + e.target.id ? 'var(--white)' : '';
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
})();


/* ─── PARALLAX HERO (solo index.html) ─── */
(function () {
  const photo = document.querySelector('.hero-photo');
  const logoBg = document.querySelector('.hero-logo-bg');
  if (!photo && !logoBg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (photo)  photo.style.transform  = `translateY(${y * 0.18}px)`;
    if (logoBg) logoBg.style.transform = `translateY(calc(-50% + ${y * 0.08}px))`;
  }, { passive: true });
})();


/* ─── CONTADORES ANIMADOS (solo index.html) ─── */
(function () {
  const stats = document.querySelectorAll('.stat-n');
  if (!stats.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const raw = el.textContent.trim();
      const num = parseInt(raw.replace(/\D/g, ''));
      const prefix = raw.startsWith('+') ? '+' : '';
      const suffix = raw.endsWith('+')   ? '+' : '';
      let cur = 0;
      const step = Math.max(1, Math.floor(num / 30));
      const t = setInterval(() => {
        cur += step;
        if (cur >= num) { cur = num; clearInterval(t); }
        el.textContent = prefix + cur + suffix;
      }, 40);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach(el => obs.observe(el));
})();
