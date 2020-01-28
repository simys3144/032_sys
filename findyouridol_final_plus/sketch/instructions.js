function Instructions() {

  let q = ["여돌", "남돌"]
  let nextButton;
  let array0 = [];
  let array1 = [];
  let b0 = false;
  let b1 = false;
  let conclusion;
  let buttons = [];
  let w = false;

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
    image(this.sceneManager.gender, width/2, height/2, 600, 600);
    setButton(q, 2);
    conclusion = offButton_1(array0, array1);
    if (conclusion[0] == 0) w = true;
    else w = false;
    next();
    print(buttons);

    cursor.display(mouseX, mouseY);
    drawHeart();
  }

  function drawHeart() {
    image(heart, x, y, heart.width*0.25, heart.height*0.25);
  }

    function setButton(q, num) {
      //선택지 버튼 생성. 파라미터로 문제 번호(q)와 선택지 개수(num)를 받음.
      //선택지 개수는 vQ 배열의 1, 3, 5, 7, ... 번째 element의 길이이므로 num을 draw에서와 같이 표시함.
      for (let i = 0; i < num; i++) {
        append(buttons, new Clickable());
        buttons[i].locate(width/2, height*2/4 + i*60);
        buttons[i].textFont = bodyFont;
        buttons[i].text = q[i];
        buttons[i].textSize = 16;
        buttons[i].draw();
      }
      }

    function offButton_1(array0, array1) { //버튼 해제, 중복 선택 방지를 위한 함수
      buttons[0].onHover = function(){
        this.width = 130;
        this.height = 60;
        // buttons[1].color = color(255);
        buttons[1].width = 100;
        buttons[1].height = 50;
      }
      buttons[1].onHover = function(){
        this.width = 130;
        this.height = 60;
        // buttons[0].color = color(255);
        buttons[0].width = 100;
        buttons[0].height = 50;
      }
      buttons[0].onOutside = function(){
        this.width = 100;
        this.height = 50;
        buttons[1].width = 100;
        buttons[1].height = 50;
      }
      buttons[1].onOutside = function(){
        this.width = 100;
        this.height = 50;
        buttons[1].width = 100;
        buttons[1].height = 50;
      }
      buttons[0].onPress = function() { //버튼 0이 눌리면
        this.width = 130;
        this.height = 60;
        this.color = "#78D5E1"; //색을 칠하고
        array0[0] = 0; //array0에 결과값 저장
        b0 = true; //b0이 눌렸다는 걸 저장
        buttons[1].color = color(255); //다른 버튼은 흰색으로
        shorten(array1); //다른 버튼의 array를 줄임(어차피 길이가 1이라서 줄이면 []로 돌아감)
        b1 = false; //다른 버튼은 안 눌린 것으로 바꿈  ((이하동일))
      }
      buttons[1].onPress = function() {
        this.width = 130;
        this.height = 60;
        this.color = "#78D5E1";
        array1[0] = 1;
        // append(array1, 1);
        b1 = true;
        buttons[0].color = color(255);
        shorten(array0);
        b0 = false;
      }

      if (b0) { //만약 버튼 0이 켜져있을 때
        buttons[0].onPress = function() { //또다시 누르면
          this.color = color(255); //색을 흰색으로
          shorten(array0); //버튼 0의 array를 줄임([]로 돌아감)
          b0 = false; //버튼 0은 안 눌린 것으로 바꿈 ((이하동일))
        }
      }
      if (b1) {
        buttons[1].onPress = function() {
          this.color = color(255);
          shorten(array1);
          b1 = false;
        }
      }
      con = concat(array0, array1); //두 버튼의 array값을 합쳐 하나의 array로 만들고
      return con; //return함.
    }

    function next() { //다음 버튼.
      nextButton.locate(width*2/3+70, height*3/4+40);
      nextButton.textFont = bodyFont;
      nextButton.text = "Next";
      nextButton.textSize = 12;
      nextButton.draw();
      if(b0 || b1){
      nextButton.onHover = function(){
        this.width = 130;
        this.height = 60;
        this.color = color(120, 213, 225);
    }
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
        if (b0 == false && b1 == false) {
          print("empty");
        } else if (w){
          clear();
          x = -100;
          y = -100;
          array0 = [];
          array1 = [];
          // buttons = [];
          b0 = false;
          b1 = false;
          w = false;
          for (let i = 0; i<2; i++) {
            buttons[i].color = color(255);
            buttons[i].width = 100;
            buttons[i].height = 50;
          }
          this.sceneManager.showScene(WVQ);
        } else {
          clear();
          x = -100;
          y = -100;
          array0 = [];
          array1 = [];
          // buttons = [];
          b0 = false;
          b1 = false;
          w = false;
          for (let i = 0; i<2; i++) {
            buttons[i].color = color(255);
            buttons[i].width = 100;
            buttons[i].height = 50;
          }
          this.sceneManager.showScene(VQ);
        }
      }
    }
}
