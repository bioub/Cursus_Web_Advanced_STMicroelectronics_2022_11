import { Router, json } from "express";
import { userLoginCtrl, userRegisterCtrl } from "./controller";

const usersRouter = Router();

usersRouter.post('/register', json(), userRegisterCtrl);
usersRouter.post('/login', json(), userLoginCtrl);

export default usersRouter;
