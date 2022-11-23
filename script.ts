let playerName; //Variable 'playerName' implicitly has an 'any' type, but a better type may be inferred from usage

console.log(playerName); //undefined

playerName = "playerName";

playerName = 15; // no error

//**   ----------------------function-------------------------  */

function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(1, 5));

//**   ----------------------Array-------------------------  */

let fruits = ["apple", "banana", "orange"]; // * string[] *//

fruits.push("lichi"); //okay
// fruits.push(9); // -> error

let mixed = ["apple", "banana", 9]; // * (string | number)[] *//

mixed.push("apple"); //okay
mixed.push(15); //okay
// mixed.push(true); //error

let mixed2 = ["apple", "banana", 9, false]; // * (string | number | boolean)[] *//

mixed2.push("apple"); //okay
mixed2.push(15); //okay
mixed2.push(true); //okay
// mixed2.push({});  //error

let mixed3 = ["apple", "banana", 9, false, {}]; // * ({}[])[] *//

mixed3.push("apple"); //okay
mixed3.push(15); //okay
mixed3.push(true); //okay
mixed3.push({}); //okay

//**   ----------------------Array-------------------------  */

let person = {
  name: "Shourov",
  age: 25,
  isHired: false,
};

person.name = "Abu Hanifa"; // ok
person.age = 26; // ok
person.isHired = true; // ok

// person.country = "Bangladesh"; // error
// person.name = 25; // error
// person.age ="26"; // error
// person.isHired = null; // error

export {};
