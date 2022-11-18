import express from 'express';

const app = express();

app.get('/', (req, res) => {
  // req et res héritent de IncomingMessage et ServerResponse
  res.send('<h2>Home page</h2>'); // send répond en HTML (et appelle end)
});

app.get('/api/json', (req, res) => {
  res.json({ msg: 'Hello' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
