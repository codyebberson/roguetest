import {Message, Sprite, Talent, Serializable} from 'wglt';

import {CurseAbility} from '../abilities/curse';
import {DemonicGatewayAbility} from '../abilities/demonicgateway';
import {LightningAbility} from '../abilities/lightning';
import {Player} from '../entities/player';
import { PANTS_SPRITE_1, STAFF_SPRITE_1, ROBE_SPRITE_1, BOOTS_SPRITE_1 } from '../equipment/equipmentsprites';
import { EquipmentBuilder } from '../equipment/equipmentbuilder';
import { EquipmentSlot } from '../equipment/equipmentslot';
import { ItemQuality } from '../items/itemquality';
import { EquipmentType } from '../equipment/equipmenttype';

import {CharacterClass} from './characterclass';
import { Game } from '../game';
import { Colors } from '../colors';

const NAME = 'Warlock';
const ICON = new Sprite(24, 700, 24, 26, undefined, undefined, undefined, 0xA020A0FF);
const SPRITE = new Sprite(416, 96, 16, 24, 2, true, undefined, 0xA020A0FF);
const DESC = 'Practitioners of the dark arts';
const DETAILS = [
  new Message('+2 Constitution, +2 Intelligence', Colors.LIGHT_GREEN),
  new Message('Demonic Gateway - teleport by dark magic', Colors.YELLOW)
];

@Serializable('Warlock')
export class Warlock extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    const game = player.game as Game;

    player.class = this;
    player.sprite = SPRITE;
    player.proficiencies.push(EquipmentType.CLOTH);
    player.proficiencies.push(EquipmentType.STAFF);
    player.talents.add(new Talent(player, new CurseAbility()));
    player.talents.add(new Talent(player, new LightningAbility()));
    player.talents.add(new Talent(player, new DemonicGatewayAbility()));

    player.equipItem(new EquipmentBuilder(game)
        .withName('Acolyte\'s Robe')
        .withItemLevel(1)
        .withSlot(EquipmentSlot.CHEST)
        .withQuality(ItemQuality.COMMON)
        .withType(EquipmentType.CLOTH)
        .withSprite(ROBE_SPRITE_1, 0xC0A080FF)
        .withArmor(2)
        .build());

    player.equipItem(new EquipmentBuilder(game)
        .withName('Acolyte\'s Pants')
        .withItemLevel(1)
        .withSlot(EquipmentSlot.LEGS)
        .withQuality(ItemQuality.COMMON)
        .withType(EquipmentType.CLOTH)
        .withSprite(PANTS_SPRITE_1, 0xC0A080FF)
        .withArmor(2)
        .build());

    player.equipItem(new EquipmentBuilder(game)
        .withName('Acolyte\'s Shoes')
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
        .withType(EquipmentType.STAFF)
        .withSlot(EquipmentSlot.MAINHAND)
        .withQuality(ItemQuality.COMMON)
        .withDamage(1, 2)
        .withSprite(STAFF_SPRITE_1, 0xC0A080FF)
        .build());

    player.constitution += 2;
    player.intelligence += 2;
  }
}
