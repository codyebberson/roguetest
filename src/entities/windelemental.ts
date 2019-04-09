import {AI, Sprite, Talent, Serializable} from 'wglt';

import {LeapAbility} from '../abilities/leap';
import {Game} from '../game';

import {Monster} from './monster';
import {Player} from './player';
import { Sentiment } from './statsactor';

const SPRITE = new Sprite(288, 312, 16, 24, 2, true, undefined, 0xAADDFFFF);
const DAMAGE = 10;

@Serializable('WindElementalAI')
class WindElementalAI extends AI {
  doAi() {
    const actor = this.actor as WindElemental;
    const game = actor.game as Game;
    const player = game.player as Player;
    if (!player || player.hp <= 0) {
      return;
    }

    const dist = actor.distanceTo(player);
    if (dist <= 2) {
      actor.attack(player, DAMAGE);
    } else {
      const rng = player.game.rng;
      actor.move(rng.nextRange(-1, 2), rng.nextRange(-1, 2));
    }
  }
}

@Serializable('WindElemental')
export class WindElemental extends Monster {

  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Wind', SPRITE, level);
    this.maxHp = 10 * this.level;
    this.hp = this.maxHp;
    this.ai = new WindElementalAI(this);
    this.talents.add(new Talent(this, new LeapAbility()));
    this.sentiment = Sentiment.HOSTILE;
  }

  get leapTalent() {
    return this.talents.get(0);
  }
}
