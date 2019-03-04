import {AI, Game, Sprite} from 'wglt';

import {Monster} from './monster';

const SPRITE = new Sprite(192, 144, 16, 24, 2, true, undefined, 0x6757d9FF);
const DAMAGE = 8;

class BatAI extends AI {
  doAi() {
    const monster = this.actor;
    const player = monster.game.player;
    if (!player) {
      return;
    }

    const rng = player.game.rng;
    if (monster.distanceTo(player) < 3 && rng.nextRange(0, 100) < 33) {
      monster.attack(player, DAMAGE);
    } else {
      this.actor.move(rng.nextRange(-2, 3), rng.nextRange(-2, 3));
    }
  }
}

export class Bat extends Monster {
  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'Bat', SPRITE);
    this.ai = new BatAI(this);
  }
}