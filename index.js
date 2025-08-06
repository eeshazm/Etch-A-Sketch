
function createGrid(gridSize){
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < gridSize; j++) {
            let column = document.createElement('div');
            column.className = 'column';
            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = 'black';
            });
            row.appendChild(column);    
        }
        grid.appendChild(row);
    }
}

function loadGrid() {
    createGrid(16); // Default grid size
    const input = document.getElementById('input');
    
    input.addEventListener('click', (e) => {
        if (e.target.id === "btn") {
            let gridSize = document.getElementById("gridSize").value;
            if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
                alert("Please enter a number between 1 and 100.");
                return;
            }
            createGrid(gridSize);
        }
    });
    
}


document.addEventListener("DOMContentLoaded", loadGrid);

