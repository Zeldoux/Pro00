

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

// game window buttons action (close/fullscreen)

const gamewindowclose = document.getElementById("game_window-exit");
const gamefullscreen = document.getElementById("game_window-fullscreen")

// close
gamewindowclose.addEventListener("click",function () {
  gamewindow.classList.remove("show-gamewindow");
  document.exitFullscreen();
})
// variable to get the original canvas width / height 
let originalCanvasWidth;
let originalCanvasHeight;
// full screen
gamefullscreen.addEventListener("click",function() {
  if (!document.fullscreenElement){
    if (gamewindow.requestFullscreen){
      gamewindow.requestFullscreen();
    } else if (gamewindow.mozRequestFullScreen) {
      gamewindow.mozRequestFullScreen();
    }
  originalCanvasWidth = gameCanvas.width;
  originalCanvasHeight = gameCanvas.height;
  gamewindow.style.width = "100%";
  gamewindow.style.height = "100%";
  gamewindow.style.top = "0";
  gamewindow.style.left = "0";
  gamewindow.style.transform = "none";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
} else {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  }
  gameWindow.style.width = "";
  gameWindow.style.height = "";
  gameWindow.style.top = "50%";
  gameWindow.style.left = "50%";
  gameWindow.style.transform = "translate(-50%,-50%)";
  gameCanvas.style.width = originalCanvasWidth + "px";
  gameCanvas.style.height = originalCanvasHeight + "px";
}
});