function fetchTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((todos) => todos.slice(0, 20));
}
