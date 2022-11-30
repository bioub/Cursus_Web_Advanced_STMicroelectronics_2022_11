import sinon from "sinon";
import sinonChai from "sinon-chai";
import chai, { expect } from "chai";
import { userLoginCtrl } from "./controller";
// import mongoose from "mongoose";
import User from "./model";

chai.use(sinonChai);

describe("user controllers", () => {
  // before(() => {
  //   mongoose.connect('mongodb://localhost:27017/test')
  // });

  // after(() => {
  //   mongoose.disconnect()
  // });

  // afterEach(() => {
  //   // pour qu'un test qui dépend de mongo passe
  //   // ici il faudrait importer un jeu de donnée de test dans mongo
  // });

  describe("userLoginCtrl function", () => {
    it("should respond 401 if bad credentials", async () => {
      const req = {
        body: {
          username: "bad-username",
          password: "bad-password",
        },
      } as any; // eslint-disable-line

      const res = {
        json: sinon.spy(),
      } as any; // eslint-disable-line

      const next = sinon.spy();

      const mock = sinon.mock(User);
      mock.expects("findOne").once().resolves(null);

      await userLoginCtrl(req, res, next);
      expect(res.statusCode).to.equal(401);
      expect(res.json).to.have.been.calledOnceWith({ msg: "Bad credentials" });
      sinon.verifyAndRestore();
    });

    it("should respond token if good credentials", async () => {
      const req = {
        body: {
          username: "good-username",
          password: "good-password",
        },
      } as any; // eslint-disable-line

      const res = {
        json: sinon.spy(),
      } as any; // eslint-disable-line

      const next = sinon.spy();

      const mock = sinon.mock(User);
      mock
        .expects("findOne")
        .once()
        .resolves({ _id: "32536476746643564", username: "good-username" });

      await userLoginCtrl(req, res, next);
      expect(res.json.firstCall.args[0].msg).to.equals("Logged in");
      sinon.verifyAndRestore();
    });
  });
});
