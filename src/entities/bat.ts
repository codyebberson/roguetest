import {Game, Sprite, AI, RNG} from 'wglt';

import {Monster} from './monster';

const SPRITE = new Sprite(192, 144, 16, 24, 2, true, undefined, 0x6757d9FF);

class BatAI extends AI {
  doAi() {
    const monster = this.actor;
    const player = monster.game.player;
    if (!player) {
      return;
    }

    // TODO:  Use game.rng
    let rng = new RNG((10000 * Math.random()) | 0);

    if (monster.distanceTo(player) < 3 && rng.nextRange(0, 100) < 33) {
      monster.attack(player);
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