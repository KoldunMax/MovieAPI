const cors = require("cors"),
  bodyParser = require("body-parser"),
  odm = require('../db/odm')();
  

module.exports = app => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(odm);
};