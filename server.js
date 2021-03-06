// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up express App
var app = express();
var PORT = process.env.PORT

// Test port
// var PORT = 3000;
//Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//  Add the application routes
require(path.join(__dirname, '/app/routing/apiRoutes'))(app);
require(path.join(__dirname,'/app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
    console.log('friend Finder app is listening on PORT: ' + PORT);
});