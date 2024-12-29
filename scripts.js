document.addEventListener('DOMContentLoaded', () => {
    const hoverInfoBox = document.getElementById('hover-info-box');

    // Add hover effect for each block element
    document.querySelectorAll('.block').forEach(block => {
        block.addEventListener('mouseenter', () => {
            const info = block.getAttribute('data-info');
            hoverInfoBox.textContent = info;
            hoverInfoBox.style.display = 'block';
        });

        block.addEventListener('mousemove', event => {
            hoverInfoBox.style.left = event.pageX + 10 + 'px';
            hoverInfoBox.style.top = event.pageY + 10 + 'px';
        });

        block.addEventListener('mouseleave', () => {
            hoverInfoBox.style.display = 'none';
        });
    });

    // Contact form message
    document.querySelector('.contact-form button').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
    });
});
