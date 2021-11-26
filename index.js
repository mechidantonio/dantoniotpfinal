require ('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT || 3000

// SETTING
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(__dirname + '/public'));
app.use(require ('./router/router'));
app.use(require ('./router/contacto'));


hbs.registerPartials(__dirname + "/views/partials/")



//server listening
app.listen(port, () => {
  console.log(`Puerto corriendo en http://localhost:${port} `);
});
