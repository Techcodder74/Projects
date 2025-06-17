const dialog=document.querySelector("#box");
const showbtn=document.querySelector("#add");
const form=document.getElementById("newBook");
const sho=document.getElementById("showBooks");
const hB=document.getElementById("hide");
const readbtn=document.querySelector("Read");
const table=document.getElementById("table");




class newBook
{   constructor(title,author){
    this.title=title;
    this.author=author;
    this.isread=false;
    this.id=crypto.randomUUID();
}
  read()
  {
    this.isread=!this.isread;
  }
}

let lib=[];
lib.push(new newBook("Harry Potter","jk rowling"));
lib.push(new newBook("2csac","sdv"));
lib.push(new newBook("3csac","sdv"));





function show(){

table.innerHTML="";
for(let i=0; i<lib.length; i++)
{   let stau=lib[i].isread?"Unread":"Read";
    let nr=document.createElement("tr");
    nr.setAttribute("id", lib[i].id);
    nr.innerHTML=`<td>${i+1}</td><td>${lib[i].title}</td><td>${lib[i].author}</td><td><button class="Read" data-id="${lib[i].id}">${stau}</button></td><td><button class="delete" data-id="${lib[i].id}" >Delete</button></td>`;
    table.append(nr);

}}



showbtn.addEventListener("click",(e)=>
{
    dialog.showModal();
})



dialog.addEventListener("close",()=>
{
    if(dialog.returnValue==="submit")
    {
        let bu=form.elements["bookName"].value;
        let au=form.elements["author"].value;
        lib.push(new newBook(bu,au));
        show();
    }
})



sho.addEventListener('click',function(){
    show();
})

hB.addEventListener('click',function(){
    const table=document.getElementById("table");
table.innerHTML="";
})

table.addEventListener("click",(e)=>{
    if(e.target.classList.contains("Read"))
    {
        let id=e.target.dataset.id;
        book=lib.find(b=>b.id===id);
        book.read();
        show();
    }
    else if(e.target.classList.contains("delete"))
    {
        let id=e.target.dataset.id;
        lib=lib.filter(b=>b.id!==id);
     
        show();

    }
})
show();