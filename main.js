let canvas = document.getElementById("canvasgame");
let ctx = canvas.getContext("2d"); // graphics context  

let interval;



function run() {
    update();
    ctx.clearRect(0,0,canvas.width , canvas.height);
    draw(ctx);

}

function init() {
    console.log("init");
    interval = setInterval(run, 1000/ 60); // 60 *  sec
}

init();