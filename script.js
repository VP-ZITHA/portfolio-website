document.addEventListener('DOMContentLoaded', () => {

  function restartAnimation(el) {
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = '';
  }

  // SECTION NAVIGATION
  const buttons = document.querySelectorAll('.section-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      const section = document.getElementById(target);

      // Hide all sections
      document.querySelectorAll('section, #intro-background').forEach(s => {
        s.classList.add('hidden'); // Replace display:none with class
      });

      // Remove active class from all buttons and set active on clicked
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Show selected section
      if (section) {
        section.classList.remove('hidden');
        section.scrollIntoView({ behavior: 'smooth' });

        if (target === 'about') {
          const typewriterElems = section.querySelectorAll('.typewriter-section');
          typewriterElems.forEach(restartAnimation);

          const para = section.querySelector('.fade-in-paragraph');
          if (para) restartAnimation(para);
        }

        else if (target === 'contact') {
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

  // BUBBLES BACKGROUND
  const bubbleContainer = document.getElementById('bubbles-container');

  function createBubble() {
    if (bubbleContainer.childElementCount > 100) return;

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    bubble.style.left = `${Math.random() * 100}%`;
    const size = Math.random() * 40 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.animationDuration = `${6 + Math.random() * 4}s`;

    bubbleContainer.appendChild(bubble);

    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  }

  setInterval(createBubble, 300);
});
