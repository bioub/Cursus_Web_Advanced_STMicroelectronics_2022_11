import { Todo } from "./Todo";
import TodoItem from "./TodoItem";

type TodosListProps = {
  items: Todo[],
  onDelete(todo: Todo): void;
}

function TodosList({ items, onDelete }: TodosListProps) {
  return <div className="TodosList">
    {items.map((item) => <TodoItem key={item.id} item={item} onDelete={onDelete} />)}
  </div>;
}

export default TodosList;
