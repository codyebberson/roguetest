import {Actor, Sprite} from 'wglt';
import {Game} from '../game';
import { Buff } from '../buffs/buff';

export class StatsActor extends Actor {
  level: number;
  mp: number;
  maxMp: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  readonly buffs: Buff[];

  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite) {
    super(game, x, y, name, sprite, true);
    this.level = 1;
    this.mp = 1;
    this.maxMp = 1;
    this.strength = 10;
    this.dexterity = 10;
    this.constitution = 10;
    this.intelligence = 10;
    this.buffs = [];
  }

  onAttack(target: Actor, damage: number) {
    if (damage > 0) {
      this.game.log(this.name + ' attacks ' + target.name + ' for ' + damage + ' hit points.', 0x808080FF);
    } else {
      this.game.log(this.name + ' attacks ' + target.name + ' but it has no effect!', 0x808080FF);
    }
  }

  startTurn() {
    super.startTurn();
    for (let i = this.buffs.length - 1; i >= 0; i--) {
      const buff = this.buffs[i];
      buff.update();
      if (buff.isDone()) {
        this.buffs.splice(i, 1);
      }
    }
  }
}
