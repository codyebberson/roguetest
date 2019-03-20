import {Colors, Message, Sprite, Talent} from 'wglt';

import {LeapAbility} from '../abilities/leap';
import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';
import { SquiresVest } from '../equipment/squiresvest';
import { SquiresPants } from '../equipment/squirespants';
import { SquiresBoots } from '../equipment/squiresboots';
import { WornGreatsword } from '../equipment/worngreatsword';
import { WornDirk } from '../equipment/worndirk';

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
    const game = player.game;

    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new LeapAbility()));
    player.equipment.add(new SquiresVest(game));
    player.equipment.add(new SquiresPants(game));
    player.equipment.add(new SquiresBoots(game));
    player.equipment.add(new WornGreatsword(game));
    player.inventory.add(new WornDirk(game));
    player.constitution += 2;
    player.strength += 5;
  }
}
