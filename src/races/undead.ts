import {Colors, Message, Sprite} from 'wglt';

import {Player} from '../entities/player';

import {CharacterRace} from './characterrace';

const NAME = 'Undead';
const ICON = new Sprite(578, 730, 34, 34, undefined, undefined, undefined, 0xD040D0FF);
const DESC = 'Cursed to wander for eternity';
const DETAILS = [
  new Message('+2 Dexterity, +4 Intelligence', Colors.LIGHT_GREEN),
  new Message('Cannibalize - 10% of damage returns as health', Colors.YELLOW)
];

export class Undead extends CharacterRace {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.race = this;
    player.dexterity += 2;
    player.intelligence += 4;
  }
}