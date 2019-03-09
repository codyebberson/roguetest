import {Message, Sprite} from 'wglt';

import {Player} from '../entities/player';

import {CharacterRace} from './characterrace';

const NAME = 'Undead';
const ICON = new Sprite(578, 730, 34, 34, undefined, undefined, undefined, 0xC020C0FF);
const DESC = 'Cursed to wander for eternity';
const DETAILS = [
  new Message('+2 Intelligence, +2 Wisdom', 0x00FF00FF),
  new Message('Cannibalize - When active, returns 10% of damage', 0x00FF00FF)
];

export class Undead extends CharacterRace {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.race = this;
  }
}
