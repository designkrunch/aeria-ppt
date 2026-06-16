/* ============================================================
   AERIA — Presentation Engine
   Navigation · Keyboard · Touch · Fullscreen · Overview · Presenter
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     STATE
     ---------------------------------------------------------- */

  const TOTAL = 18;
  let current = 1;
  let overviewOpen = false;
  let presenterWindow = null;

  /* Touch tracking */
  let touchStartX = 0;
  let touchStartY = 0;
  const SWIPE_THRESHOLD = 50;

  /* ----------------------------------------------------------
     ELEMENT REFS
     ---------------------------------------------------------- */

  const slides = document.querySelectorAll('.slide');
  const progressBar = document.getElementById('progress-bar');
  const slideCounter = document.getElementById('slide-counter');
  const overview = document.getElementById('overview');
  const overviewGrid = document.getElementById('overview-grid');
  const deckScaler = document.getElementById('deck-scaler');
  const deck = document.getElementById('deck');

  /* ----------------------------------------------------------
     SCALE — fit 1920×1080 into viewport
     ---------------------------------------------------------- */

  function scaleToViewport() {
    const vpW = window.innerWidth;
    const vpH = window.innerHeight;
    const scaleX = vpW / 1920;
    const scaleY = vpH / 1080;
    const scale = Math.min(scaleX, scaleY);

    const scaledW = 1920 * scale;
    const scaledH = 1080 * scale;

    const offsetX = (vpW - scaledW) / 2;
    const offsetY = (vpH - scaledH) / 2;

    if (deckScaler) {
      deckScaler.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
      deckScaler.style.transformOrigin = 'top left';
      deckScaler.style.width = '1920px';
      deckScaler.style.height = '1080px';
      deckScaler.style.position = 'absolute';
      deckScaler.style.top = '0';
      deckScaler.style.left = '0';
    }
  }

  window.addEventListener('resize', scaleToViewport);
  scaleToViewport();

  /* ----------------------------------------------------------
     NAVIGATION
     ---------------------------------------------------------- */

  function goTo(n, animate) {
    n = Math.max(1, Math.min(TOTAL, n));
    if (n === current && animate !== false) return;

    const prev = current;
    current = n;

    slides.forEach((slide, i) => {
      const num = i + 1;
      if (num === current) {
        slide.dataset.state = 'current';
      } else if (num < current) {
        slide.dataset.state = animate === false ? 'hidden-left' : 'prev';
      } else {
        slide.dataset.state = animate === false ? 'hidden-right' : 'next';
      }
    });

    /* Settle hidden slides after animation */
    if (animate !== false) {
      setTimeout(() => {
        slides.forEach((slide, i) => {
          const num = i + 1;
          if (num !== current) {
            if (num < current) slide.dataset.state = 'hidden-left';
            else slide.dataset.state = 'hidden-right';
          }
        });
      }, 420);
    }

    updateProgress();
    updateCounter();
    postMessageToPresenter();
    updateOverviewActive();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  /* ----------------------------------------------------------
     PROGRESS + COUNTER
     ---------------------------------------------------------- */

  function updateProgress() {
    if (progressBar) {
      progressBar.style.width = ((current / TOTAL) * 100) + '%';
    }
  }

  function updateCounter() {
    if (slideCounter) {
      slideCounter.textContent = current + ' / ' + TOTAL;
    }
  }

  /* ----------------------------------------------------------
     KEYBOARD
     ---------------------------------------------------------- */

  document.addEventListener('keydown', function (e) {
    /* Skip if typing in an input */
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'Backspace':
        e.preventDefault();
        prev();
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      case 'o':
      case 'O':
        toggleOverview();
        break;
      case 'p':
      case 'P':
        openPresenter();
        break;
      case 'Escape':
        if (overviewOpen) closeOverview();
        else if (document.fullscreenElement) exitFullscreen();
        break;
      default:
        /* Number keys 1–9 → jump to slide */
        if (e.key >= '1' && e.key <= '9' && !e.ctrlKey && !e.metaKey) {
          goTo(parseInt(e.key));
        }
        break;
    }
  });

  /* ----------------------------------------------------------
     CLICK TO ADVANCE
     Left 20% of screen = prev, right 80% = next
     ---------------------------------------------------------- */

  document.addEventListener('click', function (e) {
    if (overviewOpen) return;
    if (e.target.closest('#overview, button, a, [role="button"]')) return;
    const x = e.clientX;
    if (x < window.innerWidth * 0.2) prev();
    else next();
  });

  /* ----------------------------------------------------------
     SCROLL TO ADVANCE
     Debounced so one flick = one slide
     ---------------------------------------------------------- */

  let scrollLocked = false;

  document.addEventListener('wheel', function (e) {
    if (overviewOpen) return;
    if (scrollLocked) return;

    if (e.deltaY > 30) {
      next();
      scrollLocked = true;
      setTimeout(function () { scrollLocked = false; }, 700);
    } else if (e.deltaY < -30) {
      prev();
      scrollLocked = true;
      setTimeout(function () { scrollLocked = false; }, 700);
    }
  }, { passive: true });

  /* ----------------------------------------------------------
     TOUCH / SWIPE
     ---------------------------------------------------------- */

  document.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', function (e) {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;

    /* Ignore vertical-dominant swipes */
    if (Math.abs(dy) > Math.abs(dx)) return;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;

    if (dx < 0) next();
    else prev();
  }, { passive: true });

  /* ----------------------------------------------------------
     FULLSCREEN
     ---------------------------------------------------------- */

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }

  function exitFullscreen() {
    document.exitFullscreen().catch(() => {});
  }

  /* ----------------------------------------------------------
     OVERVIEW MODE
     ---------------------------------------------------------- */

  function buildOverviewGrid() {
    if (!overviewGrid || overviewGrid.children.length > 0) return;

    slides.forEach((slide, i) => {
      const num = i + 1;
      const thumb = document.createElement('div');
      thumb.className = 'overview-thumb';
      thumb.dataset.slide = num;
      if (num === current) thumb.classList.add('active');

      /* Clone the slide into the thumbnail */
      const clone = slide.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.top = '0';
      clone.style.left = '0';
      clone.style.transform = 'none';
      clone.style.width = '1920px';
      clone.style.height = '1080px';
      clone.removeAttribute('data-state');
      clone.style.visibility = 'visible';
      clone.style.pointerEvents = 'none';

      const inner = document.createElement('div');
      inner.style.position = 'relative';
      inner.style.width = '100%';
      inner.style.height = '100%';
      inner.style.overflow = 'hidden';

      const scaleWrap = document.createElement('div');
      scaleWrap.style.position = 'absolute';
      scaleWrap.style.top = '0';
      scaleWrap.style.left = '0';
      scaleWrap.style.width = '1920px';
      scaleWrap.style.height = '1080px';
      scaleWrap.style.transformOrigin = 'top left';

      /* We'll set scale via JS after mount */
      scaleWrap.appendChild(clone);
      inner.appendChild(scaleWrap);
      thumb.appendChild(inner);

      const label = document.createElement('span');
      label.className = 'overview-thumb__label';
      label.textContent = num;
      thumb.appendChild(label);

      thumb.addEventListener('click', function () {
        goTo(num);
        closeOverview();
      });

      overviewGrid.appendChild(thumb);
    });

    /* Scale each thumb clone to fill its container */
    requestAnimationFrame(function () {
      document.querySelectorAll('.overview-thumb').forEach(function (thumb) {
        const w = thumb.offsetWidth;
        const scale = w / 1920;
        const scaleWrap = thumb.querySelector('div > div');
        if (scaleWrap) scaleWrap.style.transform = 'scale(' + scale + ')';
      });
    });
  }

  function toggleOverview() {
    if (overviewOpen) closeOverview();
    else openOverview();
  }

  function openOverview() {
    if (!overview) return;
    buildOverviewGrid();
    overview.classList.add('active');
    overviewOpen = true;
  }

  function closeOverview() {
    if (!overview) return;
    overview.classList.remove('active');
    overviewOpen = false;
  }

  function updateOverviewActive() {
    document.querySelectorAll('.overview-thumb').forEach(function (thumb) {
      thumb.classList.toggle('active', parseInt(thumb.dataset.slide) === current);
    });
  }

  /* Close button */
  const overviewClose = document.getElementById('overview-close');
  if (overviewClose) {
    overviewClose.addEventListener('click', closeOverview);
  }

  /* Nav arrow buttons */
  const navPrev = document.getElementById('nav-prev');
  const navNext = document.getElementById('nav-next');
  if (navPrev) navPrev.addEventListener('click', function(e) { e.stopPropagation(); prev(); });
  if (navNext) navNext.addEventListener('click', function(e) { e.stopPropagation(); next(); });

  /* ----------------------------------------------------------
     PRESENTER MODE
     ---------------------------------------------------------- */

  function openPresenter() {
    if (presenterWindow && !presenterWindow.closed) {
      presenterWindow.focus();
      return;
    }

    presenterWindow = window.open('', 'aeria-presenter',
      'width=1200,height=700,menubar=no,toolbar=no,location=no,status=no');

    if (!presenterWindow) return;

    presenterWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Aeria — Presenter View</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #111; color: #fff; font-family: 'Archivo', sans-serif; height: 100vh; overflow: hidden; }
  .layout { display: grid; grid-template-columns: 60% 40%; height: 100vh; }
  .preview { display: flex; align-items: center; justify-content: center; background: #000; padding: 2rem; }
  .preview p { font-size: 4rem; color: #f5330e; font-weight: 600; }
  .notes-panel { padding: 2rem; border-left: 1px solid #333; overflow-y: auto; display: flex; flex-direction: column; }
  .meta { font-family: monospace; font-size: 0.75rem; color: #666; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; }
  .slide-num { font-size: 2rem; color: #f5330e; margin-bottom: 0.5rem; }
  .notes-text { font-size: 1rem; line-height: 1.7; color: rgba(255,255,255,0.85); white-space: pre-wrap; }
  .next-label { font-family: monospace; font-size: 0.7rem; color: #555; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 2rem; }
</style>
</head>
<body>
<div class="layout">
  <div class="preview"><p id="slide-n">—</p></div>
  <div class="notes-panel">
    <div class="meta">Presenter Notes</div>
    <div class="slide-num" id="p-num">—</div>
    <div class="notes-text" id="p-notes">—</div>
    <div class="next-label">Next →</div>
    <div class="notes-text" id="p-next-notes" style="margin-top:0.5rem;opacity:0.5">—</div>
  </div>
</div>
<script>
window.addEventListener('message', function(e) {
  if (!e.data || e.data.type !== 'aeria-slide') return;
  document.getElementById('slide-n').textContent = e.data.current + ' / ' + e.data.total;
  document.getElementById('p-num').textContent = 'Slide ' + e.data.current;
  document.getElementById('p-notes').textContent = e.data.notes || '—';
  document.getElementById('p-next-notes').textContent = e.data.nextNotes || '—';
});
<\/script>
</body>
</html>`);
    presenterWindow.document.close();

    postMessageToPresenter();
  }

  function postMessageToPresenter() {
    if (!presenterWindow || presenterWindow.closed) return;

    const currentSlide = slides[current - 1];
    const nextSlide = current < TOTAL ? slides[current] : null;

    const notes = currentSlide
      ? (currentSlide.querySelector('.speaker-notes') || {}).textContent || ''
      : '';
    const nextNotes = nextSlide
      ? (nextSlide.querySelector('.speaker-notes') || {}).textContent || ''
      : '';

    presenterWindow.postMessage({
      type: 'aeria-slide',
      current,
      total: TOTAL,
      notes: notes.trim(),
      nextNotes: nextNotes.trim()
    }, '*');
  }

  /* ----------------------------------------------------------
     INIT
     ---------------------------------------------------------- */

  function init() {
    /* Set all slides to initial states */
    slides.forEach((slide, i) => {
      slide.dataset.state = i === 0 ? 'current' : 'hidden-right';
    });

    updateProgress();
    updateCounter();
  }

  init();

})();
