import { Game, Serializable } from 'wglt';
import { Monster } from '../entities/monster';
import { Player } from '../entities/player';
import { Door } from './door';

@Serializable('BossDoor')
export class BossDoor extends Door {
  readonly boss: Monster;

  constructor(game: Game, x: number, y: number, boss: Monster) {
    super(game, x, y);
    this.boss = boss;
    this.zIndex = 0;
  }

  onBump(player: Player) {
    if (this.boss.hp <= 0) {
      // Boss is dead
      this.openDoor();
      player.moveTo(this.x, this.y);
      return true;
    }

    const dotProduct =
      (this.x - player.x) * (this.boss.x - player.x) +
      (this.y - player.y) * (this.boss.y - player.y);

    if (dotProduct > 0) {
      // Walking toward the boss
      const dx = this.x - player.x;
      const dy = this.y - player.y;
      player.move(dx * 2, dy * 2);
      return true;
    }

    // Otherwise, door is locked
    return false;
  }
}
