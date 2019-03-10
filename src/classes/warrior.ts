import {Message, Sprite, Talent, Colors} from 'wglt';

import {LeapAbility} from '../abilities/leap';
import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';

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
    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new LeapAbility()));
    player.baseConstitution += 2;
    player.baseStrength += 5;
  }
}
