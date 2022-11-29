import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { range } from './array';

chai.use(sinonChai);

describe('array.ts', () => {
  describe('range function', () => {
    it('should generate positive numbers', () => {
      expect(range(0, 5)).to.deep.equals([0, 1, 2, 3, 4, 5]);
    });
  });

  describe('forEach from Array.prototype', () => {
    it('should call callback', () => {
      const spy = sinon.spy();
      [2, 3, 4].forEach(spy);

      expect(spy).to.have.been.calledWith(2);
      expect(spy).to.have.been.calledWith(3);
      expect(spy).to.have.been.calledWith(4);
    });
  });
});
