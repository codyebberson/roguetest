import {Colors, Effect, Game, ProjectileEffect, Sprite, Vec2} from 'wglt';

export class ExplosionEffect extends Effect {
  readonly game: Game;
  readonly center: Vec2;
  readonly radius: number;
  readonly duration: number;
  readonly sprites: Sprite[];

  constructor(game: Game, center: Vec2, radius: number, duration: number) {
    super(duration, true);
    this.game = game;
    this.center = center;
    this.radius = radius;
    this.duration = duration;
    this.sprites = [];
  }

  update() {
    super.update();

    const game = this.game;
    const maxRadius = this.radius * (1.0 - (this.countdown + 1) / (this.duration + 1));
    const centerX = (this.center.x) * game.tileSize.width;
    const centerY = (this.center.y) * game.tileSize.height;

    for (let i = 0; i < 3; i++) {
      const radius = maxRadius;
      const angle = this.countdown + i;
      const x = centerX + game.tileSize.width * radius * Math.cos(angle);
      const y = centerY + game.tileSize.height * radius * Math.sin(angle);
      const explosion = new Sprite(512, 336, 16, 24, 4, false, 4, Colors.ORANGE);
      const effect = new ProjectileEffect(explosion, new Vec2(x, y), new Vec2(0, 0), 16);
      effect.blocking = false;
      game.effects.push(effect);
    }
  }
}
