import { Colors, Message, CompoundMessage, Serializable } from 'wglt';
import { Player } from '../entities/player';
import { EquipmentBuilder } from './equipmentbuilder';
import { EquipmentSlot } from './equipmentslot';
import { EquipmentMaterial } from './equipmentmaterial';
import { Game } from '../game';
import { BaseItem } from '../items/baseitem';

@Serializable('Equipment')
export class Equipment extends BaseItem {
  readonly slot: EquipmentSlot;
  readonly material: EquipmentMaterial;
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
    const sellPrice = 10 * builder.itemLevel;
    super(builder.game, builder.name, builder.sprite, builder.quality, builder.itemLevel, 0, sellPrice);
    this.slot = builder.slot;
    this.material = builder.material;
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

  isStackable() {
    return false;
  }

  onPickup(player: Player) {
    this.game.log(new CompoundMessage(
      new Message(player.name + ' picked up ', Colors.WHITE),
      new Message('[' + this.name + ']', this.getColor(this.quality))
    ));
  }

  onUse(player: Player) {
    player.equipItem(this);
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
