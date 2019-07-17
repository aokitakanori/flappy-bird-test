var bird;
var pipes = [];
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());  // このコードは、pipe.jsのPipeクラスを初期化してる。その初期化がうまくいかないからエラーが出てた。(詳しくはpipe.jsのコメント参照)
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
      console.log("HIT");
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

