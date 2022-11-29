import { expect } from "chai";
import { hello } from "./hello";

describe('hello function', () => {
  it('should return hello', () => {
    expect(hello('Romain')).to.equal('Hello Romain');
  });
});