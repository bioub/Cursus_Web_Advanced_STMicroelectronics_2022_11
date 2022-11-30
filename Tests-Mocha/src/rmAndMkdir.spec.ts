import { expect } from "chai";
import fs from "node:fs/promises";
import sinon from "sinon";
import chai from "chai";
import { rmAndMkdir } from "./rmAndMkdir";
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('rmAndMkdir function', () => {
  // risque de bug si plusieurs test en parallèle
  // it('should remove and mkdir', async () => {
  //   await rmAndMkdir('tmp');
  //   expect('tmp').to.exist()
  //   expect(existsSync('tmp')).to.be.true;
  // });

  afterEach(() => {
    sinon.verify();
  });

  it('should remove and mkdir with sinon', async () => {
    const mock = sinon.mock(fs);
    mock.expects('rm').once().resolves();
    const stub = mock.expects('mkdir').once().resolves();
    await rmAndMkdir('tmp');
    expect(stub).to.have.been.calledWith('tmp');
  });
});