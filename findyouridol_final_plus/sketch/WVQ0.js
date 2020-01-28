function WVQ0() {
  let buttons = [];
  let vQ = [];
  // let questions = []; //질문만 모아놓은 배열. function setQuestion() 참조
  let questionNum = 0; //질문 번호. 각 씬마다 다르게 설정됨.
  let nextButton; //다음 버튼을 만들기 위한 선언.
  let array0; //array0, 1은 버튼에 따라 결과값을 저장하기 위한 배열. this.setup()에서 크기 지정=1, function offButton_1()에서 결과값 저장.
  let array1;
  let b0 = false; //버튼들이 눌렸는지 안눌렸는지 확인할 boolean variable
  let b1 = false;
  let conclusion; //function offButton_1에서 나온 return값 con(사용자가 최종적으로 선택한 값)을 저장하기 위한 변수
  let question;

  let cursor;
  let x = -100;
  let y = -100;
  let heart;

  this.setup = function() {
    imageMode(CENTER);
    vQ = this.sceneManager.wvQ;
    nextButton = new Clickable();
    array0 = new Array(1); //버튼 하나당 입력할 수 있는 숫자 개수=1개.
    array1 = new Array(1);
    question = new Question(vQ);

    createCanvas(600, 600);
    appearance.resize(600, 600);

    cursor = new Cursor();
    heart = this.sceneManager.heart;
    noCursor();
  }

  this.draw = function() {
    image(this.sceneManager.appearance1, width/2, height/2, 600, 600);
    question.setQuestion();
    question.display(questionNum);
    setButton(questionNum, vQ[questionNum * 2 + 1].length); //문제 번호에 맞게 선택지를 만듦
    conclusion = offButton_1(array0, array1); //버튼값에 따른 결과(con)을 conclusion에 저장함. 리턴값은 this.mousePressed()에서 사용
    print(conclusion);
    next();

    noStroke();
    fill(249,44,103);
    ellipse(width/3, height/12, 10, 10)
    for(let i = 1; i < 6; i++) {
      fill(220);
      ellipse(width/3 + i*20, height/12, 10, 10);
    }

    cursor.display(mouseX, mouseY);
    drawHeart();

    //선택에 따라 바뀌는 캐릭터
    if (b0 == false && b1 == false) image(this.sceneManager.genie2, width/5, height*3/4);
    else image(this.sceneManager.genie, width/5, height*3/4);
  }

  function drawHeart() {
      image(heart, x, y, heart.width*0.25, heart.height*0.25);
    }

  function setButton(q, num) {
    //선택지 버튼 생성. 파라미터로 문제 번호(q)와 선택지 개수(num)를 받음.
    //선택지 개수는 vQ 배열의 1, 3, 5, 7, ... 번째 element의 길이이므로 num을 draw에서와 같이 표시함.
    for (let i = 0; i < num; i++) {
      append(buttons, new Clickable());
      buttons[i].locate(width/2+50, height*2/4 + i*60);
      buttons[i].textFont = bodyFont;
      buttons[i].text = vQ[q * 2 + 1][i];
      buttons[i].textSize = 12;
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
    buttons[0].onOutside = function(){
      this.width = 100;
      this.height = 50;
      buttons[0].width = 100;
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
      this.color = color(20, 123, 209);
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
      } else {
        clear();
        x = -100;
        y = -100;
        for (let i = 0; i<2; i++) {
          buttons[i].color = color(255);
          buttons[i].width = 100;
          buttons[i].height = 50;
        }
        // buttons = [];
        b0 = false;
        b1 = false;
        this.sceneManager.users = concat(this.sceneManager.users, conclusion);
        //users배열을 기존 users배열과 이번 씬에서 버튼을 눌러 만들어진 conclusion 배열을 합친 것으로 바꿈
        print(this.sceneManager.users);
        this.sceneManager.showScene(WVQ1);
      }
    }
  }
}
