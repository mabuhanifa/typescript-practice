function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const newObj = merge({ name: "a" }, { age: 30 });
newObj.age;

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let description = "Got No Value";
  if (element.length === 1) {
    description = "Got 1 element";
  } else if (element.length > 1) {
    description = `Got  ${element.length} element`;
  }
  return [element, description];
}
