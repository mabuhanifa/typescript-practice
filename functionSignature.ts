let addFunction: (x: number, y: number) => number;

addFunction = (
  x: number,
  y: number
  /* z: string can not take a new parameter here without declaring it in signature */
) => {
  return x * y;
};
