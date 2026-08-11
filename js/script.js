/* =========================================================
   InnovateHER — Main JS
   Mobile nav, tab switching, modals, event filters, forms
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var siteHeader = document.querySelector('.site-header');

  if (navToggle && siteHeader) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteHeader.classList.toggle('menu-open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when a nav link is tapped
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteHeader.classList.remove('menu-open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Generic modal handling (About page leadership cards) ---------- */
  var modalTriggers = document.querySelectorAll('[data-modal-target]');
  var modalOverlays = document.querySelectorAll('.modal-overlay');

  modalTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openModalFromTrigger(trigger);
    });
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModalFromTrigger(trigger);
      }
    });
  });

  function openModalFromTrigger(trigger) {
    var targetId = trigger.getAttribute('data-modal-target');
    var modal = document.getElementById(targetId);
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  modalOverlays.forEach(function (overlay) {
    var closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        closeModal(overlay);
      });
    }
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modalOverlays.forEach(function (overlay) {
        if (overlay.classList.contains('open')) {
          closeModal(overlay);
        }
      });
    }
  });

  function closeModal(overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ---------- Get Involved: tab switching ---------- */
  var involveTabs = document.querySelectorAll('.involve-tab');
  var involvePanels = document.querySelectorAll('.involve-panel');

  involveTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var targetPanel = tab.getAttribute('data-tab-target');

      involveTabs.forEach(function (t) { t.classList.remove('active'); });
      involvePanels.forEach(function (p) { p.classList.remove('active'); });

      tab.classList.add('active');
      var panel = document.getElementById(targetPanel);
      if (panel) panel.classList.add('active');
    });
  });

  /* ---------- Resources: grade-level tab switching ---------- */
  var resourceTabs = document.querySelectorAll('.resource-tab');
  var resourcePanels = document.querySelectorAll('.resource-panel');

  resourceTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var targetPanel = tab.getAttribute('data-tab-target');

      resourceTabs.forEach(function (t) { t.classList.remove('active'); });
      resourcePanels.forEach(function (p) { p.classList.remove('active'); });

      tab.classList.add('active');
      var panel = document.getElementById(targetPanel);
      if (panel) panel.classList.add('active');
    });
  });

  /* ---------- Events: category filter ---------- */
  var filterTabs = document.querySelectorAll('.filter-tab');
  var eventCards = document.querySelectorAll('[data-event-category]');

  filterTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var filter = tab.getAttribute('data-filter');

      filterTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      eventCards.forEach(function (card) {
        var category = card.getAttribute('data-event-category');
        var show = filter === 'all' || filter === category;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  /* ---------- Newsletter + contact forms: lightweight success state ----------
     These forms are static-site placeholders. Hook up your form backend of
     choice (e.g. Formspree, Netlify Forms, Google Forms) by giving the
     <form> a real "action" attribute — this handler just gives visual
     feedback so the flow feels complete in the meantime. ---------- */
  var demoForms = document.querySelectorAll('[data-demo-form]');

  demoForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var successEl = form.querySelector('.form-success');
      if (successEl) {
        successEl.classList.add('show');
      }
      form.reset();
    });
  });

});
      panels.forEach(panel => {
        panel.classList.toggle('active', panel.getAttribute('data-resource-panel') === target);
      });
    });
  });
}

/* ---------- Events: category filters ---------- */
function initEventFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const eventCards = document.querySelectorAll('[data-event-category]');
  const emptyState = document.querySelector('.empty-state');
  if (!filterButtons.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      let visibleCount = 0;
      eventCards.forEach(card => {
        const match = filter === 'all' || card.getAttribute('data-event-category') === filter;
        card.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      if (emptyState) {
        emptyState.classList.toggle('show', visibleCount === 0);
      }
    });
  });
}

/* ---------- Get Involved: switch between form panels ---------- */
function initGetInvolvedTabs() {
  const tabButtons = document.querySelectorAll('[data-gi-tab]');
  const panels = document.querySelectorAll('[data-gi-panel]');
  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-gi-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panels.forEach(panel => {
        panel.classList.toggle('active', panel.getAttribute('data-gi-panel') === target);
      });
    });
  });
}

/* ---------- Newsletter form (front-end only) ---------- */
function initNewsletterForm() {
  const form = document.querySelector('[data-newsletter-form]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    const success = form.parentElement.querySelector('.form-success');
    if (!emailInput.value) return;

    if (success) {
      success.style.display = 'block';
      success.textContent = "You're on the list — welcome to the movement!";
    }
    form.reset();
  });
}

/* ---------- Contact / volunteer forms (front-end only) ---------- */
function initContactForms() {
  const forms = document.querySelectorAll('[data-contact-form]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      if (!button) return;
      const original = button.textContent;
      button.textContent = 'Message sent ✓';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = original;
        button.disabled = false;
        form.reset();
      }, 2500);
    });
  });
}
