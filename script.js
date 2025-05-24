document.addEventListener('DOMContentLoaded', () => {
  // SECTION NAVIGATION
  const buttons = document.querySelectorAll('.section-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      const section = document.getElementById(target);

      // Hide all sections
      document.querySelectorAll('section, #intro-background').forEach(s => {
        s.style.display = 'none';
      });

      // Show selected section
      if (section) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth' });

        if (target === 'about') {
          const typewriterElems = section.querySelectorAll('.typewriter-section');
          typewriterElems.forEach(elem => {
            elem.style.animation = 'none';
            elem.offsetHeight;
            elem.style.animation = '';
          });

          const para = section.querySelector('.fade-in-paragraph');
          if (para) {
            para.style.animation = 'none';
            para.offsetHeight;
            para.style.animation = '';
          }
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
