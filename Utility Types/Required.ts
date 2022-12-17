interface Todo {
  id?: string;
  title?: string;
  description?: string;
}

type TodoRequired = Required<Todo>;

const todo: TodoRequired = {
  description: "Optional",
  id: "optional",
  title: "Optional",
};

export { todo };
