import {Message, Sprite, Serializable} from 'wglt';

import {Player} from '../entities/player';

import {CharacterRace} from './characterrace';
import { Colors } from '../colors';

const NAME = 'Human';
const ICON = new Sprite(0, 730, 34, 34, undefined, undefined, undefined, 0xddae62FF);
const DESC = 'Young race with lust for power';
const DETAILS = [
  new Message('+1 all attributes', Colors.LIGHT_GREEN),
  new Message('Reduced stun times', Colors.YELLOW),
  new Message('Hustle - when active, double actions', Colors.YELLOW),
];

@Serializable('Human')
export class Human extends CharacterRace {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.race = this;
    player.constitution++;
    player.strength++;
    player.dexterity++;
    player.intelligence++;
  }
}
