import {StatsActor} from '../entities/statsactor';

import {Buff} from './buff';
import { Sprite, Color } from 'wglt';

const COLOR = 0xAADDFFFF as Color;
const SPRITE = new Sprite(608, 408, 16, 24, 2, true, undefined, COLOR);

export class Bubble extends Buff {
  remaining: number;

  constructor(actor: StatsActor, remaining: number) {
    super(actor);
    this.remaining = remaining;
  }

  modifyDamageTaken(damage: number) {
    if (damage <= 0) {
      return damage;
    }

    const absorb = Math.min(this.remaining, damage);
    this.remaining -= absorb;
    if (this.remaining <= 0) {
      this.actor.game.log('Absorbed the last ' + absorb + ' of the bubble!', COLOR);
    } else {
      this.actor.game.log('Bubble absorbed ' + absorb + ' damage.', COLOR);
    }
    return damage - absorb;
  }

  draw() {
    const actor = this.actor;
    const game = actor.game;
    const app = game.app;
    SPRITE.draw(app, actor.pixelX - game.viewport.x, actor.pixelY - game.viewport.y);
  }

  isDone() {
    return this.remaining <= 0;
  }
}