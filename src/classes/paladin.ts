import {Message, Sprite, Talent, Serializable} from 'wglt';

import {FlashHealAbility} from '../abilities/flashheal';
import {LeapAbility} from '../abilities/leap';
import {LightningAbility} from '../abilities/lightning';
import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';
import { EquipmentBuilder } from '../equipment/equipmentbuilder';
import { Game } from '../game';
import { SHIRT_SPRITE_1, PANTS_SPRITE_1, MACE_SPRITE_1, BOOTS_SPRITE_1 } from '../equipment/equipmentsprites';
import { EquipmentSlot } from '../equipment/equipmentslot';
import { EquipmentType } from '../equipment/equipmenttype';
import { ItemQuality } from '../items/itemquality';
import { Colors } from '../colors';

const NAME = 'Paladin';
const ICON = new Sprite(504, 700, 24, 26, undefined, undefined, undefined, 0xFF8080FF);
const SPRITE = new Sprite(320, 96, 16, 24, 2, true, undefined, 0xFF8080FF);
const DESC = 'Holy warriors commanding the power of the light';
const DETAILS = [
  new Message('+2 Strength, +2 Intelligence', Colors.LIGHT_GREEN),
  new Message('Heroic Leap - jump up to 3 tiles and stun enemies', Colors.YELLOW)
];

@Serializable('Paladin')
export class Paladin extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    const game = player.game as Game;

    player.class = this;
    player.sprite = SPRITE;
    player.proficiencies.push(EquipmentType.CLOTH);
    player.proficiencies.push(EquipmentType.LEATHER);
    player.proficiencies.push(EquipmentType.PLATE);
    player.proficiencies.push(EquipmentType.MACE);
    player.talents.add(new Talent(player, new LeapAbility()));
    player.talents.add(new Talent(player, new LightningAbility()));
    player.talents.add(new Talent(player, new FlashHealAbility()));

    player.equipItem(new EquipmentBuilder(game)
        .withName('Squire\'s Vest')
        .withItemLevel(1)
        .withQuality(ItemQuality.COMMON)
        .withSlot(EquipmentSlot.CHEST)
        .withType(EquipmentType.PLATE)
        .withSprite(SHIRT_SPRITE_1, 0xC0A080FF)
        .withArmor(7)
        .build());

    player.equipItem(new EquipmentBuilder(game)
        .withName('Squire\'s Pants')
        .withItemLevel(1)
        .withQuality(ItemQuality.COMMON)
        .withSlot(EquipmentSlot.LEGS)
        .withType(EquipmentType.PLATE)
        .withSprite(PANTS_SPRITE_1, 0xC0A080FF)
        .withArmor(6)
        .build());

    player.equipItem(new EquipmentBuilder(game)
        .withName('Squire\'s Boots')
        .withItemLevel(1)
        .withQuality(ItemQuality.COMMON)
        .withSlot(EquipmentSlot.FEET)
        .withType(EquipmentType.PLATE)
        .withSprite(BOOTS_SPRITE_1, 0xC0A080FF)
        .withArmor(5)
        .build());

    player.equipItem(new EquipmentBuilder(game)
        .withName('Battleworn Hammer')
        .withItemLevel(1)
        .withQuality(ItemQuality.COMMON)
        .withType(EquipmentType.SWORD)
        .withSlot(EquipmentSlot.MAINHAND)
        .withDamage(1, 2)
        .withSprite(MACE_SPRITE_1, 0xC0A080FF)
        .build());

    player.strength += 2;
    player.intelligence += 2;
  }
}
