//illusion


//canvas


function setup() {
	createCanvas(windowWidth,windowHeight);
    background(0);
}


//ellipse and quantaty
function draw() {

  let perRow = 40;
	let circleSize = 20;
	let pattern = width / perRow;

//outer for the loop, y loop
  for ( let y = circleSize; y < height; y += pattern) {
    for ( let x = circleSize; x < width; x += pattern) {
      fill( 10, 5, random(200) );
      ellipse( x, y, circleSize, circleSize );
    }

  }


}
