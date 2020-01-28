function Loading1() {

  let counter = 10;
  let points = [];
  let i = 0;
  let seconds;
  let time = 1000;


  this.setup = function() {
    createCanvas(600, 600);
    setInterval(timeIt, time);
    // s2.play();
  }

  this.draw = function() {
    background(140, 188, 228);
    noStroke();
    fill(0);
    textSize(20);
    text("지니가 당신의 최애를 찾고 있어요...\n잠시만 기다려주세요!", width / 2, height / 2);
    noFill();
    translate(width/2, height/2);
    stroke(255);
    strokeWeight(8);

    beginShape();
    points.forEach(point => {
      vertex(point.x, point.y)
    })
    endShape();

    i+= 0.01
          var r = 10
          var x = r * 16 * pow(sin(i), 3)
          var y = - r * 1* (13 * cos(i) - 5 * cos(2*i) - 2*cos(3*i) - cos(4* i))
          points.push({x, y})

    if (counter >= 5 && counter < 5) {
      noStroke();
      textFont(bodyFont);
      textSize(20);
      text("지니가 당신의 최애를 찾고 있어요...\n잠시만 기다려주세요!", width / 2, height / 2);
      text('0:0' + timerValue, width / 2, height / 2 + 30)
    }
    if (counter == 0) {
      counter = 10;
      i = 0;
      s1.stop();
      s2.play();
      time = 1000;
      this.sceneManager.showScene(WPickMe);
    }
  }

  function timeIt() {
    if (counter > 0) {
      counter--;
    }

    seconds = counter % 60;

  }
}
