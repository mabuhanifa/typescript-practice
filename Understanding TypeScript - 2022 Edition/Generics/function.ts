function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const newObj = merge({ name: "a" }, { age: 30 });
newObj.age;
