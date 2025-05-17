let board=["R","O","R","","","","","",""];
let qq=1;
let mark=['X','O']
function play(i)
{  
    
    board[i]=mark[qq%2];
    qq++;
    render();

}
const grid=document.getElementById("rfg");

function render(){
    let i=0;
    grid.innerHTML="";
for(let x=0; x<3; x++)
{  
    const row=document.createElement('div');
    row.className='row';
    for(let y=0; y<3; y++)
    {
        const cell=document.createElement('div');
        cell.className="cell";
        cell.innerHTML=board[i];
        const ind=i;
        cell.addEventListener('click',()=>play(ind));
        row.appendChild(cell);
        i++;
    }
    grid.appendChild(row);
}

}
render();

