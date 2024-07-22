const button = document.querySelectorAll('.btn-shop');

button.forEach(btn => {
    let parentElement = btn.parentElement;
    const currentBackgroundSize = window.getComputedStyle(parentElement).backgroundSize;
    btn.addEventListener('mouseenter', () => {
        const [width, height] = currentBackgroundSize.split(' ').map(size => parseFloat(size));
        const newWidth = width * 1.05;
        parentElement.style.backgroundSize = `${newWidth}%`;
    });
    btn.addEventListener('mouseleave', () => {
        parentElement.style.backgroundSize = currentBackgroundSize;
    });
});