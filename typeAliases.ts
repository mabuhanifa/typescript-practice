type stringOrNumber = string | number;
type userType = { name: string; age: number };

const userData = (id: stringOrNumber, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`User name is ${user.name} and age is ${user.age}`);
};
