import express, { Router } from "express";
import { authenticate } from "../middleware";
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
todosRouter.post("", authenticate, express.json(), todoCreateCtrl);
todosRouter.delete("/:todoId", authenticate, todoDeleteCtrl);
todosRouter.put("/:todoId", authenticate, express.json(), todoReplaceCtrl);
todosRouter.patch("/:todoId", authenticate, express.json(), todoUpdateCtrl);

export default todosRouter;
