import express, { Router } from "express";
import {
  todoCreateCtrl,
  todoDeleteCtrl,
  todoListCtrl,
  todoReplaceCtrl,
  todoShowCtrl,
  todoUpdateCtrl,
} from "./controller";

const todosRouter = Router();

todosRouter.get("", todoListCtrl);
todosRouter.get("/:todoId", todoShowCtrl);
todosRouter.post("", express.json(), todoCreateCtrl);
todosRouter.delete("/:todoId", todoDeleteCtrl);
todosRouter.put("/:todoId", express.json(), todoReplaceCtrl);
todosRouter.patch("/:todoId", express.json(), todoUpdateCtrl);

export default todosRouter;
