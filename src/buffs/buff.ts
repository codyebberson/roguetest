import {StatsActor} from '../entities/statsactor';

export abstract class Buff {
  readonly actor: StatsActor;

  constructor(actor: StatsActor) {
    this.actor = actor;
  }

  update() {}

  isDone() {
    return false;
  }
}
