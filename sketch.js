let circles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // 設定畫布為最底層
  background('#fdf0d5');

  // 產生 40 個圓的資料
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(40, 120),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background('#fdf0d5');
  let sizeFactor = map(mouseX, 0, width, 0.5, 2);

  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size * sizeFactor);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
