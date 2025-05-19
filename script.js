const buttons = document.querySelectorAll('.section-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    const section = document.getElementById(target);

    // Hide all sections & intro
    document.querySelectorAll('section, #intro-background').forEach(s => {
      s.style.display = 'none';
    });

    // Show selected section
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });

    if (target === 'about') {
      // Reset and trigger typewriter
      const typewriterElems = section.querySelectorAll('.typewriter-section');
      typewriterElems.forEach(elem => {
        elem.style.animation = 'none';
        elem.offsetHeight; // reflow
        elem.style.animation = ''; // reapplies CSS animation
      });

      // Reset fade-in paragraph opacity (to restart animation)
      const para = section.querySelector('.fade-in-paragraph');
      para.style.animation = 'none';
      para.offsetHeight;
      para.style.animation = '';
    }
    else if (target === 'contact') {
      const form = document.getElementById('contact-form');
      if (form) {
        // Remove old animation class if any
        form.classList.remove('animate');
        // Force reflow
        void form.offsetWidth;
        // Add class to trigger animation
        form.classList.add('animate');
      }
    }
    // JavaScript to create bubbles
const bubbleContainer = document.getElementById('bubbles-container');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // Random horizontal position (0% to 100%)
  bubble.style.left = `${Math.random() * 100}%`;

  // Random size
  const size = Math.random() * 40 + 10; // 10px to 50px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Random animation duration & delay
  bubble.style.animationDuration = `${6 + Math.random() * 6}s`;
  bubble.style.animationDelay = `${Math.random() * 4}s`;

  bubbleContainer.appendChild(bubble);

  // Remove bubble when animation ends
  bubble.addEventListener('animationend', () => {
    bubble.remove();
  });
}

// Create multiple bubbles
setInterval(createBubble, 300);

  });
});

