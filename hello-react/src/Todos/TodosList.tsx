import { Todo } from "./Todo";
import TodoItem from "./TodoItem";

type TodosListProps = {
  items: Todo[],
}

function TodosList({ items }: TodosListProps) {
  return <div className="TodosList">
    {items.map((item) => <TodoItem key={item.id} item={item} />)}
  </div>;
}

export default TodosList;
