const display=document.querySelector("#display")
const cell=document.querySelectorAll(".cell")
let ss=""
operands=['+','-','*','/','(',')']
postexp=[];
function dis()
{
    display.innerHTML=ss;
}
//converts infix to postfix
function pri(chh)
{
     if(chh==='+'||chh==='-')return 1;
    else if(chh==='/' || chh==='*')return 2;
   
    return -1;
}
function tokenize(){
    let ans=[];
     temp="";
     for(let i=0;i<ss.length; i++)
     {
         if(ss[i]>='0'&&ss[i]<='9')temp=temp+ss[i];
         else{
            if(temp.length>0)ans.push(temp);
            temp="";
            ans.push(ss[i]);
         }
     }
     if(temp.length>0)ans.push(temp);
      
     ss=ans;

}
function convert()
{
    let j=0;
    ans=[];
    ss=ss+')';
    tokenize();
    let rr=['(']
    for(let i=0; i<ss.length; i++ )
    {
        if(!operands.includes(ss[i]))ans.push(ss[i]);
        else if(ss[i]==='(')rr.push('(');
        else if(ss[i]===')'){
            let top=rr.pop();
            while(top!=='(')
            {
                ans.push(top);
                top=rr.pop();
            }
        }
        else{
            let top=rr.pop();
            while(pri(ss[i])<=pri(top)&&top!=='(')
            {
                ans.push(top);
                top=rr.pop();
            }
            rr.push(top);
            rr.push(ss[i]);


        
        }
    }
    ss=ans.toString();
    postexp=ans;

}
function operate(a, b, c)
{
    if(c==='-')return a-b;
    if(c==='+')return a+b;
    if(c==='*')return a*b;
    if(c==='/')return a/b;


}
function evalv()
{   ss=postexp;
    let stack=[];
    for(let i=0; i<ss.length; i++)
    {
        if(!operands.includes(ss[i]))
        {
            stack.push(parseInt(ss[i]));
        }
        else{
            let b=stack.pop(), a=stack.pop();
            let op=ss[i];
            stack.push(operate(a,b,op));
        }
    }
    ss=stack.pop();

}
cell.forEach((t)=>{t.addEventListener('click',(e)=>{
    const target=e.target;
    let val=target.dataset.value;
    if(val==="AC"){
        ss="";
        dis();
    }
    else if(val==='=')
    {
        convert();
        evalv();
        dis();
    }
    else if(val==='d')
    {
        if(ss.length!==0)
        {
            ss=ss.slice(0,ss.length-1);
        }
        dis();
    }
    else{
        ss=ss+val;
        dis();
    }
})})
