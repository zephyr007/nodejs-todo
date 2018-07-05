let bodyParser = require('body-parser');
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test1234:test1234@ds121861.mlab.com:21861/todo-app-db');  //todo - there is a way to hide this from git, think by putting in a different file and requiring that file, but adding that file to the gitignore?
//create a schema - like a blueprint of what the db should expect to receive, it validates what can and can't be added
let todoSchema = new mongoose.Schema({
    item: String
});
let Todo = mongoose.model('Todo', todoSchema);
let urlencodedParser = bodyParser.urlencoded({extended: false});     // gives access to the body of a post request via the req.body param
module.exports = function(app) {    // this is a function that takes app as an arg. this function is called from app.js and passes app into the function here so it can use it as app.get, app.post etc.
    app.get('/', function(req, res) {
        // get data from mongo and pass it to the view
        Todo.find({}, function(err, data) {
            if (err) throw err;

            res.render('todo', {todos: data})
        })

    });


    app.post('/', urlencodedParser, function(req, res) {
        Todo(req.body).save(function(err, data) {

            if (err) throw err;

            res.json(data);

        })


    });




    app.delete('/:item', function(req, res) {

        //delete the requested item from mongodb

        Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove(function(err, data) {

            if (err) throw err;

            res.json(data);

        })


    });



};