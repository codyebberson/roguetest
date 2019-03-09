import {Message, Sprite} from 'wglt';

import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';

const NAME = 'Warlock';
const ICON = new Sprite(24, 700, 24, 26, undefined, undefined, undefined, 0xA020A0FF);
const SPRITE = new Sprite(416, 96, 16, 24, 2, true, undefined, 0xA020A0FF);
const DESC = 'Practitioners of the dark arts';
const DETAILS = [
  new Message('+5 Strength, +2 Constitution', 0x00FF00FF),
  new Message('Heroic Leap - jump up to 3 tiles and stun enemies', 0x00FF00FF)
];

export class Warlock extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.class = this;
    player.sprite = SPRITE;
  }
}
