const request = require('supertest');
const app = require('../app.js');
const data = require('../db/data/test-data');
const db = require('../db/connection.js');

const seed = require('../db/seeds/seed.js');

beforeAll(() => seed(data));

afterAll(() => db.end());

describe('/api/topics', () => {
  describe('GET', () => {
    test('status -200: responds with obj containint all topics', () => {
      return request(app)
        .get('/api/topics')
        .expect(200)
        .then(response => {
          expect(response.body.topics);
        });
    });
  });
});

module.exports = app;
