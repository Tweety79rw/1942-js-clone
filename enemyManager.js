class EnemyManager {
  constructor(playerBullets) {
    this.enemies = [];
    this.playerBullets = playerBullets;
  }
  AddEnemy() {
    this.enemies.push(new Enemy());
  }
  Update() {
    for(let i = this.enemies.length - 1; i >= 0; i--) {
      this.enemies[i].Update();
      for(let j = this.playerBullets.length - 1; j >= 0; j--) {
        if(this.enemies[i].Intersects(this.playerBullets[j])) {
          this.enemies[i].Hit();
          this.playerBullets[j].Hit();
        }

      }
      if(this.enemies[i].Remove()){
        this.enemies.splice(i, 1);
      }
    }
  }
}
