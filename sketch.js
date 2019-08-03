var bird;
var pipes = [];
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  bird.update();
  bird.show();

  if (frameCount % 40  == 0) {
  pipes.push(new Pipe());
  }

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      // Restart game when the ball hits the bar
      if (pipes[i].end == true){
        setup();
        console.log("Game end");
      }
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 0);
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    // console.log("SPACE")
  }
}
