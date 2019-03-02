import {Colors, Effect, Game, ProjectileEffect, Sprite, Vec2} from 'wglt';

export class ExplosionEffect extends Effect {
  readonly game: Game;
  readonly center: Vec2;
  readonly radius: number;
  readonly sprites: Sprite[];

  constructor(game: Game, center: Vec2, radius: number, duration: number) {
    super(duration, true);
    this.game = game;
    this.center = center;
    this.radius = radius;
    this.sprites = [];
  }

  update() {
    super.update();

    const game = this.game;

    for (let i = 0; i < 15; i++) {
      const x = (2.0 * (Math.random() - 0.5) * 2.0 * this.radius + this.center.x) | 0;
      const y = (2.0 * (Math.random() - 0.5) * 2.0 * this.radius + this.center.y) | 0;
      if (Math.hypot(this.center.x - x, this.center.y - y) <= this.radius) {
        const explosion = new Sprite(512, 336, 16, 24, 4, false, 4, Colors.ORANGE);
        const effect = new ProjectileEffect(
            explosion, new Vec2(x * game.tileSize.width, y * game.tileSize.height), new Vec2(0, 0), 16);
        effect.blocking = false;
        game.effects.push(effect);
      }
    }
  }
}
