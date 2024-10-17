const request = require('supertest');
const app = require('../app.js');
const data = require('../db/data/test-data');
const db = require('../db/connection.js');

const seed = require('../db/seeds/seed.js');

const endpoints = require('../endpoints.json');
const articles = require('../db/data/test-data/articles.js');

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

describe('GET /api/articles', () => {
  describe('GET', () => {
    test('status -200: responds with obj containing all topics', () => {
      return request(app)
        .get('/api/articles')
        .expect(200)
        .then(response => {
          expect(response.body.articles.length).toBe(13);
          response.body.articles.forEach(article => {
            expect(article).toMatchObject({
              title: expect.any(String),
              topic: expect.any(String),
              author: expect.any(String),
              body: expect.any(String),
              created_at: expect.any(String),
              votes: expect.any(Number),
              article_img_url: expect.any(String)
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

// row 1 make sure that it return its content
// ? 17 doen not exist
// jdsjspspvsofr (not a number //)

describe('GET /api/articles/:article_id', () => {
  test('status -200: returns an article object containing the correct article data', () => {
    return request(app)
      .get('/api/articles/1')
      .expect(200)
      .then(res => {
        expect(res.body.article).toMatchObject({
          article_id: 1,
          title: 'Living in the shadow of a great man',
          topic: 'mitch',
          author: 'butter_bridge',
          body: 'I find this existence challenging',
          votes: 100,
          article_img_url:
            'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700'
        });
      });
  });
});
