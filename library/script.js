function newBook(title,author)
{
    this.title=title;
    this.author=author;}
let q=new newBook("Harry Potter","JK");
let lib=[];

lib.push(q);
lib.push(new newBook("ABC", "123"));
function show(){
const table=document.getElementById("table");
table.innerHTML="";
for(let i=0; i<lib.length; i++)
{
    let nr=document.createElement("tr");
    nr.innerHTML="<td>"+lib[i].title+"</td><td>"+lib[i].author+"</td>";
    table.append(nr);

}}
const form=document.getElementById("newBook");
form.addEventListener('submit', function(event){
    event.preventDefault();
    const ff=new FormData(form);
    lib.push(new newBook(ff.get("bookName"),ff.get("author")));
    show();
})