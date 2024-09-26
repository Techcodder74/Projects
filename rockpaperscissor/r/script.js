
// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn = document.querySelector("#btn");
  
  // METHOD 2
  btn.onclick = alertFunction;
  
  // METHOD 3
  btn.addEventListener("click", alertFunction);
  