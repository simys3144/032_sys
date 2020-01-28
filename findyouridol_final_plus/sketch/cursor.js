class Cursor {
  constructor() {
    this.x = -100;
    this.y = -100;
  }
  display(_x, _y) {
    this.x = _x;
    this.y = _y;

    // Main circle (slightly darkened)
    fill(0, 25);
    strokeWeight(3);
    stroke(0);
    ellipse(this.x, this.y, 50, 50);

    // Internal black lines
    line(this.x - 25, this.y, this.x - 10, this.y);
    line(this.x + 25, this.y, this.x + 10, this.y);
    line(this.x, this.y - 25, this.x, this.y - 10);
    line(this.x, this.y + 25, this.x, this.y + 10);

    // External black lines
    line(this.x - 5, this.y - 35, this.x + 5, this.y - 35);
    line(this.x - 5, this.y + 35, this.x + 5, this.y + 35);
    line(this.x - 35, this.y + 5, this.x - 35, this.y - 5);
    line(this.x + 35, this.y + 5, this.x + 35, this.y - 5);

    // Red cross
    strokeWeight(1);
    stroke(200, 0, 0);
    line(this.x - 7, this.y, this.x + 7, this.y);
    line(this.x, this.y - 7, this.x, this.y + 7);

    // Red dot
    noStroke();
    fill(200, 0, 0);
    ellipse(this.x, this.y, 5, 5);
  }
}

  // function mousePressed() {
  //   x = mouseX;
  //   y = mouseY;
  //   // Heart
  //   textAlign(CENTER, CENTER);
  //   textSize(50);
  //   text('💔', x, y);
  // }
