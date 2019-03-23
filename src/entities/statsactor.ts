import {Actor, ArrayList, Sprite} from 'wglt';

import {Buff} from '../buffs/buff';
import {Equipment, EquipmentSlot} from '../equipment/equipment';
import {Game} from '../game';
import { Weapon } from '../equipment/weapon';
import { Player } from './player';

export enum Sentiment {
  HOSTILE = -1,
  NEUTRAL = 0,
  FRIENDLY = 1
}

export class StatsActor extends Actor {
  level: number;
  mp: number;
  maxMp: number;
  armor: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  showFrame: boolean;
  sentiment: Sentiment;
  readonly equipment: ArrayList<Equipment>;
  readonly buffs: Buff[];

  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite) {
    super(game, x, y, name, sprite, true);
    this.level = 1;
    this.mp = 1;
    this.maxMp = 1;
    this.armor = 0;
    this.strength = 10;
    this.dexterity = 10;
    this.constitution = 10;
    this.intelligence = 10;
    this.showFrame = true;
    this.sentiment = Sentiment.NEUTRAL;
    this.equipment = new ArrayList<Equipment>();
    this.buffs = [];

    this.equipment.addListener({onAdd: (_, item) => this.addItem(item), onRemove: (_, item) => this.removeItem(item)});
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

  getEquipment(slot: EquipmentSlot) {
    for (let i = 0; i < this.equipment.length; i++) {
      const item = this.equipment.get(i);
      if (item.slot === slot) {
        return item;
      }
    }
    return undefined;
  }

  get mainHandWeapon() {
    return this.getEquipment(EquipmentSlot.MAINHAND) as Weapon | undefined;
  }

  getDamage(target: StatsActor) {
    const weapon = this.mainHandWeapon;
    const rng = this.game.rng;
    const damage = weapon ? rng.nextRange(weapon.minDamage, weapon.maxDamage + 1) : 1;
    const damageModifier = weapon && weapon.finesse ? this.dexterityModifier : this.strengthModifier;
    const damageResist = Math.round(0.1 * target.armor);
    return Math.max(0, damage + damageModifier - damageResist);
  }

  onBump(player: Player) {
    if (this.sentiment === Sentiment.FRIENDLY) {
      this.onTalk(player);
    } else {
      player.attack(this, player.getDamage(this));
    }
  }

  onTalk(player: Player) {}

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

  private addItem(item: Equipment) {
    this.armor += item.bonusArmor;
    this.constitution += item.bonusConstitution;
    this.dexterity += item.bonusDexterity;
    this.strength += item.bonusStrength;
    this.intelligence += item.bonusIntelligence;
  }

  private removeItem(item: Equipment) {
    this.armor -= item.bonusArmor;
    this.constitution -= item.bonusConstitution;
    this.dexterity -= item.bonusDexterity;
    this.strength -= item.bonusStrength;
    this.intelligence -= item.bonusIntelligence;
  }
}
