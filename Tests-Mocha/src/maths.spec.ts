import { expect } from "chai";
import { square, sum } from "./maths";

describe('maths.ts', () => {

  describe('sum function', () => {

    it('should add positive numbers', () => {
      expect(sum(1, 2)).to.equals(3); // ===
    });

    it('should add negative numbers', () => {
      expect(sum(-1, -2)).to.equals(-3);
    });
    
  });

  describe('square function', () => {

    it('should returns square value', () => {
      expect(square(2)).to.equals(4);
    });
    
  });

});