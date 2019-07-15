// JavaScript source code
function Pipe() {
  // 下のrandomという関数が存在しないからエラーが出てる。5行目のrandomがramdomになってたからエラー。 修正済み。
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 5;

  this.show = function() {
    fill(255);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }
}