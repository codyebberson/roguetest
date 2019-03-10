import {Colors, Message, Sprite} from 'wglt';

import {Player} from '../entities/player';

import {CharacterRace} from './characterrace';

const NAME = 'Dwarf';
const ICON = new Sprite(510, 730, 34, 34, undefined, undefined, undefined, 0x4080C0FF);
const DESC = 'Bold and hardy, skilled warriors';
const DETAILS = [
  new Message('+4 Constitution, +2 Strength', Colors.LIGHT_GREEN), new Message('Critical strike bonus', Colors.YELLOW),
  new Message('Stoneform - Removes all curses', Colors.YELLOW)
];

export class Dwarf extends CharacterRace {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.race = this;
    player.constitution += 4;
    player.strength += 2;
  }
}
