// Select all section buttons
const buttons = document.querySelectorAll('.section-btn');

// Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target'); // Get the target section
        const section = document.getElementById(target);  // Find the section by its ID

        // Hide the intro background and any other sections that might be visible
        document.getElementById('intro-background').style.display = 'none'; // Hide the intro background section

        // Hide all sections by adding the 'hidden' class
        const allSections = document.querySelectorAll('section');
        allSections.forEach(section => {
            section.classList.add('hidden'); // Hide all sections
        });

        // Remove 'hidden' class from the clicked section to display it
        section.classList.remove('hidden');

        // Scroll to the section
        section.scrollIntoView({ behavior: 'smooth' });

        // Trigger the typewriter effect by resetting the animation
        const heading = section.querySelector('.typewriter');
        heading.style.animation = 'none';  // Reset animation
        heading.offsetHeight;  // Trigger reflow to restart animation
        heading.style.animation = '';  // Reapply animation
    });
});
