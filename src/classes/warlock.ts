import {Message, Sprite, Talent, Colors} from 'wglt';

import {DemonicGatewayAbility} from '../abilities/demonicgateway';
import {LightningAbility} from '../abilities/lightning';
import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';
import { CurseAbility } from '../abilities/curse';

const NAME = 'Warlock';
const ICON = new Sprite(24, 700, 24, 26, undefined, undefined, undefined, 0xA020A0FF);
const SPRITE = new Sprite(416, 96, 16, 24, 2, true, undefined, 0xA020A0FF);
const DESC = 'Practitioners of the dark arts';
const DETAILS = [
  new Message('+5 Strength, +2 Constitution', Colors.LIGHT_GREEN),
  new Message('Demonic Gateway - teleport by dark magic', Colors.YELLOW)
];

export class Warlock extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new CurseAbility()));
    player.talents.add(new Talent(player, new LightningAbility()));
    player.talents.add(new Talent(player, new DemonicGatewayAbility()));
  }
}
