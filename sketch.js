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

  for (var i = 0; i < pipes.length; i++) {
    pipes[i].show();
    pipes[i].update();
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    // console.log("SPACE")
  }
}

