// Import the 'ws' library to create a WebSocket server
const ws = require("ws");

// Create a WebSocket server instance listening on port 3000
const server = new ws.Server({ port: "3000" });

// Event listener for when a new WebSocket connection is established
server.on("connection", (socket) => {
  // Event listener for when a message is received from a client
  socket.on("message", (message) => {
    // Convert the received message to a Buffer
    const buffer = Buffer.from(message);

    // Log the message as a string to the console
    console.log(buffer.toString());

    // Send the received message back to the client
    socket.send(`${message}`);
  });
});
