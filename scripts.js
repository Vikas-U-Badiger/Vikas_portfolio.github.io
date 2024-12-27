document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('mouseenter', () => {
        block.style.transform = 'scale(1.05)';
    });

    block.addEventListener('mouseleave', () => {
        block.style.transform = 'scale(1)';
    });
});

document.querySelector('.contact-form button').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});
