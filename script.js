document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.section-btn');
  const sections = document.querySelectorAll('section');
  const intro = document.getElementById('intro-background');
  const bubbleContainer = document.getElementById('bubbles-container');

  // --- BUBBLE ANIMATION ---
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

  const bubbleInterval = setInterval(createBubble, 300);

  function stopBubbles() {
    clearInterval(bubbleInterval);
    document.querySelectorAll('.bubble').forEach(bubble => bubble.remove());
  }

  // --- SECTION NAVIGATION ---
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      const section = document.getElementById(target);

      // Hide all sections
      intro.classList.add('hidden');
      sections.forEach(sec => sec.classList.add('hidden'));

      // Stop and remove bubbles
      stopBubbles();

      // Show the selected section
      if (section) {
        section.classList.remove('hidden');
        section.scrollIntoView({ behavior: 'smooth' });
      }

      // Optional animation reset
      if (target === 'about') {
        const typewriterElems = section.querySelectorAll('.typewriter-section');
        typewriterElems.forEach(elem => {
          elem.style.animation = 'none';
          void elem.offsetHeight;
          elem.style.animation = '';
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
    });
  });
});

