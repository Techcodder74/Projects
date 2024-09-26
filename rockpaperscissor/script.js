// function getRandomInt(max){
//     return Math.floor(Math.random()*max);
// }

// function comp()
// {
//     return getRandomInt(3);
// }
// function human()
// {
//     let r=0;
    
// }

// let compscore=0;
// let humanscore=0;
// let hu=1;
// // while(false){
// // // { 
// // //     hu=human();
// //     let ss=comp();
// //     let w;
// //     if(ss==0)w="scissor";
// //     else if(ss==1)w="Rock";
// //     else w="Paper";
// //     if(hu==ss)console.log("Draw\n");
// //     else if((hu==1&&ss==2)||(hu==0&&ss==1)||(hu==2&&ss==0)){
// //         console.log("Comp chose"+w+"You lose\n");
// //         compscore=compscore+1;
// //     }
// //     else{
// //         console.log("Comp chose"+w+"You win\n");
// //         humanscore=humanscore+1;
// //     }

// // }
// console.log("Computer score=", compscore);
// console.log("Your score =", humanscore);
let compscore=0;
let humanscore=0;
let qwe=0;
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function comp()
{
    return getRandomInt(3);
}
function Play(hu){
  
    let ty="";
    let ss=comp();
    let w;
    if(ss==0)w="scissor";
    else if(ss==1)w="Rock";
    else w="Paper";
    if(hu==ss)ty="Draw";
    else if((hu==1&&ss==2)||(hu==0&&ss==1)||(hu==2&&ss==0)){
        ty="Comp chose"+w+"You lose\n";
        compscore=compscore+1;
    }
    else{
        ty="Comp chose"+w+"You win\n";
        humanscore=humanscore+1;
    }
    const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent =ty ;

container.appendChild(content);

}

const rocki = document.querySelector("#rock");


rocki.addEventListener("click", ()=>{
    Play(1);
});
const papi = document.querySelector("#paper");


papi.addEventListener("click", ()=>{
    Play(2);
});
const sci = document.querySelector("#scissor");


sci.addEventListener("click", ()=>{
   Play(0);
});
const sc=document.querySelector("#score");
sc.addEventListener("click", ()=>
{
    const container = document.querySelector("#container");

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "Computer score = "+String(compscore)+" Your Score = "+ String(humanscore) ;
    
    container.appendChild(content);
}
)









