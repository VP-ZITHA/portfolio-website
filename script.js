const buttons = document.querySelectorAll('.section-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const section = document.getElementById(target);

        // Hide all sections
        document.querySelectorAll('section, #intro-background').forEach(s => {
            s.classList.add('hidden');
        });

        // Show selected section
        section.classList.remove('hidden');

        // Reset the animation if the section is About
        if (target === 'about') {
            const typewriter = section.querySelector('.typewriter-text');
            if (typewriter) {
                typewriter.style.animation = 'none';
                typewriter.offsetHeight; // Trigger reflow
                typewriter.style.animation = '';
            }
        }

        section.scrollIntoView({ behavior: 'smooth' });
    });
});
