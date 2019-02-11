class Enemy extends Entity {
  constructor() {
    super(random(width), -10, 40, 40);
    this.remove = false;
    this.vel.y = 2;
    this.health = 3;
  }
  Update() {
    super.Update();
    if(this.health == 0)
      this.remove = true;
    if(this.pos.y > height)
      this.remove = true;
    this.Render();
  }
  Render() {
    fill(255, 0 ,0);
    super.Render();
  }
  Remove() {
    return this.remove;
  }
  Hit() {
    this.health--;
  }
}
