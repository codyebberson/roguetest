import {Message, Sprite} from 'wglt';

import {Player} from '../entities/player';

import {CharacterRace} from './characterrace';

const NAME = 'Elf';
const ICON = new Sprite(238, 730, 34, 34, undefined, undefined, undefined, 0xF08080FF);
const DESC = 'Magical people of otherworldly grace';
const DETAILS = [
  new Message('+3 Dexterity, +3 Intelligence', 0x00FF00FF),
  new Message('Shadowmeld - slip into the shadows', 0x00FF00FF)
];

export class Elf extends CharacterRace {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.race = this;
  }
}
