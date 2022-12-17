interface Todo {
  title: string;
}

interface Cat {
  breed: string;
}
type ReadonlyCat = Readonly<Cat>;

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

// todo.title = "Hello"; -> Cannot assign to 'title' because it is a read-only property.

const cat: ReadonlyCat = {
  breed: "string",
};

// cat.breed = "shortHair"; -> Cannot assign to breed because it is a read-only property.

export {};
