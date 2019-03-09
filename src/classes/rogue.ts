import {Message, Sprite} from 'wglt';

import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';

const NAME = 'Rogue';
const ICON = new Sprite(144, 700, 24, 26, undefined, undefined, undefined, 0xA00000FF);
const SPRITE = new Sprite(192, 96, 16, 24, 2, true, undefined, 0xA00000FF);
const DESC = 'Lethal assasins and masters of stealth';
const DETAILS = [
  new Message('+5 Dexterity', 0x00FF00FF),
  new Message('Shadow Strike - jump up to 3 tiles and stun enemies', 0x00FF00FF)
];

export class Rogue extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.class = this;
    player.sprite = SPRITE;
  }
}
