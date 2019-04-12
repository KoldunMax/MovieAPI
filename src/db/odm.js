const session = require("express-session"),
  MongoStore = require("connect-mongo")(session),
  mongooseConnection = require('./dbconnect').connection,
  sessionSecret = require('../config/session').secret;

module.exports = () => {
  return session({
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongooseConnection
    })
  })
}