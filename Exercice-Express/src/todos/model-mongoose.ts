import mongoose from "mongoose";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoBody = Omit<Todo, "id">;

const schema = new mongoose.Schema({
  title: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const TodoService = mongoose.model("Todo", schema);

export default TodoService;
