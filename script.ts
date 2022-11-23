let playerName; //Variable 'playerName' implicitly has an 'any' type, but a better type may be inferred from usage

console.log(playerName); //undefined

playerName = "playerName";

playerName = 15; // no error

//**   -----------------------------------------------  */

function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(1, 5));

export {};
