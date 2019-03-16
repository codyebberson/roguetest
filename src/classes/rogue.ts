import {Colors, Message, Sprite, Talent} from 'wglt';

import {LeapAbility} from '../abilities/leap';
import {ShadowStrikeAbility} from '../abilities/shadowstrike';
import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';
import { InitiatesVest } from '../equipment/initiatesvest';
import { InitiatesPants } from '../equipment/initiatespants';
import { InitiatesBoots } from '../equipment/initiatesboots';
import { WornDirk } from '../equipment/worndirk';

const NAME = 'Rogue';
const ICON = new Sprite(144, 700, 24, 26, undefined, undefined, undefined, 0xA00000FF);
const SPRITE = new Sprite(192, 96, 16, 24, 2, true, undefined, 0xA00000FF);
const DESC = 'Lethal assasins and masters of stealth';
const DETAILS = [
  new Message('+5 Dexterity', Colors.LIGHT_GREEN), new Message('Stealth - go invisible for 10 turns', Colors.YELLOW),
  new Message('Shadow Strike - sneak attack from a distance', Colors.YELLOW)
];

export class Rogue extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    const game = player.game;

    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new LeapAbility()));
    player.talents.add(new Talent(player, new ShadowStrikeAbility()));
    player.equipment.add(new InitiatesVest(game));
    player.equipment.add(new InitiatesPants(game));
    player.equipment.add(new InitiatesBoots(game));
    player.equipment.add(new WornDirk(game));
    player.dexterity += 5;
  }
}