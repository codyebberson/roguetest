import {Colors, Game, Message, Sprite} from 'wglt';

import {Equipment, EquipmentSlot} from './equipment';

const NAME = 'Squire\'s Vest';
const SPRITE = new Sprite(608, 288, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
  new Message(NAME, Colors.WHITE),
  new Message('Item Level 1', Colors.YELLOW),
  new Message('Chest, Plate', Colors.WHITE),
  new Message('7 Armor', Colors.WHITE)
];

export class SquiresVest extends Equipment {
  constructor(game: Game, x?: number, y?: number) {
    super(game, x || 0, y || 0, NAME, SPRITE, EquipmentSlot.CHEST);
    this.tooltipMessages = TOOLTIPS;
    this.bonusArmor = 7;
  }
}