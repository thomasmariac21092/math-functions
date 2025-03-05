function calculateArea(shape) {
  let area = 0;

  if (shape === 'circle') {
    // Calculate area of circle
    area = Math.PI * shape.radius ** 2;
  } else if (shape === 'square') {
    // Calculate area of square
    area = shape.sideLength ** 2;
  } else if (shape === 'rectangle') {
    // Calculate area of rectangle
    area = shape.width * shape.height;
  }

  return area;
}
