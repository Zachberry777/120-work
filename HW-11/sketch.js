//bubbles

//bubbles be bubbles
let bubbles = [];

//the function

function setup() {
  createCanvas(windowWidth, windowHeight);
  let b = new Bubble(width/10, height/4, 10);
  bubbles.push(b);
}
//use mouse to blow bubbles in wind
function mouseDragged() {
  let r = random(10,35);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background('blue');
  for (let i = 0; i < bubbles.length; i++){
  bubbles[i].move();
  bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x = this.x + random(-2,20);
    this.y = this.y + random(-2,5);
  }

  show() {
    stroke(255);
    strokeWeight(3);
    noFill();
    ellipse(this.x, this.y, this.r *2)
;
  }
}
