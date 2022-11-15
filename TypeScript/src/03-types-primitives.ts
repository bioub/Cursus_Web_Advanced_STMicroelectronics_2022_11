function createTodo(id: number, title: string, completed: boolean) {
  return {
    id,
    title,
    completed
  };
}

createTodo(123, 'ABC', false);
