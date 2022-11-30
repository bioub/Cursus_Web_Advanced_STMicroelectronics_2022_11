import { expect } from "chai";
import { convertToNumber } from "./convertToNumber";

describe('convertToNumber function', () => {
  it('should return a number', () => {
    expect(convertToNumber('123')).to.equals(123);
    expect(convertToNumber('123')).to.a('number')
  });
  it('should throw an Error when conversion is not possible', () => {
    expect(() => convertToNumber('abc')).to.throw();
  });
});