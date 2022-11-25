interface RectangleOptions {
  width: number;
  height: number;
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let height = options.height;
}

drawRectangle({
  height: 5,
  width: 5,
  //   length: 10, ->error  'length' does not exist in type 'RectangleOptions'
});
export {};
