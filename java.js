

// get the navbar and the navbar offset Top 
const navbar = document.querySelector(".navbar");
const sticky = navbar.offsetTop;
window.addEventListener("scroll",function() {
    if (window.scrollY >= sticky ) { // 135 added to adjust time when navbar get "sticky"
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
});


// function to open the connection window 

const loginbutton = document.getElementById("loginbutton");
const connectwindow = document.querySelector(".Connection_Window");

//function to open the Game Window

const gamewindow = document.querySelector(".game_window");
const GameButton = document.getElementById("gamebutton");


// show window when click on login button event is trigger
loginbutton.addEventListener("click",function () {
    connectwindow.classList.add("show-connectwindow");
})
//show window when click on game button event is trigger
GameButton.addEventListener("click",function () {
  gamewindow.classList.add("show-gamewindow");
})

// Function to close the connection window

function closeConnectionWindow() {
    connectwindow.classList.remove("show-connectwindow"); // visibility class removed from the connectionwindow 
  }

// close the connection window when click outside of it 
document.addEventListener("click",function(event) {
    if (!connectwindow.classList.contains("show-connectwindow")) return; // Skip if window is already hidden
    if (event.target === loginbutton || connectwindow.contains(event.target)) return;  // Ignore clicks on login button and inside the window
    closeConnectionWindow();
})




const gamewindowclose = document.getElementById("game_window-exit");

gamewindowclose.addEventListener("click",function () {
  gamewindow.classList.remove("show-gamewindow");
})