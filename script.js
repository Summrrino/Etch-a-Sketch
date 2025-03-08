document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'blue'; // Change to desired color
        });
        container.appendChild(div);
    }
});