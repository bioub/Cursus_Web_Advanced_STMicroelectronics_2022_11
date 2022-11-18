import http from 'node:http';

const server = http.createServer((req, res) => {
  console.log(req.method + ' ' +req.url);

  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write('<h2>Home page</h2>');
    res.end(); // IMPORTANT : il faut appeler end pour envoyer la réponse
  } else if (req.method === 'GET' && req.url === '/api/json') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.write(JSON.stringify({ msg: 'Hello' }));
    res.end(); // IMPORTANT : il faut appeler end pour envoyer la réponse
  } else {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/html');
    res.write('<h2>Not Found</h2>');
    res.end(); // IMPORTANT : il faut appeler end pour envoyer la réponse
  }
});

// server.on('connection', (socket) => {
//   socket.pipe(process.stdout);
// });

server.on('error', (err) => {

});

// server.on('listening', () => {
//   console.log('Server started on port 3000');
// });

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
