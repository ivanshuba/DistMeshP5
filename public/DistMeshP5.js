var pts = [];
var delaunay;
var prevTime;
let mousePos = [];
let hoveredPt = null;

function setup() {
  createCanvas(600, 400);
  delaunay = new Delaunay();
  prevTime = millis();

  prefill();
}

function draw() {
  background(230);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Click left mouse button on canvas", width * 0.5, 20);
  text("Pres 't' for label drawing", width * 0.5, 40);

  delaunay.draw();

  fill(0);
  textSize(12);
  textAlign(LEFT, CENTER);
  text("points:" + delaunay.points.length, 10, 15);
  text("edges:" + delaunay.edges.length, 10, 30);
  text("triangles:" + delaunay.triangles.length, 10, 45);
  text("mousePos:" + mousePos[0] + ":" + mousePos[1], 10, 60);
  text("pt:" + delaunay.points[0].position.x + ":" + delaunay.points[0].position.y, 10, 75);
  text("hoveredPt:" + hoveredPt, 10, 90);
}

function mousePressed() {
  if (mouseButton == LEFT) {
    if (hoveredPt == null) {
      if (insideScreen(mouseX, mouseY)) {
        if (millis() - prevTime > 300) {
          prevTime = millis();
          pts.push(new TPoint(mouseX, mouseY));
          delaunay.triangulate(pts);
        }
      }
    }
  }
}

function keyPressed() {
  if (key == 't') {
    print("Ok");
    delaunay.drawText = !delaunay.drawText;
  }
}

function mouseMoved() {
  let range = 10;
  hoveredPt = null;
  mousePos[0] = mouseX;
  mousePos[1] = mouseY;
  for (var i = 0; i < delaunay.points.length; i++) {
    let pt = delaunay.points[i];
    let ptPos = pt.position;
    if (mouseX > ptPos.x - range && mouseX < ptPos.x + range &&
      mouseY > ptPos.y - range && mouseY < ptPos.y + range) {
      pt.isHovered = true;
      hoveredPt = pt;
    } else {
      pt.isHovered = false;
    }
  }
  //hoveredPt = hovered;
}

function mouseDragged() {
  if (hoveredPt != null) {
    hoveredPt.position.x = mouseX;
    hoveredPt.position.y = mouseY;
  }
}

function insideScreen(x, y) {
  return (x > 0 && x < width && y > 0 && y < height);
}

function prefill() {
  pts.push(new TPoint(width * 0.5 - 150, height * 0.5));
  pts.push(new TPoint(width * 0.5, height * 0.5 + 150));
  pts.push(new TPoint(width * 0.5 + 150, height * 0.5));
  delaunay.triangulate(pts);
}