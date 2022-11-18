import express from 'express';

const app = express();

// middleware (plugin)
// Body-Parser (parse le body en JSON)
app.use(express.json());

app.get('/', (req, res) => {
  // req et res héritent de IncomingMessage et ServerResponse
  res.send('<h2>Home page</h2>'); // send répond en HTML (et appelle end)
});

app.get('/api/json', (req, res) => {
  res.json({ msg: 'Hello' }); // json répond en JSON (et appelle end)
});

// Tester avec GET /api/hello/Romain par exemple
app.get('/api/hello/:name', (req, res) => {
  const name = req.params.name;
  res.json({ msg: 'Hello ' + name });
});

app.post('/api/register', (req, res) => {
  console.log('POST');
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
