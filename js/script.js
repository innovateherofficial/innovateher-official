// ==========================================================================
// InnovateHER — shared behavior
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initResourceTabs();
  initEventFilters();
  initGetInvolvedTabs();
  initNewsletterForm();
  initContactForms();
});

/* ---------- Mobile nav ---------- */
function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

/* ---------- Resources: Elementary / Intermediate / High School tabs ---------- */
function initResourceTabs() {
  const tabButtons = document.querySelectorAll('[data-resource-tab]');
  const panels = document.querySelectorAll('[data-resource-panel]');
  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-resource-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

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
