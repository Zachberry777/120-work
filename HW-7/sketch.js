var ball = {};

// The ball width
ball.width = 55;

ball.x = 10;
ball.y = 10;

// where the canvas is and the ball hits
ball.delta_x = 3;
ball.delta_y = 3;
ball.scale_x = 3;
ball.scale_y = 3;

function setup() {

  //Size of background

  createCanvas ( windowWidth, windowHeight );
  background ('red');


}

function draw() {

  ball.x += ball.delta_x * ball.scale_x;
  ball.y += ball.delta_y * ball.scale_y;

  if ( ball.x >= width || ball.x <= 0 ) {
    ball.delta_x = -1 * ball.delta_x;
  }

  if ( ball.y >= width || ball.y <= 0 ) {
    ball.delta_y = -1 * ball.delta_y;
  }

//ball color

fill( 'blue' );
ellipse ( ball.x, ball.y, ball.width, ball.width );
stroke ( 'orange' );
strokeWeight ( 5 );


}

function mousePressed() {

  //changinf the speed of the ball

  ball.scale_x = map( mouseX, 1, width, 1, 20 );
  ball.scale_y = map( moouseY, 1, height, 1, 20 );

}
