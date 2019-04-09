import { StatsActor } from '../entities/statsactor';

import { Buff } from './buff';
import { Sprite, Color, Serializable } from 'wglt';

const COLOR = 0xDD2222FF as Color;
const SPRITE = new Sprite(640, 408, 16, 24, 2, true, undefined, COLOR);

@Serializable('Rage')
export class Rage extends Buff {
  countdown: number;

  constructor(actor: StatsActor, countdown: number) {
    super(actor);
    this.countdown = countdown;
  }

  update() {
    if (this.countdown > 0) {
      this.countdown--;
    }
  }

  modifyDamageDealt(damage: number) {
    if (damage <= 0) {
      return damage;
    }

    return damage * 2;
  }

  draw() {
    const actor = this.actor;
    const game = actor.game;
    const app = game.app;
    SPRITE.draw(app, actor.pixelX - game.viewport.x, actor.pixelY - game.viewport.y);
  }

  isDone() {
    return this.countdown <= 0;
  }
}