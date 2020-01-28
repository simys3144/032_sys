class Idol {
  constructor(userResponse, femaledata, femalelist, imgs, userWeight) {
    this.user = userResponse;
    this.data = femaledata;
    this.list = femalelist;
    this.weight = userWeight;
    this.reflect = []; //각 응답별 가중치가 저장될 배열
    this.score = [];
    this.tmi=[];
    this.index=[];
    this.spec=[];
    this.imgs = imgs;
    this.stage1Num = 6;
    this.stage2Num = 6;
    this.stage3Num = 5;
    this.wscale = 0.8;
    this.hscale = 0.7;
  }

  gob() {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.stage1Num; j++) {
        append(this.reflect, this.weight[0]);
      }
      for (let k =this.stage1Num; k < (this.stage1Num + this.stage2Num); k++) {
        append(this.reflect, this.weight[1]*1.2);
      }
      for (let l = (this.stage1Num + this.stage2Num); l < (this.stage1Num + this.stage2Num + this.stage3Num); l++) {
        append(this.reflect, this.weight[2]);
      }
    }
  }


  compare() {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data[i].length; j++) {
        if (this.data[i][j] == this.user[j]) {
          sum += this.reflect[j];
        }
      }
      append(this.score, sum);
      sum = 0;
    }
    print('점수'+ max(this.score)+'  '+this.score);
  } //this.cnum 에 각 멤버 별 같은 개수(점수) 저장됨


  extract() {
    for (let i = 0; i < this.score.length; i++) {
      if (this.score[i] == max(this.score)) {
        let a = this.data[i][this.data[i].length-1];
        let b = i;
        let c = this.data[i][this.data[i].length-2];
        append(this.tmi, a);
        append(this.index, b);
        append(this.spec, c);
      }
    }
    print('후보군'+this.tmi);
  }

  display(){
    imageMode(CENTER);
    if (this.imgs[this.index[0]].width > this.imgs[this.index[0]].height) {
      image(this.imgs[this.index[0]], 0.5*width, 0.5*height, this.wscale*width, this.wscale*this.imgs[this.index[0]].height*width/this.imgs[this.index[0]].width);
    } else {
      image(this.imgs[this.index[0]], 0.5*width, 0.5*height, this.hscale*this.imgs[this.index[0]].width*height/this.imgs[this.index[0]].height, this.hscale*height);
    }
    textAlign(CENTER);
    textSize(30);
    text('당신의 최애는 '+ this.list[this.index[0]] +'입니다!',width/2, 50);
    textSize(14);
    text(this.list[this.index[0]] + ':'+ this.spec[0],width/2, height-70);
    text(this.list[this.index[0]]+'는 ' + this.tmi[0], width/2, height-50);
  }

  photo(){
    image(this.imgs[this.index[0]], width/4, height/2, 300, 480);
  };

  result(){
    return this.index[0];
  }

}
