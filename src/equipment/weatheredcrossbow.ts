import {Colors, Game, Message, Sprite} from 'wglt';

import {EquipmentSlot} from './equipment';
import { Weapon } from './weapon';

const NAME = 'Weathered Crossbow';
const SPRITE = new Sprite(896, 96, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
  new Message(NAME, Colors.WHITE),
  new Message('Item Level 1', Colors.YELLOW),
  new Message('Ranged Crossbow', Colors.WHITE),
  new Message('1-2 Damage', Colors.WHITE)
];

export class WeatheredCrossbow extends Weapon {
  constructor(game: Game, x?: number, y?: number) {
    super(game, x || 0, y || 0, NAME, SPRITE, EquipmentSlot.MAINHAND);
    this.tooltipMessages = TOOLTIPS;
    this.ranged = true;
    this.finesse = true;
  }
}