const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));

require('./app/controllers/index')(app);

app.listen(3000);