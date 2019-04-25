import { Message, Sprite, Talent, Serializable } from 'wglt';

import { LeapAbility } from '../abilities/leap';
import { ShadowStrikeAbility } from '../abilities/shadowstrike';
import { Player } from '../entities/player';

import { CharacterClass } from './characterclass';
import { EquipmentSlot } from '../equipment/equipmentslot';
import { EquipmentType } from '../equipment/equipmenttype';
import { SHIRT_SPRITE_1, PANTS_SPRITE_1, BOOTS_SPRITE_1, DAGGER_SPRITE_1 } from '../equipment/equipmentsprites';
import { EquipmentBuilder } from '../equipment/equipmentbuilder';
import { Game } from '../game';
import { HealthPotion } from '../items/healthpotion';
import { ItemQuality } from '../items/itemquality';
import { Colors } from '../colors';

const NAME = 'Rogue';
const ICON = new Sprite(144, 700, 24, 26, undefined, undefined, undefined, 0xA00000FF);
const SPRITE = new Sprite(192, 96, 16, 24, 2, true, undefined, 0xA00000FF);
const DESC = 'Lethal assasins and masters of stealth';
const DETAILS = [
  new Message('+5 Dexterity', Colors.LIGHT_GREEN),
  new Message('Stealth - go invisible for 10 turns', Colors.YELLOW),
  new Message('Shadow Strike - sneak attack from a distance', Colors.YELLOW)
];

@Serializable('Rogue')
export class Rogue extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    const game = player.game as Game;

    player.class = this;
    player.sprite = SPRITE;
    player.proficiencies.push(EquipmentType.CLOTH);
    player.proficiencies.push(EquipmentType.LEATHER);
    player.proficiencies.push(EquipmentType.DAGGER);
    player.talents.add(new Talent(player, new LeapAbility()));
    player.talents.add(new Talent(player, new ShadowStrikeAbility()));

    for (let i = 0; i < 5; i++) {
      player.inventory.add(new HealthPotion(game));
    }

    player.equipItem(new EquipmentBuilder(game)
      .withName('Footpad\'s Vest')
      .withItemLevel(1)
      .withSlot(EquipmentSlot.CHEST)
      .withQuality(ItemQuality.COMMON)
      .withType(EquipmentType.LEATHER)
      .withSprite(SHIRT_SPRITE_1, 0xC0A080FF)
      .withArmor(7)
      .build());

    player.equipItem(new EquipmentBuilder(game)
      .withName('Footpad\'s Pants')
      .withItemLevel(1)
      .withSlot(EquipmentSlot.LEGS)
      .withQuality(ItemQuality.COMMON)
      .withType(EquipmentType.LEATHER)
      .withSprite(PANTS_SPRITE_1, 0xC0A080FF)
      .withArmor(6)
      .build());

    player.equipItem(new EquipmentBuilder(game)
      .withName('Footpad\'s Boots')
      .withItemLevel(1)
      .withSlot(EquipmentSlot.FEET)
      .withQuality(ItemQuality.COMMON)
      .withType(EquipmentType.LEATHER)
      .withSprite(BOOTS_SPRITE_1, 0xC0A080FF)
      .withArmor(5)
      .build());

    player.equipItem(new EquipmentBuilder(game)
      .withName('Worn Dirk')
      .withItemLevel(1)
      .withType(EquipmentType.DAGGER)
      .withSlot(EquipmentSlot.MAINHAND)
      .withQuality(ItemQuality.COMMON)
      .withDamage(1, 2, false, true)
      .withSprite(DAGGER_SPRITE_1, 0xC0A080FF)
      .build());

    player.dexterity += 5;
  }
}
