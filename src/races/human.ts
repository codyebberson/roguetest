import {Message, Sprite} from 'wglt';

import {Player} from '../entities/player';

import {CharacterRace} from './characterrace';

const NAME = 'Human';
const ICON = new Sprite(0, 730, 34, 34, undefined, undefined, undefined, 0xC0A040FF);
const DESC = 'Young race with lust for power';
const DETAILS = [new Message('+1 all attributes', 0x00FF00FF), new Message('Reduced stun times', 0x00FF00FF)];

export class Human extends CharacterRace {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.race = this;
  }
}
