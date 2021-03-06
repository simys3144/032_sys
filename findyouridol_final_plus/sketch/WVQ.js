function WVQ() {

  let nextButton;
  let cursor;
  let x = -100;
  let y = -100;
  let heart;

  this.setup = function() {
    imageMode(CORNER);
    createCanvas(600, 600);
    nextButton = new Clickable();
    cursor = new Cursor();
    heart = this.sceneManager.heart;
    noCursor();
  }

  this.draw = function() {
    image(this.sceneManager.waCover, 0, 0, 600, 600);
    next();
    next();
    cursor.display(mouseX, mouseY);
    drawHeart();
  }

  function next() { //다음 버튼.
    nextButton.locate(width/2, height*3/4+60);
    nextButton.textFont = bodyFont;
    nextButton.text = "Next";
    nextButton.textSize = 12;
    nextButton.draw();
    nextButton.onHover = function(){
      this.width = 130;
      this.height = 60;
      this.color = color(253, 200, 156);
  }
    nextButton.onOutside = function(){
      this.width = 100;
      this.height = 50;
      this.color = color(140, 188, 228);
  }
}

function drawHeart() {
  image(heart, x, y, heart.width * 0.25, heart.height * 0.25);
}

  this.mousePressed = function() {
    let x1 = nextButton.x - nextButton.width / 2;
    let x2 = nextButton.x + nextButton.width / 2;
    let y1 = nextButton.y - nextButton.height / 2;
    let y2 = nextButton.y + nextButton.height / 2;
    if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
        clear();
        x = -100;
        y = -100;
        this.sceneManager.showScene(WVQ0);
      }
    }
}
