
//************************************//
// Head Being hit by Paddle
//***********************************//
// setup function
function setup(){

//creating the canvas to draw on
  createCanvas( windowWidth, windowHeight );
}


var headAngle = 0;
var headRotationRate = 0;
var armAngle = 0;
var headwidth = 80;
var headHeight = 40;


function draw(){
/**********************************/
/* MAIN SANDBOX */
/**********************************/
// erase every frame
background('rgba(255, 0, 0, 0.65)');
//turn the cursor off
noCursor();

// Updating the Values
//Base head rotation rate on mouseY pos
headRotationRate = ( mouseY * 0.1) - 20;
//update head angle
// equal itself and headRotationRate
headAngle = headAngle + headRotationRate;
// set the arm to spin
armAngle = armAngle - 3;

/*********************************/
/* BODY PERSON SANBOX */
/*********************************/
/*********************************/
/* paddle */
/*********************************/
push();
// make the person follow the mouse
translate( mouseX, mouseY );
 push();
//paddle
strokeWeight( 30 );
stroke( 10 );
//draw paddle
push();
//move the center to rotate
translate(-10, 150 );
//rotate based on mouseX position
rotate( radians( mouseX) );
//draw paddle
line( 0, 0, 150, 0);
fill( 'rgb(255, 176, 59)' );
noStroke();

pop();





pop(); //paddle end



/*********************************/
/* HEAD */
/*********************************/
push();
noStroke();

translate( 0,-60);

fill( '#FFC18F');
//move center
//rotate head
rotate( radians(headAngle) );
//head
ellipse(-29,10,190,200);

//mouth
fill( 0 );
arc(
  -30,
50,
  75,
  50,
  radians(360),
  radians(180),
PIE
);

//nose

noStroke();
fill('#EAA36B');
rect(-50,10,40,30,20)

//left eyes
push();
translate( -50, -50 );

stroke('#fff');
strokeWeight(5);
fill('000');
ellipse( -25, 40, 40, 40);



stroke('#fff');
strokeWeight(5);
fill('black');
ellipse( -25, 40, 30, 30);

noStroke();
strokeWeight(5);
fill('#fff');
ellipse( -30, 35, 13, 13 );


pop();
// Right eye

push();
translate( 35, -50 );

stroke('#fff');
strokeWeight(5);
fill('000');
ellipse( -25, 40, 40, 40);



stroke('#fff');
strokeWeight(5);
fill('black');
ellipse( -25, 40, 30, 30);

noStroke();
strokeWeight(5);
fill('#fff');
ellipse( -30, 35, 13, 13 );
 //Hair

stroke('#6F4A14');
strokeWeight(20);
noFill();
arc( -65, 45, 180, 180, PI, PI);
line(-110, -50, -20, -50, 60, -50 );




pop();  //Head End



pop();

}
