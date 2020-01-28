class Question {
  constructor(_qType, _bubble) {
    this.x = width/2+20;
    this.y = height/3-20;
    this.qType = _qType;
    this.bubble = _bubble;
    this.qArray = [];
    this.qNum = 999;
  }
  setQuestion() {
    for (let i = 0; i < this.qType.length/2; i++) {
      append(this.qArray, this.qType[i*2]);
    }
  }
  display(_qNum) {
    this.qNum = _qNum;
    fill(206, 53, 109);
    noStroke();
    triangle(width/2-110, height/3+55, width/2-110, height/3-10, width/2-80, height/3);
    ellipse(width/2+20, height/3-20, 350, 130);
    fill(0);
    textFont(wholeFont);
    textSize(22);
    text(this.qArray[this.qNum], this.x, this.y);
  }

  // display(_bubble){
  //   this.bubble = _bubble;
  //
  // }
}
