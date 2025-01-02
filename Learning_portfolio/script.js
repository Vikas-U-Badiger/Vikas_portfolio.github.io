const navLinks = document.querySelectorAll('.main-nav a');
const contentSections = document.querySelectorAll('.content');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);

        // Remove active class from all content sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Add active class to the target section
        document.getElementById(targetId).classList.add('active');

        // Update active link styling
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');

        // Trigger typewriter effect ONLY if the project section is now active
        if (targetId === 'project') {
            triggerTypewriter();
        }
    });
});

// Typewriter effect
const text = "This project focuses on designing and implementing a Warehouse Management System (WMS). It involves analyzing warehouse operations, identifying key challenges, and developing algorithmic solutions to optimize various processes.";
const typewriterElement = document.getElementById('typewriter');
let i = 0;
let typewriterRunning = false; // Flag to prevent multiple typewriter instances

function typeWriter() {
    if (i < text.length) {
        typewriterElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    } else {
        typewriterRunning = false; // Reset the flag
    }
}

function triggerTypewriter() {
    if (!typewriterRunning) { // Check if it's not already running
        typewriterElement.innerHTML = "";
        i = 0;
        typewriterRunning = true; // Set the flag
        typeWriter();
    }
}


// Set the home page and active link on initial load
document.getElementById('home').classList.add('active');
navLinks[0].classList.add('active');
