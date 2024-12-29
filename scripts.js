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

function showPopup(message) {
    alert(message);
}
const hoverInfoBox = document.getElementById('hover-info-box');

document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('mouseenter', event => {
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
