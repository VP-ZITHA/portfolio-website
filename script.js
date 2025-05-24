document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.section-btn');
  const allSections = document.querySelectorAll('section');
  const intro = document.getElementById('intro-background');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      const section = document.getElementById(target);

      // Hide the intro and all other sections
      intro.classList.add('hidden');
      allSections.forEach(sec => sec.classList.add('hidden'));

      // Show the selected section
      if (section) {
        section.classList.remove('hidden');
        section.scrollIntoView({ behavior: 'smooth' });

        // Optional animation resets for "about" or "contact"
        if (target === 'about') {
          const typewriterElems = section.querySelectorAll('.typewriter-section');
          typewriterElems.forEach(el => {
            el.style.animation = 'none';
            void el.offsetHeight;
            el.style.animation = '';
          });

          const para = section.querySelector('.fade-in-paragraph');
          if (para) {
            para.style.animation = 'none';
            void para.offsetHeight;
            para.style.animation = '';
          }
        }

        if (target === 'contact') {
          const form = document.getElementById('contact-form');
          if (form) {
            form.classList.remove('animate');
            void form.offsetWidth;
            form.classList.add('animate');
          }
        }
      }
    });
  });
});
