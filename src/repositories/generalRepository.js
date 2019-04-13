
class Repository {
  
  constructor (model) {
    this.model = model
  }

  findAll(){ return this.model.find({}) };

  add(obj) { return this.model.create(obj) };

  findById(queryObj) { return this.model.findOne(queryObj) };
  
  update(queryObj, obj) { return this.model.update(queryObj, obj, {new: true}) };

  delete(queryObj) { return this.model.deleteOne(queryObj) };
}

module.exports = Repository;
