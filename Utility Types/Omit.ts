interface Todo {
  id: string;
  title: string;
  description: string;
}

type TodoOmit = Omit<Todo, "description">;

const todo: TodoOmit = {
  id: "01",
  title: "Value",
};

export { todo };
