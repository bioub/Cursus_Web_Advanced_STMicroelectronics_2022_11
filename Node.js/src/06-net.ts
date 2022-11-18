import net from 'node:net';

const server = net.createServer((socket) => {
  socket.pipe(process.stdout);
});

// server.on('connection', (socket) => {
// });

server.on('error', (err) => {

});

// server.on('listening', () => {
//   console.log('Server started on port 3000');
// });

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
