const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();


const urlRoutes = require('./routes/urls');
const categoriesRoutes = require('./routes/categoriesRoutes');

const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });


app.get('/', function(req, res, next) {
  // Handle the get for this route
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

app.use('/api/urls', urlRoutes);
app.use('/api/categories', categoriesRoutes);

/* handling 404 */
app.get('*', function(req, res) {
    res.status(404).send({message: 'Where in the web...404'});
});