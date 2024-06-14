// get the navbar and the navbar offset Top 
const navbar = document.getElementById("NavBar");
const sticky = navbar.offsetTop;
window.addEventListener("scroll",function() {
    if (window.scrollY >= sticky ) { // 135 added to adjust time when navbar get "sticky"
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
});


//get element to open the Game Window

const gamewindow = document.querySelector(".game_window");
const GameButton = document.getElementById("gamebutton");


//show window when click on game button
GameButton.addEventListener("click",function () {
  gamewindow.classList.add("show-gamewindow");
})

