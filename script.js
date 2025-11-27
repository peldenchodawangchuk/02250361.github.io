    // SET YEAR
    document.getElementById('year').textContent = new Date().getFullYear();

    // MOBILE MENU
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      mainNav.classList.toggle('hidden');
    });

    // CLOSE MENU ON LINK
    document.querySelectorAll('#mainNav a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.add('hidden');
        mobileMenuBtn.classList.remove('active');
      });
    });

    // THEME TOGGLE
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });

    // CONTACT FORM
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.name.value;
      alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
      form.reset();
    });

    // FADE-IN ON SCROLL
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2 });
    fadeEls.forEach(el => observer.observe(el));