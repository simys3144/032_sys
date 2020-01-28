function Intro() {

let cursor;
let nextButton;
let x = -100; //커서 하트이미지 기본값 (아래 y도)
let y = -100;
let heart;

  this.setup = function() {
    createCanvas(600, 600);
    bkImage.resize(600, 600);
    nextButton = new Clickable();
    cursor = new Cursor();
    heart = this.sceneManager.heart;
    noCursor();
  }

  this.draw = function() {
    image(this.sceneManager.bkImage, width/2, height/2);
    next();
}

function next() { //다음 버튼.
  nextButton.locate(width/2+225, height*3/4+80);
  nextButton.textFont = bodyFont;
  nextButton.text = "Start";
  nextButton.textSize = 12;
  nextButton.draw();
  nextButton.onHover = function(){
    this.width = 130;
    this.height = 60;
    this.color = color(255);
}
  nextButton.onOutside = function(){
    this.width = 100;
    this.height = 50;
    this.color = color(140, 188, 228);
}

    cursor.display(mouseX, mouseY);
    drawHeart();
}

  function drawHeart() {
    image(heart, x, y, heart.width*0.25, heart.height*0.25);
  }

  this.mousePressed = function() {
    let x1 = nextButton.x - nextButton.width / 2;
let x2 = nextButton.x + nextButton.width / 2;
let y1 = nextButton.y - nextButton.height / 2;
let y2 = nextButton.y + nextButton.height / 2;
    x = mouseX; //커서 하트이미지 위치 지정. 마우스 누르면 그 위치가 이미지 위치.
    y = mouseY;

    if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
      clear();
      x = -100;
      y = -100;
      s1.play();
      s2.play();
      this.sceneManager.showScene(Genie);
    }
  }
}
