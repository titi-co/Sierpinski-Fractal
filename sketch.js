function setup() {
  createCanvas(windowWidth, windowHeight);
}

function circleSierpinski(x, y, r) {
  if (r < 2) return;
  circle(x, y, r);
  circleSierpinski(x + r * 0.5, y, r * 0.5);
  circleSierpinski(x - r * 0.5, y, r * 0.5);
  circleSierpinski(x, y - r * 0.5, r * 0.5);
  //circleSierpinski(x, y + r * 0.5, r * 0.5);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  circleSierpinski(windowWidth / 2, windowHeight / 2, windowWidth / 4);
}
