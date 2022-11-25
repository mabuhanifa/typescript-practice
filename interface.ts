interface RectangleOptions {
  width: number;
  height: number;
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let height = options.height;
}
let newOptions = {
  height: 5,
  width: 5,
  length: 10,
};

drawRectangle({
  height: 5,
  width: 5,
  //   length: 10, ->error  'length' does not exist in type 'RectangleOptions'
});

drawRectangle(newOptions); // -> ok -> passed by reference
