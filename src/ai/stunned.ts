import {Actor, AI, Colors} from 'wglt';

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
      this.actor.addFloatingText('?', Colors.LIGHT_GRAY);
      this.numTurns--;
    } else {
      this.actor.ai = this.oldAi;
    }
  }
}
