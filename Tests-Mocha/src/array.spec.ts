import { expect } from "chai";
import { range } from "./array";

describe('array.ts', () => {

  describe('range function', () => {

    it('should generate positive numbers', () => {
      expect(range(0, 5)).to.deep.equals([0, 1, 2, 3, 4, 5]);
    });
  });

});
