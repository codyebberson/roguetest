import {Colors, Game, Message, Sprite} from 'wglt';

import {Equipment, EquipmentSlot} from './equipment';

const NAME = 'BENT STAFF';
const SPRITE = new Sprite(640, 120, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
  new Message(NAME, Colors.WHITE),
  new Message('Item Level 1', Colors.YELLOW),
  new Message('Two-Hand Staff', Colors.WHITE),
  new Message('+2 Strength', Colors.LIGHT_GREEN)
];

export class BentStaff extends Equipment {
  constructor(game: Game, x?: number, y?: number) {
    super(game, x || 0, y || 0, NAME, SPRITE, EquipmentSlot.MAINHAND);
    this.tooltipMessages = TOOLTIPS;
    this.bonusStrength = 2;
  }
}