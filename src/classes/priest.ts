import {Message, Sprite, Talent, Serializable} from 'wglt';

import {FireballAbility} from '../abilities/fireball';
import {FlashHealAbility} from '../abilities/flashheal';
import {LightningAbility} from '../abilities/lightning';
import { Game } from '../game';
import {Player} from '../entities/player';
import {CharacterClass} from './characterclass';
import { BubbleAbility } from '../abilities/bubble';
import { PANTS_SPRITE_1, STAFF_SPRITE_1, BOOTS_SPRITE_1, ROBE_SPRITE_1 } from '../equipment/equipmentsprites';
import { EquipmentBuilder } from '../equipment/equipmentbuilder';
import { EquipmentSlot } from '../equipment/equipmentslot';
import { EquipmentType } from '../equipment/equipmenttype';
import { ItemQuality } from '../items/itemquality';
import { Colors } from '../colors';

const NAME = 'Priest';
const ICON = new Sprite(0, 700, 24, 26, undefined, undefined, undefined, 0xFFFFFFFF);
const SPRITE = new Sprite(384, 96, 16, 24, 2, true, undefined, 0xf8f8f8ff);
const DESC = 'Devoted to the spiritual, powerful healing magic';
const DETAILS = [
  new Message('+5 Intelligence', Colors.LIGHT_GREEN),
  new Message('Heroic Leap - jump up to 3 tiles and stun enemies', Colors.YELLOW)
];

@Serializable('Priest')
export class Priest extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    const game = player.game as Game;

    player.class = this;
    player.sprite = SPRITE;
    player.proficiencies.push(EquipmentType.CLOTH);
    player.proficiencies.push(EquipmentType.STAFF);
    player.talents.add(new Talent(player, new FireballAbility()));
    player.talents.add(new Talent(player, new LightningAbility()));
    player.talents.add(new Talent(player, new FlashHealAbility()));
    player.talents.add(new Talent(player, new BubbleAbility()));

    player.equipItem(new EquipmentBuilder(game)
        .withName('Neophyte\'s Robe')
        .withItemLevel(1)
        .withSlot(EquipmentSlot.CHEST)
        .withQuality(ItemQuality.COMMON)
        .withType(EquipmentType.CLOTH)
        .withSprite(ROBE_SPRITE_1, 0xC0A080FF)
        .withArmor(2)
        .build());

    player.equipItem(new EquipmentBuilder(game)
        .withName('Neophyte\'s Pants')
        .withItemLevel(1)
        .withSlot(EquipmentSlot.LEGS)
        .withQuality(ItemQuality.COMMON)
        .withType(EquipmentType.CLOTH)
        .withSprite(PANTS_SPRITE_1, 0xC0A080FF)
        .withArmor(2)
        .build());

    player.equipItem(new EquipmentBuilder(game)
        .withName('Neophyte\'s Shoes')
        .withItemLevel(1)
        .withSlot(EquipmentSlot.FEET)
        .withQuality(ItemQuality.COMMON)
        .withType(EquipmentType.CLOTH)
        .withSprite(BOOTS_SPRITE_1, 0xC0A080FF)
        .withArmor(1)
        .build());

    player.equipItem(new EquipmentBuilder(game)
        .withName('Bent Staff')
        .withItemLevel(1)
        .withSlot(EquipmentSlot.MAINHAND)
        .withType(EquipmentType.STAFF)
        .withQuality(ItemQuality.COMMON)
        .withDamage(1, 2)
        .withSprite(STAFF_SPRITE_1, 0xC0A080FF)
        .build());

    player.intelligence += 5;
  }
}
