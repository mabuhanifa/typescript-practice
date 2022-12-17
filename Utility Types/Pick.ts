interface Todo {
  id: string;
  title: string;
  description: string;
}

type TodoPick = Pick<Todo, "description" | "id">;

const todo: TodoPick = {
  description: "Optional",
  id: "optional",
};

export { todo };
