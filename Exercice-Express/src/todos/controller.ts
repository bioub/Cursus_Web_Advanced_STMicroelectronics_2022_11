import { NextFunction, Request, Response } from "express";
import TodoService, { Todo, TodoBody } from "./model-mongoose";

export async function todoListCtrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const todos = await TodoService.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
}

export async function todoCreateCtrl(
  req: Request<any, any, TodoBody>,
  res: Response,
  next: NextFunction
) {
  try {
    const newTodo = await TodoService.create(req.body);
    res.statusCode = 201;
    res.json(newTodo);
  } catch (err) {
    next(err);
  }
}

export async function todoShowCtrl(
  req: Request<{ todoId: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const todo = await TodoService.findById(req.params.todoId);

    if (!todo) {
      req.notFoundMsg = 'Todo not found';
      return next();
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function todoDeleteCtrl(
  req: Request<{ todoId: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const todo = await TodoService.findByIdAndDelete(req.params.todoId);

    if (!todo) {
      req.notFoundMsg = 'Todo not found';
      return next();
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function todoUpdateCtrl(
  req: Request<{ todoId: string }, any, TodoBody>,
  res: Response,
  next: NextFunction
) {
  try {
    const todo = await TodoService.findByIdAndUpdate(
      req.params.todoId,
      req.body
    );

    if (!todo) {
      req.notFoundMsg = 'Todo not found';
      return next();
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function todoReplaceCtrl(
  req: Request<{ todoId: string }, any, TodoBody>,
  res: Response,
  next: NextFunction
) {
  try {
    const todo = await TodoService.findOneAndReplace(
      { _id: req.params.todoId },
      req.body
    );

    if (!todo) {
      req.notFoundMsg = 'Todo not found';
      return next();
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
}
