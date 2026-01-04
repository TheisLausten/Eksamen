function myAlert() {
    const name = document.querySelector(".navn").value;
    const tlf = document.querySelector(".tlfnr").value;
    const email = document.querySelector(".email").value;
    alert ("Det her dit information \n" + name + "\n" + tlf +"\n" + email ); 
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-menu');
let menuOpen = false;

hamburger.addEventListener('click', mobileMenu)
function mobileMenu() {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}