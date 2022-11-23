//generics
const addId = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addId({
  name: "Mashrafi",
  age: 36,
  country: "Bangladesh",
});

// user. -> all properties will be available

//  let abc = addId(1); Argument of type 'number' is not assignable to parameter of type 'object'
// let abc2 = addId("1"); Argument of type 'string' is not assignable to parameter of type 'object'
// let abc4 = addId({ a: [1] }); ok

const addId2 = <T extends { name: string; age: number }>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user5 = addId({
  name: "Mashrafi" /**   @name should always be there **/,
  age: 36 /**   @age should always be there **/,
  country: "Bangladesh", // adding extra variable will be added later by generics
});

export {};
