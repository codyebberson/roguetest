import { Game, Item, Sprite } from 'wglt';
import { Monster } from '../entities/monster';
import { Player } from '../entities/player';

const SPRITE = new Sprite(256, 432, 16, 24, 1, true, undefined, 0x804020FF);

export class BossDoor extends Item {
  readonly boss: Monster;

  constructor(game: Game, x: number, y: number, boss: Monster) {
    super(game, x, y, 'door', SPRITE, true);
    this.boss = boss;
    this.zIndex = 0;
  }

  onBump(player: Player) {
    if (this.boss.hp <= 0) {
      // Boss is dead
      this.game.entities.remove(this);
      player.moveTo(this.x, this.y);
    }

    const dotProduct =
        (this.x - player.x) * (this.boss.x - player.x) +
        (this.y - player.y) * (this.boss.y - player.y);

    if (dotProduct > 0) {
      // Walking toward the boss
      const dx = this.x - player.x;
      const dy = this.y - player.y;
      player.move(dx * 2, dy * 2);
    }
  }
}
