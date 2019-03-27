import { Item, Colors, Message } from 'wglt';
import { Player } from '../entities/player';
import { EquipmentBuilder } from './equipmentbuilder';
import { EquipmentSlot } from './equipmentslot';
import { EquipmentMaterial } from './equipmentmaterial';
import { EquipmentQuality } from './equipmentquality';
import { Game } from '../game';

const COLOR_POOR = 0x9D9D9DFF;
const COLOR_COMMON = 0xFFFFFFFF;
const COLOR_UNCOMMON = 0x1EFF00FF;
const COLOR_RARE = 0x0070DDFF;
const COLOR_EPIC = 0xA335EEFF;
const COLOR_LEGENDARY = 0xFF8000FF;

export class Equipment extends Item {
  readonly itemLevel: number;
  readonly slot: EquipmentSlot;
  readonly material: EquipmentMaterial;
  readonly quality: EquipmentQuality;
  readonly armor: number;
  readonly strength: number;
  readonly dexterity: number;
  readonly constitution: number;
  readonly intelligence: number;
  readonly minDamage: number;
  readonly maxDamage: number;
  readonly ranged: boolean;
  readonly finesse: boolean;

  constructor(builder: EquipmentBuilder) {
    super(builder.game, builder.x, builder.y, builder.name, builder.sprite, false);
    this.itemLevel = builder.itemLevel;
    this.slot = builder.slot;
    this.material = builder.material;
    this.quality = builder.quality;
    this.armor = builder.armor;
    this.strength = builder.strength;
    this.dexterity = builder.dexterity;
    this.constitution = builder.constitution;
    this.intelligence = builder.intelligence;
    this.minDamage = builder.minDamage;
    this.maxDamage = builder.maxDamage;
    this.ranged = builder.ranged;
    this.finesse = builder.finesse;
    this.onUpdateTooltip();
  }

  private getColor(quality: EquipmentQuality) {
    switch (quality) {
      case EquipmentQuality.COMMON:
        return COLOR_COMMON;
      case EquipmentQuality.UNCOMMON:
        return COLOR_UNCOMMON;
      case EquipmentQuality.RARE:
        return COLOR_RARE;
      case EquipmentQuality.EPIC:
        return COLOR_EPIC;
      case EquipmentQuality.LEGENDARY:
        return COLOR_LEGENDARY;
      default:
        return COLOR_POOR;
    }
  }

  onPickup(player: Player) {
    this.game.log(player.name + ' picked up a ' + this.name, this.getColor(this.quality));
  }

  onUse(player: Player) {
    const equipped = player.getEquipment(this.slot);

    if (equipped) {
      player.equipment.remove(equipped);
    }

    player.inventory.remove(this);
    player.equipment.add(this);

    if (equipped) {
      player.inventory.add(equipped);
    }

    return false;
  }

  onUpdateTooltip() {
    const game = this.game as Game;
    const player = game.player as Player;
    const equipped = player.getEquipment(this.slot);
    if (equipped && equipped !== this) {
      this.buildComparisonTooltip(equipped);
    } else {
      this.buildNormalTooltip();
    }
  }

  private buildComparisonTooltip(equipped: Equipment) {
    this.tooltipMessages = [];
    this.tooltipMessages.push(new Message(this.name, this.getColor(this.quality)));
    this.tooltipMessages.push(new Message('Item Level ' + this.itemLevel + ' (vs ' + equipped.itemLevel + ')', Colors.YELLOW));

    if (this.material === EquipmentMaterial.NONE) {
      this.tooltipMessages.push(new Message(this.slot, Colors.WHITE));
    } else {
      this.tooltipMessages.push(new Message(this.slot + ', ' + this.material, Colors.WHITE));
    }

    if (this.slot === EquipmentSlot.MAINHAND) {
      this.tooltipMessages.push(new Message(this.minDamage + '-' + this.maxDamage + ' Damage (vs ' + equipped.minDamage + '-' + equipped.maxDamage + ')', Colors.YELLOW));
    }

    if (this.armor > 0 || equipped.armor > 0) {
      this.tooltipMessages.push(new Message(this.armor + ' Armor (vs ' + equipped.armor + ')', Colors.YELLOW));
    }

    if (this.strength > 0 || equipped.strength > 0) {
      this.tooltipMessages.push(new Message('+' + this.strength + ' Strength (vs ' + equipped.strength + ')', Colors.LIGHT_GREEN));
    }

    if (this.dexterity > 0 || equipped.dexterity > 0) {
      this.tooltipMessages.push(new Message('+' + this.dexterity + ' Dexterity (vs ' + equipped.dexterity + ')', Colors.LIGHT_GREEN));
    }

    if (this.constitution > 0 || equipped.constitution > 0) {
      this.tooltipMessages.push(new Message('+' + this.constitution + ' Constitution (vs ' + equipped.constitution + ')', Colors.LIGHT_GREEN));
    }

    if (this.intelligence > 0 || equipped.intelligence > 0) {
      this.tooltipMessages.push(new Message('+' + this.intelligence + ' Intelligence (vs ' + equipped.intelligence + ')', Colors.LIGHT_GREEN));
    }
  }

  private buildNormalTooltip() {
    this.tooltipMessages = [];
    this.tooltipMessages.push(new Message(this.name, this.getColor(this.quality)));
    this.tooltipMessages.push(new Message('Item Level ' + this.itemLevel, Colors.YELLOW));

    if (this.material === EquipmentMaterial.NONE) {
      this.tooltipMessages.push(new Message(this.slot, Colors.WHITE));
    } else {
      this.tooltipMessages.push(new Message(this.slot + ', ' + this.material, Colors.WHITE));
    }

    if (this.slot === EquipmentSlot.MAINHAND) {
      this.tooltipMessages.push(new Message(this.minDamage + '-' + this.maxDamage + ' Damage', Colors.YELLOW));
    }

    if (this.armor > 0) {
      this.tooltipMessages.push(new Message(this.armor + ' Armor', Colors.YELLOW));
    }

    if (this.strength > 0) {
      this.tooltipMessages.push(new Message('+' + this.strength + ' Strength', Colors.LIGHT_GREEN));
    }

    if (this.dexterity > 0) {
      this.tooltipMessages.push(new Message('+' + this.dexterity + ' Dexterity', Colors.LIGHT_GREEN));
    }

    if (this.constitution > 0) {
      this.tooltipMessages.push(new Message('+' + this.constitution + ' Constitution', Colors.LIGHT_GREEN));
    }

    if (this.intelligence > 0) {
      this.tooltipMessages.push(new Message('+' + this.intelligence + ' Intelligence', Colors.LIGHT_GREEN));
    }
  }
}
