import { Colors, Message, Sprite, Talent, Serializable } from 'wglt';

import { LeapAbility } from '../abilities/leap';
import { Player } from '../entities/player';

import { CharacterClass } from './characterclass';
import { ShootAbility } from '../abilities/shoot';
import { Game } from '../game';
import { SHIRT_SPRITE_1, PANTS_SPRITE_1, CROSSBOW_SPRITE_1, BOOTS_SPRITE_1 } from '../equipment/equipmentsprites';
import { EquipmentBuilder } from '../equipment/equipmentbuilder';
import { EquipmentSlot } from '../equipment/equipmentslot';
import { ItemQuality } from '../items/itemquality';
import { EquipmentMaterial } from '../equipment/equipmentmaterial';

const NAME = 'Ranger';
const ICON = new Sprite(168, 700, 24, 26, undefined, undefined, undefined, 0x80FF80FF);
const SPRITE = new Sprite(64, 120, 16, 24, 2, true, undefined, 0x80FF80FF);
const DESC = 'Strategy and finesse, attacking from a distance';
const DETAILS = [
  new Message('+2 Strength, +2 Dexterity', Colors.LIGHT_GREEN),
  new Message('Heroic Leap - jump up to 3 tiles and stun enemies', Colors.YELLOW)
];

@Serializable('Ranger')
export class Ranger extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    const game = player.game as Game;

    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new ShootAbility()));
    player.talents.add(new Talent(player, new LeapAbility()));

    player.equipment.add(new EquipmentBuilder(game)
      .withName('Trapper\'s Vest')
      .withItemLevel(1)
      .withSlot(EquipmentSlot.CHEST)
      .withQuality(ItemQuality.COMMON)
      .withMaterial(EquipmentMaterial.LEATHER)
      .withSprite(SHIRT_SPRITE_1, 0xC0A080FF)
      .withArmor(7)
      .build());

    player.equipment.add(new EquipmentBuilder(game)
      .withName('Trapper\'s Pants')
      .withItemLevel(1)
      .withSlot(EquipmentSlot.LEGS)
      .withQuality(ItemQuality.COMMON)
      .withMaterial(EquipmentMaterial.LEATHER)
      .withSprite(PANTS_SPRITE_1, 0xC0A080FF)
      .withArmor(6)
      .build());

    player.equipment.add(new EquipmentBuilder(game)
      .withName('Trapper\'s Boots')
      .withItemLevel(1)
      .withSlot(EquipmentSlot.FEET)
      .withQuality(ItemQuality.COMMON)
      .withMaterial(EquipmentMaterial.LEATHER)
      .withSprite(BOOTS_SPRITE_1, 0xC0A080FF)
      .withArmor(5)
      .build());

    player.equipment.add(new EquipmentBuilder(game)
      .withName('Weathered Crossbow')
      .withItemLevel(1)
      .withSlot(EquipmentSlot.MAINHAND)
      .withQuality(ItemQuality.COMMON)
      .withDamage(1, 2, true, true)
      .withSprite(CROSSBOW_SPRITE_1, 0xC0A080FF)
      .build());

    player.strength += 2;
    player.dexterity += 2;
  }
}
