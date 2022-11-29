import { expect } from "chai";
import { totalPairs } from "./totalPairs";

describe('totalPairs function', () => {
  it('should return number of even values', () => {
    expect(totalPairs([1, 2, 3, 4, 5])).to.equal(2);
  })
});