import chai from 'chai';
import chaiHttp from 'chai-http';

import {
  generateToken,
  hashPassword,
  comparePassword,
} from '../../utils/helpers';

chai.use(chaiHttp);
const { expect } = chai;

let hashedPassword;

describe('HELPERS MODULE', () => {
  context('Generate token', () => {
    it('should generate a token', async () => {
      const result = await generateToken({ id: 22 });
      expect(result).to.be.a('String');
    });
  });

  context('Password Hashing', () => {
    it('should hash password successfully', async () => {
      try {
        hashedPassword = await hashPassword('password');
        expect(hashedPassword).to.be.an('string');
        expect(hashedPassword.length).to.be.gt(30);
      } catch (error) {
        throw error;
      }
    });
  });

  context('Password Comparison', () => {
    it('should compare password successfully', async () => {
      try {
        const isMatch = await comparePassword(hashedPassword, 'password');
        expect(isMatch).to.eql(true);
      } catch (error) {
        throw error;
      }
    });

    it('should compare password unsuccessfully', async () => {
      try {
        const isMatch = await comparePassword(hashedPassword, 'assword');
        expect(isMatch).to.eql(false);
      } catch (error) {
        throw error;
      }
    });
  });
});
