
const { load, update } = require('./game'); // Import functions from game module
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const TICK_RATE = 1000 / 60; // Update tick rate, adjust as needed
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Allow requests from any origin during development; tighten this in production
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});
let players = {};
let enemies = []; // Example: Array of enemy positions or objects
let map = {}; // Example: Game map or environment data, initially empty

// Game loop function
function run() {
    update(io); // Update game state
    io.emit('gameState', players); // Emit updated game state to all connected clients
}

// Start the game loop
function init() {
    console.log('Initializing game loop...');
    setInterval(run, TICK_RATE); // Start the game loop
    load(); // Load initial game state
}

// Serve socket.io.js file
app.get('/socket.io/socket.io.js', (req, res) => {
    res.sendFile(__dirname + '/node_modules/socket.io/client-dist/socket.io.js');
});

// Serve static files (your game client) from the "public" directory
app.use(express.static('public'));

// Handle socket.io connections
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('message', (message) => {
        console.log('Message received from client:', message);
        // Respond to the client if needed
        socket.emit('message', `Hello Client!` );
    });
    socket.emit('requestUsername');

    // Handle receiving username from client
    socket.on('setUsername', (username) => {
        // Store the username along with socket ID
        players[socket.id] = {
            username: username
        };
        console.log("player username : " ,players[socket.id].username)

        // Broadcast updated player list to all clients
        io.emit('playerUpdate', players);
    });
    
    socket.emit('playerUpdate', players);
    // Handle player movements
    socket.on('move', (data) => {
        console.log("player move recieved :",socket.id , players[socket.id]);
        if (players[socket.id]) {
            
            players[socket.id].x = data.x;
            players[socket.id].y = data.y;
            
        
        }
        // Broadcast the updated player position to all clients
        io.emit('playerUpdate', players);
        console.log("player update : ", players);
    });

    // Handle disconnections
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        delete players[socket.id];
        io.emit('playerUpdate', players);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    init();
});
