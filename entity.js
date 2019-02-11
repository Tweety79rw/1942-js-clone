class Entity {
  constructor(x, y, w, h, png) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.w = w;
    this.h = h
    this.png = png;
  }
  AddAcc(force) {
    this.acc.add(force);
  }
  Intersects(entity) {
    return !(this.pos.x > entity.pos.x + entity.w
      || this.pos.x + this.pos.w < entity.pos.x
      || this.pos.y > entity.pos.y + entity.h
      || this.pos.y + this.h < entity.pos.y);
  }
  Center() {
    return {
      x: this.pos.x + this.HalfW(),
      y: this.pos.y + this.HalfH()
    }
  }
  HalfW() {
    return this.w / 2;
  }
  HalfH() {
    return this.h / 2;
  }
  Update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  Render() {
    if(this.png == null)
      rect(this.pos.x,this.pos.y,this.w,this.h);
    else
      image(this.png, this.pos.x, this.pos.y, this.w, this.h);
  }
}
