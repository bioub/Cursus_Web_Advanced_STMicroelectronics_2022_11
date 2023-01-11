import { Todo } from './Todo';

type TodoItemProps = {
  item: Todo;
};

function TodoItem({ item }: TodoItemProps) {
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={item.completed} />
      <span>{item.title}</span>
      <button>-</button>
    </div>
  );
}

export default TodoItem;
