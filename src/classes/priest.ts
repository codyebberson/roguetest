import {Colors, Message, Sprite, Talent} from 'wglt';

import {FireballAbility} from '../abilities/fireball';
import {FlashHealAbility} from '../abilities/flashheal';
import {LightningAbility} from '../abilities/lightning';
import {Player} from '../entities/player';
import {AcolytesPants} from '../equipment/acolytespants';
import {AcolytesRobe} from '../equipment/acolytesrobe';
import {AcolytesShoes} from '../equipment/acolytesshoes';
import {BentStaff} from '../equipment/bentstaff';

import {CharacterClass} from './characterclass';

const NAME = 'Priest';
const ICON = new Sprite(0, 700, 24, 26, undefined, undefined, undefined, 0xFFFFFFFF);
const SPRITE = new Sprite(384, 96, 16, 24, 2, true, undefined, 0xf8f8f8ff);
const DESC = 'Devoted to the spiritual, powerful healing magic';
const DETAILS = [
  new Message('+5 Intelligence', Colors.LIGHT_GREEN),
  new Message('Heroic Leap - jump up to 3 tiles and stun enemies', Colors.YELLOW)
];

export class Priest extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    const game = player.game;

    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new FireballAbility()));
    player.talents.add(new Talent(player, new LightningAbility()));
    player.talents.add(new Talent(player, new FlashHealAbility()));
    player.equipment.add(new AcolytesRobe(game));
    player.equipment.add(new AcolytesPants(game));
    player.equipment.add(new AcolytesShoes(game));
    player.equipment.add(new BentStaff(game));
    player.intelligence += 5;
  }
}
