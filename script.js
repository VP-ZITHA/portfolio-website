// Select all section buttons
const buttons = document.querySelectorAll('.section-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const section = document.getElementById(target);

        // Hide all sections and intro background by adding hidden class and style display none
        const allSections = document.querySelectorAll('section, #intro-background');
        allSections.forEach(s => {
            s.classList.add('hidden');
            s.style.display = 'none';
        });

        // Show the target section
        section.classList.remove('hidden');
        section.style.display = 'block';

        // Apply typewriter effect
        const content = section.querySelectorAll('*');
        content.forEach(element => {
            element.classList.add('typewriter-section');
        });

        // Scroll smoothly
        section.scrollIntoView({ behavior: 'smooth' });

        // Restart animation for typewriter effect
        content.forEach(element => {
            element.style.animation = 'none';
            element.offsetHeight;  // trigger reflow
            element.style.animation = '';
        });
    });
});
