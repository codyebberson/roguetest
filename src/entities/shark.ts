import {AI, Game, Sprite} from 'wglt';

import {Monster} from './monster';

const SPRITE = new Sprite(0, 168, 16, 24, 2, true, undefined, 0x5790b7FF);

class SharkAI extends AI {
  doAi() {
    const monster = this.actor;
    const player = monster.game.player;
    if (!player) {
      return;
    }

    if (monster.distanceTo(player) < 2) {
      monster.attack(player);
    }
  }
}

export class Shark extends Monster {
  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'Shark', SPRITE);
    this.ai = new SharkAI(this);
  }
}