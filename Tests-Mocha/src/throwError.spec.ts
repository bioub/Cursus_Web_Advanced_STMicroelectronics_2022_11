import { expect } from 'chai';
import { throwError } from './throwError';

describe('throwError function', () => {
  it("shouln't throw error", () => {
    throwError();
  });
  it("shouln't throw error (alt)", () => {
    expect(() => throwError()).not.to.throw();
  });
  it('should throw error', () => {
    expect(() => throwError(true)).to.throw();
  });
});
