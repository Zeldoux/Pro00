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
    //set original canvaswidth and height//
  originalCanvasWidth = gameCanvas.width;
  originalCanvasHeight = gameCanvas.height;
  gamewindow.style.width = "100%";
  gamewindow.style.height = "100%";
  gamewindow.style.top = "0";
  gamewindow.style.left = "0";
  gamewindow.style.transform = "none";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
} else { // set rules to reset gamewindow screen if you quit from fullscreen (to reset it to default) with originalcanvas width / height //
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

console.log("hello world");


let img;
let imgall={};
let speed={};
// load function call // 
function load() {
    let px = 0;
    let py = 0;
    for (i= 0 ; i < 10 ; i++) {

        speed[i] = Math.random(10,100);
        imgall[i] = new Sprite("../img/Player.png",px,py);
        py = py + 50;

    }

    img = new Sprite("../img/Player.png");
    

}
// update function call //
function update() {

    for (i = 0 ; i < 10 ; i++) {
        imgall[i].x = imgall[i].x + speed[i] % 10; 

    }
    

}
// draw function call //
function draw(pCtx) { // pCtx = parameter context

    img.draw(pCtx);
    for (i= 0 ; i < 10 ; i ++) {
        imgall[i].draw(pCtx);
    }

}