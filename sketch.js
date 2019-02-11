let plane;
let enemyManager;
function setup() {
  createCanvas(800, 600);
  plane = new Plane();
  enemyManager = new EnemyManager(plane.bullets);
  enemyManager.AddEnemy(new Enemy());
}
function keyPressed() {
  plane.keyPressed(key, keyCode);
}
function keyReleased() {
  plane.keyReleased(key, keyCode);
}
function draw() {
  background(0);
  plane.Update();
  enemyManager.Update();
}
