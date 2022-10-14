require('dotenv').config();
const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./services/auth');
const MongoStore = require('connect-mongo')(session);
const schema = require('./schema/schema');

const app = express();

const MONGO_URI = `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.iar4och.mongodb.net/?retryWrites=true&w=majority`;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;

void mongoose.connect(MONGO_URI, {
  authSource: "admin",
  retryWrites: true,
  dbName: "graphql",
  useCreateIndex: true,
  useNewUrlParser: true
});

const db = mongoose.connection
    .once("open", () => console.log("Connected to MongoCloud instance."))
    .on("error", error => console.log("Error connecting to MongoCloud:", error));

// place an encrypted identifier on the user's cookie
// when a user makes a request, examine the cookie and modify the request object
// to indicate which user made the request
// cookie only contains the id of a session
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'aaabbbccc',
  store: new MongoStore({
    mongooseConnection: db,
    autoReconnect: true
  })
}));

// wire passport into express as middleware
// when a request comes in, passport will intercept the request's session
// and assign the current user to the 'req.user' object
app.use(passport.initialize());
app.use(passport.session());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
