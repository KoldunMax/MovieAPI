const request = require('supertest');
const {expect, assert} = require('chai');
const app = require('../server');

let testBody = {
  "title": "Fast and Furious 8",
  "releaseYear": 2017,
  "format": "DVD",
  "stars": ["Nathan Fillion", "Alan Tudyk", "Adam Baldwin"]
}


describe('GET /api/movies', function() {
  it("should return array of objects and status 200", function(done) {  
      this.timeout(30000);
 
      request(app)
          .get("/api/movies")
          .set('Accept', 'application/json')
          .expect(({body}) => {
            expect(body).to.be.a('array');
          })
          .expect(200)
          .end(done)
      })
  });

describe('POST /api/movies', function() {
  it("should add one object to db with particular properties and return status 200", function(done) {  
    this.timeout(30000);
    request(app)
      .post('/api/movies')
      .send(testBody)
      .expect(({body}) => {
        expect(body).to.be.a('object');
        assert.propertyVal(body, 'title', 'Fast and Furious 8');
        assert.property(body, 'releaseYear', 2017);
        assert.property(body, 'format', 'DVD');
        assert.property(body, 'stars', ["Nathan Fillion", "Alan Tudyk", "Adam Baldwin"]);
        testBody = body;
      })
      .expect(200)
      .end(done)
  });
});

describe('GET /api/movies/:id', function() {
  it("should return an object by id", function(done) {  
    this.timeout(30000);
    request(app)
      .get(`/api/movies/${testBody._id}`)
      .expect(({body}) => {
        expect(body).to.be.a('object');
        assert.propertyVal(body, 'title', 'Fast and Furious 8');
        assert.property(body, 'releaseYear', 2017);
        assert.property(body, 'format', 'DVD');
        assert.property(body, 'stars', ["Nathan Fillion", "Alan Tudyk", "Adam Baldwin"]);
      })
      .expect(200)
      .end(done)
  });
});

describe('PUT /api/movies/:id', function() {
  it("should return an object by id", function(done) {  
    this.timeout(30000);
    request(app)
      .put(`/api/movies/${testBody._id}`)
      .send({
        "title": "Fast and Furious 7",
        "releaseYear": 2016
      })
      .expect(({body}) => {
        expect(body).to.be.a('object');
        assert.propertyVal(body, 'n', 1);
        assert.property(body, 'nModified', 1);
        assert.property(body, 'ok', 1);
      })
      .expect(200)
      .end(done)
  });
});

describe('DELETE /api/movies/:id', function() {
  it("should delete an object by id", function(done) {  
    this.timeout(30000);
    request(app)
      .delete(`/api/movies/${testBody._id}`)
      .expect(({body}) => {
        expect(body).to.be.a('object');
        assert.propertyVal(body, 'n', 1);
        assert.property(body, 'ok', 1);
        assert.property(body, 'deletedCount', 1);
      })
      .expect(200)
      .end(done)
  });
});