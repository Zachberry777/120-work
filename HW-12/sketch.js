// bubble bumps

//create ball
let balls = [];
const numOfBalls = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);


    let init_x = 40;
    let init_y = 30;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));

        init_x += 100;
        if (init_x > width) {
            init_x = 60;
            init_y += 100;
        }
    }
}

function draw() {
    background('orange');

    for (let i = 0; i < balls.length; i++) {
        // call the ball's methods
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
    }
}






//ball def
class Ball {
    constructor(x, y, size) {
        this.color = 'blue';
        this.size = random(20, 40);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-8, 8);
        this.deltaY = random(-8, 8);
    }

    display() {
        push();

        noStroke();

        fill(this.color);

        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {

        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            this.color = 'rgb(110, 240, 158)';
        }

        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
            this.color = 'red';
        }
    }


    ballCheck(otherBalls, myId) {

        for (let n = 0; n < otherBalls.length; n++) {

            if (n != myId) {
                let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR = this.rad + otherBalls[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                    // flip the color
                    if( this.color == 'red') {
                        this.color = 'green';
                    } else {
                        this.color = 'blue';
                    }
                }
            }
        }
    }
}
