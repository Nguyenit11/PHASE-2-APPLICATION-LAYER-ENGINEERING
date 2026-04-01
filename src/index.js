const path = require('path');
const express = require('express') // import express
const app = express() //tạo ứng dụng express
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const route = require('./routes/index2'); // import route

const db = require('./config/db');
db.connect(); //connect to database

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const port = 3000 //cổng

app.use(express.static(path.join(__dirname, 'public')))
// app.use(morgan('combined')) //log 

app.engine('hbs', handlebars.engine({
  extname: '.hbs'
})); //Template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);  //route init




// khởi động server
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
