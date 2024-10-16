const request = require('supertest');
const app = require('../app.js');
const data = require('../db/data/test-data');
const db = require('../db/connection.js');

const seed = require('../db/seeds/seed.js');

const endpoints = require('../endpoints.json');

beforeAll(() => seed(data));

afterAll(() => db.end());

describe('/api/topics', () => {
  describe('GET', () => {
    test('status -200: responds with obj containing all topics', () => {
      return request(app)
        .get('/api/topics')
        .expect(200)
        .then(response => {
          expect(response.body.topics.length).toBe(3);
          response.body.topics.forEach(topic => {
            expect(topic).toMatchObject({
              slug: expect.any(String),
              description: expect.any(String)
            });
          });
        });
    });
  });
});

describe('GET /api', () => {
  test('status -200: will act as documentation detailing all of the available API endpoints.', () => {
    return request(app)
      .get('/api')
      .expect(200)
      .then(({ body }) => {
        expect(body.endpoints).toEqual(endpoints);
      });
  });
});

module.exports = app;
