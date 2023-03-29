const express = require('express');
const produtsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const categories = require('./routes/categories');

const routerApi = (app) => {
  const router = express.Router();
  // de la siguiente forma genero un path global
  app.use('/api/V1', router);
  // demás endpoints...
  router.use('/products', produtsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categories);
}

module.exports = routerApi;
