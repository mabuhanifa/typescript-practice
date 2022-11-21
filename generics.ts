//generics
const addId = <T>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addId({
  name: "Mashrafi",
  age: 36,
  country: "Bangladesh",
});

// user. -> all properties will be available
