import {Message, Sprite, Talent, Colors} from 'wglt';

import {LeapAbility} from '../abilities/leap';
import {LightningAbility} from '../abilities/lightning';
import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';

const NAME = 'Paladin';
const ICON = new Sprite(504, 700, 24, 26, undefined, undefined, undefined, 0xFF8080FF);
const SPRITE = new Sprite(320, 96, 16, 24, 2, true, undefined, 0xFF8080FF);
const DESC = 'Holy warriors commanding the power of the light';
const DETAILS = [
  new Message('+2 Strength, +2 Intelligence', Colors.LIGHT_GREEN),
  new Message('Heroic Leap - jump up to 3 tiles and stun enemies', Colors.YELLOW)
];

export class Paladin extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new LeapAbility()));
    player.talents.add(new Talent(player, new LightningAbility()));
    player.baseStrength += 2;
    player.baseIntelligence += 2;
  }
}
