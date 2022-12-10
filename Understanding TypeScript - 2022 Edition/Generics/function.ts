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

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "dhaka" }, "name");
extractAndConvert({ age: 25 }, "age");
extractAndConvert({ phone: 8564641 }, "phone");
// extractAndConvert({ contact: 8564641 }, "phone"); -> error key did not match
