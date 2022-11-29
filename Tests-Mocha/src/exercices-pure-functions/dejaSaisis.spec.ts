import { expect } from "chai";
import { dejaSaisis } from "./dejaSaisis";

describe('dejaSaisis function', () => {
  it('should return undefined when param is empty', () => {
    expect(dejaSaisis([])).to.be.undefined;
  })

  it('should return undefined when param is empty', () => {
    expect(dejaSaisis([3, 4, 5])).to.equal('Vous avez déjà saisi : 3 | 4 | 5')
  })
});