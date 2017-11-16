//basket ball bounce


//ball and ball bounce
let circles = {
    diam: [ 40, 60, 75, 85, 90, 95, 100, 95, 90, 85, 75, 60, ],
    pos: [ 40, 90, 150, 200, 250, 300, 350, 300, 250, 200, 150, 90, ],
    idx: 0
};


circles.numCircles = circles.diam.length;
// canvas
function setup() {
   createCanvas( windowWidth, 400 );
   frameRate( 12 );
}

function draw() {
    background( 'grey' );

    fill( ' orange ' );

		ellipse(
        circles.pos[circles.idx],
        circles.pos[circles.idx],
        circles.diam[circles.idx]
    );

    circles.idx = ( circles.idx + 1 ) % circles.numCircles;
}
