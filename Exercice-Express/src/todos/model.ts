import _ from "lodash";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoBody = Omit<Todo, "id">;

class TodoService {
  private static data: Todo[] = [
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

  private static nextId() {
    const maxId = _.maxBy(this.data, "id")?.id ?? 0;
    return maxId + 1;
  }

  // static find(): Promise<Todo[]> {
  //   return Promise.resolve(this.data);
  // }

  static async find(): Promise<Todo[]> {
    return this.data;
  }

  static async create(body: TodoBody): Promise<Todo> {
    const newTodo: Todo = { ...body, id: this.nextId() };
    this.data.push(newTodo);
    return newTodo;
  }

  static async findById(id: string): Promise<Todo | undefined> {
    const todoId = +id; // le + fait la conversion en number
    const todo = this.data.find((t) => t.id === todoId);
    return todo;
  }

  static async findByIdAndDelete(id: string): Promise<Todo | undefined> {
    const todo = await this.findById(id);

    if (!todo) {
      return;
    }

    const index = this.data.indexOf(todo);
    this.data.splice(index, 1);

    return todo;
  }

  static async findByIdAndUpdate(id: string, body: TodoBody): Promise<Todo | undefined> {
    const todo = await this.findById(id);

    if (!todo) {
      return;
    }

    const replacementTodo = {
      ...todo,
      ...body,
      id: +id,
    };

    const index = this.data.indexOf(todo);
    this.data[index] = replacementTodo;

    return todo;
  }

  static async findOneAndReplace(filter: { _id: string }, body: TodoBody): Promise<Todo | undefined> {
    const id = filter._id;
    const todo = await this.findById(id);

    if (!todo) {
      return;
    }

    const replacementTodo = {
      ...body,
      id: +id,
    };

    const index = this.data.indexOf(todo);
    this.data[index] = replacementTodo;

    return todo;
  }

}

export default TodoService;
