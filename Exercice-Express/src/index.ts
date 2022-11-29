import express, { NextFunction, Request, Response } from "express";
import morgan from 'morgan';
import mongoose from 'mongoose';
import todosRouter from "./todos/router";
import usersRouter from "./users/router";

const app = express();

app.use(morgan('dev'));
// app.use((req, res, next) => {
//   console.log(req.method + ' ' + req.url);
//   next();
// });

app.use("/api/todos", todosRouter); // charge toutes les routes de todos
app.use("/api/users", usersRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: 'Not found'
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.statusCode = 500;
  res.json({
    msg: err.message
  });
});

mongoose.connect('mongodb://localhost:27017/test').then(() => {
  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
});
