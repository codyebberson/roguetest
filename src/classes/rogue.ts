import {Message, Sprite, Talent, Colors} from 'wglt';

import {LeapAbility} from '../abilities/leap';
import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';
import { ShadowStrikeAbility } from '../abilities/shadowstrike';

const NAME = 'Rogue';
const ICON = new Sprite(144, 700, 24, 26, undefined, undefined, undefined, 0xA00000FF);
const SPRITE = new Sprite(192, 96, 16, 24, 2, true, undefined, 0xA00000FF);
const DESC = 'Lethal assasins and masters of stealth';
const DETAILS = [
  new Message('+5 Dexterity', Colors.LIGHT_GREEN),
  new Message('Stealth - go invisible for 10 turns', Colors.YELLOW),
  new Message('Shadow Strike - sneak attack from a distance', Colors.YELLOW)
];

export class Rogue extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new LeapAbility()));
    player.talents.add(new Talent(player, new ShadowStrikeAbility()));
  }
}
