import { expect } from 'chai';
import { racineCarre } from './racineCarre';

describe('racineCarre function', () => {
  it('should return sqrt value', () => {
    expect(racineCarre(4)).to.equals(2);
  });

  it('should throw an Error if param is negative', () => {
    expect(() => racineCarre(-1)).to.throw();
  });
});
