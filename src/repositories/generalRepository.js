const mongoose = require('mongoose');

class Repository {
  findAll = () => this.findWhere({});

  add = obj => this.model.create(obj);

  findById = queryObj => this.findOne(queryObj);
  
  update = (queryObj, obj) => this.model.update(queryObj, obj, {new: true});

  delete = queryObj => this.model.deleteOne(queryObj)
}

module.exports = new Repository();
