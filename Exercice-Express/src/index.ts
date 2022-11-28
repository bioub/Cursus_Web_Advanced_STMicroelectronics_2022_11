import express from "express";
import _ from "lodash";

const todos = [
  {
    id: 1,
    title: "Acheter du pain",
    completed: false,
  },
  {
    id: 2,
    title: "Introduire Express",
    completed: true,
  },
];

const app = express();

function nextId() {
  const maxId = _.maxBy(todos, "id")?.id ?? 0;
  return maxId + 1;
}

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:todoId", (req, res) => {
  const todoId = +req.params.todoId; // le + fait la conversion en number

  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    res.statusCode = 404;
    return res.json({ msg: "Todo not found" });
  }

  res.json(todo);
});

app.post("/api/todos", express.json(), (req, res) => {
  const newTodo = {...req.body};
  newTodo.id = nextId();

  todos.push(newTodo);

  res.statusCode = 201;
  res.json(newTodo);
});

app.delete("/api/todos/:todoId", (req, res) => {
  const todoId = +req.params.todoId; // le + fait la conversion en number

  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    res.statusCode = 404;
    return res.json({ msg: "Todo not found" });
  }

  const index = todos.indexOf(todo);
  todos.splice(index, 1);

  res.json(todo);
});

app.put("/api/todos/:todoId", express.json(), (req, res) => {
  const todoId = +req.params.todoId; // le + fait la conversion en number

  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    res.statusCode = 404;
    return res.json({ msg: "Todo not found" });
  }

  const replacementTodo = {
    ...req.body,
    id: todoId,
  };

  const index = todos.indexOf(todo);
  todos[index] = replacementTodo;

  res.json(todo);
});

app.patch("/api/todos/:todoId", express.json(), (req, res) => {
  const todoId = +req.params.todoId; // le + fait la conversion en number

  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    res.statusCode = 404;
    return res.json({ msg: "Todo not found" });
  }

  const replacementTodo = {
    ...todo,
    ...req.body,
    id: todoId,
  };

  const index = todos.indexOf(todo);
  todos[index] = replacementTodo;

  res.json(todo);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
