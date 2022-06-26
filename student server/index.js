const express = require('express');
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');
const cookisParser = require('cookie-parser');
//const fileUpload = require('express-fileupload');
const flash = require('connect-flash');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express();
const port = process.env.PORT || 7000;

require('dotenv').config();

app.use(cookisParser('StudentDashboard'));
app.use(session({
    secret: 'StudentDashboard',
    saveUninitialized: true,
    resave: true,
}))
app.use(flash());
//app.use(fileUpload);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayout);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/Routes');
app.use('/', routes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));