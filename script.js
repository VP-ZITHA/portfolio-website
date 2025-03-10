// Select all section buttons
const buttons = document.querySelectorAll('.section-btn');

// Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target'); // Get the target section ID
        const section = document.getElementById(target);  // Find the section by its ID

        // Hide the intro background and all other sections by adding the 'hidden' class
        const allSections = document.querySelectorAll('section, #intro-background');
        
        // Hide all sections and intro background
        allSections.forEach(s => {
            s.classList.add('hidden');
        });

        // Remove 'hidden' class from the selected section to display it
        section.classList.remove('hidden');

        // Scroll to the selected section
        section.scrollIntoView({ behavior: 'smooth' });

        // Trigger the typewriter effect by resetting the animation
        const heading = section.querySelector('.typewriter');
        heading.style.animation = 'none';  // Reset animation
        heading.offsetHeight;  // Trigger reflow to restart animation
        heading.style.animation = '';  // Reapply animation
    });
});
