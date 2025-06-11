const gridContainer=document.querySelector(".grid-container")
const createGridButton = document.getElementById('create-grid');

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
   const widthPercentage = (1 / size) * 100;
  for (let i = 0; i < size; i++) {
    const col = document.createElement("div");
    col.className = "Column";
    for (let j = 0; j < size; j++) {
        const cel = document.createElement("div");
        cel.classList.add("cell");
        // cel.style.width = `${widthPercentage}%`;
        col.appendChild(cel);
    }
    gridContainer.appendChild(col);
}

// Add hover effect to all cells
// const cells = document.querySelectorAll(".cell");
// cells.forEach(cell => {
//     cell.addEventListener('mouseover', function() {
//         cell.style.backgroundColor = getRandomRGB();
//     });

//     cell.addEventListener('mouseout', function() {
//         cell.style.backgroundColor = 'lightblue';
//     });
// });
// }



}
// event delegation
gridContainer.addEventListener('mouseover',(E)=>
{
    if(E.target.classList.contains('cell'))
    {
        E.target.style.backgroundColor=getRandomRGB();
    }
})
gridContainer.addEventListener('mouseout',(E)=>
{
    if(E.target.classList.contains('cell'))
    {
        setTimeout(() => {
      E.target.style.backgroundColor = 'lightblue';
    }, 200);
    }
})

createGridButton.addEventListener('click', function() {
    // const newSize = parseInt(gridSizeInput.value); // Get grid size from input
    const newSize=prompt("Enter the size of new grid");
    createGrid(newSize);  // Create a new grid based on input size
});
document.addEventListener("DOMContentLoaded", function() {
    createGrid(16); // Default grid size
});





