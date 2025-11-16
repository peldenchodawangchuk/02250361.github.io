    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use OS preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (currentTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
    themeToggle.addEventListener('click', () => {
      let theme = 'light';
      if (document.documentElement.getAttribute('data-theme') === 'light') {
        theme = 'dark';
      }
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
    
    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img.lazy');
    
    const lazyLoad = () => {
      lazyImages.forEach(img => {
        if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom > 0) {
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
          }
        }
      });
    };
    
    // Initial load
    lazyLoad();
    
    // Load images on scroll
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // In a real implementation, you would send this data to a server
      // For demo purposes, we'll just show an alert
      alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
      
      // Reset form
      contactForm.reset();
    });
    
    // Performance optimization - debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(lazyLoad, 100);
    });