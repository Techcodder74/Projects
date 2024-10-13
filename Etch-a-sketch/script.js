const gridContainer=document.querySelector(".grid-container")
const createGridButton = document.getElementById('create-grid');
// const gridSizeInput = document.getElementById('grid-size');
function getRandomRGB() {
    // Generate random values for red, green, and blue
    const r = Math.floor(Math.random() * 256); // Random number between 0 and 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Return the RGB string
    return `rgb(${r}, ${g}, ${b})`;
}

// Example usage:
console.log(getRandomRGB()); // e.g., "rgb(255, 0, 128)"

function createGrid(size){
  gridContainer.innerHTML="";
  for (let i = 0; i < size; i++) {
    const col = document.createElement("div");
    col.className = "Column";
    for (let j = 0; j < size; j++) {
        const cel = document.createElement("div");
        cel.classList.add("cell");
        col.appendChild(cel);
    }
    gridContainer.appendChild(col);
}

// Add hover effect to all cells
const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        cell.style.backgroundColor = getRandomRGB();
    });

    cell.addEventListener('mouseout', function() {
        cell.style.backgroundColor = 'lightblue';
    });
});
}
// const div=document.createElement("div");
// for(let i=0; i<16; i++)
// {
//     const col=document.createElement("div");
//     col.className="Column";
//     for(let j=0; j<16; j++)
//     {
//         const cel=document.createElement("div");
//         cel.textContent=i+' '+j;
//         cel.classList.add("cell");
       
//         col.appendChild(cel);
       
        
//     }
//     gridContainer.appendChild(col);
    
// }
// const cells=document.querySelectorAll(".cell")
// cells.forEach(cell =>{
//     cell.addEventListener('mouseover',function()
// {
//  cell.style.backgroundColor='coral';
// });
// cell.addEventListener('mouseout',function()
// {
//  cell.style.backgroundColor='lightblue';
// });
// });
createGridButton.addEventListener('click', function() {
    // const newSize = parseInt(gridSizeInput.value); // Get grid size from input
    const newSize=prompt("Enter the size of new grid");
    createGrid(newSize);  // Create a new grid based on input size
});
document.addEventListener("DOMContentLoaded", function() {
    createGrid(16); // Default grid size
});