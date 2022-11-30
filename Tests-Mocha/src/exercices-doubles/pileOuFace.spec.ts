import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import { pileOuFace } from './pileOuFace';

chai.use(sinonChai);

describe('pileOuFace function', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should return pile', () => {
    sinon.replace(Math, 'random', () => 0.75);
    expect(pileOuFace()).to.equals('pile');
  });
  it('should return face', () => {
    sinon.replace(Math, 'random', () => 0.25);
    expect(pileOuFace()).to.equals('face');
  });
});