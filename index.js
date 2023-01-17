const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/productos', (req, res) => {
  res.json({
    producto1: 'Ordenador',
    price: 1233,
  });
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta')
});



app.listen(PORT, () => {
  console.log('The server is runing in express ' + PORT)
});
