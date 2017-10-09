// setup function
function setup(){

//creating the canvas to draw on
  createCanvas(600,800);

//making the background color
  background( 'rgba(255, 0, 0, 0.65)' );
}
function draw(){
/**********************************/
/* MAIN SANDBOX */
/**********************************/
push();
// set of the grid center( x:0, y:0 )
// to canvas center
translate( 300, 400 );

/*********************************/
/* BODY */
/*********************************/
push();

fill('white');
rect(-150, -100, 245, 300,90,90,50,50)
 push();

//shirt//

 fill('black');  //Logo//
 translate(-150, -100);
 rect (170,100,10,80,20,20,20,20)
 fill('black');
 translate(-150, -100);
 rect (210,200,10,80,20,20,20,20)
 fill('grey');
 translate(-150, -100);
 rect (368,339,105,5,20,20,20,20)


pop()
pop(); // Body End!

/*********************************/
/* legs */
/*********************************/
push();

translate( 0, 200);

//left leg
triangle(-130, -9, -30, 0, -300, 310);
//right leg
scale(-1, 1);
triangle(-70, -7, 30, 0, -300, 310);

pop();   //Legs End

/*********************************/
/* Arms */
/*********************************/
push();

translate( 0, -75);
//left arm
stroke('white');
strokeWeight(55);
line( -140, 15, -160, 180);
line(-150, 370, -160,195)

//right arm
scale(-1,1);
stroke('white');
strokeWeight(55);
line( -90, 15, -110, 180);
line(-110, 370, -110,195)

pop(); //Arms End

/*********************************/
/* HEAD */
/*********************************/
push();
translate( 0,-200);

fill( '#FFC18F');

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


stroke('grey');
strokeWeight(25);
noFill();
line( 400, 530, -400, 530, -20, -50, 60, -50 );

pop();  //Head End




pop();

}
