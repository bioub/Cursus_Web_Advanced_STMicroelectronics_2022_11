import { Request, Response } from "express";
import { ApiError } from "../model";
import TodoService, { Todo, TodoBody } from "./model";

export async function todoListCtrl(req: Request, res: Response<Todo[]>) {
  const todos = await TodoService.find();
  res.json(todos);
}

export async function todoCreateCtrl(req: Request<any, any, TodoBody>, res: Response<Todo>) {
  const newTodo = await TodoService.create(req.body);
  res.statusCode = 201;
  res.json(newTodo);
}

export async function todoShowCtrl(req: Request<{todoId: string}>, res: Response<Todo | ApiError>) {
  const todo = await TodoService.findById(req.params.todoId);

  if (!todo) {
    res.statusCode = 404;
    return res.json({ msg: "Todo not found" });
  }

  res.json(todo);
}

export async function todoDeleteCtrl(req: Request<{todoId: string}>, res: Response<Todo | ApiError>) {
  const todo = await TodoService.findByIdAndDelete(req.params.todoId);

  if (!todo) {
    res.statusCode = 404;
    return res.json({ msg: "Todo not found" });
  }

  res.json(todo);
}

export async function todoUpdateCtrl(req: Request<{todoId: string}, any, TodoBody>, res: Response<Todo | ApiError>) {
  const todo = await TodoService.findByIdAndUpdate(req.params.todoId, req.body);

  if (!todo) {
    res.statusCode = 404;
    return res.json({ msg: "Todo not found" });
  }

  res.json(todo);
}

export async function todoReplaceCtrl(req: Request<{todoId: string}, any, TodoBody>, res: Response<Todo | ApiError>) {
  const todo = await TodoService.findOneAndReplace(
    { _id: req.params.todoId },
    req.body
  );

  if (!todo) {
    res.statusCode = 404;
    return res.json({ msg: "Todo not found" });
  }

  res.json(todo);
}
