const buttons = document.querySelectorAll('.section-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const section = document.getElementById(target);

        // Hide all sections
        document.querySelectorAll('section, #intro-background').forEach(s => {
            s.classList.add('hidden');
        });

        document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message submitted! (Form handling not implemented)');
});

        // Show selected section
        section.classList.remove('hidden');

        // Handle About section typewriter and fade-in
        if (target === 'about') {
            const typewriter = section.querySelector('.typewriter-text');
            const paragraph = section.querySelector('.fade-in');

            // Reset animations
            typewriter.style.animation = 'none';
            typewriter.offsetHeight; // Trigger reflow
            typewriter.style.animation = '';
            
            // Hide paragraph initially
            paragraph.classList.remove('visible');

            // Wait for typewriter (2s) then fade in paragraph
            setTimeout(() => {
                paragraph.classList.add('visible');
            }, 2000); // Match the typing duration
        }

        section.scrollIntoView({ behavior: 'smooth' });
    });
});
