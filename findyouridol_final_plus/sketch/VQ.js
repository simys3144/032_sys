function VQ() {

  let nextButton;
  let cursor;
  let x = -100;
  let y = -100;
  let heart;

  this.setup = function() {
    createCanvas(600, 600);
    nextButton = new Clickable();
    cursor = new Cursor();
    heart = this.sceneManager.heart;
    noCursor();
  }

  this.draw = function() {
    image(this.sceneManager.maCover, width/2, height/2, 600, 600);
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
      this.color = color(64, 193, 171);
  }
    nextButton.onOutside = function(){
      this.width = 100;
      this.height = 50;
      this.color = color(140, 188, 228);
  }
}
function drawHeart() {
    image(heart, x, y, heart.width*0.25, heart.height*0.25);
  }

  this.mousePressed = function() {
    x = mouseX;
    y = mouseY;

    let x1 = nextButton.x - nextButton.width / 2;
    let x2 = nextButton.x + nextButton.width / 2;
    let y1 = nextButton.y - nextButton.height / 2;
    let y2 = nextButton.y + nextButton.height / 2;
    if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
        clear();
        x = -100;
        y = -100;
        this.sceneManager.showScene(VQ0);
      }
    }
}
