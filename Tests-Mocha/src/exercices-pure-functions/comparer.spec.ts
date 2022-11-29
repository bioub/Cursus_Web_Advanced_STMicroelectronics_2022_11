import { expect } from "chai";
import { comparer } from "./comparer";

describe('comparer function', () => {
  it('should return trop petit', () => {
    expect(comparer(3, 4)).to.equals('Trop petit');
  });

  it('should return trop grand', () => {
    expect(comparer(4, 3)).to.equals('Trop grand');
  });

  it('should return gagné', () => {
    expect(comparer(3, 3)).to.equals('Gagné');
  });
});