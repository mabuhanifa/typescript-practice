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
});
export {};
