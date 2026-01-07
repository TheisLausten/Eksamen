function myAlert() {
    const name = document.querySelector(".navn").value;
    const tlf = document.querySelector(".tlfnr").value;
    const email = document.querySelector(".email").value;
    alert ("Det her er din information \n" + name + "\n" + tlf +"\n" + email ); 
}

function myFunction() {
  var x = document.getElementById("nav-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}