import { describe } from 'mocha';
import { it } from 'mocha';
import chai, { expect } from 'chai';
import http from 'chai-http';
import app from '../server';
import data from './asset/data';

chai.use(http);
const { request } = chai;
describe('System should have these requirements', () => {
  it('Admin Should not be able to signin if he doesn\'t provide email or password', (done) => {
    request(app)
      .post('/api/auth/signin')
      .send(data.missingSigninField)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.a.property('status', 400);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('Admin should not be able to signin if he provide invalid email or password ', (done) => {
    request(app)
      .post('/api/auth/signin')
      .send(data.invalidUser)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error', 'Invalid email or password');
        done();
      });
  });
  it('Admin should be able to signin if he provide valid email and password', (done) => {
    request(app)
      .post('/api/auth/signin')
      .send(data.validAdmin)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('message', 'Admin is successfully logged in');
        expect(res.body).to.have.a.property('data');
        expect(res.header).to.have.a.property('x-auth');
        done();
      });
  });

  // Add place tests

  it('Admin should not be able add parking if he doesn\'t provide token', (done) => {
    request(app)
      .post('/api/parkings/add')
      .send(data.validParking)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('Admin should not be able to add parking if he provide invalid token', (done) => {
    request(app)
      .post('/api/parkings/add')
      .set(data.invalidToken)
      .send(data.validParking)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.a.property('status', 401);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('Admin should not be able to add parking if important fields are not filled', (done) => {
    request(app)
      .post('/api/parkings/add')
      .set(data.validToken)
      .send(data.invalidParking)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.a.property('status', 400);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('Admin should be able to add parking if he provides valid token and parking information', (done) => {
    request(app)
      .post('/api/parkings/add')
      .set(data.validToken)
      .send(data.validParking)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.a.property('status', 201);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
  // User 

  it('User should not get parking if none match his search', (done) => {
    request(app)
      .post('/api/parkings/search')
      .send({ search: 'makzapx'})
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.a.property('status', 404);
        expect(res.body).to.have.a.property('error');
        done();
      });
  });
  it('User should get parking that match his search ', (done) => {
    request(app)
      .post('/api/parkings/search')
      .send({ search: 'nyarugenge' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.a.property('status', 200);
        expect(res.body).to.have.a.property('data');
        done();
      });
  });
});
