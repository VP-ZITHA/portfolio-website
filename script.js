const buttons = document.querySelectorAll('.section-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    const section = document.getElementById(target);

    // Hide all sections and intro background
    document.querySelectorAll('section, #intro-background').forEach(s => {
      s.style.display = 'none';
    });

    // Show selected section
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });

    // Handle About section: reset & trigger typewriter animation
    if (target === 'about') {
      // Select all elements with typewriter effect inside About
      const typewriterElems = section.querySelectorAll('.typewriter-section');
      typewriterElems.forEach(elem => {
        elem.style.animation = 'none';       // reset animation
        elem.offsetHeight;                    // trigger reflow
        elem.style.animation = '';            // reapply animation (CSS class should define it)
      });
    }
    // Handle Contact section: reset & trigger fadeSlideUp animation on form and children
    else if (target === 'contact') {
      const form = document.getElementById('contact-form');
      if (form) {
        form.style.animation = 'none';
        form.offsetHeight; // trigger reflow
        form.style.animation = 'fadeSlideUp 0.6s ease-out forwards';

        form.querySelectorAll('input, textarea, button').forEach((el, i) => {
          el.style.animation = 'none';
          el.offsetHeight;
          el.style.animation = `fadeSlideUp 0.5s ease-out forwards`;
          el.style.animationDelay = `${0.2 + i * 0.1}s`; // stagger
        });
      }
    }
  });
});

