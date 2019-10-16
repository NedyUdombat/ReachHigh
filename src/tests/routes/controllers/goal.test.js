import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../server';
import { signupCredentials, loginDetails } from '../../db/mockdata/userdata';
import { generateToken } from '../../../utils/helpers';
chai.use(chaiHttp);
const { expect } = chai;

describe('Goal Selection', () => {
  context('Select a goal', () => {
    it('should select a new goal', async () => {
      const res = await chai
        .request(app)
        .post('/api/v1/goal/1/select')
        .set('x-access-token', await generateToken(signupCredentials));
      expect(res.status).to.equal(201);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('success');
      expect(res.body.message).to.eql('Successfully selected this goal');
    });

    it('should de-select the previous goal', async () => {
      const res = await chai
        .request(app)
        .post('/api/v1/goal/1/select')
        .set('x-access-token', await generateToken(signupCredentials));
      expect(res.status).to.equal(204);
    });

    it('should through an error if goal does not exist', async () => {
      const res = await chai
        .request(app)
        .post('/api/v1/goal/3e/select')
        .set('x-access-token', await generateToken(signupCredentials));
      expect(res.status).to.equal(500);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('error');
      expect(res.body.message).to.eql(
        'Your request could not be processed at this time. Kindly try again later.',
      );
    });

    it('should through an error if user does not exist', async () => {
      const res = await chai
        .request(app)
        .post('/api/v1/goal/3e/select')
        .set('x-access-token', await generateToken(loginDetails));
      expect(res.status).to.equal(500);
      expect(res.body)
        .to.have.property('message')
        .to.be.a('String');
      expect(res.body)
        .to.have.property('status')
        .to.eql('error');
      expect(res.body.message).to.eql(
        'Your request could not be processed at this time. Kindly try again later.',
      );
    });
  });
});
