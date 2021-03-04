// Test Suite for REST API
const request = require('supertest');
const sinon = require('sinon');
const app = require('./server').app;
const firebase = require('./helper/firebaseConfig');

jest.setTimeout(20000)
/* Test Controller that worked */
// describe('GET /test', () => {
//   it('responds with json', async (done) => {
//     await request(app)
//       .get('/test')
//       .set('Accept', 'application/json')
//       .expect(200);
//       done();
//   });
// });

/* 
Not sure why but it seems that it hangs and timesout due to the firestore methods
Could be an issue with supertest not authorizing it correctly or the scoping is not allowing it to read the db variable
Will try to solve this again another time with stubbing potentially
I did do testing with Postman on the side
*/
describe('GET /getHackers', () => {
  it('Response with 200 StatusCode', async (done) => {
    await request(app)
      .get('/getHackers')
      .set('Accept', 'application/json')
      .expect(200);
      done();
  });
});
