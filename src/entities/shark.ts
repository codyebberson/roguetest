import {AI, Sprite, Serializable} from 'wglt';

import {Game} from '../game';

import {Monster} from './monster';

const SPRITE = new Sprite(0, 168, 16, 24, 2, true, undefined, 0x5790b7FF);

@Serializable('SharkAI')
class SharkAI extends AI {
  doAi() {
    const shark = this.actor as Shark;
    const player = shark.game.player;
    if (!player) {
      return;
    }

    if (shark.distanceTo(player) < 2) {
      shark.attack(player, shark.getDamage());
    }
  }
}

@Serializable('Shark')
export class Shark extends Monster {
  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Shark', SPRITE, level);
    this.ai = new SharkAI(this);
  }
}