function Genie() {

let cursor;
let x = -100;
let y = -100;
let heart;
let nextButton;

  this.setup = function() {
    createCanvas(600, 600);
    // s1.play();
    // s2.play();
    cursor = new Cursor();
    heart = this.sceneManager.heart;
    noCursor();
    nextButton = new Clickable();
  }

  this.draw = function() {
    image(this.sceneManager.genieshow, width/2, height/2, 600, 600);
    next();

    cursor.display(mouseX, mouseY);
    drawHeart();
  }

  function next() { //다음 버튼.
    nextButton.locate(width/2+150, height*3/4+50);
    nextButton.textFont = bodyFont;
    nextButton.text = "Start";
    nextButton.textSize = 12;
    nextButton.draw();
    nextButton.onHover = function(){
      this.width = 130;
      this.height = 60;
      this.color = color(140, 188, 228);
  }
    nextButton.onOutside = function(){
      this.width = 100;
      this.height = 50;
      this.color = color(255);
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
        this.sceneManager.showScene(Caution);
      }
    }
  }
