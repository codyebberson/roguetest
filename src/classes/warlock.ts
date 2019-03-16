import {Colors, Message, Sprite, Talent} from 'wglt';

import {CurseAbility} from '../abilities/curse';
import {DemonicGatewayAbility} from '../abilities/demonicgateway';
import {LightningAbility} from '../abilities/lightning';
import {Player} from '../entities/player';
import {AcolytesPants} from '../equipment/acolytespants';
import {AcolytesRobe} from '../equipment/acolytesrobe';
import {AcolytesShoes} from '../equipment/acolytesshoes';
import {BentStaff} from '../equipment/bentstaff';

import {CharacterClass} from './characterclass';

const NAME = 'Warlock';
const ICON = new Sprite(24, 700, 24, 26, undefined, undefined, undefined, 0xA020A0FF);
const SPRITE = new Sprite(416, 96, 16, 24, 2, true, undefined, 0xA020A0FF);
const DESC = 'Practitioners of the dark arts';
const DETAILS = [
  new Message('+2 Constitution, +2 Intelligence', Colors.LIGHT_GREEN),
  new Message('Demonic Gateway - teleport by dark magic', Colors.YELLOW)
];

export class Warlock extends CharacterClass {
  constructor() {
    super(NAME, ICON, DESC, DETAILS);
  }

  initPlayer(player: Player) {
    const game = player.game;

    player.class = this;
    player.sprite = SPRITE;
    player.talents.add(new Talent(player, new CurseAbility()));
    player.talents.add(new Talent(player, new LightningAbility()));
    player.talents.add(new Talent(player, new DemonicGatewayAbility()));
    player.equipment.add(new AcolytesRobe(game));
    player.equipment.add(new AcolytesPants(game));
    player.equipment.add(new AcolytesShoes(game));
    player.equipment.add(new BentStaff(game));
    player.constitution += 2;
    player.intelligence += 2;
  }
}