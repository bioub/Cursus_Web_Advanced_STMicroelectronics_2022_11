import express from "express";
import morgan from 'morgan';
import todosRouter from "./todos/router";

const app = express();

app.use(morgan('dev'));
// app.use((req, res, next) => {
//   console.log(req.method + ' ' + req.url);
//   next();
// });

app.use("/api/todos", todosRouter); // charge toutes les routes de todos

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
