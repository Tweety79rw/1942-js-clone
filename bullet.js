class Bullet extends Entity {
  constructor(x, y, center) {
    super(x + (center? -5: 0), y + (center? -10: 0), 10, 20);
    this.speed = 5;
    this.vel.y = -1;
    this.vel.mult(this.speed);
    this.remove = false;
  }
  Update() {
    super.Update();
    if(this.pos.y + this.h < 0)
      this.remove = true;
  }
  Hit() {
    this.remove = true;
  }
  Remove() {
    return this.remove;
  }
  Render() {
    fill(200);
    super.Render();
  }
}
