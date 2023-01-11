import { Component } from 'react';
import { Todo } from './Todo';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

type TodosProps = {};
type TodosState = {
  todos: Todo[];
  newTodo: string;
};

class Todos extends Component<TodosProps, TodosState> {
  state: Readonly<TodosState> = {
    todos: [
      { id: Math.random(), title: 'ABC', completed: true },
      { id: Math.random(), title: 'DEF', completed: false },
    ],
    newTodo: 'XYZ',
  };

  handleNewValueChange = (value: string) => {
    this.setState({
      newTodo: value,
    });
  };

  handleAdd = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Math.random(),
          title: this.state.newTodo,
          completed: false,
        },
      ],
    });
  };

  handleDelete = (todo: Todo) => {
    this.setState({
      todos: this.state.todos.filter((el) => el.id !== todo.id),
    });
  };

  render() {
    return (
      <div className="Todos">
        <TodoForm newValue={this.state.newTodo} onNewValueChange={this.handleNewValueChange} onAdd={this.handleAdd} />
        <TodosList items={this.state.todos} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Todos;
