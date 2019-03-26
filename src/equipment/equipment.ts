import { Item, Colors, Message } from 'wglt';
import { Player } from '../entities/player';
import { EquipmentBuilder } from './equipmentbuilder';
import { EquipmentSlot } from './equipmentslot';
import { EquipmentMaterial } from './equipmentmaterial';
import { EquipmentQuality } from './equipmentquality';

export class Equipment extends Item {
  readonly slot: EquipmentSlot;
  readonly material: EquipmentMaterial;
  readonly quality: EquipmentQuality;
  readonly bonusArmor: number;
  readonly bonusStrength: number;
  readonly bonusDexterity: number;
  readonly bonusConstitution: number;
  readonly bonusIntelligence: number;
  readonly minDamage: number;
  readonly maxDamage: number;
  readonly ranged: boolean;
  readonly finesse: boolean;

  constructor(builder: EquipmentBuilder) {
    super(builder.game, builder.x, builder.y, builder.name, builder.sprite, false);
    this.slot = builder.slot;
    this.material = builder.material;
    this.quality = builder.quality;
    this.bonusArmor = builder.armor;
    this.bonusStrength = builder.strength;
    this.bonusDexterity = builder.dexterity;
    this.bonusConstitution = builder.constitution;
    this.bonusIntelligence = builder.intelligence;
    this.minDamage = builder.minDamage;
    this.maxDamage = builder.maxDamage;
    this.ranged = builder.ranged;
    this.finesse = builder.finesse;

    this.tooltipMessages = [];
    this.tooltipMessages.push(new Message(this.name, this.getColor(this.quality)));
    this.tooltipMessages.push(new Message('Item Level ' + builder.itemLevel, Colors.YELLOW));

    if (this.material === EquipmentMaterial.NONE) {
      this.tooltipMessages.push(new Message(this.slot, Colors.WHITE));
    } else {
      this.tooltipMessages.push(new Message(this.slot + ', ' + this.material, Colors.WHITE));
    }

    if (this.slot === EquipmentSlot.MAINHAND) {
      this.tooltipMessages.push(new Message(this.minDamage + '-' + this.maxDamage + ' Damage', Colors.YELLOW));
    }

    if (this.bonusArmor > 0) {
      this.tooltipMessages.push(new Message(this.bonusArmor + ' Armor', Colors.YELLOW));
    }

    if (this.bonusStrength > 0) {
      this.tooltipMessages.push(new Message('+' + this.bonusStrength + ' Strength', Colors.LIGHT_GREEN));
    }

    if (this.bonusDexterity > 0) {
      this.tooltipMessages.push(new Message('+' + this.bonusDexterity + ' Dexterity', Colors.LIGHT_GREEN));
    }

    if (this.bonusConstitution > 0) {
      this.tooltipMessages.push(new Message('+' + this.bonusConstitution + ' Constitution', Colors.LIGHT_GREEN));
    }

    if (this.bonusIntelligence > 0) {
      this.tooltipMessages.push(new Message('+' + this.bonusIntelligence + ' Intelligence', Colors.LIGHT_GREEN));
    }
  }

  private getColor(quality: EquipmentQuality) {
    switch (quality) {
      case EquipmentQuality.COMMON:
        return Colors.WHITE;
      case EquipmentQuality.UNCOMMON:
        return Colors.LIGHT_GREEN;
      case EquipmentQuality.RARE:
        return Colors.LIGHT_BLUE;
      case EquipmentQuality.EPIC:
        return Colors.LIGHT_MAGENTA;
      case EquipmentQuality.LEGENDARY:
        return Colors.ORANGE;
      default:
        return Colors.LIGHT_GRAY;
    }
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
