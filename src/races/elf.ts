import {Colors, Message, Sprite, Serializable} from 'wglt';

import {Player} from '../entities/player';

import {CharacterRace} from './characterrace';

const NAME = 'Elf';
const ICON = new Sprite(238, 730, 34, 34, undefined, undefined, undefined, 0xFF8080FF);
const DESC = 'Magical people of otherworldly grace';
const DETAILS = [
  new Message('+3 Dexterity, +3 Intelligence', Colors.LIGHT_GREEN),
  new Message('Shadowmeld - slip into the shadows', Colors.YELLOW)
];

@Serializable('Elf')
export class Elf extends CharacterRace {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.race = this;
    player.dexterity += 3;
    player.intelligence += 3;
  }
}
