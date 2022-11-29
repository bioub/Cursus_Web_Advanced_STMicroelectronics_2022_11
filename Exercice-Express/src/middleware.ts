import { NextFunction, Request, Response } from "express";
import { tokens } from "./users/model";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    res.statusCode = 401;
    return res.json({
      msg: 'Unauthorized',
    });
  }

  const token = req.headers.authorization?.slice(7);

  if (!tokens.includes(token)) {
    res.statusCode = 401;
    return res.json({
      msg: 'Unauthorized',
    });
  }

  next();
}
