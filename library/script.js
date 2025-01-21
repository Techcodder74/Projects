function newBook(title,author)
{
    this.title=title;
    this.author=author;}

let lib=[];

function show(){
const table=document.getElementById("table");
table.innerHTML="";
for(let i=0; i<lib.length; i++)
{
    let nr=document.createElement("tr");
    nr.innerHTML="<td>"+(i+1)+"</td><td>"+lib[i].title+"</td><td>"+lib[i].author+"</td>";
    table.append(nr);

}}
const form=document.getElementById("newBook");
form.addEventListener('submit', function(event){
    event.preventDefault();
    const ff=new FormData(form);
    lib.push(new newBook(ff.get("bookName"),ff.get("author")));
   form.reset();
})
const sho=document.getElementById("showBooks");
sho.addEventListener('click',function(){
    show();
})
const hB=document.getElementById("hide");
hB.addEventListener('click',function(){
    const table=document.getElementById("table");
table.innerHTML="";
})