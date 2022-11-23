// typescript function

function addTwo(num: number) {
  return num + 2;
}

// function that return nothing
function addThree(num: number): void {
  let b = num % 2;
}

addTwo(5);

// let myFunc: Function;

let myFunc = (a: string, b: number) => {
  console.log(`Hello world! ${a} ${b}`);
};

myFunc("5", 5);
