const board=document.getElementById("game");
const head=document.getElementById("heading");
const res=document.getElementById("res");
function gameboard(){
    let arr=["","","","","","","","",""];
    let canPlay=true;
    let turn=1;
    let marker=['X','O'];
    let winningStates=[[0,4,8],[0,1 ,2], [3,4,5],[6, 7, 8], [0, 3, 6],[1, 4, 7], [2, 5, 8], [2, 4, 6]];
    let board, top;
    function setBoard(b, g)
    {
            board=b;
            board.addEventListener("click",(e)=>
            {
                if(e.target.classList.contains("cell"))play(e.target.dataset.value)
            })
            top=g;
    }
    function renderTop(){
        let y="";
        if(turn%2==0)y=`Player 2 turn`;
        else y=`Player 1 turn`;
        top.innerHTML=y;
    }
    function checkWin(){
        for(let c of winningStates)
        {
            if(arr[c[0]]!==""&&arr[c[0]]==arr[c[1]]&&arr[c[1]]==arr[c[2]])
            {
                canPlay=false;
                let p;
                if(turn%2==0)p=1;
                else p=2;
                top.innerHTML="";
                top.innerHTML= `Player ${p} won`;
                return true;
            }
        }
        for(let i=0; i<9; i++)
        {
            if(arr[i]==="")return false;
        }
        top.innerHTML="Draw";
        canPlay=false;
        return true;
    }
    function renderboard()
    {   board.innerHTML="";
        for(let i=0; i<9; i++)
        {
            const cell=document.createElement("div");
            cell.classList.add("cell");
            cell.innerHTML=arr[i];
            cell.dataset.value=i;
            board.appendChild(cell);
        }
        if(!checkWin())renderTop();
    }
    function play(x)
    {    if(!canPlay)return;
        if(arr[x]!=="")return;
        let mark=marker[turn%2];
        arr[x]=mark;
        turn++;
        renderboard();

        
    }
    function restart(){
        for(let i=0; i<9; i++)arr[i]="";
        canPlay=true;
        turn=1;
        top.innerHTML="Restarting Game";
        setTimeout(renderboard,1000);
        
    }
    
    return {setBoard, renderboard, restart};
}

const playArea=gameboard();
playArea.setBoard(board,head);
playArea.renderboard();
res.addEventListener("click",(e)=>
{
    playArea.restart();
})
