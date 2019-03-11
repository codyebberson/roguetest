import {Colors, Message, Sprite, Talent} from 'wglt';

import {LeapAbility} from '../abilities/leap';
import {Player} from '../entities/player';

import {CharacterClass} from './characterclass';
import { InitiatesVest } from '../equipment/initiatesvest';
import { InitiatesPants } from '../equipment/initiatespants';
import { InitiatesBoots } from '../equipment/initiatesboots';
import { WeatheredCrossbow } from '../equipment/weatheredcrossbow';

const NAME = 'Ranger';
const ICON = new Sprite(168, 700, 24, 26, undefined, undefined, undefined, 0x80FF80FF);
const SPRITE = new Sprite(64, 120, 16, 24, 2, true, undefined, 0x80FF80FF);
const DESC = 'Strategy and finesse, attacking from a distance';
const DETAILS = [
  new Message('+2 Strength, +2 Dexterity', Colors.LIGHT_GREEN),
  new Message('Heroic Leap - jump up to 3 tiles and stun enemies', Colors.YELLOW)
];

export class Ranger extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    const game = player.game;

    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new LeapAbility()));
    player.equipment.add(new InitiatesVest(game));
    player.equipment.add(new InitiatesPants(game));
    player.equipment.add(new InitiatesBoots(game));
    player.equipment.add(new WeatheredCrossbow(game));
    player.strength += 2;
    player.dexterity += 2;
  }
}
