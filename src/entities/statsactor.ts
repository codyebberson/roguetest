import {Actor, Sprite} from 'wglt';
import {Game} from '../game';
import { Buff } from '../buffs/buff';

export class StatsActor extends Actor {
  level: number;
  mp: number;
  maxMp: number;
  baseStrength: number;
  baseDexterity: number;
  baseConstitution: number;
  baseIntelligence: number;
  readonly buffs: Buff[];

  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite) {
    super(game, x, y, name, sprite, true);
    this.level = 1;
    this.mp = 1;
    this.maxMp = 1;
    this.baseStrength = 10;
    this.baseDexterity = 10;
    this.baseConstitution = 10;
    this.baseIntelligence = 10;
    this.buffs = [];
  }

  get strength() {
    return this.baseStrength;
  }

  get dexterity() {
    return this.baseDexterity;
  }

  get constitution() {
    return this.baseConstitution;
  }

  get intelligence() {
    return this.baseIntelligence;
  }

  get strengthModifier() {
    return this.calculateModifier(this.strength);
  }

  get dexterityModifier() {
    return this.calculateModifier(this.dexterity);
  }

  get constitutionModifier() {
    return this.calculateModifier(this.constitution);
  }

  get intelligenceModifier() {
    return this.calculateModifier(this.intelligence);
  }

  private calculateModifier(abilityScore: number) {
    return Math.floor((abilityScore - 10) / 2);
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
