interface Todo {
  id: string;
  title: string;
  description: string;
}

type TodoOptional = Partial<Todo>;

const todo: TodoOptional = {
  description: "Optional",
  id: "optional",
  title: "Optional",
};
