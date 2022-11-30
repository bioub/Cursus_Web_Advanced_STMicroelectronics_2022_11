import { authenticate } from "./middleware";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import chai, { expect } from "chai";
import { tokens } from "./users/model";

chai.use(sinonChai);

describe("authenticate middleware", () => {
  it("should respond 401 when no token is present", () => {
    const req = {
      headers: {},
    } as any; // eslint-disable-line

    const res = {
      json: sinon.spy(),
    } as any; // eslint-disable-line

    const next = sinon.spy();

    authenticate(req, res, next);
    expect(res.statusCode).to.equal(401);
    expect(res.json).to.have.been.calledOnceWith({ msg: "Unauthorized" });
  });
  it("should respond 401 when token is not valid", () => {
    const req = {
      headers: {
        authorization: "Bearer 123456",
      },
    } as any; // eslint-disable-line

    const res = {
      json: sinon.spy(),
    } as any; // eslint-disable-line

    const next = sinon.spy();

    authenticate(req, res, next);
    expect(res.statusCode).to.equal(401);
    expect(res.json).to.have.been.calledOnceWith({ msg: "Unauthorized" });
  });
  it("should call next when token is valid", () => {
    const req = {
      headers: {
        authorization: "Bearer 123456",
      },
    } as any; // eslint-disable-line

    const res = {} as any; // eslint-disable-line

    const next = sinon.spy();

    tokens.push("123456");

    authenticate(req, res, next);
    expect(next).to.have.been.calledOnceWith();

    tokens.pop(); // retire la dernière valeur
  });
});
