class Plane extends Entity {
  constructor() {
    super(width/2, height/2, 50, 50);
    this.speed = 2;
    this.bullets = [];
  }
  Up() {
    this.AddAcc(createVector(0, -1));
    this.vel.mult(this.speed);
  }
  Down() {
    this.AddAcc(createVector(0, 1));
    this.vel.mult(this.speed);
  }
  Right() {
    this.AddAcc(createVector(1, 0));
    this.vel.mult(this.speed);
  }
  Left() {
    this.AddAcc(createVector(-1, 0));
    this.vel.mult(this.speed);
  }
  StopHor() {
    this.vel.x = 0;
  }
  StopVert() {
    this.vel.y = 0;
  }
  Fire() {
    let center = super.Center();
    this.bullets.push(new Bullet(center.x, center.y, true));
  }
  Stop() {
    this.StopHor();
    this.StopVert();
  }
  keyPressed(key, keyCode) {
    if(keyCode === UP_ARROW) {
      plane.Up();
    } else if(keyCode === DOWN_ARROW) {
      plane.Down();
    }
    if(key === 'w') {
      plane.Up();
    } else if(key === 's') {
      plane.Down();
    } else if(key === 'a') {
      plane.Left();
    } else if(key === 'd') {
      plane.Right();
    }
    if(key === ' ') {
      plane.Fire();
    }
  }
  keyReleased(key, keyCode) {
    if(keyCode === UP_ARROW  || keyCode === DOWN_ARROW) {
      plane.Stop();
    }
    if(key === 'w' || key === 's') {
      plane.StopVert();
    } else if(key === 'a' || key === 'd') {
      plane.StopHor();
    }
  }
  CheckBounds() {
    if(this.pos.x < 0)
      this.pos.x = 0;
    if(this.pos.x + this.w > width)
      this.pos.x = width - this.w;
    if(this.pos.y < 0)
      this.pos.y = 0;
    if(this.pos.y > height - this.h)
      this.pos.y = height - this.h;
  }
  Update() {
    super.Update();
    this.CheckBounds();
    for(let i = this.bullets.length - 1; i >= 0; i--) {
      this.bullets[i].Update();
      if(this.bullets[i].Remove())
        this.bullets.splice(i,1);
    }
    this.Render();
  }
  Render() {
    fill(255);
    super.Render()
    for(let i = this.bullets.length - 1; i >= 0; i--) {
      this.bullets[i].Render();
    }
  }
}
