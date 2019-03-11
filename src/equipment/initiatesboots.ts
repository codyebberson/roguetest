import {Colors, Game, Message, Sprite} from 'wglt';

import {Equipment, EquipmentSlot} from './equipment';

const NAME = 'Initiate\'s Boots';
const SPRITE = new Sprite(640, 144, 16, 24, 1, false, undefined, 0xC0A080FF);
const TOOLTIPS = [
  new Message(NAME, Colors.WHITE),
  new Message('Item Level 1', Colors.YELLOW),
  new Message('Feet, Leather', Colors.WHITE),
  new Message('3 Armor', Colors.WHITE)
];

export class InitiatesBoots extends Equipment {
  constructor(game: Game, x?: number, y?: number) {
    super(game, x || 0, y || 0, NAME, SPRITE, EquipmentSlot.FEET);
    this.tooltipMessages = TOOLTIPS;
    this.bonusArmor = 3;
  }
}