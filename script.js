const buttons = document.querySelectorAll('.section-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const section = document.getElementById(target);

        // Hide all sections and intro background
        const allSections = document.querySelectorAll('section, #intro-background');
        allSections.forEach(s => s.classList.add('hidden'));

        // Show the selected section
        section.classList.remove('hidden');

        // Remove previous typewriter effects everywhere
        document.querySelectorAll('.typewriter-section').forEach(el => {
            el.classList.remove('typewriter-section');
            el.style.animation = '';
        });

        // Apply typewriter only for About section
        if (target === 'about') {
            const content = section.querySelectorAll('*');
            content.forEach(element => {
                element.classList.add('typewriter-section');
                // Restart animation
                element.style.animation = 'none';
                element.offsetHeight;  // trigger reflow
                element.style.animation = '';
            });
        }

        // Smooth scroll to section
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

