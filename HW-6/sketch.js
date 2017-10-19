// This is an abstract clown
// instantaite the variable as an object

var smiley = {};

// assigning the qualities to the object
smiley.size = 50;
smiley.eye_mouth_y = -50;
smiley.color = 'red';
smiley.mouth_h = 90;
smiley.pos_x = 10;
smiley.pos_y = 0;
function setup(){
  createCanvas( windowWidth, windowHeight );
  frameRate(20);
}



function setup() {
  createCanvas( windowWidth, windowHeight );
  background( 'purple' );

  smiley.pos_x = width/2;
  smiley.pos_y = height/2;

}
// drawing the creepo clown
function draw() {

  translate( smiley.pos_x, smiley.pos_y );

  fill( smiley.color );
  ellipse( 0, 0, smiley.size );

  fill('green');
  ellipse( smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.55 );
  ellipse( -smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.25 );

  arc( 0, -smiley.eye_mouth_y, smiley.size * 0.8, smiley.mouth_h, 0, PI );

//update pos
  smiley.pos_x += random( -5, 5 );
  smiley.pos_y += random( -5, 5 );

}
