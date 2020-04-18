var fireworks = [];
var gravity;

function setup() {
	createCanvas(windowWidth, windowHeight);
	gravity = createVector(0,0.2);
	//stroke(255);
	//strokeWeight(4);
	background(0);
}

function draw() {
	background(0,50);
	if(random(1)<0.018){
		fireworks.push(new Firework());
	}
	for(let i=0; i<fireworks.length; i++){
		fireworks[i].update();
		fireworks[i].show();
		if(fireworks[i].done()){
			fireworks.splice(i,1);
		}
	}
	console.log(fireworks.length);
}
