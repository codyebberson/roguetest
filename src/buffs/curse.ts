import {StatsActor} from '../entities/statsactor';

import {Buff} from './buff';
import { Serializable } from 'wglt';

@Serializable('Curse')
export class Curse extends Buff {
  caster: StatsActor;
  damage: number;
  countdown: number;

  constructor(caster: StatsActor, target: StatsActor, damage: number, duration: number) {
    super(target);
    this.caster = caster;
    this.damage = damage;
    this.countdown = duration;
  }

  update() {
    if (this.countdown > 0) {
      this.actor.takeDamage(this.caster, this.damage);
      this.countdown--;
    }
  }

  isDone() {
    return this.countdown <= 0;
  }
}