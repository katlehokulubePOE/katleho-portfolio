/* Cross-browser portfolio interactions. Supports modern evergreen browsers and
   provides a non-dialog fallback for browsers without HTMLDialogElement. */
(function () {
  'use strict';

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  var menuButton = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    Array.prototype.forEach.call(nav.querySelectorAll('a'), function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* Featured slides */
  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var slideTitle = document.getElementById('slide-title');
  var slideCount = document.getElementById('slide-count');
  var slideNames = ['Broadcast & sports graphics', 'Document & proposal design', 'Social media campaigns'];
  var active = 0;
  var slideTimer = null;
  var slideFrame = document.querySelector('.slide-frame');
  function showSlide(number) {
    if (!slides.length) return;
    active = (number + slides.length) % slides.length;
    slides.forEach(function (slide, index) {
      if (index === active) slide.classList.add('is-active');
      else slide.classList.remove('is-active');
    });
    if (slideTitle) slideTitle.textContent = slideNames[active] || 'Featured portfolio work';
    if (slideCount) slideCount.textContent = '0' + (active + 1) + ' / 0' + slides.length;
  }
  function stopSlides() {
    if (slideTimer !== null) window.clearInterval(slideTimer);
    slideTimer = null;
  }
  function startSlides() {
    stopSlides();
    if (slides.length > 1 && !prefersReducedMotion() && !document.hidden) {
      slideTimer = window.setInterval(function () { showSlide(active + 1); }, 6000);
    }
  }
  var previous = document.getElementById('prev-slide');
  var next = document.getElementById('next-slide');
  if (previous) previous.addEventListener('click', function () { showSlide(active - 1); startSlides(); });
  if (next) next.addEventListener('click', function () { showSlide(active + 1); startSlides(); });
  if (slideFrame) {
    slideFrame.addEventListener('mouseenter', stopSlides);
    slideFrame.addEventListener('mouseleave', startSlides);
    slideFrame.addEventListener('focusin', stopSlides);
    slideFrame.addEventListener('focusout', startSlides);
  }
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stopSlides(); else startSlides();
  });
  startSlides();

  /* Portfolio filters */
  var filters = document.querySelectorAll('.filter-chip');
  var cards = document.querySelectorAll('.project-card');
  Array.prototype.forEach.call(filters, function (button) {
    button.addEventListener('click', function () {
      Array.prototype.forEach.call(filters, function (item) {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      Array.prototype.forEach.call(cards, function (card) {
        card.hidden = button.getAttribute('data-filter') !== 'all' && card.getAttribute('data-category') !== button.getAttribute('data-filter');
      });
    });
  });

  /* Project preview: native dialog where available, accessible overlay otherwise. */
  var dialog = document.getElementById('lightbox');
  var modalImage = document.getElementById('lightbox-image');
  var closeButton = dialog ? dialog.querySelector('.lightbox-close') : null;
  var supportsDialog = !!(dialog && typeof dialog.showModal === 'function' && typeof dialog.close === 'function');
  var previousFocus = null;
  function openPreview(button) {
    if (!dialog || !modalImage) return;
    var title = document.getElementById('lightbox-title');
    if (title) title.textContent = button.getAttribute('data-title') || 'Project preview';
    modalImage.src = button.getAttribute('data-image') || '';
    modalImage.alt = button.getAttribute('data-alt') || '';
    previousFocus = button;
    if (supportsDialog) {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.classList.add('is-fallback-open');
      dialog.setAttribute('open', 'open');
      dialog.setAttribute('role', 'dialog');
      dialog.setAttribute('aria-modal', 'true');
      document.documentElement.classList.add('modal-open');
      if (closeButton) closeButton.focus();
    }
  }
  function closePreview() {
    if (!dialog) return;
    if (supportsDialog && dialog.open) dialog.close();
    else {
      dialog.classList.remove('is-fallback-open');
      dialog.removeAttribute('open');
      dialog.removeAttribute('aria-modal');
      document.documentElement.classList.remove('modal-open');
      if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
    }
  }
  Array.prototype.forEach.call(document.querySelectorAll('.project-open'), function (button) {
    button.addEventListener('click', function () { openPreview(button); });
  });
  if (closeButton) closeButton.addEventListener('click', closePreview);
  if (dialog) {
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) closePreview();
    });
    dialog.addEventListener('close', function () {
      if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
    });
  }
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && dialog && (dialog.open || dialog.classList.contains('is-fallback-open'))) {
      event.preventDefault();
      closePreview();
    }
    if (event.key === 'Tab' && dialog && dialog.classList.contains('is-fallback-open')) {
      var focusable = dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  /* Reveal effects. Content remains visible if IntersectionObserver is unavailable. */
  var revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion()) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    Array.prototype.forEach.call(revealItems, function (item) { observer.observe(item); });
  } else {
    Array.prototype.forEach.call(revealItems, function (item) { item.classList.add('visible'); });
  }
}());
