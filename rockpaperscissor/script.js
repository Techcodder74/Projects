function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
function comp()
{
    return getRandomInt(2);
}
function human()
{
    let r=prompt("Enter \n 0 scissor\n 1 rock\n 2 paper\n 3 to exit");
    return parseInt(r);
}

let compscore=0;
let humanscore=0;
let hu=1;
while(hu!=3)
{ 
    hu=human();
    let ss=comp();
    let w;
    if(ss==0)w="scissor";
    else if(ss==1)w="Rock";
    else w="Paper";
    if(hu==ss)console.log("Draw\n");
    else if((hu==1&&ss==2)||(hu==0&&ss==1)||(hu==2&&ss==0)){
        console.log("Comp chose"+w+"You lose\n");
        compscore=compscore+1;
    }
    else{
        console.log("Comp chose"+w+"You win\n");
        humanscore=humanscore+1;
    }

}
console.log("Computer score=", compscore);
console.log("Your score =", humanscore);


