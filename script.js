document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.section-btn');
  const allSections = document.querySelectorAll('section');
  const intro = document.getElementById('intro-background');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      const section = document.getElementById(target);

      // Hide all sections
      intro.classList.add('hidden');
      allSections.forEach(sec => sec.classList.add('hidden'));

      // Show the selected one
      if (section) {
        section.classList.remove('hidden');
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
