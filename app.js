const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize = require('./util/database');

const Items = require('./models/items');

var cors = require('cors');

const app = express();

const itemRoutes = require('./routes/items');

app.use(cors());

app.use(bodyParser.json({ extended: false}));

app.use('/item',itemRoutes);

app.use(errorController.get404);

sequelize.sync()
  .then(res =>{
   app.listen(3000);
})
 .catch( err => console.log(err));




