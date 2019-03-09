import {Message, Sprite} from 'wglt';

import {Player} from '../entities/player';

import {CharacterRace} from './characterrace';

const NAME = 'Dwarf';
const ICON = new Sprite(510, 730, 34, 34, undefined, undefined, undefined, 0x4080C0FF);
const DESC = 'Bold and hardy, skilled warriors';
const DETAILS =
    [new Message('+4 Constitution, +2 Strength', 0x00FF00FF), new Message('Critical strike bonus', 0x00FF00FF)];

export class Dwarf extends CharacterRace {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.race = this;
  }
}
