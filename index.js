const express = require('express');
const routerApi = require('./src')

const { logErrors, errorHandler, boomErrorHandler } = require('./src/middlewares/error.handler')

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('The server is runing in express ' + PORT)
});
