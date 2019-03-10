import {Message, Sprite, Talent} from 'wglt';

import {LeapAbility} from '../abilities/leap';
import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';

const NAME = 'Ranger';
const ICON = new Sprite(168, 700, 24, 26, undefined, undefined, undefined, 0x80FF80FF);
const SPRITE = new Sprite(64, 120, 16, 24, 2, true, undefined, 0x80FF80FF);
const DESC = 'Battle from a distance';
const DETAILS = [
  new Message('+2 Strength, +2 Dexterity', 0x00FF00FF),
  new Message('Heroic Leap - jump up to 3 tiles and stun enemies', 0x00FF00FF)
];

export class Ranger extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new LeapAbility()));
  }
}
