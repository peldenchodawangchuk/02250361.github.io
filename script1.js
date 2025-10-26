    // small JS: update year, simple keyboard-friendly skip-to-top
    document.getElementById('year').textContent = new Date().getFullYear();

    // progressive enhancement: enable keyboard-friendly focus for brand link
    document.querySelectorAll('a,button,input,textarea').forEach(el => {
      el.addEventListener('keydown', e => {
        if(e.key === 'Enter' && el.tagName === 'A') el.click();
      });
    });