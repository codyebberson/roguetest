import {AI, Sprite, Vec2, Serializable} from 'wglt';

import {Game} from '../game';

import {Monster} from './monster';

const SPRITE = new Sprite(352, 144, 16, 24, 2, true, undefined, 0xe08020ff);

@Serializable('CatAI')
class CatAI extends AI {
  doAi() {
    const monster = this.actor;
    const player = monster.game.player;
    if (!player) {
      return;
    }

    const rng = player.game.rng;
    this.actor.move(rng.nextRange(-2, 3), rng.nextRange(-2, 3));
  }
}

@Serializable('Cat')
export class Cat extends Monster {
  destination?: Vec2;

  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'Cat', SPRITE, 1);
    this.ai = new CatAI(this);
  }
}
