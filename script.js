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
            s.style.display = 'none'; // Ensure the intro background and sections are hidden
        });

        // Remove 'display: none' from the selected section to make it visible
        section.style.display = 'block'; // Show the selected section

        // Apply typewriter effect to the entire section's content
        const content = section.querySelectorAll('*'); // Select all elements in the section
        content.forEach(element => {
            element.classList.add('typewriter-section'); // Apply the typewriter effect to each element
        });

        // Scroll to the selected section
        section.scrollIntoView({ behavior: 'smooth' });

        // Trigger the typewriter effect by resetting the animation for each element
        content.forEach(element => {
            element.style.animation = 'none';  // Reset animation
            element.offsetHeight;  // Trigger reflow to restart animation
            element.style.animation = '';  // Reapply animation
        });
    });
});
