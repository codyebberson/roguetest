import {Game, Item, Sprite} from 'wglt';
import { Player } from '../entities/player';

export enum EquipmentSlot {
  HEAD,
  NECK,
  BACK,
  CHEST,
  HANDS,
  LEGS,
  FEET,
  RING,
  MAINHAND,
  OFFHAND
}

export abstract class Equipment extends Item {
  readonly slot: EquipmentSlot;
  bonusArmor: number;
  bonusStrength: number;
  bonusDexterity: number;
  bonusConstitution: number;
  bonusIntelligence: number;

  constructor(game: Game, x: number, y: number, name: string, sprite: Sprite, slot: EquipmentSlot) {
    super(game, x, y, name, sprite, false);
    this.slot = slot;
    this.bonusArmor = 0;
    this.bonusStrength = 0;
    this.bonusDexterity = 0;
    this.bonusConstitution = 0;
    this.bonusIntelligence = 0;
  }

  onUse(player: Player) {
    const equipped = player.getEquipment(this.slot);
    if (equipped) {
      player.equipment.remove(equipped);
      player.inventory.add(equipped);
    }

    player.inventory.remove(this);
    player.equipment.add(this);
    return false;
  }
}
