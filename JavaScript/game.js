// game window buttons action (close/fullscreen)

const gamewindowclose = document.getElementById("game_window-exit");
const gamefullscreen = document.getElementById("game_window-fullscreen")

// close
gamewindowclose.addEventListener("click",function () {
    gamewindow.classList.remove("show-gamewindow");
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
})
// variable to get the original canvas width / height 
let gameCanvas = document.getElementById("canvasgame");
let originalCanvasWidth;
let originalCanvasHeight;
let originalWindowWidth;
let originalWindowHeight;

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
    originalWindowWidth = gamewindow.offsetWidth;
    originalWindowHeight = gamewindow.offsetHeight;

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
            gamewindow.style.width = "";
            gamewindow.style.height = "";
            gamewindow.style.top = "50%";
            gamewindow.style.left = "50%";
            gamewindow.style.transform = "translate(-50%,-50%)";
            gameCanvas.style.width = originalCanvasWidth + "px";
            gameCanvas.style.height = originalCanvasHeight + "px";
            gamewindow.style.width = originalWindowWidth + "px";
            gamewindow.style.height = originalWindowHeight + "px";
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