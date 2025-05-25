document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.section-btn');
  const sections = document.querySelectorAll('main section');
  const introSection = document.getElementById('intro');

  function showSection(targetId) {
    sections.forEach(section => {
      section.classList.add('hidden');
    });

    const target = document.getElementById(targetId);
    if (target) {
      target.classList.remove('hidden');
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      showSection(targetId);
    });
  });

  // Show only intro at first
  sections.forEach(section => {
    if (section.id !== 'intro') {
      section.classList.add('hidden');
    }
  });
});

 
