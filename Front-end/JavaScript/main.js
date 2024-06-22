

const canvas = document.getElementById("canvasgame");
var ctx = canvas.getContext("2d"); // graphics context  

var interval;

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
load();

// Event listener for canvas click
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x > button.x && x < button.x + button.width && y > button.y && y < button.y + button.height) {
        console.log('Button clicked');
        connectToServer(); // Connect to the server when the button is clicked
    }
});