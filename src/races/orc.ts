import {Colors, Message, Sprite, Serializable} from 'wglt';

import {Player} from '../entities/player';

import {CharacterRace} from './characterrace';

const NAME = 'Orc';
const ICON = new Sprite(442, 730, 34, 34, undefined, undefined, undefined, 0x20B020FF);
const DESC = 'Noble savages of shamanistic roots';
const DETAILS = [
  new Message('+2 Constitution, +4 Strength', Colors.LIGHT_GREEN),
  new Message('War Shout - Boost all stats by +1 for 5 turns', Colors.YELLOW)
];

@Serializable('Orc')
export class Orc extends CharacterRace {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.race = this;
    player.constitution += 2;
    player.strength += 4;
  }
}
