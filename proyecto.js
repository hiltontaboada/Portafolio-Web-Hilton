/* ═══════════════════════════════════════════════════════════
   HILTON TABOADA JR. — proyecto.js
   Lee el proyecto desde la URL: proyecto.html?id=talk-english
   Requiere que datos.js esté cargado antes
   ═══════════════════════════════════════════════════════════ */

(function () {

  /* ── 1. Obtener ID desde la URL ── */
  const params   = new URLSearchParams(window.location.search);
  const idActual = params.get('id');

  if (!idActual || !PROYECTOS[idActual]) {
    // ID inválido o no existe → volver al portafolio
    window.location.href = 'index.html#portfolio';
    return;
  }

  const p = PROYECTOS[idActual];

  /* ── 2. Inyectar datos en el HTML ── */
  document.title = p.titulo + ' — Hilton Taboada Jr.';

  // Hero
  const heroImg = document.getElementById('proy-hero-img');
  if (heroImg) {
    heroImg.src = p.imagen_hero;
    heroImg.alt = p.titulo;
  }

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  set('proy-categoria', p.categoria);
  set('proy-titulo',    p.titulo);
  set('proy-cliente',   p.cliente);
  set('proy-año',       p.año);
  set('proy-servicios', p.servicios.join(' · '));
  set('proy-descripcion', p.descripcion);
  set('proy-desafio',     p.desafio);
  set('proy-solucion',    p.solucion);

  /* ── 3. Generar galería ── */
  const galeriaWrap = document.getElementById('proy-galeria');
  if (galeriaWrap && p.galeria) {
    p.galeria.forEach((img, idx) => {
      const anchoClass = img.ancho === 'full' ? 'item-full' : img.ancho === 'wide' ? 'item-wide' : '';
      const item = document.createElement('div');
      item.className  = `galeria-item ${anchoClass}`;
      item.dataset.idx = idx;

      item.innerHTML = `
        <img src="${img.src}" alt="${img.titulo}" loading="lazy" />
        <div class="img-placeholder-wrap" style="display:none">
          <svg class="placeholder-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="2" y="6" width="28" height="20" rx="2" stroke="currentColor" stroke-width="1.2"/>
            <circle cx="11" cy="13" r="3" stroke="currentColor" stroke-width="1.2"/>
            <path d="M2 22l8-6 5 4 5-4 10 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
          <span class="placeholder-label">${img.titulo}</span>
        </div>
        <div class="galeria-item-overlay">
          <div class="gi-zoom">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="6" cy="6" r="4" stroke="white" stroke-width="1.2"/>
              <path d="M9 9l3 3" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="gi-titulo">${img.titulo}</div>
          <div class="gi-desc">${img.desc}</div>
        </div>
      `;

      // Si la imagen falla → mostrar placeholder
      const imgEl = item.querySelector('img');
      const ph    = item.querySelector('.img-placeholder-wrap');
      imgEl.addEventListener('error', () => {
        imgEl.style.display = 'none';
        ph.style.display    = 'flex';
      });

      item.addEventListener('click', () => openLightbox(idx));
      galeriaWrap.appendChild(item);
    });
  }

  /* ── 4. Lightbox ── */
  const lb        = document.getElementById('lightbox');
  const lbOverlay = document.getElementById('lb-overlay');
  const lbImg     = document.getElementById('lb-img');
  const lbTitulo  = document.getElementById('lb-titulo');
  const lbDescEl  = document.getElementById('lb-desc');
  const lbCur     = document.getElementById('lb-cur');
  const lbTotal   = document.getElementById('lb-total');
  const lbClose   = document.getElementById('lb-close');
  const lbPrev    = document.getElementById('lb-prev');
  const lbNext    = document.getElementById('lb-next');
  let   lbIndex   = 0;
  const imagenes  = p.galeria || [];

  if (lbTotal) lbTotal.textContent = imagenes.length;

  function openLightbox(idx) {
    lbIndex = idx;
    updateLightbox();
    lb.classList.add('open');
    lbOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lb.classList.remove('open');
    lbOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  function updateLightbox() {
    const img = imagenes[lbIndex];
    if (!img) return;
    lbImg.src            = img.src;
    lbImg.alt            = img.titulo;
    lbTitulo.textContent = img.titulo;
    lbDescEl.textContent = img.desc;
    lbCur.textContent    = lbIndex + 1;
  }

  lbClose?.addEventListener('click', closeLightbox);
  lbOverlay?.addEventListener('click', closeLightbox);
  lbPrev?.addEventListener('click', () => { lbIndex = (lbIndex - 1 + imagenes.length) % imagenes.length; updateLightbox(); });
  lbNext?.addEventListener('click', () => { lbIndex = (lbIndex + 1) % imagenes.length; updateLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lb?.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  { lbIndex = (lbIndex - 1 + imagenes.length) % imagenes.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % imagenes.length; updateLightbox(); }
    if (e.key === 'Escape')     closeLightbox();
  });

  /* ── 5. Siguiente proyecto ── */
  const ids         = Object.keys(PROYECTOS);
  const idxActual   = ids.indexOf(idActual);
  const idSiguiente = ids[(idxActual + 1) % ids.length];
  const siguiente   = PROYECTOS[idSiguiente];

  const nextCat    = document.getElementById('proy-next-cat');
  const nextTitulo = document.getElementById('proy-next-titulo');
  const nextLink   = document.getElementById('proy-next-link');

  if (nextCat)    nextCat.textContent    = siguiente.categoria;
  if (nextTitulo) nextTitulo.textContent = siguiente.titulo;
  if (nextLink) {
    nextLink.href = 'proyecto.html?id=' + idSiguiente;
    // No necesitamos click handler, el href hace todo
  }

})();
