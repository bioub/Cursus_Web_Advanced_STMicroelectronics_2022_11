import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { getRandomInt } from "./random";

chai.use(sinonChai);

describe('random.ts', () => {
  afterEach(() => {
    // Restore the default sandbox here
    sinon.verify();
    sinon.restore();
  });

  describe('getRandomInt function', () => {
    it('should return random value', () => {
      const originalRandom = Math.random;
      Math.random = () => 0.4;
      expect(getRandomInt(0, 100)).to.equal(40);
      Math.random = originalRandom;
    });
    it('should return random value with sinon fake', () => {
      const fake = sinon.replace(Math, "random", sinon.fake.returns(0.4));
      expect(getRandomInt(0, 100)).to.equal(40);
      expect(fake).to.have.been.calledOnce;
    });
    it('should return random value with sinon mock', () => {
      const mock = sinon.mock(Math);
      mock.expects('random').once().returns(0.4);
      expect(getRandomInt(0, 100)).to.equal(40);
    });
  });
  // describe('getRandomIntInclusive function', () => {
  //   it('should return random value', () => {
  //     expect(getRandomInt(0, 50)).to.equal(20);
  //   });
  // });
})