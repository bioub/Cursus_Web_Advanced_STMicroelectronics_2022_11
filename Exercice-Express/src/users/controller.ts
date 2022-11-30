import { NextFunction, Request, Response } from "express";
import { v4 } from "uuid";
import User, { tokens } from "./model";

export async function userRegisterCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userCreated = await User.create(req.body);

    userCreated.password = "";

    res.statusCode = 201;
    res.json(userCreated);
  } catch (err) {
    next(err);
  }
}

export async function userLoginCtrl(
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  // {username: 'toto', password: '123'}
  const user = await User.findOne(
    { username: req.body.username, password: req.body.password },
    "username"
  );

  if (!user) {
    res.statusCode = 401;
    return res.json({ msg: "Bad credentials" });
  }

  const token = v4();
  tokens.push(token);
  res.json({ msg: "Logged in", token });
}
