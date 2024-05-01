

// get the navbar
const navbar = document.querySelector(".navbar");
const sticky = navbar.offsetTop;
window.addEventListener("scroll",function() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
});
