import {Colors, Message, Sprite, Talent} from 'wglt';

import {FlashHealAbility} from '../abilities/flashheal';
import {LeapAbility} from '../abilities/leap';
import {LightningAbility} from '../abilities/lightning';
import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';
import { EquipmentBuilder } from '../equipment/equipmentbuilder';
import { Game } from '../game';
import { SHIRT_SPRITE_1, PANTS_SPRITE_1, MACE_SPRITE_1, BOOTS_SPRITE_1 } from '../equipment/equipmentsprites';
import { EquipmentSlot } from '../equipment/equipmentslot';
import { EquipmentQuality } from '../equipment/equipmentquality';
import { EquipmentMaterial } from '../equipment/equipmentmaterial';

const NAME = 'Paladin';
const ICON = new Sprite(504, 700, 24, 26, undefined, undefined, undefined, 0xFF8080FF);
const SPRITE = new Sprite(320, 96, 16, 24, 2, true, undefined, 0xFF8080FF);
const DESC = 'Holy warriors commanding the power of the light';
const DETAILS = [
  new Message('+2 Strength, +2 Intelligence', Colors.LIGHT_GREEN),
  new Message('Heroic Leap - jump up to 3 tiles and stun enemies', Colors.YELLOW)
];

export class Paladin extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    const game = player.game as Game;

    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new LeapAbility()));
    player.talents.add(new Talent(player, new LightningAbility()));
    player.talents.add(new Talent(player, new FlashHealAbility()));

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
        .withName('Battleworn Hammer')
        .withItemLevel(1)
        .withSlot(EquipmentSlot.MAINHAND)
        .withQuality(EquipmentQuality.COMMON)
        .withDamage(1, 2)
        .withSprite(MACE_SPRITE_1, 0xC0A080FF)
        .build());

    player.strength += 2;
    player.intelligence += 2;
  }
}
