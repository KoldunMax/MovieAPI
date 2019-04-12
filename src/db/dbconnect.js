function dbConnectionHandler() {
    const mongoose = require("mongoose");
    const env_config = require("../config/env");
    const config = require("../config/dbopts");
    
    mongoose.connect(env_config.uri, config.opts);
  
    mongoose.set("debug", true);
  
    this.connection = mongoose.connection;
  
    mongoose.connection.on("connected", function() {
      this.state = "connected";
    });
  
    mongoose.connection.on("error", function(err) {
      this.state = "disconnected";
    });
  
    mongoose.connection.on("disconnected", function() {
      this.state = "disconnected";
    });
  
    process.on("SIGINT", function() {
      mongoose.connection.close(function() {
        this.state = "disconnected";
        process.exit(0);
      });
    });
  }
  
  module.exports = new dbConnectionHandler();