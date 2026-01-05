function myAlert() {
    const name = document.querySelector(".navn").value;
    const tlf = document.querySelector(".tlfnr").value;
    const email = document.querySelector(".email").value;
    alert ("Det her er din information \n" + name + "\n" + tlf +"\n" + email ); 
}