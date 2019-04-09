import {AI, Sprite, Serializable} from 'wglt';

import {Game} from '../game';

import {Monster} from './monster';
import { Player } from './player';

const SPRITE = new Sprite(192, 144, 16, 24, 2, true, undefined, 0x6757d9FF);

@Serializable('BatAI')
class BatAI extends AI {
  doAi() {
    const bat = this.actor as Bat;
    const player = bat.game.player as Player;
    if (!player) {
      return;
    }

    const rng = player.game.rng;
    if (bat.distanceTo(player) < 3 && rng.nextRange(0, 100) < 33) {
      bat.attack(player, bat.getDamage());
    } else {
      this.actor.move(rng.nextRange(-2, 3), rng.nextRange(-2, 3));
    }
  }
}

@Serializable('Bat')
export class Bat extends Monster {
  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Bat', SPRITE, level);
    this.ai = new BatAI(this);
  }
}
