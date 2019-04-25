import { Message, Serializable, CompoundMessage } from 'wglt';
import { Player } from '../entities/player';
import { EquipmentBuilder } from './equipmentbuilder';
import { EquipmentSlot } from './equipmentslot';
import { Game } from '../game';
import { BaseItem } from '../items/baseitem';
import { EquipmentType } from './equipmenttype';
import { Colors } from '../colors';

@Serializable('Equipment')
export class Equipment extends BaseItem {
  readonly type: EquipmentType;
  readonly slot: EquipmentSlot;
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
    this.type = builder.type;
    this.slot = builder.slot;
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

  onUse(player: Player) {
    return player.equipItem(this);
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
    this.tooltipMessages.push(new CompoundMessage(
      new Message('Item Level ' + this.itemLevel, Colors.YELLOW),
      compMessage(this.itemLevel, equipped.itemLevel),
    ));

    if (this.type === EquipmentType.NONE) {
      this.tooltipMessages.push(new Message(this.slot, Colors.WHITE));
    } else {
      this.tooltipMessages.push(new Message(this.slot + ', ' + this.type, Colors.WHITE));
    }

    if (this.slot === EquipmentSlot.MAINHAND) {
      this.tooltipMessages.push(new CompoundMessage(
        new Message(this.minDamage + '-' + this.maxDamage + ' Damage', Colors.YELLOW),
        compMessage(this.minDamage, equipped.minDamage),
      ));
    }

    if (this.armor > 0 || equipped.armor > 0) {
      this.tooltipMessages.push(new CompoundMessage(
        new Message(this.armor + ' Armor', Colors.YELLOW),
        compMessage(this.armor, equipped.armor),
      ));
    }

    if (this.strength > 0 || equipped.strength > 0) {
      this.tooltipMessages.push(new CompoundMessage(
        new Message(this.strength + ' Strength', Colors.LIGHT_GREEN),
        compMessage(this.strength, equipped.strength),
      ));
    }

    if (this.dexterity > 0 || equipped.dexterity > 0) {
      this.tooltipMessages.push(new CompoundMessage(
        new Message(this.dexterity + ' Dexterity', Colors.LIGHT_GREEN),
        compMessage(this.dexterity, equipped.dexterity),
      ));
    }

    if (this.constitution > 0 || equipped.constitution > 0) {
      this.tooltipMessages.push(new CompoundMessage(
        new Message(this.constitution + ' Constitution', Colors.LIGHT_GREEN),
        compMessage(this.constitution, equipped.constitution),
      ));
    }

    if (this.intelligence > 0 || equipped.intelligence > 0) {
      this.tooltipMessages.push(new CompoundMessage(
        new Message(this.intelligence + ' Intelligence', Colors.LIGHT_GREEN),
        compMessage(this.intelligence, equipped.intelligence),
      ));
    }

    if (this.sellPrice > 0 || equipped.sellPrice > 0) {
      this.tooltipMessages.push(new CompoundMessage(
        new Message('Sell Price: ' + this.sellPrice, Colors.WHITE),
        compMessage(this.sellPrice, equipped.sellPrice),
      ));
    }
  }

  private buildNormalTooltip() {
    this.tooltipMessages = [];
    this.tooltipMessages.push(new Message(this.name, this.getColor(this.quality)));
    this.tooltipMessages.push(new Message('Item Level ' + this.itemLevel, Colors.YELLOW));

    if (this.type === EquipmentType.NONE) {
      this.tooltipMessages.push(new Message(this.slot, Colors.WHITE));
    } else {
      this.tooltipMessages.push(new Message(this.slot + ', ' + this.type, Colors.WHITE));
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

    if (this.sellPrice > 0) {
      this.tooltipMessages.push(new Message('Sell Price: ' + this.sellPrice, Colors.WHITE));
    }
  }
}

function compMessage(current: number, equipped: number) {
  if (current === equipped) {
    return new Message('', Colors.WHITE);
  }
  if (current < equipped) {
    return new Message(' (-' + (equipped - current) + ')', Colors.RED);
  }
  return new Message(' (+' + (current - equipped) + ')', Colors.LIGHT_GREEN);
}
