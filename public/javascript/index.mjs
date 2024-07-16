
/**
 * Nav bar functionality
 */

// When the user scrolls the page, execute myFunction
window.onscroll = function() {applySticky()};

// Get the offset position of the navbar
var navbar = document.getElementById("navbar");
console.log(navbar);
var sticky = navbar?.offsetTop;

function applySticky() {

    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
        console.log(sticky);
    } else {
        navbar.classList.remove("sticky");
    }
  
}