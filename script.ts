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

let mixed = ["apple", "banana", 9];

mixed.push("apple"); //okay
mixed.push(15); //okay
// mixed.push(true); //error

export {};
