var p1, p2, p3;

function setup() {
  createCanvas(500, 500);
  var x0 = width * 0.5;
  var y0 = height * 0.5;
  p1 = new TPoint(x0 - 40, y0 + 0);
  p2 = new TPoint(x0 + 0, y0 + 40);
  p3 = new TPoint(x0 + 40, y0 + 0);
  t = new Triangle(p1, p2, p3);
}

function draw() {
  background(230);
  t.draw();
}

