document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const resetButton = document.getElementById('reset-button');

    function createGrid(squaresPerSide) {
        container.innerHTML = ''; // Clear existing grid
        const squareSize = 640 / squaresPerSide;
        container.style.gridTemplateColumns = `repeat(${squaresPerSide}, ${squareSize}px)`;
        container.style.gridTemplateRows = `repeat(${squaresPerSide}, ${squareSize}px)`;

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-square');
            div.style.width = `${squareSize}px`;
            div.style.height = `${squareSize}px`;
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'blue'; // Change to desired color
            });
            container.appendChild(div);
        }
    }

    resetButton.addEventListener('click', () => {
        let squaresPerSide = parseInt(prompt('Enter the number of squares per side (max 100):'));
        if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
            alert('Please enter a number between 1 and 100.');
        } else {
            createGrid(squaresPerSide);
        }
    });

    createGrid(16); // Initial grid
});