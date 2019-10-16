import chai from 'chai';
import chaiHttp from 'chai-http';

import { generateToken } from '../../utils/helpers';

chai.use(chaiHttp);
const { expect } = chai;

describe('HELPERS MODULE', () => {
  context('Generate token', () => {
    it('should generate a token', async () => {
      const result = await generateToken({ id: 22 });
      expect(result).to.be.a('String');
    });
  });
});
