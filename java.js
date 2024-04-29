

// get the navbar
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll",function() {
    if (this.document.documentElement.scrollTop > 1) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
});
