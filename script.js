buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const section = document.getElementById(target);

        // Hide all sections
        const allSections = document.querySelectorAll('section, #intro-background');
        allSections.forEach(s => s.classList.add('hidden'));

        // Show selected section
        section.classList.remove('hidden');

        // Reset typewriter if it's About
        const typewriter = section.querySelector('.typewriter-text');
        if (typewriter) {
            typewriter.style.animation = 'none';
            typewriter.offsetHeight; // Trigger reflow
            typewriter.style.animation = '';
        }

        section.scrollIntoView({ behavior: 'smooth' });
    });
});
