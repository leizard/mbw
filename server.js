//////// server.js ////////
// the 'main' file,
// consisting the modules declarations, configs
// databases, express settings, routes,
// start the server

//////// modules ////////
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//////// CONFIG ////////
// DATABASE
var db = require('./config/db');
// connect to mongoDB database. Change /config/db.js url to what we need
mongoose.connect(db.url);

// WALLPAPER - sample mongoose model
var Wallpaper = require('./app/models/wallpaper.js');

// PORT for the app
var port = process.env.PORT || 8080;

// get the data by (POST) parameters
app.use(bodyParser.json()); // parse application/json
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
// set static files location. example /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

//////// ROUTES ////////
// set the routes file. config the routes
require('./app/routes')(express, app);

//////// set up the app ////////
app.listen(port);
console.log("Port " + port + " is listening...");
exports = module.exports = app;