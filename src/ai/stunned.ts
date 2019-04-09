import { Actor, AI, Serializable } from 'wglt';

@Serializable('Stunned')
export class Stunned extends AI {
  numTurns: number;
  oldAi?: AI;

  constructor(actor: Actor, turns: number) {
    super(actor);
    this.numTurns = turns;
    this.oldAi = actor.ai;
  }

  doAi() {
    if (this.numTurns > 0) {
      // Stunned.  Sit still.
      this.numTurns--;
    } else {
      this.actor.ai = this.oldAi;
    }
  }
}
