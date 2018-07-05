/*const express = require('express');
const TodoController = require('./controllers/TodoController');

const app = express();

// Setup view engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

// Fire controllers
TodoController(app);

// Listen to port
app.listen(3000);
console.log('Ok, you are listening to port 3000');*/

let express = require('express');

let todoController = require('./controllers/TodoController.js');
const PORT = process.env.PORT || 5000;


let app = express();




//set up template engine

app.set('view engine', 'ejs');   // set to ejs templates



//static files

app.use(express.static('./public'));     // to get the css file, you would now only need ./assets/styles.css, and not the public also



//fire off controllers

todoController(app);     // this todoController is in is an imported function. we pass in app here so that it is available to the todoController.js file



//listen to port

app.listen(3000);

console.log('listening on port 3000');
//app.listen(PORT, () =>console.log(`Listening on ${ PORT }`) );

