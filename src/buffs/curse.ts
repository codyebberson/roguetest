import { Buff } from "./buff";
import { StatsActor } from "../entities/statsactor";

export class Curse extends Buff {
  damage: number;
  countdown: number;

  constructor(actor: StatsActor, damage: number, duration: number) {
    super(actor);
    this.damage = damage;
    this.countdown = duration;
  }

  update() {
    if (this.countdown > 0) {
      this.actor.takeDamage(this.damage);
      this.countdown--;
    }
  }

  isDone() {
    return this.countdown <= 0;
  }
}