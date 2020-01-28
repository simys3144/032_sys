function Caution() {

let cursor;
let x = -100;
let y = -100;
let nextButton;
let heart;

  this.setup = function() {
    createCanvas(600, 600);
    nextButton = new Clickable();
    cursor = new Cursor();
    heart = this.sceneManager.heart;
    noCursor();
  }

  this.draw = function() {
    image(this.sceneManager.cautiongenie, width/2, height/2, 600, 600);
    textFont(wholeFont);
    textSize(24);
    noStroke();
    fill(0);
    text("앞서 말했듯 저는 입덕 요정 지니입니다!\n당신의 힘든 현생을 도와줄\n최애를 찾아주러 왔어요~~!\n \n제가 하는 몇 가지 질문에 답하시면\n제가 아는 192명의 아이돌 중에\n당신의 취향과 가장 일치하는\n아이돌을 알려드릴게요!", width/2+25, height/2);
    next();

    cursor.display(mouseX, mouseY);
    drawHeart();
  }

  function drawHeart() {
    image(heart, x, y, heart.width*0.25, heart.height*0.25);
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
      this.sceneManager.showScene(Instructions);
    }
  }
}
