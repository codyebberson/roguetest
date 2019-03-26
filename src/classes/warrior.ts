import {Colors, Message, Sprite, Talent} from 'wglt';

import {LeapAbility} from '../abilities/leap';
import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';
import { RageAbility } from '../abilities/rage';
import { EquipmentBuilder } from '../equipment/equipmentbuilder';
import { Game } from '../game';
import { SHIRT_SPRITE_1, PANTS_SPRITE_1, MACE_SPRITE_1, SWORD_SPRITE_1, BOOTS_SPRITE_1 } from '../equipment/equipmentsprites';
import { EquipmentSlot } from '../equipment/equipmentslot';
import { EquipmentQuality } from '../equipment/equipmentquality';
import { EquipmentMaterial } from '../equipment/equipmentmaterial';
import { HealthPotion } from '../items/healthpotion';

const NAME = 'Warrior';
const ICON = new Sprite(216, 700, 24, 26, undefined, undefined, undefined, 0x804000FF);
const SPRITE = new Sprite(0, 96, 16, 24, 2, true, undefined, 0xffcf5cff);
const DESC = 'Lords of war, strength, and combat';
const DETAILS = [
  new Message('+5 Strength, +2 Constitution', Colors.LIGHT_GREEN),
  new Message('Heroic Leap - jump up to 3 tiles and stun enemies', Colors.YELLOW)
];

export class Warrior extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    const game = player.game as Game;

    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new LeapAbility()));
    player.talents.add(new Talent(player, new RageAbility()));

    for (let i = 0; i < 5; i++) {
      player.inventory.add(new HealthPotion(game));
    }

    player.equipment.add(new EquipmentBuilder(game)
        .withName('Squire\'s Vest')
        .withItemLevel(1)
        .withSlot(EquipmentSlot.CHEST)
        .withQuality(EquipmentQuality.COMMON)
        .withMaterial(EquipmentMaterial.PLATE)
        .withSprite(SHIRT_SPRITE_1, 0xC0A080FF)
        .withArmor(7)
        .build());

    player.equipment.add(new EquipmentBuilder(game)
        .withName('Squire\'s Pants')
        .withItemLevel(1)
        .withSlot(EquipmentSlot.LEGS)
        .withQuality(EquipmentQuality.COMMON)
        .withMaterial(EquipmentMaterial.PLATE)
        .withSprite(PANTS_SPRITE_1, 0xC0A080FF)
        .withArmor(6)
        .build());

    player.equipment.add(new EquipmentBuilder(game)
        .withName('Squire\'s Boots')
        .withItemLevel(1)
        .withSlot(EquipmentSlot.FEET)
        .withQuality(EquipmentQuality.COMMON)
        .withMaterial(EquipmentMaterial.PLATE)
        .withSprite(BOOTS_SPRITE_1, 0xC0A080FF)
        .withArmor(5)
        .build());

    player.equipment.add(new EquipmentBuilder(game)
        .withName('Worn Greatsword')
        .withItemLevel(1)
        .withSlot(EquipmentSlot.MAINHAND)
        .withQuality(EquipmentQuality.COMMON)
        .withDamage(1, 2)
        .withSprite(SWORD_SPRITE_1, 0xC0A080FF)
        .build());

    player.constitution += 2;
    player.strength += 5;
  }
}
