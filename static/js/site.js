(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }));
  }

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    const status = form.querySelector('[data-form-status]');
    const configured = form.getAttribute('action') && form.getAttribute('action') !== '#';
    if (!configured) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        status.textContent = '表單服務尚未設定。請先在 hugo.yaml 填入 formEndpoint，再進行收件測試。';
        status.classList.add('is-error');
      });
    }
  }
})();
