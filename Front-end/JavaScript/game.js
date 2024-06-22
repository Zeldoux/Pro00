let players = {
    x: 50,
    y: 50,
    img: null // Initialize img property as null initially
};

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


let socket;

// WebSocket connection function
function connectToServer() {
    socket = io('http://localhost:3000'); // Connect to the server using Socket.io

    socket.on('connect', () => {
        console.log('Connected to server');
        socket.emit('message', 'Hello Server!'); // Example of sending a message
        showUsernameInput()
    });

    socket.on('message', (message) => {
        console.log('Message from server: ', message);
    });
    // Handle player position updates from the server
    // Handle player position updates from the server
    socket.on('playerUpdate', (updatedPlayers) => {
        console.log('Updated player positions:', updatedPlayers);

        // Update local players object with received positions
        Object.keys(updatedPlayers).forEach(playerId => {
            const playerData = updatedPlayers[playerId];

            // If player does not exist locally, create a new Sprite for them
            if (!players[playerId]) {
                players[playerId] = new Sprite("../img/Player.png", playerData.x, playerData.y);
            } else {
                // Update existing player's position
                players[playerId].x = playerData.x;
                players[playerId].y = playerData.y;
                players[playerId].username = playerData.username
            }
        });
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });

    socket.on('error', (error) => {
        console.error('Socket.io error: ', error);
    });
}

let pressedKeys = {};// Declare an object to store pressed keys

document.addEventListener('keydown', (e) => {
    pressedKeys[e.key] = true; // Set key as pressed when pressed down
});

document.addEventListener('keyup', (e) => {
    delete pressedKeys[e.key]; // Remove key from pressed state when released
});

console.log("hello world");
let button = {
    x: 350,
    y: 275,
    width: 100,
    height: 50,
    text: "Connect"
};

// load function call // 
function load() {
    players.x = 50;
    players.y = 50;
    players.img = new Sprite("../img/Player.png",players.x,players.y);
}

// update function call //
function update() {
    let oldx = players.x
    let oldy = players.y
     // Update your game logic here (e.g., enemy AI)

    // Handle player movement based on user input (e.g., arrow keys)
    
    if (socket) {
        if (pressedKeys['z']) {
            players.y -= 5; // Move up
        } else if (pressedKeys['s']) {
            players.y += 5; // Move down
        }

        if (pressedKeys['q']) {
            players.x -= 5; // Move left
        } else if (pressedKeys['d']) {
            players.x += 5; // Move right
        }
        if (oldx !== players.x || oldy !== players.y ){
            socket.emit('move', {x: players.x,y: players.y});
        }
    }

 
    
    

}
// draw function call //
function draw(pCtx) { // pCtx = parameter context

    //players.draw(pCtx);

    Object.keys(players).forEach(playerId => {
        const player = players[playerId];
        
        // Draw a black square representing each player
        pCtx.fillStyle = "#000000"; // Black color
        pCtx.fillRect(player.x, player.y, 50, 50); // Adjust size as needed
        
        // Optionally, you can draw text or other indicators on top of the square
        pCtx.fillStyle = "#FFFFFF"; // White color
        pCtx.font = "12px Arial";
        pCtx.fillText(playerId, player.x, player.y - 5); // Display playerId above the square
        pCtx.fillText(player.username, player.x, player.y - 20); // Display playerId above the square
    });
    if (!socket) {
        drawButton(pCtx, button);
    }

}

function drawButton(pCtx, btn) {
    pCtx.fillStyle = "#000";
    pCtx.fillRect(btn.x, btn.y, btn.width, btn.height);
    pCtx.fillStyle = "#FFF";
    pCtx.font = "20px Arial";
    pCtx.fillText(btn.text, btn.x + 10, btn.y + 30);
}


function showUsernameInput() {
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Enter your username';
    usernameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const username = usernameInput.value.trim();
            if (username !== '') {
                socket.emit('setUsername', username); // Send the username to the server
                document.body.removeChild(usernameInput); // Remove input box after sending username
            }
        }
    });
    document.body.appendChild(usernameInput);
    usernameInput.focus(); // Focus on the input field when displayed
}